'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "ai-job-revolution",
  "id": "ep-18",
  "emoji": "🤖",
  "image": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-04-16",
  "readTime": 12,
  "translations": {
    "zh-TW": {
      "title": "AI 搶工潮：這個時代我們如何自救？",
      "subtitle": "當 ChatGPT 改變遊戲規則，打工仔、Freelancer 與創業者要如何應對技能貶值的挑戰？",
      "sections": [
        {
          "heading": "⚠️ 哪些崗位最受威脅？",
          "text": "翻譯、初級編碼、常規客服與初級文案。AI 最擅長處理結構化且重複性高的智力勞動。這意味著這些崗位的薪資水平將面臨長期壓力。"
        },
        {
          "heading": "🛠️ 成為「AI 駕駛員」",
          "text": "未來的競爭力不再是比誰寫得快，而是比誰更會「問問題」。提示工程 (Prompt Engineering) 將與傳統專業知識結合，催生出一批高效率的超級個體。"
        }
      ],
      "conclusion": "AI 不會取代你，但那個會用 AI 的人會。我們必須從執行者轉向策略家，利用工具擴大自己的影響力。"
    },
    "en": {
      "title": "AI Job Revolution: How to Future-Proof Your Career",
      "subtitle": "Navigating the skills collapse and the rise of the augmented workforce.",
      "sections": [
        {
          "heading": "⚠️ The Displacement Risk",
          "text": "Entry-level white-collar jobs are facing an existential crisis. If your job can be described in a manual, a bot can likely do it better and cheaper."
        },
        {
          "heading": "🛠️ Human-AI Collaboration",
          "text": "The new elite workforce will consist of specialists who use AI as a multiplier. Creativity, complex empathy, and strategic thinking are the last moats for human labor."
        }
      ],
      "conclusion": "Don't fight the wave; learn to surf. Adapting to AI tools is the only way to remain relevant in the automated economy."
    },
    "zh-CN": {
      "title": "AI 抢工潮：这个时代如何自救",
      "subtitle": "自动化浪潮下的职场生存指南。",
      "sections": [
        {
          "heading": "🤖 技能重塑",
          "text": "重复性智力劳动将被AI接管，人类职员需转向更高维度的创意与决策岗位。"
        }
      ],
      "conclusion": "拥抱变革，做工具的主人。"
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
