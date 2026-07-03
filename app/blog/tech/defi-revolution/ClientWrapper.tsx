"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const defiData = {
  tvl: 215,
  annualGrowth: 85,
  protocols: 1200,
  avgAPY: 8.5,
  users: 45,
  volume24h: 12.5
};

const tocItems = {
  yue: [
    { id: "overview", title: "DeFi概述" },
    { id: "stats", title: "關鍵數據" },
    { id: "protocols", title: "主流協議" },
    { id: "risks", title: "風險分析" },
    { id: "future", title: "未來展望" }
  ],
  "zh-TW": [
    { id: "overview", title: "DeFi概述" },
    { id: "stats", title: "關鍵數據" },
    { id: "protocols", title: "主流協議" },
    { id: "risks", title: "風險分析" },
    { id: "future", title: "未來展望" }
  ],
  "zh-CN": [
    { id: "overview", title: "DeFi概述" },
    { id: "stats", title: "关键数据" },
    { id: "protocols", title: "主流协议" },
    { id: "risks", title: "风险分析" },
    { id: "future", title: "未来展望" }
  ],
  en: [
    { id: "overview", title: "Overview" },
    { id: "stats", title: "Key Stats" },
    { id: "protocols", title: "Protocols" },
    { id: "risks", title: "Risk Analysis" },
    { id: "future", title: "Future" }
  ]
};

const tContent = {
  yue: {
    title: "DeFi革命：傳統金融即將被顛覆？大數據分析",
    subtitle: "TVL 2150億美元 · 1200+ 協議 · 年增長85%",
    overview: `去中心化金融（DeFi）正在改變全球金融格局！2026年，DeFi總鎖倉價值（TVL）達到2150億美元，年增長率高達85%，呢個數字顯示傳統金融正面臨前所未有嘅挑戰。

DeFi嘅核心優勢在於：
- **無需許可**：任何人有互聯網就可以使用
- **透明公開**：所有交易喺區塊鏈上可查
- **全球可用**：跨境轉帳無障礙
- **收益更高**：傳統銀行存款利率0.1%，DeFi平均8.5%`,
    statsTitle: "DeFi關鍵數據",
    protocolsTitle: "主流DeFi協議",
    protocolsDesc: "2026年最受歡迎嘅DeFi協議：",
    risksTitle: "風險分析",
    risksDesc: "投資DeFi前必須了解嘅風險：",
    futureTitle: "未來展望"
  },
  "zh-TW": {
    title: "DeFi革命：傳統金融即將被顛覆？大數據分析",
    subtitle: "TVL 2150億美元 · 1200+ 協議 · 年增長85%",
    overview: `去中心化金融（DeFi）正在改變全球金融格局！2026年，DeFi總鎖倉價值（TVL）達到2150億美元，年增長率高達85%，這個數字顯示傳統金融正面臨前所未有的挑戰。

DeFi的核心優勢在於：
- **無需許可**：任何人有互聯網就可以使用
- **透明公開**：所有交易在區塊鏈上可查
- **全球可用**：跨境轉帳無障礙
- **收益更高**：傳統銀行存款利率0.1%，DeFi平均8.5%`,
    statsTitle: "DeFi關鍵數據",
    protocolsTitle: "主流DeFi協議",
    protocolsDesc: "2026年最受歡迎的DeFi協議：",
    risksTitle: "風險分析",
    risksDesc: "投資DeFi前必須了解的風險：",
    futureTitle: "未來展望"
  },
  "zh-CN": {
    title: "DeFi革命：传统金融即将被颠覆？大数据分析",
    subtitle: "TVL 2150亿美元 · 1200+ 协议 · 年增长85%",
    overview: `去中心化金融（DeFi）正在改变全球金融格局！2026年，DeFi总锁仓价值（TVL）达到2150亿美元，年增长率高达85%，这个数字显示传统金融正面临前所未有的挑战。

DeFi的核心优势在于：
- **无需许可**：任何人有互联网就可以使用
- **透明公开**：所有交易在区块链上可查
- **全球可用**：跨境转帐无障碍
- **收益更高**：传统银行存款利率0.1%，DeFi平均8.5%`,
    statsTitle: "DeFi关键数据",
    protocolsTitle: "主流DeFi协议",
    protocolsDesc: "2026年最受欢迎的DeFi协议：",
    risksTitle: "风险分析",
    risksDesc: "投资DeFi前必须了解的风险：",
    futureTitle: "未来展望"
  },
  en: {
    title: "DeFi Revolution: Traditional Finance Disrupted? Big Data Analysis",
    subtitle: "TVL $215B · 1200+ Protocols · 85% Annual Growth",
    overview: `Decentralized Finance (DeFi) is changing the global financial landscape! In 2026, DeFi Total Value Locked (TVL) reaches $215 billion, with 85% annual growth rate.

Core DeFi advantages:
- **Permissionless**: Anyone with internet can use
- **Transparent**: All transactions verifiable on blockchain
- **Global Access**: Cross-border transfers without barriers
- **Higher Yields**: Traditional bank 0.1%, DeFi avg 8.5%`,
    statsTitle: "DeFi Key Stats",
    protocolsTitle: "Top DeFi Protocols",
    protocolsDesc: "Most popular DeFi protocols in 2026:",
    risksTitle: "Risk Analysis",
    risksDesc: "Risks you must understand before investing:",
    futureTitle: "Future Outlook"
  }
};

export default function ClientWrapper() {
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");

  useEffect(() => {
    const savedLang = localStorage.getItem("travel_blog_lang") as TravelLanguage;
    if (savedLang) setLang(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("travel_blog_lang", lang);
    window.dispatchEvent(new CustomEvent("travel-lang-change", { detail: lang }));
  }, [lang]);

  const content = tContent[lang];
  const toc = tocItems[lang];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex gap-2 flex-wrap">
          {(["yue", "zh-TW", "zh-CN", "en"] as TravelLanguage[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                lang === l ? "bg-green-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {l === "yue" ? "粵語" : l === "zh-TW" ? "繁體" : l === "zh-CN" ? "简体" : "English"}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=1200&q=80')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full mb-3">DeFi</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{content.title}</h1>
          <p className="text-gray-200 text-lg">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-5 shadow-sm sticky top-24">
              <h3 className="font-semibold mb-3 text-gray-800">目錄</h3>
              <nav className="space-y-2">
                {toc.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-green-600 transition-colors">{item.title}</a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <section id="overview" className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
            </section>

            <section id="stats" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{content.statsTitle}</h2>
              <div className="h-64">
                <svg viewBox="0 0 600 250" className="w-full h-full">
                  <text x="300" y="20" textAnchor="middle" fill="#1F2937" fontSize="14" fontWeight="bold">DeFi 生態關鍵指標</text>
                  <circle cx="100" cy="120" r="70" fill="none" stroke="#10B981" strokeWidth="20" strokeDasharray={`${defiData.tvl * 2.7} 440`} strokeDashoffset="0" />
                  <text x="100" y="125" textAnchor="middle" fill="#1F2937" fontSize="12" fontWeight="bold">TVL</text>
                  <text x="100" y="145" textAnchor="middle" fill="#6B7280" fontSize="10">${defiData.tvl}B</text>

                  <circle cx="250" cy="120" r="50" fill="none" stroke="#3B82F6" strokeWidth="15" strokeDasharray={`${defiData.protocols * 0.25} 314`} strokeDashoffset="0" />
                  <text x="250" y="125" textAnchor="middle" fill="#1F2937" fontSize="10" fontWeight="bold">Protocols</text>
                  <text x="250" y="140" textAnchor="middle" fill="#6B7280" fontSize="9">{defiData.protocols}+</text>

                  <circle cx="380" cy="120" r="45" fill="none" stroke="#F59E0B" strokeWidth="15" strokeDasharray={`${defiData.avgAPY * 28} 283`} strokeDashoffset="0" />
                  <text x="380" y="125" textAnchor="middle" fill="#1F2937" fontSize="10" fontWeight="bold">APY</text>
                  <text x="380" y="140" textAnchor="middle" fill="#6B7280" fontSize="9">{defiData.avgAPY}%</text>

                  <circle cx="500" cy="120" r="40" fill="none" stroke="#8B5CF6" strokeWidth="12" strokeDasharray={`${defiData.users * 2.5} 251`} strokeDashoffset="0" />
                  <text x="500" y="125" textAnchor="middle" fill="#1F2937" fontSize="10" fontWeight="bold">Users</text>
                  <text x="500" y="140" textAnchor="middle" fill="#6B7280" fontSize="9">{defiData.users}M</text>
                </svg>
              </div>
            </section>

            <section id="protocols" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.protocolsTitle}</h2>
              <p className="text-gray-600 mb-6">{content.protocolsDesc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">💧</span>
                    <h3 className="font-semibold text-gray-800">Uniswap</h3>
                  </div>
                  <p className="text-sm text-gray-600">最大去中心化交易所，日交易量$12.5億</p>
                  <div className="mt-2 text-green-600 font-bold">TVL: $45億</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🏦</span>
                    <h3 className="font-semibold text-gray-800">Aave</h3>
                  </div>
                  <p className="text-sm text-gray-600">最大借貸協議，支持50+種加密貨幣</p>
                  <div className="mt-2 text-blue-600 font-bold">TVL: $38億</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">💰</span>
                    <h3 className="font-semibold text-gray-800">Compound</h3>
                  </div>
                  <p className="text-sm text-gray-600">算法利率借貸協議先驅</p>
                  <div className="mt-2 text-purple-600 font-bold">TVL: $18億</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📊</span>
                    <h3 className="font-semibold text-gray-800">Curve</h3>
                  </div>
                  <p className="text-sm text-gray-600">穩定幣交易專家，TVL $22億</p>
                  <div className="mt-2 text-amber-600 font-bold">TVL: $22億</div>
                </div>
              </div>
            </section>

            <section id="risks" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.risksTitle}</h2>
              <p className="text-gray-600 mb-6">{content.risksDesc}</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">智能合約風險</h3>
                    <p className="text-sm text-gray-600 mt-1">代碼漏洞可能導致資金損失，建議選擇有審計嘅協議</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                  <span className="text-2xl">📉</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">無常損失 (Impermanent Loss)</h3>
                    <p className="text-sm text-gray-600 mt-1">流動性提供者在價格波動時可能面臨損失</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
                  <span className="text-2xl">🔴</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">價格波動風險</h3>
                    <p className="text-sm text-gray-600 mt-1">加密貨幣市場波動大，投資前請做好風險評估</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="future" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.futureTitle}</h2>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">🚀 機構採用增加</h3>
                    <p className="text-sm text-gray-600">傳統金融機構開始推出DeFi服務</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">🔐 監管框架完善</h3>
                    <p className="text-sm text-gray-600">各國政府開始制定DeFi監管政策</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">⚡ Layer 2 普及</h3>
                    <p className="text-sm text-gray-600">更快、更便宜嘅交易體驗</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">🌉 跨鏈互通</h3>
                    <p className="text-sm text-gray-600">不同區塊鏈之間嘅資產流動</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
