"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { aiToolPosts } from "../../data/aiToolsData";

export default function AIToolArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const [article, setArticle] = useState<typeof aiToolPosts[0] | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<typeof aiToolPosts>([]);
  const [activeSection, setActiveSection] = useState<string>("");
  const [showToc, setShowToc] = useState(false);

  useEffect(() => {
    const found = aiToolPosts.find((post) => post.slug === slug);
    setArticle(found || null);

    if (found) {
      const related = aiToolPosts
        .filter((post) => post.slug !== slug && post.category === found.category)
        .slice(0, 3);
      setRelatedArticles(related);
    }
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h1 className="text-2xl font-bold text-white mb-4">文章未找到</h1>
          <Link href="/ai-tools" className="text-purple-400 hover:text-purple-300">
            返回 AI 工具教程 →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Banner */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-950 to-violet-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        {/* Geometric Decorations */}
        <div className="absolute top-20 right-10 w-40 h-40 opacity-10">
          <svg viewBox="0 0 100 100">
            <polygon points="50,5 95,75 5,75" fill="none" stroke="#a855f7" strokeWidth="2"/>
            <circle cx="50" cy="45" r="30" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="5,5"/>
            <rect x="20" y="20" width="20" height="20" fill="none" stroke="#ec4899" strokeWidth="1" transform="rotate(30 30 30)"/>
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 w-32 h-32 opacity-10">
          <svg viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" stroke="#10b981" strokeWidth="2"/>
            <rect x="10" y="10" width="30" height="30" fill="none" stroke="#f472b6" strokeWidth="1" transform="rotate(45 25 25)"/>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-12">
          <Link href="/ai-tools" className="text-purple-400 hover:text-purple-300 transition-all flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 w-fit mb-6">
            <span>←</span>
            <span>返回教程列表</span>
          </Link>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {article.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-slate-400 mb-8">
            <span>📅 {article.date}</span>
            <span>•</span>
            <span>⏱️ 約 {article.readingTime} 分鐘閱讀</span>
            <span>•</span>
            <span>{article.icon} {article.category}</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span>📑</span>
                <span>目錄</span>
              </h3>
              <nav className="space-y-2">
                <a href="#overview" className="block text-sm text-slate-400 hover:text-purple-400 transition-colors py-1">📊 概述</a>
                <a href="#stats" className="block text-sm text-slate-400 hover:text-purple-400 transition-colors py-1">📈 數據統計</a>
                <a href="#tools" className="block text-sm text-slate-400 hover:text-purple-400 transition-colors py-1">🛠️ 工具推薦</a>
                <a href="#tutorial" className="block text-sm text-slate-400 hover:text-purple-400 transition-colors py-1">📚 教程內容</a>
                <a href="#tips" className="block text-sm text-slate-400 hover:text-purple-400 transition-colors py-1">💡 實用技巧</a>
                <a href="#conclusion" className="block text-sm text-slate-400 hover:text-purple-400 transition-colors py-1">✅ 總結</a>
              </nav>
            </div>
          </aside>

          {/* Article Content */}
          <main className="lg:col-span-3">
            {/* Featured Image */}
            <div className="relative rounded-3xl overflow-hidden mb-10">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  {article.icon} {article.title.split('：')[0]}
                </span>
              </div>
            </div>

            {/* 數據統計 SVG 圖表區域 */}
            <section id="stats" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span>📈</span>
                <span>相關數據統計</span>
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {/* SVG Chart 1: 使用率環形圖 */}
                <div className="bg-gradient-to-br from-purple-950/60 to-slate-900/60 rounded-2xl p-5 border border-purple-500/20">
                  <div className="text-xs text-purple-400 font-medium mb-3">AI工具使用率</div>
                  <svg viewBox="0 0 120 120" className="w-full h-28">
                    <defs>
                      <linearGradient id="chartGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7"/>
                        <stop offset="100%" stopColor="#06b6d4"/>
                      </linearGradient>
                    </defs>
                    <circle cx="60" cy="60" r="45" fill="none" stroke="#1e293b" strokeWidth="12"/>
                    <circle cx="60" cy="60" r="45" fill="none" stroke="url(#chartGrad1)" strokeWidth="12"
                      strokeDasharray="226 283" strokeDashoffset="0" strokeLinecap="round"
                      transform="rotate(-90 60 60)"/>
                    <polygon points="60,20 75,50 60,45 45,50" fill="#a855f7" opacity="0.6"/>
                    <circle cx="85" cy="25" r="8" fill="none" stroke="#06b6d4" strokeWidth="1"/>
                    <text x="60" y="55" textAnchor="middle" className="fill-white text-xl font-bold">80%</text>
                    <text x="60" y="72" textAnchor="middle" className="fill-purple-400 text-[10px]">2026</text>
                  </svg>
                  <p className="text-xs text-gray-400 mt-2">全球企業採用比例</p>
                </div>

                {/* SVG Chart 2: 用戶增長柱狀圖 */}
                <div className="bg-gradient-to-br from-cyan-950/60 to-slate-900/60 rounded-2xl p-5 border border-cyan-500/20">
                  <div className="text-xs text-cyan-400 font-medium mb-3">月活用戶增長</div>
                  <svg viewBox="0 0 120 60" className="w-full h-28">
                    <rect x="8" y="42" width="18" height="18" rx="3" fill="#0891b2" opacity="0.7"/>
                    <rect x="8" y="42" width="18" height="4" rx="2" fill="#06b6d4" opacity="0.5"/>
                    <rect x="30" y="30" width="18" height="30" rx="3" fill="#06b6d4" opacity="0.8"/>
                    <rect x="30" y="30" width="18" height="4" rx="2" fill="#22d3ee" opacity="0.6"/>
                    <rect x="52" y="20" width="18" height="40" rx="3" fill="#22d3ee"/>
                    <rect x="52" y="20" width="18" height="4" rx="2" fill="#67e8f9" opacity="0.7"/>
                    <rect x="74" y="10" width="18" height="50" rx="3" fill="#10b981"/>
                    <rect x="74" y="10" width="18" height="4" rx="2" fill="#6ee7b7" opacity="0.8"/>
                    <rect x="96" y="3" width="18" height="57" rx="3" fill="url(#chartGrad1)"/>
                    <rect x="96" y="3" width="18" height="4" rx="2" fill="#a7f3d0"/>
                    <circle cx="110" cy="8" r="6" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.4"/>
                    <polygon points="5,55 15,55 10,48" fill="#22d3ee" opacity="0.3"/>
                  </svg>
                  <p className="text-xs text-gray-400 mt-2">每月活躍用戶(億)</p>
                </div>

                {/* SVG Chart 3: 效率提升趨勢圖 */}
                <div className="bg-gradient-to-br from-pink-950/60 to-slate-900/60 rounded-2xl p-5 border border-pink-500/20">
                  <div className="text-xs text-pink-400 font-medium mb-3">效率提升幅度</div>
                  <svg viewBox="0 0 120 60" className="w-full h-28">
                    <path d="M10 55 L35 45 L55 38 L80 22 L105 10 L105 60 L10 60 Z" fill="#ec4899" opacity="0.2"/>
                    <path d="M10 55 L35 45 L55 38 L80 22 L105 10" fill="none" stroke="url(#chartGrad1)" strokeWidth="3" strokeLinecap="round"/>
                    <circle cx="10" cy="55" r="4" fill="#ec4899"/>
                    <circle cx="35" cy="45" r="4" fill="#f472b6"/>
                    <circle cx="55" cy="38" r="4" fill="#f9a8d4"/>
                    <circle cx="80" cy="22" r="4" fill="#fbcfe8"/>
                    <circle cx="105" cy="10" r="5" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2"/>
                    <rect x="2" y="50" width="8" height="8" fill="none" stroke="#f472b6" strokeWidth="1" opacity="0.5" transform="rotate(45 6 54)"/>
                    <polygon points="115,50 120,55 115,60" fill="#f472b6" opacity="0.4"/>
                    <text x="105" y="5" className="fill-pink-400 text-[8px] font-bold">+300%</text>
                  </svg>
                  <p className="text-xs text-gray-400 mt-2">工作效率提升</p>
                </div>

                {/* SVG Chart 4: 市場份額餅圖 */}
                <div className="bg-gradient-to-br from-emerald-950/60 to-slate-900/60 rounded-2xl p-5 border border-emerald-500/20">
                  <div className="text-xs text-emerald-400 font-medium mb-3">市場規模預測</div>
                  <svg viewBox="0 0 120 60" className="w-full h-28">
                    <ellipse cx="60" cy="30" rx="25" ry="8" fill="#10b981" opacity="0.3"/>
                    <path d="M60 30 L60 5 A25 8 0 0 1 85 30 Z" fill="#10b981"/>
                    <path d="M60 30 L85 30 A25 8 0 0 1 60 38 Z" fill="#34d399"/>
                    <path d="M60 30 L60 38 A25 8 0 0 1 35 30 Z" fill="#6ee7b7"/>
                    <path d="M60 30 L35 30 A25 8 0 0 1 60 22 Z" fill="#a7f3d0"/>
                    <ellipse cx="60" cy="30" rx="12" ry="4" fill="#0f172a"/>
                    <text x="60" y="32" textAnchor="middle" className="fill-white text-xs font-bold">$4.3T</text>
                    <circle cx="15" cy="50" r="5" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="2,2"/>
                    <polygon points="100,50 108,50 104,45" fill="#34d399" opacity="0.6"/>
                  </svg>
                  <p className="text-xs text-gray-400 mt-2">2030年市場規模</p>
                </div>
              </div>
            </section>

            {/* 內容區塊 */}
            <article className="prose prose-invert prose-lg max-w-none">
              <section id="overview" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span>📊</span>
                  <span>概述</span>
                </h2>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {article.excerpt}
                  </p>
                </div>
              </section>

              <section id="tools" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span>🛠️</span>
                  <span>工具推薦</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 rounded-xl p-5 border border-purple-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{article.icon}</span>
                      <h3 className="text-white font-bold">{article.title.split('：')[0]}</h3>
                    </div>
                    <p className="text-slate-400 text-sm">專業的 AI 工具平台，提供多功能的智能助手服務</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">熱門</span>
                      <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-300">免費可用</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-900/30 to-slate-900/30 rounded-xl p-5 border border-cyan-500/20">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">⚡</span>
                      <h3 className="text-white font-bold">效率提升工具</h3>
                    </div>
                    <p className="text-slate-400 text-sm">幫助你更高效地完成日常工作，提升生產力</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">推薦</span>
                      <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-300">新手適用</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="tutorial" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span>📚</span>
                  <span>教程內容</span>
                </h2>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
                  <div className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                    {article.content}
                  </div>
                </div>
              </section>

              <section id="tips" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span>💡</span>
                  <span>實用技巧</span>
                </h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-900/30 to-transparent rounded-xl p-5 border-l-4 border-purple-500">
                    <h3 className="text-white font-bold mb-2">💡 技巧一：從簡單開始</h3>
                    <p className="text-slate-400 text-sm">不要一開始就嘗試複雜的功能，先從基礎操作開始，逐步提升</p>
                  </div>
                  <div className="bg-gradient-to-r from-cyan-900/30 to-transparent rounded-xl p-5 border-l-4 border-cyan-500">
                    <h3 className="text-white font-bold mb-2">💡 技巧二：多加練習</h3>
                    <p className="text-slate-400 text-sm">熟能生巧，多使用就會越來越熟練，形成自己的工作流</p>
                  </div>
                  <div className="bg-gradient-to-r from-pink-900/30 to-transparent rounded-xl p-5 border-l-4 border-pink-500">
                    <h3 className="text-white font-bold mb-2">💡 技巧三：善用資源</h3>
                    <p className="text-slate-400 text-sm">充分利用官方教程和社區資源，遇到問題時多搜索多請教</p>
                  </div>
                </div>
              </section>

              <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span>✅</span>
                  <span>總結</span>
                </h2>
                <div className="bg-gradient-to-br from-green-900/30 to-slate-900/30 rounded-2xl p-6 border border-green-500/20">
                  <p className="text-slate-300 leading-relaxed">
                    掌握這些 AI 工具和技巧，可以大大提升你的工作效率和生活品質。建議從今天開始行動，逐步學習和應用，你會發現 AI 工具帶來的巨大便利！
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <span className="text-green-400 text-sm">✓ 已掌握基礎知識</span>
                    <span className="text-green-400 text-sm">✓ 了解工具使用方法</span>
                    <span className="text-green-400 text-sm">✓ 準備開始實踐</span>
                  </div>
                </div>
              </section>
            </article>

            {/* 相關文章 */}
            {relatedArticles.length > 0 && (
              <section className="mt-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span>📚</span>
                  <span>相關文章</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedArticles.map((post) => (
                    <Link key={post.slug} href={`/ai-tools/${post.slug}`} className="group">
                      <div className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/40 transition-all duration-300">
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              e.currentTarget.src = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                          <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg p-1.5 text-sm">
                            {post.icon}
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-white text-sm font-bold group-hover:text-purple-400 transition-colors line-clamp-2 mb-2">
                            {post.title}
                          </h3>
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>{post.date}</span>
                            <span className="text-purple-400">閱讀 →</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* 返回按鈕 */}
            <div className="mt-12 text-center">
              <Link href="/ai-tools" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all">
                <span>←</span>
                <span>返回 AI 工具教程</span>
              </Link>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">🤖</span>
            <span className="text-lg font-bold text-white">AI工具教程</span>
          </div>
          <p className="text-slate-500 text-sm mb-4">用科技提升你的效率</p>
          <div className="flex items-center justify-center gap-4 text-slate-600 text-xs">
            <span>📝 {aiToolPosts.length} 篇教程</span>
            <span>•</span>
            <span>⚡ AI工具</span>
          </div>
        </div>
      </footer>
    </div>
  );
}