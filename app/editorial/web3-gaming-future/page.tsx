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
      "title": "Web3 遊戲的未來：從「Play-to-Earn」到「Play-and-Own」",
      "subtitle": "區塊鏈遊戲經歷了暴利炒作與崩潰後，正在回歸遊戲的本質：好玩。",
      "sections": [
        {
          "heading": "📉 P2E 經濟模型的崩塌",
          "text": "早期 Web3 遊戲如 Axie Infinity 雖然創造了財富神話，但其本質更像資金盤，一旦新用戶停止增長，代幣價值便會崩潰。"
        },
        {
          "heading": "🕹️ 資產所有權的覺醒",
          "text": "真正具有持久力的 Web3 遊戲專注於賦予玩家對虛擬資產的真正所有權。這種所有權允許資產跨遊戲使用，為玩家創造了長期的經濟價值。"
        }
      ],
      "conclusion": "Web3 遊戲若想勝出，必須首先是一款好遊戲。區塊鏈應該是背後的技術層，而不是干擾樂趣的機制。"
    },
    "en": {
      "title": "The Future of Web3 Gaming: Beyond the Hype",
      "subtitle": "Why the next generation of blockchain games will focus on ownership over earnings.",
      "sections": [
        {
          "heading": "📉 The Death of P2E",
          "text": "The initial Play-to-Earn model was unsustainable. Future games must prioritize engagement and sustainable economies over speculative token yields."
        },
        {
          "heading": "🕹️ True Asset Ownership",
          "text": "Blockchain allows gamers to truly own their digital swords, skins, and land. This shifts power from massive game studios back to the players."
        }
      ],
      "conclusion": "The next GTA or Call of Duty will likely feature invisible blockchain elements for trading, not as a core marketing gimmick."
    },
    "zh-CN": {
      "title": "Web3 游戏的未来：玩游戏的本质",
      "subtitle": "从投机回归游戏性的行业观察。",
      "sections": [
        {
          "heading": "🕹️ 资产主权",
          "text": "区块链技术让玩家真正拥有虚拟资产，不再受限于单一游戏开发商的政策。"
        }
      ],
      "conclusion": "好玩才是王道，技术应为体验服务。"
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
