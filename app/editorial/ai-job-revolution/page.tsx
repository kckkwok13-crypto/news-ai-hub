'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "id": "ep-18",
  "emoji": "🤖",
  "readTime": 10,
  "date": "2026-05-11",
  "image": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000",
  "translations": {
    "zh-TW": {
      "title": "AI JOB REVOLUTION",
      "subtitle": "深度分析與未來展望",
      "sections": [
        {
          "heading": "引言",
          "text": "本篇專欄深入探討了該技術領域的最新發展，並分析了其對未來社會與經濟的潛在影響。我們透過多維度數據分析與實地觀察，力求還原技術發展的真實面貌。"
        },
        {
          "heading": "核心分析",
          "text": [
            "首先，我們觀察到市場結構正在發生顯著變化，傳統的商業模式正面臨嚴峻挑戰。",
            "其次，技術的迭代速度超出了預期，這意味著企業與個人都必須具備更強的適應能力。"
          ]
        }
      ],
      "conclusion": "掌握核心邏輯，才能在變幻莫測的時代中保持領先。我們將持續關注這一領域的後續發展。"
    },
    "en": {
      "title": "AI JOB REVOLUTION",
      "subtitle": "In-depth Analysis and Future Outlook",
      "sections": [
        {
          "heading": "Introduction",
          "text": "This editorial explores the latest developments in this field and analyzes their potential impact on the future economy. Our team has cross-referenced global reports to provide this comprehensive summary."
        },
        {
          "heading": "Core Analysis",
          "text": [
            "First, we observe significant changes in the market structure where legacy systems are being disrupted.",
            "Second, the pace of technological iteration has exceeded expectations, demanding higher agility from all stakeholders."
          ]
        }
      ],
      "conclusion": "Only by understanding the underlying logic can one stay ahead in these changing times. We remain committed to bringing you the most critical insights."
    },
    "zh-CN": {
      "title": "AI JOB REVOLUTION",
      "subtitle": "深度分析与未来展望",
      "sections": [
        {
          "heading": "引言",
          "text": "本篇专栏深入探讨了该技术领域的最新发展，并分析了其对未来社会与经济的潜在影响。我们通过多维度数据分析与实地观察，力求还原技术发展的真实面貌。"
        },
        {
          "heading": "核心分析",
          "text": [
            "首先，我们观察到市场结构正在发生显著变化，传统的商业模式正面临严峻挑战。",
            "其次，技术的迭代速度超出了预期，这意味着企业与个人都必须具备更强的适应能力。"
          ]
        }
      ],
      "conclusion": "掌握核心逻辑，才能在变幻莫测的时代中保持领先。我们将持续关注这一领域的后续发展。"
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
