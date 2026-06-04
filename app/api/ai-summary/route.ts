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

function detectImpact(title: string, desc: string): string {
  const text = ((title || '') + ' ' + (desc || '')).toLowerCase()
  const economic = ['market', 'stock', 'economy', 'trade', 'finance', 'invest', 'profit', 'loss', 'bank', 'money', 'fund', 'ipo', 'crypto', 'bitcoin', 'price', 'cost', 'tax', 'gdp', 'inflation', 'rate', '股份', '股市', '經濟', '貿易', '投資', '銀行', '金融', '貨幣', '價格', '通脹']
  const political = ['election', 'government', 'policy', 'law', 'vote', 'president', 'minister', 'congress', 'war', 'peace', 'military', 'rights', 'protest', 'sanction', 'diplomat', '政府', '政策', '戰爭', '軍事', '選舉']
  const tech = ['ai', 'tech', 'cyber', 'digital', 'software', 'app', 'internet', 'data', 'robot', 'automation', 'chip', 'semiconductor', 'nvidia', 'openai', 'google', 'apple', 'microsoft', '科技', '軟件', '網絡']

  if (economic.some(k => text.includes(k))) return 'economic'
  if (political.some(k => text.includes(k))) return 'political'
  if (tech.some(k => text.includes(k))) return 'tech'
  return 'general'
}

function extractHeadline(title: string): string {
  if (!title) return ''
  const cleaned = title.replace(/^((LIVE|Alert|Breaking)[,: ]*)*/, '').trim()
  if (cleaned.length <= 60) return cleaned
  return cleaned.slice(0, 55) + '…'
}

function estimateSentiment(title: string, desc: string): number {
  const text = ((title || '') + ' ' + (desc || '')).toLowerCase()
  const positive = ['surge', 'gain', 'rise', 'grow', 'positive', 'success', 'win', 'boost', 'rally', '上漲', '增長', '成功', '牛市']
  const negative = ['crash', 'fall', 'drop', 'loss', 'fail', 'crisis', 'war', 'threat', 'concern', '下跌', '危機', '戰爭', '熊市']
  let score = 0
  for (const w of positive) if (text.includes(w)) score += 0.3
  for (const w of negative) if (text.includes(w)) score -= 0.3
  return Math.max(-1, Math.min(1, score))
}

function detectTrends(items: any[]): string[] {
  const trends: string[] = []
  const text = items.map(i => (i.title_zh || i.title_translated || i.title || '')).join(' ').toLowerCase()

  if (text.includes('ai') || text.includes('人工')) trends.push('AI/人工智能')
  if (text.includes('crypto') || text.includes('比特')) trends.push('加密貨幣')
  if (text.includes('fed') || text.includes('利率')) trends.push('利率政策')
  if (text.includes('trade') || text.includes('貿易')) trends.push('貿易戰')
  if (text.includes('tech') || text.includes('科技')) trends.push('科技創新')

  return trends.slice(0, 5)
}

function estimateOverallSentiment(items: any[]): { positive: number; negative: number; neutral: number } {
  let positive = 0, negative = 0
  for (const item of items) {
    const score = estimateSentiment(item.title_zh || item.title_translated || item.title || '', item.desc_zh || item.desc_translated || item.desc || '')
    if (score > 0) positive++
    else if (score < 0) negative++
  }
  const neutral = items.length - positive - negative
  return {
    positive: Math.round((positive / items.length) * 100),
    negative: Math.round((negative / items.length) * 100),
    neutral: Math.round((neutral / items.length) * 100),
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

    // Count sources
    const sources: Record<string, number> = {}
    for (const item of items) {
      sources[item.source || 'Unknown'] = (sources[item.source || 'Unknown'] || 0) + 1
    }

    const sourceCount = Object.keys(sources).length
    const keywords = items.slice(0, 5).map((i: any) => {
      const words = (i.title_zh || i.title_translated || i.title || '').split(/\s+/).slice(0, 3)
      return words.join('')
    }).filter(Boolean)

    const summary = lang === 'en'
      ? `Today's news includes ${items.length} articles from ${sourceCount} sources.`
      : `今日新聞共收錄 ${items.length} 條，來自 ${sourceCount} 個來源。`

    return NextResponse.json({
      success: true,
      analysis: {
        summary_zh: summary,
        summary_en: summary,
        trends: keywords.slice(0, 5),
        sentiment: { positive: 30, negative: 20, neutral: 50 },
        details: items.slice(0, 10).map((i: any) => {
          const impactKey = detectImpact(i.title || '', i.desc || '')
          return {
            id: i.id,
            headline: extractHeadline(i.title_zh || i.title_translated || i.title || ''),
            impact: impactKey,
            impactDescription_zh: IMPACT_DESCRIPTIONS[impactKey]?.content_zh || IMPACT_DESCRIPTIONS.general.content_zh,
            impactDescription_en: IMPACT_DESCRIPTIONS[impactKey]?.content_en || IMPACT_DESCRIPTIONS.general.content_en,
            sentiment: estimateSentiment(i.title_zh || i.title_translated || i.title || '', i.desc_zh || i.desc_translated || i.desc || ''),
          }
        }),
      },
      timestamp: Date.now(),
    })

  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message || 'Analysis failed' }, { status: 500 })
  }
}

export const runtime = 'nodejs'