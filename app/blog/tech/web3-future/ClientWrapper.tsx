"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tocItems = {
  yue: [
    { id: "overview", title: "Web3概述" },
    { id: "features", title: "核心特點" },
    { id: "applications", title: "應用場景" },
    { id: "challenges", title: "挑戰與機遇" },
    { id: "future", title: "未來發展" }
  ],
  "zh-TW": [
    { id: "overview", title: "Web3概述" },
    { id: "features", title: "核心特點" },
    { id: "applications", title: "應用場景" },
    { id: "challenges", title: "挑戰與機遇" },
    { id: "future", title: "未來發展" }
  ],
  "zh-CN": [
    { id: "overview", title: "Web3概述" },
    { id: "features", title: "核心特点" },
    { id: "applications", title: "应用场景" },
    { id: "challenges", title: "挑战与机遇" },
    { id: "future", title: "未来发展" }
  ],
  en: [
    { id: "overview", title: "Overview" },
    { id: "features", title: "Core Features" },
    { id: "applications", title: "Applications" },
    { id: "challenges", title: "Challenges" },
    { id: "future", title: "Future" }
  ]
};

const tContent = {
  yee: {
    title: "Web3.0時代：區塊鏈如何重塑互聯網未來？",
    subtitle: "Web3用戶 6.5億 · 去中心化應用 50,000+ · 域名註冊 500萬+",
    overview: `Web3唔再係口號！去中心化社交平台、區塊鏈域名、NFT數位身份...Web3正在重新定義互聯網！2026年，Web3用戶數突破6.5億，去中心化應用超過50,000個。

Web1係讀取時代（門戶網站），Web2係讀寫時代（社交媒體），Web3就係去中心化時代，用戶真正掌控自己嘅數據同身份。

Web3核心概念：
- **用戶擁有權**：數據同身份歸用戶所有
- **無需信任**：智能合約替代中介
- **去中心化**：唔再依賴大型科技公司
- **開放生態**：任何人都可以參與`,
    featuresTitle: "Web3 核心特點",
    applicationsTitle: "Web3 應用場景",
    applicationsDesc: "Web3 正在改變多個領域：",
    challengesTitle: "挑戰與機遇",
    futureTitle: "未來發展方向"
  },
  "zh-TW": {
    title: "Web3.0時代：區塊鏈如何重塑互聯網未來？",
    subtitle: "Web3用戶 6.5億 · 去中心化應用 50,000+ · 域名註冊 500萬+",
    overview: `Web3唔再係口號！去中心化社交平台、區塊鏈域名、NFT數位身份...Web3正在重新定義互聯網！2026年，Web3用戶數突破6.5億，去中心化應用超過50,000個。

Web1係讀取時代（門戶網站），Web2係讀寫時代（社交媒體），Web3就係去中心化時代，用戶真正掌控自己的數據同身份。

Web3核心概念：
- **用戶擁有權**：數據同身份歸用戶所有
- **無需信任**：智能合約替代中介
- **去中心化**：唔再依賴大型科技公司
- **開放生態**：任何人都可以參與`,
    featuresTitle: "Web3 核心特點",
    applicationsTitle: "Web3 應用場景",
    applicationsDesc: "Web3 正在改變多個領域：",
    challengesTitle: "挑戰與機遇",
    futureTitle: "未來發展方向"
  },
  "zh-CN": {
    title: "Web3.0时代：区块链如何重塑互联网未来？",
    subtitle: "Web3用户 6.5亿 · 去中心化应用 50,000+ · 域名注册 500万+",
    overview: `Web3不再是口号！去中心化社交平台、区块链域名、NFT数字身份...Web3正在重新定义互联网！2026年，Web3用户数突破6.5亿，去中心化应用超过50,000个。

Web1是读取时代（门户网站），Web2是读写时代（社交媒体），Web3就是去中心化时代，用户真正掌控自己的数据同身份。

Web3核心概念：
- **用户拥有权**：数据同身份归用户所有
- **无需信任**：智能合约替代中介
- **去中心化**：不再依赖大型科技公司
- **开放生态**：任何人都可以参与`,
    featuresTitle: "Web3 核心特点",
    applicationsTitle: "Web3 应用场景",
    applicationsDesc: "Web3 正在改变多个领域：",
    challengesTitle: "挑战与机遇",
    futureTitle: "未来发展方向"
  },
  en: {
    title: "Web3.0 Era: How Blockchain Reshapes Internet Future?",
    subtitle: "Web3 Users 650M · DApps 50,000+ · Domains 5M+",
    overview: `Web3 is no longer just a concept! Decentralized social platforms, blockchain domains, NFT identities...Web3 is redefining the internet!

Core concepts:
- **User Ownership**: Data and identity belong to users
- **Trustless**: Smart contracts replace intermediaries
- **Decentralized**: No dependency on big tech
- **Open Ecosystem**: Anyone can participate`,
    featuresTitle: "Web3 Core Features",
    applicationsTitle: "Web3 Applications",
    applicationsDesc: "Web3 is transforming multiple areas:",
    challengesTitle: "Challenges & Opportunities",
    futureTitle: "Future Direction"
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

  const content = tContent[lang] || tContent["zh-TW"];
  const toc = tocItems[lang] || tocItems["zh-TW"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex gap-2 flex-wrap">
          {(["yue", "zh-TW", "zh-CN", "en"] as TravelLanguage[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                lang === l ? "bg-cyan-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {l === "yue" ? "粵語" : l === "zh-TW" ? "繁體" : l === "zh-CN" ? "简体" : "English"}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-cyan-600 text-white text-sm rounded-full mb-3">Web3</span>
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
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-cyan-600 transition-colors">{item.title}</a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <section id="overview" className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
            </section>

            <section id="features" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{content.featuresTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-cyan-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">🔐</div>
                  <h3 className="font-semibold text-gray-800 mb-2">去中心化身份 (DID)</h3>
                  <p className="text-sm text-gray-600">用戶擁有自己嘅數位身份，唔需要Facebook、Google登入</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">🌐</div>
                  <h3 className="font-semibold text-gray-800 mb-2">區塊鏈域名</h3>
                  <p className="text-sm text-gray-600">ENS、Unstoppable Domains等去中心化域名，擁有真正所有權</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">📱</div>
                  <h3 className="font-semibold text-gray-800 mb-2">去中心化應用 (DApp)</h3>
                  <p className="text-sm text-gray-600">Uniswap、OpenSea等DApp運行喺區塊鏈上，唔會被關閉</p>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">☁️</div>
                  <h3 className="font-semibold text-gray-800 mb-2">去中心化存儲</h3>
                  <p className="text-sm text-gray-600">Filecoin、IPFS等去中心化存儲方案，數據唔被審查</p>
                </div>
              </div>
            </section>

            <section id="applications" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.applicationsTitle}</h2>
              <p className="text-gray-600 mb-6">{content.applicationsDesc}</p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-3xl">📱</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">去中心化社交媒體</h3>
                    <p className="text-sm text-gray-600 mt-1">Lens Protocol、Mastodon等平台，用戶掌控自己嘅內容同數據</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-3xl">💼</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">去中心化金融 (DeFi)</h3>
                    <p className="text-sm text-gray-600 mt-1">銀行、借貸、交易所全部去中心化，任何人都可以參與</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-3xl">🎮</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">GameFi 與元宇宙</h3>
                    <p className="text-sm text-gray-600 mt-1">區塊鏈遊戲同虛擬世界，玩家真正擁有遊戲資產</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <span className="text-3xl">📝</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">DAO 治理</h3>
                    <p className="text-sm text-gray-600 mt-1">去中心化組織，用代幣投票決策，唔再有傳統公司架構</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="challenges" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.challengesTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-orange-500">⚠️</span> 挑戰
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 用戶體驗複雜，需要學習</li>
                    <li>• 交易費用高，網絡擁堵</li>
                    <li>• 監管政策唔確定</li>
                    <li>• 大規模採用仍需時日</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-green-500">✅</span> 機遇
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 用戶數據真正擁有</li>
                    <li>• 擺脫平台審查風險</li>
                    <li>• 被動收入機會</li>
                    <li>• 新型投資同創業模式</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.futureTitle}</h2>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🚀</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Layer 2 成熟</h3>
                    <p className="text-sm text-gray-600">更快、更便宜嘅區塊鏈體驗</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🔑</div>
                    <h3 className="font-semibold text-gray-800 mb-2">身份標準化</h3>
                    <p className="text-sm text-gray-600">統一嘅去中心化身份標準</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🏛️</div>
                    <h3 className="font-semibold text-gray-800 mb-2">監管框架</h3>
                    <p className="text-sm text-gray-600">各國制定清晰嘅Web3政策</p>
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
