'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "cbdc-global-race",
  "id": "ep-4",
  "emoji": "🏦",
  "image": "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-15",
  "readTime": 10,
  "translations": {
    "zh-TW": {
      "title": "全球央行數字貨幣競賽：美元霸權的進化還是挑戰？",
      "subtitle": "從中國的數字人民幣到歐洲央行的數字歐元，各國央行正在加速布局。這場競賽將如何重塑全球金融秩序與個人隱私？",
      "sections": [
        {
          "heading": "💰 美元霸權的數字化防禦",
          "text": "聯準會對數字美元持謹慎態度，但全球其他國家的進度迫使美國重新考慮。數字貨幣不僅僅是支付工具，更是地緣政治的延伸。"
        },
        {
          "heading": "🕵️ 隱私與監控的平衡",
          "text": "CBDC 提供了無與倫比的支付效率，但也賦予了政府追蹤每一筆交易的能力。我們在享受便利的同時，是否正在失去最後的一點財務隱私？"
        }
      ],
      "conclusion": "CBDC 的競賽已無法回頭。未來的貨幣將是高度可編程、實時且受控的，這需要我們重新定義金錢的主權。"
    },
    "en": {
      "title": "Global CBDC Race: Evolution or Threat to the Dollar?",
      "subtitle": "How central bank digital currencies are reshaping international finance and privacy.",
      "sections": [
        {
          "heading": "💰 The e-CNY vs Digital Dollar",
          "text": "China leads the race with e-CNY, aimed at reducing reliance on US-centric settlement systems. The US is now forced to innovate its own dollar infrastructure."
        },
        {
          "heading": "🕵️ Programmable Money",
          "text": "Imagine money that expires if not spent, or can only be used for specific goods. CBDCs give governments ultimate control over social policy through currency."
        }
      ],
      "conclusion": "We are witnessing the most significant change in currency since the gold standard was abandoned. The future of money is digital, and political."
    },
    "zh-CN": {
      "title": "全球央行数字货币竞赛",
      "subtitle": "重塑全球金融秩序的数字浪潮。",
      "sections": [
        {
          "heading": "💰 地缘政治延伸",
          "text": "数字货币是国家竞争力的体现，各国央行正加速技术研发以保障货币主权。"
        }
      ],
      "conclusion": "货币的未来已来，金融效率与隐私保护将是核心议题。"
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
