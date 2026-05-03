import { NextRequest, NextResponse } from 'next/server'

// RSS sources by category
const RSS_SOURCES: Record<string, {url: string, source: string}[]> = {
  world: [
    { url: 'https://feeds.bbci.co.uk/news/world/rss.xml', source: 'BBC World' },
    { url: 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml', source: 'NYTimes' },
    { url: 'https://www.theguardian.com/world/rss', source: 'Guardian' },
  ],
  finance: [
    { url: 'https://feeds.bbci.co.uk/news/business/rss.xml', source: 'BBC Business' },
    { url: 'https://www.theguardian.com/business/rss', source: 'Guardian Business' },
  ],
  crypto: [
    { url: 'https://cointelegraph.com/rss', source: 'CoinTelegraph' },
    { url: 'https://coindesk.com/arc/outboundfeeds/rss/', source: 'CoinDesk' },
  ],
  hk: [
    { url: 'https://news.google.com/rss/search?q=%E9%A6%99%E6%B8%AF&hl=zh-HK&gl=HK&ceid=HK:zh-Hant', source: 'Google News HK' },
  ],
  tw: [
    { url: 'https://news.google.com/rss/search?q=%E5%8F%B0%E7%81%A3&hl=zh-TW&gl=TW&ceid=TW:zh-Hant', source: 'Google News TW' },
  ],
  china: [
    { url: 'https://news.google.com/rss/search?q=%E4%B8%AD%E5%9B%BD&hl=zh-CN&gl=CN&ceid=CN:zh-Hans', source: 'Google News China' },
  ],
  business: [
    { url: 'https://feeds.bbci.co.uk/news/business/rss.xml', source: 'BBC Business' },
    { url: 'https://www.theguardian.com/business/rss', source: 'Guardian Business' },
  ],
  technology: [
    { url: 'https://techcrunch.com/feed/', source: 'TechCrunch' },
    { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge' },
  ],
}

// Extract image from RSS item
function extractImage(itemXml: string): string {
  // Guardian has multiple media:content with different widths
  // Try to get the largest one (width=700 or 460)
  const mediaContents = itemXml.match(/<media:content[^>]*url="([^"]+)"[^>]*width="(\d+)"/gi)
  if (mediaContents && mediaContents.length > 0) {
    // Find the one with largest width
    let bestUrl = ''
    let bestWidth = 0
    for (const mc of mediaContents) {
      const urlMatch = mc.match(/url="([^"]+)"/i)
      const widthMatch = mc.match(/width="(\d+)"/i)
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
  
  // enclosure
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
    const langPair = targetLang === 'zh-TW' ? 'en|zh-TW' : targetLang === 'zh-CN' ? 'en|zh-CN' : 'en|en'
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
  
  for (const source of sources) {
    try {
      const res = await fetch(source.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; NewsBot/1.0)',
        },
        signal: AbortSignal.timeout(10000),
      })
      
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
          // Translate title and description
          let title_zh = title
          let desc_zh = desc
          
          if (lang !== 'en' && !/[\u4e00-\u9fff]/.test(title)) {
            title_zh = await translateText(title, lang)
            desc_zh = desc ? await translateText(desc.slice(0, 200), lang) : ''
          }
          
          // Use proxy for Guardian images (they have hotlink protection)
          let finalImgUrl = img || ''
          if (img && source.source.toLowerCase().includes('guardian')) {
            finalImgUrl = `/api/proxy-image?url=${encodeURIComponent(img)}`
          }
          
          items.push({
            id: Buffer.from(link).toString('base64').slice(0, 16),
            title,
            title_zh,
            desc: desc.slice(0, 200),
            desc_zh,
            link,
            pubDate,
            img: img ? true : false,
            img_url: finalImgUrl,
            source: source.source,
            translated: title_zh !== title,
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