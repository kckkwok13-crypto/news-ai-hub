"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import FavoriteButton from "../components/FavoriteButton";
import { blogPosts } from "../data/blogData";

// Extract unique tags for filters
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

// Region mapping for stats
const regionStats = blogPosts.reduce((acc, post) => {
  const region = post.tags[0];
  acc[region] = (acc[region] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

// GBA retirement travel posts
const gbaPosts = blogPosts.filter(post => post.category === 'gba');

// Local travel posts (Europe)
const localPosts = blogPosts.filter(post => post.category === 'local');

// World travel posts (Japan, Korea, Thailand)
const worldPosts = blogPosts.filter(post => post.category === 'world');

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"date" | "title">("date");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts.filter(post => {
      const matchesSearch = searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => post.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
    if (sortBy === "title") posts.sort((a, b) => a.title.localeCompare(b.title));
    return posts;
  }, [searchQuery, selectedTags, sortBy]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSortBy("date");
  };

  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) { console.log('AdSense skipped'); }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Banner */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img src="/images/pure-traveler-avatar.jpg" alt="純粹旅人" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs">✈️</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-sm font-medium bg-amber-400/20 px-3 py-1 rounded-full">✈️ 純粹旅人</span>
                <span className="text-emerald-300 text-sm">旅遊博主</span>
              </div>
              <h2 className="text-white text-2xl font-bold mt-1">NewsFlow Travel Blog</h2>
              <p className="text-emerald-200 text-sm mt-1">用雙腳探索世界，用相機記錄每一個難忘瞬間 🌍</p>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
              <div className="text-2xl font-bold text-white">{blogPosts.length}</div>
              <div className="text-xs text-emerald-200">文章</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
              <div className="text-2xl font-bold text-white">{Object.keys(regionStats).length}</div>
              <div className="text-xs text-emerald-200">城市</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
              <div className="text-2xl font-bold text-white">{allTags.length}</div>
              <div className="text-xs text-emerald-200">主題</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
              <div className="text-2xl font-bold text-white">{blogPosts.length}</div>
              <div className="text-xs text-emerald-200">遊記</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
              <span>←</span>
              <span>返回首頁</span>
            </Link>
            <span className="text-emerald-200 text-sm">📍 足跡遍佈 {Object.keys(regionStats).length} 個地區</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Region Stats */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-800/80 rounded-2xl p-5 mb-6 border border-emerald-500/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <span className="text-2xl">🗺️</span> 目的地分布
            </h3>
            <span className="text-emerald-400 text-sm">點擊標籤篩選文章</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(regionStats).map(([region, count]) => (
              <button
                key={region}
                onClick={() => toggleTag(region)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedTags.includes(region)
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                <span>{region}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedTags.includes(region) ? 'bg-white/20' : 'bg-emerald-500/20'
                }`}>{count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ===== 地方遊記專欄 ===== */}
        <div className="bg-gradient-to-r from-blue-900/50 via-indigo-900/50 to-purple-900/50 rounded-2xl p-6 mb-8 border border-blue-500/30">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🏰</span>
              <div>
                <h2 className="text-white text-2xl font-bold">地方遊記</h2>
                <p className="text-blue-200/80 text-sm mt-1">歐洲深度漫遊 · 歷史文化探索</p>
              </div>
            </div>
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              🏰 {localPosts.length} 篇遊記
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`block group transition-all duration-500 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                onMouseEnter={() => setHoveredSlug(post.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <div className={`relative h-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 ${hoveredSlug === post.slug ? 'shadow-xl shadow-blue-500/10' : ''}`}>
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${post.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full object-cover transition-all duration-700 ${index === 0 ? 'h-52 md:h-64' : 'h-40'} group-hover:scale-110`}
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className={`absolute top-3 left-3 bg-gradient-to-r ${post.accent} rounded-full p-2 text-xl shadow-lg`}>
                      {post.icon}
                    </div>
                    <div className="absolute top-3 right-3" onClick={(e) => e.preventDefault()}>
                      <FavoriteButton slug={post.slug} />
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300">{tag}</span>
                      ))}
                    </div>
                    <h2 className={`font-bold mb-2 text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:${post.accent} transition-all`}>
                      {post.title}
                    </h2>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs">{post.date}</span>
                      <span className={`text-sm font-semibold bg-gradient-to-r ${post.accent} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity`}>
                        閱讀全文 →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ===== 世界任我行專欄 ===== */}
        <div className="bg-gradient-to-r from-emerald-900/50 via-teal-900/50 to-cyan-900/50 rounded-2xl p-6 mb-8 border border-emerald-500/30">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🌍</span>
              <div>
                <h2 className="text-white text-2xl font-bold">世界任我行</h2>
                <p className="text-emerald-200/80 text-sm mt-1">純粹旅人世界自由行 · 亞洲深度探索</p>
              </div>
            </div>
            <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              ✈️ {worldPosts.length} 篇遊記
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {worldPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`block group transition-all duration-500 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                onMouseEnter={() => setHoveredSlug(post.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <div className={`relative h-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/10 ${hoveredSlug === post.slug ? 'shadow-xl shadow-emerald-500/10' : ''}`}>
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${post.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full object-cover transition-all duration-700 ${index === 0 ? 'h-52 md:h-64' : 'h-40'} group-hover:scale-110`}
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className={`absolute top-3 left-3 bg-gradient-to-r ${post.accent} rounded-full p-2 text-xl shadow-lg`}>
                      {post.icon}
                    </div>
                    <div className="absolute top-3 right-3" onClick={(e) => e.preventDefault()}>
                      <FavoriteButton slug={post.slug} />
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300">{tag}</span>
                      ))}
                    </div>
                    <h2 className={`font-bold mb-2 text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:${post.accent} transition-all`}>
                      {post.title}
                    </h2>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs">{post.date}</span>
                      <span className={`text-sm font-semibold bg-gradient-to-r ${post.accent} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity`}>
                        閱讀全文 →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ===== 大灣區退休遊記專欄 ===== */}
        <div className="bg-gradient-to-r from-amber-900/50 via-orange-900/50 to-red-900/50 rounded-2xl p-6 mb-8 border border-amber-500/30">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🌴</span>
              <div>
                <h2 className="text-white text-2xl font-bold">大灣區退休遊記</h2>
                <p className="text-amber-200/80 text-sm mt-1">精選2-3天短途行程 · 銀髮族慢活之旅</p>
              </div>
            </div>
            <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              🆕 {gbaPosts.length} 篇遊記
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gbaPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="relative h-48 rounded-xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:scale-[1.02]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%)';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{post.icon}</span>
                      <span className="bg-amber-500/80 text-white text-xs px-2 py-0.5 rounded-full">
                        {post.tags.find(t => t.includes("天")) || "2天1夜"}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-sm leading-tight line-clamp-2 group-hover:text-amber-300 transition-colors">
                      {post.title.replace(/^[^\s]+\s/, '')}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-xl">▶</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-800/80 rounded-2xl p-6 mb-6 border border-slate-700">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="🔍 搜尋文章標題、內容或標籤..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "date" | "title")}
                className="bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="date">最近更新</option>
                <option value="title">標題 A-Z</option>
              </select>
              <button onClick={clearFilters} className="bg-slate-600 hover:bg-slate-500 text-white px-4 py-3 rounded-lg transition-colors">
                清除
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-slate-400 text-sm mb-2">🏷️ 標籤篩選</h4>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    selectedTags.includes(tag) ? 'bg-green-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-white text-xl font-semibold mb-2">找不到符合條件的文章</h3>
            <p className="text-slate-400 mb-4">嘗試調整搜尋條件或清除篩選</p>
            <button onClick={clearFilters} className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg transition-colors">
              清除所有篩選
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-16 py-8 border-t border-slate-700">
          <p className="text-slate-500 text-sm">🌍 純粹旅人 · 用心感受每一個城市的溫度</p>
        </footer>
      </div>
    </div>
  );
}