import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, desc = '', source = 'Unknown', lang = 'zh-TW' } = body

    // Always use keyword-based analysis (no external API needed)
    const analysis = generateKeywordBasedAnalysis(title, desc, source, lang)

    return NextResponse.json({
      success: true,
      analysis,
      isDemo: true,
      timestamp: Date.now(),
    })

  } catch (err: any) {
    console.error('[AI Host] Request failed:', err)
    return NextResponse.json({
      success: false,
      error: err.message || 'Analysis failed',
    }, { status: 500 })
  }
}

function generateKeywordBasedAnalysis(title: string, desc: string, source: string, lang: string): string {
  const fullText = `${title} ${desc}`.toLowerCase()

  // Generate varied responses based on keywords
  const responses = {
    stock: lang === 'en' ? [
      `小婷: Stocks are making headlines today with ${(title || '').slice(0, 30)}...`,
      `阿傑: Stock movements like this often reflect broader market sentiment.`,
      `小婷: What should investors keep in mind?`,
      `阿傑: Diversification is key, and don't panic over short-term volatility.`,
      `小婷: Great advice! Remember to do your own research before investing.`,
      `阿傑: See you next time with more market insights!`,
    ] : [
      `小婷: 今日股市有新動向，「${(title || '').slice(0, 20)}」成為焦點...`,
      `阿傑: 股市波動往往反映市場情緒，呢個也不例外。`,
      `小婷: 投資者應該注意啲咩？`,
      `阿傑: 分散投資好重要，別因為短期波動就亂咁嚟。`,
      `小婷: 好建議！記住投資前要做好功課。`,
      `阿傑: 下次再帶嚟更多市場分析！`,
    ],
    crypto: lang === 'en' ? [
      `小婷: Crypto markets are heating up again, especially around ${(title || '').slice(0, 30)}...`,
      `阿傑: This is interesting timing given recent regulatory developments.`,
      `小婷: How might this affect crypto investors?`,
      `阿傑: Volatility can mean opportunity, but always manage your risk.`,
      `小婷: Smart tips! Thanks for the insights!`,
      `阿傑: Don't forget to verify exchanges before trading. Stay safe out there!`,
    ] : [
      `小婷: 加密貨幣市場又熱起來，「${(title || '').slice(0, 20)}」備受關注...`,
      `阿傑: 面對最近監管發展，呢個時機相當有趣。`,
      `小婷: 咁會點影響加密投資者？`,
      `阿傑: 波動代表機會，但係一定要控制好風險。`,
      `小婷: 精明建議！多謝分享！`,
      `阿傑: 交易前要verify交易所真面目，小心為上！`,
    ],
    tech: lang === 'en' ? [
      `小婷: Tech news is buzzing with ${(title || '').slice(0, 30)} making waves...`,
      `阿傑: This could have significant implications for the industry.`,
      `小婷: What makes this development special?`,
      `阿傑: Technology evolution often changes how we live and work.`,
      `小婷: Fascinating! Innovation keeps moving forward!`,
      `阿傑: Stay tuned for more tech updates!`,
    ] : [
      `小婷: 科技界又有大新聞，「${(title || '').slice(0, 20)}」掀起熱議...`,
      `阿傑: 呢個發展對行業可能有好大影響。`,
      `小婷: 咁特別之處係咩？`,
      `阿傑: 科技演進往往改變我哋嘅生活同工作方式。`,
      `小婷: 好有趣！創新不停向前！`,
      `阿傑: 繼續留意我哋嘅科技資訊！`,
    ],
    economy: lang === 'en' ? [
      `小婷: Economic indicators are shifting with ${(title || '').slice(0, 30)}...`,
      `阿傑: This could affect everything from inflation to employment.`,
      `小婷: How should ordinary people respond?`,
      `阿傑: Stay informed about fiscal policies and their personal impact.`,
      `小婷: Practical advice! Knowledge is power!`,
      `阿傑: We'll keep tracking these economic trends for you!`,
    ] : [
      `小婷: 經濟指標有變化，「${(title || '').slice(0, 20)}」引人關注...`,
      `阿傑: 呢個可能影響通脹、就業等方方面面。`,
      `小婷: 普通市民應該點回應？`,
      `阿傑: 密切關注财经政策，評估對個人財務嘅影響。`,
      `小婷: 實用建議！知識就係力量！`,
      `阿傑: 我哋會繼續追蹤呢啲經濟趨勢！`,
    ],
    health: lang === 'en' ? [
      `小婷: Health news is trending with ${(title || '').slice(0, 30)}...`,
      `阿傑: Medical breakthroughs can significantly impact public health.`,
      `小婷: What should people keep in mind?`,
      `阿傑: Always consult healthcare professionals for medical advice.`,
      `小婷: Important reminder! Health comes first!`,
      `阿傑: Stay healthy and informed!`,
    ] : [
      `小婷: 健康資訊備受關注，「${(title || '').slice(0, 20)}」成為話題...`,
      `阿傑: 醫療突破往往影響公共健康。`,
      `小婷: 市民應該注意啲咩？`,
      `阿傑: 醫療問題記得搵專業人士。`,
      `小婷: 重要提醒！健康第一！`,
      `阿傑: 保持健康，多啲資訊！`,
    ],
    energy: lang === 'en' ? [
      `小婷: Energy markets are changing with ${(title || '').slice(0, 30)}...`,
      `阿傑: Energy policies affect everything from gas prices to renewable investments.`,
      `小婷: What should consumers watch for?`,
      `阿傑: Monitor global supply chains and geopolitical factors.`,
      `小婷: Smart insights! Energy is crucial!`,
      `阿傑: Stay updated on energy trends!`,
    ] : [
      `小婷: 能源市場有變化，「${(title || '').slice(0, 20)}」引人關注...`,
      `阿傑: 能源政策影響汽油價格同可再生能源投資。`,
      `小婷: 消費者應該留意啲咩？`,
      `阿傑: 密切關注全球供應鏈同地緣政治因素。`,
      `小婷: 精明分析！能源至關重要！`,
      `阿傑: 繼續留意能源趨勢！`,
    ],
    default: lang === 'en' ? [
      `小婷: Welcome to our news analysis! Today we're looking at ${(title || '').slice(0, 40)}...`,
      `阿傑: This is really interesting. Let me break it down.`,
      `小婷: What makes this particularly significant?`,
      `阿傑: The key point is how it affects everyday people.`,
      `小婷: So what should our listeners pay attention to?`,
      `阿傑: Stay informed and understand different perspectives.`,
      `小婷: Great insights! Thanks for tuning in!`,
      `阿傑: Remember to verify your news sources. See you next time!`,
    ] : [
      `小婷: 歡迎收聽我哋嘅新聞分析！今日我哋睇下${(title || '').slice(0, 30)}...`,
      `阿傑: 呢單新聞幾有意思，等我同大家拆解一下。`,
      `小婷: 咁呢件事有咩特別之處？`,
      `阿傑: 最重要嘅係，呢件事對普通人嘅日常生活有影響。`,
      `小婷: 咁聽眾應該留意啲咩？`,
      `阿傑: 保持資訊靈通，了解唔同角度嘅觀點。`,
      `小婷: 分析得好！多謝大家收聽！`,
      `阿傑: 記住驗證新聞來源。下次見！`,
    ]
  }

  if (fullText.includes('stock') || fullText.includes('股') || fullText.includes('market') || fullText.includes('投資') || fullText.includes('invest')) {
    return responses.stock.join('\n')
  } else if (fullText.includes('crypto') || fullText.includes('比特') || fullText.includes('幣') || fullText.includes('coin') || fullText.includes('bitcoin') || fullText.includes('以太') || fullText.includes('eth')) {
    return responses.crypto.join('\n')
  } else if (fullText.includes('tech') || fullText.includes('科技') || fullText.includes('ai') || fullText.includes('gpt') || fullText.includes('人工') || fullText.includes('nvidia') || fullText.includes('google')) {
    return responses.tech.join('\n')
  } else if (fullText.includes('econom') || fullText.includes('經濟') || fullText.includes('利率') || fullText.includes('通脹') || fullText.includes('inflation') || fullText.includes('gdp')) {
    return responses.economy.join('\n')
  } else if (fullText.includes('health') || fullText.includes('健康') || fullText.includes('medical') || fullText.includes('藥') || fullText.includes('disease')) {
    return responses.health.join('\n')
  } else if (fullText.includes('energy') || fullText.includes('能源') || fullText.includes('oil') || fullText.includes('石油') || fullText.includes('gas') || fullText.includes('天然')) {
    return responses.energy.join('\n')
  }
  return responses.default.join('\n')
}

export const runtime = 'nodejs'