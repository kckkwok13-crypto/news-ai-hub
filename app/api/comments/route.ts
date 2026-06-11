import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://kcfwxfhxmoiupiuaqlnh.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZnd4Zmh4bW9pdXBpdWFxbG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExOTE2NTYsImV4cCI6MjA5Njc2NzY1Nn0.oF_RlnxnMEujdhj0EXdAp5CbKR5t5Sybgo194zXKJb0';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug') || 'default';

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/comments?slug=eq.${encodeURIComponent(slug)}&select=*&order=created_at.desc`,
      {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }

    const comments = await response.json();
    return NextResponse.json({ comments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json({ error: 'Failed to fetch comments', comments: [] }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { slug, author, content } = body;

  if (!content || !author) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/comments`,
      {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation',
        },
        body: JSON.stringify({
          slug,
          author,
          content,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to post comment');
    }

    const newComment = await response.json();
    return NextResponse.json({ success: true, comment: newComment[0] });
  } catch (error) {
    console.error('Error posting comment:', error);
    return NextResponse.json({ error: 'Failed to post comment' }, { status: 500 });
  }
}