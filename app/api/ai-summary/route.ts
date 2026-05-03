import { NextRequest, NextResponse } from 'next/server'

// Simple analysis without external AI (for free tier)
function analyzeNews(items: any[], lang: string) {
  // Count sources
  const sources: Record<string, number> = {}
  for (const item of items) {
    sources[item.source] = (sources[item.source] || 0) + 1
  }
  
  // Extract keywords from titles
  const allTitles = items.map(i => i.title_zh || i.title).join(' ')
  const words = allTitles.toLowerCase().split(/\s+/)
  const wordCount: Record<string, number> = {}
  for (const w of words) {
    if (w.length > 3) wordCount[w] = (wordCount[w] || 0) + 1
  }
  const topKeywords = Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word]) => word)
  
  // Sentiment (simple heuristic)
  const positive = ['surge', 'gain', 'rise', 'grow', 'positive', 'success', 'win', 'boost', 'rally', '上漲', '增長', '成功']
  const negative = ['crash', 'fall', 'drop', 'loss', 'fail', 'crisis', 'war', 'threat', 'concern', '下跌', '危機', '戰爭']
  
  let posCount = 0, negCount = 0
  for (const item of items) {
    const text = ((item.title_zh || item.title) + ' ' + (item.desc_zh || item.desc)).toLowerCase()
    if (positive.some(w => text.includes(w))) posCount++
    if (negative.some(w => text.includes(w))) negCount++
  }
  
  const total = items.length || 1
  const sentiment = {
    positive: Math.round((posCount / total) * 100),
    negative: Math.round((negCount / total) * 100),
    neutral: Math.round(100 - (posCount / total) * 100 - (negCount / total) * 100),
  }
  
  const isZh = lang.startsWith('zh')
  
  return {
    success: true,
    summary_zh: `今日新聞共收錄 ${items.length} 條，來自 ${Object.keys(sources).length} 個來源。主要話題包括 ${topKeywords.slice(0, 3).join('、')} 等。`,
    summary_en: `Today's news includes ${items.length} articles from ${Object.keys(sources).length} sources. Key topics include ${topKeywords.slice(0, 3).join(', ')}.`,
    categories: Object.keys(sources),
    sentiment,
    trends: topKeywords,
    highlights: items.slice(0, 3).map(i => i.title_zh || i.title),
  }
}

async function getAIAnalysis(items: any[], lang: string) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return null;

  const prompt = `
    Analyze these news items and provide a summary in ${lang === 'en' ? 'English' : 'Cantonese (Traditional Chinese)'}.
    For each item, identify:
    1. Bias (e.g. Pro-Western, Neutral, Pro-China, Market Optimism, etc.)
    2. Contextual Impact (Why it matters to a common person)
    3. Sentiment Score (-1 to 1)

    Also provide a "Daily Digest" summary (2-3 sentences) covering the most important trends.
    
    Format the output as JSON:
    {
      "digest": "...",
      "trends": ["...", "..."],
      "sentiment_score": 0.5,
      "analysis": [
        {"id": "...", "bias": "...", "impact": "...", "sentiment": 0.5},
        ...
      ]
    }

    News Items:
    ${items.map(i => `ID: ${i.id}, Title: ${i.title}`).join('\n')}
  `;

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://newskingdom.store",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-lite-preview-02-05:free",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }
      })
    });
    const data = await res.json();
    return JSON.parse(data.choices[0].message.content);
  } catch (e) {
    console.error("AI Analysis failed", e);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const items = body.items || []
    const lang = body.lang || 'zh-TW'
    
    if (items.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'No items provided',
      })
    }
    
    // Attempt real AI analysis first
    const aiData = await getAIAnalysis(items.slice(0, 10), lang);
    
    if (aiData) {
      return NextResponse.json({
        success: true,
        analysis: {
          summary_zh: aiData.digest,
          summary_en: aiData.digest,
          trends: aiData.trends,
          details: aiData.analysis,
          sentiment: {
            positive: aiData.sentiment_score > 0 ? Math.round(aiData.sentiment_score * 100) : 0,
            negative: aiData.sentiment_score < 0 ? Math.round(Math.abs(aiData.sentiment_score) * 100) : 0,
            neutral: 100 - Math.round(Math.abs(aiData.sentiment_score) * 100)
          }
        },
        timestamp: Date.now(),
      })
    }

    // Fallback to simple analysis if AI fails
    const sources: Record<string, number> = {}
    for (const item of items) {
      sources[item.source] = (sources[item.source] || 0) + 1
    }
    
    const allTitles = items.map(i => i.title_zh || i.title).join(' ')
    const words = allTitles.toLowerCase().split(/\s+/)
    const wordCount: Record<string, number> = {}
    for (const w of words) {
      if (w.length > 3) wordCount[w] = (wordCount[w] || 0) + 1
    }
    const topKeywords = Object.entries(wordCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([word]) => word)
    
    const positive = ['surge', 'gain', 'rise', 'grow', 'positive', 'success', 'win', 'boost', 'rally', '上漲', '增長', '成功']
    const negative = ['crash', 'fall', 'drop', 'loss', 'fail', 'crisis', 'war', 'threat', 'concern', '下跌', '危機', '戰爭']
    
    let posCount = 0, negCount = 0
    for (const item of items) {
      const text = ((item.title_zh || item.title) + ' ' + (item.desc_zh || item.desc)).toLowerCase()
      if (positive.some(w => text.includes(w))) posCount++
      if (negative.some(w => text.includes(w))) negCount++
    }
    
    const total = items.length || 1
    const sentiment = {
      positive: Math.round((posCount / total) * 100),
      negative: Math.round((negCount / total) * 100),
      neutral: Math.round(100 - (posCount / total) * 100 - (negCount / total) * 100),
    }
    
    const isZh = lang.startsWith('zh')
    
    return NextResponse.json({
      success: true,
      analysis: {
        summary_zh: `今日新聞共收錄 ${items.length} 條，來自 ${Object.keys(sources).length} 個來源。主要話題包括 ${topKeywords.slice(0, 3).join('、')} 等。`,
        summary_en: `Today's news includes ${items.length} articles from ${Object.keys(sources).length} sources. Key topics include ${topKeywords.slice(0, 3).join(', ')}.`,
        categories: Object.keys(sources),
        sentiment,
        trends: topKeywords,
        highlights: items.slice(0, 3).map(i => i.title_zh || i.title),
      },
      timestamp: Date.now(),
    })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message || 'Analysis failed',
    }, { status: 500 })
  }
}