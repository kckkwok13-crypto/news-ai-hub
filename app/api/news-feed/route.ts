import { NextRequest, NextResponse } from 'next/server'

// ============ CONSTANTS ============
const RSS_SOURCES: Record<string, Array<{ url: string; source: string }>> = {
  finance: [
    { url: 'https://feeds.bloomberg.com/markets/news.rss', source: 'Bloomberg' },
    { url: 'https://feeds.marketwatch.com/marketwatch/topstories/', source: 'MarketWatch' },
    { url: 'https://www.investing.com/rss/news.rss', source: 'Investing.com' },
  ],
  crypto: [
    { url: 'https://cointelegraph.com/rss', source: 'CoinTelegraph' },
    { url: 'https://coindesk.com/arc/outboundfeeds/rss/', source: 'CoinDesk' },
    { url: 'https://cryptonews.com/feed/', source: 'Cryptonews' },
  ],
  business: [
    { url: 'https://feeds.bbciit.co.uk/news/business/rss.xml', source: 'BBC Business' },
    { url: 'https://feeds.reuters.com/reuters/businessNews', source: 'Reuters Business' },
    { url: 'https://www.skysports.com/rss/1233', source: 'Sky Sports Business' },
  ],
  technology: [
    { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge' },
    { url: 'https://feeds.arstechnica.com/arstechnica/index', source: 'Ars Technica' },
    { url: 'https://techcrunch.com/feed/', source: 'TechCrunch' },
  ],
  health: [
    { url: 'https://www.nhs.uk/rss/news/', source: 'NHS News' },
    { url: 'https://www.webmd.com/rss/news', source: 'WebMD' },
  ],
  gaming: [
    { url: 'https://www.gamesindustry.biz/feed', source: 'GamesIndustry.biz' },
    { url: 'https://kotaku.com/rss', source: 'Kotaku' },
    { url: 'https://www.polygon.com/rss/index.xml', source: 'Polygon' },
  ],
  food: [
    { url: 'https://www.seriouseats.com/rss', source: 'Serious Eats' },
    { url: 'https://www.bonappetit.com/feed/rss', source: 'Bon Appétit' },
  ],
  ai_art: [
    { url: 'https://venturebeat.com/ai/feed/', source: 'VentureBeat AI' },
    { url: 'https://www.artnews.com/feed/', source: 'ARTnews' },
  ],
  astronomy: [
    { url: 'https://www.space.com/feeds/hot/', source: 'Space.com' },
    { url: 'https://www.nasa.gov/rss/dyn/breaking_news.rss', source: 'NASA' },
  ],
  mystery: [
    { url: 'https://www.livescience.com/feed', source: 'Live Science' },
    { url: 'https://www.nature.com/news.rss', source: 'Nature' },
  ],
}

const DATA_JOURNALISM_SUBCATS: Record<string, Array<{ url: string; source: string }>> = {
  gdp: [
    { url: 'https://feeds.reuters.com/reuters/businessNews', source: 'Reuters' },
    { url: 'https://feeds.bbciit.co.uk/news/business/rss.xml', source: 'BBC Business' },
  ],
  digital: [
    { url: 'https://techcrunch.com/feed/', source: 'TechCrunch' },
    { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge' },
  ],
  demographics: [
    { url: 'https://www.livescience.com/feed', source: 'Live Science' },
    { url: 'https://www.nature.com/news.rss', source: 'Nature' },
  ],
  ai: [
    { url: 'https://venturebeat.com/ai/feed/', source: 'VentureBeat AI' },
  ],
  official: [
    { url: 'https://feeds.reuters.com/reuters/businessNews', source: 'Reuters' },
  ],
}

// ============ UTILITIES ============
function extractText(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'").trim()
}

function extractImage(itemXml: string): string | null {
  const patterns = [
    /<media:content[^>]*url=["']([^"']*)["']/i,
    /<media:thumbnail[^>]*url=["']([^"']*)["']/i,
    /<enclosure[^>]*url=["']([^"']*)["']/i,
    /<img[^>]*src=["']([^"']*)["']/i,
  ]
  for (const p of patterns) {
    const m = itemXml.match(p)
    if (m && m[1]) return m[1]
  }
  return null
}

// Translation with timeout protection
async function translateText(text: string, lang: string, timeoutMs = 8000): Promise<string> {
  if (!text || text.length < 2) return text
  
  const hasChinese = /[\u4e00-\u9fff]/.test(text)
  const isTargetChinese = lang === 'zh-CN' || lang === 'zh-TW'
  
  if ((isTargetChinese && hasChinese) || (!isTargetChinese && !hasChinese)) {
    return text
  }
  
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
    
    const targetLang = lang === 'en' ? 'en' : lang === 'zh-CN' ? 'zh-CN' : 'zh-TW'
    const fromLang = hasChinese ? 'zh' : 'en'
    
    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`, {
      signal: controller.signal
    })
    clearTimeout(timeoutId)
    
    if (!res.ok) throw new Error(`Translation API error: ${res.status}`)
    
    const data = await res.json()
    return data[0]?.[0]?.[0] || text
  } catch (e: any) {
    console.warn('[translateText] Failed, returning original:', e.message)
    return text
  }
}

// Safe fetch with timeout
async function safeFetch(url: string, timeoutMs = 10000): Promise<string | null> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
    const res = await fetch(url, { signal: controller.signal })
    clearTimeout(timeoutId)
    
    if (!res.ok) return null
    return await res.text()
  } catch {
    return null
  }
}

// ============ HANDLERS ============
async function handleTravelCategory(lang: string, cityFilter: string) {
  const TRAVEL_GUIDES: Record<string, any> = {
    tokyo: {
      city: 'Tokyo', city_zh: '東京', emoji: '🗼',
      description_zh: '傳統與現代完美融合嘅國際大都會',
      best_season: '春季 (3-5月) 同秋季 (9-11月)',
      avg_temp: '16°C', tips: ['建議購買 Suica 卡方便搭地鐵', '免稅店購物需帶護照'],
      areas: [
        {
          name: 'Shibuya & Harajuku', name_zh: '澀谷 & 原宿', description_zh: '青少年文化同時尚中心',
          places: [
            { name: 'Shibuya Crossing', name_zh: '澀谷十字路口', description_zh: '世界上最繁忙嘅行人十字路口', type: 'attraction', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800', address: 'Shibuya, Tokyo', hours: '24小時', rating: '4.7', review_count: '52,389', best_time: '黃昏時分', duration: '30分鐘', cost_level: 'free', transit: 'JR山手線 澀谷站', tips: ['建議喺澀谷站陽台睇全景', '附近商場可以Shopping'], tags: ['地標', '夜景', '必去'] },
            { name: 'Meiji Shrine', name_zh: '明治神宮', description_zh: '供奉明治天皇嘅神社，周圍係一片寧靜嘅森林', type: 'attraction', image: 'https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=800', address: '1-1 Yoyogikamizonocho, Shibuya', hours: '日出至日落', rating: '4.8', review_count: '41,205', best_time: '清晨', duration: '1-2小時', cost_level: 'free', transit: 'JR山手線 原宿站', tips: ['淨心之旅，建議早起', '入口處有洗手禮'], tags: ['神社', '寧靜', '文化'] },
          ]
        },
        {
          name: 'Asakusa & Ueno', name_zh: '淺草 & 上野', description_zh: '傳統東京代表寺院同市場',
          places: [
            { name: 'Senso-ji Temple', name_zh: '淺草寺', description_zh: '東京最古老嘅佛教寺廟，标志係雷門大燈籠', type: 'attraction', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', address: '2-3-1 Asakusa, Taito', hours: '6:00-17:00', rating: '4.8', review_count: '67,842', best_time: '早上', duration: '1-2小時', cost_level: 'free', transit: 'Metro 淺草站', tips: ['雷門影相要排隊', '抽籤好準!', '人形燒好食'], tags: ['寺廟', '歷史', '必去'] },
          ]
        }
      ]
    },
    paris: {
      city: 'Paris', city_zh: '巴黎', emoji: '🗼',
      description_zh: '浪漫之都，藝術與時尚嘅殿堂',
      best_season: '春季 (4-6月) 同秋季 (9-11月)',
      avg_temp: '12°C', tips: ['地鐵係最方便嘅交通工具', '博物館建議網上預約'],
      areas: [
        { name: 'Eiffel Tower Area', name_zh: '艾菲爾鐵塔區', description_zh: '巴黎最標誌性嘅區域', places: [
          { name: 'Eiffel Tower', name_zh: '艾菲爾鐵塔', description_zh: '巴黎鐵塔，浪漫嘅象徵', type: 'attraction', image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800', address: 'Champ de Mars, Paris', hours: '9:30-23:45', rating: '4.7', review_count: '89,234', best_time: '日落', duration: '2-3小時', cost_level: 'high', transit: '地鐵Bir-Hakeim站', tips: ['建議黃昏去睇日落', '可以坐電梯或行樓梯'], tags: ['地標', '浪漫', '必去'] },
        ]}]
    },
    seoul: {
      city: 'Seoul', city_zh: '首爾', emoji: '🏯',
      description_zh: '傳統與現代完美融合嘅韓流之都',
      best_season: '春季 (3-5月) 同秋季 (9-11月)',
      avg_temp: '12°C', tips: ['T-money 卡搭地鐵好方便', 'WiFi 普遍覆蓋良好'],
      areas: [{ name: 'Myeongdong', name_zh: '明洞', description_zh: '購物與美食天堂', places: [
        { name: 'Myeongdong Shopping Street', name_zh: '明洞購物街', description_zh: '首爾最繁華購物區，化妝品天堂', type: 'shopping', image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800', address: 'Myeongdong', hours: '10:00-22:00', rating: '4.4', review_count: '56,789', best_time: '下午至夜晚', duration: '3-4小時', cost_level: 'medium', transit: 'Metro 明洞站', tips: ['化妝品最平', '地下商場好大', '街頭美食多'], tags: ['購物', '化妝品', '美食'] },
      ]}]
    }
  }

  const citySummaries = {
    tokyo: { emoji: '🗼', name_zh: '東京', desc: '傳統與現代完美融合', places: 12 },
    paris: { emoji: '🗼', name_zh: '巴黎', desc: '浪漫與藝術之都', places: 6 },
    seoul: { emoji: '🏯', name_zh: '首爾', desc: 'K-pop與傳統文化', places: 4 },
  }

  const travelItems: any[] = []
  const now = new Date().toISOString()

  for (const [cityId, cityData] of Object.entries(TRAVEL_GUIDES)) {
    if (cityFilter !== 'all' && cityId !== cityFilter) continue

    for (const area of cityData.areas) {
      for (const place of area.places) {
        const relatedPlaces = cityData.areas
          .flatMap((a: any) => a.places)
          .filter((p: any) => p.name !== place.name)
          .slice(0, 3)
          .map((p: any) => ({ name: p.name, name_zh: p.name_zh, type: p.type }))

        travelItems.push({
          id: `travel-${cityId}-${place.name_zh.replace(/\s/g, '-')}`,
          title: place.name_zh,
          title_translated: place.name_zh,
          desc: place.description_zh + '。最佳遊覽時間：' + (place.best_time || '建議停留2-3小時') + '。評分：' + (place.rating || '4.5') + '/5.0。',
          desc_translated: place.description_zh,
          translated: true,
          link: 'https://www.google.com/search?q=' + encodeURIComponent(place.name_zh + ' ' + cityData.city_zh),
          pubDate: now,
          source: cityData.city_zh + ' · ' + area.name_zh,
          img: true,
          img_url: place.image,
          emoji: cityData.emoji,
          name: place.name_zh,
          name_zh: place.name_zh,
          name_en: place.name,
          city: cityData.city_zh,
          city_en: cityData.city,
          city_id: cityId,
          area: area.name_zh,
          best_time: place.best_time || '建議停留2-3小時',
          duration: place.duration || '2-3小時',
          rating: place.rating || '4.5',
          review_count: place.review_count || '10,000+',
          address: place.address || '',
          hours: place.hours || '',
          price_range: place.price_range || '',
          cost_level: place.cost_level || 'medium',
          transit: place.transit || '',
          type: place.type || 'attraction',
          tags: place.tags || [],
          tips: place.tips || [],
          related_places: relatedPlaces,
          blog_content: place.description_zh + '\n\n遊覽建議：\n' + (place.tips || []).map((t: string) => '• ' + t).join('\n'),
          city_emoji: cityData.emoji,
          city_description: cityData.description_zh,
          best_season: cityData.best_season,
          avg_temp: cityData.avg_temp,
        })
      }
    }
  }

  return NextResponse.json({
    success: true,
    category: 'travel',
    items: travelItems,
    isTravelGuide: true,
    citySummaries,
    placeTypes: ['attraction', 'food', 'shopping', 'nightlife', 'nature'],
    timestamp: Date.now()
  })
}

async function handleDataJournalismCategory(sub: string, lang: string) {
  const subcategoryLabels: Record<string, any> = {
    gdp: { name: 'GDP & Economy', name_zh: 'GDP與經濟', emoji: '📈', description_zh: '經濟指標、GDP增長、貿易統計' },
    digital: { name: 'Digital Economy', name_zh: '數碼經濟', emoji: '💻', description_zh: '互聯網、電子商務、AI市場、網絡安全數據' },
    demographics: { name: 'Demographics', name_zh: '人口統計', emoji: '👥', description_zh: '人口、遷移、出生率、人口統計' },
    ai: { name: 'AI & Technology', name_zh: 'AI與科技', emoji: '🤖', description_zh: 'AI統計、機器學習、科技應用' },
    official: { name: 'Official Statistics', name_zh: '官方統計', emoji: '🏛️', description_zh: '政府統計局、官方數據發布' },
  }

  const subSources = DATA_JOURNALISM_SUBCATS[sub] || DATA_JOURNALISM_SUBCATS.gdp
  const subLabel = subcategoryLabels[sub] || subcategoryLabels.gdp
  const now = Date.now()

  const results = await Promise.allSettled(
    subSources.map(async (source) => {
      const xml = await safeFetch(source.url, 10000)
      if (!xml) return []

      const itemMatches = xml.match(/<item[^>]*>([\s\S]*?)<\/item>/gi) || []
      return itemMatches.slice(0, 10).map((itemXml: string) => {
        const title = extractText(itemXml.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '')
        const desc = extractText(itemXml.match(/<description>([\s\S]*?)<\/description>/i)?.[1] || '').slice(0, 200)
        const link = extractText(itemXml.match(/<link>([\s\S]*?)<\/link>/i)?.[1] || '')
        const pubDateStr = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/i)?.[1] || ''
        const pubTimestamp = pubDateStr ? (isNaN(new Date(pubDateStr).getTime()) ? 0 : new Date(pubDateStr).getTime()) : 0
        const img = extractImage(itemXml)

        return { id: Buffer.from(link).toString('base64').slice(0, 16), title, desc, link, pubDate: pubDateStr, pubTimestamp, img: !!img, img_url: img || '', source: source.source }
      }).filter((item: any) => item.title && item.link)
    })
  )

  const allItems = results.flatMap(r => r.status === 'fulfilled' ? r.value : []).sort((a: any, b: any) => b.pubTimestamp - a.pubTimestamp).slice(0, 20)

  // Translate only first 8 items
  const toTranslate = allItems.slice(0, 8)
  const translated = await Promise.allSettled(toTranslate.map(async (item: any) => {
    const isChineseSource = /[\u4e00-\u9fff]/.test(item.title)
    const needsTranslation = lang !== 'en' && !isChineseSource

    if (needsTranslation) {
      const [tTitle, tDesc] = await Promise.allSettled([
        translateText(item.title, lang, 5000),
        translateText(item.desc, lang, 5000),
      ])
      return {
        ...item,
        title_translated: tTitle.status === 'fulfilled' ? tTitle.value : item.title,
        desc_translated: tDesc.status === 'fulfilled' ? tDesc.value : item.desc,
        translated: true
      }
    }
    return { ...item, title_translated: item.title, desc_translated: item.desc, translated: false }
  }))

  const translatedItems = translated.map(t => t.status === 'fulfilled' ? t.value : null).filter(Boolean)
  const restItems = allItems.slice(8).map(item => ({ ...item, title_translated: item.title, desc_translated: item.desc, translated: false }))

  return NextResponse.json({
    success: true,
    category: 'data_journalism',
    subcategory: sub,
    subcategoryLabel: subLabel,
    subcategories: Object.entries(DATA_JOURNALISM_SUBCATS).map(([id, sources]) => ({
      id, ...subcategoryLabels[id], sourceCount: (sources as any[]).length
    })),
    items: [...translatedItems, ...restItems].slice(0, 20),
    isDataJournalism: true,
    timestamp: now,
  })
}

async function handleNewsCategory(category: string, lang: string) {
  const sources = RSS_SOURCES[category] || RSS_SOURCES.world || []
  if (sources.length === 0) {
    return NextResponse.json({ success: true, category, items: [], timestamp: Date.now() })
  }

  const MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000
  const now = Date.now()

  const results = await Promise.allSettled(
    sources.map(async (source) => {
      const xml = await safeFetch(source.url, 10000)
      if (!xml) return []

      const itemMatches = xml.match(/<item[^>]*>([\s\S]*?)<\/item>/gi) || []
      const sourceItems: any[] = []

      for (const itemXml of itemMatches.slice(0, 15)) {
        const title = extractText(itemXml.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '')
        const desc = extractText(itemXml.match(/<description>([\s\S]*?)<\/description>/i)?.[1] || '').slice(0, 200)
        const link = extractText(itemXml.match(/<link>([\s\S]*?)<\/link>/i)?.[1] || '')
        const pubDateStr = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/i)?.[1] || ''
        
        let pubTimestamp = 0
        if (pubDateStr) {
          const parsedDate = new Date(pubDateStr)
          pubTimestamp = isNaN(parsedDate.getTime()) ? 0 : parsedDate.getTime()
        }

        if (pubTimestamp !== 0 && (now - pubTimestamp) > MAX_AGE_MS) continue

        const img = extractImage(itemXml)

        if (title && link) {
          sourceItems.push({
            id: Buffer.from(link).toString('base64').slice(0, 16),
            title, desc, link, pubDate: pubDateStr, pubTimestamp,
            img: !!img, img_url: img || '', source: source.source,
          })
        }
      }
      return sourceItems
    })
  )

  const allItems = results.flatMap(r => r.status === 'fulfilled' ? r.value : []).sort((a, b) => b.pubTimestamp - a.pubTimestamp)
  const itemsToTranslate = allItems.slice(0, 12)
  const remainingItems = allItems.slice(12, 27)

  // Translate with timeout protection
  const translated = await Promise.allSettled(itemsToTranslate.map(async (item) => {
    const isChineseSource = /[\u4e00-\u9fff]/.test(item.title)
    let needsTranslation = false

    if (lang === 'en') needsTranslation = isChineseSource
    else if (lang === 'zh-TW' || lang === 'zh-CN') needsTranslation = !isChineseSource

    if (needsTranslation) {
      const [tTitle, tDesc] = await Promise.allSettled([
        translateText(item.title, lang, 6000),
        translateText(item.desc, lang, 6000),
      ])
      return {
        ...item,
        title_translated: tTitle.status === 'fulfilled' ? tTitle.value : item.title,
        desc_translated: tDesc.status === 'fulfilled' ? tDesc.value : item.desc,
        translated: true
      }
    }
    return { ...item, title_translated: item.title, desc_translated: item.desc, translated: false }
  }))

  const translatedItems = translated.map(t => t.status === 'fulfilled' ? t.value : null).filter(Boolean)
  const finalRemaining = remainingItems.map(item => ({ ...item, title_translated: item.title, desc_translated: item.desc, translated: false }))

  // Sort: newest 5 first, then shuffle rest
  const combined = [...translatedItems, ...finalRemaining]
  const newestFive = combined.slice(0, 5)
  const others = combined.slice(5).sort(() => Math.random() - 0.5)
  const finalItems = [...newestFive, ...others].slice(0, 25)

  return NextResponse.json({
    success: true,
    category,
    items: finalItems,
    sources: sources.length,
    timestamp: now,
  })
}

// ============ MAIN ROUTE ============
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category') || 'finance'
    const lang = searchParams.get('lang') || 'zh-TW'
    const city = searchParams.get('city') || 'all'

    if (category === 'travel') {
      return handleTravelCategory(lang, city)
    }

    if (category === 'data_journalism') {
      const sub = searchParams.get('sub') || 'gdp'
      return handleDataJournalismCategory(sub, lang)
    }

    return handleNewsCategory(category, lang)

  } catch (err: any) {
    console.error('[news-feed] Error:', err)
    return NextResponse.json(
      { success: false, error: err as Error || 'Failed to fetch news' },
      { status: 500 }
    )
  }
}

export const runtime = 'nodejs'