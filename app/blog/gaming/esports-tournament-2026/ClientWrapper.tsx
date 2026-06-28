'use client'

import { useState } from 'react'

const content = {
  'zh-TW': {
    intro: `2026年，電競產業正式邁入黃金時代！全球電競市場規模突破500億美元，英雄聯盟世界賽冠軍獎金更高達1.5億美元！

呢個唔再只係打機，而係一個價值數百億美元既產業，一個可以改變命運既舞台！`,
    sections: [
      {
        title: "🏆 2026 電競世界賽獎金排行",
        content: `**2026年度最高獎金電競賽事：**

1. 英雄聯盟世界賽 - 1.5億美元
2. Dota 2 國際邀請賽 - 4000萬美元
3. CS2 Major - 2500萬美元
4. 堡壘之夜世界盃 - 2000萬美元
5. Valorant冠軍賽 - 1500萬美元

**總獎金池同比增長：47%**

呢個數字證明電競已經成為全球最受矚目既體育項目之一！`
      },
      {
        title: "🎮 英雄聯盟 2026 世界賽焦点",
        content: `2026英雄聯盟世界賽再度登陸東京！

**焦點戰隊：**
- T1（韓國）：Faker第七度挑戰世界冠軍
- BLG（中國）：全華班能否突破魔咒？
- G2（歐洲）：西方最後希望
- Team Liquid（北美）：黑馬姿態殺入決賽

**新版本變革：**
- 2026季中引入「魔法地圖」機制
- 新英雄「時空守護者」成為BP焦點
- 比賽節奏全面加速

**觀賽人次：** 預計突破2億同時在線觀看`
      },
      {
        title: "💰 電競選手收入大揭秘",
        content: `**頂級電競選手年收入（2026）：**

- 頂級韓援選手：年薪2000萬美元+
- 直播簽約金：500萬-1000萬美元
- 比賽獎金：100萬-500萬美元
- 周邊產品分成：50萬-200萬美元

**電競選手 vs 傳統運動員：**
根據最新統計，英雄聯盟職業選手平均職業生涯只有5-7年，但巔峰期收入已經超越好多傳統運動員！

**退役轉型：**
- 教練/分析師
- 直播主/內容創作者
- 電競解説
- 品牌代言人`
      },
      {
        title: "🌍 電競產業對香港/台灣影響",
        content: `**香港電競發展：**
- 香港電競總會正式成為國際電競協會成員
- 2026香港電競節參與人數突破10萬
- 職業電競隊「Hong Kong Attitude」打进世界賽

**台灣電競驕傲：**
- 閃電狼、PSG等戰隊持續發光發熱
- 台灣選手被譽為「亞洲最強操作」
- 電競相關科系畢業生就業率100%

**兩岸三地電競交流：**
LPL、LCK、PCS聯賽交流日益頻繁，為華人電競選手提供更多發展機會！`
      }
    ],
    tags: ["電競", "英雄聯盟", "世界賽", "獎金", "2026", "電玩"],
    relatedPosts: ["console-wars", "vr-gaming", "mobile-gaming", "retro-nostalgia"]
  },
  'zh-CN': {
    intro: `2026年，电竞产业正式迈入黄金时代！全球电竞市场规模突破500亿美元，英雄联昆世界赛冠军奖金更高1.5亿美元！

这不再只是打游戏，而是一个价值数百亿美元的产业，一个可以改变命运的舞台！`,
    sections: [
      {
        title: "🏆 2026 电竞世界赛奖金排行",
        content: `**2026年度最高奖金电竞赛事：**

1. 英雄联昆世界赛 - 1.5亿美元
2. Dota 2 国际邀请赛 - 4000万美元
3. CS2 Major - 2500万美元
4. 堡垒之夜世界杯 - 2000万美元
5. Valorant冠军赛 - 1500万美元

**总奖金池同比增长：47%**

这个数字证明电竞已经成为全球最受瞩目的体育项目之一！`
      },
      {
        title: "🎮 英雄联昆 2026 世界赛焦点",
        content: `2026英雄联昆世界赛再度登陆东京！

**焦点战队：**
- T1（韩国）：Faker第七度挑战世界冠军
- BLG（中国）：全华班能否突破魔咒？
- G2（欧洲）：西方最后希望
- Team Liquid（北美）：黑马姿态杀入决赛

**新版本变革：**
- 2026季中引入「魔法地图」机制
- 新英雄「时空守护者」成为BP焦点
- 比赛节奏全面加速

**观赛人次：** 预计突破2亿同时在线观看`
      },
      {
        title: "💰 电竞选手收入大揭秘",
        content: `**顶级电竞选手年收入（2026）：**

- 顶级韩援选手：年薪2000万美元+
- 直播签约金：500万-1000万美元
- 比赛奖金：100万-500万美元
- 周边产品分成：50万-200万美元

**电竞选手 vs 传统运动员：**
根据最新统计，英雄联昆职业选手平均职业生涯只有5-7年，但巅峰期收入已经超越好多传统运动员！

**退役转型：**
- 教练/分析师
- 直播主/内容创作者
- 电竞解说
- 品牌代言人`
      },
      {
        title: "🌍 电竞产业对香港/台湾影响",
        content: `**香港电竞发展：**
- 香港电竞总会正式成为国际电竞协会成员
- 2026香港电竞节参与人数突破10万
- 职业电竞队「Hong Kong Attitude」打进世界赛

**台湾电竞骄傲：**
- 闪龟狼、PSG等战队持续发光发热
- 台湾选手被皆为「亚洲最强操作」
- 电竞相关科系毕业生就业率100%

**两岸三地电竞交流：**
LPL、LCK、PCS联赛交流日益频繁，为华人电竞选手提供更多发展机会！`
      }
    ],
    tags: ["电竞", "英雄联昆", "世界赛", "奖金", "2026", "电玩"],
    relatedPosts: ["console-wars", "vr-gaming", "mobile-gaming", "retro-nostalgia"]
  },
  'en': {
    intro: `2026 marks the golden era of esports! Global esports market surpasses $50 billion! League of Legends World Championship prize pool hits $150 million!

This is no longer just gaming - it's a multi-billion dollar industry, a stage that can change your destiny!`,
    sections: [
      {
        title: "🏆 2026 Esports World Championship Prize Pool Ranking",
        content: `**Top Prize Pools in 2026:**

1. League of Legends Worlds - $150 Million
2. Dota 2 The International - $40 Million
3. CS2 Major - $25 Million
4. Fortnite World Cup - $20 Million
5. Valorant Champions - $15 Million

**Total Prize Pool Growth: 47% YoY**

This proves esports has become one of the most watched sports globally!`
      },
      {
        title: "🎮 League of Legends 2026 Worlds Highlights",
        content: `2026 LoL World Championship returns to Tokyo!

**Top Teams:**
- T1 (Korea): Faker's 7th World Championship attempt
- BLG (China): Can the all-Chinese team break the curse?
- G2 (Europe): The West's last hope
- Team Liquid (NA): Dark horse reaches finals

**New Meta Changes:**
- "Magic Map" mechanic introduced mid-season
- New champion "Chrono Guardian" becomes draft priority
- Game pace accelerates significantly

**Viewership:** Expected to break 200 million concurrent viewers`
      },
      {
        title: "💰 Esports Player Income Revealed",
        content: `**Top Player Annual Income (2026):**

- Elite Korean imports: $20M+ annual salary
- Streaming contracts: $5M-$10M
- Tournament winnings: $1M-$5M
- Merchandise royalties: $500K-$2M

**Esports vs Traditional Athletes:**
Latest data shows LoL pros average career is only 5-7 years, but peak earnings already surpass many traditional athletes!

**Post-retirement paths:**
- Coach/Analyst
- Streamer/Content Creator
- Esports Commentator
- Brand Ambassador`
      },
      {
        title: "🌍 Impact on Hong Kong & Taiwan Esports",
        content: `**Hong Kong Esports Development:**
- HK Esports Association becomes IESF member
- 2026 HK Esports Festival attracts 100K+ visitors
- "Hong Kong Attitude" qualifies for Worlds

**Taiwan Esports Pride:**
- Flash Wolves, PSG continue to shine
- Taiwanese players known as "Asia's Best Mechanics"
- Esports graduates have 100% employment rate

**Greater China Esports Exchange:**
LPL, LCK, PCS leagues have increasing exchanges, providing more opportunities for Chinese esports talents!`
      }
    ],
    tags: ["Esports", "League of Legends", "Worlds", "Prize", "2026", "Gaming"],
    relatedPosts: ["console-wars", "vr-gaming", "mobile-gaming", "retro-nostalgia"]
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
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80"
            alt="Esports Arena"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs font-bold tracking-widest mb-6">
            🎮 電玩遊戲
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            2026 電競大賽
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            冠軍獎金破億美元！
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

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden mb-12 border border-slate-700/50">
          <img
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80"
            alt="Esports Gaming"
            className="w-full h-auto"
          />
        </div>

        {/* Sections */}
        {t.sections.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">{idx === 0 ? '🏆' : idx === 1 ? '🎮' : idx === 2 ? '💰' : '🌍'}</span>
              {section.title}
            </h2>
            <div className="bg-slate-900/50 rounded-xl p-6 md:p-8 border border-slate-800/50">
              <div className="prose prose-invert prose-lg max-w-none whitespace-pre-line">
                {section.content.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="mb-4 text-gray-300 leading-relaxed">
                    {para.includes('**') ? (
                      para.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                        part.startsWith('**') && part.endsWith('**') ?
                          <strong key={i} className="text-purple-400 font-bold">{part.slice(2, -2)}</strong> : part
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
          <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-500 text-black font-bold hover:bg-purple-400 transition-colors">
            ← 返回首頁
          </a>
        </div>
      </main>
    </div>
  )
}