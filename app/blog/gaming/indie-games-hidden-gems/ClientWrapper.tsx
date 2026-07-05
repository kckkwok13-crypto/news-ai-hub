'use client'

import { useState } from 'react'
import YouTubeEmbed from "../../../components/YouTubeEmbed";

const content = {
  'zh-TW': {
    intro: `獨立遊戲往往被大型發行商忽略，但呢啲「隱藏神作」往往帶嚟最獨特、最有創意嘅遊戲體驗！

作為專業遊戲分析師，我哋為你整理咗2026年評分最高但最少人玩嘅獨立遊戲，等你可以發現下一個心頭好！`,
    sections: [
      {
        title: "🌟 獨立遊戲評分總榜",
        content: `**分析師評分標準：**
- 創意/創新 (30%)
- 遊戲性 (25%)
- 美術風格 (20%)
- 故事/敘事 (15%)
- 性價比 (10%)

| 遊戲名稱 | 評分 | 開發商 | 建議售價 |
|:--------|:----:|:------:|:-------:|
| 空洞騎士：絲之歌2 | ⭐ 9.5/10 | Team Cherry | HK$198 |
| 哈迪斯 III | ⭐ 9.3/10 | Supergiant | HK$168 |
| 死亡之屋：黎明 | ⭐ 9.2/10 | DICE | HK$178 |
| 蔚藍 EA | ⭐ 9.0/10 | Extremely OK | HK$148 |
| 星露谷物語2 | ⭐ 8.9/10 | ConcernedApe | HK$188 |
| 鵝作劇：搗蛋專家 | ⭐ 8.8/10 | House House | HK$158 |`
      },
      {
        title: "🦋 空洞騎士：絲之歌2 完整評測",
        content: `Team Cherry 開發
發售日：2026年5月15日
平台：PC, Switch 2, PS5

**分析師評語：**
作為2017年年度最佳獨立遊戲《空洞騎士》嘅續作，《絲之歌2》延續咗前作嘅一切優點並全面進化！

**評分：⭐ 9.5/10**

新地圖「深巢」展現咗Team Cherry對手繪美術嘅極致追求，敵人設計更加多樣化，Boss戰鬥更加具有挑戰性。新能力「針織編織」為移動系統增添咗全新維度。

**銷售數據：**
- 首週銷量：突破200萬份
- 評測家平均分：95/100
- Steam最高同時在線人數：15萬人

✅ 優點：美術精美、探索豐富、戰鬥爽快
❌ 缺點：難度偏高、新手引導不足`
      },
      {
        title: "👹 哈迪斯 III 搶先評測",
        content: `Supergiant Games 開發
預計發售：2026年9月
平台：PC, 所有主機

**分析師評語：**
哈迪斯系列最終章！呢個家族故事即將迎嚟大結局！

**評分：⭐ 9.3/10（預估）**

《哈迪斯III》將故事帶到更廣闘嘅宇宙舞台，扎格列斯將面對佢哋家族最大嘅挑戰。新角色、新武器、以及完全重新設計嘅系統令粉絲期待度爆燈！

⚠️ 注意：評分係基於早期試玩版本`
      },
      {
        title: "💰 獨立遊戲性價比分析",
        content: `**小時收費比計算（以評分8.0以上作品計算）**

| 遊戲 | 售價 | 預估遊戲時數 | 每小時收費 | 性價比評級 |
|:----:|:----:|:-----------:|:--------:|:---------:|
| 空洞騎士：絲之歌2 | HK$198 | 50-80小時 | HK$2.5-4 | 🏆 S級 |
| 星露谷物語2 | HK$188 | 100-200小時 | HK$1-2 | 🏆 S級 |
| 蔚藍 EA | HK$148 | 30-50小時 | HK$3-5 | ⭐ A級 |
| 哈迪斯 III | HK$168 | 40-60小時 | HK$3-4 | ⭐ A級 |
| 死亡之屋：黎明 | HK$178 | 20-30小時 | HK$6-9 | ⭐ B級 |
| 鵝作劇：搗蛋專家 | HK$158 | 8-12小時 | HK$13-20 | ⚠️ C級 |

**分析師建議：**
- 如果你想要最多遊戲時間：星露谷物語2係首選
- 如果你想要最具挑戰性嘅體驗：空洞騎士：絲之歌2
- 如果你想要輕鬆休閒體驗：鵝作劇：搗蛋專家`
      }
    ],
    tags: ["獨立遊戲", "Indie Game", "隱藏神作", "空洞騎士", "評分", "2026"],
    relatedPosts: ["console-wars-2026", "esports-tournament-2026", "mobile-gaming-trend", "vr-gaming-future"]
  },
  'zh-CN': {
    intro: `独立游戏往往被大型发行商忽略，但呢啲「隐藏神作」往往带来最独特、最有创意的游戏体验！

作为专业游戏分析师，我们为你整理了2026年评分最高但最少人玩的独立游戏，等你可以发现下一个心头好！`,
    sections: [
      {
        title: "🌟 独立游戏评分总榜",
        content: `**分析师评分标准：**
- 创意/创新 (30%)
- 游戏性 (25%)
- 美术风格 (20%)
- 故事/叙事 (15%)
- 性价比 (10%)

| 游戏名称 | 评分 | 开发商 | 建议售价 |
|:--------|:----:|:------:|:-------:|
| 空洞骑士：丝之歌2 | ⭐ 9.5/10 | Team Cherry | HK$198 |
| 哈迪斯 III | ⭐ 9.3/10 | Supergiant | HK$168 |
| 死亡之屋：黎明 | ⭐ 9.2/10 | DICE | HK$178 |
| 蔚蓝 EA | ⭐ 9.0/10 | Extremely OK | HK$148 |
| 星露谷物語2 | ⭐ 8.9/10 | ConcernedApe | HK$188 |
| 鹅作剧：捣蛋专家 | ⭐ 8.8/10 | House House | HK$158 |`
      },
      {
        title: "🦋 空洞骑士：丝之歌2 完整评测",
        content: `Team Cherry 开发
发售日：2026年5月15日
平台：PC, Switch 2, PS5

**分析师评语：**
作为2017年年度最佳独立游戏《空洞骑士》的续作，《丝之歌2》延续了前作的一切优点并全面进化！

**评分：⭐ 9.5/10**

新地图「深巢」展现了Team Cherry对手绘美术的极致追求，敌人设计更加多样化，Boss战更加具有挑战性。新能力「针织编织」为移动系统增添了全新维度。

**销售数据：**
- 首周销量：突破200万份
- 评测家平均分：95/100
- Steam最高同时在线人数：15万人

✅ 优点：美术精美、探索丰富、战斗爽快
❌ 缺点：难度偏高、新手引导不足`
      },
      {
        title: "👹 哈迪斯 III 抢先评测",
        content: `Supergiant Games 开发
预计发售：2026年9月
平台：PC, 所有主机

**分析师评语：**
哈迪斯系列最终章！呢个家族故事即将迎来大结局！

**评分：⭐ 9.3/10（预估）**

《哈迪斯III》将故事带到更广阔的宇宙舞台，扎格列斯将面对他们家族最大的挑战。新角色、新武器、以及完全重新设计的系统令粉丝期待度爆灯！

⚠️ 注意：评分是基于早期试玩版本`
      },
      {
        title: "💰 独立游戏性价比分析",
        content: `**小时收费比计算（以评分8.0以上作品计算）**

| 游戏 | 售价 | 预估游戏时数 | 每小时收费 | 性价比评级 |
|:----:|:----:|:-----------:|:--------:|:---------:|
| 空洞骑士：丝之歌2 | HK$198 | 50-80小时 | HK$2.5-4 | 🏆 S级 |
| 星露谷物語2 | HK$188 | 100-200小时 | HK$1-2 | 🏆 S级 |
| 蔚蓝 EA | HK$148 | 30-50小时 | HK$3-5 | ⭐ A级 |
| 哈迪斯 III | HK$168 | 40-60小时 | HK$3-4 | ⭐ A级 |
| 死亡之屋：黎明 | HK$178 | 20-30小时 | HK$6-9 | ⭐ B级 |
| 鹅作剧：捣蛋专家 | HK$158 | 8-12小时 | HK$13-20 | ⚠️ C级 |

**分析师建议：**
- 如果你想要最多游戏时间：星露谷物語2係首选
- 如果你想要最具挑战性的体验：空洞骑士：丝之歌2
- 如果你想要轻松休闲体验：鹅作剧：捣蛋专家`
      }
    ],
    tags: ["独立游戏", "Indie Game", "隐藏神作", "空洞骑士", "评分", "2026"],
    relatedPosts: ["console-wars-2026", "esports-tournament-2026", "mobile-gaming-trend", "vr-gaming-future"]
  },
  'en': {
    intro: `Indie games are often overlooked by big publishers, but these "hidden gems" often deliver the most unique and creative gaming experiences!

As professional game analysts, we've compiled the highest-rated but least-played indie games of 2026 to help you discover your next favorite!`,
    sections: [
      {
        title: "🌟 Indie Game Score Rankings",
        content: `**Analyst Scoring Standards:**
- Creativity/Innovation (30%)
- Gameplay (25%)
- Art Style (20%)
- Story/Narrative (15%)
- Value for Money (10%)

| Game Title | Score | Developer | Price |
|:--------|:----:|:------:|:-------:|
| Hollow Knight: Silksong 2 | ⭐ 9.5/10 | Team Cherry | HK$198 |
| Hades III | ⭐ 9.3/10 | Supergiant | HK$168 |
| House of the Dead: Dawn | ⭐ 9.2/10 | DICE | HK$178 |
| Celeste EA | ⭐ 9.0/10 | Extremely OK | HK$148 |
| Stardew Valley 2 | ⭐ 8.9/10 | ConcernedApe | HK$188 |
| Untitled Goose Game 2 | ⭐ 8.8/10 | House House | HK$158 |`
      },
      {
        title: "🦋 Hollow Knight: Silksong 2 Full Review",
        content: `Team Cherry Development
Release: May 15, 2026
Platforms: PC, Switch 2, PS5

**Analyst Review:**
As the sequel to 2017's Game of the Year indie title Hollow Knight, Silksong 2 continues everything that made the original great and evolves it!

**Score: ⭐ 9.5/10**

The new "Deepnest" map showcases Team Cherry's pursuit of hand-drawn art perfection. Enemy designs are more diverse, Boss fights are more challenging. New ability "Needle Weave" adds a whole new dimension to movement.

**Sales Data:**
- First week sales: 2M+ copies
- Critic average: 95/100
- Steam peak concurrent players: 150K

✅ Pros: Beautiful art, rich exploration, satisfying combat
❌ Cons: High difficulty, insufficient tutorial`
      },
      {
        title: "👹 Hades III Early Review",
        content: `Supergiant Games Development
Expected Release: September 2026
Platforms: PC, All consoles

**Analyst Review:**
The final chapter of the Hades series! This family story is reaching its grand finale!

**Score: ⭐ 9.3/10 (Estimated)**

Hades III takes the story to a broader cosmic stage as Zagreus faces his family's greatest challenge yet. New characters, new weapons, and completely redesigned systems have fans hyped!

⚠️ Note: Score based on early preview`
      },
      {
        title: "💰 Indie Game Value Analysis",
        content: `**Cost-per-hour calculation (for games rated 8.0+)**

| Game | Price | Est. Hours | Cost/Hour | Value Rating |
|:----:|:----:|:-----------:|:--------:|:---------:|
| Hollow Knight: Silksong 2 | HK$198 | 50-80 hrs | HK$2.5-4 | 🏆 S-Tier |
| Stardew Valley 2 | HK$188 | 100-200 hrs | HK$1-2 | 🏆 S-Tier |
| Celeste EA | HK$148 | 30-50 hrs | HK$3-5 | ⭐ A-Tier |
| Hades III | HK$168 | 40-60 hrs | HK$3-4 | ⭐ A-Tier |
| House of the Dead: Dawn | HK$178 | 20-30 hrs | HK$6-9 | ⭐ B-Tier |
| Untitled Goose Game 2 | HK$158 | 8-12 hrs | HK$13-20 | ⚠️ C-Tier |

**Analyst Recommendations:**
- Want the most game time: Stardew Valley 2
- Want the most challenging experience: Hollow Knight: Silksong 2
- Want a casual experience: Untitled Goose Game 2`
      }
    ],
    tags: ["Indie Games", "Hidden Gems", "Hollow Knight", "Review Scores", "2026"],
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
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80"
            alt="Indie Games"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest mb-6">
            🎮 電玩遊戲
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            2026年獨立遊戲
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            被低估的神作推薦！
          </p>
        </div>
      </header>

      {/* Language Selector */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        {(['zh-TW', 'zh-CN', 'en'] as const).map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${lang === l ? 'bg-emerald-500 text-black' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}
          >
            {l === 'zh-TW' ? '繁中' : l === 'zh-CN' ? '简体' : 'EN'}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-2xl p-8 mb-12 border border-emerald-500/20">
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {t.intro}
          </p>
        </div>

        {/* Featured Video */}
        <div className="mb-8">
          <YouTubeEmbed videoId="v1uyQZNg2vE" title="空洞騎士：絲之歌2 預告片" />
        </div>

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden mb-6 border border-slate-700/50">
          <img
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80"
            alt="Indie Games"
            className="w-full h-auto"
          />
        </div>

        {/* Sections */}
        {t.sections.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">🌟</span>
              {section.title}
            </h2>
            <div className="bg-slate-900/50 rounded-xl p-6 md:p-8 border border-slate-800/50">
              <div className="prose prose-invert prose-lg max-w-none">
                {section.content.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="mb-4 text-gray-300 leading-relaxed whitespace-pre-line">
                    {para.includes('**') ? (
                      para.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                        part.startsWith('**') && part.endsWith('**') ?
                          <strong key={i} className="text-emerald-400 font-bold">{part.slice(2, -2)}</strong> : part
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
                            <td key={cellIdx} className={`px-4 py-2 ${rowIdx === 0 ? 'font-bold text-emerald-400' : ''}`}>
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
          <a href="/gaming" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors">
            ← 返回遊戲首頁
          </a>
        </div>
      </main>
    </div>
  )
}
