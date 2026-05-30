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
      "subtitle": "當AI能夠在數秒內將一篇英文新聞翻譯成繁體中文，新聞的本質是否正在被稀釋？我們必須深入探討這場技術變革背後的隱憂與機遇。",
      "sections": [
        {
          "heading": "🤖 技術的便利與代價",
          "text": [
            "AI翻譯極大地提高了信息傳播的速度，但也帶來了語義流失和文化誤讀的風險。在全球化的資訊浪潮中，信息的準確性與文化敏感度是新聞報道的基石。然而，當前的主流翻譯模型往往側重於語言結構的對齊，而忽略了特定文化背景下的微言大義。",
            "這種「效率至上」的趨勢正導致新聞內容的同質化。讀者在不同平台看到的翻譯報道，往往具有相同的機械感與偏見。這不僅損害了讀者的閱讀體驗，更在無形中重塑了公眾對國際事務的認知框架。"
          ]
        },
        {
          "heading": "✍️ 原創價值的再思考",
          "text": "在AI時代，編輯的職責正在從單純的語言轉換轉向更深層次的背景解讀與事實核查。真正的深度報道需要人類的共情能力與批判性思維。AI可以翻譯詞彙，但無法傳達作者背後的意圖與社會關懷。我們認為，新聞機構應該堅持以「人」為核心的編輯流程。"
        }
      ],
      "conclusion": "技術應該是輔助而非替代，保留新聞的人文溫度與原創視角在AI時代尤為重要。我們呼籲業界重歸深度，不要在技術的洪流中迷失了報道的初心。"
    },
    "en": {
      "title": "Ethical Boundaries of AI News Translation",
      "subtitle": "As AI translates news in seconds, is the soul of journalism being lost to efficiency?",
      "sections": [
        {
          "heading": "🤖 Efficiency vs Nuance",
          "text": "While translation speed has improved exponentially, the cultural context and subtle undertones of original reporting are often lost in translation. LLMs tend to flatten language into a generic standard."
        },
        {
          "heading": "✍️ The Human Factor",
          "text": "True journalism requires investigation and empathy. Machines can process data, but they cannot feel the weight of a story or verify the truth through intuition."
        }
      ],
      "conclusion": "Transparency in AI usage is the only way to maintain reader trust. We must use AI to augment, not replace, the journalist."
    },
    "zh-CN": {
      "title": "AI 翻译新闻的伦理边界",
      "subtitle": "探讨AI翻译在新闻传播中的风险与原创保护。",
      "sections": [
        {
          "heading": "🤖 技术的利弊",
          "text": "AI提高了速度，但可能导致语义流失。新闻的公信力建立在准确性之上，过度依赖AI可能损害行业基石。"
        }
      ],
      "conclusion": "保留新闻的人文温度与视角是AI时代的必然要求。"
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
