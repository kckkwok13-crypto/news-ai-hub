import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, desc = '', source = 'Unknown', lang = 'zh-TW' } = body

    // Return demo mode response without calling any API
    const fallbackLines = lang === 'en' ? [
      `小婷: Welcome to our news analysis! Today we're looking at: ${(title || '').slice(0, 80)}`,
      `阿傑: This is really interesting. Let me break it down for our listeners.`,
      `小婷: What makes this particularly significant?`,
      `阿傑: The key point is the potential impact on everyday people like us.`,
      `小婷: So what should our listeners pay attention to?`,
      `阿傑: I'd say stay informed and understand both sides of the story.`,
      `小婷: Great insights! Thanks for tuning in, everyone!`,
      `阿傑: Remember to verify your news sources. See you next time!`,
    ] : [
      `小婷: 歡迎收聽我哋嘅新聞分析！今日我哋睇下：${(title || '').slice(0, 40)}`,
      `阿傑: 呢單新聞幾有意思，等我同大家拆解一下。`,
      `小婷: 咁呢件事有咩特別之處？`,
      `阿傑: 最重要嘅係，呢件事對普通人嘅日常生活可能有啲影響。`,
      `小婷: 咁聽眾應該留意啲咩？`,
      `阿傑: 我覺得最重要係保持資訊靈通，同埋了解唔同角度嘅觀點。`,
      `小婷: 分析得好！多謝大家收聽！`,
      `阿傑: 記住，要驗證新聞來源。下次見！`,
    ]

    return NextResponse.json({
      success: true,
      analysis: fallbackLines.join('\n'),
      isDemo: true,
      timestamp: Date.now(),
    })

  } catch (err: any) {
    console.error('[AI Host] Request failed:', err)
    return NextResponse.json({ success: false, error: err.message || 'Analysis failed' }, { status: 500 })
  }
}

export const runtime = 'nodejs'