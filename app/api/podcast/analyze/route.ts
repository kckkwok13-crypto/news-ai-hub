import { NextRequest, NextResponse } from 'next/server';

interface AnalysisResult {
  summary: string;
  topics: string[];
  sentiment: { positive: number; negative: number; neutral: number };
  keyPoints: string[];
}

function analyzeLocally(transcript: string, lang: string): AnalysisResult {
  const isZh = lang.startsWith('zh');
  
  // Simple keyword extraction
  const text = transcript.toLowerCase();
  
  // Topics detection
  const topicKeywords: Record<string, string[]> = {
    '科技/Technology': ['科技', '人工智能', 'ai', 'chatgpt', 'technology', 'artificial intelligence', 'software', 'app'],
    '經濟/Finance': ['經濟', '金融', '股市', '通脹', '利率', 'economy', 'finance', 'stock', 'inflation', 'rate'],
    '健康/Health': ['健康', '醫療', '運動', 'health', 'medical', 'exercise', 'wellness'],
    '生活/Lifestyle': ['生活', '日常', '習慣', 'life', 'daily', 'habit', 'lifestyle'],
    '教育/Education': ['教育', '學習', '知識', 'education', 'learn', 'knowledge'],
    '商業/Business': ['商業', '企業', '創業', 'business', 'company', 'startup'],
  };

  const topics: string[] = [];
  for (const [topic, keywords] of Object.entries(topicKeywords)) {
    if (keywords.some(kw => text.includes(kw))) {
      topics.push(topic);
    }
  }

  if (topics.length === 0) {
    topics.push(isZh ? '一般話題' : 'General');
  }

  // Sentiment analysis (simple heuristic)
  const positiveWords = ['好', '成功', '進步', '開心', '喜歡', '希望', '機會', 'good', 'success', 'progress', 'happy', 'hope', 'opportunity'];
  const negativeWords = ['壞', '失敗', '問題', '困難', '擔心', '挑戰', 'bad', 'fail', 'problem', 'difficult', 'worry', 'challenge'];
  
  let positive = 0, negative = 0;
  for (const word of positiveWords) {
    const matches = text.match(new RegExp(word, 'g'));
    if (matches) positive += matches.length;
  }
  for (const word of negativeWords) {
    const matches = text.match(new RegExp(word, 'g'));
    if (matches) negative += matches.length;
  }
  
  const total = positive + negative || 1;
  const sentiment = {
    positive: Math.round((positive / total) * 100),
    negative: Math.round((negative / total) * 100),
    neutral: Math.max(0, 100 - Math.round((positive / total) * 100) - Math.round((negative / total) * 100)),
  };

  // Key points extraction (simple: first sentence of each paragraph)
  const paragraphs = transcript.split('\n\n').filter(p => p.trim().length > 10);
  const keyPoints = paragraphs.slice(0, 5).map(p => {
    const sentences = p.split(/[。.!！\n]/).filter(s => s.trim().length > 5);
    return sentences[0]?.trim() || p.trim().slice(0, 100);
  });

  // Summary (first 2-3 significant sentences)
  const allSentences = transcript.split(/[。.!！\n]/).filter(s => s.trim().length > 10);
  const summarySentences = allSentences.slice(0, 3);
  const summary = summarySentences.join(isZh ? '。' : '. ') + (isZh ? '。' : '.');

  return {
    summary,
    topics,
    sentiment,
    keyPoints,
  };
}

async function getAIAnalysis(transcript: string, name: string, lang: string): Promise<AnalysisResult | null> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return null;

  const isZh = lang.startsWith('zh');
  
  const prompt = `Analyze this podcast transcript and provide a structured analysis in ${isZh ? 'Traditional Chinese (Cantonese)' : 'English'}.

Podcast Name: ${name}
Transcript:
${transcript.slice(0, 4000)}

Provide the analysis in JSON format:
{
  "summary": "A 2-3 sentence summary of the main content",
  "topics": ["Topic 1", "Topic 2", "Topic 3"],
  "sentiment": {
    "positive": 40,
    "negative": 20,
    "neutral": 40
  },
  "keyPoints": ["Key point 1", "Key point 2", "Key point 3", "Key point 4"]
}

Guidelines:
- summary: 2-3 sentences capturing the essence
- topics: 3-5 relevant topic tags
- sentiment: percentage breakdown (must sum to 100)
- keyPoints: 3-5 main takeaways`;

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://newskingdom.store",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }
      })
    });

    if (!res.ok) {
      console.error('OpenRouter error:', await res.text());
      return null;
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content;
    
    if (!content) return null;
    
    return JSON.parse(content);
  } catch (e) {
    console.error("AI Analysis failed", e);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { transcript, name, lang = 'zh-TW' } = body;

    if (!transcript) {
      return NextResponse.json({
        success: false,
        error: 'No transcript provided',
      }, { status: 400 });
    }

    // Try AI analysis first
    const aiResult = await getAIAnalysis(transcript, name || 'Podcast', lang);
    
    if (aiResult) {
      return NextResponse.json({
        success: true,
        analysis: aiResult,
        isAI: true,
      });
    }

    // Fallback to local analysis
    const localResult = analyzeLocally(transcript, lang);
    
    return NextResponse.json({
      success: true,
      analysis: localResult,
      isAI: false,
    });

  } catch (err: any) {
    console.error('Analysis error:', err);
    return NextResponse.json({
      success: false,
      error: err.message || 'Analysis failed',
    }, { status: 500 });
  }
}
