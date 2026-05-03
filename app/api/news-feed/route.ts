import { NextRequest, NextResponse } from 'next/server'

// RSS sources by category
const RSS_SOURCES: Record<string, {url: string, source: string}[]> = {
  world: [
    { url: 'https://feeds.bbci.co.uk/news/world/rss.xml', source: 'BBC World' },
    { url: 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml', source: 'NYTimes' },
  ],
  finance: [
    { url: 'https://feeds.bbci.co.uk/news/business/rss.xml', source: 'BBC Business' },
    { url: 'https://www.reutersagency.com/feed/?taxonomy=best-topics&post_type=best', source: 'Reuters' },
  ],
  crypto: [
    { url: 'https://cointelegraph.com/rss', source: 'CoinTelegraph' },
  ],
  hk: [
    { url: 'https://news.google.com/rss/search?q=%E9%A6%99%E6%B8%AF&hl=zh-HK&gl=HK&ceid=HK:zh-Hant', source: 'Google News HK' },
  ],
}

// Translate text using Google Translate API (free)
async function translateText(text: string, targetLang: string): Promise<string> {
  if (!text || text.trim().length === 0) return text
  
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3000)
    
    const res = await fetch(url, { signal: controller.signal })
    clearTimeout(timeoutId)
    
    if (!res.ok) return text
    
    const data = await res.json()
    if (data && data[0]) {
      return data[0].map((item: any) => item[0] || '').join('')
    }
    return text
  } catch {
    return text
  }
}

// Extract image from RSS item
function extractImage(itemXml: string): string {
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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category') || 'world'
  const translate = searchParams.get('translate') === 'true'
  
  const sources = RSS_SOURCES[category] || RSS_SOURCES.world
  const items: any[] = []
  
  for (const source of sources) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 8000)
      
      const res = await fetch(source.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; NewsBot/1.0)',
        },
        signal: controller.signal,
      })
      clearTimeout(timeoutId)
      
      if (!res.ok) continue
      
      const xml = await res.text()
      const itemMatches = xml.match(/<item[^>]*>([\s\S]*?)<\/item>/gi) || []
      
      for (const itemXml of itemMatches.slice(0, 15)) {
        const titleMatch = itemXml.match(/<title>([\s\S]*?)<\/title>/i)
        const descMatch = itemXml.match(/<description>([\s\S]*?)<\/description>/i)
        const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/i)
        const dateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/i)
        
        const title = titleMatch ? extractText(titleMatch[1]) : ''
        const desc = descMatch ? extractText(descMatch[1]) : ''
        const link = linkMatch ? extractText(linkMatch[1]) : ''
        const pubDate = dateMatch ? extractText(dateMatch[1]) : ''
        const img = extractImage(itemXml)
        
        if (title && link) {
          // Translate if requested
          let title_zh = ''
          let desc_zh = ''
          
          if (translate) {
            title_zh = await translateText(title, 'zh-TW')
            desc_zh = await translateText(desc.slice(0, 200), 'zh-TW')
          }
          
          items.push({
            id: Buffer.from(link).toString('base64').slice(0, 16),
            title,
            title_zh,
            desc: desc.slice(0, 200),
            desc_zh,
            link,
            pubDate,
            img: img ? 'true' : 'false',
            img_url: img || `https://picsum.photos/seed/${category}${items.length}/400/300`,
            source: source.source,
          })
        }
      }
    } catch (err) {
      console.error(`Failed to fetch ${source.url}:`, err)
    }
  }
  
  return NextResponse.json({
    success: true,
    category,
    items: items.slice(0, 25),
    timestamp: Date.now(),
  })
}
