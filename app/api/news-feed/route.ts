import { NextRequest, NextResponse } from 'next/server'

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
    { url: 'https://feeds.bbci.co.uk/news/business/rss.xml', source: 'BBC Business' },
    { url: 'https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=100003114', source: 'CNBC' },
  ],
  technology: [
    { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge' },
    { url: 'https://feeds.arstechnica.com/arstechnica/index', source: 'Ars Technica' },
    { url: 'https://techcrunch.com/feed/', source: 'TechCrunch' },
  ],
  health: [
    { url: 'https://feeds.bbci.co.uk/news/health/rss.xml', source: 'BBC Health' },
    { url: 'https://www.sciencedaily.com/rss/health_medicine.xml', source: 'ScienceDaily Health' },
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
    { url: 'https://hyperallergic.com/rss/', source: 'Hyperallergic' },
  ],
  art: [
    { url: 'https://www.artforum.com/rss', source: 'Artforum' },
    { url: 'https://www.artnews.com/feed/', source: 'ARTnews' },
    { url: 'https://hyperallergic.com/rss/', source: 'Hyperallergic' },
    { url: 'https://www.theartnewspaper.com/rss', source: 'The Art Newspaper' },
  ],
  astronomy: [
    { url: 'https://www.space.com/feeds/hot/', source: 'Space.com' },
    { url: 'https://www.nasa.gov/rss/dyn/breaking_news.rss', source: 'NASA' },
  ],
  mystery: [
    { url: 'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml', source: 'BBC Science' },
    { url: 'https://www.sciencedaily.com/rss/top.xml', source: 'ScienceDaily' },
    { url: 'https://www.livescience.com/feeds/hot/', source: 'Live Science' },
  ],
}

const DATA_JOURNALISM_SUBCATS: Record<string, Array<{ url: string; source: string }>> = {
  gdp: [
    { url: 'https://feeds.reuters.com/reuters/businessNews', source: 'Reuters' },
    { url: 'https://feeds.bbci.co.uk/news/business/rss.xml', source: 'BBC Business' },
  ],
  digital: [
    { url: 'https://techcrunch.com/feed/', source: 'TechCrunch' },
    { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge' },
  ],
  demographics: [
    { url: 'https://www.sciencedaily.com/rss/top.xml', source: 'ScienceDaily' },
    { url: 'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml', source: 'BBC Science' },
  ],
  ai: [
    { url: 'https://venturebeat.com/ai/feed/', source: 'VentureBeat AI' },
  ],
  official: [
    { url: 'https://feeds.reuters.com/reuters/businessNews', source: 'Reuters' },
  ],
}

// ============ TRAVEL DATA ============
const TRAVEL_COUNTRIES: Record<string, any> = {
  japan: {
    id: 'japan', name: 'Japan', name_zh: '日本', emoji: '🗾',
    description_zh: '傳統與現代完美融合嘅國度',
    best_season: '春季 (3-5月) 同秋季 (9-11月)',
    avg_temp: '16°C',
    cities: [
      {
        id: 'tokyo', name: 'Tokyo', name_zh: '東京', emoji: '🗼',
        description_zh: '傳統與現代完美融合嘅國際大都會',
        areas: [
          {
            name: 'Shibuya & Harajuku', name_zh: '澀谷 & 原宿',
            places: [
              { name: 'Shibuya Crossing', name_zh: '澀谷十字路口', description_zh: '世界上最繁忙嘅行人十字路口', type: 'attraction', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800', address: 'Shibuya, Tokyo', hours: '24小時', rating: '4.7', review_count: '52,389', best_time: '黃昏時分', duration: '30分鐘', cost_level: 'free', transit: 'JR山手線 澀谷站', tips: ['建議喺澀谷站陽台睇全景', '附近商場可以Shopping'], tags: ['地標', '夜景', '必去'] },
              { name: 'Meiji Shrine', name_zh: '明治神宮', description_zh: '供奉明治天皇嘅神社，周圍係一片寧靜嘅森林', type: 'attraction', image: 'https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=800', address: '1-1 Yoyogikamizonocho, Shibuya', hours: '日出至日落', rating: '4.8', review_count: '41,205', best_time: '清晨', duration: '1-2小時', cost_level: 'free', transit: 'JR山手線 原宿站', tips: ['淨心之旅，建議早起', '入口處有洗手禮'], tags: ['神社', '寧靜', '文化'] },
            ]
          },
          {
            name: 'Asakusa & Ueno', name_zh: '淺草 & 上野',
            places: [
              { name: 'Senso-ji Temple', name_zh: '淺草寺', description_zh: '東京最古老嘅佛教寺廟，标志係雷門大燈籠', type: 'attraction', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', address: '2-3-1 Asakusa, Taito', hours: '6:00-17:00', rating: '4.8', review_count: '67,842', best_time: '早上', duration: '1-2小時', cost_level: 'free', transit: 'Metro 淺草站', tips: ['雷門影相要排隊', '抽籤好準!', '人形燒好食'], tags: ['寺廟', '歷史', '必去'] },
            ]
          }
        ]
      },
      {
        id: 'osaka', name: 'Osaka', name_zh: '大阪', emoji: '🏯',
        description_zh: '美食之都，章魚燒同大阪燒嘅發源地',
        areas: [
          {
            name: 'Namba & Dotonbori', name_zh: '難波 & 道頓堀',
            places: [
              { name: 'Dotonbori Canal', name_zh: '道頓堀運河', description_zh: '大阪最繁華嘅夜景區域，著名嘅蟹道樂就喺呢度', type: 'attraction', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', address: 'Dotonbori, Chuo, Osaka', hours: '24小時', rating: '4.6', review_count: '45,123', best_time: '夜晚', duration: '1-2小時', cost_level: 'free', transit: 'Metro 難波站', tips: ['夜晚去影相最靚', '可以坐船遊河'], tags: ['夜景', '美食', '打卡'] },
            ]
          }
        ]
      },
      {
        id: 'kyoto', name: 'Kyoto', name_zh: '京都', emoji: '⛩️',
        description_zh: '千年古都，保留住日本傳統文化嘅精髓',
        areas: [
          {
            name: 'Arashiyama', name_zh: '嵐山',
            places: [
              { name: 'Arashiyama Bamboo Grove', name_zh: '嵐山竹林', description_zh: '壯觀嘅竹林小徑，仿佛置身另一個世界', type: 'attraction', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', address: 'Arashiyama, Kyoto', hours: '24小時', rating: '4.7', review_count: '38,901', best_time: '清晨', duration: '1-2小時', cost_level: 'free', transit: 'JR山手線 嵐山站', tips: ['建議清晨去避開人潮', '附近有天龍寺'], tags: ['自然', '打卡', '寧靜'] },
            ]
          }
        ]
      }
    ]
  },
  france: {
    id: 'france', name: 'France', name_zh: '法國', emoji: '🗼',
    description_zh: '浪漫之都，藝術與時尚嘅殿堂',
    best_season: '春季 (4-6月) 同秋季 (9-11月)',
    avg_temp: '12°C',
    cities: [
      {
        id: 'paris', name: 'Paris', name_zh: '巴黎', emoji: '🗼',
        description_zh: '浪漫之都，藝術與時尚嘅殿堂',
        areas: [
          {
            name: 'Eiffel Tower Area', name_zh: '艾菲爾鐵塔區',
            places: [
              { name: 'Eiffel Tower', name_zh: '艾菲爾鐵塔', description_zh: '巴黎鐵塔，浪漫嘅象徵', type: 'attraction', image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800', address: 'Champ de Mars, Paris', hours: '9:30-23:45', rating: '4.7', review_count: '89,234', best_time: '日落', duration: '2-3小時', cost_level: 'high', transit: '地鐵Bir-Hakeim站', tips: ['建議黃昏去睇日落', '可以坐電梯或行樓梯'], tags: ['地標', '浪漫', '必去'] },
            ]
          }
        ]
      }
    ]
  },
  korea: {
    id: 'korea', name: 'South Korea', name_zh: '南韓', emoji: '🏯',
    description_zh: 'K-pop與傳統文化完美融合',
    best_season: '春季 (3-5月) 同秋季 (9-11月)',
    avg_temp: '12°C',
    cities: [
      {
        id: 'seoul', name: 'Seoul', name_zh: '首爾', emoji: '🏯',
        description_zh: '傳統與現代完美融合嘅韓流之都',
        areas: [
          {
            name: 'Myeongdong', name_zh: '明洞',
            places: [
              { name: 'Myeongdong Shopping Street', name_zh: '明洞購物街', description_zh: '首爾最繁華購物區，化妝品天堂', type: 'shopping', image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800', address: 'Myeongdong', hours: '10:00-22:00', rating: '4.4', review_count: '56,789', best_time: '下午至夜晚', duration: '3-4小時', cost_level: 'medium', transit: 'Metro 明洞站', tips: ['化妝品最平', '地下商場好大', '街頭美食多'], tags: ['購物', '化妝品', '美食'] },
            ]
          }
        ]
      }
    ]
  },
  thailand: {
    id: 'thailand', name: 'Thailand', name_zh: '泰國', emoji: '🏝️',
    description_zh: '微笑之都，佛寺海灘與美食天堂',
    best_season: '11月-4月（涼季）',
    avg_temp: '28°C',
    cities: [
      {
        id: 'bangkok', name: 'Bangkok', name_zh: '曼谷', emoji: '🛕',
        description_zh: '佛教之都，融合古老寺廟與現代都市',
        areas: [
          {
            name: 'Old City & Rattanakosin', name_zh: '舊城區',
            places: [
              { name: 'Grand Palace', name_zh: '大皇宮', description_zh: '泰國皇家宮殿，金碧輝煌嘅建築群', type: 'attraction', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800', address: 'Na Phra Lan Rd, Grand Palace', hours: '8:30-16:30', rating: '4.6', review_count: '62,341', best_time: '上午', duration: '2-3小時', cost_level: 'medium', transit: 'Chao Phraya Express船', tips: ['衣著要莊重', '門票包含玉佛寺'], tags: ['寺廟', '歷史', '打卡'] },
            ]
          }
        ]
      }
    ]
  }
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

async function translateText(text: string, lang: string, timeoutMs = 10000): Promise<string> {
  if (!text || text.length < 2) return text
  const hasChinese = /[\u4e00-\u9fff]/.test(text)
  const isTargetChinese = lang === 'zh-CN' || lang === 'zh-TW'
  if ((isTargetChinese && hasChinese) || (!isTargetChinese && !hasChinese)) return text
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
    const targetLang = lang === 'en' ? 'en' : lang === 'zh-CN' ? 'zh-CN' : 'zh-TW'
    const fromLang = hasChinese ? 'zh' : 'en'
    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`, { signal: controller.signal })
    clearTimeout(timeoutId)
    if (res.ok) {
      const data = await res.json()
      const translated = data[0]?.[0]?.[0]
      if (translated && translated !== text) return translated
    }
  } catch {}
  const apiKey = process.env.OPENROUTER_API_KEY
  if (apiKey) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
      const targetLangLabel = lang === 'en' ? 'English' : lang === 'zh-CN' ? 'Simplified Chinese' : 'Traditional Chinese with Cantonese style'
      const prompt = `Translate the following text to ${targetLangLabel}. Only output the translation, nothing else.\n\nText: ${text}`
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json', 'HTTP-Referer': 'https://newskingdom.store' },
        body: JSON.stringify({ model: 'google/gemini-2.0-flash-001', messages: [{ role: 'user', content: prompt }], max_tokens: 500 }),
        signal: controller.signal
      })
      clearTimeout(timeoutId)
      if (res.ok) {
        const data = await res.json()
        const translated = data.choices?.[0]?.message?.content?.trim()
        if (translated && translated !== text) return translated
      }
    } catch {}
  }
  return text
}

async function safeFetch(url: string, timeoutMs = 10000): Promise<string | null> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
    const res = await fetch(url, { signal: controller.signal })
    clearTimeout(timeoutId)
    if (!res.ok) return null
    return await res.text()
  } catch { return null }
}

// ============ HANDLERS ============
async function handleTravelCategory(lang: string, countryFilter: string, cityFilter: string) {
  const now = new Date().toISOString()

  // Build country summaries for the selector
  const countrySummaries = Object.entries(TRAVEL_COUNTRIES).map(([id, data]: [string, any]) => ({
    id,
    name_zh: data.name_zh,
    name: data.name,
    emoji: data.emoji,
    cityCount: data.cities.length,
    placeCount: data.cities.reduce((acc: number, c: any) => acc + c.areas.reduce((a: number, ar: any) => a + ar.places.length, 0), 0),
  }))

  // Also provide flat citySummaries for backward compatibility
  const citySummaries = Object.values(TRAVEL_COUNTRIES).flatMap((country: any) =>
    country.cities.map((city: any) => ({
      id: city.id,
      name_zh: city.name_zh,
      name: city.name,
      emoji: city.emoji,
      country_id: country.id,
      country_zh: country.name_zh,
      areaCount: city.areas.length,
      placeCount: city.areas.reduce((acc: number, ar: any) => acc + ar.places.length, 0),
    }))
  )

  const travelItems: any[] = []

  for (const [countryId, countryData] of Object.entries(TRAVEL_COUNTRIES)) {
    if (countryFilter !== 'all' && countryId !== countryFilter) continue

    for (const city of countryData.cities) {
      if (cityFilter !== 'all' && city.id !== cityFilter) continue

      for (const area of city.areas) {
        for (const place of area.places) {
          const relatedPlaces = Object.values(TRAVEL_COUNTRIES)
            .flatMap((c: any) => c.cities.flatMap((ci: any) => ci.areas.flatMap((ar: any) => ar.places)))
            .filter((p: any) => p.name !== place.name)
            .slice(0, 3)
            .map((p: any) => ({ name: p.name, name_zh: p.name_zh, type: p.type }))

          travelItems.push({
            id: `travel-${countryId}-${city.id}-${place.name_zh.replace(/\s/g, '-')}`,
            title: place.name_zh,
            title_translated: place.name_zh,
            desc: place.description_zh + '。最佳遊覽時間：' + (place.best_time || '建議停留2-3小時') + '。評分：' + (place.rating || '4.5') + '/5.0。',
            desc_translated: place.description_zh,
            translated: true,
            link: 'https://www.google.com/search?q=' + encodeURIComponent(place.name_zh + ' ' + city.name_zh),
            pubDate: now,
            source: countryData.name_zh + ' · ' + city.name_zh + ' · ' + area.name_zh,
            img: true,
            img_url: place.image,
            emoji: city.emoji,
            name: place.name_zh,
            name_zh: place.name_zh,
            name_en: place.name,
            city: city.name_zh,
            city_en: city.name,
            city_id: city.id,
            city_emoji: city.emoji,
            city_description: city.description_zh,
            area: area.name_zh,
            area_zh: area.name_zh,
            country: countryData.name_zh,
            country_id: countryId,
            country_zh: countryData.name_zh,
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
            blog_content: place.description_zh + '\n\n遊覽建議：\n' + (place.tips || []).map((t: string) => '• ' + t).join('\n'),
            country_emoji: countryData.emoji,
            best_season: countryData.best_season,
            avg_temp: countryData.avg_temp,
            related_places: relatedPlaces,
          })
        }
      }
    }
  }

  const placeTypes = ['attraction', 'food', 'shopping', 'nightlife', 'nature']

  return NextResponse.json({
    success: true,
    category: 'travel',
    items: travelItems,
    isTravelGuide: true,
    countrySummaries,
    citySummaries,
    placeTypes,
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

  const toTranslate = allItems.slice(0, 8)
  const translated = await Promise.allSettled(toTranslate.map(async (item: any) => {
    const isChineseSource = /[\u4e00-\u9fff]/.test(item.title)
    const needsTranslation = lang !== 'en' && !isChineseSource
    if (needsTranslation) {
      const [tTitle, tDesc] = await Promise.allSettled([
        translateText(item.title, lang, 8000),
        translateText(item.desc, lang, 8000),
      ])
      return { ...item, title_translated: tTitle.status === 'fulfilled' ? tTitle.value : item.title, desc_translated: tDesc.status === 'fulfilled' ? tDesc.value : item.desc, translated: true }
    }
    return { ...item, title_translated: item.title, desc_translated: item.desc, translated: false }
  }))

  const translatedItems = translated.map(t => t.status === 'fulfilled' ? t.value : null).filter(Boolean)
  const restItems = allItems.slice(8).map(item => ({ ...item, title_translated: item.title, desc_translated: item.desc, translated: false }))

  return NextResponse.json({
    success: true, category: 'data_journalism', subcategory: sub, subcategoryLabel: subLabel,
    subcategories: Object.entries(DATA_JOURNALISM_SUBCATS).map(([id, sources]) => ({ id, ...subcategoryLabels[id], sourceCount: (sources as any[]).length })),
    items: [...translatedItems, ...restItems].slice(0, 20),
    isDataJournalism: true, timestamp: now,
  })
}

async function handleNewsCategory(category: string, lang: string) {
  const sources = RSS_SOURCES[category] || []
  if (sources.length === 0) return NextResponse.json({ success: true, category, items: [], timestamp: Date.now() })

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
        if (pubDateStr) { const pd = new Date(pubDateStr); pubTimestamp = isNaN(pd.getTime()) ? 0 : pd.getTime() }
        if (pubTimestamp !== 0 && (now - pubTimestamp) > MAX_AGE_MS) continue
        const img = extractImage(itemXml)
        if (title && link) sourceItems.push({ id: Buffer.from(link).toString('base64').slice(0, 16), title, desc, link, pubDate: pubDateStr, pubTimestamp, img: !!img, img_url: img || '', source: source.source })
      }
      return sourceItems
    })
  )

  const allItems = results.flatMap(r => r.status === 'fulfilled' ? r.value : []).sort((a, b) => b.pubTimestamp - a.pubTimestamp)
  const itemsToTranslate = allItems.slice(0, 12)
  const remainingItems = allItems.slice(12, 27)

  const translated = await Promise.allSettled(itemsToTranslate.map(async (item) => {
    const isChineseSource = /[\u4e00-\u9fff]/.test(item.title)
    let needsTranslation = false
    if (lang === 'en') needsTranslation = isChineseSource
    else if (lang === 'zh-TW' || lang === 'zh-CN') needsTranslation = !isChineseSource
    if (needsTranslation) {
      const [tTitle, tDesc] = await Promise.allSettled([translateText(item.title, lang, 10000), translateText(item.desc, lang, 10000)])
      return { ...item, title_translated: tTitle.status === 'fulfilled' ? tTitle.value : item.title, desc_translated: tDesc.status === 'fulfilled' ? tDesc.value : item.desc, translated: true }
    }
    return { ...item, title_translated: item.title, desc_translated: item.desc, translated: false }
  }))

  const translatedItems = translated.map(t => t.status === 'fulfilled' ? t.value : null).filter(Boolean)
  const finalRemaining = remainingItems.map(item => ({ ...item, title_translated: item.title, desc_translated: item.desc, translated: false }))
  const combined = [...translatedItems, ...finalRemaining]
  const newestFive = combined.slice(0, 5)
  const others = combined.slice(5).sort(() => Math.random() - 0.5)
  const finalItems = [...newestFive, ...others].slice(0, 25)

  return NextResponse.json({ success: true, category, items: finalItems, sources: sources.length, timestamp: now })
}

// ============ MAIN ROUTE ============
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category') || 'finance'
    const lang = searchParams.get('lang') || 'zh-TW'
    const country = searchParams.get('country') || 'all'
    const city = searchParams.get('city') || 'all'

    if (category === 'travel') return handleTravelCategory(lang, country, city)
    if (category === 'data_journalism') {
      const sub = searchParams.get('sub') || 'gdp'
      return handleDataJournalismCategory(sub, lang)
    }
    return handleNewsCategory(category, lang)
  } catch (err: any) {
    console.error('[news-feed] Error:', err)
    return NextResponse.json({ success: false, error: 'Failed to fetch news' }, { status: 500 })
  }
}

export const runtime = 'nodejs'
