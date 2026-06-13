"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { aiToolPosts } from "../data/aiToolsData";

export default function AIToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = Array.from(new Set(aiToolPosts.flatMap(post => post.tags))).sort();

  const filteredPosts = useMemo(() => {
    return aiToolPosts.filter(post => {
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

  const featuredPost = aiToolPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Banner */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-950 to-violet-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="text-purple-400 hover:text-purple-300 transition-all flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
              <span>←</span>
              <span>返回首頁</span>
            </Link>
          </div>

          <div className="flex items-center gap-5 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <span className="text-4xl">🤖</span>
            </div>
            <div>
              <h1 className="text-white text-3xl md:text-4xl font-bold">AI工具教程</h1>
              <p className="text-purple-400/80 text-lg mt-1">ChatGPT · 效率工具 · 人工智能</p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">{aiToolPosts.length}</div>
              <div className="text-xs text-purple-400/70">📝 教程文章</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">6</div>
              <div className="text-xs text-purple-400/70">🛠️ 工具類別</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">20+</div>
              <div className="text-xs text-purple-400/70">⚡ AI工具</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10">
              <div className="text-3xl font-bold text-white mb-1">FREE</div>
              <div className="text-xs text-purple-400/70">🎯 免費教程</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* 精彩專題 - AI統計圖表專區 */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <span>🌟</span>
              <span>精彩專題</span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-cyan-400 border border-cyan-500/30">NEW</span>
            </h2>
            <Link href="/" className="text-sm text-purple-400 hover:text-purple-300 transition flex items-center gap-1">
              <span>返回首頁</span>
              <span>→</span>
            </Link>
          </div>

          {/* SVG統計圖表區域 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {/* 圖表1: AI工具使用率 - 環形圖 */}
            <div className="bg-gradient-to-br from-purple-950/60 to-slate-900/60 rounded-2xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-purple-400 font-medium">AI工具使用率</span>
                <span className="text-lg">📊</span>
              </div>
              <svg viewBox="0 0 120 120" className="w-full h-24">
                <defs>
                  <linearGradient id="aiGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a855f7"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                  <linearGradient id="aiGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899"/>
                    <stop offset="100%" stopColor="#a855f7"/>
                  </linearGradient>
                  <linearGradient id="aiGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4"/>
                    <stop offset="100%" stopColor="#10b981"/>
                  </linearGradient>
                </defs>
                {/* 幾何裝飾背景 */}
                <circle cx="60" cy="60" r="45" fill="none" stroke="#1e293b" strokeWidth="12"/>
                <circle cx="60" cy="60" r="45" fill="none" stroke="url(#aiGradient1)" strokeWidth="12"
                  strokeDasharray="226 283" strokeDashoffset="0" strokeLinecap="round"
                  transform="rotate(-90 60 60)"/>
                <polygon points="60,20 75,50 60,45 45,50" fill="#a855f7" opacity="0.6"/>
                <rect x="25" y="70" width="15" height="15" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.4" transform="rotate(15 32 77)"/>
                <text x="60" y="55" textAnchor="middle" className="fill-white text-lg font-bold">80%</text>
                <text x="60" y="72" textAnchor="middle" className="fill-purple-400 text-[10px]">2026</text>
              </svg>
              <p className="text-xs text-gray-400 mt-1">全球企業採用AI比例</p>
            </div>

            {/* 圖表2: ChatGPT用戶增長 - 3D柱狀圖 */}
            <div className="bg-gradient-to-br from-cyan-950/60 to-slate-900/60 rounded-2xl p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-cyan-400 font-medium">ChatGPT用戶</span>
                <span className="text-lg">👥</span>
              </div>
              <svg viewBox="0 0 120 60" className="w-full h-24">
                {/* 3D效果柱狀圖 */}
                <rect x="8" y="42" width="18" height="18" rx="3" fill="#0891b2" opacity="0.7"/>
                <rect x="8" y="42" width="18" height="4" rx="2" fill="#06b6d4" opacity="0.5"/>
                <rect x="30" y="30" width="18" height="30" rx="3" fill="#06b6d4" opacity="0.8"/>
                <rect x="30" y="30" width="18" height="4" rx="2" fill="#22d3ee" opacity="0.6"/>
                <rect x="52" y="20" width="18" height="40" rx="3" fill="#22d3ee"/>
                <rect x="52" y="20" width="18" height="4" rx="2" fill="#67e8f9" opacity="0.7"/>
                <rect x="74" y="10" width="18" height="50" rx="3" fill="url(#aiGradient3)"/>
                <rect x="74" y="10" width="18" height="4" rx="2" fill="#a7f3d0" opacity="0.8"/>
                <rect x="96" y="3" width="18" height="57" rx="3" fill="#10b981"/>
                <rect x="96" y="3" width="18" height="4" rx="2" fill="#6ee7b7"/>
                {/* 幾何裝飾 */}
                <circle cx="110" cy="8" r="6" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.4"/>
                <polygon points="5,55 15,55 10,48" fill="#22d3ee" opacity="0.3"/>
              </svg>
              <p className="text-xs text-gray-400 mt-1">每月活躍用戶(億)</p>
            </div>

            {/* 圖表3: 效率提升趨勢 - 面積圖 */}
            <div className="bg-gradient-to-br from-pink-950/60 to-slate-900/60 rounded-2xl p-4 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-pink-400 font-medium">效率提升</span>
                <span className="text-lg">⚡</span>
              </div>
              <svg viewBox="0 0 120 60" className="w-full h-24">
                {/* 面積填充 */}
                <path d="M10 55 L35 45 L55 38 L80 22 L105 10 L105 60 L10 60 Z" fill="url(#aiGradient2)" opacity="0.3"/>
                {/* 趨勢線 */}
                <path d="M10 55 L35 45 L55 38 L80 22 L105 10" fill="none" stroke="url(#aiGradient2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                {/* 數據點 */}
                <circle cx="10" cy="55" r="4" fill="#ec4899"/>
                <circle cx="35" cy="45" r="4" fill="#f472b6"/>
                <circle cx="55" cy="38" r="4" fill="#f9a8d4"/>
                <circle cx="80" cy="22" r="4" fill="#fbcfe8"/>
                <circle cx="105" cy="10" r="5" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2"/>
                {/* 幾何裝飾 */}
                <rect x="2" y="50" width="8" height="8" fill="none" stroke="#f472b6" strokeWidth="1" opacity="0.5" transform="rotate(45 6 54)"/>
                <polygon points="115,50 120,55 115,60" fill="#f472b6" opacity="0.4"/>
                <text x="105" y="5" className="fill-pink-400 text-[8px] font-bold">+300%</text>
              </svg>
              <p className="text-xs text-gray-400 mt-1">工作效率提升幅度</p>
            </div>

            {/* 圖表4: 市場份額 - 3D餅圖 */}
            <div className="bg-gradient-to-br from-emerald-950/60 to-slate-900/60 rounded-2xl p-4 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-emerald-400 font-medium">市場規模</span>
                <span className="text-lg">💰</span>
              </div>
              <svg viewBox="0 0 120 60" className="w-full h-24">
                {/* 3D效果餅圖 */}
                <ellipse cx="60" cy="30" rx="25" ry="8" fill="#10b981" opacity="0.3"/>
                <path d="M60 30 L60 5 A25 8 0 0 1 85 30 Z" fill="#10b981"/>
                <path d="M60 30 L85 30 A25 8 0 0 1 60 38 Z" fill="#34d399"/>
                <path d="M60 30 L60 38 A25 8 0 0 1 35 30 Z" fill="#6ee7b7"/>
                <path d="M60 30 L35 30 A25 8 0 0 1 60 22 Z" fill="#a7f3d0"/>
                <ellipse cx="60" cy="30" rx="12" ry="4" fill="#0f172a"/>
                <text x="60" y="32" textAnchor="middle" className="fill-white text-xs font-bold">$4.3T</text>
                {/* 幾何裝飾 */}
                <circle cx="15" cy="50" r="5" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="2,2"/>
                <polygon points="100,50 108,50 104,45" fill="#34d399" opacity="0.6"/>
              </svg>
              <p className="text-xs text-gray-400 mt-1">2030年預測市場規模</p>
            </div>
          </div>

          {/* 精彩文章卡片 - 3列布局 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured Article - 大卡片 */}
            <Link href="/ai-tools/chatgpt-prompt-engineering" className="md:col-span-2 group">
              <div className="relative h-72 md:h-80 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 hover:border-purple-500/40 transition-all duration-500">
                {/* 幾何裝飾 */}
                <div className="absolute top-4 right-4 w-32 h-32 opacity-20">
                  <svg viewBox="0 0 100 100">
                    <polygon points="50,5 95,75 5,75" fill="none" stroke="url(#aiGradient1)" strokeWidth="2"/>
                    <circle cx="50" cy="45" r="30" fill="none" stroke="url(#aiGradient1)" strokeWidth="1" strokeDasharray="5,5"/>
                    <rect x="20" y="20" width="20" height="20" fill="none" stroke="#06b6d4" strokeWidth="1" transform="rotate(30 30 30)"/>
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 w-24 h-24 opacity-10">
                  <svg viewBox="0 0 50 50">
                    <rect x="5" y="5" width="40" height="40" fill="none" stroke="#a855f7" strokeWidth="2" transform="rotate(15 25 25)"/>
                    <circle cx="25" cy="25" r="15" fill="none" stroke="#ec4899" strokeWidth="1"/>
                  </svg>
                </div>

                <div className="relative h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80"
                    alt="ChatGPT 提示詞工程"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      ⭐ 精選文章
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">ChatGPT</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">提示詞</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20">效率</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    ChatGPT 提示詞工程完整指南：如何問對問題
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    同樣是問 ChatGPT，為什麼別人得到的效果比你更好？本文教你提示詞工程的技巧，提升 AI 輸出質量 300%。
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-400">📅 2026-06-10</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-purple-400">⏱️ 約 10 分鐘閱讀</span>
                    <span className="ml-auto text-purple-400 font-semibold group-hover:text-purple-300 transition-colors flex items-center gap-1">
                      閱讀全文 →
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Side Articles - 垂直堆疊 */}
            <div className="flex flex-col gap-4">
              {/* Midjourney Article */}
              <Link href="/ai-tools/midjourney-beginners" className="group flex-1">
                <div className="relative h-full min-h-[155px] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-500">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-600 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex h-full">
                    <div className="w-1/3 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&q=80"
                        alt="Midjourney"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&q=80";
                        }}
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-center">
                      <div className="flex gap-1.5 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-300">🎨</span>
                      </div>
                      <h3 className="font-bold text-white text-sm group-hover:text-pink-400 transition-colors leading-snug mb-1">
                        Midjourney 完全教程：從新手到高手
                      </h3>
                      <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed mb-2">
                        如何使用 Midjourney 生成令人驚艷的圖片？
                      </p>
                      <span className="text-xs text-pink-400">⏱️ 11 分鐘</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Claude Article */}
              <Link href="/ai-tools/claude-ai-guide" className="group flex-1">
                <div className="relative h-full min-h-[155px] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-500">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex h-full">
                    <div className="w-1/3 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80"
                        alt="Claude AI"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80";
                        }}
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-center">
                      <div className="flex gap-1.5 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-300">💬</span>
                      </div>
                      <h3 className="font-bold text-white text-sm group-hover:text-amber-400 transition-colors leading-snug mb-1">
                        Claude AI 完整攻略：比 ChatGPT 更強大
                      </h3>
                      <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed mb-2">
                        Claude 如何幫助你工作和生活？
                      </p>
                      <span className="text-xs text-amber-400">⏱️ 10 分鐘</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* 更多文章 - 水平滾動 */}
          <div className="mt-6 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {/* AI效率工具 */}
              <Link href="/ai-tools/ai-productivity-tools-2026" className="group w-72 flex-shrink-0">
                <div className="relative rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/40 transition-all duration-500">
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80"
                      alt="AI效率工具"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-2 text-xl shadow-lg">⚡</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-sm mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      2026年必備AI工具：打工人的效率神器
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2 mb-3">20+ 實用 AI 工具推薦，涵蓋各個場景</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">2026-06-08</span>
                      <span className="text-cyan-400">閱讀 →</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Notion AI */}
              <Link href="/ai-tools/notion-ai-workflow" className="group w-72 flex-shrink-0">
                <div className="relative rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700/50 hover:border-gray-500/40 transition-all duration-500">
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                      alt="Notion AI"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl p-2 text-xl shadow-lg">📝</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-sm mb-2 group-hover:text-gray-300 transition-colors line-clamp-2">
                      Notion AI 工作流：打造你的第二個大腦
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2 mb-3">用 Notion AI 打造高效的個人知識管理系統</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">2026-06-02</span>
                      <span className="text-gray-400">閱讀 →</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* AI影片剪輯 */}
              <Link href="/ai-tools/ai-video-editing" className="group w-72 flex-shrink-0">
                <div className="relative rounded-2xl overflow-hidden bg-slate-800/50 border border-slate-700/50 hover:border-red-500/40 transition-all duration-500">
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80"
                      alt="AI影片剪輯"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl p-2 text-xl shadow-lg">🎬</div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white text-sm mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                      AI影片剪輯入門：用科技提升創作效率
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-2 mb-3">從剪輯到配音，全面提升效率 70%</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">2026-05-31</span>
                      <span className="text-red-400">閱讀 →</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* 查看全部按鈕 */}
              <div className="w-72 flex-shrink-0">
                <div className="h-full min-h-[200px] rounded-2xl border-2 border-dashed border-slate-700 hover:border-purple-500/50 transition-all duration-500 flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <span className="text-3xl">🤖</span>
                  </div>
                  <span className="text-white font-semibold">查看全部教程</span>
                  <span className="text-purple-400 text-sm">共 6 篇文章 →</span>
                </div>
              </div>
            </div>
          </div>

          {/* 精選文章底部提示 */}
          <div className="mt-6 text-center">
            <p className="text-slate-500 text-sm">精選內容每日更新，探索更多 AI 工具教程 ↓</p>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-white text-xl font-bold mb-2">AI助手</h3>
            <p className="text-purple-300/70 text-sm mb-4">ChatGPT、Claude等</p>
            <span className="text-purple-400 text-sm">{aiToolPosts.filter(p => p.category === 'chatgpt' || p.category === 'assistant').length} 篇文章</span>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-white text-xl font-bold mb-2">效率工具</h3>
            <p className="text-cyan-300/70 text-sm mb-4">提升工作效率</p>
            <span className="text-cyan-400 text-sm">{aiToolPosts.filter(p => p.category === 'productivity' || p.category === 'workflow').length} 篇文章</span>
          </div>

          <div className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all">
            <div className="text-4xl mb-3">🎨</div>
            <h3 className="text-white text-xl font-bold mb-2">創意工具</h3>
            <p className="text-pink-300/70 text-sm mb-4">圖像、影片、音頻</p>
            <span className="text-pink-400 text-sm">{aiToolPosts.filter(p => p.category === 'image' || p.category === 'video').length} 篇文章</span>
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
              placeholder="搜尋AI工具教程..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-700/50 text-white placeholder-slate-400 rounded-xl px-4 py-3.5 pl-12 focus:outline-none focus:ring-2 focus:ring-purple-500/50 border border-slate-600/50 focus:border-purple-500/50 transition-all"
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
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/20'
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
            <span className="text-2xl">🤖</span>
            <span className="text-lg font-bold text-white">AI工具教程</span>
          </div>
          <p className="text-slate-500 text-sm mb-4">用科技提升你的效率</p>
          <div className="flex items-center justify-center gap-4 text-slate-600 text-xs">
            <span>📝 {aiToolPosts.length} 篇教程</span>
            <span>•</span>
            <span>⚡ AI工具</span>
          </div>
        </footer>
      </div>
    </div>
  );
}