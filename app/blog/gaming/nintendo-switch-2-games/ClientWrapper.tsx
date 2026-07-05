'use client'

import { useState } from 'react'
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const content = {
  'zh-TW': {
    intro: `Nintendo Switch 2 終於喺2026年正式登場！呢部新一代任天堂主機唔只係硬件升級，更加有一系列獨家大作等住玩家！

作為專業遊戲分析師，我哋為你整理咗Switch 2必玩遊戲評分，等你可以第一時間掌握邊隻值得入手！`,
    sections: [
      {
        title: "🕹️ Switch 2 獨家遊戲評分榜",
        content: `**分析師評分標準：**
- 獨家內容質量 (30%)
- 遊戲性/操控 (25%)
- 創新程度 (20%)
- 畫質表現 (15%)
- 性價比 (10%)

| 遊戲名稱 | 評分 | 類型 | 建議售價 |
|:--------|:----:|:----:|:-------:|
| 薩爾達傳說：夢幻之淚 | ⭐ 9.8/10 | 動作冒險 | HK$468 |
| 超級瑪利歐奧德賽2 | ⭐ 9.5/10 | 平台跳躍 | HK$468 |
| 噴射戰士3 擴展版 | ⭐ 9.2/10 | 多人射擊 | HK$298 |
| 集合啦！動物森友會2 | ⭐ 9.0/10 | 生活模擬 | HK$398 |
| 路易吉洋樓4 | ⭐ 8.8/10 | 冒險解謎 | HK$398 |
| 異度神劍 X 2 | ⭐ 8.5/10 | JRPG | HK$468 |`
      },
      {
        title: "🗡️ 薩爾達傳說：夢幻之淚 完整評測",
        content: `Nintendo 開發
發售日：2026年3月20日（Switch 2 獨家）
平台：Nintendo Switch 2

**分析師評語：**
作為Switch 2首發獨家大作，《夢幻之淚》展現咗任天堂對開放世界遊戲嘅全新詮釋！

**評分：⭐ 9.8/10**

故事承接《王國之淚》，林克將探索全新嘅「夢境世界」，呢個以玩家睡眠中嘅意識構成嘅神秘領域。新能力「夢織」允許林克編織現實，創造建築、武器甚至改變地形！

**銷售數據：**
- Switch 2同拥率：98%（每100部主機98部擁有呢款遊戲）
- 評測家平均分：97/100
- 首月銷量：突破800萬份

✅ 優點：創新機制、開放世界設計出色、故事動人
❌ 缺點：Switch 2獨占（需要新主機）`
      },
      {
        title: "🍄 超級瑪利歐奧德賽2 評測",
        content: `Nintendo 開發
發售日：2026年6月
平台：Nintendo Switch 2

**分析師評語：**
時隔9年，馬利歐嘅帽子世界之旅再臨！

**評分：⭐ 9.5/10**

《奧德賽2》保留咗前作「帽子捕捉」呢個標誌性機制，並將佢發揮到極致！今集有超過30個風格迥異嘅世界，每個都有獨特嘅物理引擎同埋解謎元素。

✅ 優點：創意無限、合作模式有趣、收藏價值高
❌ 缺點：難度曲線較平緩、硬核玩家可能覺得太簡單`
      },
      {
        title: "💰 Switch 2 遊戲價格與入手建議",
        content: `**Switch 2 首發遊戲入手建議：**

| 遊戲 | 標準版 | 黃金版 | 分析師建議 |
|:----:|:------:|:------:|:---------:|
| 薩爾達傳說：夢幻之淚 | HK$468 | HK$598 | ⭐ 必買首發 |
| 超級瑪利歐奧德賽2 | HK$468 | HK$598 | ⭐ 必買 |
| 噴射戰士3 擴展版 | HK$298 | HK$398 | ✅ 建議購入 |
| 動物森友會2 | HK$398 | HK$518 | ✅ 建議購入 |
| 路易吉洋樓4 | HK$398 | HK$498 | ⭐ 等特價 |
| 異度神劍 X 2 | HK$468 | HK$598 | ⭐ JRPG粉絲必買 |

**Switch 2 主機套裝建議：**
- 標配版（主機 + 《夢幻之淚》）：HK$3,280
- 同拥版（主機 + 兩款遊戲）：HK$4,280
- 建議：如果你係薩爾達粉絲，標配版係最佳選擇！`
      }
    ],
    tags: ["Nintendo", "Switch 2", "薩爾達", "獨家遊戲", "評分", "2026"],
    relatedPosts: ["console-wars-2026", "upcoming-games-july-2026", "mobile-gaming-trend", "vr-gaming-future"]
  },
  'zh-CN': {
    intro: `Nintendo Switch 2 终于在2026年正式登场！呢部新一代任天堂主机不只是硬件升级，更有一系列独家大作等住玩家！

作为专业游戏分析师，我们为你整理了Switch 2必玩游戏评分，等你可以第一时间掌握边只值得入手！`,
    sections: [
      {
        title: "🕹️ Switch 2 独家游戏评分榜",
        content: `**分析师评分标准：**
- 独家内容质量 (30%)
- 游戏性/操控 (25%)
- 创新程度 (20%)
- 画质表现 (15%)
- 性价比 (10%)

| 游戏名称 | 评分 | 类型 | 建议售价 |
|:--------|:----:|:----:|:-------:|
| 萨尔达传说：梦幻之泪 | ⭐ 9.8/10 | 动作冒险 | HK$468 |
| 超级马里奥奥德赛2 | ⭐ 9.5/10 | 平台跳跃 | HK$468 |
| 喷射战士3 扩展版 | ⭐ 9.2/10 | 多人射击 | HK$298 |
| 集合啦！动物森友会2 | ⭐ 9.0/10 | 生活模拟 | HK$398 |
| 路易吉洋楼4 | ⭐ 8.8/10 | 冒险解谜 | HK$398 |
| 异度神剑 X 2 | ⭐ 8.5/10 | JRPG | HK$468 |`
      },
      {
        title: "🗡️ 萨尔达传说：梦幻之泪 完整评测",
        content: `Nintendo 开发
发售日：2026年3月20日（Switch 2 独家）
平台：Nintendo Switch 2

**分析师评语：**
作为Switch 2首发独家大作，《梦幻之泪》展现了任天堂对开放世界游戏的全新诠释！

**评分：⭐ 9.8/10**

故事承接《王国之泪》，林克将探索全新嘅「梦境世界」，呢个以玩家睡眠中的意识构成的神秘领域。新能力「梦织」允许林克编织现实，创造建筑、武器甚至改变地形！

**销售数据：**
- Switch 2同捆率：98%（每100部主机98部拥有呢款游戏）
- 评测家平均分：97/100
- 首月销量：突破800万份

✅ 优点：创新机制、开放世界设计出色、故事动人
❌ 缺点：Switch 2独占（需要新主机）`
      },
      {
        title: "🍄 超级马里奥奥德赛2 评测",
        content: `Nintendo 开发
发售日：2026年6月
平台：Nintendo Switch 2

**分析师评语：**
时隔9年，马里奥的帽子世界之旅再来！

**评分：⭐ 9.5/10**

《奥德赛2》保留了前作「帽子捕捉」呢个标志性机制，并将其发挥到极致！今集有超过30个风格迥异的世界，每个都有独特的物理引擎和解谜元素。

✅ 优点：创意无限、合作模式有趣、收藏价值高
❌ 缺点：难度曲线较平缓、硬核玩家可能觉得太简单`
      },
      {
        title: "💰 Switch 2 游戏价格与入手建议",
        content: `**Switch 2 首发游戏入手建议：**

| 游戏 | 标准版 | 黄金版 | 分析师建议 |
|:----:|:------:|:------:|:---------:|
| 萨尔达传说：梦幻之泪 | HK$468 | HK$598 | ⭐ 必买首发 |
| 超级马里奥奥德赛2 | HK$468 | HK$598 | ⭐ 必买 |
| 喷射战士3 扩展版 | HK$298 | HK$398 | ✅ 建议购入 |
| 动物森友会2 | HK$398 | HK$518 | ✅ 建议购入 |
| 路易吉洋楼4 | HK$398 | HK$498 | ⭐ 等特价 |
| 异度神剑 X 2 | HK$468 | HK$598 | ⭐ JRPG粉丝必买 |

**Switch 2 主机套装建议：**
- 标配版（主机 + 《梦幻之泪》）：HK$3,280
- 同捆版（主机 + 两款游戏）：HK$4,280
- 建议：如果你係萨尔达粉丝，标配版係最佳选择！`
      }
    ],
    tags: ["Nintendo", "Switch 2", "萨尔达", "独家游戏", "评分", "2026"],
    relatedPosts: ["console-wars-2026", "upcoming-games-july-2026", "mobile-gaming-trend", "vr-gaming-future"]
  },
  'en': {
    intro: `Nintendo Switch 2 finally launched in 2026! This next-gen Nintendo console isn't just a hardware upgrade - it has a lineup of exclusive titles waiting for players!

As professional game analysts, we've compiled Switch 2 must-play game scores to help you know which ones are worth buying first!`,
    sections: [
      {
        title: "🕹️ Switch 2 Exclusive Game Rankings",
        content: `**Analyst Scoring Standards:**
- Exclusive Content Quality (30%)
- Gameplay/Controls (25%)
- Innovation (20%)
- Graphics (15%)
- Value for Money (10%)

| Game Title | Score | Genre | Price |
|:--------|:----:|:----:|:-------:|
| The Legend of Zelda: Tears of Fantasy | ⭐ 9.8/10 | Action Adventure | HK$468 |
| Super Mario Odyssey 2 | ⭐ 9.5/10 | Platformer | HK$468 |
| Splatoon 3 Extended | ⭐ 9.2/10 | Multiplayer Shooter | HK$298 |
| Animal Crossing 2 | ⭐ 9.0/10 | Life Sim | HK$398 |
| Luigi's Mansion 4 | ⭐ 8.8/10 | Adventure Puzzle | HK$398 |
| Xenoblade Chronicles X 2 | ⭐ 8.5/10 | JRPG | HK$468 |`
      },
      {
        title: "🗡️ Zelda: Tears of Fantasy Full Review",
        content: `Nintendo Development
Release: March 20, 2026 (Switch 2 Exclusive)
Platform: Nintendo Switch 2

**Analyst Review:**
As Switch 2's flagship exclusive title, Tears of Fantasy showcases Nintendo's new interpretation of open-world gaming!

**Score: ⭐ 9.8/10**

Building on Tears of the Kingdom, Link explores the all-new "Dream World" - a mysterious realm constructed from players' sleeping consciousness. New ability "Dream Weave" allows Link to weave reality, creating structures, weapons, even reshaping terrain!

**Sales Data:**
- Switch 2 bundle rate: 98%
- Critic average: 97/100
- First month sales: 8M+ copies

✅ Pros: Innovative mechanics, excellent open-world design, touching story
❌ Cons: Switch 2 exclusive (requires new console)`
      },
      {
        title: "🍄 Super Mario Odyssey 2 Review",
        content: `Nintendo Development
Release: June 2026
Platform: Nintendo Switch 2

**Analyst Review:**
After 9 years, Mario's hat-tossing world tour returns!

**Score: ⭐ 9.5/10**

Odyssey 2 keeps the iconic "Cappy capture" mechanic from the original and takes it to the extreme! This installment features over 30 wildly different worlds, each with unique physics engines and puzzle elements.

✅ Pros: Infinite creativity, fun co-op mode, high collectible value
❌ Cons: Difficulty curve too gentle, hardcore players may find it too easy`
      },
      {
        title: "💰 Switch 2 Game Prices & Recommendations",
        content: `**Switch 2 Launch Game Recommendations:**

| Game | Standard | Deluxe | Analyst Recommendation |
|:----:|:------:|:------:|:---------:|
| Zelda: Tears of Fantasy | HK$468 | HK$598 | ⭐ Must Buy at Launch |
| Mario Odyssey 2 | HK$468 | HK$598 | ⭐ Must Buy |
| Splatoon 3 Extended | HK$298 | HK$398 | ✅ Recommended |
| Animal Crossing 2 | HK$398 | HK$518 | ✅ Recommended |
| Luigi's Mansion 4 | HK$398 | HK$498 | ⭐ Wait for Sale |
| Xenoblade X 2 | HK$468 | HK$598 | ⭐ JRPG Fans Must Buy |

**Switch 2 Console Bundle Recommendations:**
- Standard Bundle (Console + Zelda): HK$3,280
- Deluxe Bundle (Console + 2 games): HK$4,280
- Recommendation: If you're a Zelda fan, the standard bundle is the best choice!`
      }
    ],
    tags: ["Nintendo", "Switch 2", "Zelda", "Exclusive Games", "Review Scores", "2026"],
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
            src="https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=1920&q=80"
            alt="Nintendo Switch 2"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold tracking-widest mb-6">
            🕹️ 任天堂
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Nintendo Switch 2
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            獨家遊戲評分與分析！
          </p>
        </div>
      </header>

      {/* Language Selector */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        {(['zh-TW', 'zh-CN', 'en'] as const).map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${lang === l ? 'bg-red-500 text-black' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}
          >
            {l === 'zh-TW' ? '繁中' : l === 'zh-CN' ? '简体' : 'EN'}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 rounded-2xl p-8 mb-12 border border-red-500/20">
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {t.intro}
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-8">
          <YouTubeEmbed videoId="uHGvHcNSK4c" title="Switch 2 薩爾達預告片" />
        </div>

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden mb-6 border border-slate-700/50">
          <img
            src="https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=1200&q=80"
            alt="Nintendo Switch 2"
            className="w-full h-auto"
          />
        </div>

        {/* Sections */}
        {t.sections.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">🕹️</span>
              {section.title}
            </h2>
            <div className="bg-slate-900/50 rounded-xl p-6 md:p-8 border border-slate-800/50">
              <div className="prose prose-invert prose-lg max-w-none">
                {section.content.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="mb-4 text-gray-300 leading-relaxed whitespace-pre-line">
                    {para.includes('**') ? (
                      para.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                        part.startsWith('**') && part.endsWith('**') ?
                          <strong key={i} className="text-red-400 font-bold">{part.slice(2, -2)}</strong> : part
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
                            <td key={cellIdx} className={`px-4 py-2 ${rowIdx === 0 ? 'font-bold text-red-400' : ''}`}>
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
          <a href="/gaming" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500 text-black font-bold hover:bg-red-400 transition-colors">
            ← 返回遊戲首頁
          </a>
        </div>
      </main>
    </div>
  )
}
