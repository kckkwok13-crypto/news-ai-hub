'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "twohumans-vs-ai-analysis",
  "id": "ep-3",
  "emoji": "⚖️",
  "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-20",
  "readTime": 14,
  "translations": {
    "zh-TW": {
      "title": "一場關於「解讀權」的殘酷實驗：兩個專業人士 VS 一個全能 AI",
      "subtitle": "我們模擬了一場高度複雜的宏觀經濟決策分析。結果令人震撼：AI 贏在了邏輯，卻輸在了「預測不可知性」的人類直覺。",
      "sections": [
        {
          "heading": "🧪 實驗設計：從數據到洞察",
          "text": [
            "實驗選取了一宗真實發生的半導體行業併購案。我們請來了具備 20 年經驗的投資分析師和一位社會學教授，與當時最強的 LLM 模型進行對抗。分析師側重財報與供應鏈，教授側重地緣政治，而 AI 則試圖綜合所有數據。"
          ]
        },
        {
          "heading": "📊 AI 的優勢：結構化思考的極致",
          "text": [
            "在整理時間線、識別股權結構及掃描歷史相關判例方面，AI 展現了令人恐懼的效率。它在 10 秒內生成的摘要，比人類團隊 4 小時的工作還要精確。"
          ]
        },
        {
          "heading": "💡 人類的逆襲：聽懂「沈默的訊號」",
          "text": [
            "然而，當進入「非理性預測」環節時，人類分析師憑藉著對行業領袖性格的了解以及對飯局流言的辨別，成功預判了併購案的流產。這種基於非結構化社會訊號的「直覺」，是目前任何算力都無法模擬的「暗知識」。"
          ]
        }
      ],
      "conclusion": "我們不需要擔心被 AI 取代，我們需要擔心的是失去那份對「不可量化世界」的敏感度。人機協同才是解鎖未來的唯一鑰匙。本篇深度分析旨在重塑您對判斷力的信心。"
    },
    "en": {
      "title": "Human Intuition vs Machine Logic: A Showdown",
      "subtitle": "Who wins when the stakes are high and data is incomplete?",
      "sections": [
        {
          "heading": "🧪 The Setup",
          "text": "We compared the performance of seasoned market experts against a state-of-the-art AI on a complex M&A case study."
        },
        {
          "heading": "📊 The Result",
          "text": "AI dominated data processing, but humans correctly predicted the outcome by reading subtle social cues that the data couldn't capture."
        }
      ],
      "conclusion": "Data provides a map; intuition provides the direction."
    },
    "zh-CN": {
      "title": "解读权的博弈：专业人士与AI的深度对比",
      "subtitle": "测试人类直觉在不可预测市场中的独特价值。",
      "sections": [
        {
          "heading": "🧪 实验实录",
          "text": "在处理海量事实信息时，AI几乎是无敌的，但在处理非结构化的人际博弈时，人类依然占据上风。"
        }
      ],
      "conclusion": "工具是逻辑的延伸，直觉是文明的底牌。"
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
