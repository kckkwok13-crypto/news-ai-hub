"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tocItems = {
  yue: [
    { id: "overview", title: "GameFi概述" },
    { id: "stats", title: "市場數據" },
    { id: "games", title: "熱門遊戲" },
    { id: "economics", title: "經濟模型" },
    { id: "future", title: "未來趨勢" }
  ],
  "zh-TW": [
    { id: "overview", title: "GameFi概述" },
    { id: "stats", title: "市場數據" },
    { id: "games", title: "熱門遊戲" },
    { id: "economics", title: "經濟模型" },
    { id: "future", title: "未來趨勢" }
  ],
  "zh-CN": [
    { id: "overview", title: "GameFi概述" },
    { id: "stats", title: "市场数据" },
    { id: "games", title: "热门游戏" },
    { id: "economics", title: "经济模型" },
    { id: "future", title: "未来趋势" }
  ],
  en: [
    { id: "overview", title: "Overview" },
    { id: "stats", title: "Market Data" },
    { id: "games", title: "Popular Games" },
    { id: "economics", title: "Economics" },
    { id: "future", title: "Future" }
  ]
};

const tContent = {
  yue: {
    title: "GameFi新時代：區塊鏈遊戲如何改變遊戲產業？",
    subtitle: "市場規模 500億美元 · 玩家 5000萬+ · 平均收益 $150/月",
    overview: `GameFi（區塊鏈遊戲）正在顛覆傳統遊戲產業！2026年，區塊鏈遊戲市場規模突破500億美元，玩家人數超過5000萬，「邊玩邊賺」（Play-to-Earn）模式已成為遊戲新常態。

傳統遊戲玩家用錢購買遊戲道具，但所有權歸遊戲公司。區塊鏈遊戲徹底改變呢個規則，玩家真正擁有遊戲資產，可以自由交易、轉讓，甚至喺唔同遊戲之間使用。

GameFi核心優勢：
- **真正擁有權**：NFT道具歸玩家所有
- **可交易資產**：遊戲道具可喺市場交易
- **被動收入**：遊戲時間換取真實收益
- **跨遊戲互通**：資產可喺多個遊戲使用`,
    statsTitle: "GameFi 市場數據",
    gamesTitle: "熱門區塊鏈遊戲",
    gamesDesc: "2026年最受歡迎嘅區塊鏈遊戲：",
    economicsTitle: "GameFi 經濟模型",
    economicsDesc: "區塊鏈遊戲嘅獨特經濟系統：",
    futureTitle: "未來發展趨勢"
  },
  "zh-TW": {
    title: "GameFi新時代：區塊鏈遊戲如何改變遊戲產業？",
    subtitle: "市場規模 500億美元 · 玩家 5000萬+ · 平均收益 $150/月",
    overview: `GameFi（區塊鏈遊戲）正在顛覆傳統遊戲產業！2026年，區塊鏈遊戲市場規模突破500億美元，玩家人數超過5000萬，「邊玩邊賺」（Play-to-Earn）模式已成為遊戲新常態。

傳統遊戲玩家用錢購買遊戲道具，但所有權歸遊戲公司。區塊鏈遊戲徹底改變這個規則，玩家真正擁有遊戲資產，可以自由交易、轉讓，甚至在不同遊戲之間使用。

GameFi核心優勢：
- **真正擁有權**：NFT道具歸玩家所有
- **可交易資產**：遊戲道具可在市場交易
- **被動收入**：遊戲時間換取真實收益
- **跨遊戲互通**：資產可在多個遊戲使用`,
    statsTitle: "GameFi 市場數據",
    gamesTitle: "熱門區塊鏈遊戲",
    gamesDesc: "2026年最受歡迎的區塊鏈遊戲：",
    economicsTitle: "GameFi 經濟模型",
    economicsDesc: "區塊鏈遊戲的獨特經濟系統：",
    futureTitle: "未來發展趨勢"
  },
  "zh-CN": {
    title: "GameFi新时代：区块链游戏如何改变游戏产业？",
    subtitle: "市场规模 500亿美元 · 玩家 5000万+ · 平均收益 $150/月",
    overview: `GameFi（区块链游戏）正在颠覆传统游戏产业！2026年，区块链游戏市场规模突破500亿美元，玩家人数超过5000万，「边玩边赚」（Play-to-Earn）模式已成为游戏新常态。

传统游戏玩家用钱购买游戏道具，但所有权归游戏公司。区块链游戏彻底改变这个规则，玩家真正拥有游戏资产，可以自由交易、转让，甚至在不同游戏之间使用。

GameFi核心优势：
- **真正拥有权**：NFT道具归玩家所有
- **可交易资产**：游戏道具可在市场交易
- **被动收入**：游戏时间换取真实收益
- **跨游戏互通**：资产可在多个游戏使用`,
    statsTitle: "GameFi 市场数据",
    gamesTitle: "热门区块链游戏",
    gamesDesc: "2026年最受欢迎的区块链游戏：",
    economicsTitle: "GameFi 经济模型",
    economicsDesc: "区块链游戏的独特经济系统：",
    futureTitle: "未来发展趋势"
  },
  en: {
    title: "GameFi New Era: How Blockchain Games Transform Gaming Industry?",
    subtitle: "Market $50B · Players 50M+ · Average Income $150/month",
    overview: `GameFi (blockchain gaming) is disrupting the traditional gaming industry! In 2026, blockchain gaming market exceeds $50 billion with 50+ million players.

Core advantages:
- **True Ownership**: NFT items belong to players
- **Tradable Assets**: Game items can be traded
- **Passive Income**: Earn real money while gaming
- **Cross-game**: Assets usable across games`,
    statsTitle: "GameFi Market Data",
    gamesTitle: "Popular Blockchain Games",
    gamesDesc: "Most popular blockchain games in 2026:",
    economicsTitle: "GameFi Economics",
    economicsDesc: "Unique economic systems of blockchain games:",
    futureTitle: "Future Trends"
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
                lang === l ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {l === "yue" ? "粵語" : l === "zh-TW" ? "繁體" : l === "zh-CN" ? "简体" : "English"}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded-full mb-3">GameFi</span>
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
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-purple-600 transition-colors">{item.title}</a>
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">$50B</div>
                  <div className="text-xs text-gray-600 mt-1">市場規模</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">50M+</div>
                  <div className="text-xs text-gray-600 mt-1">活躍玩家</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">$150</div>
                  <div className="text-xs text-gray-600 mt-1">月均收益</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-amber-600">2,500+</div>
                  <div className="text-xs text-gray-600 mt-1">區塊鏈遊戲</div>
                </div>
              </div>
            </section>

            <section id="games" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.gamesTitle}</h2>
              <p className="text-gray-600 mb-6">{content.gamesDesc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">🐱</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">Axie Infinity</h3>
                      <p className="text-sm text-gray-500">Ronin Network</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">開創Play-to-Earn先河，NFT寵物對戰遊戲，月活躍玩家500萬+</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">👟</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">StepN</h3>
                      <p className="text-sm text-gray-500">Solana</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Move-to-Earn代表，走路跑步賺代幣，引領健康生活新方式</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">🌐</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">The Sandbox</h3>
                      <p className="text-sm text-gray-500">Ethereum</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">元宇宙沙盒遊戲，玩家可創建、擁有貨幣化遊戲體驗</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">⚔️</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">Illuvium</h3>
                      <p className="text-sm text-gray-500">Ethereum L2</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">AAA級區塊鏈RPG遊戲，高品質視覺效果與Play-to-Earn結合</p>
                </div>
              </div>
            </section>

            <section id="economics" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.economicsTitle}</h2>
              <p className="text-gray-600 mb-6">{content.economicsDesc}</p>
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">代幣經濟學 (Tokenomics)</h3>
                      <p className="text-sm text-gray-600">遊戲代幣用於獎勵、治理和遊戲內交易</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">NFT道具系統</h3>
                      <p className="text-sm text-gray-600">遊戲道具鑄造成NFT，真正歸玩家所有</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">P2E 收益模型</h3>
                      <p className="text-sm text-gray-600">玩家通過遊戲貢獻獲得代幣獎勵</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">DAO 治理</h3>
                      <p className="text-sm text-gray-600">玩家透過代幣投票參與遊戲決策</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="future" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.futureTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2">🎮 3A大作登陸區塊鏈</h3>
                  <p className="text-sm text-gray-600">大型遊戲公司開始發行區塊鏈遊戲</p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2">🔗 跨遊戲資產標準</h3>
                  <p className="text-sm text-gray-600">不同遊戲之間道具可以通用</p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2">⚡ Layer 2 遊戲</h3>
                  <p className="text-sm text-gray-600">更快更便宜的遊戲體驗</p>
                </div>
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2">🏢 傳統遊戲結合</h3>
                  <p className="text-sm text-gray-600">傳統遊戲巨頭引入NFT道具</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
