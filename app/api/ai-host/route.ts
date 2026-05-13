import { NextRequest, NextResponse } from 'next/server'

const HOST_NAMES = {
  male: { 'zh-TW': '阿傑', 'zh-CN': '阿杰', 'en': 'Jack' },
  female: { 'zh-TW': '小婷', 'zh-CN': '小婷', 'en': 'Emma' }
}

async function getDualHostAnalysis(title: string, desc: string, source: string, lang: string) {
  const apiKey = process.env.OPENROUTER_API_KEY
  const hostMale = HOST_NAMES.male[lang as keyof typeof HOST_NAMES.male] || HOST_NAMES.male['zh-TW']
  const hostFemale = HOST_NAMES.female[lang as keyof typeof HOST_NAMES.female] || HOST_NAMES.female['zh-TW']

  const fallbackLines = lang === 'en' ? [
    `${hostFemale}: Welcome to our news analysis! Today we're looking at: ${title.slice(0, 80)}`,
    `${hostMale}: This is really interesting. Let me break it down for our listeners.`,
    `${hostFemale}: What makes this particularly significant?`,
    `${hostMale}: The key point is the potential impact on everyday people like us.`,
    `${hostFemale}: So what should our listeners pay attention to?`,
    `${hostMale}: I'd say stay informed and understand both sides of the story.`,
    `${hostFemale}: Great insights! Thanks for tuning in, everyone!`,
    `${hostMale}: Remember to verify your news sources. See you next time!`,
  ] : [
    `${hostFemale}: 歡迎收聽我哋嘅新聞分析！今日我哋睇下：${title.slice(0, 40)}`,
    `${hostMale}: 呢單新聞幾有意思，等我同大家拆解一下。`,
    `${hostFemale}: 咁呢件事有咩特別之處？`,
    `${hostMale}: 最重要嘅係，呢件事對普通人嘅日常生活可能有啲影響。`,
    `${hostFemale}: 咁聽眾應該留意啲咩？`,
    `${hostMale}: 我覺得最重要係保持資訊靈通，同埋了解唔同角度嘅觀點。`,
    `${hostFemale}: 分析得好！多謝大家收聽！`,
    `${hostMale}: 記住，要驗證新聞來源。下次見！`,
  ]

  if (!apiKey) {
    return { analysis: fallbackLines.join('\n'), isDemo: true }
  }

  const prompt = `你是一個新聞網台的兩位主持人：${hostMale}（男，理性分析型）和 ${hostFemale}（女，親和力強，善於提問）。

請用對話形式討論以下新聞，風格要生動有趣，像真正的電台節目：

新聞標題：${title}
新聞來源：${source}

【重要要求】：
1. 格式必須嚴格遵循：
   - "${hostMale}: 內容"（男主持發言）
   - "${hostFemale}: 內容"（女主持發言）

2. 對話要自然生動，必須包含：
   - 適當的語氣詞（如：嗯、啊、咁樣講、好似幾有意思、嘩、係喎）
   - 主持人之間的互動和回應
   - 追問和補充
   - 適度的停頓感覺

3. 使用${lang === 'en' ? 'English' : '廣東話口語（傳統中文），要地道自然'}

4. 【嚴禁】：不要用書面語，不要機械式念稿

直接輸出對話內容，每行格式：主持人名: 內容`

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
        max_tokens: 2000,
      }),
      signal: controller.signal
    })

    clearTimeout(timeoutId)

    if (!res.ok) {
      const errorText = await res.text()
      console.error('[AI Host] API error:', res.status, errorText)
      throw new Error(`API returned ${res.status}`)
    }

    const data = await res.json()
    const content = data.choices?.[0]?.message?.content

    if (!content) {
      throw new Error('No content in API response')
    }

    return { analysis: content, isDemo: false }

  } catch (err: any) {
    console.error('[AI Host] Analysis failed:', err.message)
    return { analysis: fallbackLines.join('\n'), isDemo: true, error: err.message }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, desc = '', source = 'Unknown', lang = 'zh-TW' } = body

    if (!title) {
      return NextResponse.json({ success: false, error: 'No title provided' }, { status: 400 })
    }

    const result = await getDualHostAnalysis(title, desc, source, lang)

    return NextResponse.json({
      success: true,
      analysis: result.analysis,
      isDemo: result.isDemo || false,
      timestamp: Date.now(),
    })

  } catch (err: any) {
    console.error('[AI Host] Request failed:', err)
    return NextResponse.json({ success: false, error: err.message || 'Analysis failed' }, { status: 500 })
  }
}

export const runtime = 'nodejs'