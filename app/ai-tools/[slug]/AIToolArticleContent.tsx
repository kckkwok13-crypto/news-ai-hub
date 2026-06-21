"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { aiToolPosts } from "../../data/aiToolsData";
import { ArrowLeft, Clock, Calendar, Tag, Share2, Bookmark, BookmarkCheck } from "lucide-react";

interface AIToolArticleContentProps {
  slug: string;
}

export default function AIToolArticleContent({ slug }: AIToolArticleContentProps) {
  const post = aiToolPosts.find((p) => p.slug === slug);

  const [isSaved, setIsSaved] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (post) {
      const saved = localStorage.getItem("savedArticles") || "[]";
      const savedList = JSON.parse(saved);
      setIsSaved(savedList.includes(post.slug));
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-white text-2xl font-bold mb-2">文章未找到</h1>
          <p className="text-slate-400 mb-6">抱歉，這篇文章不存在或已被移除。</p>
          <Link
            href="/ai-tools"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 transition-colors"
          >
            <ArrowLeft size={18} />
            返回 AI 工具教程
          </Link>
        </div>
      </div>
    );
  }

  const toggleSaved = () => {
    const saved = localStorage.getItem("savedArticles") || "[]";
    const savedList = JSON.parse(saved);

    if (isSaved) {
      const newList = savedList.filter((s: string) => s !== post.slug);
      localStorage.setItem("savedArticles", JSON.stringify(newList));
      setIsSaved(false);
    } else {
      savedList.push(post.slug);
      localStorage.setItem("savedArticles", JSON.stringify(savedList));
      setIsSaved(true);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2500);
    }
  };

  const renderContent = (content: string) => {
    let processed = content
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<div class="my-8 rounded-2xl overflow-hidden"><img src="$2" alt="$1" class="w-full rounded-xl" loading="lazy" /></div>')
      .replace(/!\[TIP\]\((.+?)\)/g, '<div class="bg-purple-500/10 border border-purple-500/30 rounded-xl p-5 my-6 flex items-start gap-4"><div class="text-3xl">💡</div><div><h4 class="text-purple-400 font-bold mb-2">小提示</h4><p class="text-purple-200/80">$1</p></div></div>')
      .replace(/!\[WARNING\]\((.+?)\)/g, '<div class="bg-red-500/10 border border-red-500/30 rounded-xl p-5 my-6 flex items-start gap-4"><div class="text-3xl">⚠️</div><div><h4 class="text-red-400 font-bold mb-2">注意</h4><p class="text-red-200/80">$1</p></div></div>')
      .replace(/!\[KEYPOINT\]\((.+?)\)/g, '<div class="bg-violet-500/10 border border-violet-500/30 rounded-xl p-5 my-6 flex items-start gap-4"><div class="text-3xl">✅</div><div><h4 class="text-violet-400 font-bold mb-2">重點</h4><p class="text-violet-200/80">$1</p></div></div>')
      .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto"><code class="text-sm text-slate-300">$2</code></pre>')
      .split('\n\n')
      .map((block, i) => {
        if (block.startsWith('## ')) {
          return <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4" dangerouslySetInnerHTML={{ __html: block.replace('## ', '') }} />;
        }
        if (block.startsWith('### ')) {
          return <h3 key={i} className="text-xl font-semibold text-white mt-6 mb-3" dangerouslySetInnerHTML={{ __html: block.replace('### ', '') }} />;
        }
        if (block.startsWith('> ')) {
          return <blockquote key={i} className="border-l-4 border-purple-500 pl-4 py-2 my-4 text-slate-300 italic bg-slate-800/30 rounded-r-lg" dangerouslySetInnerHTML={{ __html: block.replace('> ', '') }} />;
        }
        if (block.startsWith('- ')) {
          const items = block.split('\n').filter(line => line.startsWith('- '));
          return <ul key={i} className="list-disc list-inside space-y-2 my-4 text-slate-300">{items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item.replace('- ', '') }} />)}</ul>;
        }
        if (block.trim()) {
          return <p key={i} className="text-slate-300 leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: block }} />;
        }
        return null;
      });

    return processed;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-950 to-violet-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 py-16">
          <Link href="/ai-tools" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-6">
            <ArrowLeft size={20} />
            <span>返回 AI 工具教程</span>
          </Link>

          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {post.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-slate-300 mb-6">{post.excerpt}</p>

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={16} /> 約{post.readingTime}分鐘</span>
            <span className="flex items-center gap-1"><Tag size={16} /> {post.category}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-800">
          <button
            onClick={toggleSaved}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${isSaved ? 'bg-purple-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
          >
            {isClient && isSaved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
            <span>{isSaved ? '已收藏' : '收藏文章'}</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
          >
            <Share2 size={18} />
            <span>分享</span>
          </button>
        </div>

        {showShareToast && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-emerald-500 text-white rounded-xl shadow-lg animate-fade-in">
            已複製連結！
          </div>
        )}
      </article>
    </div>
  );
}
