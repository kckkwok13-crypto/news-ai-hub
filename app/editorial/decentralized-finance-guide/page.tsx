'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "decentralized-finance-guide",
  "id": "ep-6",
  "emoji": "💱",
  "image": "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-10",
  "readTime": 13,
  "translations": {
    "zh-TW": {
      "title": "DeFi 深度指南：金融民主化還是下一場投機泡沫？",
      "subtitle": "無需許可、無須審核、24/7 運作。DeFi 正試圖將華爾街搬到區塊鏈上。",
      "sections": [
        {
          "heading": "🏦 代碼即法律",
          "text": [
            "DeFi 利用智能合約取代了銀行的中間人。借貸、交易與保險現在可以在鏈上自動執行，大幅降低了營運成本。",
            "但同時，黑客攻擊、智能合約漏洞也讓用戶面臨本金全無的風險。這是一個高度考驗技術辨別能力的領域。"
          ]
        },
        {
          "heading": "🌊 流動性挖礦的終局",
          "text": "靠高額補貼吸引用戶的時代已過去。真正有生命力的 DeFi 協議必須創造真實的借貸需求與收入。"
        }
      ],
      "conclusion": "DeFi 正在經歷從投機向實用的轉型，未來將與傳統金融深度融合。"
    },
    "en": {
      "title": "DeFi Deep Dive",
      "subtitle": "Building a parallel financial system from scratch.",
      "sections": [
        {
          "heading": "🏦 Permissionless Innovation",
          "text": "DeFi allows anyone with an internet connection to access financial products that were previously reserved for the 1%."
        }
      ],
      "conclusion": "The genie is out of the bottle; decentralized finance is here to stay."
    },
    "zh-CN": {
      "title": "DeFi 深度指南",
      "subtitle": "去中心化金融的现状与未来。",
      "sections": [
        {
          "heading": "🏦 核心机制",
          "text": "通过去中心化的流动性池，DeFi实现了金融服务的民主化与高效化。"
        }
      ],
      "conclusion": "风控能力将决定DeFi项目的长远寿命。"
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
