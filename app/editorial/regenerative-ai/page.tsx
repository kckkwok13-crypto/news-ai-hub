'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "regenerative-ai",
  "id": "ep-13",
  "emoji": "⚖️",
  "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-04-26",
  "readTime": 10,
  "translations": {
    "zh-TW": {
      "title": "生成式 AI 的倫理邊界：確保 AI 發展符合人類價值觀",
      "subtitle": "當 AI 能夠模仿人類的聲音、風格甚至價值觀，我們如何防止其被惡意利用？",
      "sections": [
        {
          "heading": "🛡️ 對抗深偽技術 (Deepfakes)",
          "text": "深偽技術正被用於傳播假訊息與詐騙。我們需要建立強大的數字水印系統與鑒別算法，以保護公共討論的真實性。"
        },
        {
          "heading": "🤝 對齊人類目標 (AI Alignment)",
          "text": "研究如何讓 AI 的目標與人類的倫理準則一致，是目前 AI 安全領域最重要的課題。我們不能創造出一個追求目標卻無視人類代價的超級智能。"
        }
      ],
      "conclusion": "AI 治理與 AI 研發應同步進行。技術的進步不應以犧牲社會信任與公正為代價。"
    },
    "en": {
      "title": "The Ethics of Generative AI: Aligning Values",
      "subtitle": "Navigating the risks of bias, misinformation, and the quest for safe AGI.",
      "sections": [
        {
          "heading": "🛡️ The Misinformation Crisis",
          "text": "Synthetic media can be weaponized to manipulate elections and ruin reputations. Developing a \"Proof of Personhood\" on the internet is now critical."
        },
        {
          "heading": "🤝 Strategic Alignment",
          "text": "Ensuring that AI assistants prioritize human safety over raw performance is the defining engineering challenge of our generation."
        }
      ],
      "conclusion": "Ethical frameworks must be global and legally binding to prevent a race to the bottom in AI safety."
    },
    "zh-CN": {
      "title": "生成式 AI 的伦理边界",
      "subtitle": "确保AI发展符合人类核心价值观。",
      "sections": [
        {
          "heading": "🛡️ 安全治理",
          "text": "技术必须在监管的护栏内运行，以防止大规模偏见与误导信息的产生。"
        }
      ],
      "conclusion": "在追求智能的同时，不可忽视人性的尊严。"
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
