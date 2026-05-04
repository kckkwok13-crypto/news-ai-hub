import { NextRequest, NextResponse } from 'next/server'

// AI 主持人分析 - 雙主持人對話風格（類似 NotebookLM）
async function getDualHostAnalysis(item: any, lang: string) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  
  const hostNames = {
    male: '阿傑',
    female: '小婷'
  };
  
  const prompt = `
    你是一個新聞網台的兩位主持人：${hostNames.male}（男，理性分析型）和 ${hostNames.female}（女，親和力強，善於提問）。
    
    請用對話形式討論以下新聞，風格要生動有趣，像真正的電台節目：
    
    新聞標題：${item.title_zh || item.title}
    新聞內容：${item.desc_zh || item.desc}
    新聞來源：${item.source}
    
    要求：
    1. 兩位主持人輪流發言，用「${hostNames.male}:」和「${hostNames.female}:」標記
    2. 先由小婷介紹話題，阿傑進行分析
    3. 討論這則新聞的背景、影響、爭議點
    4. 加入適當的互動和提問
    5. 最後給觀眾一個思考方向
    6. 使用${lang === 'en' ? 'English' : '廣東話口語（傳統中文）'}
    7. 對話長度約 6-8 個來回
    
    輸出格式（JSON）：
    {
      "item": { "title": "標題", "source": "來源" },
      "dialogue": [
        { "host": "${hostNames.female}", "line": "..." },
        { "host": "${hostNames.male}", "line": "..." },
        ...
      ],
      "summary": "一句總結"
    }
  `;

  if (!apiKey) {
    // 無 API Key 時返回模擬對話
    return {
      item: { title: item.title_zh || item.title, source: item.source },
      dialogue: [
        { host: hostNames.female, line: `${item.title_zh || item.title}，呢單新聞幾有趣喎！` },
        { host: hostNames.male, line: `係嘅，我哋一齊睇下背後有咩值得關注嘅地方。` },
        { host: hostNames.female, line: `呢件事對普通人有咩影響？` },
        { host: hostNames.male, line: `主要影響係...需要 API Key 先可以深度分析。` },
      ],
      summary: "需要設定 API Key 以啟用完整分析功能",
      note: "請在 Vercel 環境變數設定 OPENROUTER_API_KEY"
    };
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
        response_format: { type: "json_object" }
      }),
      signal: AbortSignal.timeout(30000)
    });

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const data = await res.json();
    const content = data.choices[0]?.message?.content;
    
    if (content) {
      return JSON.parse(content);
    }
  } catch (err) {
    console.error('AI Host analysis failed:', err);
  }

  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const item = body.item;
    const lang = body.lang || 'zh-TW';

    if (!item) {
      return NextResponse.json({ 
        success: false, 
        error: 'No item provided' 
      }, { status: 400 });
    }

    const analysis = await getDualHostAnalysis(item, lang);

    if (analysis) {
      return NextResponse.json({
        success: true,
        analysis,
        timestamp: Date.now(),
      });
    }

    return NextResponse.json({
      success: false,
      error: 'AI analysis failed',
    }, { status: 500 });

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message || 'Analysis failed',
    }, { status: 500 });
  }
}
