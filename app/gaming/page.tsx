"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { blogPosts } from "../data/blogData";

const gamingPosts = blogPosts.filter(post => post.category === 'gaming');

const estimateReadingTime = (excerpt: string) => {
  const wordsPerMinute = 200;
  const words = excerpt.length / 2;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(3, minutes);
};

export default function GamingPage() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  useEffect(() => {
    try {
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
    } catch (e) { console.log('AdSense skipped'); }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Banner */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-fuchsia-950 to-pink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">
          {/* 博主資料卡片 */}
          <div className="bg-gradient-to-r from-purple-900/60 via-fuchsia-900/60 to-pink-900/60 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-purple-500/20 p-4 md:p-6 mb-4 md:mb-6 shadow-2xl shadow-purple-500/10">
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-4">
              <div className="flex flex-col items-center sm:items-start gap-3">
                <div className="relative">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl shadow-purple-500/30">
                    <img
                      src="https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=300&h=300&fit=crop&q=80"
                      alt="Gaming Hub"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-4xl md:text-5xl">🎮</div>';
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">Gaming Hub</h1>
                  <span className="text-xl md:text-2xl">🎮</span>
                </div>
                <p className="text-purple-300/80 text-xs md:text-sm mb-2 md:mb-3">2026年遊戲趨勢 · 主機大戰 · 電競熱潮</p>

                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  電玩遊戲愛好者的資訊平台！追蹤最新主機大戰、電競賽事、VR遊戲發展，以及手遊市場趨勢分析。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="bg-white/5 rounded-xl px-3 py-2 md:px-5 md:py-3 text-center border border-purple-500/20">
                <div className="text-lg md:text-2xl font-bold text-purple-400">{gamingPosts.length}</div>
                <div className="text-[10px] md:text-xs text-slate-400">文章</div>
              </div>
              <div className="bg-white/5 rounded-xl px-3 py-2 md:px-5 md:py-3 text-center border border-purple-500/20">
                <div className="text-lg md:text-2xl font-bold text-pink-400">PS5</div>
                <div className="text-[10px] md:text-xs text-slate-400">Switch 2</div>
              </div>
              <div className="bg-white/5 rounded-xl px-3 py-2 md:px-5 md:py-3 text-center border border-purple-500/20">
                <div className="text-lg md:text-2xl font-bold text-cyan-400">VR</div>
                <div className="text-[10px] md:text-xs text-slate-400">Metaverse</div>
              </div>
              <div className="bg-white/5 rounded-xl px-3 py-2 md:px-5 md:py-3 text-center border border-purple-500/20">
                <div className="text-lg md:text-2xl font-bold text-amber-400">1億+</div>
                <div className="text-[10px] md:text-xs text-slate-400">電競獎金</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-2.5 md:p-3 border border-purple-500/20">
              <p className="text-slate-300 text-xs md:text-sm italic text-center">「2026年，遊戲產業進入新紀元！」</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <Link href="/" className="flex items-center gap-1.5 md:gap-2 text-white hover:text-purple-400 transition-all bg-white/5 hover:bg-purple-500/10 px-3 md:px-5 py-2 md:py-2.5 rounded-full border border-white/10 hover:border-purple-500/30 backdrop-blur-sm text-xs md:text-sm">
              <span>←</span>
              <span>返回首頁</span>
            </Link>
            <span className="bg-purple-500/20 text-purple-300 px-2 md:px-4 py-1.5 md:py-2 rounded-full text-xs border border-purple-500/30">
              🎮 {gamingPosts.length} 篇文章
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* ===== 電玩遊戲專欄 ===== */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-2xl shadow-lg">
                🎮
              </div>
              <div>
                <h2 className="text-white text-xl md:text-2xl font-bold">電玩遊戲</h2>
                <p className="text-purple-300/60 text-sm">2026年遊戲趨勢 · 主機大戰 · 電競熱潮</p>
              </div>
            </div>
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">
              🆕 {gamingPosts.length} 篇文章
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {gamingPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`block group transition-all duration-500 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                onMouseEnter={() => setHoveredSlug(post.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <article className={`relative h-full bg-slate-800/40 md:bg-slate-800/50 rounded-xl md:rounded-2xl overflow-hidden border border-slate-700/40 md:border-slate-700/50 hover:border-purple-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 ${hoveredSlug === post.slug ? 'ring-2 ring-purple-500/30' : ''}`}>
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full object-cover transition-all duration-700 group-hover:scale-110 ${index === 0 ? 'h-48 md:h-56' : 'h-36'}`}
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=800&q=80";
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
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold mb-2 text-base md:text-lg text-white group-hover:text-purple-400 transition-colors leading-snug">
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

        {/* Footer */}
        <footer className="text-center mt-16 py-10 border-t border-slate-800">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">🎮</span>
            <span className="text-lg font-bold text-white">Gaming Hub</span>
          </div>
          <p className="text-slate-500 text-sm mb-4">2026年遊戲產業資訊平台</p>
          <div className="flex items-center justify-center gap-4 text-slate-600 text-xs">
            <span>🎮 {gamingPosts.length} 篇專業文章</span>
            <span>•</span>
            <span>💰 最新遊戲趨勢</span>
          </div>
        </footer>
      </div>
    </div>
  );
}