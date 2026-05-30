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
      "title": "DeFi 深度指南：它是金融民主化還是下一場投機泡沫？",
      "subtitle": "無需許可、無須審核、24/7 運作。DeFi 正試圖將華爾街搬到區塊鏈上，但風險同樣巨大。",
      "sections": [
        {
          "heading": "🏦 代碼即法律",
          "text": "DeFi 利用智能合約取代了銀行的中間人。借貸、交易與保險現在可以在鏈上自動執行，大幅降低了營運成本並提高了效率。"
        },
        {
          "heading": "💣 隱藏的風險與漏洞",
          "text": "智能合約漏洞、閃電貸攻擊、無常損失。DeFi 是金融創新的前沿，也是黑客的獵場。對於非專業用戶來說，進入門檻依然過高。"
        }
      ],
      "conclusion": "DeFi 正在經歷從投機向實用的轉型。當現實資產 (RWA) 大規模上鏈時，DeFi 將真正改變全球的借貸市場。"
    },
    "en": {
      "title": "DeFi Deep Dive: Financial Revolution or Bubble?",
      "subtitle": "Understanding the mechanics, risks, and rewards of permissionless finance.",
      "sections": [
        {
          "heading": "🏦 Banking Without Banks",
          "text": "Protocols like Aave and Uniswap allow users to borrow and swap assets directly. This peer-to-peer model challenges the very core of traditional commercial banking."
        },
        {
          "heading": "💣 Systemic Risks",
          "text": "Smart contract bugs can drain millions in seconds. DeFi remains a high-risk, high-reward playground that requires significant technical literacy."
        }
      ],
      "conclusion": "The integration of Real World Assets (RWA) is the next frontier for DeFi, bridging the gap between crypto and the multi-trillion dollar traditional credit market."
    },
    "zh-CN": {
      "title": "DeFi 深度指南：金融民主化",
      "subtitle": "解析去中心化金融的底层逻辑。",
      "sections": [
        {
          "heading": "🏦 代码驱动",
          "text": "DeFi用智能合约替代中介，实现了24小时不间断的金融服务，大幅提升了资本效率。"
        }
      ],
      "conclusion": "DeFi将与传统金融长期共存，风险管理是重中之重。"
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
