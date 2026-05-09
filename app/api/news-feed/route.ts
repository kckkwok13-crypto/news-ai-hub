import { NextRequest, NextResponse } from 'next/server'

// RSS sources by category
const RSS_SOURCES: Record<string, {url: string, source: string}[]> = {
  finance: [
    { url: 'https://finance.yahoo.com/news/rssindex', source: 'Yahoo Finance' },
    { url: 'http://feeds.marketwatch.com/marketwatch/topstories/', source: 'MarketWatch' },
    { url: 'https://www.investing.com/rss/news_25.rss', source: 'Investing.com' },
    { url: 'https://asia.nikkei.com/rss/feed/nar', source: 'Nikkei Asia' },
    { url: 'https://search.cnbc.com/rs/search/view.xml?partnerId=2000&keywords=finance', source: 'CNBC' },
  ],
  crypto: [
    { url: 'https://cointelegraph.com/rss', source: 'CoinTelegraph' },
    { url: 'https://www.coindesk.com/arc/outboundfeeds/rss/', source: 'CoinDesk' },
    { url: 'https://cryptopanic.com/news/rss/', source: 'CryptoPanic' },
  ],
  business: [
    { url: 'https://www.reutersagency.com/feed/?taxonomy=best-topics&post_type=best', source: 'Reuters' },
    { url: 'https://asia.nikkei.com/rss/feed/nar', source: 'Nikkei Asia' },
    { url: 'https://www.investing.com/rss/news.rss', source: 'Investing.com' },
  ],
  technology: [
    { url: 'https://techcrunch.com/feed/', source: 'TechCrunch' },
    { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge' },
    { url: 'https://www.wired.com/feed/rss', source: 'Wired' },
  ],
  astronomy: [
    { url: 'https://www.nasa.gov/rss/dyn/breaking_news.rss', source: 'NASA' },
    { url: 'https://www.universetoday.com/universetoday.xml', source: 'Universe Today' },
    { url: 'https://www.sciencealert.com/space/feed', source: 'ScienceAlert Space' },
  ],
  mystery: [
    { url: 'https://news.google.com/rss/search?q=ghost%20paranormal%20supernatural&hl=en-US&gl=US&ceid=US:en', source: 'Paranormal' },
    { url: 'https://news.google.com/rss/search?q=UFO%20alien%20extraterrestrial&hl=en-US&gl=US&ceid=US:en', source: 'UFO News' },
    { url: 'https://news.google.com/rss/search?q=mystery%20unsolved%20strange&hl=en-US&gl=US&ceid=US:en', source: 'Mysteries' },
  ],
}

// Extract image from RSS item
function extractImage(itemXml: string): string {
  const mediaTags = itemXml.match(/<media:content[^>]*>/gi) || []
  
  if (mediaTags.length > 0) {
    let bestUrl = ''
    let bestWidth = 0
    
    for (const tag of mediaTags) {
      const urlMatch = tag.match(/url="([^"]+)"/i)
      const widthMatch = tag.match(/width="(\d+)"/i)
      
      if (urlMatch && widthMatch) {
        const width = parseInt(widthMatch[1])
        if (width > bestWidth) {
          bestWidth = width
          bestUrl = urlMatch[1]
        }
      }
    }
    
    if (bestUrl) return bestUrl
  }
  
  const thumb = itemXml.match(/<media:thumbnail[^>]*url="([^"]+)"/i)
  if (thumb) return thumb[1]
  
  const content = itemXml.match(/<media:content[^>]*url="([^"]+)"/i)
  if (content) return content[1]
  
  const enc = itemXml.match(/<enclosure[^>]*url="([^"]+)"/i)
  if (enc) return enc[1]
  
  const img = itemXml.match(/<img[^>]*src="([^"]+)"/i)
  if (img) return img[1]
  
  return ''
}

// Clean HTML from text
function cleanHtml(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/gi, '$1')
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
  const cdata = content.match(/<!\[CDATA\[([\s\S]*?)\]\]>/i)
  return cleanHtml(cdata ? cdata[1] : content)
}

// Translate text using Google Translate API (free)
async function translateText(text: string, targetLang: string): Promise<string> {
  if (!text || text.length < 2) return text
  
  const translateTarget = targetLang === 'zh-TW' ? 'zh-TW' 
    : targetLang === 'zh-CN' ? 'zh-CN' 
    : 'en'
  
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${translateTarget}&dt=t&q=${encodeURIComponent(text)}`
    
    const res = await fetch(url, {
      signal: AbortSignal.timeout(5000),
    })
    
    if (!res.ok) {
      console.error(`[Translate] HTTP ${res.status} for target ${translateTarget}`)
      return text
    }
    
    const data = await res.json()
    if (data && data[0] && data[0][0] && data[0][0][0]) {
      return data[0][0][0]
    }
  } catch (e) {
    console.error(`[Translate] Error for target ${translateTarget}:`, e)
  }
  
  return text
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category') || 'finance'
  const lang = searchParams.get('lang') || 'zh-TW'
  
  const sources = RSS_SOURCES[category] || RSS_SOURCES.finance
  
  const now = Date.now()
  const MAX_AGE_MS = 72 * 60 * 60 * 1000

  const sourcePromises = sources.map(async (source) => {
    try {
      const res = await fetch(source.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'application/rss+xml, application/xml, text/xml, */*',
          'Accept-Language': 'en-US,en;q=0.9',
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(15000), 
      })
      
      if (!res.ok) {
        console.error(`[RSS] ${source.url} returned ${res.status}`)
        return []
      }
      
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
  const allItems = results.flat()
  
  const sortedItems = allItems.sort((a, b) => b.pubTimestamp - a.pubTimestamp)
  const itemsToTranslate = sortedItems.slice(0, 15)
  const remainingItems = sortedItems.slice(15, 30)

  const translatedItems = await Promise.all(itemsToTranslate.map(async (item) => {
    const isChineseSource = /[\u4e00-\u9fff]/.test(item.title)
    
    let title_translated = item.title
    let desc_translated = item.desc
    let needsTranslation = false
    
    if (lang === 'en') {
      needsTranslation = isChineseSource
    } else if (lang === 'zh-TW' || lang === 'zh-CN') {
      needsTranslation = !isChineseSource
    }
    
    if (needsTranslation) {
      try {
        const [tTitle, tDesc] = await Promise.all([
          translateText(item.title, lang),
          item.desc ? translateText(item.desc, lang) : Promise.resolve('')
        ])
        title_translated = tTitle
        desc_translated = tDesc
      } catch (e) {
        console.error("[Translation error]", e)
      }
    }
    
    return {
      ...item,
      title_translated,
      desc_translated,
      translated: title_translated !== item.title
    }
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
