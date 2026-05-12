import { NextRequest, NextResponse } from 'next/server'

// Dynamic referrer based on image domain
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

  try {
    const referrer = getReferrer(imageUrl)
    const res = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': referrer,
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
      },
      signal: AbortSignal.timeout(8000),
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: 502 })
    }

    const blob = await res.blob()
    const contentType = res.headers.get('Content-Type') || 'image/jpeg'
    const isWebp = contentType.includes('webp')
    const isGif = contentType.includes('gif')

    return new NextResponse(blob, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=604800',
        'Vary': 'Origin',
        'Access-Control-Allow-Origin': '*',
        // Preserve transparency for webp/png
        ...(isWebp && { 'Cache-Control': 'public, max-age=86400' }),
      },
    })
  } catch (err) {
    console.error('Proxy error:', err)
    return NextResponse.json({ error: 'Proxy failed' }, { status: 502 })
  }
}
