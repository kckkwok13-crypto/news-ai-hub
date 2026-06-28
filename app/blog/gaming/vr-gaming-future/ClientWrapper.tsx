'use client'

import { useState } from 'react'

const content = {
  'zh-TW': {
    intro: `VR 遊戲唔再係得個概念！2026年，Meta Quest 4、Apple Vision Pro 2、PS VR3 三大巨頭正式對決，虛擬實境遊戲迎來真正爆發！

Metaverse 係咪終於要實現？等我哋一齊探索！`,
    sections: [
      {
        title: "🥽 2026 VR 頭盔大比拼",
        content: `**三大VR頭盔終極對決：**

**Meta Quest 4（最佳性價比）**
- 售價：399美元
- 解析度：4K per eye
- 視野：120度
- 重量：380g
- 評分：⭐⭐⭐⭐⭐ 性價比之王

**Apple Vision Pro 2（最佳生態）**
- 售價：2,499美元
- 解析度：8K per eye
- 視野：110度
- 重量：450g
- 評分：⭐⭐⭐⭐ 貴但強大

**PS VR3（最佳遊戲體驗）**
- 售價：549美元
- 解析度：4K HDR
- 視野：110度
- 重量：500g
- 評分：⭐⭐⭐⭐ 遊戲最佳選擇

**市場佔有率預測：**
Meta Quest 4：55%、Apple Vision Pro：25%、PS VR3：15%、其他：5%`
      },
      {
        title: "🎮 2026 必玩 VR 遊戲推薦",
        content: `**2026年度VR遊戲大作：**

**1. 《Metaverse Life Simulator》**
- 類型：生活模擬
- 特點：完整虛擬生活體驗
- 評分：9.5/10

**2. 《Starfield VR》**
- 類型：太空探索
- 特點： Bethesda 史上最大製作VR版
- 評分：9.8/10

**3. 《Beat Saber 2》**
- 類型：音樂節奏
- 特點：全新歌曲庫，AI生成音樂
- 評分：9.2/10

**4. 《Half-Life 3 VR》**
- 類型：射擊冒險
- 特點：Valve 十年磨一劍
- 評分：9.9/10（未推出已爆紅）`
      },
      {
        title: "🌐 Metaverse 係咪終於要實現？",
        content: `**2026 Metaverse 發展現況：**

經過幾年沉澱，Metaverse 概念已經從炒作走向實際應用：

**成功案例：**
- Meta Horizon Worlds 月活用戶突破5000萬
- Microsoft Mesh 企業用戶突破100萬
- Decentraland 虛擬地產交易額突破10億美元

**仍需克服：**
- 硬體成本仍然偏高
- 沉浸感仍有進步空間
- 殺手級應用仍未出現

**預測：**
2027-2028年將係Metaverse既「爆發期」，殺手級應用預計2027年出現！`
      },
      {
        title: "💡 VR 遊戲對香港/台灣玩家影響",
        content: `**香港VR發展：**
- 香港VR遊戲中心數量突破200家
- 屯門、荃灣大型VR主題樂園開幕
- 香港選手首次喺VR電競大賽獲獎

**台灣VR驕傲：**
- HTC Vive 持續全球領先
- 台北101 VR體驗館成旅遊景點
- 台灣VR遊戲開發商打入日本市場

**建議：**
如果係第一次接觸VR，建議由 Meta Quest 4 開始，價錢親民、遊戲又多！`
      }
    ],
    tags: ["VR", "Metaverse", "虛擬實境", "遊戲", "2026", "電玩"],
    relatedPosts: ["console-wars", "esports-tournament", "mobile-gaming", "retro-nostalgia"]
  },
  'zh-CN': {
    intro: `VR 游戏不再只是概念！2026年，Meta Quest 4、Apple Vision Pro 2、PS VR3 三大巨头正式对决，虚拟实境游戏迎来真正爆发！

Metaverse 是不是终于要实现？让我们一起探索！`,
    sections: [
      {
        title: "🥽 2026 VR 头盔大比拼",
        content: `**三大VR头盔终极对决：**

**Meta Quest 4（最佳性价比）**
- 售价：399美元
- 分辨率：4K per eye
- 视野：120度
- 重量：380g
- 评分：⭐⭐⭐⭐⭐ 性价比之王

**Apple Vision Pro 2（最佳生态）**
- 售价：2,499美元
- 分辨率：8K per eye
- 视野：110度
- 重量：450g
- 评分：⭐⭐⭐⭐ 贵但强大

**PS VR3（最佳游戏体验）**
- 售价：549美元
- 分辨率：4K HDR
- 视野：110度
- 重量：500g
- 评分：⭐⭐⭐⭐ 游戏最佳选择

**市场占有率预测：**
Meta Quest 4：55%、Apple Vision Pro：25%、PS VR3：15%、其他：5%`
      },
      {
        title: "🎮 2026 必玩 VR 游戏推荐",
        content: `**2026年度VR游戏大作：**

**1. 《Metaverse Life Simulator》**
- 类型：生活模拟
- 特点：完整虚拟生活体验
- 评分：9.5/10

**2. 《Starfield VR》**
- 类型：太空探索
- 特点： Bethesda 史上最大制作VR版
- 评分：9.8/10

**3. 《Beat Saber 2》**
- 类型：音乐节奏
- 特点：全新歌曲库，AI生成音乐
- 评分：9.2/10

**4. 《Half-Life 3 VR》**
- 类型：射击冒险
- 特点：Valve 十年磨一剑
- 评分：9.9/10（未推出已爆红）`
      },
      {
        title: "🌐 Metaverse 是不是终于要实现？",
        content: `**2026 Metaverse 发展现况：**

经过几年沉淀，Metaverse 概念已经从炒作走向实际应用：

**成功案例：**
- Meta Horizon Worlds 月活用户突破5000万
- Microsoft Mesh 企业用户突破100万
- Decentraland 虚拟地产交易额突破10亿美元

**仍需克服：**
- 硬件成本仍然偏高
- 沉浸感仍有进步空间
- 杀手级应用仍未出现

**预测：**
2027-2028年将是Metaverse的「爆发期」，杀手级应用预计2027年出现！`
      },
      {
        title: "💡 VR 游戏对香港/台湾玩家影响",
        content: `**香港VR发展：**
- 香港VR游戏中心数量突破200家
- 屯门、荃湾大型VR主题乐园开幕
- 香港选手首次在VR电竞大赛获奖

**台湾VR骄傲：**
- HTC Vive 持续全球领先
- 台北101 VR体验馆成旅游景点
- 台湾VR游戏开发商打入日本市场

**建议：**
如果系第一次接触VR，建议由 Meta Quest 4 开始，价格亲民、游戏又多！`
      }
    ],
    tags: ["VR", "Metaverse", "虚拟实境", "游戏", "2026", "电玩"],
    relatedPosts: ["console-wars", "esports-tournament", "mobile-gaming", "retro-nostalgia"]
  },
  'en': {
    intro: `VR gaming is no longer just a concept! In 2026, Meta Quest 4, Apple Vision Pro 2, and PS VR3 officially battle it out - virtual reality gaming has truly arrived!

Is the Metaverse finally coming? Let's explore together!`,
    sections: [
      {
        title: "🥽 2026 VR Headset Showdown",
        content: `**Three Major VR Headsets Compared:**

**Meta Quest 4 (Best Value)**
- Price: $399
- Resolution: 4K per eye
- FOV: 120 degrees
- Weight: 380g
- Rating: ⭐⭐⭐⭐⭐ Best value

**Apple Vision Pro 2 (Best Ecosystem)**
- Price: $2,499
- Resolution: 8K per eye
- FOV: 110 degrees
- Weight: 450g
- Rating: ⭐⭐⭐⭐ Expensive but powerful

**PS VR3 (Best Gaming)**
- Price: $549
- Resolution: 4K HDR
- FOV: 110 degrees
- Weight: 500g
- Rating: ⭐⭐⭐⭐ Best for gaming

**Market Share Prediction:**
Meta Quest 4：55%、Apple Vision Pro：25%、PS VR3：15%、Others：5%`
      },
      {
        title: "🎮 2026 Must-Play VR Games",
        content: `**2026's Best VR Games:**

**1. 《Metaverse Life Simulator》**
- Genre: Life simulation
- Features: Complete virtual life experience
- Rating: 9.5/10

**2. 《Starfield VR》**
- Genre: Space exploration
- Features: Bethesda's biggest VR project ever
- Rating: 9.8/10

**3. 《Beat Saber 2》**
- Genre: Rhythm
- Features: New song library, AI-generated music
- Rating: 9.2/10

**4. 《Half-Life 3 VR》**
- Genre: Shooter adventure
- Features: Valve's 10-year project
- Rating: 9.9/10 (Already viral before launch!)`
      },
      {
        title: "🌐 Is the Metaverse Finally Here?",
        content: `**2026 Metaverse Development Status:**

After years of development, Metaverse has evolved from hype to practical application:

**Success Stories:**
- Meta Horizon Worlds hits 50M monthly active users
- Microsoft Mesh serves 1M+ enterprise users
- Decentraland virtual real estate hits $1B+ in trades

**Still Need to Overcome:**
- Hardware costs still high
- Immersion needs improvement
- Killer app hasn't emerged yet

**Prediction:**
2027-2028 will be Metaverse's "explosion period" - killer app expected in 2027!`
      },
      {
        title: "💡 Impact on Hong Kong & Taiwan Players",
        content: `**Hong Kong VR Development:**
- HK VR gaming centers exceed 200 locations
- Tuen Mun & Tsuen Wan VR theme parks open
- HK players win first VR esports championship

**Taiwan VR Pride:**
- HTC Vive continues global leadership
- Taipei 101 VR experience becomes tourist attraction
- Taiwanese VR developers break into Japan market

**Recommendation:**
If you're new to VR, start with Meta Quest 4 - affordable with tons of games!`
      }
    ],
    tags: ["VR", "Metaverse", "Virtual Reality", "Gaming", "2026", "VR Games"],
    relatedPosts: ["console-wars", "esports-tournament", "mobile-gaming", "retro-nostalgia"]
  }
}

export default function ClientWrapper() {
  const [lang, setLang] = useState<'zh-TW' | 'zh-CN' | 'en'>('zh-TW')
  const t = content[lang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1920&q=80"
            alt="VR Gaming"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-400 text-xs font-bold tracking-widest mb-6">
            🎮 電玩遊戲
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            VR 遊戲新紀元
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Metaverse 係咪終於要實現？
          </p>
        </div>
      </header>

      {/* Language Selector */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        {(['zh-TW', 'zh-CN', 'en'] as const).map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${lang === l ? 'bg-pink-500 text-black' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}
          >
            {l === 'zh-TW' ? '繁中' : l === 'zh-CN' ? '简体' : 'EN'}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-2xl p-8 mb-12 border border-pink-500/20">
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {t.intro}
          </p>
        </div>

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden mb-6 border border-slate-700/50">
          <img
            src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=1200&q=80"
            alt="VR Headset"
            className="w-full h-auto"
          />
        </div>

        {/* Featured Video */}
        <div className="rounded-2xl overflow-hidden mb-12 border border-pink-500/30 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
          <div className="flex items-center gap-3 px-5 py-3 border-b border-pink-500/20">
            <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span className="text-pink-400 text-sm font-bold">📺 文章配圖影片</span>
          </div>
          <a
            href="https://www.youtube.com/watch?v=o2mTqT51W5A"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative aspect-video group"
          >
            <img
              src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&q=80"
              alt="VR Gaming Future"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-all">
              <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm font-medium">▶ 點擊觀看：VR 遊戲未來發展</p>
            </div>
          </a>
        </div>

        {/* Sections */}
        {t.sections.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">{idx === 0 ? '🥽' : idx === 1 ? '🎮' : idx === 2 ? '🌐' : '💡'}</span>
              {section.title}
            </h2>
            <div className="bg-slate-900/50 rounded-xl p-6 md:p-8 border border-slate-800/50">
              <div className="prose prose-invert prose-lg max-w-none whitespace-pre-line">
                {section.content.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="mb-4 text-gray-300 leading-relaxed">
                    {para.includes('**') ? (
                      para.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                        part.startsWith('**') && part.endsWith('**') ?
                          <strong key={i} className="text-pink-400 font-bold">{part.slice(2, -2)}</strong> : part
                      )
                    ) : para}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {t.tags.map(tag => (
            <span key={tag} className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-sm text-gray-400">
              #{tag}
            </span>
          ))}
        </div>

        {/* Back Link */}
        <div className="text-center">
          <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-500 text-black font-bold hover:bg-pink-400 transition-colors">
            ← 返回首頁
          </a>
        </div>
      </main>
    </div>
  )
}