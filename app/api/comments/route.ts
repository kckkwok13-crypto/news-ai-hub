import { NextRequest, NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'kckkwok13-crypto';
const REPO_NAME = 'news-ai-hub';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug') || 'default';

  try {
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues?labels=blog-comment&state=open`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }

    const issues = await response.json();
    const filteredComments = issues.filter((issue: any) => 
      issue.title.startsWith(`[${slug}]`)
    );

    const comments = filteredComments.map((issue: any) => ({
      id: issue.id,
      author: issue.user?.login || 'Anonymous',
      content: issue.body || '',
      createdAt: issue.created_at,
    }));

    return NextResponse.json({ comments });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
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
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: `[${slug}] Comment from ${author}`,
          body: content,
          labels: ['blog-comment'],
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to post comment');
    }

    const issue = await response.json();
    return NextResponse.json({ 
      success: true, 
      comment: {
        id: issue.id,
        author: author,
        content: content,
        createdAt: issue.created_at,
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to post comment' }, { status: 500 });
  }
}
