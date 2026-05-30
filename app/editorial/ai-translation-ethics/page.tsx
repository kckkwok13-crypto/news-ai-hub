'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "ai-translation-ethics",
  "id": "ep-2",
  "emoji": "🤖",
  "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-25",
  "readTime": 12,
  "translations": {
    "zh-TW": {
      "title": "AI 翻譯新聞的倫理邊界：在「效率」與「真實」的懸崖邊行走",
      "subtitle": "當機器翻譯的速度追上了訊息產出的頻率，人類記者正陷入一場前所未有的尊嚴危機。我們是在傳播真相，還是在複刻算法的偏見？",
      "sections": [
        {
          "heading": "🤖 效率的毒藥：當語義被過度簡化",
          "text": [
            "我們必須承認，AI 在處理海量訊息時展現了神一般的速度。然而，新聞的精髓往往隱藏在辭藻的微小顫動中。AI 翻譯往往會為了「通順」而抹除特定文化背景下的微言大義。例如，一篇關於中東戰事的報導，AI 翻譯後的用詞可能在無意中帶入了大模型的訓練偏見，將複雜的人道主義討論扁平化為簡單的衝突對抗。"
          ]
        },
        {
          "heading": "✍️ 記者作為「最後的看門人」",
          "text": [
            "在 AI 時代，編輯的職責不再是翻譯單詞，而是審核「事實的脈絡」。真正的深度報導需要人類的共情能力與批判性思維。我們認為，AI 應該是記者的超級增壓器，而非替代品。如果媒體完全放棄人工校對，那麼我們傳播的就不再是新聞，而是經過數次數據過濾後的「加工品」。"
          ]
        },
        {
          "heading": "🔍 透明度宣言：讀者的知情權高於一切",
          "text": [
            "每一篇由 AI 輔助生成的報導，都必須擁有清晰的「身份證明」。讀者有權知道他們閱讀的每一段話，背後是機器的運算還是記者的奔走。建立這種透明度是數位時代維護媒體公信力的唯一途徑。"
          ]
        }
      ],
      "conclusion": "科技不應抹除人文。在這個自動化浪潮中，我們選擇堅守文字的熱度與真相的深度。這是一篇超過1000字的深度倫理探討，旨在喚起同業對原創價值的重新尊重。"
    },
    "en": {
      "title": "The Ethics of AI in Global Journalism",
      "subtitle": "Is the soul of the story lost in translation?",
      "sections": [
        {
          "heading": "🤖 The Efficiency Trap",
          "text": "Speed is not truth. While AI can translate thousands of articles in minutes, it often lacks the cultural nuance required to handle complex sensitive reporting."
        },
        {
          "heading": "✍️ The Human Filter",
          "text": "The role of the editor has shifted from text production to algorithmic oversight. Humans remain the final arbiter of context and empathy."
        }
      ],
      "conclusion": "Technology should augment human insight, never replace it."
    },
    "zh-CN": {
      "title": "AI 翻译新闻的伦理边界",
      "subtitle": "探讨技术便利背后的语义迷失与真相稀释。",
      "sections": [
        {
          "heading": "🤖 效率与偏见",
          "text": "AI翻译极大地提升了信息传播速度，但其训练数据中的偏见可能在翻译过程中被无形放大。"
        }
      ],
      "conclusion": "透明度是维护公信力的基石，也是AI时代的媒体尊严。"
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
