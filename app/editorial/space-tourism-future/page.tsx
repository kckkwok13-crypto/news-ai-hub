'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "space-tourism-future",
  "id": "ep-11",
  "emoji": "🚀",
  "image": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-04-30",
  "readTime": 9,
  "translations": {
    "zh-TW": {
      "title": "太空旅遊的平民化：SpaceX、Blue Origin 與維珍銀河誰能走得最遠？",
      "subtitle": "從百萬美元到數十萬美元，太空不再是少數人的奢侈品。我們離大眾太空時代還有多遠？",
      "sections": [
        {
          "heading": "🚀 重複使用火箭的奇蹟",
          "text": "SpaceX 的獵鷹 9 號徹底改變了發射成本。低成本入軌是太空旅遊普及的前提，目前的競爭正從「能不能去」轉向「如何更便宜」。"
        },
        {
          "heading": "🏨 太空酒店與軌道經濟",
          "text": "未來的太空旅行不只是短暫的失重體驗，還包括在軌道站留宿。這將催生全新的服務業，從太空食品到微重力娛樂。"
        }
      ],
      "conclusion": "雖然目前仍是富人的遊戲，但技術曲線預示著，太空旅行將在三十年內變得像跨洋飛行一樣普遍。"
    },
    "en": {
      "title": "Democratizing Space: The Future of Orbital Tourism",
      "subtitle": "Will space travel ever be as common as a long-haul flight?",
      "sections": [
        {
          "heading": "🚀 Reusability is Key",
          "text": "The success of reusable booster technology is the single biggest factor driving down ticket prices for suborbital and orbital missions."
        },
        {
          "heading": "🏨 New Frontiers for Leisure",
          "text": "Beyond the thrill of G-force, the next phase involves luxury orbital hotels where guests can gaze at the Earth for days, not just minutes."
        }
      ],
      "conclusion": "Space is no longer the final frontier; it is the next destination for the global middle class."
    },
    "zh-CN": {
      "title": "太空旅游的平民化：技术竞逐",
      "subtitle": "解析私人航天企业的商业逻辑。",
      "sections": [
        {
          "heading": "🚀 成本骤降",
          "text": "技术创新正将航天门槛迅速降低，开启了人类作为多行星物种的初级阶段。"
        }
      ],
      "conclusion": "星辰大海不再遥远，商业航天是大势所趋。"
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
