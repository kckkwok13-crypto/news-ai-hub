'use client'

import { useState } from 'react'

const content = {
  'zh-TW': {
    intro: `2026年，遊戲主機市場迎來史上最激烈競爭！Nintendo Switch 2正式登場，PS5 Pro效能大升級，Xbox Series X2蓄勢待發。三大平台，究竟邊個先？

呢個唔係一場普通既主機大戰，而係一場影響未來十年遊戲產業格局既終極對決！`,
    sections: [
      {
        title: "🎮 Nintendo Switch 2：重新定義掌上遊戲",
        content: `Nintendo Switch 2終於喺2026年正式登場！今次唔只係改良版，而係一次徹底既硬件升級。

**核心規格：**
- 全新定制晶片，性能提升300%
- 8吋OLED屏幕，1080p輸出
- 支援4K輸出底座模式
- 向下兼容所有Switch遊戲
- 全新磁吸Joy-Con控制器

**獨家遊戲：**
- 《薩爾達傳說：夢幻之淚》独占首发
- 《瑪利歐派對》新作支援體感
- 超過200款第三方大作登陸

**優勢：** 任天堂獨家IP無可比擬，任天堂粉絲忠誠度極高
**劣勢：** 第三方遊戲支援仍然較少`
      },
      {
        title: "🕹️ PlayStation 5 Pro：為8K時代而生",
        content: `Sony嘅PS5 Pro唔只係性能提升，係為未來8K遊戲時代做好準備！

**核心規格：**
- 定制AMD Zen 5 CPU + RDNA 4 GPU
- 28 TFLOPS圖形運算能力
- 32GB GDDR7記憶體
- 2TB NVMe SSD
- 光線追蹤效能提升200%

**獨家遊戲：**
- 《戰神：諸神黃昏》續作
- 《蜘蛛俠3》8K版
- 《GT賽車8》

**優勢：** 頂級畫質、強大獨家遊戲庫
**劣勢：** 價格昂貴（估計售價699美元）`
      },
      {
        title: "💚 Xbox Series X2：雲遊戲先驅",
        content: `Microsoft選擇走唔同既路線，Xbox Series X2係一部為雲遊戲時代而生既主機！

**核心規格：**
- 24 TFLOPS圖形效能
- 整合Project Cloud Gaming
- 跨平台遊戲生態
- Game Pass Ultimate訂閱制

**獨家遊戲：**
- 《Halo》新作首發Game Pass
- 《星空》DLC獨家內容
- 所有Bethesda遊戲優先登陸

**優勢：** Game Pass性價比極高，跨平台最靈活
**劣勢：** 獨家遊戲數量相對較少`
      },
      {
        title: "🏆 2026終極對決：點揀？",
        content: `**如果你鐘意：**
- 家庭共享/派對遊戲 → Nintendo Switch 2
- 頂級畫質/電影級體驗 → PlayStation 5 Pro
- 高性價比/跨平台 → Xbox Series X2

**銷量預測：**
根據業界分析，2026年主機市場份額預測：
- Nintendo Switch 2：40%
- PlayStation 5 Pro：35%
- Xbox Series X2：20%
- 其他：5%

**結論：** 2026年將係「三分天下」既局面，每部主機都有自己獨特定位，關鍵係揾到最啱你既嗰部！`
      }
    ],
    tags: ["遊戲主機", "PS5", "Switch 2", "Xbox", "2026", "電玩"],
    relatedPosts: ["esports-tournament", "vr-gaming", "mobile-gaming", "retro-nostalgia"]
  },
  'zh-CN': {
    intro: `2026年，游戏主机市场迎来史上最激烈竞争！Nintendo Switch 2正式登场，PS5 Pro性能大升级，Xbox Series X2蓄势待发。三大平台，究竟哪个先？

这不只是一场普通的主机大战，而是一场影响未来十年游戏产业格局的终极对决！`,
    sections: [
      {
        title: "🎮 Nintendo Switch 2：重新定义掌上游戏",
        content: `Nintendo Switch 2终于在2026年正式登场！这次不只是改良版，而是一次彻底的硬件升级。

**核心规格：**
- 全新定制晶片，性能提升300%
- 8吋OLED屏幕，1080p输出
- 支持4K输出底座模式
- 向下兼容所有Switch游戏
- 全新磁吸Joy-Con控制器

**独家游戏：**
- 《萨儿达传说：梦幻之泪》独占首发
- 《玛利欧派对》新作支持体感
- 超过200款第三方大作登陆

**优势：** 任天堂独家IP无可比拟，任天堂粉丝忠诚度极高
**劣势：** 第三方游戏支持仍然较少`
      },
      {
        title: "🕹️ PlayStation 5 Pro：为8K时代而生",
        content: `Sony的PS5 Pro不只是性能提升，是为未来8K游戏时代做好准备！

**核心规格：**
- 定制AMD Zen 5 CPU + RDNA 4 GPU
- 28 TFLOPS图形运算能力
- 32GB GDDR7记忆体
- 2TB NVMe SSD
- 光线追踨效能提升200%

**独家游戏：**
- 《战神：诸神黄昏》续作
- 《蜘蛛侠3》8K版
- 《GT赛车8》

**优势：** 顶级画质、强大独家游戏库
**劣势：** 价格昂贵（估计售价699美元）`
      },
      {
        title: "💚 Xbox Series X2：云游戏先驱",
        content: `Microsoft选择走不同的路线，Xbox Series X2是一部为云游戏时代而生的主机！

**核心规格：**
- 24 TFLOPS图形效能
- 整合Project Cloud Gaming
- 跨平台游戏生态
- Game Pass Ultimate订阅制

**独家游戏：**
- 《Halo》新作首发Game Pass
- 《星空》DLC独家内容
- 所有Bethesda游戏优先登陆

**优势：** Game Pass性价比极高，跨平台最灵活
**劣势：** 独家游戏数量相对较少`
      },
      {
        title: "🏆 2026终极对决：怎么选？",
        content: `**如果你喜欢：**
- 家庭共享/派对游戏 → Nintendo Switch 2
- 顶级画质/电影级体验 → PlayStation 5 Pro
- 高性价比/跨平台 → Xbox Series X2

**销量预测：**
根据业界分析，2026年主机市场份额预测：
- Nintendo Switch 2：40%
- PlayStation 5 Pro：35%
- Xbox Series X2：20%
- 其他：5%

**结论：** 2026年将是「三分天下」的局面，每部主机都有自己独特定位，关键是找到最合适你的那部！`
      }
    ],
    tags: ["游戏主机", "PS5", "Switch 2", "Xbox", "2026", "电玩"],
    relatedPosts: ["esports-tournament", "vr-gaming", "mobile-gaming", "retro-nostalgia"]
  },
  'en': {
    intro: `2026 marks the most intense gaming console competition ever! Nintendo Switch 2 is officially here, PS5 Pro gets major upgrades, and Xbox Series X2 is ready to launch. Which platform will win?

This isn't just a console war - it's the ultimate battle that will shape the gaming industry for the next decade!`,
    sections: [
      {
        title: "🎮 Nintendo Switch 2: Redefining Handheld Gaming",
        content: `Nintendo Switch 2 finally launched in 2026! This isn't just an upgrade - it's a complete hardware revolution.

**Core Specs:**
- Custom chip with 300% performance boost
- 8-inch OLED display, 1080p output
- 4K output in docked mode
- Backward compatible with all Switch games
- New magnetic Joy-Con controllers

**Exclusive Games:**
- The Legend of Zelda: Tears of Fantasy (exclusive launch title)
- New Mario Party with motion controls
- 200+ third-party titles

**Pros:** Unmatched exclusive IPs, incredibly loyal fanbase
**Cons:** Still fewer third-party games`
      },
      {
        title: "🕹️ PlayStation 5 Pro: Built for 8K Era",
        content: `Sony's PS5 Pro isn't just about performance - it's prepared for the 8K gaming future!

**Core Specs:**
- AMD Zen 5 CPU + RDNA 4 GPU
- 28 TFLOPS graphical power
- 32GB GDDR7 memory
- 2TB NVMe SSD
- 200% ray tracing improvement

**Exclusive Games:**
- God of War: Ragnarok sequel
- Spider-Man 3 in 8K
- Gran Turismo 8

**Pros:** Top-tier graphics, strong exclusive library
**Cons:** Expensive (estimated $699)`
      },
      {
        title: "💚 Xbox Series X2: Cloud Gaming Pioneer",
        content: `Microsoft chose a different path - Xbox Series X2 is built for the cloud gaming era!

**Core Specs:**
- 24 TFLOPS graphical power
- Integrated Project Cloud Gaming
- Cross-platform ecosystem
- Game Pass Ultimate subscription

**Exclusive Games:**
- New Halo title on Game Pass launch
- Starfield DLC exclusive content
- All Bethesda games priority

**Pros:** Amazing value with Game Pass, most flexible cross-platform
**Cons:** Fewer exclusive titles`
      },
      {
        title: "🏆 2026 Ultimate Showdown: Which to Choose?",
        content: `**Choose based on your preference:**
- Family sharing/party games → Nintendo Switch 2
- Top graphics/movie experience → PlayStation 5 Pro
- Best value/cross-platform → Xbox Series X2

**Sales Prediction:**
Industry analysis predicts 2026 market share:
- Nintendo Switch 2: 40%
- PlayStation 5 Pro: 35%
- Xbox Series X2: 20%
- Others: 5%

**Conclusion:** 2026 will be a "three-way split" - each console has its unique position, the key is finding what fits you best!`
      }
    ],
    tags: ["Gaming Console", "PS5", "Switch 2", "Xbox", "2026", "Gaming"],
    relatedPosts: ["esports-tournament", "vr-gaming", "mobile-gaming", "retro-nostalgia"]
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
            src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1920&q=80"
            alt="Gaming Consoles"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest mb-6">
            🎮 電玩遊戲
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            2026 遊戲主機大戰
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            PS5、Switch 2、Xbox 邊個稱霸？
          </p>
        </div>
      </header>

      {/* Language Selector */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        {(['zh-TW', 'zh-CN', 'en'] as const).map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${lang === l ? 'bg-cyan-500 text-black' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}
          >
            {l === 'zh-TW' ? '繁中' : l === 'zh-CN' ? '简体' : 'EN'}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-8 mb-12 border border-cyan-500/20">
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {t.intro}
          </p>
        </div>

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden mb-6 border border-slate-700/50">
          <img
            src="https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=1200&q=80"
            alt="Gaming Console Setup"
            className="w-full h-auto"
          />
        </div>

        {/* Featured Video */}
        <div className="rounded-2xl overflow-hidden mb-12 border border-cyan-500/30 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="flex items-center gap-3 px-5 py-3 border-b border-cyan-500/20">
            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span className="text-cyan-400 text-sm font-bold">📺 文章配圖影片</span>
          </div>
          <a
            href="https://www.youtube.com/watch?v=dMCZH1P4DDw"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative aspect-video group"
          >
            <img
              src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1200&q=80"
              alt="PS5 vs Xbox vs Nintendo Switch 2026"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-all">
              <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm font-medium">▶ 點擊觀看：PS5 vs Xbox vs Nintendo Switch 2026 比較</p>
            </div>
          </a>
        </div>

        {/* Sections */}
        {t.sections.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">{idx === 0 ? '🎮' : idx === 1 ? '🕹️' : idx === 2 ? '💚' : '🏆'}</span>
              {section.title}
            </h2>
            <div className="bg-slate-900/50 rounded-xl p-6 md:p-8 border border-slate-800/50">
              <div className="prose prose-invert prose-lg max-w-none whitespace-pre-line">
                {section.content.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="mb-4 text-gray-300 leading-relaxed">
                    {para.includes('**') ? (
                      para.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                        part.startsWith('**') && part.endsWith('**') ?
                          <strong key={i} className="text-cyan-400 font-bold">{part.slice(2, -2)}</strong> : part
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
          <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors">
            ← 返回首頁
          </a>
        </div>
      </main>
    </div>
  )
}