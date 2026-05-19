import { NextRequest, NextResponse } from 'next/server'

// Simple bias detection based on source keywords
function detectBias(source: string): string {
  const western = ['BBC', 'NYTimes', 'CNN', 'Reuters', 'Guardian', 'Al Jazeera', 'DW', 'NPR', 'CBS', 'NBC', 'ABC', 'Fox']
  const china = ['SCMP', 'Xinhua', 'Global Times', 'CCTV', 'People', 'CRI', 'China']
  const neutral = ['Associated Press', 'AFP', 'Bloomberg', 'FT']

  if (western.some(s => source.includes(s))) return 'pro_western'
  if (china.some(s => source.includes(s))) return 'pro_china'
  if (neutral.some(s => source.includes(s))) return 'neutral'
  return 'neutral'
}

// Simple impact detection based on keywords
function detectImpact(title: string, desc: string): string {
  const text = ((title || '') + ' ' + (desc || '')).toLowerCase()
  const economic = ['market', 'stock', 'economy', 'trade', 'finance', 'invest', 'profit', 'loss', 'bank', 'money', 'fund', 'ipo', 'crypto', 'bitcoin', 'price', 'cost', 'tax', 'gdp', 'inflation', 'rate', '股份', '股市', '經濟', '貿易', '投資', '銀行', '金融', '貨幣', '價格', '通脹']
  const political = ['election', 'government', 'policy', 'law', 'vote', 'president', 'minister', 'congress', 'war', 'peace', 'military', 'sanction', 'rights', '抗議', '政府', '政策', '戰爭', '軍事']
  const tech = ['ai', 'tech', 'cyber', 'digital', 'software', 'app', 'internet', 'data', 'robot', 'automation', 'chip', 'semiconductor', 'nvidia', 'openai', 'google', 'apple', 'microsoft', '科技', '軟件', '網絡', '數據', '晶片']

  if (economic.some(k => text.includes(k))) return 'economic'
  if (political.some(k => text.includes(k))) return 'political'
  if (tech.some(k => text.includes(k))) return 'tech'
  return 'general'
}

async function getAIAnalysis(items: any[], lang: string) {
  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) return null

  const prompt = `Analyze these news items and provide a summary.

Format output as JSON:
{
  "digest": "2-3 sentence summary in ${lang === 'en' ? 'English' : 'Traditional Chinese with Cantonese style'}",
  "trends": ["trend1", "trend2", "trend3"],
  "sentiment_score": 0.5,
  "analysis": [
    {"id": "item_id", "bias": "pro_western|pro_china|neutral", "impact": "economic|political|tech|general", "sentiment": 0.5},
    ...
  ]
}

News Items (first 10):
${items.slice(0, 10).map((i: any, idx: number) => `${idx + 1}. [${i.source}] ${i.title || i.title_translated || ''}`).join('\n')}`

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 15000)

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://newskingdom.store',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.0-flash-001',
        messages: [{ role: 'user', content: prompt }],
        response_format: { type: 'json_object' }
      }),
      signal: controller.signal
    })

    clearTimeout(timeoutId)

    if (!res.ok) {
      const err = await res.text()
      console.error('[AI Summary] API error:', res.status, err)
      return null
    }

    const data = await res.json()
    const content = data.choices?.[0]?.message?.content
    if (!content) return null

    return JSON.parse(content)

  } catch (e: any) {
    console.warn('[AI Summary] AI analysis failed:', e.message)
    return null
  }
}

function simpleAnalysis(items: any[], lang: string) {
  // Count sources
  const sources: Record<string, number> = {}
  for (const item of items) {
    sources[item.source || 'Unknown'] = (sources[item.source || 'Unknown'] || 0) + 1
  }

  // Extract keywords — improved version
  const allTitles = items.map((i: any) => i.title_zh || i.title_translated || i.title || '').join(' ')

  // Stopwords for Chinese and English
  const stopwords = new Set([
    // English stopwords
    'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out',
    'has', 'have', 'been', 'were', 'they', 'their', 'what', 'will', 'with', 'would', 'there', 'this', 'that',
    'from', 'into', 'more', 'some', 'could', 'than', 'them', 'then', 'these', 'when', 'where', 'which', 'your',
    'just', 'over', 'such', 'also', 'back', 'after', 'use', 'two', 'how', 'our', 'its', 'may', 'said', 'each',
    'she', 'who', 'do', 'his', 'him', 'his', 'we', 'be', 'by', 'of', 'is', 'in', 'to', 'it', 'on', 'at', 'as',
    // Chinese stopwords
    '一個', '一個', '一些', '可能', '因為', '所以', '但是', '如果', '雖然', '或者', '以及', '以及', '對於',
    '這個', '那個', '這些', '那些', '什麼', '怎麼', '為什麼', '哪個', '哪裡', '如何', '是否', '已經',
    '今日', '今天', '昨日', '昨天', '今日', '本週', '本週', '本月', '今年', '去年', '明年', '日前',
    '近日', '近期', '目前', '現在', '時候', '通過', '根據', '按照', '由於', '關於', '對於',
    '可以', '需要', '必須', '應該', '能夠', '已經', '正在', '將會', '可能', '也許',
    '一個', '這個', '那個', '一種', '該', '其', '之', '於', '被', '把', '給', '讓', '向', '在',
    '等', '等等', '或', '且', '並', '而', '且', '與', '和', '及', '及其', '及其',
  ])

  // Clean words: remove punctuation, hashtags, symbols, pure numbers
  const cleanWords = allTitles
    .toLowerCase()
    // Split on whitespace and common Chinese punctuation
    .split(/[\s\n\r\t,.!?;:，。！？；：、""''""'''『』（）【】《》〈〉「」\[\]【】\/\\]+/)
    .map(w => w.replace(/^[#@$%^&*()_+\-=\[\]{}|;:'"<>,.\/\\!@#$%^&*()_+\-=\[\]{}|;:'"<>,.\/?`~]+/, '').replace(/[#@$%^&*()_+\-=\[\]{}|;:'"<>,.\/\\!@#$%^&*()_+\-=\[\]{}|;:'"<>,.\/?`~]+$/, ''))
    .filter(w => {
      if (w.length < 2) return false
      // Reject pure numbers or words that are mostly numbers
      if (/^\d+$/.test(w)) return false
      if (/^\d+[a-zA-Z]$/.test(w)) return false
      // Reject pure symbols (no letters, no CJK)
      if (!/[a-zA-Z\u4e00-\u9fff]/.test(w)) return false
      // Reject stopwords
      if (stopwords.has(w)) return false
      return true
    })

  const wordCount: Record<string, number> = {}
  for (const w of cleanWords) {
    wordCount[w] = (wordCount[w] || 0) + 1
  }

  // Get top keywords, deduplicating Chinese vs English
  const topKeywords = Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word]) => word)

  // Simple sentiment
  const positive = ['surge', 'gain', 'rise', 'grow', 'positive', 'success', 'win', 'boost', 'rally', '上漲', '增長', '成功', '牛市']
  const negative = ['crash', 'fall', 'drop', 'loss', 'fail', 'crisis', 'war', 'threat', 'concern', '下跌', '危機', '戰爭', '熊市']

  let posCount = 0, negCount = 0
  for (const item of items) {
    const text = ((item.title_zh || item.title_translated || item.title || '') + ' ' + (item.desc_zh || item.desc_translated || item.desc || '')).toLowerCase()
    if (positive.some(w => text.includes(w))) posCount++
    if (negative.some(w => text.includes(w))) negCount++
  }

  const total = items.length || 1
  const sentiment = {
    positive: Math.round((posCount / total) * 100),
    negative: Math.round((negCount / total) * 100),
    neutral: Math.max(0, 100 - Math.round((posCount / total) * 100) - Math.round((negCount / total) * 100)),
  }

  const sourceCount = Object.keys(sources).length
  const keywords = topKeywords.slice(0, 3).join(lang === 'en' ? ', ' : '、')

  return {
    success: true,
    summary_zh: `今日新聞共收錄 ${items.length} 條，來自 ${sourceCount} 個來源。主要話題包括 ${keywords} 等。`,
    summary_en: `Today's news includes ${items.length} articles from ${sourceCount} sources. Key topics include ${keywords}.`,
    categories: Object.keys(sources),
    sentiment,
    trends: topKeywords,
    highlights: items.slice(0, 3).map((i: any) => i.title_zh || i.title_translated || i.title || ''),
    details: items.slice(0, 10).map((i: any) => ({
      id: i.id,
      bias: detectBias(i.source || ''),
      impact: detectImpact(i.title || '', i.desc || '')
    })),
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const items = body.items || []
    const lang = body.lang || 'zh-TW'

    if (items.length === 0) {
      return NextResponse.json({ success: false, error: 'No items provided' }, { status: 400 })
    }

    // Try AI analysis first
    const aiData = await getAIAnalysis(items, lang)

    if (aiData && aiData.digest) {
      const score = aiData.sentiment_score || 0
      return NextResponse.json({
        success: true,
        analysis: {
          summary_zh: aiData.digest,
          summary_en: aiData.digest,
          trends: aiData.trends || [],
          sentiment: {
            positive: score > 0 ? Math.round(score * 100) : 0,
            negative: score < 0 ? Math.round(Math.abs(score) * 100) : 0,
            neutral: 100 - Math.round(Math.abs(score) * 100)
          },
          details: (aiData.analysis || items.slice(0, 10).map((i: any) => ({
            id: i.id,
            bias: detectBias(i.source || ''),
            impact: detectImpact(i.title || '', i.desc || '')
          })))
        },
        timestamp: Date.now(),
      })
    }

    // Fallback to simple analysis
    const simple = simpleAnalysis(items, lang)

    return NextResponse.json({
      success: true,
      analysis: {
        summary_zh: simple.summary_zh,
        summary_en: simple.summary_en,
        trends: simple.trends,
        sentiment: simple.sentiment,
        details: simple.details,
      },
      timestamp: Date.now(),
    })

  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || 'Analysis failed' }, { status: 500 })
  }
}

