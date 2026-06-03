import { NextRequest, NextResponse } from 'next/server'

const IMPACT_DESCRIPTIONS: Record<string, { title: string; title_en: string; content_zh: string; content_en: string }> = {
  economic: {
    title: '📈 經濟金融層面分析',
    title_en: '📈 Economic & Financial Impact',
    content_zh: '此新聞涉及經濟金融層面，建議關注相關板塊及個股表現、央行政策走向、市場資金流向。',
    content_en: 'This news relates to economic & financial matters. Watch for sector performance, central bank policy, and capital flows.',
  },
  political: {
    title: '🏛️ 政治政策層面分析',
    title_en: '🏛️ Political & Policy Impact',
    content_zh: '此新聞涉及政治政策層面，建議關注國際關係變化、政策對市場的潛在影響、地緣政治風險。',
    content_en: 'This news involves political & policy dimensions. Monitor international relations, policy impacts, and geopolitical risks.',
  },
  tech: {
    title: '💻 科技產業層面分析',
    title_en: '💻 Technology & Industry Impact',
    content_zh: '此新聞涉及科技產業層面，建議關注技術創新動態、行業競爭格局、人才流動趨勢。',
    content_en: 'This news touches on tech & industry. Track innovation trends, competitive landscape, and talent mobility.',
  },
  general: {
    title: '📰 綜合資訊分析',
    title_en: '📰 General News Analysis',
    content_zh: '此為一般綜合性新聞，建議關注新聞背後的根本原因、對不同群體的影響、未來發展趨勢。',
    content_en: 'General news item. Consider the underlying causes, impact on different groups, and future trends.',
  },
}

const BIAS_SOURCE_MAP: Record<string, string> = {
  'Bloomberg': 'neutral', 'Reuters': 'neutral', 'Associated Press': 'neutral', 'AFP': 'neutral',
  'FT': 'neutral', 'MarketWatch': 'neutral', 'Investing.com': 'neutral',
  'BBC': 'pro_western', 'NYTimes': 'pro_western', 'CNN': 'pro_western', 'Guardian': 'pro_western',
  'Al Jazeera': 'pro_western', 'DW': 'pro_western', 'NPR': 'pro_western', 'CBS': 'pro_western',
  'NBC': 'pro_western', 'ABC': 'pro_western', 'The Verge': 'pro_western', 'Ars Technica': 'pro_western',
  'TechCrunch': 'pro_western', 'CNBC': 'pro_western',
  'SCMP': 'pro_china', 'Xinhua': 'pro_china', 'Global Times': 'pro_china',
  'CCTV': 'pro_china', 'People': 'pro_china', 'CRI': 'pro_china',
  'CoinTelegraph': 'neutral', 'CoinDesk': 'neutral', 'Cryptonews': 'neutral',
  'NASA': 'neutral', 'Space.com': 'neutral', 'ScienceDaily': 'neutral',
  'VentureBeat': 'neutral', 'ScienceDaily Health': 'neutral',
}

function detectBias(source: string): string {
  if (!source) return 'neutral'
  for (const [key, val] of Object.entries(BIAS_SOURCE_MAP)) {
    if (source.toLowerCase().includes(key.toLowerCase())) return val
  }
  return 'neutral'
}

function detectImpact(title: string, desc: string): string {
  const text = ((title || '') + ' ' + (desc || '')).toLowerCase()
  const economic = ['market', 'stock', 'economy', 'trade', 'finance', 'invest', 'profit', 'loss', 'bank', 'money', 'fund', 'ipo', 'crypto', 'bitcoin', 'price', 'cost', 'tax', 'gdp', 'inflation', 'rate', '股份', '股市', '經濟', '貿易', '投資', '銀行', '金融', '貨幣', '價格', '通脹', 'tariff', 'sanction', 'commodity', 'oil', 'gold']
  const political = ['election', 'government', 'policy', 'law', 'vote', 'president', 'minister', 'congress', 'war', 'peace', 'military', 'rights', 'protest', 'sanction', 'diplomat', 'nato', 'treaty', '政府', '政策', '戰爭', '軍事', '選舉', '國會']
  const tech = ['ai', 'tech', 'cyber', 'digital', 'software', 'app', 'internet', 'data', 'robot', 'automation', 'chip', 'semiconductor', 'nvidia', 'openai', 'google', 'apple', 'microsoft', '科技', '軟件', '網絡', '數據', '晶片', 'algorithm', 'model', 'launch', 'release']

  if (economic.some(k => text.includes(k))) return 'economic'
  if (political.some(k => text.includes(k))) return 'political'
  if (tech.some(k => text.includes(k))) return 'tech'
  return 'general'
}

// Extract a short headline from the title — use first clause up to ~60 chars
function extractHeadline(title: string, lang: string): string {
  if (!title) return ''
  // Strip common prefixes
  const cleaned = title.replace(/^((LIVE|Alert|Breaking|Lastest)[,: ]*)*/, '').trim()
  if (cleaned.length <= 60) return cleaned
  // Cut at nearest comma or em-dash, or just at 55 chars with ellipsis
  const cut = cleaned.slice(0, 55)
  const lastSpace = cut.lastIndexOf(' ')
  return (lastSpace > 30 ? cut.slice(0, lastSpace) : cut) + '…'
}

// Keyword-based sentiment scoring for simple mode
function estimateSentiment(title: string, desc: string): number {
  const text = ((title || '') + ' ' + (desc || '')).toLowerCase()
  const positive = ['surge', 'gain', 'rise', 'grow', 'positive', 'success', 'win', 'boost', 'rally', 'bullish', '上漲', '增長', '成功', '牛市', '突破', '新高', '利好', '漲幅', '反彈']
  const negative = ['crash', 'fall', 'drop', 'loss', 'fail', 'crisis', 'war', 'threat', 'concern', 'bearish', '下跌', '危機', '戰爭', '熊市', '暴跌', '新低', '利空', '跌幅', '跳水']
  
  let score = 0
  for (const w of positive) if (text.includes(w)) score += 0.3
  for (const w of negative) if (text.includes(w)) score -= 0.3
  return Math.max(-1, Math.min(1, score))
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

    const body: any = {
      model: 'google/gemini-2.0-flash',
      messages: [{ role: 'user', content: prompt }],
    }

    // Only add response_format for models that support it (Gemini 2.0+)
    const modelId = 'google/gemini-2.0-flash'
    if (modelId.includes('gemini-2') || modelId.includes('gemini-3')) {
      body.response_format = { type: 'json_object' }
    }

    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://newskingdom.store',
      },
      body: JSON.stringify(body),
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
    details: items.slice(0, 10).map((i: any) => {
      const impactKey = detectImpact(i.title || '', i.desc || '')
      return {
        id: i.id,
        headline: extractHeadline(i.title_zh || i.title_translated || i.title || '', lang),
        bias: detectBias(i.source || ''),
        biasSource: i.source || '',
        impact: impactKey,
        impactDescription_zh: IMPACT_DESCRIPTIONS[impactKey]?.content_zh || IMPACT_DESCRIPTIONS.general.content_zh,
        impactDescription_en: IMPACT_DESCRIPTIONS[impactKey]?.content_en || IMPACT_DESCRIPTIONS.general.content_en,
        sentiment: estimateSentiment(i.title_zh || i.title_translated || i.title || '', i.desc_zh || i.desc_translated || i.desc || ''),
      }
    }),
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
          details: (aiData.analysis || items.slice(0, 10).map((i: any) => {
            const impactKey = detectImpact(i.title || '', i.desc || '')
            return {
              id: i.id,
              headline: extractHeadline(i.title_zh || i.title_translated || i.title || '', lang),
              bias: detectBias(i.source || ''),
              biasSource: i.source || '',
              impact: impactKey,
              impactDescription_zh: IMPACT_DESCRIPTIONS[impactKey]?.content_zh || IMPACT_DESCRIPTIONS.general.content_zh,
              impactDescription_en: IMPACT_DESCRIPTIONS[impactKey]?.content_en || IMPACT_DESCRIPTIONS.general.content_en,
              sentiment: estimateSentiment(i.title_zh || i.title_translated || i.title || '', i.desc_zh || i.desc_translated || i.desc || ''),
            }
          }))
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

export const runtime = 'nodejs'