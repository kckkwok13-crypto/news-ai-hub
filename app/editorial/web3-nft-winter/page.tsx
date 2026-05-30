'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "web3-nft-winter",
  "id": "ep-17",
  "emoji": "🌐",
  "image": "https://images.unsplash.com/photo-1644363102719-33a38805625c?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-04-18",
  "readTime": 9,
  "translations": {
    "zh-TW": {
      "title": "Web3 寒冬：NFT 泡沫破裂後的重生與實用化",
      "subtitle": "遠離頭像圖片的炒作，NFT 正在身份證明、物權追蹤與供應鏈管理中找到真職位。",
      "sections": [
        {
          "heading": "📉 從一地眼鏡碎中反思",
          "text": "99% 的頭像類 NFT 已經歸零。這是一場必要的市場清洗，汰換了那些只有投機價值而無任何實用的項目。"
        },
        {
          "heading": "🆔 NFT 2.0：實用性為王",
          "text": "票務、數字護照、奢侈品溯源。NFT 作為一種「不可篡改的數位收據」，其技術價值正在被真正的傳統產業所認可。"
        }
      ],
      "conclusion": "NFT 不會消失，但它將變得不再「顯眼」。它將作為背景技術存在，默默地支撐著數字經濟的信任基礎。"
    },
    "en": {
      "title": "Web3 Winter: The Rebirth of NFTs",
      "subtitle": "Why the death of the PFP hype is the best thing that happened to the technology.",
      "sections": [
        {
          "heading": "📉 The Great Washout",
          "text": "Market cycles are brutal but necessary. The elimination of speculative junk allows real engineers to build long-term value without the noise of floor prices."
        },
        {
          "heading": "🆔 Utility over Aesthetics",
          "text": "The next generation of NFTs will be linked to real estate titles, insurance policies, and supply chain tracking, proving authenticity across global trade."
        }
      ],
      "conclusion": "The term \"NFT\" may fade, but the technology of unique digital identification is here to stay."
    },
    "zh-CN": {
      "title": "Web3 寒冬：NFT 泡沫破裂",
      "subtitle": "解析数字藏品的回归理性之路。",
      "sections": [
        {
          "heading": "🌐 价值重估",
          "text": "市场清洗了投机泡沫，留下了真正具有应用价值的链上确权技术。"
        }
      ],
      "conclusion": "实用主义取代炒作，NFT正在成为数字契约的标准。"
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
