import { NextRequest, NextResponse } from 'next/server'

// Trusted image domains
const TRUSTED_DOMAINS = [
  'images.unsplash.com',
  'source.unsplash.com',
  'picsum.photos',
  'via.placeholder.com',
  'img.youtube.com',
  'i.imgur.com',
  'media.travelguide.com',
]

function getReferrer(imageUrl: string): string {
  try {
    const url = new URL(imageUrl)
    return `https://${url.hostname}/`
  } catch {
    return 'https://www.google.com/'
  }
}

function isValidUrl(urlStr: string): boolean {
  try {
    const url = new URL(urlStr)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const imageUrl = searchParams.get('url')

  if (!imageUrl) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 })
  }

  // Validate URL
  if (!isValidUrl(imageUrl)) {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 })
  }

  try {
    const referrer = getReferrer(imageUrl)
    
    const res = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': referrer,
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Encoding': 'identity',
      },
      signal: AbortSignal.timeout(15000), // Increased timeout
    })

    if (!res.ok) {
      console.error(`Proxy fetch failed: ${res.status} for ${imageUrl}`)
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
  } catch (err) {
    console.error('Proxy error:', err)
    return NextResponse.json({ error: 'Proxy failed' }, { status: 502 })
  }
}
