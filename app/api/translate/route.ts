import { NextRequest, NextResponse } from 'next/server'

// Translate text using Google Translate API (free)
async function translateText(text: string, targetLang: string): Promise<string> {
  if (!text || text.trim().length === 0) return text
  
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) })
    
    if (!res.ok) return text
    
    const data = await res.json()
    // Response format: [[[translatedText, originalText, null, null, ...], ...], ...]
    if (data && data[0]) {
      return data[0].map((item: any) => item[0] || '').join('')
    }
    return text
  } catch {
    return text
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { text, targetLang = 'zh-TW' } = body
    
    if (!text) {
      return NextResponse.json({ success: false, error: 'No text provided' })
    }
    
    const translated = await translateText(text, targetLang)
    
    return NextResponse.json({
      success: true,
      original: text,
      translated,
      targetLang,
    })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message || 'Translation failed',
    }, { status: 500 })
  }
}
