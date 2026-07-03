"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tocItems = {
  yue: [
    { id: "overview", title: "AI+區塊鏈概述" },
    { id: "convergence", title: "融合應用" },
    { id: "projects", title: "項目生態" },
    { id: "data", title: "市場數據" },
    { id: "future", title: "未來發展" }
  ],
  "zh-TW": [
    { id: "overview", title: "AI+區塊鏈概述" },
    { id: "convergence", title: "融合應用" },
    { id: "projects", title: "項目生態" },
    { id: "data", title: "市場數據" },
    { id: "future", title: "未來發展" }
  ],
  "zh-CN": [
    { id: "overview", title: "AI+区块链概述" },
    { id: "convergence", title: "融合应用" },
    { id: "projects", title: "项目生态" },
    { id: "data", title: "市场数据" },
    { id: "future", title: "未来发展" }
  ],
  en: [
    { id: "overview", title: "AI+Blockchain Overview" },
    { id: "convergence", title: "Convergence" },
    { id: "projects", title: "Project Ecosystem" },
    { id: "data", title: "Market Data" },
    { id: "future", title: "Future" }
  ]
};

const tContent = {
  yue: {
    title: "AI + 區塊鏈：人工智能與區塊鏈如何改變世界？",
    subtitle: "AI區塊鏈項目 500+ · 市場規模 150億美元 · 預測準確率提升 40%",
    overview: `人工智能（AI）與區塊鏈技術嘅融合正在催生新一代Web3應用！2026年，全球AI區塊鏈項目已超過500個，市場規模突破150億美元。區塊鏈為AI提供可信數據源，AI為區塊鏈注入智能決策，兩者結合正在顛覆金融、醫療、藝術等多個行業。

區塊鏈可以解決AI嘅數據可信問題——用戶可以擁有自己嘅數據，授權AI模型使用，同時獲得相應報酬。AI可以提升區塊鏈效率——自動化智能合約、優化共識機制、預測市場走勢。

AI區塊鏈融合關鍵數據（2026年6月）：
- AI區塊鏈項目：500+
- 市場規模：150億美元
- 去中心化AI算力：50 PFLOPS
- AI生成NFT銷售額：30億美元`,
    featuresTitle: "AI+區塊鏈 核心應用",
    applicationsTitle: "融合應用場景",
    applicationsDesc: "AI與區塊鏈正在改變多個領域：",
    challengesTitle: "挑戰與機遇",
    futureTitle: "未來發展方向"
  },
  "zh-TW": {
    title: "AI + 區塊鏈：人工智能與區塊鏈如何改變世界？",
    subtitle: "AI區塊鏈項目 500+ · 市場規模 150億美元 · 預測準確率提升 40%",
    overview: `人工智能（AI）與區塊鏈技術的融合正在催生新一代Web3應用！2026年，全球AI區塊鏈項目已超過500個，市場規模突破150億美元。區塊鏈為AI提供可信數據源，AI為區塊鏈注入智能決策，兩者結合正在顛覆金融、醫療、藝術等多個行業。

區塊鏈可以解決AI的數據可信問題——用戶可以擁有自己的數據，授權AI模型使用，同時獲得相應報酬。AI可以提升區塊鏈效率——自動化智能合約、優化共識機制、預測市場走勢。

AI區塊鏈融合關鍵數據（2026年6月）：
- AI區塊鏈項目：500+
- 市場規模：150億美元
- 去中心化AI算力：50 PFLOPS
- AI生成NFT銷售額：30億美元`,
    featuresTitle: "AI+區塊鏈 核心應用",
    applicationsTitle: "融合應用場景",
    applicationsDesc: "AI與區塊鏈正在改變多個領域：",
    challengesTitle: "挑戰與機遇",
    futureTitle: "未來發展方向"
  },
  "zh-CN": {
    title: "AI + 区块链：人工智能与区块链如何改变世界？",
    subtitle: "AI区块链项目 500+ · 市场规模 150亿美元 · 预测准确率提升 40%",
    overview: `人工智能（AI）与区块链技术的融合正在催生新一代Web3应用！2026年，全球AI区块链项目已超过500个，市场规模突破150亿美元。区块链为AI提供可信数据源，AI为区块链注入智能决策，两者结合正在颠覆金融、医疗、艺术等多个行业。

区块链可以解决AI的数据可信问题——用户可以拥有自己的数据，授权AI模型使用，同时获得相应报酬。AI可以提升区块链效率——自动化智能合约、优化共识机制、预测市场走势。

AI区块链融合关键数据（2026年6月）：
- AI区块链项目：500+
- 市场规模：150亿美元
- 去中心化AI算力：50 PFLOPS
- AI生成NFT销售额：30亿美元`,
    featuresTitle: "AI+区块链 核心应用",
    applicationsTitle: "融合应用场景",
    applicationsDesc: "AI与区块链正在改变多个领域：",
    challengesTitle: "挑战与机遇",
    futureTitle: "未来发展方向"
  },
  en: {
    title: "AI + Blockchain: How AI and Blockchain Change the World",
    subtitle: "AI Blockchain Projects 500+ · Market $15B · Accuracy +40%",
    overview: `The convergence of AI and blockchain is creating next-gen Web3 applications! In June 2026, there are 500+ AI blockchain projects with $15B market size. Blockchain provides trusted data for AI, while AI brings intelligent decisions to blockchain.

Blockchain solves AI's data trust problem - users own their data and get paid for授权 AI models. AI improves blockchain efficiency - automating smart contracts, optimizing consensus, predicting market trends.

AI Blockchain Key Data (June 2026):
- AI Blockchain Projects: 500+
- Market Size: $15B
- Decentralized AI Compute: 50 PFLOPS
- AI-generated NFT Sales: $3B`,
    featuresTitle: "AI+Blockchain Core Applications",
    applicationsTitle: "Convergence Use Cases",
    applicationsDesc: "AI and blockchain are transforming multiple areas:",
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
                lang === l ? "bg-pink-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {l === "yue" ? "粵語" : l === "zh-TW" ? "繁體" : l === "zh-CN" ? "简体" : "English"}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-pink-600 text-white text-sm rounded-full mb-3">AI+Blockchain</span>
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
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-pink-600 transition-colors">{item.title}</a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <section id="overview" className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
            </section>

            <section id="convergence" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{content.featuresTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg p-5">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">🧠</div>
                  <h3 className="font-semibold text-gray-800 mb-2">去中心化AI算力</h3>
                  <p className="text-sm text-gray-600 mb-3">Render Network、Livepeer等平台提供去中心化GPU算力，降低AI訓練成本70%</p>
                  <div className="text-xs text-gray-500">關鍵指標：50 PFLOPS算力</div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-5">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">🔐</div>
                  <h3 className="font-semibold text-gray-800 mb-2">數據所有權</h3>
                  <p className="text-sm text-gray-600 mb-3">Ocean Protocol等平台讓用戶擁有自己的數據，授權AI模型使用獲取收益</p>
                  <div className="text-xs text-gray-500">關鍵指標：1000萬+數據資產</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg p-5">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">🎨</div>
                  <h3 className="font-semibold text-gray-800 mb-2">AI生成藝術</h3>
                  <p className="text-sm text-gray-600 mb-3">AI生成NFT藝術品，結合區塊鏈確權，2026年銷售額突破30億美元</p>
                  <div className="text-xs text-gray-500">關鍵指標：$3B市場規模</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-5">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">📊</div>
                  <h3 className="font-semibold text-gray-800 mb-2">智能合約審計</h3>
                  <p className="text-sm text-gray-600 mb-3">AI自動審計智能合約漏洞，檢測準確率提升40%，比人工審計快100倍</p>
                  <div className="text-xs text-gray-500">關鍵指標：+40%準確率</div>
                </div>
              </div>
            </section>

            <section id="projects" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.applicationsTitle}</h2>
              <p className="text-gray-600 mb-6">{content.applicationsDesc}</p>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🧠</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">SingularityNET</h3>
                      <p className="text-sm text-gray-500">去中心化AI市場平台</p>
                    </div>
                    <span className="ml-auto px-2 py-1 bg-green-100 text-green-700 text-xs rounded">龍頭項目</span>
                  </div>
                  <p className="text-sm text-gray-600">全球首個去中心化AI市場，讓不同AI算法可以互相協作，目前已整合100+ AI服務</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🌊</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">Ocean Protocol</h3>
                      <p className="text-sm text-gray-500">去中心化數據交換協議</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">讓企業和個人可以安全地分享數據，AI模型可以訂閱高質量數據集，用戶獲得數據收益</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">⚡</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">Render Network</h3>
                      <p className="text-sm text-gray-500">GPU算力市場</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">閒置GPU算力用於AI模型訓練和圖形渲染，比傳統雲算力便宜80%</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🤖</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">Fetch.ai</h3>
                      <p className="text-sm text-gray-500">自主AI代理網絡</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">創建自主AI代理自動執行商務任務，從旅遊預訂到供應鏈優化，全部由AI代理完成</p>
                </div>
              </div>
            </section>

            <section id="data" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.challengesTitle}</h2>
              <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-800 mb-4">AI區塊鏈市場數據（2026年6月）</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-pink-600">$150億</div>
                    <div className="text-xs text-gray-600 mt-1">市場規模</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-xs text-gray-600 mt-1">項目數量</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-purple-600">50 PFLOPS</div>
                    <div className="text-xs text-gray-600 mt-1">去中心化算力</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-600">$30億</div>
                    <div className="text-xs text-gray-600 mt-1">AI NFT銷售額</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-orange-500">⚠️</span> 挑戰
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• AI模型訓練需要大量數據</li>
                    <li>• 區塊鏈性能限制AI計算</li>
                    <li>• 監管政策不確定</li>
                    <li>• 知識產權歸屬問題</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-green-500">✅</span> 機遇
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 數據民主化</li>
                    <li>• 降低AI進入門檻</li>
                    <li>• 新商業模式</li>
                    <li>• 隱私計算突破</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.futureTitle}</h2>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🤝</div>
                    <h3 className="font-semibold text-gray-800 mb-2">AI代理經濟</h3>
                    <p className="text-sm text-gray-600">AI代理自動交易、協商、執行任務</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🔒</div>
                    <h3 className="font-semibold text-gray-800 mb-2">隐私AI</h3>
                    <p className="text-sm text-gray-600">零知識證明保障AI計算隱私</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🏥</div>
                    <h3 className="font-semibold text-gray-800 mb-2">醫療革命</h3>
                    <p className="text-sm text-gray-600">區塊鏈保障醫療數據，AI輔助診斷</p>
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
