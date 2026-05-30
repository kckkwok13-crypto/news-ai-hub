'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "stablecoin-war",
  "id": "ep-5",
  "emoji": "🪙",
  "image": "https://images.unsplash.com/photo-1611974717482-7db00d98419c?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-12",
  "readTime": 11,
  "translations": {
    "zh-TW": {
      "title": "穩定幣大戰：USDT、USDC 與加密世界的信任基石",
      "subtitle": "在劇烈波動的加密市場，穩定幣是避風港，也是所有交易的中轉站。",
      "sections": [
        {
          "heading": "⚖️ 儲備透明度的博弈",
          "text": [
            "Tether 的市場地位雖然難以撼動，但其審計黑箱始終是懸在行業頭上的利劍。",
            "相比之下，Circle 的 USDC 走合規路線，雖然在去中心化精神上有所妥協，卻贏得了機構資金的信任。"
          ]
        },
        {
          "heading": "🚀 算法穩定幣的重生？",
          "text": "在 Luna 崩潰後，市場對算法穩定幣極度恐懼。但純抵押模式的低效也促使開發者尋找更優的「中間道路」。"
        }
      ],
      "conclusion": "穩定幣的勝負最終取決於誰能在「安全」與「流動性」之間找到最佳平衡點。"
    },
    "en": {
      "title": "The Stablecoin War",
      "subtitle": "Who wins the battle for digital liquidity?",
      "sections": [
        {
          "heading": "⚖️ Regulatory Moats",
          "text": "The US government is increasingly treating stablecoin issuers like traditional banks, creating a high barrier to entry."
        }
      ],
      "conclusion": "Compliance is the new competitive edge."
    },
    "zh-CN": {
      "title": "稳定币大战：谁能笑到最后",
      "subtitle": "探讨数字资产市场的流动性核心。",
      "sections": [
        {
          "heading": "🚀 技术演进",
          "text": "从单一的法币抵押到多元化的资产篮子，稳定币的形式正在不断进化。"
        }
      ],
      "conclusion": "信任是稳定币唯一的硬通货。"
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
