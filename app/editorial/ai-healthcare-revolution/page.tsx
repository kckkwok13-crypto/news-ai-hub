'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "ai-healthcare-revolution",
  "id": "ep-19",
  "emoji": "🏥",
  "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-04-14",
  "readTime": 10,
  "translations": {
    "zh-TW": {
      "title": "AI 醫療革命：演算法能比醫生更準確嗎？",
      "subtitle": "從早期癌症檢測到藥物研發，AI 正在重塑醫療行業。但隱私與責任歸屬仍是難題。",
      "sections": [
        {
          "heading": "🩺 診斷的精準化",
          "text": "AI 在讀取 X 光、MRI 影像時展現了超過人類專家的穩定性。這不僅能減少誤診，還能大幅緩解醫療資源分配不均的問題。"
        },
        {
          "heading": "💊 藥物研發的「快進鍵」",
          "text": "原本需要十年的藥物開發週期，在 AI 模擬的幫助下可能縮短到一年。這對罕見病患者來說是救命的福音。"
        }
      ],
      "conclusion": "AI 是醫生的超級助手而非替代者。醫療的核心始終是人文關懷，這是算法永遠無法提供的。"
    },
    "en": {
      "title": "AI Healthcare: Can Algorithms Outperform Doctors?",
      "subtitle": "The promise and peril of automated diagnosis and drug discovery.",
      "sections": [
        {
          "heading": "🩺 Precision Diagnostics",
          "text": "AI models can spot patterns in genomic data that human eyes would never see. This is ushering in an era of truly personalized medicine."
        },
        {
          "heading": "💊 Accelerating the Cure",
          "text": "From AlphaFold predicting protein structures to generative AI designing new molecules, the speed of drug discovery is hitting a historic inflection point."
        }
      ],
      "conclusion": "The goal of healthcare AI is not to replace the doctor, but to give them the data they need to save more lives."
    },
    "zh-CN": {
      "title": "AI 医疗革命：重构健康",
      "subtitle": "解析AI在临床诊断中的实际应用。",
      "sections": [
        {
          "heading": "🏥 效率飞跃",
          "text": "AI在医学影像分析与新药筛选中展现了惊人效率，将极大降低全社会的医疗成本。"
        }
      ],
      "conclusion": "科技服务于生命，伦理保障安全。"
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
