import { NextRequest, NextResponse } from 'next/server'

// AI 主持人分析 - 雙主持人對話風格（類似 NotebookLM）
async function getDualHostAnalysis(title: string, desc: string, source: string, lang: string) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  
  const hostNames = {
    male: lang === "en" ? "Jack" : "阿傑",
    female: lang === "en" ? "Emma" : "小婷"
  };
  
  const prompt = `
    你是一個新聞網台的兩位主持人：${hostNames.male}（男，理性分析型）和 ${hostNames.female}（女，親和力強，善於提問）。
    
    請用對話形式討論以下新聞，風格要生動有趣，像真正的電台節目：
    
    新聞標題：${title}
    新聞內容：${desc}
    新聞來源：${source}
    
    【重要要求 - 必須遵守】：
    1. 兩位主持人輪流發言，格式必須嚴格遵循：
       - "${hostNames.male}: 內容"（男主持發言）
       - "${hostNames.female}: 內容"（女主持發言）
    
    2. 對話要自然生動，必須包含：
       - 適當的語氣詞（如：嗯、啊、咁樣講、好似幾有意思、嘩、係喎）
       - 主持人之間的互動和回應（如：${hostNames.female}: 咁${hostNames.male}你點睇？）
       - 追問和補充（如：咁即係點？、會唔會影響到...？）
       - 適度的停頓感覺（用標點符號表達）
       - 聽眾角度的思考
    
    3. 結構安排（約 8-10 個來回）：
       - 開場：女主持引入話題，帶出好奇心
       - 分析：男主持深入分析，提供背景
       - 討論：兩人互動討論不同角度
       - 爭議：提出可能的爭議點或疑問
       - 總結：給聽眾一個思考方向
    
    4. 使用${lang === "en" ? "English with natural flow" : "廣東話口語（傳統中文），要地道自然"}
    
    5. 【嚴禁】：
       - 不要用書面語
       - 不要機械式念稿
       - 不要過於嚴肅
    
    直接輸出對話內容，每行格式：主持人名: 內容
    每個發言控制在 1-3 句話，保持節奏感。
  `;

  if (!apiKey) {
    // 無 API Key 時返回模擬對話（更完整）
    const lines = lang === "en" ? [
      hostNames.female + ": Welcome to our news analysis! Today we're looking at: " + title,
      hostNames.male + ": This is a fascinating topic. Let me break it down for our listeners.",
      hostNames.female + ": What makes this news particularly interesting?",
      hostNames.male + ": Well, the key point here is the potential impact on everyday people.",
      hostNames.female + ": So what should our listeners pay attention to?",
      hostNames.male + ": I think the main takeaway is to stay informed and understand both sides.",
      hostNames.female + ": Great analysis! Thanks for tuning in, everyone!",
      hostNames.male + ": And remember, always verify your news sources. See you next time!",
    ] : [
      hostNames.female + ": 歡迎收聽我哋嘅新聞分析！今日我哋睇下：" + title,
      hostNames.male + ": 呢單新聞幾有意思，等我同大家拆解一下。",
      hostNames.female + ": 咁呢件事有咩特別之處？",
      hostNames.male + ": 最重要嘅係，呢件事對普通人嘅日常生活可能有啲影響。",
      hostNames.female + ": 咁聽眾應該留意啲咩？",
      hostNames.male + ": 我覺得最重要係保持資訊靈通，同埋了解唔同角度嘅觀點。",
      hostNames.female + ": 分析得好！多謝大家收聽！",
      hostNames.male + ": 記住，要驗證新聞來源。下次見！",
    ];
    return { analysis: lines.join("\n"), isDemo: true };
  }

  try {
    console.log('[AI Host] Calling OpenRouter API...');
    
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
        max_tokens: 2000,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('[AI Host] API error:', res.status, errorText);
      throw new Error(`API returned ${res.status}: ${errorText}`);
    }

    const data = await res.json();
    const content = data.choices[0]?.message?.content;
    
    if (!content) {
      throw new Error('No content in API response');
    }
    
    console.log('[AI Host] Analysis successful, length:', content.length);
    return { analysis: content, isDemo: false };
    
  } catch (err: any) {
    console.error('[AI Host] Analysis failed:', err.message);
    return { error: err.message || "AI 分析失敗，請稍後再試" };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const title = body.title;
    const desc = body.desc || "";
    const source = body.source || "Unknown";
    const lang = body.lang || "zh-TW";

    if (!title) {
      return NextResponse.json({ 
        success: false, 
        error: "No title provided" 
      }, { status: 400 });
    }

    const result = await getDualHostAnalysis(title, desc, source, lang);

    if (result.error) {
      return NextResponse.json({
        success: false,
        error: result.error,
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      analysis: result.analysis,
      isDemo: result.isDemo || false,
      timestamp: Date.now(),
    });

  } catch (err: any) {
    console.error('[AI Host] Request failed:', err);
    return NextResponse.json({
      success: false,
      error: err.message || "Analysis failed",
    }, { status: 500 });
  }
}
