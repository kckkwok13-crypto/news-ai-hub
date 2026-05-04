import { NextRequest, NextResponse } from 'next/server';

// Google Cloud TTS API
// 需要 GOOGLE_CLOUD_TTS_API_KEY 在环境变量中

interface TTSRequest {
  text: string;
  lang?: string; // 'zh-HK', 'en-US', 'zh-CN'
  voice?: 'male' | 'female';
}

export async function POST(req: NextRequest) {
  try {
    const { text, lang = 'zh-HK', voice = 'female' } = await req.json() as TTSRequest;
    
    const apiKey = process.env.GOOGLE_CLOUD_TTS_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'Missing GOOGLE_CLOUD_TTS_API_KEY. Please add it to environment variables.',
        hint: 'Go to Google Cloud Console > APIs & Services > Credentials > Create API Key'
      }, { status: 500 });
    }

    // 选择声音
    // 广东话: yue-HK 标准, 但支持有限
    // 备选: cmn-CN (普通话) 或 en-US
    let voiceName = 'yue-HK-Standard-A'; // 默认女声 (广东话)
    
    if (lang === 'zh-HK' || lang === 'zh-TW') {
      // 广东话 - 使用 yue-HK 或 fallback 到普通话
      voiceName = voice === 'male' ? 'yue-HK-Standard-B' : 'yue-HK-Standard-A';
    } else if (lang === 'zh-CN') {
      // 普通话
      voiceName = voice === 'male' ? 'cmn-CN-Standard-B' : 'cmn-CN-Standard-A';
    } else if (lang === 'en-US' || lang === 'en') {
      // 英语
      voiceName = voice === 'male' ? 'en-US-Standard-D' : 'en-US-Standard-C';
    }

    // 调用 Google Cloud TTS API
    const response = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { text: text },
          voice: {
            languageCode: lang === 'en' ? 'en-US' : lang === 'zh-CN' ? 'cmn-CN' : 'yue-HK',
            name: voiceName,
            ssmlGender: voice === 'male' ? 'MALE' : 'FEMALE'
          },
          audioConfig: {
            audioEncoding: 'MP3',
            speakingRate: 0.95, // 稍慢一点,更清晰
            pitch: voice === 'male' ? -2 : 2 // 男声低沉,女声清脆
          }
        })
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Google TTS error:', error);
      
      // 如果广东话不支持, fallback 到普通话
      if (lang === 'zh-HK' && response.status === 400) {
        console.log('Falling back to cmn-CN (Mandarin)...');
        
        const fallbackResponse = await fetch(
          `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              input: { text: text },
              voice: {
                languageCode: 'cmn-CN',
                name: voice === 'male' ? 'cmn-CN-Standard-B' : 'cmn-CN-Standard-A',
                ssmlGender: voice === 'male' ? 'MALE' : 'FEMALE'
              },
              audioConfig: {
                audioEncoding: 'MP3',
                speakingRate: 0.95,
                pitch: voice === 'male' ? -2 : 2
              }
            })
          }
        );
        
        if (!fallbackResponse.ok) {
          return NextResponse.json({ error: 'TTS failed even with fallback' }, { status: 500 });
        }
        
        const fallbackData = await fallbackResponse.json();
        return NextResponse.json({ 
          audioContent: fallbackData.audioContent,
          format: 'mp3',
          voice: voiceName,
          fallback: true,
          fallbackVoice: 'cmn-CN'
        });
      }
      
      return NextResponse.json({ error: 'TTS API failed', details: error }, { status: 500 });
    }

    const data = await response.json();
    
    return NextResponse.json({ 
      audioContent: data.audioContent,
      format: 'mp3',
      voice: voiceName
    });
    
  } catch (error: any) {
    console.error('TTS error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
