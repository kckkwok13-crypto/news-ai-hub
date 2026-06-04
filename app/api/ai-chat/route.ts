import { NextRequest, NextResponse } from 'next/server'

const MODEL_RESPONSES = {
  greeting: [
    '👋 你好！我是阿傑，NewsKingdom 的 AI 分析師。你可以問我關於任何新聞嘅問題，我會盡力幫你分析！',
    '你好！歡迎來到 NewsKingdom！我係阿傑，有咩我可以幫你分析嘅？',
    '👋 早晨！我係阿傑，今日有咩新聞想了解多啲？'
  ],
  market: [
    '📈 市場分析建議：\n\n1. 留意央行政策走向\n2. 關注主要指數表現\n3. 注意資金流向板塊\n4. 控制倉位，做好風險管理',
    '💹 對比上年同期，目前市場氣氛偏向觀望。建議：\n• 分散投資\n• 設止蝕位\n• 關注宏觀經濟數據',
    '📊 市場走勢分析：\n近期波動加劇，建議投資者保持謹慎，多做功課再入市。'
  ],
  crypto: [
    '₿ 加密貨幣觀點：\n\n加密市場波動大，請注意以下幾點：\n• 比特幣ETF流入流出\n• 宏觀經濟影響\n• 監管政策變化\n• 技術面支持位',
    '🔐 加密貨幣分析：\n呢個範疇風險較高，建議了解項目基本面，先做好風險管理再考慮入場。',
    '₿ 比特幣近期走勢受到 ETF 資金流向同減半預期影響，建議密切關注機構持倉變化。'
  ],
  tech: [
    '💻 科技行業動態：\n\nAI 發展迅速，以下範疇值得關注：\n• 生成式 AI 應用\n• 晶片需求\n• 雲端服務增長',
    '🤖 科技股分析：\n大型科企嘅 AI 投資可能影響未來幾年估值，建議關注佢哋嘅研發開支同產品路線圖。',
    '💡 科技趨勢：\n，半導體需求回暖，AI 相關個股繼續係市場焦點。'
  ],
  economy: [
    '📊 宏觀經濟分析：\n\n通脹同利率係關鍵變數：\n• 各國央行政策取向\n• 就業數據\n• GDP 增長\n• 消費者信心',
    '🏛️ 經濟數據：\n留意通脹走勢，如果降溫訊號明確，可能影響央行減息預期。',
    '💰 宏觀經濟觀點：\n全球經濟放緩但通脹黏性依然較高，投資者需要喺成長同防御之間做平衡。'
  ],
  political: [
    '🏛️ 政策影響分析：\n\n地緣政治同貿易政策可以影響市場：\n• 大選年政策走向\n• 國際關係變化\n• 行業監管政策',
    '🌍 地緣政治因素：\n國際關係變化可能影響特定行業，建議關注相關新聞並評估影響。',
    '📜 政策解讀：\n政府政策對特定行業有直接影響，例如新能源、科技監管等範疇需要特別留意。'
  ],
  general: [
    '📰 對於呢個話題，建議你：\n\n1. 查看多個消息來源\n2. 了解事情背景\n3. 評估各方觀點\n4. 獨立思考判斷',
    '🔍 分析建議：\n遇到重要新聞，最好交叉睇幾個唔同立場嘅媒體，咁樣可以得到更全面嘅睇法。',
    '💭 作為分析師，我建議你保持批判性思維，唔好輕信單一消息來源，要學會自己判斷消息嘅可靠性。'
  ],
  thanks: [
    '唔客氣！如果有任何其他問題，隨時問我！',
    '👍 有咩再問我啦，我隨時幫你分析！',
    '😊 希望你覺得有幫助！有其他問題記得問我！'
  ],
  news_tip: [
    '📋 睇新聞嘅小貼士：\n\n1. 標題黨要小心\n2. 睇下消息來源係咪可靠\n3. 留意數據係咪有根據\n4. 了解上下文好重要',
    '🔎 建議你參考多個資訊來源，特別係主流財經媒體，咁樣可以得到更全面嘅資訊。',
    '📚 了解事情最好從多個角度出發，唔好單睇一個媒體嘅報道。可以的話，查看官方資料同數據。'
  ]
}

function getResponse(prompt: string): string {
  const lowerPrompt = prompt.toLowerCase()

  // Check for specific keywords
  if (lowerPrompt.includes('hello') || lowerPrompt.includes('你好') || lowerPrompt.includes('早晨') || lowerPrompt.includes('hi')) {
    return MODEL_RESPONSES.greeting[Math.floor(Math.random() * MODEL_RESPONSES.greeting.length)]
  }

  if (lowerPrompt.includes('比特') || lowerPrompt.includes('btc') || lowerPrompt.includes('crypto') || lowerPrompt.includes('以太') || lowerPrompt.includes('eth')) {
    return MODEL_RESPONSES.crypto[Math.floor(Math.random() * MODEL_RESPONSES.crypto.length)]
  }

  if (lowerPrompt.includes('股票') || lowerPrompt.includes('股市') || lowerPrompt.includes('投資') || lowerPrompt.includes('市場')) {
    return MODEL_RESPONSES.market[Math.floor(Math.random() * MODEL_RESPONSES.market.length)]
  }

  if (lowerPrompt.includes('科技') || lowerPrompt.includes('ai') || lowerPrompt.includes('nvidia') || lowerPrompt.includes('apple') || lowerPrompt.includes('google')) {
    return MODEL_RESPONSES.tech[Math.floor(Math.random() * MODEL_RESPONSES.tech.length)]
  }

  if (lowerPrompt.includes('經濟') || lowerPrompt.includes('通脹') || lowerPrompt.includes('利率') || lowerPrompt.includes('gdp')) {
    return MODEL_RESPONSES.economy[Math.floor(Math.random() * MODEL_RESPONSES.economy.length)]
  }

  if (lowerPrompt.includes('政治') || lowerPrompt.includes('政府') || lowerPrompt.includes('政策') || lowerPrompt.includes('戰爭')) {
    return MODEL_RESPONSES.political[Math.floor(Math.random() * MODEL_RESPONSES.political.length)]
  }

  if (lowerPrompt.includes('thanks') || lowerPrompt.includes('多謝') || lowerPrompt.includes(' thx')) {
    return MODEL_RESPONSES.thanks[Math.floor(Math.random() * MODEL_RESPONSES.thanks.length)]
  }

  if (lowerPrompt.includes('點睇') || lowerPrompt.includes('點解') || lowerPrompt.includes('點評') || lowerPrompt.includes('分析')) {
    return MODEL_RESPONSES.general[Math.floor(Math.random() * MODEL_RESPONSES.general.length)]
  }

  // Default to news tips
  return MODEL_RESPONSES.news_tip[Math.floor(Math.random() * MODEL_RESPONSES.news_tip.length)]
}

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

    // Return a smart response based on keywords
    const response = getResponse(prompt)

    return NextResponse.json({ content: response })
  } catch (error) {
    console.error('AI API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}