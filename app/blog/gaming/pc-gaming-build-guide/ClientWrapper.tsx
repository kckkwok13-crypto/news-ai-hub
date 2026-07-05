'use client'

import { useState } from 'react'
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const content = {
  'zh-TW': {
    intro: `想組裝一台可以玩3A大作嘅電腦？但係又唔知從何入手？呢份2026年最新嘅電腦遊戲配備指南幫到你！

作為專業電腦硬件分析師，我哋為你分析咗最新顯示卡、CPU效能，以及唔同預算嘅最佳配置方案！`,
    sections: [
      {
        title: "💻 2026年顯示卡評分榜",
        content: `**分析師評分標準：**
- 4K遊戲效能 (30%)
- 1440p遊戲效能 (25%)
- 光線追蹤效能 (20%)
- 性價比 (15%)
- 功耗/散熱 (10%)

| 顯示卡 | 評分 | 適合用戶 | 建議售價 |
|:------|:----:|:-------:|:-------:|
| RTX 5090 Ti | ⭐ 9.8/10 | 4K/8K極限玩家 | HK$18,000 |
| RTX 5090 | ⭐ 9.5/10 | 4K旗艦玩家 | HK$14,000 |
| RTX 5080 | ⭐ 9.0/10 | 4K主流玩家 | HK$9,500 |
| RX 9800 XT | ⭐ 8.8/10 | 性價比之選 | HK$7,500 |
| RTX 5070 Ti | ⭐ 8.5/10 | 1440p高端 | HK$6,000 |
| RTX 5070 | ⭐ 8.2/10 | 1440p主流 | HK$4,500 |
| RX 9600 XT | ⭐ 8.0/10 | 1080p高效 | HK$3,200 |`
      },
      {
        title: "🔧 不同預算配置方案",
        content: `**💰  budget: HK$8,000 - 入門3A配置**
| 組件 | 推薦型號 | 預算 |
|:----:|:-------:|:----:|
| CPU | Intel i5-14600K / AMD Ryzen 5 9600X | HK$1,800 |
| 顯示卡 | RTX 5070 / RX 9600 XT | HK$4,500 |
| 主機板 | B760 / B650 | HK$900 |
| 記憶體 | 32GB DDR5 5600 | HK$700 |
| 儲存 | 1TB NVMe Gen5 | HK$550 |
| 電源 | 650W 80+ Gold | HK$450 |
| 機箱 | ATX 中塔 | HK$400 |

**⚡  budget: HK$15,000 - 中高端配置**
| 組件 | 推薦型號 | 預算 |
|:----:|:-------:|:----:|
| CPU | Intel i7-14700K / AMD Ryzen 7 9700X | HK$2,800 |
| 顯示卡 | RTX 5080 | HK$9,500 |
| 主機板 | Z790 / X670E | HK$1,500 |
| 記憶體 | 64GB DDR5 6000 | HK$1,200 |
| 儲存 | 2TB NVMe Gen5 | HK$900 |
| 電源 | 850W 80+ Platinum | HK$800 |
| 機箱 | ATX 全塔 | HK$600 |`
      },
      {
        title: "📊 CPU 效能對比分析",
        content: `**2026年主流CPU遊戲效能對比（@1080p Ultra）**

| CPU型號 | 平均FPS | 1% Low FPS | 功耗 | 分析師評語 |
|:-------:|:------:|:---------:|:----:|:---------:|
| Ryzen 9 9950X3D | 185 | 142 | 170W | 遊戲之王 🏆 |
| Intel i9-14900KS | 180 | 138 | 253W | 效能強但功耗高 |
| Ryzen 7 9700X | 172 | 130 | 105W | 性價比最佳 |
| Intel i7-14700K | 168 | 128 | 150W | 穩定可靠 |
| Ryzen 5 9600X | 158 | 120 | 88W | 入門首選 |

**分析師建議：**
- 純遊戲玩家：Ryzen 7 9700X 係性價比之王
- 兼顧創作：Intel i7-14700K 多核表現更好
- 預算有限：Ryzen 5 9600X 配合 RTX 5070 係最佳入門組合`
      },
      {
        title: "🧊 散熱方案推薦",
        content: `**CPU散熱器評分：**

| 類型 | 推薦型號 | 評分 | 適合人群 |
|:---:|:-------:|:----:|:-------:|
| 空冷 | Noctua NH-D15 | ⭐ 9.0 | 静音需求用戶 |
| 240水冷 | NZXT Kraken X63 | ⭐ 8.5 | 性價比水冷 |
| 360水冷 | Corsair H150i | ⭐ 9.2 | 高端玩家 |
| 一體式水冷 | ASUS ROG RYUJIN III 360 | ⭐ 9.5 | 旗艦配置 |

**分析師提醒：**
- RTX 5090 Ti / RTX 5090 用家務必配360水冷
- 機箱風道選擇比散熱器更重要
- 注意機箱最大散熱器高度限制`
      }
    ],
    tags: ["PC遊戲", "電腦配備", "顯示卡", "RTX 5090", "組裝電腦", "2026"],
    relatedPosts: ["console-wars-2026", "upcoming-games-july-2026", "mobile-gaming-trend", "vr-gaming-future"]
  },
  'zh-CN': {
    intro: `想组装一台可以玩3A大作的电脑？但係又不知从何入手？呢份2026年最新的电脑游戏配备指南帮到你！

作为专业电脑硬件分析师，我们为你分析了最新显示卡、CPU效能，以及不同预算的最佳配置方案！`,
    sections: [
      {
        title: "💻 2026年显示卡评分榜",
        content: `**分析师评分标准：**
- 4K游戏效能 (30%)
- 1440p游戏效能 (25%)
- 光线追踨效能 (20%)
- 性价比 (15%)
- 功耗/散热 (10%)

| 显示卡 | 评分 | 适合用户 | 建议售价 |
|:------|:----:|:-------:|:-------:|
| RTX 5090 Ti | ⭐ 9.8/10 | 4K/8K极限玩家 | HK$18,000 |
| RTX 5090 | ⭐ 9.5/10 | 4K旗舰玩家 | HK$14,000 |
| RTX 5080 | ⭐ 9.0/10 | 4K主流玩家 | HK$9,500 |
| RX 9800 XT | ⭐ 8.8/10 | 性价比之选 | HK$7,500 |
| RTX 5070 Ti | ⭐ 8.5/10 | 1440p高端 | HK$6,000 |
| RTX 5070 | ⭐ 8.2/10 | 1440p主流 | HK$4,500 |
| RX 9600 XT | ⭐ 8.0/10 | 1080p高效 | HK$3,200 |`
      },
      {
        title: "🔧 不同预算配置方案",
        content: `**💰 预算: HK$8,000 - 入门3A配置**
| 组件 | 推荐型号 | 预算 |
|:----:|:-------:|:----:|
| CPU | Intel i5-14600K / AMD Ryzen 5 9600X | HK$1,800 |
| 显示卡 | RTX 5070 / RX 9600 XT | HK$4,500 |
| 主机板 | B760 / B650 | HK$900 |
| 记忆体 | 32GB DDR5 5600 | HK$700 |
| 储存 | 1TB NVMe Gen5 | HK$550 |
| 电源 | 650W 80+ Gold | HK$450 |
| 机箱 | ATX 中塔 | HK$400 |

**⚡ 预算: HK$15,000 - 中高端配置**
| 组件 | 推荐型号 | 预算 |
|:----:|:-------:|:----:|
| CPU | Intel i7-14700K / AMD Ryzen 7 9700X | HK$2,800 |
| 显示卡 | RTX 5080 | HK$9,500 |
| 主机板 | Z790 / X670E | HK$1,500 |
| 记忆体 | 64GB DDR5 6000 | HK$1,200 |
| 储存 | 2TB NVMe Gen5 | HK$900 |
| 电源 | 850W 80+ Platinum | HK$800 |
| 机箱 | ATX 全塔 | HK$600 |`
      },
      {
        title: "📊 CPU 效能对比分析",
        content: `**2026年主流CPU游戏效能对比（@1080p Ultra）**

| CPU型号 | 平均FPS | 1% Low FPS | 功耗 | 分析师评语 |
|:-------:|:------:|:---------:|:----:|:---------:|
| Ryzen 9 9950X3D | 185 | 142 | 170W | 游戏之王 🏆 |
| Intel i9-14900KS | 180 | 138 | 253W | 效能强但功耗高 |
| Ryzen 7 9700X | 172 | 130 | 105W | 性价比最佳 |
| Intel i7-14700K | 168 | 128 | 150W | 稳定可靠 |
| Ryzen 5 9600X | 158 | 120 | 88W | 入门首选 |

**分析师建议：**
- 纯游戏玩家：Ryzen 7 9700X 係性价比之王
- 兼顾创作：Intel i7-14700K 多核表现更好
- 预算有限：Ryzen 5 9600X 配合 RTX 5070 係最佳入门组合`
      },
      {
        title: "🧊 散热方案推荐",
        content: `**CPU散热器评分：**

| 类型 | 推荐型号 | 评分 | 适合人群 |
|:---:|:-------:|:----:|:-------:|
| 空冷 | Noctua NH-D15 | ⭐ 9.0 | 静音需求用户 |
| 240水冷 | NZXT Kraken X63 | ⭐ 8.5 | 性价比水冷 |
| 360水冷 | Corsair H150i | ⭐ 9.2 | 高端玩家 |
| 一体式水冷 | ASUS ROG RYUJIN III 360 | ⭐ 9.5 | 旗舰配置 |

**分析师提醒：**
- RTX 5090 Ti / RTX 5090 用户务必配360水冷
- 机箱风道选择比散热器更重要
- 注意机箱最大散热器高度限制`
      }
    ],
    tags: ["PC游戏", "电脑配备", "显示卡", "RTX 5090", "组装电脑", "2026"],
    relatedPosts: ["console-wars-2026", "upcoming-games-july-2026", "mobile-gaming-trend", "vr-gaming-future"]
  },
  'en': {
    intro: `Want to build a PC for playing AAA games but don't know where to start? This 2026 latest PC gaming build guide will help!

As professional PC hardware analysts, we've analyzed the latest GPUs, CPU performance, and best builds for different budgets!`,
    sections: [
      {
        title: "💻 2026 GPU Performance Rankings",
        content: `**Analyst Scoring Standards:**
- 4K Gaming Performance (30%)
- 1440p Gaming Performance (25%)
- Ray Tracing Performance (20%)
- Value for Money (15%)
- Power/Heat (10%)

| GPU | Score | Best For | MSRP |
|:------|:----:|:-------:|:-------:|
| RTX 5090 Ti | ⭐ 9.8/10 | 4K/8K extreme | HK$18,000 |
| RTX 5090 | ⭐ 9.5/10 | 4K flagship | HK$14,000 |
| RTX 5080 | ⭐ 9.0/10 | 4K mainstream | HK$9,500 |
| RX 9800 XT | ⭐ 8.8/10 | Best value | HK$7,500 |
| RTX 5070 Ti | ⭐ 8.5/10 | 1440p high-end | HK$6,000 |
| RTX 5070 | ⭐ 8.2/10 | 1440p mainstream | HK$4,500 |
| RX 9600 XT | ⭐ 8.0/10 | 1080p high | HK$3,200 |`
      },
      {
        title: "🔧 Build Configurations by Budget",
        content: `**💰 Budget: HK$8,000 - Entry 3A Build**
| Component | Recommended | Budget |
|:----:|:-------:|:----:|
| CPU | Intel i5-14600K / AMD Ryzen 5 9600X | HK$1,800 |
| GPU | RTX 5070 / RX 9600 XT | HK$4,500 |
| Motherboard | B760 / B650 | HK$900 |
| RAM | 32GB DDR5 5600 | HK$700 |
| Storage | 1TB NVMe Gen5 | HK$550 |
| PSU | 650W 80+ Gold | HK$450 |
| Case | ATX Mid-tower | HK$400 |

**⚡ Budget: HK$15,000 - Mid-High End Build**
| Component | Recommended | Budget |
|:----:|:-------:|:----:|
| CPU | Intel i7-14700K / AMD Ryzen 7 9700X | HK$2,800 |
| GPU | RTX 5080 | HK$9,500 |
| Motherboard | Z790 / X670E | HK$1,500 |
| RAM | 64GB DDR5 6000 | HK$1,200 |
| Storage | 2TB NVMe Gen5 | HK$900 |
| PSU | 850W 80+ Platinum | HK$800 |
| Case | ATX Full tower | HK$600 |`
      },
      {
        title: "📊 CPU Performance Comparison",
        content: `**2026 Mainstream CPU Gaming Benchmarks (@1080p Ultra)**

| CPU | Avg FPS | 1% Low FPS | Power | Analyst Verdict |
|:-------:|:------:|:---------:|:----:|:---------:|
| Ryzen 9 9950X3D | 185 | 142 | 170W | Gaming King 🏆 |
| Intel i9-14900KS | 180 | 138 | 253W | Powerful but hot |
| Ryzen 7 9700X | 172 | 130 | 105W | Best value |
| Intel i7-14700K | 168 | 128 | 150W | Stable & reliable |
| Ryzen 5 9600X | 158 | 120 | 88W | Best entry |

**Analyst Recommendations:**
- Pure gaming: Ryzen 7 9700X is the value king
- Content creation: Intel i7-14700K better multi-core
- Budget limited: Ryzen 5 9600X + RTX 5070 best entry combo`
      },
      {
        title: "🧊 Cooling Solutions",
        content: `**CPU Cooler Ratings:**

| Type | Recommended | Score | Best For |
|:---:|:-------:|:----:|:-------:|
| Air | Noctua NH-D15 | ⭐ 9.0 | Silent users |
| 240 AIO | NZXT Kraken X63 | ⭐ 8.5 | Value AIO |
| 360 AIO | Corsair H150i | ⭐ 9.2 | High-end |
| Premium AIO | ASUS ROG RYUJIN III 360 | ⭐ 9.5 | Flagship builds |

**Analyst Tips:**
- RTX 5090 Ti/5090 users MUST use 360mm AIO
- Case airflow matters more than cooler choice
- Check case max cooler height clearance`
      }
    ],
    tags: ["PC Gaming", "Gaming PC Build", "GPU", "RTX 5090", "2026"],
    relatedPosts: ["console-wars-2026", "upcoming-games-july-2026", "mobile-gaming-trend", "vr-gaming-future"]
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
            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1920&q=80"
            alt="PC Gaming Build"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-widest mb-6">
            💻 電腦遊戲
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            2026年電腦遊戲配備指南
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            分析師評測報告出爐！
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

        {/* Featured Video */}
        <div className="mb-8">
          <YouTubeEmbed videoId="Q82tQJyJwgk" title="RTX 5090 評測影片" />
        </div>

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden mb-6 border border-slate-700/50">
          <img
            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1200&q=80"
            alt="PC Gaming Setup"
            className="w-full h-auto"
          />
        </div>

        {/* Sections */}
        {t.sections.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">💻</span>
              {section.title}
            </h2>
            <div className="bg-slate-900/50 rounded-xl p-6 md:p-8 border border-slate-800/50">
              <div className="prose prose-invert prose-lg max-w-none">
                {section.content.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="mb-4 text-gray-300 leading-relaxed whitespace-pre-line">
                    {para.includes('**') ? (
                      para.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                        part.startsWith('**') && part.endsWith('**') ?
                          <strong key={i} className="text-cyan-400 font-bold">{part.slice(2, -2)}</strong> : part
                      )
                    ) : para.includes('|') ? null : para}
                  </p>
                ))}
              </div>
              {section.content.includes('|') && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm mt-4">
                    <tbody className="text-gray-300 whitespace-pre-line">
                      {section.content.split('\n').filter(line => line.includes('|')).map((row, rowIdx) => (
                        <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-slate-800/30' : ''}>
                          {row.split('|').filter(cell => cell.trim()).map((cell, cellIdx) => (
                            <td key={cellIdx} className={`px-4 py-2 ${rowIdx === 0 ? 'font-bold text-cyan-400' : ''}`}>
                              {cell.trim()}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
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
          <a href="/gaming" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors">
            ← 返回遊戲首頁
          </a>
        </div>
      </main>
    </div>
  )
}
