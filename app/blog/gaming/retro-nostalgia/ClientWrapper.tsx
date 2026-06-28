'use client'

import { useState } from 'react'

const content = {
  'zh-TW': {
    intro: `像素遊戲唔再只係「懷舊」！2026年，復古風遊戲正式成為主流！從《Stray》到《Palworld》，像素風席捲全球！

懷舊經濟學係真既，一齊探索呢個獨特既遊戲現象！`,
    sections: [
      {
        title: "🎮 像素遊戲再次爆紅原因",
        content: `**點解2026年咁多人鐘意像素遊戲？**

**1. 情感連結**
- 80/90後成長必玩經典
- 任天堂、Sega 集體回憶
- 「時光倒流」既獨特體驗

**2. 門檻低、成本平**
- 像素美術比3D建模平90%
- 小團隊都可以做靚遊戲
- 催生大量獨立遊戲製作人

**3. 創意解放**
- 像素風唔需要極致硬件
- 專注玩法、劇情、創意
- 好多創意遊戲因此誕生

**4. 社交媒體效應**
- 像素風圖片天生適合分享
- 懷舊梗圖病毒式傳播
- 年輕一代當新潮事物追捧

**結論：**
像素遊戲唔只係懷舊，係一種獨特既美學選擇！`
      },
      {
        title: "🏆 2026 必玩像素遊戲推薦",
        content: `**2026年度像素遊戲大作：**

**1. 《Stardew Valley 2》**
- 類型：牧場物語
- 評分：9.8/10
- 特點：經典玩法全面進化

**2. 《Hollow Knight: Silksong》**
- 類型：銀河惡魔城
- 評分：9.9/10（未推出已爆紅）
- 特點：粉絲苦等5年既續作

**3. 《Palworld 2》**
- 類型：開放世界生存
- 評分：9.3/10
- 特點：「Pokemon射擊」再臨

**4. 《Celeste 2》**
- 類型：平台跳躍
- 評分：9.6/10
- 特點：獨立遊戲神作續作

**5. 《Undertale 2》**
- 類型：RPG
- 評分：9.7/10
- 特點：Toby Fox 五年磨一劍

**香港/台灣玩家心聲：**
「像素風唔係因為做唔到3D，而係選擇！」`
      },
      {
        title: "💰 像素遊戲商機大揭秘",
        content: `**像素遊戲賺錢能力：**

**成功案例：**
- 《Stardew Valley》：銷量突破3500萬份
- 《Undertale》：銷量突破500萬份
- 《Hollow Knight》：銷量突破1500萬份
- 《Celeste》：銷量突破100萬份

**收入計算：**
假設一款像素遊戲定價70港元：
- 銷量100萬份 = 7000萬港元收入
- 利潤率高達85%（美術成本低）
- 性價比遠超3A大作

**NFT + 像素遊戲：**
好多像素遊戲開始結合NFT：
- 像素角色NFT鑄造
- 遊戲道具區塊鏈确權
- Play-to-Earn像素遊戲

**但爭議都大：**
像素風NFT項目大量倒閉，玩家對此越嚟越有戒心！`
      },
      {
        title: "🌍 懷舊文化對香港/台灣影響",
        content: `**香港復古遊戲文化：**
- 旺角、灣仔仍有復古遊戲店
- Pokemon Card Game 收藏熱潮持續
- 紅白機、Game Boy二手價飙升
- 懷舊街機舖變打卡聖地

**台灣復古遊戲驕傲：**
- 《Sdorica 萬象物語》像素+原創
- 台灣獨立遊戲節像素作品大放異彩
- 像素風格動畫《Chaotic》全球走紅
- retro game 直播主粉絲數百萬

**兩岸三地共同現象：**
- 「90年代係最好既年代」情緒蔓延
- 像素風成為抵抗3A大作內卷既出路
- 懷舊已經變成一種生活方式

**未來預測：**
像素遊戲唔會消失，只會越嚟越精緻！`
      }
    ],
    tags: ["像素遊戲", "復古", "懷舊", "獨立遊戲", "2026", "電玩"],
    relatedPosts: ["console-wars", "esports-tournament", "vr-gaming", "mobile-gaming"]
  },
  'zh-CN': {
    intro: `像素游戏不再只是「怀旧」！2026年，复古风游戏正式成为主流！从《Stray》到《Palworld》，像素风席卷全球！

怀旧经济学是真的，一起探索这个独特的游戏现象！`,
    sections: [
      {
        title: "🎮 像素游戏再次爆红原因",
        content: `**为什么2026年这么多人喜欢像素游戏？**

**1. 情感连结**
- 80/90后成长必玩经典
- 任天堂、Sega 集体回忆
- 「时光倒流」的独特体验

**2. 门槛低、成本平**
- 像素美术比3D建模平90%
- 小团队都可以做靓游戏
- 催生大量独立游戏制作人

**3. 创意解放**
- 像素风不需要极致硬件
- 专注玩法、剧情、创意
- 好多创意游戏因此诞生

**4. 社交媒体效应**
- 像素风图片天生适合分享
- 怀旧梗图病毒式传播
- 年轻一代当新潮事物追捧

**结论：**
像素游戏不只是怀旧，是一种独特的美学选择！`
      },
      {
        title: "🏆 2026 必玩像素游戏推荐",
        content: `**2026年度像素游戏大作：**

**1. 《Stardew Valley 2》**
- 类型：牧场物语
- 评分：9.8/10
- 特点：经典玩法全面进化

**2. 《Hollow Knight: Silksong》**
- 类型：银河恶魔城
- 评分：9.9/10（未推出已爆红）
- 特点：粉丝苦等5年的续作

**3. 《Palworld 2》**
- 类型：开放世界生存
- 评分：9.3/10
- 特点：「Pokemon射击」再临

**4. 《Celeste 2》**
- 类型：平台跳跃
- 评分：9.6/10
- 特点：独立游戏神作续作

**5. 《Undertale 2》**
- 类型：RPG
- 评分：9.7/10
- 特点：Toby Fox 五年磨一剑

**香港/台湾玩家心声：**
「像素风不是因为做不到3D，而系选择！」`
      },
      {
        title: "💰 像素游戏商机大揭秘",
        content: `**像素游戏赚钱能力：**

**成功案例：**
- 《Stardew Valley》：销量突破3500万份
- 《Undertale》：销量突破500万份
- 《Hollow Knight》：销量突破1500万份
- 《Celeste》：销量突破100万份

**收入计算：**
假设一款像素游戏定价70港元：
- 销量100万份 = 7000万港元收入
- 利润率高踞85%（美术成本低）
- 性价比远超3A大作

**NFT + 像素游戏：**
好多像素游戏开始结合NFT：
- 像素角色NFT铸造
- 游戏道具区块链确权
- Play-to-Earn像素游戏

**但争议都大：**
像素风NFT项目大量倒闭，玩家对此越来越有戒心！`
      },
      {
        title: "🌍 怀旧文化对香港/台湾影响",
        content: `**香港复古游戏文化：**
- 旺角、湾仔仍有复古游戏店
- Pokemon Card Game 收藏热潮持续
- 红白机、Game Boy二手价飙升
- 怀旧街机铺变打卡圣地

**台湾复古游戏骄傲：**
- 《Sdorica 万象之物语》像素+原创
- 台湾独立游戏节像素作品大放异彩
- 像素风格动画《Chaotic》全球走红
- retro game 直播主粉丝数百万

**两岸三地共同现象：**
- 「90年代是最好的年代」情绪蔓延
- 像素风成为抵抗3A大作内卷的出路
- 怀旧已经变成一种生活方式

**未来预测：**
像素游戏不会消失，只会越来越精致！`
      }
    ],
    tags: ["像素游戏", "复古", "怀旧", "独立游戏", "2026", "电玩"],
    relatedPosts: ["console-wars", "esports-tournament", "vr-gaming", "mobile-gaming"]
  },
  'en': {
    intro: `Pixel games are no longer just "nostalgia"! In 2026, retro-style games have become mainstream! From Stray to Palworld, pixel art is taking over the world!

Nostalgia economics is real - let's explore this unique gaming phenomenon!`,
    sections: [
      {
        title: "🎮 Why Pixel Games Are Trending Again",
        content: `**Why are pixel games so popular in 2026?**

**1. Emotional Connection**
- 80s/90s kids' gaming memories
- Nintendo, Sega collective nostalgia
- Unique "time travel" experience

**2. Low Barrier, Low Cost**
- Pixel art 90% cheaper than 3D modeling
- Small teams can make beautiful games
- Spawns many indie game creators

**3. Creative Freedom**
- Pixel art doesn't need cutting-edge hardware
- Focus on gameplay, story, creativity
- Many creative games born this way

**4. Social Media Effect**
- Pixel art images share naturally
- Nostalgia memes go viral
- Gen Z embraces it as new trend

**Conclusion:**
Pixel art isn't just nostalgia - it's a deliberate aesthetic choice!`
      },
      {
        title: "🏆 2026 Must-Play Pixel Games",
        content: `**2026's Top Pixel Games:**

**1. Stardew Valley 2**
- Genre: Farming sim
- Rating: 9.8/10
- Features: Classic gameplay evolved

**2. Hollow Knight: Silksong**
- Genre: Metroidvania
- Rating: 9.9/10 (Viral before launch!)
- Features: 5-year fan等待续作

**3. Palworld 2**
- Genre: Open world survival
- Rating: 9.3/10
- Features: "Pokemon shooter" returns

**4. Celeste 2**
- Genre: Platformer
- Rating: 9.6/10
- Features: Indie masterpiece sequel

**5. Undertale 2**
- Genre: RPG
- Rating: 9.7/10
- Features: Toby Fox's 5-year project

**HK/TW Players Say:**
"Pixel art isn't because we can't do 3D - it's a choice!"`
      },
      {
        title: "💰 Pixel Game Business Secrets",
        content: `**Pixel Game Revenue Power:**

**Success Stories:**
- Stardew Valley: 35M+ copies sold
- Undertale: 5M+ copies sold
- Hollow Knight: 15M+ copies sold
- Celeste: 1M+ copies sold

**Revenue Calculation:**
Assuming $10 per pixel game:
- 1M copies = $10M revenue
- 85% profit margin (low art costs)
- Better ROI than AAA games

**NFT + Pixel Games:**
Many pixel games integrate NFT:
- Pixel character NFT minting
- In-game items on blockchain
- Play-to-Earn pixel games

**But controversies remain:**
Many pixel NFT projects have collapsed - players are increasingly wary!`
      },
      {
        title: "🌍 Impact of Nostalgia Culture on HK & Taiwan",
        content: `**Hong Kong Retro Gaming Culture:**
- Retro game shops still exist in Mong Kok, Wan Chai
- Pokemon Card Game collection craze continues
- NES, Game Boy secondhand prices soar
- Retro arcade shops become photo spots

**Taiwan Retro Gaming Pride:**
- Sdorica: pixel art + original IP success
- Taiwan Indie Game Festival pixel games shine
- Pixel style animation "Chaotic" goes global
- Retro game streamers with millions of followers

**Greater China Trend:**
- "90s was the best era" sentiment spreads
- Pixel art becomes escape from AAA game arms race
- Nostalgia has become a lifestyle

**Future Prediction:**
Pixel games won't disappear - they'll only get more refined!`
      }
    ],
    tags: ["Pixel Games", "Retro", "Nostalgia", "Indie Games", "2026", "Gaming"],
    relatedPosts: ["console-wars", "esports-tournament", "vr-gaming", "mobile-gaming"]
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
            alt="Retro Pixel Gaming"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest mb-6">
            🎮 電玩遊戲
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            復古遊戲熱潮
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            像素遊戲點解再次爆紅？
          </p>
        </div>
      </header>

      {/* Language Selector */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        {(['zh-TW', 'zh-CN', 'en'] as const).map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${lang === l ? 'bg-orange-500 text-black' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}
          >
            {l === 'zh-TW' ? '繁中' : l === 'zh-CN' ? '简体' : 'EN'}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="bg-gradient-to-r from-orange-900/30 to-yellow-900/30 rounded-2xl p-8 mb-12 border border-orange-500/20">
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {t.intro}
          </p>
        </div>

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden mb-6 border border-slate-700/50">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
            alt="Pixel Art Gaming"
            className="w-full h-auto"
          />
        </div>

        {/* Featured Video */}
        <div className="rounded-2xl overflow-hidden mb-12 border border-orange-500/30 bg-gradient-to-r from-orange-900/20 to-yellow-900/20">
          <div className="flex items-center gap-3 px-5 py-3 border-b border-orange-500/20">
            <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span className="text-orange-400 text-sm font-bold">📺 文章配圖影片</span>
          </div>
          <div className="relative aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0IAGWXm23-c"
              title="Retro Gaming Nostalgia"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Sections */}
        {t.sections.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">{idx === 0 ? '🎮' : idx === 1 ? '🏆' : idx === 2 ? '💰' : '🌍'}</span>
              {section.title}
            </h2>
            <div className="bg-slate-900/50 rounded-xl p-6 md:p-8 border border-slate-800/50">
              <div className="prose prose-invert prose-lg max-w-none whitespace-pre-line">
                {section.content.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="mb-4 text-gray-300 leading-relaxed">
                    {para.includes('**') ? (
                      para.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                        part.startsWith('**') && part.endsWith('**') ?
                          <strong key={i} className="text-orange-400 font-bold">{part.slice(2, -2)}</strong> : part
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
          <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-black font-bold hover:bg-orange-400 transition-colors">
            ← 返回首頁
          </a>
        </div>
      </main>
    </div>
  )
}