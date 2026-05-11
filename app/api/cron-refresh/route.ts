import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  // Vercel Cron verification
  const authHeader = request.headers.get('authorization')
  // Vercel sends "Bearer vercel" by default, or use custom CRON_SECRET if set
  const validToken = process.env.CRON_SECRET || 'vercel'
  if (authHeader !== `Bearer ${validToken}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const categories = ['finance', 'crypto', 'business', 'technology', 'health', 'gaming', 'food', 'ai_art', 'astronomy', 'mystery', 'data_journalism']
  const results = []

  for (const category of categories) {
    try {
      // Prefetch news for each category
      const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
      const res = await fetch(`${baseUrl}/api/news-feed?category=${category}&lang=zh-TW`, {
        signal: AbortSignal.timeout(30000),
      })
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
