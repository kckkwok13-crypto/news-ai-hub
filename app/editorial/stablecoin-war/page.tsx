'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "stablecoin-war",
  "id": "ep-5",
  "emoji": "🪙",
  "image": "https://images.unsplash.com/photo-1611974717482-7db00d98419c?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-12",
  "readTime": 12,
  "translations": {
    "zh-TW": {
      "title": "穩定幣三國志：USDT 的霸權、USDC 的合規與算法穩定幣的幽靈",
      "subtitle": "在劇烈波動的加密市場，穩定幣是避風港，也是所有交易的中轉站。誰能贏得投資者的最終信任？這是一場關於「儲備金透明度」的終極戰爭。",
      "sections": [
        {
          "heading": "👑 USDT：難以撼動的流動性國王",
          "text": [
            "儘管多年來審計爭議不斷，但 Tether 憑藉著先發優勢與無與倫比的交易對深度，依然佔據著 70% 以上的市佔率。它是加密市場事實上的「本位幣」，卻也是最大的系統性風險點。"
          ]
        },
        {
          "heading": "🏛️ USDC：機構資金的「白區」之選",
          "text": [
            "由 Circle 與 Coinbase 推動的 USDC，走的是極致合規路線。它深受華爾街與傳統支付巨頭的喜愛，因為每一分錢都在美國監管體系的視線之下。這場戰爭本質上是「原生加密精神」與「傳統監管邏輯」的對抗。"
          ]
        },
        {
          "heading": "👻 算法穩定幣：不死不滅的理想",
          "text": [
            "從 Terra 的崩潰到新一代超額抵押協議的興起，算法穩定幣始終在試圖擺脫對法幣儲備的依賴。雖然風險極高，但這正是區塊鏈追求金融自主權的最純粹實驗。"
          ]
        }
      ],
      "conclusion": "穩定幣的未來不在於誰的技術最華麗，而在於誰的資產負債表最穩健。我們預測，未來三年內將出現由全球性銀行直接發行的穩定幣，那將是這場戰爭的「最終局」。"
    },
    "en": {
      "title": "Stablecoin War: The Battle for Trust",
      "subtitle": "USDT vs USDC and the rise of the algorithmic ghosts.",
      "sections": [
        {
          "heading": "👑 The King of Liquidity",
          "text": "Tether remains untouchable in terms of volume, despite ongoing questions about its underlying treasury holdings."
        },
        {
          "heading": "🏛️ Regulatory Moats",
          "text": "USDC is building a fortress around compliance, betting that institutional adoption will eventually flip the market in their favor."
        }
      ],
      "conclusion": "In the end, trust is the only real collateral."
    },
    "zh-CN": {
      "title": "稳定币大战：信任与合规的博弈",
      "subtitle": "探讨数字货币市场流动性核心的权力变迁。",
      "sections": [
        {
          "heading": "⚖️ 透明度之争",
          "text": "Tether的霸权与Circle的合规化路径，代表了加密货币发展的两种截然不同的意识形态。"
        }
      ],
      "conclusion": "稳定币正从投机工具向支付基石演进，合规是其唯一出路。"
    }
  }
};
  
  return (
    <EditorialArticle 
      id={articleData.id}
      image={articleData.image}
      date={articleData.date}
      readTime={articleData.readTime}
      emoji={articleData.emoji}
      translations={articleData.translations}
    />
  )
}
