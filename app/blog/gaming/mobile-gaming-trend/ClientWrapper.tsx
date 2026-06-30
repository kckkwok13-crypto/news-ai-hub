'use client'

import { useState } from 'react'

const content = {
  'zh-TW': {
    intro: `手機遊戲已經唔再係「免費垃圾」既代名詞！2026年，手遊市場規模突破1500億美元，正式超越 PC 遊戲！

《王者榮耀》、《原神》、《英雄聯盟手遊》證明手機一樣可以做到 3A 級體驗！`,
    sections: [
      {
        title: "📱 2026 手遊市場數據",
        content: `**全球手遊市場（2026）：**
- 市場規模：1,500億美元
- 用戶數量：35億人
- 佔遊戲市場份額：55%
- 平均每用戶收入（ARPU）：43美元

**市場佔有率：**
- 騰訊遊戲：35%
- 網易：15%
- 米哈游：12%
- 其他：38%

**手遊平台分佈：**
- iOS：45%
- Android：55%

香港/台灣手遊玩家超过800萬人，係全球最活躍既手遊市場之一！`
      },
      {
        title: "🎮 2026 人氣手遊排行",
        content: `**2026年度全球人氣手遊 Top 10：**

1. 《王者榮耀》- Moba 類型不敗神話
2. 《原神》- 開放世界手遊標竿
3. 《英雄聯盟手遊》- Riot 官方出品
4. 《PUBG Mobile》- 食雞手遊版
5. 《糖果繽紛樂》- 經典消除遊戲
6. 《Among Us》- 派對遊戲爆紅
7. 《Genshin Impact》- 全球收入冠軍
8. 《Honor of Kings》- 騰訊王牌
9. 《Free Fire》- 免費吃雞首選
10. 《Roblox》- UGC 遊戲平台

**香港/台灣特有現象：**
- 《灌籃高手》手遊極受歡迎
- 網銀手遊（手機麻將、麻雀）市場龐大
- 日本轉蛋文化影響深遠`
      },
      {
        title: "💰 手遊商業模式大解密",
        content: `**手遊賺錢方法：**

**1. 免費 + 內購（Freemium）**
- 遊戲免費下載
- 道具/角色收費
- 呢個模式佔手遊收入85%

**2.  Battle Pass（戰鬥通行證）**
- 每月/每季收費
- 皮膚、道具解鎖
- 《王者榮耀》每季收入破億美元

**3. 廣告變現**
- 短視頻廣告
- 激勵視頻廣告
- 休閒遊戲主要收入來源

**4. 轉蛋/抽卡**
- 亞洲市場主要模式
- 爭議最大但收入最高
- 各國相繼立法監管

**手遊 vs 主機遊戲：**
手遊平均每用戶收入雖然較低，但用戶基數大，總收入已經超越所有主機遊戲！`
      },
      {
        title: "🚀 2026 手遊趨勢預測",
        content: `**手遊未來發展方向：**

**1. 雲遊戲加持**
- Google Stadia、騰訊START登陸手機
- 高品質遊戲唔再需要高價手機
- 5G普及加速雲遊戲發展

**2. 跨平台（Cross-play）**
- 手遊、PC、Console互通
- 《原神》已實現三平台
- 未來所有大作都會跨平台

**3. AI 遊戲助手**
- AI隊友、AI教練
- 智能難度調整
- 個人化遊戲體驗

**4. 區塊鏈遊戲**
- NFT道具交易
- Play-to-Earn模式
- 仍然存在爭議

**結論：**
手遊唔會取代PC/Console，但會繼續擴大市場份額，成為最多人接觸既遊戲平台！`
      }
    ],
    tags: ["手遊", "手機遊戲", "原神", "王者榮耀", "2026", "電玩"],
    relatedPosts: ["console-wars", "esports-tournament", "vr-gaming", "retro-nostalgia"]
  },
  'zh-CN': {
    intro: `手机游戏已经不再是「免费垃圾」的代名词！2026年，手游市场规模突破1500亿美元，正式超越 PC 游戏！

《王者荣耀》、《原神》、《英雄联盟手游》证明手机一样可以做到 3A 级体验！`,
    sections: [
      {
        title: "📱 2026 手游市场数据",
        content: `**全球手游市场（2026）：**
- 市场规模：1,500亿美元
- 用户数量：35亿人
- 占游戏市场份额：55%
- 平均每用户收入（ARPU）：43美元

**市场占有率：**
- 腾讯游戏：35%
- 网易：15%
- 米哈游：12%
- 其他：38%

**手游平台分布：**
- iOS：45%
- Android：55%

香港/台湾手游玩家超过800万人，是全球最活跃的手游市场之一！`
      },
      {
        title: "🎮 2026 人气手游排行",
        content: `**2026年度全球人气手游 Top 10：**

1. 《王者荣耀》- Moba 类型不败神话
2. 《原神》- 开放世界手游标杆
3. 《英雄联盟手游》- Riot 官方出品
4. 《PUBG Mobile》- 食鸡手游版
5. 《糖果缤纷乐》- 经典消除游戏
6. 《Among Us》- 派对游戏爆红
7. 《Genshin Impact》- 全球收入冠军
8. 《Honor of Kings》- 腾讯王牌
9. 《Free Fire》- 免费吃鸡首选
10. 《Roblox》- UGC 游戏平台

**香港/台湾特有现象：**
- 《灌篮高手》手游极受欢迎
- 网银手游（手机麻将、麻雀）市场庞大
- 日本转蛋文化影响深远`
      },
      {
        title: "💰 手游商业模式大解密",
        content: `**手游赚钱方法：**

**1. 免费 + 内购（Freemium）**
- 游戏免费下载
- 道具/角色收费
- 这个模式占手游收入85%

**2. Battle Pass（战斗通行证）**
- 每月/每季收费
- 皮肤、道具解锁
- 《王者荣耀》每季收入破亿美元

**3. 广告变现**
- 短视频广告
- 激励视频广告
- 休闲游戏主要收入来源

**4. 转蛋/抽卡**
- 亚洲市场主要模式
- 争议最大但收入最高
- 各国相继立法监管

**手游 vs 主机游戏：**
手游平均每用户收入虽然较低，但用户基数大，总收入已经超越所有主机游戏！`
      },
      {
        title: "🚀 2026 手游趋势预测",
        content: `**手游未来发展方向：**

**1. 云游戏加持**
- Google Stadia、腾讯START登陆手机
- 高品质游戏不再需要高价手机
- 5G普及加速云游戏发展

**2. 跨平台（Cross-play）**
- 手游、PC、Console互通
- 《原神》已实现三平台
- 未来所有大作都会跨平台

**3. AI 游戏助手**
- AI队友、AI教练
- 智能难度调整
- 个性化游戏体验

**4. 区块链游戏**
- NFT道具交易
- Play-to-Earn模式
- 仍然存在争议

**结论：**
手游不会取代PC/Console，但会继续扩大市场份额，成为最多人接触的游戏平台！`
      }
    ],
    tags: ["手游", "手机游戏", "原神", "王者荣耀", "2026", "电玩"],
    relatedPosts: ["console-wars", "esports-tournament", "vr-gaming", "retro-nostalgia"]
  },
  'en': {
    intro: `Mobile gaming is no longer synonymous with "free garbage"! In 2026, the mobile gaming market exceeds $150 billion, officially surpassing PC gaming!

Games like Honor of Kings, Genshin Impact, and League of Legends Wild Rift prove mobile can deliver AAA experiences!`,
    sections: [
      {
        title: "📱 2026 Mobile Gaming Market Data",
        content: `**Global Mobile Gaming Market (2026):**
- Market size: $150 billion
- User base: 3.5 billion
- Share of gaming market: 55%
- ARPU: $43

**Market Share:**
- Tencent Games: 35%
- NetEase: 15%
- miHoYo: 12%
- Others: 38%

**Platform Distribution:**
- iOS: 45%
- Android: 55%

Hong Kong/Taiwan has over 8 million mobile gamers - one of the most active mobile gaming markets globally!`
      },
      {
        title: "🎮 2026 Most Popular Mobile Games",
        content: `**2026 Global Top 10 Mobile Games:**

1. Honor of Kings - Moba legend continues
2. Genshin Impact - Open world mobile benchmark
3. League of Legends Wild Rift - Riot's official mobile game
4. PUBG Mobile - Battle royale mobile king
5. Candy Crush Saga - Classic puzzle game
6. Among Us - Party game phenomenon
7. Genshin Impact (int'l) - Revenue champion
8. Honor of Kings - Tencent's cash cow
9. Free Fire - Free battle royale choice
10. Roblox - UGC gaming platform

**HK/TW Specific Trends:**
- Slam Dunk mobile game extremely popular
- Online mahjong/tetris market huge
- Japanese gacha culture deeply influential`
      },
      {
        title: "💰 Mobile Gaming Business Models Decoded",
        content: `**How Mobile Games Make Money:**

**1. Freemium Model**
- Free to download
- In-app purchases for items/characters
- Accounts for 85% of mobile revenue

**2. Battle Pass**
- Monthly/seasonal subscription
- Skins and items unlock
- Honor of Kings earns $100M+ per season

**3. Ad Monetization**
- Short video ads
- Rewarded video ads
- Main income for casual games

**4. Gacha/Loot Boxes**
- Major model in Asian market
- Most controversial but highest revenue
- Countries legislating to regulate

**Mobile vs Console:**
While mobile ARPU is lower, the massive user base means total revenue surpasses all console games combined!`
      },
      {
        title: "🚀 2026 Mobile Gaming Trend Predictions",
        content: `**Future of Mobile Gaming:**

**1. Cloud Gaming Integration**
- Google Stadia, Tencent START come to mobile
- High-quality games without expensive phones
- 5G accelerates cloud gaming

**2. Cross-play Standard**
- Mobile, PC, Console play together
- Genshin Impact already on all 3 platforms
- All major titles will support cross-play

**3. AI Gaming Assistants**
- AI teammates, AI coaches
- Smart difficulty adjustment
- Personalized gaming experience

**4. Blockchain Gaming**
- NFT item trading
- Play-to-Earn model
- Still controversial

**Conclusion:**
Mobile won't replace PC/Console, but will continue growing to become the most accessible gaming platform!`
      }
    ],
    tags: ["Mobile Gaming", "Genshin Impact", "Honor of Kings", "2026", "Gaming"],
    relatedPosts: ["console-wars", "esports-tournament", "vr-gaming", "retro-nostalgia"]
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
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&q=80"
            alt="Mobile Gaming"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold tracking-widest mb-6">
            🎮 電玩遊戲
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            手遊時代
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            手機遊戲取代 PC/Console？
          </p>
        </div>
      </header>

      {/* Language Selector */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        {(['zh-TW', 'zh-CN', 'en'] as const).map(l => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${lang === l ? 'bg-green-500 text-black' : 'bg-slate-800 text-gray-400 hover:bg-slate-700'}`}
          >
            {l === 'zh-TW' ? '繁中' : l === 'zh-CN' ? '简体' : 'EN'}
          </button>
        ))}
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-2xl p-8 mb-12 border border-green-500/20">
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {t.intro}
          </p>
        </div>

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden mb-6 border border-slate-700/50">
          <img
            src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=1200&q=80"
            alt="Mobile Gaming"
            className="w-full h-auto"
          />
        </div>

        {/* Featured Video */}
        <div className="rounded-2xl overflow-hidden mb-12 border border-green-500/30 bg-gradient-to-r from-green-900/20 to-teal-900/20">
          <div className="flex items-center gap-3 px-5 py-3 border-b border-green-500/20">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span className="text-green-400 text-sm font-bold">🎬 相關影片推薦</span>
          </div>
          <div className="relative aspect-video">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"
              alt="Mobile Gaming Trends"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white text-sm font-medium">手遊時代</p>
                <p className="text-gray-300 text-xs mt-1">手機遊戲市場趨勢</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        {t.sections.map((section, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">{idx === 0 ? '📱' : idx === 1 ? '🎮' : idx === 2 ? '💰' : '🚀'}</span>
              {section.title}
            </h2>
            <div className="bg-slate-900/50 rounded-xl p-6 md:p-8 border border-slate-800/50">
              <div className="prose prose-invert prose-lg max-w-none whitespace-pre-line">
                {section.content.split('\n\n').map((para, pIdx) => (
                  <p key={pIdx} className="mb-4 text-gray-300 leading-relaxed">
                    {para.includes('**') ? (
                      para.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
                        part.startsWith('**') && part.endsWith('**') ?
                          <strong key={i} className="text-green-400 font-bold">{part.slice(2, -2)}</strong> : part
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
          <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 text-black font-bold hover:bg-green-400 transition-colors">
            ← 返回首頁
          </a>
        </div>
      </main>
    </div>
  )
}