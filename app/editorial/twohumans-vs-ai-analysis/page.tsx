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
      "subtitle": "兩位不同背景的專業人士與最強AI對同一事件的解讀，誰更能代表真相？",
      "sections": [
        {
          "heading": "🔍 實驗背景",
          "text": [
            "我們選取了近期一宗複雜的國際併購案，分別請一位資深財經記者、一位市場分析師以及當前最強的 AI 模型進行深度分析。",
            "結果顯示，AI 在整理數據和時間線方面無懈可擊，但在捕捉交易背後的「權力鬥爭」與「人脈網絡」方面，卻遠遜於人類專家。"
          ]
        },
        {
          "heading": "💡 洞察力的差異",
          "text": "資深記者能聽出新聞稿中未說出口的「言外之意」，而分析師能看出數據異常背後的市場恐慌。這些屬於「非結構化知識」的範疇，是目前 AI 尚未攻克的領域。"
        }
      ],
      "conclusion": "AI 能給出完美的摘要，但只有人類能提供深刻的解釋。未來的分析應是「人機協同」的。"
    },
    "en": {
      "title": "Two Humans VS AI Analysis",
      "subtitle": "A controlled experiment on the depth of news interpretation.",
      "sections": [
        {
          "heading": "🔍 The Experiment",
          "text": "AI excelled at data extraction but failed to capture the nuances of corporate politics that the humans identified immediately."
        }
      ],
      "conclusion": "Meaning is a human construct that machines only mimic."
    },
    "zh-CN": {
      "title": "新闻App的AI分析功能",
      "subtitle": "算法摘要与人工解读的实测对比。",
      "sections": [
        {
          "heading": "🔍 实测反馈",
          "text": "AI在处理事实性信息时表现优异，但在解读深层动机时显得生硬。"
        }
      ],
      "conclusion": "深度阅读仍需回归人的思考。"
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
