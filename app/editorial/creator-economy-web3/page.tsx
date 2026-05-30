'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "creator-economy-web3",
  "id": "ep-15",
  "emoji": "✍️",
  "image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-04-22",
  "readTime": 12,
  "translations": {
    "zh-TW": {
      "title": "創作者經濟與 Web3：去中心化的創作新時代",
      "subtitle": "區塊鏈技術正在改變創作者與粉絲的關係，這場革命將重新定義創作的價值與分配。",
      "sections": [
        {
          "heading": "⛓️ 消除中間人的抽成",
          "text": "傳統平台抽成高達 30-50%。透過 NFT 與社交代幣，創作者可以直接與粉絲交易，獲取更高比例的收益，並賦予粉絲共同成長的動力。"
        },
        {
          "heading": "🎨 二次交易版稅的意義",
          "text": "Web3 讓藝術家能從作品的每一次轉手中獲取收益。這激勵了長線內容的創作，而非短期的流量收割。"
        }
      ],
      "conclusion": "Web3 為創作者提供了真正的資產自主權。這不僅是技術的改變，更是內容產業利益結構的重組。"
    },
    "en": {
      "title": "The Creator Economy and Web3: A New Era",
      "subtitle": "How blockchain provides writers and artists with true asset sovereignty.",
      "sections": [
        {
          "heading": "⛓️ Direct Monetization",
          "text": "By removing the \"platform tax,\" creators can thrive on much smaller, more dedicated fanbases. The middle-man era is coming to an end."
        },
        {
          "heading": "🎨 Programmable Royalties",
          "text": "The ability to earn from secondary sales ensures that creators benefit from the long-term appreciation of their work, aligning their interests with early supporters."
        }
      ],
      "conclusion": "Web3 is turning content into capital, allowing the creative class to own the platforms they build."
    },
    "zh-CN": {
      "title": "创作者经济与 Web3：去中心化时代",
      "subtitle": "重新定义创作价值与粉丝经济。",
      "sections": [
        {
          "heading": "✍️ 价值回归",
          "text": "去中心化技术让创作者摆脱平台束缚，实现了收益的直接获取与版权的精细管理。"
        }
      ],
      "conclusion": "权力归还创作者，是数字经济的必然进化。"
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
