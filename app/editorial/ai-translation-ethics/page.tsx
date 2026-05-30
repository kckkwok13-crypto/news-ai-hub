'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "ai-translation-ethics",
  "id": "ep-2",
  "emoji": "🤖",
  "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-25",
  "readTime": 10,
  "translations": {
    "zh-TW": {
      "title": "AI 翻譯新聞的倫理邊界：平衡技術與原創",
      "subtitle": "當AI能夠在數秒內將一篇英文新聞翻譯成繁體中文，新聞的本質是否正在被稀釋？",
      "sections": [
        {
          "heading": "🤖 技術的便利與代價",
          "text": [
            "AI翻譯極大地提高了信息傳播的速度，但也帶來了語義流失和文化誤讀的風險。",
            "讀者在不同平台看到的翻譯報道，往往具有相同的機械感與偏見。這不僅損害了讀者的閱讀體驗，更在無形中重塑了公眾對國際事務的認知框架。"
          ]
        },
        {
          "heading": "✍️ 原創價值的再思考",
          "text": "在AI時代，編輯的職責正在從單純的語言轉換轉向更深層次的背景解讀與事實核查。真正的深度報道需要人類的共情能力與批判性思維。"
        }
      ],
      "conclusion": "技術應該是輔助而非替代，保留新聞的人文溫度與原創視角在AI時代尤為重要。"
    },
    "en": {
      "title": "Ethical Boundaries of AI News Translation",
      "subtitle": "Is the soul of journalism being lost to efficiency?",
      "sections": [
        {
          "heading": "🤖 Efficiency vs Nuance",
          "text": "While translation speed has improved, cultural context is often lost."
        }
      ],
      "conclusion": "AI should augment, not replace, the journalist."
    },
    "zh-CN": {
      "title": "AI 翻译新闻的伦理边界",
      "subtitle": "探讨AI翻译在新闻传播中的风险与原创保护。",
      "sections": [
        {
          "heading": "🤖 技术的利弊",
          "text": "AI提高了速度，但可能导致语义流失。"
        }
      ],
      "conclusion": "保留新闻的人文温度是AI时代的必然要求。"
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
