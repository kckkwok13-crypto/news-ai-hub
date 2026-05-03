import { NextRequest, NextResponse } from 'next/server'

// RSS sources by category
const RSS_SOURCES: Record<string, {url: string, source: string}[]> = {
  world: [
    { url: 'https://feeds.bbci.co.uk/news/world/rss.xml', source: 'BBC World' },
    { url: 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml', source: 'NYTimes' },
    { url: 'https://www.aljazeera.com/xml/rss/all.xml', source: 'Al Jazeera' },
    { url: 'https://rss.dw.com/rdf/rss-en-all', source: 'DW News' },
    { url: 'https://www.scmp.com/rss/91/feed', source: 'SCMP' },
  ],
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
  hk: [
    { url: 'https://news.google.com/rss/search?q=%E9%A6%99%E6%B8%AF%20%E6%96%B0%E8%81%9E&hl=zh-HK&gl=HK&ceid=HK:zh-Hant', source: 'Google News HK' },
    { url: 'https://www.scmp.com/rss/2/feed', source: 'SCMP Hong Kong' },
  ],
  hk_finance: [
    { url: 'https://news.google.com/rss/search?q=%E6%B8%AF%E8%82%A1%20%E6%81%92%E7%94%9F%E6%8C%87%E6%95%B8%20%E8%B2%A1%E7%B6%93&hl=zh-HK&gl=HK&ceid=HK:zh-Hant', source: '港股即時' },
  ],
  tw: [
    { url: 'https://news.google.com/rss/search?q=%E5%8F%B0%E7%81%A3&hl=zh-TW&gl=TW&ceid=TW:zh-Hant', source: 'Google News TW' },
  ],
  china: [
    { url: 'https://news.google.com/rss/search?q=%E4%B8%AD%E5%9B%BD&hl=zh-CN&gl=CN&ceid=CN:zh-Hans', source: 'Google News China' },
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
}

// Extract image from RSS item
function extractImage(itemXml: string): string {
  // Guardian has multiple media:content with different widths
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
  
  // media:thumbnail
  const thumb = itemXml.match(/<media:thumbnail[^>]*url="([^"]+)"/i)
  if (thumb) return thumb[1]
  
  // media:content (without width attribute)
  const content = itemXml.match(/<media:content[^>]*url="([^"]+)"/i)
  if (content) return content[1]
  
  // enclosure (used by Investing.com)
  const enc = itemXml.match(/<enclosure[^>]*url="([^"]+)"/i)
  if (enc) return enc[1]
  
  // img tag in content
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
  
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang === 'en' ? 'en' : 'zh-TW'}&dt=t&q=${encodeURIComponent(text)}`
    
    const res = await fetch(url, {
      signal: AbortSignal.timeout(3000),
    })
    
    if (!res.ok) return text
    
    const data = await res.json()
    if (data && data[0] && data[0][0] && data[0][0][0]) {
      return data[0][0][0]
    }
  } catch {
    // Translation failed, return original
  }
  
  return text
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category') || 'world'
  const lang = searchParams.get('lang') || 'zh-TW'
  
  const sources = RSS_SOURCES[category] || RSS_SOURCES.world
  const items: any[] = []
  
  const now = Date.now()
  // Max age for news (24 hours for finance/crypto/hk_finance, 48 hours for others)
  const MAX_AGE_MS = (category === 'finance' || category === 'crypto' || category === 'hk_finance') 
    ? 24 * 60 * 60 * 1000 
    : 48 * 60 * 60 * 1000

  for (const source of sources) {
    try {
      const res = await fetch(source.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
        next: { revalidate: 60 }, // Force refresh more often (1 min)
        signal: AbortSignal.timeout(8000),
      })
      
      if (!res.ok) continue
      
      const xml = await res.text()
      const itemMatches = xml.match(/<item[^>]*>([\s\S]*?)<\/item>/gi) || []
      
      for (const itemXml of itemMatches.slice(0, 20)) {
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

        // STRICT FILTER: Skip items older than MAX_AGE or with invalid dates
        if (pubTimestamp === 0 || (now - pubTimestamp) > MAX_AGE_MS) continue

        const img = extractImage(itemXml)
        
        if (title && link) {
          // Translate title and description
          let title_zh = title
          let desc_zh = desc
          
          if (lang !== 'en' && !/[\u4e00-\u9fff]/.test(title)) {
            title_zh = await translateText(title, lang)
            desc_zh = desc ? await translateText(desc.slice(0, 200), lang) : ''
          }
          
          items.push({
            id: Buffer.from(link).toString('base64').slice(0, 16),
            title,
            title_zh,
            desc: desc.slice(0, 200),
            desc_zh,
            link,
            pubDate: pubDateStr,
            pubTimestamp,
            img: img ? true : false,
            img_url: img || '',
            source: source.source,
            translated: title_zh !== title,
          })
        }
      }
    } catch (err) {
      console.error(`Failed to fetch ${source.url}:`, err)
    }
  }
  
  // 1. Sort by date descending (absolute latest first)
  const sortedItems = items.sort((a, b) => b.pubTimestamp - a.pubTimestamp)
  
  // 2. Take only top 30 to ensure freshness
  const topItems = sortedItems.slice(0, 30)
  
  // 3. Optional: slight shuffle to mix sources, but keep top 5 strictly newest
  const newestFive = topItems.slice(0, 5)
  const others = topItems.slice(5).sort(() => Math.random() - 0.5)
  const finalItems = [...newestFive, ...others].slice(0, 25)
  
  return NextResponse.json({
    success: true,
    category,
    items: finalItems,
    timestamp: now,
  })
}