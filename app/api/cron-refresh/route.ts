import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const validToken = process.env.CRON_SECRET || 'vercel'
  if (authHeader !== `Bearer ${validToken}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const categories = ['finance', 'crypto', 'business', 'technology', 'health', 'gaming', 'food', 'ai_art', 'astronomy', 'mystery', 'data_journalism']
  const results = []

  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'

  for (const category of categories) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 45000)

      const res = await fetch(`${baseUrl}/api/news-feed?category=${category}&lang=zh-TW`, {
        signal: controller.signal
      })

      clearTimeout(timeoutId)
      results.push({ category, success: res.ok, status: res.status })
    } catch (e) {
      results.push({ category, success: false, error: String(e) })
    }
  }

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    results
  })
}

export const runtime = 'nodejs'