'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "web3-gaming-future",
  "id": "ep-8",
  "emoji": "🎮",
  "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-06",
  "readTime": 11,
  "translations": {
    "zh-TW": {
      "title": "Web3 遊戲的未來：玩遊戲不再只是消費，而是資產所有權的覺醒",
      "subtitle": "區塊鏈遊戲經歷了泡沫破裂後，正在尋找「好玩」與「收益」的最佳契合點。",
      "sections": [
        {
          "heading": "📉 從 Play-to-Earn 到 Play-and-Own",
          "text": [
            "早期的 Axie Infinity 證實了「打金」模式不可持續。未來的 Web3 遊戲必須首先是一款高品質的遊戲。",
            "區塊鏈技術的價值應在於保障玩家對虛擬資產（如皮膚、領地）的真正所有權，並允許其在不同遊戲間互通。"
          ]
        },
        {
          "heading": "🕹️ 遊戲巨頭的布局",
          "text": "從 Ubisoft 到 Sony，傳統大廠都在謹慎測試 NFT 技術。他們試圖在不破壞遊戲平衡的前提下，引入次級市場交易。"
        }
      ],
      "conclusion": "Web3 遊戲的終局是「隱形的區塊鏈」，讓玩家在無感中享受數位資產的增值。"
    },
    "en": {
      "title": "Future of Web3 Gaming",
      "subtitle": "True ownership and the evolution of play.",
      "sections": [
        {
          "heading": "📉 Sustainability First",
          "text": "Future blockchain games will focus on fun over hype, ensuring a circular economy within the virtual world."
        }
      ],
      "conclusion": "The next GTA might just be on-chain."
    },
    "zh-CN": {
      "title": "Web3 游戏的未来",
      "subtitle": "重定义玩家与开发者的关系。",
      "sections": [
        {
          "heading": "🕹️ 资产主权",
          "text": "区块链技术让玩家真正拥有虚拟资产，不再受限于单一平台。"
        }
      ],
      "conclusion": "游戏性始终是吸引用户的核心动力。"
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
