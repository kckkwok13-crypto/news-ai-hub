import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { prompt } = body

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    // Return a simple demo response
    const response = `感謝你嘅提問！作為阿傑 AI 分析師，我建議你：

1. 關注新聞嘅來源可靠性
2. 多角度了解事件背後嘅原因
3. 留意相關市場嘅最新動態

如果你有更具體嘅問題，歡迎再次提問！`

    return NextResponse.json({ content: response })
  } catch (error) {
    console.error('AI API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}