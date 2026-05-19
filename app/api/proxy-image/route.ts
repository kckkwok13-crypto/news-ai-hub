import { NextRequest, NextResponse } from 'next/server'

const ALLOWED_DOMAINS = [
  'bloomberg.com', 'wsj.com', 'cnn.com', 'npr.org', 'fortune.com',
  'forbes.com', 'hbr.org', 'mckinsey.com', 'deloitte.com',
  'reuters.com', 'apnews.com', 'bbc.com', 'bbc.co.uk',
  'theguardian.com', 'nytimes.com', 'washingtonpost.com',
  'unsplash.com', 'pexels.com', 'shutterstock.com',
  'github.com', 'githubusercontent.com',
];

function isAllowedDomain(imageUrl: string): boolean {
  try {
    const hostname = new URL(imageUrl).hostname;
    return ALLOWED_DOMAINS.some(d => hostname.endsWith(d) || hostname === d);
  } catch {
    return false;
  }
}

function isValidUrl(urlStr: string): boolean {
  try {
    const url = new URL(urlStr);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function getReferrer(imageUrl: string): string {
  try {
    const url = new URL(imageUrl)
    return `https://${url.hostname}/`
  } catch {
    return 'https://www.google.com/'
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get('url')

  if (!imageUrl) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 })
  }

  if (!isValidUrl(imageUrl)) {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 })
  }

  if (!isAllowedDomain(imageUrl)) {
    return NextResponse.json({ error: 'Domain not allowed' }, { status: 403 })
  }

  try {
    const referrer = getReferrer(imageUrl)

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    const res = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': referrer,
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Encoding': 'identity',
      },
      signal: controller.signal
    })

    clearTimeout(timeoutId)

    if (!res.ok) {
      console.error(`[proxy-image] Fetch failed: ${res.status} for ${imageUrl}`)
      return NextResponse.json({ error: `Failed to fetch: ${res.status}` }, { status: 502 })
    }

    const blob = await res.blob()
    const contentType = res.headers.get('Content-Type') || 'image/jpeg'
    const arrayBuffer = await blob.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=604800',
        'Access-Control-Allow-Origin': '*',
      },
    })

  } catch (err: any) {
    console.error('[proxy-image] Error:', err.message)
    return NextResponse.json({ error: 'Proxy failed: ' + err.message }, { status: 502 })
  }
}

