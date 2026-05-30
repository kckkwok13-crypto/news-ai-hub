'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "ai-image-generators",
  "id": "ep-7",
  "emoji": "🎨",
  "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-08",
  "readTime": 9,
  "translations": {
    "zh-TW": {
      "title": "AI 圖像生成器大爆發：Midjourney、DALL-E 如何改變創意產業？",
      "subtitle": "當任何人都可以通過文字描述生成專業圖作，傳統藝術家的價值該如何重新定義？",
      "sections": [
        {
          "heading": "🖌️ 創作門檻的崩塌",
          "text": [
            "視覺傳達不再是少數人的專利。這極大地解放了內容創作者的生產力，讓原本需要數周的設計稿現在只需幾分鐘。",
            "然而，這也引發了大規模的版權爭議。AI 的訓練集是否徵得了藝術家的同意？這場法律與道德的拉鋸戰才剛剛開始。"
          ]
        },
        {
          "heading": "🤖 協同而非替代",
          "text": "頂尖藝術家正在將 AI 納入工作流。AI 負責生成素材與靈感，人類負責最後的審美裁判與細節打磨。"
        }
      ],
      "conclusion": "AI 生成不是藝術的終結，而是藝術媒介的又一次大進化。"
    },
    "en": {
      "title": "The AI Art Explosion",
      "subtitle": "From prompts to masterpieces in seconds.",
      "sections": [
        {
          "heading": "🖌️ The Copyright War",
          "text": "Artists around the world are suing AI companies over unauthorized use of their work in training sets."
        }
      ],
      "conclusion": "Art is evolving from technical skill to conceptual vision."
    },
    "zh-CN": {
      "title": "AI 图像生成器大爆发",
      "subtitle": "生成式AI对创意产业的深刻重构。",
      "sections": [
        {
          "heading": "🖌️ 产业冲击",
          "text": "AI大幅降低了初级设计工作的成本，但也对原创版权保护提出了新挑战。"
        }
      ],
      "conclusion": "人类艺术家的审美直觉依然是不可替代的。"
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
