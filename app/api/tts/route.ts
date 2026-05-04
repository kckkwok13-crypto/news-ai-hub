import { NextRequest, NextResponse } from 'next/server';

// 免费 TTS 方案：浏览器原生 Web Speech API
// 完全免费，零配置，支持粤语

interface TTSRequest {
  text: string;
  lang?: string;
  voice?: 'male' | 'female';
}

export async function POST(req: NextRequest) {
  try {
    const { text, lang = 'zh-HK', voice = 'female' } = await req.json() as TTSRequest;
    
    if (!text || text.trim().length === 0) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    // 返回浏览器 TTS 配置
    // 前端会使用 Web Speech API 播放
    const voiceKey = lang === 'en' ? 'en-US' : lang;
    
    return NextResponse.json({ 
      useBrowserTTS: true,
      text: text,
      lang: voiceKey,
      voice: voice,
      message: 'Using browser native TTS - completely free!'
    });

  } catch (error: any) {
    console.error('TTS error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
