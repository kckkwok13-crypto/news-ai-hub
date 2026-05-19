"use client";

import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    slug: "sensoji",
    title: "東京最古老寺廟：淺草寺（Sensō-ji）深度一日遊全攻略",
    excerpt: "創建於公元628年，是東京都內最古老的寺廟。從雷門巨大紅燈籠、仲見世通商店街到本堂參拜，帶你玩轉這個東京最經典的地標！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=1200&q=80",
    icon: "🌲",
    tags: ["東京", "神社", "自然"],
    accent: "from-green-500 to-emerald-500"
  },
  {
    slug: "dotonbori",
    title: "大阪不夜城：道頓堀運河（Dotonbori）全攻略！吃貨與霓虹夜景的天堂",
    excerpt: "17世紀開鑿的古老運河，現今已經蛻變成全日本最誇張、最迷幻的娛樂與美食重鎮。固力果跑跑人、立體巨型招牌、水上觀光船，帶你深度解鎖！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1565559204102-f59129a70ae2?w=1200&q=80",
    icon: "🌊",
    tags: ["大阪", "美食", "夜景"],
    accent: "from-cyan-500 to-blue-500"
  },
  {
    slug: "arashiyama",
    title: "🎋 京都避世仙境：嵐山竹林小徑深度散策！尋找那一抹翠綠與心靈寧靜",
    excerpt: "穿越千年竹林、踏足渡月橋、乘搭嵐山小火車。一條通往異世界的神秘小徑，被譽為日本最想保留的聲音風景！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    icon: "🎋",
    tags: ["京都", "竹林", "自然"],
    accent: "from-green-600 to-emerald-500"
  },
  {
    slug: "eiffel-tower",
    title: "🗼 遇見巴黎的浪漫定義：艾菲爾鐵塔深度打卡與登塔全攻略",
    excerpt: "全球最浪漫的時尚地標！從夏樂宮最佳拍攝位到戰神廣場野餐體驗，深度解鎖這座花都最耀眼的主角！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1777204539417-ed283582af35?w=1200&q=80",
    icon: "🗼",
    tags: ["巴黎", "歐洲", "浪漫"],
    accent: "from-amber-500 to-yellow-500"
  },
  {
    slug: "myeongdong",
    title: "🛍️ 首爾潮流不夜城：明洞購物街（Myeongdong）終極狂歡攻略！",
    excerpt: "K-Beauty、潮人服飾、街头美食、換錢攻略——全部一站式滿足你！帶你深度掃描首爾最具代表性的超級商圈！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=1200&q=80",
    icon: "🛍️",
    tags: ["首爾", "韓國", "購物"],
    accent: "from-rose-500 to-pink-500"
  },
  {
    slug: "st-peters-basilica",
    title: "🏛️ 走進全球最大的教堂：梵蒂岡聖伯多祿大殿（St. Peter's Basilica）",
    excerpt: "文藝復興與巴洛克藝術的巔峰之作！米開朗基羅的圓頂、貝尼尼的 Baldacchino、必看的西斯汀小堂，讓你一次看遍人類文明最璀璨的藝術瑰寶！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1746071062145-f01c2dbdbc23?w=1200&q=80",
    icon: "🏛️",
    tags: ["羅馬", "歐洲", "宗教"],
    accent: "from-amber-600 to-yellow-500"
  },
  {
    slug: "sistine-chapel",
    title: "🎨 米開朗基羅的世紀畫布：西斯汀小堂（Cappella Sistina）",
    excerpt: "抬頭仰望《創世紀》與《末日審判》—— 一場跨越五百年的藝術心靈之旅，感受文藝復興最輝煌的色彩與靈魂！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1722979830401-fd878aad76fe?w=1200&q=80",
    icon: "🎨",
    tags: ["羅馬", "歐洲", "藝術"],
    accent: "from-purple-600 to-pink-500"
  },
  {
    slug: "trevi",
    title: "⛲ 許願池的秘密：羅馬特萊維噴泉（Trevi Fountain）",
    excerpt: "傳說硬幣許願、品味巴洛克美學！羅馬最標誌性的噴泉，帶你揭開千年水神的震撼與浪漫！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&q=80",
    icon: "⛲",
    tags: ["羅馬", "歐洲", "浪漫"],
    accent: "from-blue-500 to-cyan-500"
  },
  {
    slug: "grand-palace",
    title: "👑 曼谷金碧輝煌：大皇宮（Grand Palace）深度遊",
    excerpt: "泰國皇室的莊嚴聖地！玉佛寺、節基皇殿、皇家儀式——走進這座金光閃閃的建築群，體驗泰國最重要的文化心臟！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80",
    icon: "👑",
    tags: ["曼谷", "泰國", "文化"],
    accent: "from-yellow-500 to-amber-500"
  },
  {
    slug: "colosseum",
    title: "🏟️ 羅馬鬥獸場：古羅馬最殘酷與最輝煌的競技場",
    excerpt: "角鬥士的生死之戰、獅子與野獸的怒吼！站在這座2000年前的橢圓巨型競技場，感受古羅馬帝國的震撼與哀愁！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1724398915427-edc535c546fe?w=1200&q=80",
    icon: "🏟️",
    tags: ["羅馬", "歐洲", "歷史"],
    accent: "from-red-600 to-orange-500"
  },
  {
    slug: "florence-cathedral",
    title: "🧱 佛羅倫斯大教堂：布魯內萊斯基的永恆奇蹟",
    excerpt: "文藝復興的搖籃！走進佛羅倫斯聖母百花大教堂，探索那個震撼世界的無木架巨型圓頂，感受徐徐而上的463級階梯與米開朗基羅的感嘆！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?w=1200&q=80",
    icon: "🧱",
    tags: ["佛羅倫斯", "歐洲", "建築"],
    accent: "from-emerald-600 to-teal-500"
  },
  {
    slug: "ponte-vecchio",
    title: "🌅 繾綣阿諾河的黃昏浪漫：佛羅倫斯老橋深度散策",
    excerpt: "橫跨1345年！走過二戰奇蹟存活的欧洲最古老石桥，揭開美第奇家族的神秘走廊與百年珠寶街的奢華故事！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?w=1200&q=80",
    icon: "🌉",
    tags: ["佛羅倫斯", "歐洲", "浪漫"],
    accent: "from-amber-600 to-orange-500"
  },
];

export default function BlogPage() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Travel-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16 pt-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-green-500/25">
              <span>✈️</span>
              <span>Travel Blog</span>
              <span>✈️</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              純粹旅人 <span className="text-emerald-400">Journey</span>
            </h1>
            <p className="text-emerald-200/80 text-lg max-w-2xl mx-auto">
              用雙腳探索世界，用相機記錄每一個難忘瞬間 🌍
            </p>
          </header>

          {/* Back to Newsflow Link */}
          <div className="text-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full transition-all backdrop-blur-sm border border-white/20"
            >
              ← 返回 Newsflow 首頁
            </Link>
          </div>

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
                  relative h-full bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden 
                  border border-green-200/30 hover:border-transparent
                  transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl
                  ${hoveredSlug === post.slug ? 'shadow-2xl' : ''}
                `}>
                  {/* Gradient accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${post.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  
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
                      onError={(e) => {
                        e.currentTarget.src = `https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80`;
                      }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
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
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h2 className={`font-bold mb-3 text-gray-900 transition-colors group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:${post.accent}`}>
                      <span className="text-xl">{post.icon}</span> {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">{post.date}</span>
                      <span className={`text-sm font-semibold bg-gradient-to-r ${post.accent} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity`}>
                        閱讀全文 →
                      </span>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${post.accent} opacity-0 group-hover:opacity-15 transition-opacity rounded-tl-full`} />
                </div>
              </Link>
            ))}
          </div>

          {/* Infolinks Ad Script */}
          <div className="mt-12 text-center">
            <script type="text/javascript">
              {`var infolinks_pid = 3445528; var infolinks_wsid = 0;`}
            </script>
            <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
          </div>

          {/* Footer */}
          <footer className="text-center mt-16 py-8 border-t border-green-700/30">
            <p className="text-emerald-200/60 text-sm">
              🌍 純粹旅人 · 用心感受每一個城市的溫度
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}