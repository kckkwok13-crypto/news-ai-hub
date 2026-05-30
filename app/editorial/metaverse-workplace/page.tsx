'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "metaverse-workplace",
  "id": "ep-9",
  "emoji": "🏢",
  "image": "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-04",
  "readTime": 10,
  "translations": {
    "zh-TW": {
      "title": "元宇宙職場：當辦公室搬進虛擬空間，我們的社交與效率會發生什麼？",
      "subtitle": "遠程辦公 2.0 已經到來。我們是在享受更靈活的生活，還是在數字孤島中迷失？",
      "sections": [
        {
          "heading": "👓 虛擬現場感的崛起",
          "text": "透過 VR 與 AR 技術，異地同事可以在同一個虛擬辦公室中進行白板討論。這極大改善了 Zoom 帶來的社交疏離感。"
        },
        {
          "heading": "🏢 管理與信任的重塑",
          "text": "在元宇宙中，傳統的打卡與考勤不再適用。管理將轉向結果導向，同時數據化的行為分析也可能帶來嚴重的員工監控隱憂。"
        }
      ],
      "conclusion": "元宇宙職場不應是現實的複製品，而應是突破地理限制的全新協作形態。隱私保護將是其普及的最大障礙。"
    },
    "en": {
      "title": "The Metaverse Workplace: Remote Work 2.0",
      "subtitle": "Exploring how VR and AR are transforming global team collaboration.",
      "sections": [
        {
          "heading": "👓 Beyond Video Calls",
          "text": "Virtual environments restore the spontaneous water-cooler moments lost in remote work, fostering creativity and team bonding across continents."
        },
        {
          "heading": "🏢 The Surveillance Risk",
          "text": "Digital workspaces track every eye movement and keystroke. We must establish clear boundaries to prevent virtual burnout and intrusive monitoring."
        }
      ],
      "conclusion": "A hybrid future is inevitable. The metaverse will be the bridge that makes remote work feel like real presence."
    },
    "zh-CN": {
      "title": "元宇宙职场：虚拟办公室的兴起",
      "subtitle": "远程协作的新维度与挑战。",
      "sections": [
        {
          "heading": "👓 交互进化",
          "text": "沉浸式技术让全球人才可以瞬间在虚拟会议室集结，打破了物理空间的隔阂。"
        }
      ],
      "conclusion": "技术提升效率，但人文关怀不可缺失。"
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
