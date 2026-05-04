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
    
    要求：
    1. 兩位主持人輪流發言，用「${hostNames.male}:」和「${hostNames.female}:」標記
    2. 先由女主持介紹話題，男主持進行分析
    3. 討論這則新聞的背景、影響、爭議點
    4. 加入適當的互動和提問
    5. 最後給觀眾一個思考方向
    6. 使用${lang === "en" ? "English" : "廣東話口語（傳統中文）"}
    7. 對話長度約 6-8 個來回
    
    直接輸出對話內容，每行格式：主持人名: 內容
  `;

  if (!apiKey) {
    // 無 API Key 時返回模擬對話
    const lines = lang === "en" ? [
      `${hostNames.female}: ${title} - this is quite interesting!`,
      `${hostNames.male}: Yes, let us look at what makes this news noteworthy.`,
      `${hostNames.female}: What impact might this have on ordinary people?`,
      `${hostNames.male}: The main impact is... (need API Key for full analysis)`,
    ] : [
      `${hostNames.female}: ${title}，呢單新聞幾有趣喎！`,
      `${hostNames.male}: 係嘅，我哋一齊睇下背後有咩值得關注嘅地方。`,
      `${hostNames.female}: 呢件事對普通人有咩影響？`,
      `${hostNames.male}: 主要影響係...需要設定 API Key 先可以深度分析。`,
    ];
    return lines.join("\n");
  }

  try {
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
      }),
      signal: AbortSignal.timeout(30000)
    });

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const data = await res.json();
    return data.choices[0]?.message?.content || null;
  } catch (err) {
    console.error('AI Host analysis failed:', err);
  }

  return null;
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

    const analysis = await getDualHostAnalysis(title, desc, source, lang);

    if (analysis) {
      return NextResponse.json({
        success: true,
        analysis,
        timestamp: Date.now(),
      });
    }

    return NextResponse.json({
      success: false,
      error: "AI analysis failed",
    }, { status: 500 });

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message || "Analysis failed",
    }, { status: 500 });
  }
}
