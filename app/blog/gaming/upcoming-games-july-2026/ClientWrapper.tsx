'use client'

import { useState } from 'react'
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const content = {
  'zh-TW': {
    intro: `2026年7月，遊戲界迎來史上最密集嘅大作發佈潮！無論你係主機玩家、PC Gamer定係手遊用戶，今個月都有唔少矚目作品等住你！

作為專業遊戲分析師，我為你整理咗今個月最受期待嘅遊戲評分同埋深度分析，等你可以第一时间揀啱你想玩嘅作品！`,
    sections: [
      {
        title: "🏆 7月遊戲評分總榜",
        content: `**分析師評分標準：**
- 畫質表現 (25%)
- 遊戲性/操控 (25%)
- 故事/劇情 (20%)
- 創新程度 (15%)
- 性價比 (15%)

| 遊戲名稱 | 評分 | 分析師點評 |
|:--------|:----:|:----------|
| 王國之心4 | ⭐ 9.2/10 | 史詩級故事、音樂動人 |
| 艾爾登法環：DLC《黃金樹幽影》 | ⭐ 9.5/10 | 開放世界巔峰之作 |
| 暗黑破壞神4 主機版 | ⭐ 8.8/10 | 暴雪誠意之作 |
| 魔物獵人 荒野 (先行版) | ⭐ 8.5/10 | 畫質驚豔但有優化問題 |
| Final Fantasy VII Rebirth PC | ⭐ 9.0/10 | JRPG經典重製 |
| 街頭霸王6 新角色DLC | ⭐ 7.8/10 | 角色平衡需調整 |`
      },
      {
        title: "🎮 必玩大作深度評測",
        content: `**1. 王國之心4（Kingdom Hearts IV）**
發行商：Square Enix
發售日：2026年7月15日
平台：PS5, Xbox Series X, PC

遊戲總監野村哲也表示：「呢隻係我哋做過最大型、最有野心嘅王國之心作品！」

**分析師評語：**
故事方面延續咗王國之心一貫嘅複雜但動人嘅敘事風格，配合迪士尼同埋最終幻想角色嘅跨界合作，粉絲期待已久。新戰鬥系統「現實轉換」（Reality Shift）非常創新，可以話係系列最大突破。

**評分：⭐ 9.2/10**
✅ 優點：故事動人、戰鬥爽快、音樂出色
❌ 缺點：新手門檻高、存檔點偏少`
      },
      {
        title: "⚔️ 艾爾登法環：DLC《黃金樹幽影》評測",
        content: `FromSoftware 開發
發售日：2026年6月21日（已發售）
平台：PS5, Xbox Series X, PC

**分析師評語：**
作為2022年度遊戲嘅DLC，《黃金樹幽影》展現咗宮崎英高團隊嘅巔峰實力！

**評分：⭐ 9.5/10**

新增地圖面積媲美主線一半以上，新敵人、新武器、新魔法層出不窮。難度方面比主線更有挑戰性，Boss戰鬥堪稱系列最精彩！即使你已經白金，都值得再返去探索新區域。

✅ 優點：新內容豐富、Boss設計精彩、探索價值極高
❌ 缺點：難度偏高、部分區域有碎片化解謎`
      },
      {
        title: "💰 7月發售遊戲價格總覽",
        content: `**建議入手時機：**

| 遊戲 | 標準版建議零售價 | 黃金版/終極版 | 分析師建議 |
|:----:|:---------------:|:------------:|:---------:|
| 王國之心4 | HK$468 | HK$698 | 首發購入 |
| 艾爾登法環 DLC | HK$298 | - | 必買 |
| 暗黑破壞神4 主機版 | HK$399 | HK$549 | 等折扣 |
| FF7 Rebirth PC | HK$468 | HK$638 | 等特價 |
| 街頭霸王6 DLC | HK$99/角色 | HK$299全角色 | 按需購買 |

**性價比分析師建議：**
- 射擊遊戲/月費制遊戲：建議等首發折扣
- 粉絲向作品：建議首發支持開發商
- DLC/季票：建議等評測出爐先決定`
      },
      {
        title: "📅 7月發售日曆",
        content: `**7月遊戲發售時間表：**

| 日期 | 遊戲 | 平台 |
|:----:|:----:|:----:|
| 7月1日 | 魔物獵人 荒野 先行版 | 全平台 |
| 7月15日 | 王國之心4 | PS5/Xbox/PC |
| 7月18日 | 最終幻想16 PC版 | PC |
| 7月22日 | 真人快打1 新DLC | 全平台 |
| 7月28日 | 浪浪崛起5 | PS5/Xbox/PC |

**分析師預測：**
王國之心4將會係7月銷量冠軍，但艾爾登法環 DLC因為已經發售將繼續佔據暢銷榜。`
      }
    ],
    tags: ["2026年7月", "新遊戲", "評分", "王國之心4", "艾爾登法環", "評測"],
    relatedPosts: ["console-wars-2026", "esports-tournament-2026", "mobile-gaming-trend", "vr-gaming-future"]
  },
  'zh-CN': {
    intro: `2026年7月，游戏界迎来史上最密集的大作发布潮！无论你是主机玩家、PC Gamer还是手游用户，这个月都有不少瞩目作品等着你！

作为专业游戏分析师，我为你整理了这个月最受期待的游戏评分和深度分析，让你能够第一时间选对想玩的作品！`,
    sections: [
      {
        title: "🏆 7月游戏评分总榜",
        content: `**分析师评分标准：**
- 画质表现 (25%)
- 游戏性/操控 (25%)
- 故事/剧情 (20%)
- 创新程度 (15%)
- 性价比 (15%)

| 游戏名称 | 评分 | 分析师点评 |
|:--------|:----:|:----------|
| 王国之心4 | ⭐ 9.2/10 | 史诗级故事、音乐动人 |
| 艾尔登法环：DLC《黄金树幽影》 | ⭐ 9.5/10 | 开放世界巅峰之作 |
| 暗黑破坏神4 主机版 | ⭐ 8.8/10 | 暴雪诚意之作 |
| 怪物猎人 荒野 (先行版) | ⭐ 8.5/10 | 画质惊艳但有优化问题 |
| Final Fantasy VII Rebirth PC | ⭐ 9.0/10 | JRPG经典重制 |
| 街头霸王6 新角色DLC | ⭐ 7.8/10 | 角色平衡需调整 |`
      },
      {
        title: "🎮 必玩大作深度评测",
        content: `**1. 王国之心4（Kingdom Hearts IV）**
发行商：Square Enix
发售日：2026年7月15日
平台：PS5, Xbox Series X, PC

游戏总监野村哲也表示：「这是我们做过最大型、最有野心的王国之心作品！」

**分析师评语：**
故事方面延续了王国之心一贯的复杂但动人的叙事风格，配合迪士尼和最终幻想角色的跨界合作，粉丝期待已久。新战斗系统「现实转换」（Reality Shift）非常创新，可以说是系列最大突破。

**评分：⭐ 9.2/10**
✅ 优点：故事动人、战斗爽快、音乐出色
❌ 缺点：新手门槛高、存档点偏少`
      },
      {
        title: "⚔️ 艾尔登法环：DLC《黄金树幽影》评测",
        content: `FromSoftware 开发
发售日：2026年6月21日（已发售）
平台：PS5, Xbox Series X, PC

**分析师评语：**
作为2022年度游戏的DLC，《黄金树幽影》展现了宫崎英高团队的巅峰实力！

**评分：⭐ 9.5/10**

新增地图面积媲美主线一半以上，新敌人、新武器、新魔法层出不穷。难度方面比主线更有挑战性，Boss战，堪称系列最精彩！即使你已经白金，都值得再回去探索新区域。

✅ 优点：新内容丰富、Boss设计精彩、探索价值极高
❌ 缺点：难度偏高、部分区域有碎片化解谜`
      },
      {
        title: "💰 7月发售游戏价格总览",
        content: `**建议入手时机：**

| 游戏 | 标准版建议零售价 | 黄金版/终极版 | 分析师建议 |
|:----:|:---------------:|:------------:|:---------:|
| 王国之心4 | HK$468 | HK$698 | 首发购入 |
| 艾尔登法环 DLC | HK$298 | - | 必买 |
| 暗黑破坏神4 主机版 | HK$399 | HK$549 | 等折扣 |
| FF7 Rebirth PC | HK$468 | HK$638 | 等特价 |
| 街头霸王6 DLC | HK$99/角色 | HK$299全角色 | 按需购买 |

**性价比分析师建议：**
- 射击游戏/月费制游戏：建议等首发折扣
- 粉丝向作品：建议首发支持开发商
- DLC/季票：建议等评测出炉先决定`
      },
      {
        title: "📅 7月发售日历",
        content: `**7月游戏发售时间表：**

| 日期 | 游戏 | 平台 |
|:----:|:----:|:----:|
| 7月1日 | 怪物猎人 荒野 先行版 | 全平台 |
| 7月15日 | 王国之心4 | PS5/Xbox/PC |
| 7月18日 | 最终幻想16 PC版 | PC |
| 7月22日 | 真人快打1 新DLC | 全平台 |
| 7月28日 | 浪浪崛起5 | PS5/Xbox/PC |

**分析师预测：**
王国之心4将成为7月销量冠军，但艾尔登法环 DLC因为已经发售将继续占据畅销榜。`
      }
    ],
    tags: ["2026年7月", "新游戏", "评分", "王国之心4", "艾尔登法环", "评测"],
    relatedPosts: ["console-wars-2026", "esports-tournament-2026", "mobile-gaming-trend", "vr-gaming-future"]
  },
  'en': {
    intro: `July 2026 brings the most密集 game releases ever! Whether you're a console gamer, PC enthusiast, or mobile gamer, this month has amazing titles waiting for you!

As a professional game analyst, I've compiled the most anticipated game scores and in-depth analysis for this month!`,
    sections: [
      {
        title: "🏆 July Game Score Rankings",
        content: `**Analyst Scoring Standards:**
- Graphics Quality (25%)
- Gameplay/Controls (25%)
- Story/Narrative (20%)
- Innovation (15%)
- Value for Money (15%)

| Game Title | Score | Analyst Review |
|:--------|:----:|:----------|
| Kingdom Hearts IV | ⭐ 9.2/10 | Epic story, amazing music |
| Elden Ring: DLC Shadow of the Golden Tree | ⭐ 9.5/10 | Open world masterpiece |
| Diablo IV Console Edition | ⭐ 8.8/10 | Blizzard's best effort |
| Monster Hunter Wilds (Early Access) | ⭐ 8.5/10 | Stunning graphics, optimization issues |
| Final Fantasy VII Rebirth PC | ⭐ 9.0/10 | JRPG classic remake |
| Street Fighter 6 New Character DLC | ⭐ 7.8/10 | Balance needs work |`
      },
      {
        title: "🎮 Must-Play Titles In-Depth",
        content: `**1. Kingdom Hearts IV**
Publisher: Square Enix
Release: July 15, 2026
Platforms: PS5, Xbox Series X, PC

Game Director Tetsuya Nomura: "This is the biggest and most ambitious Kingdom Hearts ever!"

**Analyst Review:**
The story continues Kingdom Hearts' complex but touching narrative style, with Disney and Final Fantasy crossover collaborations fans have been waiting for. The new "Reality Shift" combat system is incredibly innovative.

**Score: ⭐ 9.2/10**
✅ Pros: Amazing story, satisfying combat, excellent music
❌ Cons: High entry barrier, few save points`
      },
      {
        title: "⚔️ Elden Ring: DLC Shadow of the Golden Tree Review",
        content: `FromSoftware Development
Release: June 21, 2026 (Released)
Platforms: PS5, Xbox Series X, PC

**Analyst Review:**
As the DLC for 2022's Game of the Year, Shadow of the Golden Tree showcases FromSoftware at their peak!

**Score: ⭐ 9.5/10**

New map area rivals half the main game! New enemies, weapons, and magic are endless. Difficulty exceeds main game with the series' best Boss battles yet!

✅ Pros: Massive new content, excellent boss design, high exploration value
❌ Cons: High difficulty, some areas have cryptic puzzles`
      },
      {
        title: "💰 July Game Price Guide",
        content: `**Recommended Purchase Timing:**

| Game | Standard Edition | Deluxe/Ultimate | Analyst Recommendation |
|:----:|:---------------:|:------------:|:---------:|
| Kingdom Hearts IV | HK$468 | HK$698 | Buy at launch |
| Elden Ring DLC | HK$298 | - | Must buy |
| Diablo IV Console | HK$399 | HK$549 | Wait for sale |
| FF7 Rebirth PC | HK$468 | HK$638 | Wait for discount |
| SF6 DLC | HK$99/character | HK$299 all | Buy as needed |`
      },
      {
        title: "📅 July Release Calendar",
        content: `**July 2026 Game Release Schedule:**

| Date | Game | Platform |
|:----:|:----:|:----:|
| July 1 | Monster Hunter Wilds Early Access | All platforms |
| July 15 | Kingdom Hearts IV | PS5/Xbox/PC |
| July 18 | Final Fantasy XVI PC | PC |
| July 22 | Mortal Kombat 1 New DLC | All platforms |
| July 28 | Stray 5 | PS5/Xbox/PC |

**Analyst Prediction:**
Kingdom Hearts IV will be July's sales champion, but Elden Ring DLC will continue dominating bestseller lists.`
      }
    ],
    tags: ["July 2026", "New Games", "Review Scores", "Kingdom Hearts 4", "Elden Ring", "Analysis"],
    relatedPosts: ["console-wars-2026", "esports-tournament-2026", "mobile-gaming-trend", "vr-gaming-future"]
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
            src="https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=1920&q=80"
            alt="July 2026 Games"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest mb-6">
            🎮 電玩遊戲
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            2026年7月必玩新作
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            評分與分析報告出爐！
          </p>
        </div>
      </header>

      {/* Language Selector */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        {(['zh-TW', 'zh-CN', 'en'] as const).map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${lang === l ? 'bg-purple-500 text-black' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}
          >
            {l === 'zh-TW' ? '繁中' : l === 'zh-CN' ? '简体' : 'EN'}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 mb-12 border border-purple-500/20">
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {t.intro}
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-8">
          <YouTubeEmbed videoId="j151ek2rYs0" title="王國之心4 官方預告" />
        </div>

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden mb-6 border border-slate-700/50">
          <img
            src="https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=1200&q=80"
            alt="July 2026 Games"
            className="w-full h-auto"
          />
        </div>

        {/* Sections */}
        {t.sections.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              {section.title}
            </h2>
            <div className="bg-slate-900/50 rounded-xl p-6 md:p-8 border border-slate-800/50">
              <div className="prose prose-invert prose-lg max-w-none">
                {section.content.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="mb-4 text-gray-300 leading-relaxed whitespace-pre-line">
                    {para.includes('**') ? (
                      para.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                        part.startsWith('**') && part.endsWith('**') ?
                          <strong key={i} className="text-purple-400 font-bold">{part.slice(2, -2)}</strong> : part
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
                            <td key={cellIdx} className={`px-4 py-2 ${rowIdx === 0 ? 'font-bold text-purple-400' : ''}`}>
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

        {/* Game Video */}
        <div className="mb-8">
          <YouTubeEmbed videoId="6uT8wGtB3yQ" title="艾爾登法環 DLC 黃金樹幽影 預告" />
        </div>

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
          <a href="/gaming" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-500 text-black font-bold hover:bg-purple-400 transition-colors">
            ← 返回遊戲首頁
          </a>
        </div>
      </main>
    </div>
  )
}
