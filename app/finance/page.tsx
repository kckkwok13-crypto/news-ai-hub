"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { financePosts } from "../data/financeData";

export default function FinancePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(financePosts.flatMap(post => post.tags))).sort();

  const filteredPosts = useMemo(() => {
    return financePosts.filter(post => {
      const matchesSearch = searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => post.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const featuredPost = financePosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Financial Disclaimer Banner - AdSense Compliance */}
      <div className="bg-amber-900/50 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-amber-300 font-bold text-lg mb-1">重要聲明</h3>
              <p className="text-amber-200/80 text-sm leading-relaxed">
                本頁面所有內容僅供教育和參考用途，不構成任何投資建議。投資涉及風險，過往表現不代表未來回報。在作出任何投資決定前，請諮詢專業財務顧問。股票、ETF及其他投資产品的價值可能下跌，您可能會損失部分或全部投資本金。
              </p>
              <p className="text-amber-200/80 text-sm mt-1">
                <strong>Disclaimer:</strong> This page is for educational purposes only and does not constitute financial advice. Always consult a qualified financial advisor before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-950 to-cyan-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-all flex items-center gap-2 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
              <span>←</span>
              <span>返回首頁</span>
            </Link>
          </div>

          <div className="flex items-center gap-5 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-2xl shadow-emerald-500/20 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <span className="text-4xl">💰</span>
            </div>
            <div>
              <h1 className="text-white text-3xl md:text-4xl font-bold">理財攻略</h1>
              <p className="text-emerald-400/80 text-lg mt-1">投資理財 · 退休規劃 · 被動收入</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">{financePosts.length}</div>
              <div className="text-xs text-emerald-400/70">📝 原創文章</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">6</div>
              <div className="text-xs text-emerald-400/70">📚 投資主題</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">∞</div>
              <div className="text-xs text-emerald-400/70">💫 持續更新</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">FREE</div>
              <div className="text-xs text-emerald-400/70">🎯 免費內容</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-10">
            <Link href={`/finance/${featuredPost.slug}`} className="block group">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-500">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    ⭐ 精選文章
                  </span>
                </div>

                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {featuredPost.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-emerald-400">📅 {featuredPost.date}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">⏱️ 約 {featuredPost.readingTime} 分鐘閱讀</span>
                    <span className="ml-auto text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                      閱讀全文 →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="text-white text-xl font-bold mb-2">ETF指數基金</h3>
            <p className="text-blue-300/70 text-sm mb-4">低門檻、高回報的投資工具</p>
            <span className="text-blue-400 text-sm">{financePosts.filter(p => p.category === 'etf').length} 篇文章</span>
          </div>

          <div className="bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all">
            <div className="text-4xl mb-3">🏖️</div>
            <h3 className="text-white text-xl font-bold mb-2">退休規劃</h3>
            <p className="text-amber-300/70 text-sm mb-4">為未來生活做好準備</p>
            <span className="text-amber-400 text-sm">{financePosts.filter(p => p.category === 'retirement').length} 篇文章</span>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-white text-xl font-bold mb-2">被動收入</h3>
            <p className="text-purple-300/70 text-sm mb-4">躺著也能賺錢的方法</p>
            <span className="text-purple-400 text-sm">{financePosts.filter(p => p.category === 'passive').length} 篇文章</span>
          </div>
        </div>

        {/* Article Grid */}
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
            <span>📚</span>
            <span>全部文章</span>
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/finance/${post.slug}`} className="block group">
                <article className="relative h-full bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-2 text-xl shadow-lg">
                      {post.icon}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex gap-1.5 mb-3 flex-wrap">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-bold mb-2 text-base md:text-lg text-white group-hover:text-emerald-400 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                      <span className="text-slate-500 text-xs">{post.date}</span>
                      <span className="text-sm font-medium text-emerald-400 group-hover:text-emerald-300">
                        閱讀 →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-2xl p-6 border border-slate-700/50 backdrop-blur-sm">
          <div className="relative mb-5">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              🔍
            </div>
            <input
              type="text"
              placeholder="搜心理財文章..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-700/50 text-white placeholder-slate-400 rounded-xl px-4 py-3.5 pl-12 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border border-slate-600/50 focus:border-emerald-500/50 transition-all"
            />
          </div>

          <div>
            <h4 className="text-slate-300 text-sm mb-3 font-medium">🏷️ 標籤篩選</h4>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    selectedTags.includes(tag)
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600 border border-slate-600/50'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 py-10 border-t border-slate-800">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">💰</span>
            <span className="text-lg font-bold text-white">理財攻略</span>
          </div>
          <p className="text-slate-500 text-sm mb-4">幫你建立財務自由的基礎</p>
          <div className="flex items-center justify-center gap-4 text-slate-600 text-xs">
            <span>📝 {financePosts.length} 篇原創文章</span>
            <span>•</span>
            <span>🎯 投資理財</span>
          </div>
        </footer>
      </div>
    </div>
  );
}