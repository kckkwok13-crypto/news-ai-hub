"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { healthPosts } from "../data/healthData";

export default function HealthPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(healthPosts.flatMap(post => post.tags))).sort();

  const filteredPosts = useMemo(() => {
    return healthPosts.filter(post => {
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

  const featuredPost = healthPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Banner */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-emerald-950 to-teal-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="text-green-400 hover:text-green-300 transition-all flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
              <span>←</span>
              <span>返回首頁</span>
            </Link>
          </div>

          <div className="flex items-center gap-5 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-green-500/30 shadow-2xl shadow-green-500/20 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <span className="text-4xl">❤️</span>
            </div>
            <div>
              <h1 className="text-white text-3xl md:text-4xl font-bold">健康養生</h1>
              <p className="text-green-400/80 text-lg mt-1">飲食調理 · 運動養生 · 身心平衡</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">{healthPosts.length}</div>
              <div className="text-xs text-green-400/70">📝 健康文章</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">6</div>
              <div className="text-xs text-green-400/70">🏷️ 健康主題</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-xs text-green-400/70">🎯 實用建議</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">FREE</div>
              <div className="text-xs text-green-400/70">💚 免費內容</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-10">
            <Link href={`/health/${featuredPost.slug}`} className="block group">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-green-500/30 transition-all duration-500">
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
                      e.currentTarget.src = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {featuredPost.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-300 border border-green-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-400 text-base md:text-lg mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-green-400">📅 {featuredPost.date}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">⏱️ 約 {featuredPost.readingTime} 分鐘閱讀</span>
                    <span className="ml-auto text-green-400 font-semibold group-hover:text-green-300 transition-colors flex items-center gap-1">
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
          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all">
            <div className="text-4xl mb-3">🥗</div>
            <h3 className="text-white text-xl font-bold mb-2">健康飲食</h3>
            <p className="text-green-300/70 text-sm mb-4">營養均衡的飲食建議</p>
            <span className="text-green-400 text-sm">{healthPosts.filter(p => p.category === 'diet').length} 篇文章</span>
          </div>

          <div className="bg-gradient-to-br from-indigo-600/20 to-indigo-800/20 rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-500/40 transition-all">
            <div className="text-4xl mb-3">😴</div>
            <h3 className="text-white text-xl font-bold mb-2">睡眠品質</h3>
            <p className="text-indigo-300/70 text-sm mb-4">改善睡眠的方法</p>
            <span className="text-indigo-400 text-sm">{healthPosts.filter(p => p.category === 'sleep').length} 篇文章</span>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 rounded-2xl p-6 border border-orange-500/20 hover:border-orange-500/40 transition-all">
            <div className="text-4xl mb-3">🏃</div>
            <h3 className="text-white text-xl font-bold mb-2">運動養生</h3>
            <p className="text-orange-300/70 text-sm mb-4">適合各年齡的運動建議</p>
            <span className="text-orange-400 text-sm">{healthPosts.filter(p => p.category === 'exercise').length} 篇文章</span>
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
              <Link key={post.slug} href={`/health/${post.slug}`} className="block group">
                <article className="relative h-full bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-green-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/10 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-2 text-xl shadow-lg">
                      {post.icon}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex gap-1.5 mb-3 flex-wrap">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-300 border border-green-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-bold mb-2 text-base md:text-lg text-white group-hover:text-green-400 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                      <span className="text-slate-500 text-xs">{post.date}</span>
                      <span className="text-sm font-medium text-green-400 group-hover:text-green-300">
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
              placeholder="搜尋健康文章..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-700/50 text-white placeholder-slate-400 rounded-xl px-4 py-3.5 pl-12 focus:outline-none focus:ring-2 focus:ring-green-500/50 border border-slate-600/50 focus:border-green-500/50 transition-all"
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
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/20'
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
            <span className="text-2xl">❤️</span>
            <span className="text-lg font-bold text-white">健康養生</span>
          </div>
          <p className="text-slate-500 text-sm mb-4">幫你建立健康的生活習慣</p>
          <div className="flex items-center justify-center gap-4 text-slate-600 text-xs">
            <span>📝 {healthPosts.length} 篇健康文章</span>
            <span>•</span>
            <span>💚 健康生活</span>
          </div>
        </footer>
      </div>
    </div>
  );
}