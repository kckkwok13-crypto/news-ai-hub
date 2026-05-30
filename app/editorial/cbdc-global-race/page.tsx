'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "cbdc-global-race",
  "id": "ep-4",
  "emoji": "🏦",
  "image": "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-15",
  "readTime": 13,
  "translations": {
    "zh-TW": {
      "title": "全球 CBDC 大競賽：數位時代的「佈雷頓森林」時刻？",
      "subtitle": "當貨幣變成代碼，央行將獲得對每一分錢的絕對掌控力。這場競賽將重塑全球貿易結算，並挑戰個人隱私的最後邊界。",
      "sections": [
        {
          "heading": "💰 貨幣的可編程性：天使還是魔鬼？",
          "text": [
            "想像一下，你的錢可以設定過期時間，或者只能用於購買特定商品。這就是 CBDC（央行數位貨幣）帶來的「可編程金錢」。這雖然為財政政策精準投放提供了可能，但也意味著政府可以實時關閉任何人的錢包。"
          ]
        },
        {
          "heading": "🌏 地緣博弈：繞過 SWIFT 的暗門",
          "text": [
            "中國的數位人民幣 (e-CNY) 正試圖在跨境結算中建立新的標準。這對於去美元化浪潮而言，無疑是投下了一顆深水炸彈。未來的全球金融體系將不再是單一中心，而是多個數位貨幣區域的並立。"
          ]
        },
        {
          "heading": "🕵️ 隱私的終結：每一筆交易都有眼睛",
          "text": [
            "與實體現金不同，CBDC 的每一筆流水在央行端都是透明的。如何在金融反恐與個人財產隱私之間取得平衡？這將是數位時代最激烈的立法戰場。"
          ]
        }
      ],
      "conclusion": "CBDC 不是技術升級，它是權力的重新分配。我們正處於金錢本質發生劇變的前夜，理解這場競賽，就是理解未來十年的財富流向。"
    },
    "en": {
      "title": "The Global CBDC Race: New World Order",
      "subtitle": "Central Bank Digital Currencies are rewriting the rules of global liquidity.",
      "sections": [
        {
          "heading": "💰 Programmable Money",
          "text": "Governments now have the tech to implement expiration dates or restricted usage on currency, fundamentally changing social engineering."
        },
        {
          "heading": "🌍 The End of Dominance",
          "text": "Regional digital currency blocs are emerging to challenge the decade-long supremacy of the US dollar in international trade."
        }
      ],
      "conclusion": "Financial sovereignty is moving from the bank vault to the source code."
    },
    "zh-CN": {
      "title": "全球央行数字货币竞赛",
      "subtitle": "重新定义金钱的主权与流动性。",
      "sections": [
        {
          "heading": "💰 货币的可编程化",
          "text": "CBDC让金钱具备了前所未有的政策传导效率，但也对个人隐私保护提出了巨大挑战。"
        }
      ],
      "conclusion": "数字时代金融主权的重构，将深刻改变每个人的财富未来。"
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
