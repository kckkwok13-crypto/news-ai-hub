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
        details: items.slice(0, 10).map((i: any) => ({
          id: i.id,
          bias: detectBias(i.source),
          impact: detectImpact(i.title, i.desc)
        })),
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
        model: "google/gemini-2.0-flash-001",
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
    
    const allTitles = items.map((i: any) => i.title_zh || i.title).join(' ')
    const words = allTitles.toLowerCase().split(/\s+/)
    const wordCount: Record<string, number> = {}
    for (const w of words) {
      if (w.length > 3) wordCount[w] = (wordCount[w] || 0) + 1
    }
    const topKeywords = Object.entries(wordCount)
      .sort((a: any, b: any) => b[1] - a[1])
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
    
    return NextResponse.json({
      success: true,
      analysis: {
        summary_zh: `今日新聞共收錄 ${items.length} 條，來自 ${Object.keys(sources).length} 個來源。主要話題包括 ${topKeywords.slice(0, 3).join('、')} 等。`,
        summary_en: `Today's news includes ${items.length} articles from ${Object.keys(sources).length} sources. Key topics include ${topKeywords.slice(0, 3).join(', ')}.`,
        categories: Object.keys(sources),
        sentiment,
        trends: topKeywords,
        highlights: items.slice(0, 3).map((i: any) => i.title_zh || i.title),
        details: items.slice(0, 10).map((i: any) => ({
          id: i.id,
          bias: detectBias(i.source),
          impact: detectImpact(i.title, i.desc)
        })),
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
// Simple bias detection based on source
function detectBias(source: string): string {
  const westernSources = ['BBC', 'NYTimes', 'CNN', 'Reuters', 'The Guardian', 'Al Jazeera', 'DW News']
  const chineseSources = ['SCMP', 'Xinhua', 'Global Times', 'CCTV']
  const neutralSources = ['Associated Press', 'AFP']
  
  if (westernSources.some(s => source.includes(s))) return 'pro_western'
  if (chineseSources.some(s => source.includes(s))) return 'pro_china'
  if (neutralSources.some(s => source.includes(s))) return 'neutral'
  return 'neutral'
}

// Simple impact detection based on keywords
function detectImpact(title: string, desc: string): string {
  const economicKeywords = ['market', 'stock', 'economy', 'trade', 'finance', 'business', 'invest', 'profit', 'loss', 'bank', 'money', 'fund', 'ipo', 'crypto', 'bitcoin', 'price', 'cost', 'tax', 'salary', 'gdp', 'inflation', 'rate', '股份', '股市', '經濟', '貿易', '財經', '投資', '利潤', '銀行', '金融', '貨幣', '價格', '成本', '稅', '薪金', '通脹', '利息']
  const politicalKeywords = ['election', 'government', 'policy', 'law', 'vote', 'president', 'minister', 'congress', 'parliament', 'senate', 'democracy', 'diplomat', 'treaty', 'sanction', 'war', 'peace', 'military', 'security', 'defense', 'rights', 'protest', '選舉', '政府', '政策', '投票', '總統', '部長', '國會', '參議院', '民主', '外交', '條約', '制裁', '戰爭', '和平', '軍事', '安全', '國防', '權利', '抗議']
  const techKeywords = ['ai', 'tech', 'cyber', 'digital', 'software', 'hardware', 'app', 'internet', 'data', 'cloud', 'robot', 'automation', 'smartphone', 'computer', 'chip', 'semiconductor', 'nvidia', 'openai', 'google', 'apple', 'microsoft', '科技', '人工智能', '軟件', '硬件', '應用', '網絡', '數據', '雲端', '機械人', '自動化', '智能手機', '電腦', '晶片', '半導體']
  
  const text = (title + ' ' + desc).toLowerCase()
  
  if (economicKeywords.some(k => text.includes(k))) return 'economic'
  if (politicalKeywords.some(k => text.includes(k))) return 'political'
  if (techKeywords.some(k => text.includes(k))) return 'tech'
  return 'general'
}