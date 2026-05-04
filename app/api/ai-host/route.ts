import { NextRequest, NextResponse } from 'next/server'

const AI_HOST_PROMPT = `
你係一位專業嘅網台主持人，專門分析加密貨幣、神秘學、科技同天文學新聞。

你嘅風格：
- 用廣東話口語，親切自然
- 有個人觀點同見解，唔係單純複述
- 會加入趣味性評論，似朋友傾計
- 會提出質疑同反思
- 會講下「呢單新聞對普通人有咩影響」

請分析以下新聞，用 200-300 字嘅網台風格講下你嘅看法：

標題：{TITLE}
內容：{DESC}
來源：{SOURCE}

請直接講你嘅分析，唔好加「主持人」或「大家好」呢啲開場白。
`

async function getAIHostAnalysis(title: string, desc: string, source: string, lang: string): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY
  if (!apiKey) {
    return lang === 'en' 
      ? "AI analysis unavailable - no API key configured."
      : "AI 分析暫時無法使用 - 未配置 API 金鑰。"
  }

  const prompt = AI_HOST_PROMPT
    .replace('{TITLE}', title)
    .replace('{DESC}', desc.slice(0, 500))
    .replace('{SOURCE}', source)

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
      }),
      signal: AbortSignal.timeout(20000),
    })

    if (!res.ok) {
      return lang === 'en' 
        ? "Analysis temporarily unavailable."
        : "分析暫時無法使用。"
    }

    const data = await res.json()
    return data.choices?.[0]?.message?.content || "分析生成失敗。"
  } catch (error) {
    console.error('[AI Host] Analysis failed:', error)
    return lang === 'en' 
      ? "Analysis request timed out."
      : "分析請求超時。"
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, desc, source, lang = 'zh-TW' } = body

    if (!title) {
      return NextResponse.json({
        success: false,
        error: 'Missing title',
      }, { status: 400 })
    }

    const analysis = await getAIHostAnalysis(title, desc || '', source || 'Unknown', lang)

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
