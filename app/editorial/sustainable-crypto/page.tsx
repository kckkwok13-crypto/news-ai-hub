'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "sustainable-crypto",
  "id": "ep-12",
  "emoji": "🌱",
  "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-04-28",
  "readTime": 10,
  "translations": {
    "zh-TW": {
      "title": "永續加密貨幣：區塊鏈如何實現碳中和承諾？",
      "subtitle": "從挖礦能耗爭議到權益證明 (PoS) 的普及，區塊鏈正在進行一場綠色革命。",
      "sections": [
        {
          "heading": "🔋 以太坊合併的啟示",
          "text": "以太坊從 PoW 轉向 PoS 後，能耗降低了 99.9%。這證明了高性能與低碳排是可以並存的，為整個行業樹立了標竿。"
        },
        {
          "heading": "☀️ 綠色挖礦的興起",
          "text": "比特幣挖礦正在轉向利用過剩的可再生能源，如水力、風力與地熱。這不僅減少了排放，還幫助穩定了電網負荷。"
        }
      ],
      "conclusion": "Web3 的未來必須是綠色的。那些無法適應 ESG 標準的鏈，將逐漸失去大型機構投資者的青睞。"
    },
    "en": {
      "title": "Sustainable Crypto: The Blockchain Green Revolution",
      "subtitle": "Can digital assets ever truly be carbon-neutral?",
      "sections": [
        {
          "heading": "🔋 The Death of High Energy Proof-of-Work",
          "text": "Most new protocols are choosing Proof-of-Stake to avoid the environmental backlash that Bitcoin faced. This shift is essential for mainstream adoption."
        },
        {
          "heading": "☀️ Capturing Wasted Energy",
          "text": "Mining operations are increasingly being integrated into renewable energy grids to soak up excess capacity, making them part of the solution, not the problem."
        }
      ],
      "conclusion": "Sustainability is now a core requirement for long-term survival in the crypto ecosystem."
    },
    "zh-CN": {
      "title": "永续加密货币：绿色区块链",
      "subtitle": "加密技术与环境保护的平衡点。",
      "sections": [
        {
          "heading": "🌱 共识机制变革",
          "text": "从挖矿转向权益证明，行业正经历深刻的能效转型，以符合全球减碳目标。"
        }
      ],
      "conclusion": "技术进步让金融与环保不再是对立面。"
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
