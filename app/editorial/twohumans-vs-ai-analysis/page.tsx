'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "twohumans-vs-ai-analysis",
  "id": "ep-3",
  "emoji": "⚖️",
  "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-20",
  "readTime": 11,
  "translations": {
    "zh-TW": {
      "title": "新聞App的AI分析功能：人與算法的真相博弈",
      "subtitle": "當演算法可以瞬間總結全球新聞，「人性」與「效率」之間的取捨，究竟誰更能代表真相？這是一場關於解讀權的爭奪戰。",
      "sections": [
        {
          "heading": "🔍 算法的冷峻與偏見",
          "text": "AI 摘要看似中立，實則深受訓練數據的影響。它往往傾向於選取最符合主流敘事的關鍵點，而忽略了那些邊緣但極具價值的細節。這種「過濾泡泡」的強化，正在削弱讀者的獨立思考能力。"
        },
        {
          "heading": "🧠 人類的共情與洞察",
          "text": "相比之下，人類編輯能從文字背後讀出情緒與隱含的政治意圖。兩個不同背景的人對同一篇新聞的解讀可能完全不同，而這種差異性正是民主社會多元討論的基礎。"
        }
      ],
      "conclusion": "我們不應將解讀權完全交給算法。AI 應該是我們整理資訊的助手，而分析與判斷的最終權力，必須保留在人類手中。"
    },
    "en": {
      "title": "AI Analysis in News Apps: Humans vs Algorithms",
      "subtitle": "Who represents the truth: a machine or a human analyst?",
      "sections": [
        {
          "heading": "🔍 Algorithmic Bias",
          "text": "AI models are trained on massive datasets which inherently contain human biases. When an AI summarizes a political crisis, it may unknowingly favor one narrative over another based on its training weights."
        },
        {
          "heading": "🧠 Human Intuition",
          "text": "Humans can read between the lines. We understand irony, historical grudges, and emotional manipulation—things an AI often misses or misinterprets."
        }
      ],
      "conclusion": "Diversified human analysis remains the backbone of a healthy information ecosystem. Machines provide data; humans provide meaning."
    },
    "zh-CN": {
      "title": "新闻App的AI分析功能：人与算法的博弈",
      "subtitle": "算法摘要与人工解读的深度对比。",
      "sections": [
        {
          "heading": "🔍 算法的局限",
          "text": "AI摘要可能强化现有偏见，因为它倾向于呈现出现频率最高的信息，而非最有价值的信息。"
        }
      ],
      "conclusion": "工具可以更先进，但判断力不能被替代。"
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
