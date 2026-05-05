import { NextRequest, NextResponse } from 'next/server';

// Demo transcript for testing without API
function getDemoTranscript(lang: string): string {
  const demos: Record<string, string> = {
    'zh-TW': `[示範轉錄]

歡迎收聽今日嘅 Podcast 節目。今日我哋會討論一啲有趣嘅話題。

首先，我想講下關於科技發展嘅一啲觀察。近年人工智能嘅發展真係好快，由 ChatGPT 嘅出現開始，大家開始意識到 AI 可以做到好多嘢。

第二個話題係關於經濟。全球經濟正面臨好多挑戰，通脹、利率上升，都影響住我哋嘅日常生活。

最後，我想分享一啲關於個人成長嘅想法。無論環境點變，持續學習同保持好奇心都係好重要嘅。

多謝大家收聽，下次再見！`,
    'zh-CN': `[示范转录]

欢迎收听今日的 Podcast 节目。今日我们会讨论一些有趣的话题。

首先，我想讲下关于科技发展的一些观察。近年人工智能的发展真是很快，由 ChatGPT 的出现开始，大家开始意识到 AI 可以做到很多事情。

第二个话题是关于经济。全球经济正面临很多挑战，通胀、利率上升，都影响着我们的日常生活。

最后，我想分享一些关于个人成长的想法。无论环境怎么变，持续学习和保持好奇心都是很重要的。

谢谢大家收听，下次再见！`,
    'en': `[Demo Transcript]

Welcome to today's podcast episode. Today we'll be discussing some interesting topics.

First, I want to talk about some observations on technology development. In recent years, the development of artificial intelligence has been really fast. Since the emergence of ChatGPT, people have started to realize that AI can do many things.

The second topic is about the economy. The global economy is facing many challenges - inflation, rising interest rates, all affecting our daily lives.

Finally, I want to share some thoughts on personal growth. No matter how the environment changes, continuous learning and maintaining curiosity are very important.

Thanks for listening, see you next time!`
  };
  return demos[lang] || demos['en'];
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const lang = formData.get('lang') as string || 'zh-TW';

    if (!file) {
      return NextResponse.json({
        success: false,
        error: 'No file provided',
      }, { status: 400 });
    }

    // Check file size (max 25MB)
    if (file.size > 25 * 1024 * 1024) {
      return NextResponse.json({
        success: false,
        error: 'File too large (max 25MB)',
      }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;

    // If no API key, return demo transcript
    if (!apiKey) {
      console.log('No API key, returning demo transcript');
      return NextResponse.json({
        success: true,
        transcript: getDemoTranscript(lang),
        isDemo: true,
      });
    }

    // Try OpenAI Whisper API
    try {
      const openaiApiKey = process.env.OPENAI_API_KEY;
      
      if (openaiApiKey) {
        const whisperFormData = new FormData();
        whisperFormData.append('file', file);
        whisperFormData.append('model', 'whisper-1');
        whisperFormData.append('language', lang.startsWith('zh') ? 'zh' : 'en');

        const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${openaiApiKey}`,
          },
          body: whisperFormData,
        });

        if (response.ok) {
          const data = await response.json();
          return NextResponse.json({
            success: true,
            transcript: data.text,
          });
        } else {
          const error = await response.json();
          console.error('Whisper API error:', error);
        }
      }
    } catch (err) {
      console.error('OpenAI Whisper failed:', err);
    }

    // Fallback: Use OpenRouter with audio support (if available)
    // Note: OpenRouter doesn't support Whisper directly, so we return demo
    console.log('Falling back to demo transcript');
    return NextResponse.json({
      success: true,
      transcript: getDemoTranscript(lang),
      isDemo: true,
    });

  } catch (err: any) {
    console.error('Transcription error:', err);
    return NextResponse.json({
      success: false,
      error: err.message || 'Transcription failed',
    }, { status: 500 });
  }
}
