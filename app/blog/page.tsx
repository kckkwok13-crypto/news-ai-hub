"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import FavoriteButton from "../components/FavoriteButton";
import { blogPosts } from "../data/blogData";

// Estimate reading time based on excerpt length
const estimateReadingTime = (excerpt: string) => {
  const wordsPerMinute = 200;
  const words = excerpt.length / 2;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(3, minutes);
};

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

// Get featured post (most recent)
const getFeaturedPost = () => blogPosts[0];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"date" | "title">("date");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const featuredPost = getFeaturedPost();

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Banner - Improved */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-950 to-cyan-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
          {/* 博主資料卡片 - 移動端優化 */}
          <div className="bg-gradient-to-r from-emerald-900/60 via-teal-900/60 to-cyan-900/60 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-emerald-500/20 p-4 md:p-6 mb-4 md:mb-6 shadow-2xl shadow-emerald-500/10">
            {/* 頂部：頭像 + 基本信息（移動端垂直排列） */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-4">
              {/* 頭像 */}
              <div className="flex flex-col items-center sm:items-start gap-3">
                <div className="relative">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-emerald-400/50 shadow-2xl shadow-emerald-500/30">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80"
                      alt="純粹旅人"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-4xl md:text-5xl">🌍</div>';
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 md:w-10 md:h-10 bg-emerald-500 rounded-full border-4 border-emerald-900 flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm md:text-lg">✓</span>
                  </div>
                </div>

                {/* 徽章 - 移動端一行顯示 */}
                <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                  <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs border border-emerald-500/30">原創遊記</span>
                  <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">深度攻略</span>
                  <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs border border-amber-500/30">良心推薦</span>
                </div>
              </div>

              {/* 基本信息 */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">純粹旅人</h1>
                  <span className="text-xl md:text-2xl">✈️</span>
                </div>
                <p className="text-emerald-300/80 text-xs md:text-sm mb-2 md:mb-3">退休熱血旅人 · 深度遊記作者</p>

                {/* 個人簡介 - 移動端友好 */}
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  退休後全心投入旅行探索嘅自由靈魂！足迹遍佈 30+ 個國家，用文字記錄旅程，用鏡頭捕捉感動，每篇遊記都係實地考察後嘅第一手分享。
                </p>
              </div>
            </div>

            {/* 統計數據 - 移動端2x2網格 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="bg-white/5 rounded-xl px-3 py-2 md:px-5 md:py-3 text-center border border-emerald-500/20">
                <div className="text-lg md:text-2xl font-bold text-emerald-400">32</div>
                <div className="text-[10px] md:text-xs text-slate-400">國家</div>
              </div>
              <div className="bg-white/5 rounded-xl px-3 py-2 md:px-5 md:py-3 text-center border border-emerald-500/20">
                <div className="text-lg md:text-2xl font-bold text-blue-400">{blogPosts.length}</div>
                <div className="text-[10px] md:text-xs text-slate-400">遊記</div>
              </div>
              <div className="bg-white/5 rounded-xl px-3 py-2 md:px-5 md:py-3 text-center border border-emerald-500/20">
                <div className="text-lg md:text-2xl font-bold text-amber-400">128</div>
                <div className="text-[10px] md:text-xs text-slate-400">城市</div>
              </div>
              <div className="bg-white/5 rounded-xl px-3 py-2 md:px-5 md:py-3 text-center border border-emerald-500/20">
                <div className="text-lg md:text-2xl font-bold text-purple-400">8+</div>
                <div className="text-[10px] md:text-xs text-slate-400">年經驗</div>
              </div>
            </div>

            {/* 專業領域 - 移動端2x2網格 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3 md:mb-4">
              <div className="bg-white/5 rounded-xl p-2 md:p-3 text-center border border-white/10">
                <div className="text-xl md:text-2xl mb-0.5 md:mb-1">🍜</div>
                <div className="text-[10px] md:text-xs text-emerald-300">美食探索</div>
              </div>
              <div className="bg-white/5 rounded-xl p-2 md:p-3 text-center border border-white/10">
                <div className="text-xl md:text-2xl mb-0.5 md:mb-1">🏯</div>
                <div className="text-[10px] md:text-xs text-emerald-300">文化深度</div>
              </div>
              <div className="bg-white/5 rounded-xl p-2 md:p-3 text-center border border-white/10">
                <div className="text-xl md:text-2xl mb-0.5 md:mb-1">🚶</div>
                <div className="text-[10px] md:text-xs text-emerald-300">路線規劃</div>
              </div>
              <div className="bg-white/5 rounded-xl p-2 md:p-3 text-center border border-white/10">
                <div className="text-xl md:text-2xl mb-0.5 md:mb-1">📸</div>
                <div className="text-[10px] md:text-xs text-emerald-300">旅行攝影</div>
              </div>
            </div>

            {/* 口號 */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-2.5 md:p-3 border border-emerald-500/20">
              <p className="text-slate-300 text-xs md:text-sm italic text-center">「旅行唔係走馬觀花，而係用心感受每個城市嘅溫度。」</p>
            </div>
          </div>

          {/* 目的地統計 */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <Link href="/" className="flex items-center gap-1.5 md:gap-2 text-white hover:text-emerald-400 transition-all bg-white/5 hover:bg-emerald-500/10 px-3 md:px-5 py-2 md:py-2.5 rounded-full border border-white/10 hover:border-emerald-500/30 backdrop-blur-sm text-xs md:text-sm">
              <span>←</span>
              <span>返回首頁</span>
            </Link>
            <span className="bg-emerald-500/20 text-emerald-300 px-2 md:px-4 py-1.5 md:py-2 rounded-full text-xs border border-emerald-500/30">
              📍 {Object.keys(regionStats).length} 個地區
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-2 md:px-4 py-1.5 md:py-2 rounded-full text-xs border border-blue-500/30">
              📝 {blogPosts.length} 篇遊記
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Region Stats - Improved */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-2xl p-5 mb-8 border border-slate-700/50 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <span className="text-xl">🗺️</span>
              <span>目的地分布</span>
            </h3>
            <span className="text-emerald-400/60 text-xs">點擊標籤篩選</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(regionStats).map(([region, count]) => (
              <button
                key={region}
                onClick={() => toggleTag(region)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  selectedTags.includes(region)
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white border border-transparent hover:border-slate-500'
                }`}
              >
                <span>{region}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedTags.includes(region) ? 'bg-white/20' : 'bg-emerald-500/20 text-emerald-300'
                }`}>{count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ===== 地方遊記專欄 - Improved Cards ===== */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl shadow-lg">
                🏰
              </div>
              <div>
                <h2 className="text-white text-xl md:text-2xl font-bold">地方遊記</h2>
                <p className="text-blue-300/60 text-sm">歐洲深度漫遊 · 歷史文化探索</p>
              </div>
            </div>
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
              {localPosts.length} 篇遊記
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {localPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`block group transition-all duration-500 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                onMouseEnter={() => setHoveredSlug(post.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <article className={`relative h-full bg-slate-800/40 md:bg-slate-800/50 rounded-xl md:rounded-2xl overflow-hidden border border-slate-700/40 md:border-slate-700/50 hover:border-blue-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 ${hoveredSlug === post.slug ? 'ring-2 ring-blue-500/30' : ''}`}>
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${index === 0 ? 'h-48 md:h-56' : 'h-36'}`}
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                    {/* Icon Badge */}
                    <div className={`absolute top-3 left-3 bg-gradient-to-r ${post.accent} rounded-xl p-2.5 text-xl shadow-lg backdrop-blur-sm`}>
                      {post.icon}
                    </div>

                    {/* Reading Time */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white/80 text-xs px-2.5 py-1 rounded-full">
                      ⏱️ {estimateReadingTime(post.excerpt)} min
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5">
                    {/* Tags */}
                    <div className="flex gap-1.5 mb-3 flex-wrap">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold mb-2 text-base md:text-lg text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                      <span className="text-slate-500 text-xs">{post.date}</span>
                      <span className={`text-sm font-medium bg-gradient-to-r ${post.accent} bg-clip-text text-transparent`}>
                        閱讀 →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* ===== 世界任我行專欄 - Improved Cards ===== */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-2xl shadow-lg">
                🌍
              </div>
              <div>
                <h2 className="text-white text-xl md:text-2xl font-bold">世界任我行</h2>
                <p className="text-emerald-300/60 text-sm">純粹旅人世界自由行 · 亞洲深度探索</p>
              </div>
            </div>
            <span className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium border border-emerald-500/30">
              {worldPosts.length} 篇遊記
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {worldPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`block group transition-all duration-500 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                onMouseEnter={() => setHoveredSlug(post.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <article className={`relative h-full bg-slate-800/40 md:bg-slate-800/50 rounded-xl md:rounded-2xl overflow-hidden border border-slate-700/40 md:border-slate-700/50 hover:border-emerald-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10 ${hoveredSlug === post.slug ? 'ring-2 ring-emerald-500/30' : ''}`}>
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${index === 0 ? 'h-48 md:h-56' : 'h-36'}`}
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                    {/* Icon Badge */}
                    <div className={`absolute top-3 left-3 bg-gradient-to-r ${post.accent} rounded-xl p-2.5 text-xl shadow-lg backdrop-blur-sm`}>
                      {post.icon}
                    </div>

                    {/* Reading Time */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white/80 text-xs px-2.5 py-1 rounded-full">
                      ⏱️ {estimateReadingTime(post.excerpt)} min
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5">
                    {/* Tags */}
                    <div className="flex gap-1.5 mb-3 flex-wrap">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold mb-2 text-base md:text-lg text-white group-hover:text-emerald-400 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                      <span className="text-slate-500 text-xs">{post.date}</span>
                      <span className={`text-sm font-medium bg-gradient-to-r ${post.accent} bg-clip-text text-transparent`}>
                        閱讀 →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* ===== 大灣區退休遊記專欄 - Improved Cards ===== */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl shadow-lg">
                🌴
              </div>
              <div>
                <h2 className="text-white text-xl md:text-2xl font-bold">大灣區退休遊記</h2>
                <p className="text-amber-300/60 text-sm">精選2-3天短途行程 · 銀髮族慢活之旅</p>
              </div>
            </div>
            <span className="bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium border border-amber-500/30">
              🆕 {gbaPosts.length} 篇遊記
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gbaPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="relative h-48 md:h-52 rounded-xl md:rounded-2xl overflow-hidden bg-slate-800/40 md:bg-slate-800/50 border border-slate-700/40 md:border-slate-700/50 hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, #1e3a5f 0%, #0d2137 100%)';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{post.icon}</span>
                      <span className="bg-amber-500/80 text-white text-xs px-2.5 py-1 rounded-full font-medium">
                        {post.tags.find(t => t.includes("天")) || "2天1夜"}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 group-hover:text-amber-300 transition-colors">
                      {post.title.replace(/^[^\s]+\s/, '')}
                    </h3>
                    <p className="text-slate-400 text-xs mt-2 line-clamp-1">{post.date}</p>
                  </div>

                  {/* Hover Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <span className="text-white text-xl ml-1">▶</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Search and Filters - Improved */}
        <div className="bg-gradient-to-r from-slate-800/40 md:from-slate-800/50 to-slate-800/20 md:to-slate-800/30 rounded-xl md:rounded-2xl p-4 md:p-6 mb-8 border border-slate-700/40 md:border-slate-700/50">
          <div className="flex flex-col md:flex-row gap-4 mb-5">
            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                🔍
              </div>
              <input
                type="text"
                placeholder="搜尋文章標題、內容或標籤..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-700/50 text-white placeholder-slate-400 rounded-xl px-4 py-3.5 pl-12 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border border-slate-600/50 focus:border-emerald-500/50 transition-all"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "date" | "title")}
                className="bg-slate-700/50 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border border-slate-600/50 cursor-pointer"
              >
                <option value="date">最近更新</option>
                <option value="title">標題 A-Z</option>
              </select>
              <button
                onClick={clearFilters}
                className="bg-slate-600/50 hover:bg-slate-500 text-white px-5 py-3 rounded-xl transition-colors border border-slate-600/50 hover:border-slate-500"
              >
                清除
              </button>
            </div>
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

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-7xl mb-6">🔍</div>
            <h3 className="text-white text-2xl font-bold mb-3">找不到符合條件的文章</h3>
            <p className="text-slate-400 mb-6">嘗試調整搜尋條件或清除篩選</p>
            <button
              onClick={clearFilters}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-xl transition-colors font-medium"
            >
              清除所有篩選
            </button>
          </div>
        )}

        {/* Footer - Improved */}
        <footer className="text-center mt-16 py-10 border-t border-slate-800">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">🌍</span>
            <span className="text-lg font-bold text-white">純粹旅人</span>
          </div>
          <p className="text-slate-500 text-sm mb-4">用心感受每一個城市的溫度</p>
          <div className="flex items-center justify-center gap-4 text-slate-600 text-xs">
            <span>📝 {blogPosts.length} 篇原創遊記</span>
            <span>•</span>
            <span>🌍 {Object.keys(regionStats).length} 個目的地</span>
          </div>
        </footer>
      </div>
    </div>
  );
}