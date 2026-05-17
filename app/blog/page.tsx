"use client";

import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    slug: "sensoji",
    title: "東京最古老寺廟：淺草寺（Sensō-ji）深度一日遊全攻略",
    excerpt: "創建於公元628年，是東京都內最古老的寺廟。從雷門巨大紅燈籠、仲見世通商店街到本堂參拜，帶你玩轉這個東京最經典的地標！",
    date: "May 2026",
    image: "https://live.staticflickr.com/6552/6972841610_e3c87b77f4_b.jpg",
    icon: "🏮",
    tags: ["東京", "寺廟", "文化"],
    accent: "from-red-500 to-orange-500"
  },
  {
    slug: "shibuya-crossing",
    title: "走進世界最繁忙的十字路口：東京澀谷十字路口全攻略！",
    excerpt: "如果要選一個最能代表現代東京、甚至全日本繁華景象的地標，澀谷十字路口（Shibuya Crossing）絕對當之無愧！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1759491125973-6c46d3f86c13?w=1200&q=80",
    icon: "🌍",
    tags: ["東京", "城市", "打卡"],
    accent: "from-purple-500 to-pink-500"
  },
  {
    slug: "meiji-shrine",
    title: "東京市中心的森林秘境：明治神宮深度半日遊攻略",
    excerpt: "緊鄰原宿與竹下通，只要走過一條橋，就能瞬間從喧囂都市切換到原始森林。供奉明治天皇與昭憲皇太后的神道教聖地！",
    date: "May 2026",
    image: "https://japanjourneys.jp/wp-content/uploads/2019/08/meiji-jingu-torii-gate-1-1024x681.jpg",
    icon: "🌲",
    tags: ["東京", "神社", "自然"],
    accent: "from-green-500 to-emerald-500"
  },
  {
    slug: "dotonbori",
    title: "大阪不夜城：道頓堀運河（Dotonbori）全攻略！吃貨與霓虹夜景的天堂",
    excerpt: "17世紀開鑿的古老運河，現今蛻變成全日本最誇張、最迷幻的娛樂與美食重鎮。固力果跑跑人、立體巨型招牌、水上觀光船，帶你深度解鎖！",
    date: "May 2026",
    image: "https://static.gltjp.com/glt/data/article/21000/20444/20230926_162903_bf6866e1_w1920.webp",
    icon: "🌊",
    tags: ["大阪", "美食", "夜景"],
    accent: "from-cyan-500 to-blue-500"
  },
];

export default function BlogPage() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-orange-500/25">
            <span>✈️</span>
            <span>Travel Blog</span>
            <span>✈️</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            純粹旅人 Journey
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            用雙腳探索日本，用相機記錄每一個難忘瞬間 🇯🇵
          </p>
        </header>

        {/* Blog Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`block group transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredSlug(post.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
            >
              <div className={`
                relative h-full bg-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden 
                border border-zinc-700/50 hover:border-transparent
                transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl
                ${hoveredSlug === post.slug ? 'shadow-2xl' : ''}
              `}>
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />
                
                {/* Image container */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`
                      w-full object-cover transition-all duration-700
                      ${index === 0 ? 'h-64 md:h-80' : 'h-48'}
                      group-hover:scale-110
                    `}
                  />
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60`} />
                  
                  {/* Icon badge */}
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${post.accent} rounded-full p-3 text-2xl shadow-lg`}>
                    {post.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className={`font-bold mb-3 transition-colors group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:${post.accent}`}>
                    <span className="text-xl">{post.icon}</span> {post.title}
                  </h2>
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-500 text-xs">{post.date}</span>
                    <span className={`text-sm font-semibold bg-gradient-to-r ${post.accent} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity`}>
                      閱讀全文 →
                    </span>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${post.accent} opacity-0 group-hover:opacity-10 transition-opacity rounded-tl-full`} />
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 py-8 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm">
            🇯🇵 純粹旅人 · 用心感受每一個城市的溫度
          </p>
        </footer>
      </div>
    </div>
  );
}