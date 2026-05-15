import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('[Contact] New submission:', { name, email, message: message.slice(0, 100) })

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      timestamp: Date.now()
    })

  } catch (err: any) {
    console.error('[Contact] Error:', err)
    return NextResponse.json(
      { success: false, error: err.message || 'Failed to process contact form' },
      { status: 500 }
    )
  }
}

export const runtime = 'nodejs'
