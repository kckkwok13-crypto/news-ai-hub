import { NextRequest, NextResponse } from 'next/server'

// RSS sources by category
const RSS_SOURCES: Record<string, {url: string, source: string}[]> = {
  finance: [
    { url: 'https://finance.yahoo.com/news/rssindex', source: 'Yahoo Finance' },
    { url: 'http://feeds.marketwatch.com/marketwatch/topstories/', source: 'MarketWatch' },
    { url: 'https://www.investing.com/rss/news_25.rss', source: 'Investing.com' },
  ],
  crypto: [
    { url: 'https://cointelegraph.com/rss', source: 'CoinTelegraph' },
    { url: 'https://www.coindesk.com/arc/outboundfeeds/rss/', source: 'CoinDesk' },
    { url: 'https://cryptopanic.com/news/rss/', source: 'CryptoPanic' },
  ],
  business: [
    { url: 'https://www.reutersagency.com/feed/?taxonomy=best-topics&post_type=best', source: 'Reuters' },
    { url: 'https://www.investing.com/rss/news.rss', source: 'Investing.com' },
  ],
  technology: [
    { url: 'https://techcrunch.com/feed/', source: 'TechCrunch' },
    { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge' },
    { url: 'https://www.wired.com/feed/rss', source: 'Wired' },
  ],
  health: [
    { url: 'https://www.medicalnewstoday.com/rss', source: 'Medical News Today' },
    { url: 'https://health.google/news.rss', source: 'Google Health' },
  ],
  gaming: [
    { url: 'https://www.gamespot.com/feed/', source: 'GameSpot' },
    { url: 'https://kotaku.com/rss', source: 'Kotaku' },
  ],
  food: [
    { url: 'https://www.epicurious.com/rss/ek.xml', source: 'Epicurious' },
    { url: 'https://www.seriouseats.com/rss', source: 'Serious Eats' },
  ],
  travel: [
    { url: 'https://www.lonelyplanet.com/news/feed', source: 'Lonely Planet' },
    { url: 'https://www.tripadvisor.com/rss', source: 'TripAdvisor' },
  ],
  ai_art: [
    { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge AI' },
    { url: 'https://techcrunch.com/feed/', source: 'TechCrunch AI' },
  ],
  astronomy: [
    { url: 'https://www.nasa.gov/rss/dyn/breaking_news.rss', source: 'NASA' },
    { url: 'https://www.universetoday.com/universetoday.xml', source: 'Universe Today' },
  ],
  mystery: [
    { url: 'https://news.google.com/rss/search?q=ghost%20paranormal%20supernatural&hl=en-US&gl=US&ceid=US:en', source: 'Paranormal' },
    { url: 'https://news.google.com/rss/search?q=UFO%20alien%20extraterrestrial&hl=en-US&gl=US&ceid=US:en', source: 'UFO News' },
  ],
}

// Static travel guide data
const TRAVEL_GUIDES: Record<string, {name: string, emoji: string, places: {name: string, desc: string, type: string, image: string}[]}> = {
  tokyo: {
    name: "東京",
    emoji: "🗼",
    places: [
      { name: "淺草寺", desc: "東京最古老寺院，遊客必到", type: "景點", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400" },
      { name: "築地市場", desc: "新鮮壽司、海鮮丼", type: "美食", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400" },
      { name: "新宿歌舞伎町", desc: "夜生活、餐廳、娛樂", type: "玩樂", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400" },
      { name: "秋葉原", desc: "動漫、電子產品、玩具", type: "購物", image: "https://images.unsplash.com/photo-1513407032748-4cbb09d93500?w=400" },
    ]
  },
  paris: {
    name: "巴黎",
    emoji: "🗼",
    places: [
      { name: "艾菲爾鐵塔", desc: "巴黎地標，浪漫夜景", type: "景點", image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400" },
      { name: "羅浮宮", desc: "世界最大博物館，蒙娜麗莎", type: "景點", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400" },
      { name: "蒙馬特區", desc: "藝術家廣場、法式小巷", type: "玩樂", image: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=400" },
      { name: "瑪黑區", desc: "時尚小店、咖啡廳、Croissant", type: "美食", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400" },
    ]
  },
  taipei: {
    name: "台北",
    emoji: "🏯",
    places: [
      { name: "士林夜市", desc: "大腸包小腸、蚵仔煎、珍奶", type: "美食", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400" },
      { name: "龍山寺", desc: "百年古蹟、參拜祈福", type: "景點", image: "https://images.unsplash.com/photo-1528378321374-12d9ff4f5c2b?w=400" },
      { name: "西門町", desc: "潮流服裝、電影街、紅樓", type: "玩樂", image: "https://images.unsplash.com/photo-1559454403-b8fb88521b11?w=400" },
      { name: "101大樓", desc: "都市景觀、購物中心", type: "景點", image: "https://images.unsplash.com/photo-1470219556762-1771e7f8a69b?w=400" },
    ]
  },
  seoul: {
    name: "首爾",
    emoji: "🏯",
    places: [
      { name: "明洞", desc: "化妝品、 時裝、Street Food", type: "購物", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
      { name: "弘大", desc: "年輕文化、街頭表演、Cafe", type: "玩樂", image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400" },
      { name: "北村韓屋村", desc: "傳統韓屋、韓服體驗", type: "景點", image: "https://images.unsplash.com/photo-1565363735582-248a38c8b01c?w=400" },
      { name: "東大门", desc: "批發市場、深夜購物", type: "購物", image: "https://images.unsplash.com/photo-1513073562579-183643645974?w=400" },
    ]
  },
  bangkok: {
    name: "曼谷",
    emoji: "🛕",
    places: [
      { name: "大皇宮", desc: "泰國王室宮殿，金碧輝煌", type: "景點", image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400" },
      { name: "恰圖恰市集", desc: "世界最大露天市集", type: "購物", image: "https://images.unsplash.com/photo-1552465011-b4e21bf66a50?w=400" },
      { name: "水門市場", desc: "平價時裝、美食", type: "購物", image: "https://images.unsplash.com/photo-1559628233-100209d8d7e6?w=400" },
      { name: "考山路", desc: "背包客天堂、夜生活", type: "玩樂", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=400" },
    ]
  },
}

// Clean HTML from text
function cleanHtml(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]/gi, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim()
}

// Extract text from CDATA or plain text
function extractText(content: string): string {
  const cdata = content.match(/<!\[CDATA\[([\s\S]*?)\]>/i)
  return cleanHtml(cdata ? cdata[1] : content)
}

// Extract image from RSS item
function extractImage(itemXml: string): string {
  const mediaTags = itemXml.match(/<media:content[^>]*>/gi) || []
  if (mediaTags.length > 0) {
    let bestUrl = '', bestWidth = 0
    for (const tag of mediaTags) {
      const urlMatch = tag.match(/url="([^"]+)"/i)
      const widthMatch = tag.match(/width="(\d+)"/i)
      if (urlMatch && widthMatch) {
        const width = parseInt(widthMatch[1])
        if (width > bestWidth) { bestWidth = width; bestUrl = urlMatch[1] }
      }
    }
    if (bestUrl) return bestUrl
  }
  const thumb = itemXml.match(/<media:thumbnail[^>]*url="([^"]+)"/i)
  if (thumb) return thumb[1]
  const enc = itemXml.match(/<enclosure[^>]*url="([^"]+)"/i)
  if (enc) return enc[1]
  return ''
}

// Translate text using Google Translate API (free)
async function translateText(text: string, targetLang: string): Promise<string> {
  if (!text || text.length < 2) return text
  const translateTarget = targetLang === 'zh-TW' ? 'zh-TW' : targetLang === 'zh-CN' ? 'zh-CN' : 'en'
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${translateTarget}&dt=t&q=${encodeURIComponent(text)}`
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) })
    if (!res.ok) return text
    const data = await res.json()
    if (data && data[0] && data[0][0] && data[0][0][0]) return data[0][0][0]
  } catch (e) { console.error(`[Translate] Error:`, e) }
  return text
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category') || 'finance'
  const lang = searchParams.get('lang') || 'zh-TW'
  
  // Special handling for travel - return curated travel guides
  if (category === 'travel') {
    const travelData = Object.entries(TRAVEL_GUIDES).map(([id, data]) => ({
      id,
      name: data.name,
      emoji: data.emoji,
      places: data.places.map(p => ({
        ...p,
        id: Buffer.from(p.name).toString('base64').slice(0, 12)
      }))
    }))
    
    return NextResponse.json({
      success: true,
      category: 'travel',
      items: travelData,
      isTravelGuide: true,
      timestamp: Date.now()
    })
  }
  
  // Regular news feed for other categories
  const sources = RSS_SOURCES[category] || RSS_SOURCES.finance
  const now = Date.now()
  const MAX_AGE_MS = 72 * 60 * 60 * 1000

  const sourcePromises = sources.map(async (source) => {
    try {
      const res = await fetch(source.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'application/rss+xml, application/xml, text/xml, */*',
        },
        signal: AbortSignal.timeout(15000),
      })
      
      if (!res.ok) return []
      const xml = await res.text()
      const itemMatches = xml.match(/<item[^>]*>([\s\S]*?)<\/item>/gi) || []
      const sourceItems: any[] = []

      for (const itemXml of itemMatches.slice(0, 15)) {
        const titleMatch = itemXml.match(/<title>([\s\S]*?)<\/title>/i)
        const descMatch = itemXml.match(/<description>([\s\S]*?)<\/description>/i)
        const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/i)
        const dateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/i)
        
        const title = titleMatch ? extractText(titleMatch[1]) : ''
        const desc = descMatch ? extractText(descMatch[1]) : ''
        const link = linkMatch ? extractText(linkMatch[1]) : ''
        const pubDateStr = dateMatch ? extractText(dateMatch[1]) : ''
        
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
            title,
            desc: desc.slice(0, 200),
            link,
            pubDate: pubDateStr,
            pubTimestamp: pubTimestamp || now,
            img: !!img,
            img_url: img || '',
            source: source.source,
          })
        }
      }
      return sourceItems
    } catch (err) {
      console.error(`Failed to fetch ${source.url}:`, err)
      return []
    }
  })

  const results = await Promise.all(sourcePromises)
  const allItems = results.flat().sort((a, b) => b.pubTimestamp - a.pubTimestamp)
  const itemsToTranslate = allItems.slice(0, 15)
  const remainingItems = allItems.slice(15, 30)

  const translatedItems = await Promise.all(itemsToTranslate.map(async (item) => {
    const isChineseSource = /[\u4e00-\u9fff]/.test(item.title)
    let needsTranslation = false
    if (lang === 'en') needsTranslation = isChineseSource
    else if (lang === 'zh-TW' || lang === 'zh-CN') needsTranslation = !isChineseSource
    
    if (needsTranslation) {
      try {
        const [tTitle, tDesc] = await Promise.all([
          translateText(item.title, lang),
          item.desc ? translateText(item.desc, lang) : Promise.resolve('')
        ])
        return { ...item, title_translated: tTitle, desc_translated: tDesc, translated: true }
      } catch (e) { console.error("[Translation error]", e) }
    }
    return { ...item, title_translated: item.title, desc_translated: item.desc, translated: false }
  }))

  const finalRemaining = remainingItems.map(item => ({
    ...item,
    title_translated: item.title,
    desc_translated: item.desc,
    translated: false
  }))

  const combined = [...translatedItems, ...finalRemaining]
  const newestFive = combined.slice(0, 5)
  const others = combined.slice(5).sort(() => Math.random() - 0.5)
  const finalItems = [...newestFive, ...others].slice(0, 25)
  
  return NextResponse.json({
    success: true,
    category,
    items: finalItems,
    timestamp: now,
  })
}
