'use client'

import EditorialArticle from '@/components/EditorialArticle'

export default function Page() {
  const articleData = {
  "slug": "stablecoin-war",
  "id": "ep-5",
  "emoji": "🪙",
  "image": "https://images.unsplash.com/photo-1611974717482-7db00d98419c?auto=format&fit=crop&q=80&w=1600",
  "date": "2026-05-12",
  "readTime": 11,
  "translations": {
    "zh-TW": {
      "title": "穩定幣大戰：USDT、USDC 與 USDJ 的透明度與安全性博弈",
      "subtitle": "當傳統金融與加密資產匯合，穩定幣成為了最重要的橋樑。誰能贏得投資者的最終信任？",
      "sections": [
        {
          "heading": "⚖️ 透明度 vs 市佔率",
          "text": "Tether (USDT) 雖然佔據市場霸主地位，但其儲備透明度始終是懸在頭上的達摩克利斯之劍。Circle (USDC) 則走合規路線，試圖贏得機構青睞。"
        },
        {
          "heading": "🌊 算法穩定幣的教訓",
          "text": "Terra/Luna 的崩潰讓市場意識到，沒有實體資產支撐的穩定幣在極端行情下脆弱不堪。如今，合規資產抵押已成為行業標準。"
        }
      ],
      "conclusion": "穩定幣的未來在於合規。隨著各國監管法案的出台，那些無法滿足審計要求的穩定幣將被淘汰出主流市場。"
    },
    "en": {
      "title": "Stablecoin War: The Battle for Trust",
      "subtitle": "Comparing USDT, USDC, and emerging decentralized alternatives.",
      "sections": [
        {
          "heading": "⚖️ The Dominance of Tether",
          "text": "USDT remains the liquidity king, yet its audit history is frequently questioned. USDC positions itself as the regulatory-friendly alternative for the banking system."
        },
        {
          "heading": "🌊 Regulatory Frameworks",
          "text": "New laws in the EU and US are turning stablecoins into quasi-bank deposits. The Wild West era of unbacked tokens is coming to a close."
        }
      ],
      "conclusion": "Trust is the only currency that matters in the stablecoin market. Compliance is the new competitive edge."
    },
    "zh-CN": {
      "title": "稳定币大战：谁能笑到最后",
      "subtitle": "探讨稳定币的安全性、合规性与未来趋势。",
      "sections": [
        {
          "heading": "⚖️ 合规与竞争",
          "text": "随着监管加强，透明度高的稳定币正获得更多机构资金的信任。"
        }
      ],
      "conclusion": "稳定币是加密货币入场的基石，合规化将是长期方向。"
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
