"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { healthPosts } from "../../data/healthData";
import { ArrowLeft, Clock, Calendar, Tag, Share2, Bookmark, BookmarkCheck, MessageCircle } from "lucide-react";
import { ArticleChart } from "../../components/ArticleCharts";

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
    // 先處理特殊標記
    let processed = content
      // 💡 提示框
      .replace(/!\[TIP\]\((.+?)\)/g, '<div class="bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 my-6 flex items-start gap-4"><div class="text-3xl">💡</div><div><h4 class="text-amber-400 font-bold mb-2">小提示</h4><p class="text-amber-200/80">$1</p></div></div>')
      // ⚠️ 警告框
      .replace(/!\[WARNING\]\((.+?)\)/g, '<div class="bg-red-500/10 border border-red-500/30 rounded-xl p-5 my-6 flex items-start gap-4"><div class="text-3xl">⚠️</div><div><h4 class="text-red-400 font-bold mb-2">注意</h4><p class="text-red-200/80">$1</p></div></div>')
      // ✅ 要點框
      .replace(/!\[KEYPOINT\]\((.+?)\)/g, '<div class="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 my-6 flex items-start gap-4"><div class="text-3xl">✅</div><div><h4 class="text-emerald-400 font-bold mb-2">重點</h4><p class="text-emerald-200/80">$1</p></div></div>')
      // 📊 數據框
      .replace(/!\[STAT\]\((.+?)\|(.+?)\)/g, '<div class="bg-violet-500/10 border border-violet-500/30 rounded-xl p-5 my-6 text-center"><div class="text-4xl font-bold text-violet-400 mb-2">$1</div><p class="text-slate-300">$2</p></div>')
      // 🎯 目標框
      .replace(/!\[GOAL\]\((.+?)\|(.+?)\)/g, '<div class="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-5 my-6 flex items-center gap-4"><div class="text-3xl">🎯</div><div><h4 class="text-cyan-400 font-bold mb-1">$1</h4><p class="text-slate-300 text-sm">$2</p></div></div>')
      // 📷 圖片
      .replace(/!\[IMAGE\]\((.+?)\|(.+?)\)/g, '<div class="my-8 rounded-2xl overflow-hidden"><img src="$1" alt="$2" class="w-full rounded-xl" loading="lazy" onError={(e) => { e.currentTarget.style.display="none"; }} /><p class="text-slate-400 text-sm mt-2 text-center italic">$2</p></div>')
      // 📈 進度條
      .replace(/!\[PROGRESS\|(.+?)\|(.+?)\|(.+?)\]/g, '<div class="my-6"><div class="flex justify-between mb-2"><span class="text-slate-300 text-sm">$1</span><span class="text-emerald-400 text-sm font-bold">$2%</span></div><div class="h-3 bg-slate-800 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500" style="width: $2%"></div></div><p class="text-slate-400 text-xs mt-1">$3</p></div>')
      // 📋 步驟指示器
      .replace(/!\[STEP\|(.+?)\|(.+?)\]/g, '<div class="flex items-center gap-4 my-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50"><div class="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">$1</div><div class="text-slate-300">$2</div></div>')
      // 分割內容為段落，保留特殊格式
      .split('\n\n')
      .map(block => {
        // 標題
        if (block.startsWith('## ')) {
          return `<h2 class="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3 border-b border-slate-700/50 pb-4">${block.replace('## ', '')}</h2>`;
        }
        if (block.startsWith('### ')) {
          return `<h3 class="text-xl font-bold text-white mt-8 mb-4">${block.replace('### ', '')}</h3>`;
        }
        // 引用
        if (block.startsWith('> ')) {
          return `<blockquote class="border-l-4 border-emerald-500 pl-5 py-4 my-6 bg-emerald-500/10 rounded-r-xl"><p class="text-emerald-300 italic leading-relaxed">${block.replace('> ', '')}</p></blockquote>`;
        }
        // 無序列表
        if (block.match(/^- /m)) {
          const items = block.split('\n').filter(line => line.trim());
          const listItems = items.map(line => {
            const text = line.replace(/^- /, '');
            return `<li class="flex items-start gap-3 mb-3 text-slate-300"><span class="text-emerald-400 mt-1 flex-shrink-0">•</span><span>${text}</span></li>`;
          }).join('');
          return `<ul class="list-none my-4 space-y-1">${listItems}</ul>`;
        }
        // 有序列表
        if (block.match(/^\d+\. /m)) {
          const items = block.split('\n').filter(line => line.trim());
          const listItems = items.map(line => {
            const match = line.match(/^(\d+)\. (.+)$/);
            if (match) {
              return `<li class="flex items-start gap-3 mb-3 text-slate-300"><span class="text-emerald-400 font-bold min-w-[28px]">${match[1]}.</span><span>${match[2]}</span></li>`;
            }
            return '';
          }).join('');
          return `<ol class="list-none my-4 space-y-1">${listItems}</ol>`;
        }
        // 分隔線
        if (block === '---') {
          return '<hr class="border-slate-700/50 my-10" />';
        }
        // 表格（多行）
        if (block.includes('|')) {
          const rows = block.split('\n').filter(row => row.trim() && !row.match(/^\|[-:\s]+\|$/));
          if (rows.length > 1) {
            const tableRows = rows.map((row, idx) => {
              const cells = row.split('|').filter(c => c.trim());
              const isHeader = idx === 0 || cells.some(c => c.includes('**'));
              if (isHeader) {
                return `<tr class="bg-slate-800/70">${cells.map(c => `<th class="px-5 py-4 text-left text-slate-200 font-semibold border-b border-slate-700">${c.trim()}</th>`).join('')}</tr>`;
              }
              return `<tr class="border-b border-slate-700/30 hover:bg-slate-800/30 transition-colors">${cells.map(c => `<td class="px-5 py-4 text-slate-300 border-b border-slate-700/20">${c.trim()}</td>`).join('')}</tr>`;
            }).join('');
            return `<div class="overflow-x-auto my-8 rounded-xl border border-slate-700/30"><table class="w-full">${tableRows}</table></div>`;
          }
        }
        // 普通段落
        if (block.trim()) {
          return `<p class="text-slate-300 leading-relaxed mb-5">${block}</p>`;
        }
        return '';
      })
      .join('');

    // 處理粗體
    processed = processed.replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold bg-emerald-500/20 px-1.5 py-0.5 rounded">$1</strong>');

    return processed;
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
          {/* Render Charts */}
          {(() => {
            const chartRegex = /\{\{CHART:(\w+)\}\}/g;
            const chartIds: string[] = [];
            let match;
            while ((match = chartRegex.exec(post.content)) !== null) {
              chartIds.push(match[1]);
            }
            return chartIds.map((chartId, index) => (
              <ArticleChart key={`${chartId}-${index}`} chartId={chartId} />
            ));
          })()}
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