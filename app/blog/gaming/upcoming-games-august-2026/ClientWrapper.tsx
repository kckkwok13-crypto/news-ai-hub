'use client'

import { useState } from 'react'
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const content = {
  'zh-TW': {
    intro: `2026年8月係遊戲界嘅黃金檔期！多間大廠都選擇呢個月發佈年度大作，等我哋一齊嚟睇下今個月有乜嘢矚目作品！

作為專業遊戲分析師，我哋為你整理咗8月最受期待嘅遊戲評分同埋搶先評測，等你可以第一时间掌握最新資訊！`,
    sections: [
      {
        title: "🔥 8月遊戲評分總榜",
        content: `**分析師評分標準：**
- 畫質表現 (25%)
- 遊戲性/操控 (25%)
- 故事/劇情 (20%)
- 創新程度 (15%)
- 性價比 (15%)

| 遊戲名稱 | 評分 | 分析師點評 |
|:--------|:----:|:----------|
| 魔物獵人 荒野 | ⭐ 9.0/10 | 狩獵體驗巔峰之作 |
| 霍格華茲的傳承 2 | ⭐ 8.8/10 | 開放世界魔法體驗 |
| 碧血如鉤2 | ⭐ 8.5/10 | 類魂系RPG佳作 |
| 模擬市民5 | ⭐ 8.0/10 | 生活模擬經典回歸 |
| 女神異聞錄6 | ⭐ 9.3/10 | JRPG新標杆 |
| 死亡細胞2 | ⭐ 8.7/10 | 類銀河戰士巔峰 |`
      },
      {
        title: "🐉 魔物獵人 荒野 完整評測",
        content: `Capcom 開發
發售日：2026年8月1日（全平台同步發售）
平台：PS5, Xbox Series X, PC, Switch 2

**分析師評語：**
作為魔物獵人系列20週年紀念作品，《荒野》帶嚟咗革命性嘅進化！

**評分：⭐ 9.0/10**

新引擎為遊戲帶嚟咗令人窒息嘅畫質表現，生態系統比以前更加真實。14種新怪物加入，包括傳說級「荒神龍」。新動作「翔蟲」同埋「鉤繩」系統令狩獵更加靈活多變。

✅ 優點：畫質頂級、狩獵手感出色、生態系統逼真
❌ 缺點：多人模式伺服器不穩定、中文化有錯字`
      },
      {
        title: "⚡ 霍格華茲的傳承 2 搶先評測",
        content: `Avalanche Software 開發
 Warner Bros. Games 發行
預計發售：2026年8月28日
平台：PS5, Xbox Series X, PC

**分析師評語：**
相隔3年，巫師世界冒險再次回歸！

**評分：⭐ 8.8/10（預估）**

今集設定喺19世紀魔法世界，玩家將扮演魔法部新成員，探索更多魔法學校之外嘅區域，包括紐約魔法國會大樓。全地形掃帚同埋新魔法令探索更加自由。

⚠️ 注意：評分係基於早期試玩版本，最終品質可能有所調整`
      },
      {
        title: "💰 8月發售遊戲價格總覽",
        content: `**建議入手時機：**

| 遊戲 | 標準版建議零售價 | 黃金版/終極版 | 分析師建議 |
|:----:|:---------------:|:------------:|:---------:|
| 魔物獵人 荒野 | HK$548 | HK$698 | 首發購入 |
| 霍格華茲的傳承 2 | HK$498 | HK$648 | 等首評 |
| 碧血如鉤2 | HK$398 | HK$548 | 等特價 |
| 模擬市民5 | HK$468 | HK$698 | 粉絲首發 |
| 女神異聞錄6 | HK$468 | HK$638 | 必買！ |
| 死亡細胞2 | HK$248 | HK$348 | 獨立遊戲首發優惠 |

**分析師預算建議：**
- 8月總預算 HK$2000 以內：首選魔物獵人荒野 + 女神異聞錄6
- 8月總預算 HK$1500 以內：魔物獵人荒野 + 死亡細胞2`
      }
    ],
    tags: ["2026年8月", "新遊戲", "評分", "魔物獵人", "霍格華茲", "評測"],
    relatedPosts: ["console-wars-2026", "esports-tournament-2026", "mobile-gaming-trend", "vr-gaming-future"]
  },
  'zh-CN': {
    intro: `2026年8月是游戏界的黄金档期！多间大厂都选择这个月发布年度大作，让我们一起来看下这个月有什么瞩目作品！

作为专业游戏分析师，我们为你整理了8月最受期待的游戏评分和抢先评测，让你能够第一时间掌握最新资讯！`,
    sections: [
      {
        title: "🔥 8月游戏评分总榜",
        content: `**分析师评分标准：**
- 画质表现 (25%)
- 游戏性/操控 (25%)
- 故事/剧情 (20%)
- 创新程度 (15%)
- 性价比 (15%)

| 游戏名称 | 评分 | 分析师点评 |
|:--------|:----:|:----------|
| 怪物猎人 荒野 | ⭐ 9.0/10 | 狩猎体验巅峰之作 |
| 霍格沃茨的传承 2 | ⭐ 8.8/10 | 开放世界魔法体验 |
| 碧血如钩2 | ⭐ 8.5/10 | 类魂系RPG佳作 |
| 模拟人生5 | ⭐ 8.0/10 | 生活模拟经典回归 |
| 女神异闻录6 | ⭐ 9.3/10 | JRPG新标杆 |
| 死亡细胞2 | ⭐ 8.7/10 | 类银河战士巅峰 |`
      },
      {
        title: "🐉 怪物猎人 荒野 完整评测",
        content: `Capcom 开发
发售日：2026年8月1日（全平台同步发售）
平台：PS5, Xbox Series X, PC, Switch 2

**分析师评语：**
作为怪物猎人系列20周年纪念作品，《荒野》带来了革命性的进化！

**评分：⭐ 9.0/10**

新引擎为游戏带来了令人窒息的画质表现，生态系统比以前更加真实。14种新怪物加入，包括传说级「荒神龙」。新动作「翔虫」和「钩绳」系统令狩猎更加灵活多变。

✅ 优点：画质顶级、狩猎手感出色、生态系统逼真
❌ 缺点：多人模式服务器不稳定、中文化有错字`
      },
      {
        title: "⚡ 霍格沃茨的传承 2 抢先评测",
        content: `Avalanche Software 开发
 Warner Bros. Games 发行
预计发售：2026年8月28日
平台：PS5, Xbox Series X, PC

**分析师评语：**
相隔3年，巫师世界冒险再次回归！

**评分：⭐ 8.8/10（预估）**

今集设定在19世纪魔法世界，玩家将扮演魔法部新成员，探索更多魔法学校之外的区域，包括纽约魔法国会大楼。全地形扫帚和新魔法令探索更加自由。

⚠️ 注意：评分是基于早期试玩版本，最终品质可能有所调整`
      },
      {
        title: "💰 8月发售游戏价格总览",
        content: `**建议入手时机：**

| 游戏 | 标准版建议零售价 | 黄金版/终极版 | 分析师建议 |
|:----:|:---------------:|:------------:|:---------:|
| 怪物猎人 荒野 | HK$548 | HK$698 | 首发购入 |
| 霍格沃茨的传承 2 | HK$498 | HK$648 | 等首评 |
| 碧血如钩2 | HK$398 | HK$548 | 等特价 |
| 模拟人生5 | HK$468 | HK$698 | 粉丝首发 |
| 女神异闻录6 | HK$468 | HK$638 | 必买！ |
| 死亡细胞2 | HK$248 | HK$348 | 独立游戏首发优惠 |

**分析师预算建议：**
- 8月总预算 HK$2000 以内：首选怪物猎人荒野 + 女神异闻录6
- 8月总预算 HK$1500 以内：怪物猎人荒野 + 死亡细胞2`
      }
    ],
    tags: ["2026年8月", "新游戏", "评分", "怪物猎人", "霍格沃茨", "评测"],
    relatedPosts: ["console-wars-2026", "esports-tournament-2026", "mobile-gaming-trend", "vr-gaming-future"]
  },
  'en': {
    intro: `August 2026 is the golden season for gaming! Major studios are releasing their biggest titles this month. Let's see what's coming!

As professional game analysts, we've compiled the most anticipated game scores and early reviews for August!`,
    sections: [
      {
        title: "🔥 August Game Score Rankings",
        content: `**Analyst Scoring Standards:**
- Graphics Quality (25%)
- Gameplay/Controls (25%)
- Story/Narrative (20%)
- Innovation (15%)
- Value for Money (15%)

| Game Title | Score | Analyst Review |
|:--------|:----:|:----------|
| Monster Hunter Wilds | ⭐ 9.0/10 | Peak hunting experience |
| Hogwarts Legacy 2 | ⭐ 8.8/10 | Open world magic |
| Starfield 2 | ⭐ 8.5/10 | Soul-like RPG gem |
| The Sims 5 | ⭐ 8.0/10 | Life sim returns |
| Persona 6 | ⭐ 9.3/10 | JRPG new standard |
| Dead Cells 2 | ⭐ 8.7/10 | Metroidvania peak |`
      },
      {
        title: "🐉 Monster Hunter Wilds Full Review",
        content: `Capcom Development
Release: August 1, 2026 (All platforms)
Platforms: PS5, Xbox Series X, PC, Switch 2

**Analyst Review:**
As Monster Hunter's 20th anniversary title, Wilds brings revolutionary evolution!

**Score: ⭐ 9.0/10**

The new engine delivers breathtaking graphics, ecosystems more realistic than ever. 14 new monsters including legendary "Wild God Dragon". New "Wirebug" and "Rope" actions make hunting more dynamic.

✅ Pros: Top-tier graphics, excellent hunting feel, realistic ecosystems
❌ Cons: Unstable multiplayer servers, some Chinese localization errors`
      },
      {
        title: "⚡ Hogwarts Legacy 2 Early Review",
        content: `Avalanche Software Development
Warner Bros. Games Publishing
Expected Release: August 28, 2026
Platforms: PS5, Xbox Series X, PC

**Analyst Review:**
After 3 years, the wizarding world adventure returns!

**Score: ⭐ 8.8/10 (Estimated)**

Set in the 19th century wizarding world, players become new Ministry of Magic members, exploring areas beyond Hogwarts including the New York Magical Congress building. New all-terrain brooms and magic make exploration freer.

⚠️ Note: Score based on early preview, final quality may vary`
      },
      {
        title: "💰 August Game Price Guide",
        content: `**Recommended Purchase Timing:**

| Game | Standard Edition | Deluxe/Ultimate | Analyst Recommendation |
|:----:|:---------------:|:------------:|:---------:|
| Monster Hunter Wilds | HK$548 | HK$698 | Buy at launch |
| Hogwarts Legacy 2 | HK$498 | HK$648 | Wait for reviews |
| Starfield 2 | HK$398 | HK$548 | Wait for sale |
| The Sims 5 | HK$468 | HK$698 | Fans buy at launch |
| Persona 6 | HK$468 | HK$638 | Must buy! |
| Dead Cells 2 | HK$248 | HK$348 | Indie launch discount |

**Analyst Budget Recommendations:**
- August budget HK$2000: Monster Hunter Wilds + Persona 6
- August budget HK$1500: Monster Hunter Wilds + Dead Cells 2`
      }
    ],
    tags: ["August 2026", "New Games", "Review Scores", "Monster Hunter", "Hogwarts", "Review"],
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
            src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1920&q=80"
            alt="August 2026 Games"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest mb-6">
            🎮 電玩遊戲
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            2026年8月遊戲前瞻
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            獨家評測與評分搶先看！
          </p>
        </div>
      </header>

      {/* Language Selector */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        {(['zh-TW', 'zh-CN', 'en'] as const).map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${lang === l ? 'bg-amber-500 text-black' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}
          >
            {l === 'zh-TW' ? '繁中' : l === 'zh-CN' ? '简体' : 'EN'}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 rounded-2xl p-8 mb-12 border border-amber-500/20">
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {t.intro}
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-8">
          <YouTubeEmbed videoId="El3IzA1Wv9Q" title="魔物獵人 荒野 官方預告" />
        </div>

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden mb-6 border border-slate-700/50">
          <img
            src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&q=80"
            alt="August 2026 Games"
            className="w-full h-auto"
          />
        </div>

        {/* Sections */}
        {t.sections.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">🔥</span>
              {section.title}
            </h2>
            <div className="bg-slate-900/50 rounded-xl p-6 md:p-8 border border-slate-800/50">
              <div className="prose prose-invert prose-lg max-w-none">
                {section.content.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="mb-4 text-gray-300 leading-relaxed whitespace-pre-line">
                    {para.includes('**') ? (
                      para.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                        part.startsWith('**') && part.endsWith('**') ?
                          <strong key={i} className="text-amber-400 font-bold">{part.slice(2, -2)}</strong> : part
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
                            <td key={cellIdx} className={`px-4 py-2 ${rowIdx === 0 ? 'font-bold text-amber-400' : ''}`}>
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
          <a href="/gaming" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-black font-bold hover:bg-amber-400 transition-colors">
            ← 返回遊戲首頁
          </a>
        </div>
      </main>
    </div>
  )
}
