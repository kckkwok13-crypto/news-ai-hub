"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

// Blockchain 2026 data
const blockchainStats = {
  globalMarketSize: 287,
  defiTVL: 215,
  nftMarket: 82,
  daoTreasury: 45,
  web3Users: 650,
  annualGrowth: 67
};

const tocItems = {
  yue: [
    { id: "overview", title: "區塊鏈概述" },
    { id: "defi", title: "去中心化金融DeFi" },
    { id: "nft", title: "NFT應用場景" },
    { id: "dao", title: "DAO治理模式" },
    { id: "web3", title: "Web3生態" },
    { id: "future", title: "未來展望" }
  ],
  "zh-TW": [
    { id: "overview", title: "區塊鏈概述" },
    { id: "defi", title: "去中心化金融DeFi" },
    { id: "nft", title: "NFT應用場景" },
    { id: "dao", title: "DAO治理模式" },
    { id: "web3", title: "Web3生態" },
    { id: "future", title: "未來展望" }
  ],
  "zh-CN": [
    { id: "overview", title: "区块链概述" },
    { id: "defi", title: "去中心化金融DeFi" },
    { id: "nft", title: "NFT应用场景" },
    { id: "dao", title: "DAO治理模式" },
    { id: "web3", title: "Web3生态" },
    { id: "future", title: "未来展望" }
  ],
  en: [
    { id: "overview", title: "Overview" },
    { id: "defi", title: "DeFi" },
    { id: "nft", title: "NFT Applications" },
    { id: "dao", title: "DAO Governance" },
    { id: "web3", title: "Web3 Ecosystem" },
    { id: "future", title: "Future Outlook" }
  ]
};

const tContent = {
  yue: {
    title: "區塊鏈2026大數據分析：八大應用場景改變你我的生活",
    subtitle: "DeFi TVL 2150億美元 · NFT市場 820億 · Web3用戶 6.5億",
    overview: `區塊鏈技術已經從比特幣時代進化到一個全方位改變各行各業嘅創新平台！2026年，全球區塊鏈市場規模達到2870億美元，年增長率高達67%，呢個數字證明區塊鏈已經唔再只係加密貨幣咁簡單。

根據最新數據顯示，去中心化金融（DeFi）嘅總鎖倉價值（TVL）達到2150億美元，NFT市場規模達820億美元，而DAO組織管理嘅國庫總值更高達450億美元。Web3用戶數量突破6.5億，標誌著去中心化互聯網時代正式來臨！

區塊鏈嘅核心價值喺於佢能夠提供：
- **去中心化**：唔需要中介機構，交易直接點對點
- **透明性**：所有交易記錄公開可查
- **不可篡改**：一旦記錄無法修改
- **智能合約**：自動執行、無需信任第三方`,
    defiTitle: "去中心化金融 DeFi 革命",
    defiDesc: "DeFi 係區塊鏈最大嘅應用場景，改變傳統金融遊戲規則：",
    nftTitle: "NFT 應用場景大爆發",
    nftDesc: "NFT 唔再只係數位藝術品，應用範圍無限擴大：",
    daoTitle: "DAO 治理新模式",
    daoDesc: "去中心化自治組織正在重塑組織結構：",
    web3Title: "Web3 生態全景圖",
    web3Desc: "Web3 重新定義互聯網未來：",
    futureTitle: "2026-2030 未來展望",
    futureDesc: "區塊鏈技術發展趨勢預測："
  },
  "zh-TW": {
    title: "區塊鏈2026大數據分析：八大應用場景改變你我的生活",
    subtitle: "DeFi TVL 2150億美元 · NFT市場 820億 · Web3用戶 6.5億",
    overview: `區塊鏈技術已經從比特幣時代進化到一個全方位改變各行各業的創新平台！2026年，全球區塊鏈市場規模達到2870億美元，年增長率高達67%，這個數字證明區塊鏈已經不再只是加密貨幣這麼簡單。

根據最新數據顯示，去中心化金融（DeFi）的總鎖倉價值（TVL）達到2150億美元，NFT市場規模達820億美元，而DAO組織管理的國庫總值更高達450億美元。Web3用戶數量突破6.5億，標誌著去中心化互聯網時代正式來臨！

區塊鏈的核心價值在於它能夠提供：
- **去中心化**：不需要中介機構，交易直接點對點
- **透明性**：所有交易記錄公開可查
- **不可篡改**：一旦記錄無法修改
- **智能合約**：自動執行、無需信任第三方`,
    defiTitle: "去中心化金融 DeFi 革命",
    defiDesc: "DeFi 是區塊鏈最大的應用場景，改變傳統金融遊戲規則：",
    nftTitle: "NFT 應用場景大爆發",
    nftDesc: "NFT 不再只是數位藝術品，應用範圍無限擴大：",
    daoTitle: "DAO 治理新模式",
    daoDesc: "去中心化自治組織正在重塑組織結構：",
    web3Title: "Web3 生態全景圖",
    web3Desc: "Web3 重新定義互聯網未來：",
    futureTitle: "2026-2030 未來展望",
    futureDesc: "區塊鏈技術發展趨勢預測："
  },
  "zh-CN": {
    title: "区块链2026大数据分析：八大应用场景改变你我的生活",
    subtitle: "DeFi TVL 2150亿美元 · NFT市场 820亿 · Web3用户 6.5亿",
    overview: `区块链技术已经从比特币时代进化到一个全方位改变各行各业的创新平台！2026年，全球区块链市场规模达到2870亿美元，年增长率高达67%，这个数字证明区块链已经不再只是加密货币这么简单。

根据最新数据显示，去中心化金融（DeFi）的总锁仓价值（TVL）达到2150亿美元，NFT市场规模达820亿美元，而DAO组织管理的国库总值更高达450亿美元。Web3用户数量突破6.5亿，标志著去中心化互联网时代正式来临！

区块链的核心价值在于它能够提供：
- **去中心化**：不需要中介机构，交易直接点对点
- **透明性**：所有交易记录公开可查
- **不可篡改**：一旦记录无法修改
- **智能合约**：自动执行、无需信任第三方`,
    defiTitle: "去中心化金融 DeFi 革命",
    defiDesc: "DeFi 是区块链最大的应用场景，改变传统金融游戏规则：",
    nftTitle: "NFT 应用场景大爆发",
    nftDesc: "NFT 不再只是数字艺术品，应用范围无限扩大：",
    daoTitle: "DAO 治理新模式",
    daoDesc: "去中心化自治组织正在重塑组织结构：",
    web3Title: "Web3 生态全景图",
    web3Desc: "Web3 重新定义互联网未来：",
    futureTitle: "2026-2030 未来展望",
    futureDesc: "区块链技术发展趋势预测："
  },
  en: {
    title: "Blockchain 2026 Big Data Analysis: 8 Application Scenarios Changing Our Lives",
    subtitle: "DeFi TVL $215B · NFT Market $82B · Web3 Users 650M",
    overview: `Blockchain technology has evolved from the Bitcoin era to an innovative platform that comprehensively transforms various industries! In 2026, the global blockchain market size reaches $287 billion, with an annual growth rate of 67%, proving that blockchain is no longer just about cryptocurrency.

According to latest data, Decentralized Finance (DeFi) Total Value Locked (TVL) reaches $215 billion, NFT market size reaches $82 billion, and DAO treasury totals reach $45 billion. Web3 users exceed 650 million, marking the arrival of the decentralized internet era!

Core blockchain values:
- **Decentralization**: No intermediaries, peer-to-peer transactions
- **Transparency**: All transaction records publicly verifiable
- **Immutability**: Once recorded, cannot be modified
- **Smart Contracts**: Automatic execution, trustless`,
    defiTitle: "DeFi Revolution",
    defiDesc: "DeFi is blockchain's largest application, changing traditional finance:",
    nftTitle: "NFT Application Explosion",
    nftDesc: "NFT is no longer just digital art, applications expanding infinitely:",
    daoTitle: "DAO Governance Model",
    daoDesc: "Decentralized autonomous organizations reshaping structure:",
    web3Title: "Web3 Ecosystem Overview",
    web3Desc: "Web3 redefining the future of the internet:",
    futureTitle: "2026-2030 Future Outlook",
    futureDesc: "Blockchain technology development trend predictions:"
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
      {/* Language Selector */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex gap-2 flex-wrap">
          {(["yue", "zh-TW", "zh-CN", "en"] as TravelLanguage[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                lang === l
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {l === "yue" ? "粵語" : l === "zh-TW" ? "繁體" : l === "zh-CN" ? "简体" : "English"}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-3">
            Blockchain
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{content.title}</h1>
          <p className="text-gray-200 text-lg">{content.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* TOC */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-5 shadow-sm sticky top-24">
              <h3 className="font-semibold mb-3 text-gray-800">目錄</h3>
              <nav className="space-y-2">
                {toc.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Overview */}
            <section id="overview" className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
            </section>

            {/* Stats Chart */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">2026 區塊鏈關鍵數據</h2>
              <div className="h-72">
                <svg viewBox="0 0 600 280" className="w-full h-full">
                  <text x="300" y="20" textAnchor="middle" fill="#1F2937" fontSize="14" fontWeight="bold">區塊鏈生態關鍵指標 (十億美元)</text>
                  <rect x="60" y="60" width="80" height="180" fill="#3B82F6" rx="4" />
                  <text x="100" y="250" textAnchor="middle" fill="#6B7280" fontSize="10">市場規模</text>
                  <text x="100" y="55" textAnchor="middle" fill="#1F2937" fontSize="11" fontWeight="bold">${blockchainStats.globalMarketSize}B</text>

                  <rect x="160" y="90" width="80" height="150" fill="#10B981" rx="4" />
                  <text x="200" y="250" textAnchor="middle" fill="#6B7280" fontSize="10">DeFi TVL</text>
                  <text x="200" y="85" textAnchor="middle" fill="#1F2937" fontSize="11" fontWeight="bold">${blockchainStats.defiTVL}B</text>

                  <rect x="260" y="130" width="80" height="110" fill="#F59E0B" rx="4" />
                  <text x="300" y="250" textAnchor="middle" fill="#6B7280" fontSize="10">NFT市場</text>
                  <text x="300" y="125" textAnchor="middle" fill="#1F2937" fontSize="11" fontWeight="bold">${blockchainStats.nftMarket}B</text>

                  <rect x="360" y="150" width="80" height="90" fill="#8B5CF6" rx="4" />
                  <text x="400" y="250" textAnchor="middle" fill="#6B7280" fontSize="10">DAO國庫</text>
                  <text x="400" y="145" textAnchor="middle" fill="#1F2937" fontSize="11" fontWeight="bold">${blockchainStats.daoTreasury}B</text>

                  <rect x="460" y="40" width="80" height="200" fill="#EC4899" rx="4" />
                  <text x="500" y="250" textAnchor="middle" fill="#6B7280" fontSize="10">Web3用戶</text>
                  <text x="500" y="35" textAnchor="middle" fill="#1F2937" fontSize="11" fontWeight="bold">{blockchainStats.web3Users}M</text>
                </svg>
              </div>
            </section>

            {/* DeFi */}
            <section id="defi" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.defiTitle}</h2>
              <p className="text-gray-600 mb-6">{content.defiDesc}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">$215B</div>
                  <div className="text-xs text-gray-600 mt-1">DeFi TVL</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">1,200+</div>
                  <div className="text-xs text-gray-600 mt-1">DeFi 協議</div>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">67%</div>
                  <div className="text-xs text-gray-600 mt-1">年增長率</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">8.5%</div>
                  <div className="text-xs text-gray-600 mt-1">平均APY</div>
                </div>
              </div>
            </section>

            {/* NFT */}
            <section id="nft" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.nftTitle}</h2>
              <p className="text-gray-600 mb-6">{content.nftDesc}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="text-3xl mb-2">🎨</div>
                  <h3 className="font-semibold text-gray-800">數位藝術品</h3>
                  <p className="text-sm text-gray-600 mt-2">Bored Ape、Azuki引領數位藝術熱潮</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="text-3xl mb-2">🎮</div>
                  <h3 className="font-semibold text-gray-800">GameFi 遊戲</h3>
                  <p className="text-sm text-gray-600 mt-2">Play-to-Earn 邊玩邊賺新模式</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="text-3xl mb-2">🏠</div>
                  <h3 className="font-semibold text-gray-800">虛擬地產</h3>
                  <p className="text-sm text-gray-600 mt-2">Decentraland虛擬土地投資</p>
                </div>
              </div>
            </section>

            {/* DAO */}
            <section id="dao" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.daoTitle}</h2>
              <p className="text-gray-600 mb-6">{content.daoDesc}</p>
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">MakerDAO</span>
                  <span className="font-bold text-purple-600">$8.5B</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">BitDAO</span>
                  <span className="font-bold text-blue-600">$5.2B</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">Uniswap DAO</span>
                  <span className="font-bold text-green-600">$3.8B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">其他DAO</span>
                  <span className="font-bold text-amber-600">$27.5B</span>
                </div>
              </div>
            </section>

            {/* Web3 */}
            <section id="web3" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.web3Title}</h2>
              <p className="text-gray-600 mb-6">{content.web3Desc}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center text-xl">🌐</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">去中心化社交</h3>
                    <p className="text-sm text-gray-600">Lens Protocol、Mastodon</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">🔑</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Web3 身份</h3>
                    <p className="text-sm text-gray-600">ENS域名、NFT身份認證</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">📱</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">去中心化應用</h3>
                    <p className="text-sm text-gray-600">OpenSea、Uniswap、Aave</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">☁️</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Web3 雲端</h3>
                    <p className="text-sm text-gray-600">Filecoin、Arweave存儲</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Future */}
            <section id="future" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.futureTitle}</h2>
              <p className="text-gray-600 mb-6">{content.futureDesc}</p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">CBDC 央行數位貨幣普及</h3>
                      <p className="text-sm text-gray-600">數位人民幣、數位美元相繼推出</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">AI + 區塊鏈融合</h3>
                      <p className="text-sm text-gray-600">去中心化AI計算平台興起</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Layer 2 大規模採用</h3>
                      <p className="text-sm text-gray-600">以太坊擴容方案成為主流</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-800">監管框架完善</h3>
                      <p className="text-sm text-gray-600">各國陸續推出區塊鏈監管政策</p>
                    </div>
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
