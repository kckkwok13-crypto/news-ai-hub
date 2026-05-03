import { NextRequest, NextResponse } from 'next/server'

// Simple analysis without external AI
function analyzeNews(items: any[]) {
  // Count sources
  const sources: Record<string, number> = {}
  for (const item of items) {
    sources[item.source] = (sources[item.source] || 0) + 1
  }
  
  // Extract keywords from titles
  const allTitles = items.map(i => i.title).join(' ')
  const words = allTitles.toLowerCase().split(/\s+/)
  const wordCount: Record<string, number> = {}
  for (const w of words) {
    if (w.length > 4) wordCount[w] = (wordCount[w] || 0) + 1
  }
  const topKeywords = Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word]) => word)
  
  // Sentiment (simple heuristic)
  const positive = ['surge', 'gain', 'rise', 'grow', 'positive', 'success', 'win', 'boost', 'rally']
  const negative = ['crash', 'fall', 'drop', 'loss', 'fail', 'crisis', 'war', 'threat', 'concern']
  
  let posCount = 0, negCount = 0
  for (const item of items) {
    const text = (item.title + ' ' + item.desc).toLowerCase()
    if (positive.some(w => text.includes(w))) posCount++
    if (negative.some(w => text.includes(w))) negCount++
  }
  
  const total = items.length || 1
  const sentiment = {
    positive: Math.round((posCount / total) * 100),
    negative: Math.round((negCount / total) * 100),
    neutral: Math.round(100 - (posCount / total) * 100 - (negCount / total) * 100),
  }
  
  return {
    summary_zh: `今日新聞共收錄 ${items.length} 條，來自 ${Object.keys(sources).length} 個來源。主要話題包括 ${topKeywords.slice(0, 3).join('、')} 等。`,
    summary_en: `Today's news includes ${items.length} articles from ${Object.keys(sources).length} sources. Key topics include ${topKeywords.slice(0, 3).join(', ')}.`,
    categories: Object.entries(sources).map(([name, count]) => ({ name, count })),
    sentiment,
    trends: topKeywords,
    highlights: items.slice(0, 3).map(i => i.title),
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const items = body.items || []
    
    if (items.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'No items provided',
      })
    }
    
    const analysis = analyzeNews(items)
    
    return NextResponse.json({
      success: true,
      analysis,
      timestamp: Date.now(),
    })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message || 'Analysis failed',
    }, { status: 500 })
  }
}
