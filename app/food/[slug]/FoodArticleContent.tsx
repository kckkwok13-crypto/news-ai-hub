"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { foodPosts } from "../../data/foodData";
import { ArrowLeft, Clock, Calendar, Tag, Share2, Bookmark, BookmarkCheck, MessageCircle } from "lucide-react";
// ArticleChart removed

interface FoodArticleContentProps {
  slug: string;
}

export default function FoodArticleContent({ slug }: FoodArticleContentProps) {
  const post = foodPosts.find((p) => p.slug === slug);

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
            href="/food"
            className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 text-white rounded-xl font-medium hover:bg-rose-600 transition-colors"
          >
            <ArrowLeft size={18} />
            返回美食天地
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

  // Convert Markdown-like content to HTML
  const renderContent = (content: string) => {
    let contentWithoutCharts = content.replace(/\{\{CHART:(\w+)\}\}/g, '');

    let processed = contentWithoutCharts
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<div class="my-8 rounded-2xl overflow-hidden"><img src="$2" alt="$1" class="w-full rounded-xl" loading="lazy" /></div>')
      .replace(/!\[TIP\]\((.+?)\)/g, '<div class="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 my-6 flex items-start gap-4"><div class="text-3xl">💡</div><div><h4 class="text-amber-400 font-bold mb-2">小提示</h4><p class="text-amber-200/80">$1</p></div></div>')
      .replace(/!\[WARNING\]\((.+?)\)/g, '<div class="bg-red-500/10 border border-red-500/30 rounded-xl p-5 my-6 flex items-start gap-4"><div class="text-3xl">⚠️</div><div><h4 class="text-red-400 font-bold mb-2">注意</h4><p class="text-red-200/80">$1</p></div></div>')
      .replace(/!\[KEYPOINT\]\((.+?)\)/g, '<div class="bg-rose-500/10 border border-rose-500/30 rounded-xl p-5 my-6 flex items-start gap-4"><div class="text-3xl">✅</div><div><h4 class="text-rose-400 font-bold mb-2">重點</h4><p class="text-rose-200/80">$1</p></div></div>')
      .replace(/!\[STAT\]\((.+?)\|(.+?)\)/g, '<div class="bg-violet-500/10 border border-violet-500/30 rounded-xl p-5 my-6 text-center"><div class="text-4xl font-bold text-violet-400 mb-2">$1</div><p class="text-slate-300">$2</p></div>')
      .replace(/!\[STEP\|(.+?)\|(.+?)\]/g, '<div class="flex items-center gap-4 my-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50"><div class="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">$1</div><div class="text-slate-300">$2</div></div>')
      .split('\n\n')
      .map((block, i) => {
        if (block.startsWith('## ')) {
          return <h2 key={i} className="text-2xl font-bold text-white mt-8 mb-4" dangerouslySetInnerHTML={{ __html: block.replace('## ', '') }} />;
        }
        if (block.startsWith('### ')) {
          return <h3 key={i} className="text-xl font-semibold text-white mt-6 mb-3" dangerouslySetInnerHTML={{ __html: block.replace('### ', '') }} />;
        }
        if (block.startsWith('> ')) {
          return <blockquote key={i} className="border-l-4 border-rose-500 pl-4 py-2 my-4 text-slate-300 italic bg-slate-800/30 rounded-r-lg" dangerouslySetInnerHTML={{ __html: block.replace('> ', '') }} />;
        }
        if (block.startsWith('- ')) {
          const items = block.split('\n').filter(line => line.startsWith('- '));
          return <ul key={i} className="list-disc list-inside space-y-2 my-4 text-slate-300">{items.map((item, j) => <li key={j} dangerouslySetInnerHTML={{ __html: item.replace('- ', '') }} />)}</ul>;
        }
        if (block.startsWith('| ')) {
          return <div key={i} className="overflow-x-auto my-4" dangerouslySetInnerHTML={{ __html: `<table class="w-full border-collapse">${block.split('\n').map((row, ri) => `<tr>${row.split('|').filter(c => c.trim()).map(cell => `<td class="border border-slate-700 px-4 py-2 ${ri === 0 ? 'font-bold bg-slate-800' : ''}">${cell.trim()}</td>`).join('')}</tr>`).join('')}</table>` }} />;
        }
        if (block.startsWith('```')) {
          return <pre key={i} className="bg-slate-800 rounded-xl p-4 my-4 overflow-x-auto text-slate-300"><code>{block.replace(/```\w*\n?/g, '')}</code></pre>;
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
        <div className="absolute inset-0">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-16">
          <Link href="/food" className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors mb-6">
            <ArrowLeft size={20} />
            <span>返回美食天地</span>
          </Link>

          <div className="flex items-center gap-2 mb-4 flex-wrap">
            {post.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
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
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${isSaved ? 'bg-rose-500 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
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

        {/* Comments placeholder */}
        <div className="mt-12 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
          <div className="flex items-center gap-2 mb-4">
            <MessageCircle size={20} className="text-slate-400" />
            <h3 className="text-lg font-semibold text-white">評論</h3>
          </div>
          <p className="text-slate-400 text-sm">評論功能敬請期待</p>
        </div>
      </article>
    </div>
  );
}
