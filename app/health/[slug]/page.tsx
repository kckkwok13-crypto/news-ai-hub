"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { healthPosts } from "../../data/healthData";
import { ArrowLeft, Clock, Calendar, Tag, Share2, Bookmark, BookmarkCheck, MessageCircle } from "lucide-react";

export default function HealthArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = healthPosts.find((p) => p.slug === slug);

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
            href="/health"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors"
          >
            <ArrowLeft size={18} />
            返回健康養生
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

  // 轉換Markdown-like內容為HTML
  const renderContent = (content: string) => {
    // 先處理代碼塊（金字塔圖表等）
    let processed = content.replace(/```([\s\S]*?)```/g, (match, code) => {
      const lines = code.trim().split('\n');
      const formatted = lines.map(line => {
        // 保持ASCII藝術圖表的格式
        return line.replace(/\|/g, '<span class="text-cyan-400">│</span>')
                   .replace(/┌|┐|└|┘|├|┤|┬|┴|┼|─/g, '<span class="text-indigo-400">$&</span>')
                   .replace(/★/g, '<span class="text-amber-400">★</span>')
                   .replace(/[🔵🟢🟡🟠🔴⬜🟩🟧🟥🏆]/g, '<span class="inline-block w-4 text-center">$&</span>');
      }).join('\n');
      return `<div class="font-mono text-sm bg-slate-900/80 rounded-xl p-4 my-6 overflow-x-auto border border-slate-700/50"><pre class="text-slate-300 whitespace-pre">${formatted}</pre></div>`;
    });

    let html = processed
      // 標題
      .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-white mt-10 mb-4 flex items-center gap-3 border-b border-slate-700/50 pb-3">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-white mt-8 mb-3">$1</h3>')
      // 引用
      .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-emerald-500 pl-4 py-3 my-4 bg-emerald-500/10 rounded-r-lg"><p class="text-emerald-300 italic">$1</p></blockquote>')
      // 粗體
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-bold bg-emerald-500/20 px-1 rounded">$1</strong>')
      // 列表
      .replace(/^- (.+)$/gm, '<li class="flex items-start gap-3 mb-2 text-slate-300"><span class="text-emerald-400 mt-1 flex-shrink-0">•</span><span>$1</span></li>')
      .replace(/^(\d+)\. (.+)$/gm, '<li class="flex items-start gap-3 mb-2 text-slate-300"><span class="text-emerald-400 font-bold min-w-[24px]">$1.</span><span>$2</span></li>')
      // 表格
      .replace(/\|(.+)\|/g, (match) => {
        const cells = match.split('|').filter(c => c.trim());
        if (cells.some(c => c.includes('---'))) return '';
        const isHeader = cells.every(c => c.includes('**') || c.match(/^[A-Z]/));
        if (isHeader) {
          return `<tr class="bg-slate-800/50">${cells.map(c => `<th class="px-4 py-3 text-left text-slate-200 font-semibold border border-slate-700">${c.trim()}</th>`).join('')}</tr>`;
        }
        return `<tr class="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors">${cells.map(c => `<td class="px-4 py-3 text-slate-300 border border-slate-700/50">${c.trim()}</td>`).join('')}</tr>`;
      })
      // 分隔線
      .replace(/^---$/gm, '<hr class="border-slate-700 my-8" />')
      // 段落
      .replace(/\n\n/g, '</p><p class="text-slate-300 leading-relaxed mb-4">')
      .replace(/^(?!<[h|b|p|l|t|c|>|"|}|pre|div])(?!<)(.+)$/gm, '<p class="text-slate-300 leading-relaxed mb-4">$1</p>');

    // 包裝表格
    html = html.replace(/(<tr[\s\S]*?<\/tr>)+/g, '<table class="w-full rounded-xl overflow-hidden mb-6 shadow-lg">$&</table>');

    // 清理空段落
    html = html.replace(/<p class="text-slate-300 leading-relaxed mb-4"><\/p>/g, '');
    html = html.replace(/<p class="text-slate-300 leading-relaxed mb-4"><br \/>/g, '');

    return html;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/90 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/health"
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:inline">返回健康養生</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
              title="分享"
            >
              <Share2 size={18} />
            </button>
            <button
              onClick={toggleSaved}
              className={`p-2 rounded-xl transition-colors ${
                isSaved
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
              title={isSaved ? "已收藏" : "收藏文章"}
            >
              {isSaved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 h-80">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              {post.icon} 健康養生
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar size={16} className="text-emerald-400" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={16} className="text-emerald-400" />
              <span>約{post.readingTime}分鐘閱讀</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageCircle size={16} className="text-emerald-400" />
              <span>點讚支持</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose-custom">
          <div
            className="text-slate-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
          />
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex items-center gap-3 mb-4">
            <Tag size={18} className="text-emerald-400" />
            <span className="text-slate-400 font-medium">相關標籤</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/20">
          <h3 className="text-white text-xl font-bold mb-3">覺得文章有幫助？</h3>
          <p className="text-slate-400 mb-4">歡迎分享給親友，或收藏文章以便日後參考。</p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-colors"
            >
              <Share2 size={18} />
              分享文章
            </button>
            <button
              onClick={toggleSaved}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-colors ${
                isSaved
                  ? "bg-slate-700 text-emerald-400"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {isSaved ? <BookmarkCheck size={18} /> : <Bookmark size={18} />}
              {isSaved ? "已收藏" : "收藏文章"}
            </button>
          </div>
        </div>

        {/* More Articles */}
        <div className="mt-12">
          <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
            <span>📚</span>
            <span>更多健康養生文章</span>
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {healthPosts
              .filter((p) => p.slug !== post.slug)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/health/${relatedPost.slug}`}
                  className="group block bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/40 transition-all"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                    <span className="absolute top-3 left-3 text-2xl">{relatedPost.icon}</span>
                  </div>
                  <div className="p-4">
                    <h4 className="text-white font-semibold text-sm group-hover:text-emerald-400 transition-colors line-clamp-2 mb-2">
                      {relatedPost.title}
                    </h4>
                    <span className="text-xs text-slate-500">{relatedPost.date}</span>
                  </div>
                </Link>
              ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/health"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-300 rounded-xl font-medium hover:bg-slate-700 hover:text-white transition-colors"
            >
              查看全部文章 →
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 py-10 border-t border-slate-800 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
          <ArrowLeft size={18} />
          <span>返回健康養生</span>
        </Link>
        <p className="text-slate-500 text-sm mt-4">NewsFlow · 健康養生 © 2026</p>
      </footer>

      {/* Share Toast */}
      {showShareToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce">
          已複製連結 ✓
        </div>
      )}
    </div>
  );
}