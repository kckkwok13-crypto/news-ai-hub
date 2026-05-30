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
      "subtitle": "數字人民幣 (e-CNY) 與潛在的數字美元，誰將主導未來的全球支付體系？",
      "sections": [
        {
          "heading": "💳 支付效率的革命",
          "text": [
            "CBDC 能夠實現點對點的即時結算，無需通過層層清算銀行。這將極大降低跨國貿易成本。",
            "然而，這種效率的背後是極致的中心化。央行將掌握每一分錢的流向，這對隱私保護提出了巨大挑戰。"
          ]
        },
        {
          "heading": "🌍 地緣政治新邊界",
          "text": "數字貨幣是軟實力的延伸。領先部署 CBDC 的國家，有望建立新的貿易清算網絡，從而繞過傳統的 SWIFT 系統。"
        }
      ],
      "conclusion": "CBDC 的興起預示著金融主權的重新分配，這不僅是技術賽跑，更是大國實力的較量。"
    },
    "en": {
      "title": "Global CBDC Race",
      "subtitle": "Sovereignty and strategy in the digital age.",
      "sections": [
        {
          "heading": "💳 Programmable Money",
          "text": "The ability to code conditions into currency opens up new avenues for social and economic policy."
        }
      ],
      "conclusion": "The very nature of money is changing forever."
    },
    "zh-CN": {
      "title": "全球央行数字货币竞赛",
      "subtitle": "重塑全球金融秩序的数字浪潮。",
      "sections": [
        {
          "heading": "🌍 国际影响",
          "text": "数字货币的普及将提升国际结算效率，并对现有货币体系产生深远影响。"
        }
      ],
      "conclusion": "金融科技正在定义国家竞争的新高地。"
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
