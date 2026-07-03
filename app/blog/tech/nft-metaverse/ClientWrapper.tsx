"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tocItems = {
  yue: [
    { id: "overview", title: "元宇宙概述" },
    { id: "virtual-land", title: "虛擬地產" },
    { id: "nft-economy", title: "NFT經濟" },
    { id: "platforms", title: "主要平台" },
    { id: "future", title: "未來發展" }
  ],
  "zh-TW": [
    { id: "overview", title: "元宇宙概述" },
    { id: "virtual-land", title: "虛擬地產" },
    { id: "nft-economy", title: "NFT經濟" },
    { id: "platforms", title: "主要平台" },
    { id: "future", title: "未來發展" }
  ],
  "zh-CN": [
    { id: "overview", title: "元宇宙概述" },
    { id: "virtual-land", title: "虚拟地产" },
    { id: "nft-economy", title: "NFT经济" },
    { id: "platforms", title: "主要平台" },
    { id: "future", title: "未来发展" }
  ],
  en: [
    { id: "overview", title: "Metaverse Overview" },
    { id: "virtual-land", title: "Virtual Land" },
    { id: "nft-economy", title: "NFT Economy" },
    { id: "platforms", title: "Major Platforms" },
    { id: "future", title: "Future" }
  ]
};

const tContent = {
  yue: {
    title: "元宇宙地產大亨：NFT如何重塑虛擬世界經濟？",
    subtitle: "虛擬地產市場 50億美元 · Decentraland土地 $240萬 · NFT市場 250億美元",
    overview: `元宇宙唔再係得個講字！2026年，全球虛擬地產市場規模已突破50億美元，NFT市場總市值達到250億美元。Decentraland同The Sandbox等元宇宙平台已經吸引咗數百萬活躍用戶，虛擬世界正在創建全新嘅數位經濟形態。

喺元宇宙入面，土地、建築、甚至角色全部都可以係NFT。用戶可以購買虛擬土地起商場、廣場、博物館，舉辦虛擬演唱會，甚至創建自己嘅遊戲。呢啲虛擬資產全部通過區塊鏈確權，真正歸玩家所有。

元宇宙NFT關鍵數據（2026年6月）：
- 虛擬地產市場：50億美元
- NFT市場規模：250億美元
- 元宇宙活躍用戶：5000萬+
- 虛擬土地交易：100萬宗`,
    featuresTitle: "元宇宙 核心概念",
    applicationsTitle: "元宇宙應用場景",
    applicationsDesc: "元宇宙正在改變多個領域：",
    challengesTitle: "挑戰與機遇",
    futureTitle: "未來發展方向"
  },
  "zh-TW": {
    title: "元宇宙地產大亨：NFT如何重塑虛擬世界經濟？",
    subtitle: "虛擬地產市場 50億美元 · Decentraland土地 $240萬 · NFT市場 250億美元",
    overview: `元宇宙不再是得個講字！2026年，全球虛擬地產市場規模已突破50億美元，NFT市場總市值達到250億美元。Decentraland和The Sandbox等元宇宙平台已經吸引了數百萬活躍用戶，虛擬世界正在創建全新的數位經濟形態。

在元宇宙裡，土地、建築、甚至角色全部都可以是NFT。用戶可以購買虛擬土地起商場、廣場、博物館，舉辦虛擬演唱會，甚至創建自己的遊戲。這些虛擬資產全部通過區塊鏈確權，真正歸玩家所有。

元宇宙NFT關鍵數據（2026年6月）：
- 虛擬地產市場：50億美元
- NFT市場規模：250億美元
- 元宇宙活躍用戶：5000萬+
- 虛擬土地交易：100萬宗`,
    featuresTitle: "元宇宙 核心概念",
    applicationsTitle: "元宇宙應用場景",
    applicationsDesc: "元宇宙正在改變多個領域：",
    challengesTitle: "挑戰與機遇",
    futureTitle: "未來發展方向"
  },
  "zh-CN": {
    title: "元宇宙地产大亨：NFT如何重塑虚拟世界经济？",
    subtitle: "虚拟地产市场 50亿美元 · Decentraland土地 $240万 · NFT市场 250亿美元",
    overview: `元宇宙不再是得个讲字！2026年，全球虚拟地产市场规模已突破50亿美元，NFT市场总市值达到250亿美元。Decentraland和The Sandbox等元宇宙平台已经吸引了数百万活跃用户，虚拟世界正在创建全新的数字经济形态。

在元宇宙里，土地、建筑、甚至角色全部都可以是NFT。用户可以购买虚拟土地起商场、广场、博物馆，举办虚拟演唱会，甚至创建自己的游戏。这些虚拟资产全部通过区块链确权，真正归玩家所有。

元宇宙NFT关键数据（2026年6月）：
- 虚拟地产市场：50亿美元
- NFT市场规模：250亿美元
- 元宇宙活跃用户：5000万+
- 虚拟土地交易：100万宗`,
    featuresTitle: "元宇宙 核心概念",
    applicationsTitle: "元宇宙应用场景",
    applicationsDesc: "元宇宙正在改变多个领域：",
    challengesTitle: "挑战与机遇",
    futureTitle: "未来发展方向"
  },
  en: {
    title: "Metaverse Tycoon: How NFT Reshapes Virtual World Economy?",
    subtitle: "Virtual Land Market $5B · Decentraland $2.4M · NFT Market $25B",
    overview: `The metaverse is no longer just talk! In 2026, global virtual land market exceeds $5 billion, NFT market cap reaches $250 billion. Platforms like Decentraland and The Sandbox have attracted millions of active users.

In the metaverse, land, buildings, even characters can all be NFTs. Users can buy virtual land to build malls, squares, museums, host virtual concerts, even create their own games. All virtual assets are blockchain-verified, truly owned by players.

Metaverse NFT Key Data (June 2026):
- Virtual Land Market: $5B
- NFT Market Size: $25B
- Metaverse Users: 50M+
- Virtual Land Trades: 1M+`,
    featuresTitle: "Metaverse Core Concepts",
    applicationsTitle: "Metaverse Applications",
    applicationsDesc: "The metaverse is transforming multiple areas:",
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
                lang === l ? "bg-violet-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {l === "yue" ? "粵語" : l === "zh-TW" ? "繁體" : l === "zh-CN" ? "简体" : "English"}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-violet-600 text-white text-sm rounded-full mb-3">Metaverse</span>
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
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-violet-600 transition-colors">{item.title}</a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <section id="overview" className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
            </section>

            <section id="virtual-land" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{content.featuresTitle}</h2>
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-800 mb-4">虛擬地產價格排行榜（2026年6月）</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🥇</span>
                      <span className="font-medium">Decentraland - Fashion Street</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-violet-600">$240萬</div>
                      <div className="text-xs text-gray-500">美元</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🥈</span>
                      <span className="font-medium">The Sandbox - Genesis Plaza</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-violet-600">$180萬</div>
                      <div className="text-xs text-gray-500">美元</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🥉</span>
                      <span className="font-medium">Voxels - CryptoVoxels Central</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-violet-600">$95萬</div>
                      <div className="text-xs text-gray-500">美元</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">4</span>
                      <span className="font-medium">Otherside - Koda</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-violet-600">$85萬</div>
                      <div className="text-xs text-gray-500">美元</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">🏗️</div>
                  <h3 className="font-semibold text-gray-800 mb-2">虛擬建築</h3>
                  <p className="text-sm text-gray-600">用戶可以起商場、博物館、演唱廳，仲可以出租俾其他品牌</p>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">🎪</div>
                  <h3 className="font-semibold text-gray-800 mb-2">虛擬活動</h3>
                  <p className="text-sm text-gray-600">舉辦虛擬演唱會、時裝表演、藝術展覽，觀眾可以達到數萬人</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">🎮</div>
                  <h3 className="font-semibold text-gray-800 mb-2">遊戲體驗</h3>
                  <p className="text-sm text-gray-600">創建自己嘅mini games，邀請其他用戶參與，賺取遊戲內代幣</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">🏪</div>
                  <h3 className="font-semibold text-gray-800 mb-2">商業租賃</h3>
                  <p className="text-sm text-gray-600">將虛擬土地出租俾品牌，設置廣告牌，每月收取穩定租金收入</p>
                </div>
              </div>
            </section>

            <section id="nft-economy" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.applicationsTitle}</h2>
              <p className="text-gray-600 mb-6">{content.applicationsDesc}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 rounded-tl-lg">NFT類型</th>
                      <th className="text-right p-3">市場份額</th>
                      <th className="text-right p-3 rounded-tr-lg">代表項目</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3">🎨 藝術品NFT</td>
                      <td className="p-3 text-right">35%</td>
                      <td className="p-3 text-right">Beeple, Art Blocks</td>
                    </tr>
                    <tr>
                      <td className="p-3">🎮 遊戲道具NFT</td>
                      <td className="p-3 text-right">28%</td>
                      <td className="p-3 text-right">Axie, STEPN</td>
                    </tr>
                    <tr>
                      <td className="p-3">🌐 域名NFT</td>
                      <td className="p-3 text-right">15%</td>
                      <td className="p-3 text-right">ENS, Unstoppable</td>
                    </tr>
                    <tr>
                      <td className="p-3">🎵 音樂NFT</td>
                      <td className="p-3 text-right">10%</td>
                      <td className="p-3 text-right">Sound.xyz, Audius</td>
                    </tr>
                    <tr>
                      <td className="p-3">📝 會員Pass</td>
                      <td className="p-3 text-right">8%</td>
                      <td className="p-3 text-right">BAYC, CryptoPunks</td>
                    </tr>
                    <tr>
                      <td className="p-3">🏠 虛擬地產</td>
                      <td className="p-3 text-right">4%</td>
                      <td className="p-3 text-right">Decentraland</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-gradient-to-r from-violet-50 to-blue-50 rounded-lg p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-violet-600">$250億</div>
                    <div className="text-xs text-gray-600">NFT總市值</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">5000萬</div>
                    <div className="text-xs text-gray-600">NFT持有者</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-green-600">$50億</div>
                    <div className="text-xs text-gray-600">虛擬地產市場</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-amber-600">100萬+</div>
                    <div className="text-xs text-gray-600">土地交易數</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="platforms" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.challengesTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-orange-500">⚠️</span> 挑戰
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 價格波動大，投資風險高</li>
                    <li>• 用戶體驗有待改善</li>
                    <li>• 技術門檻較高</li>
                    <li>• 監管政策不明確</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-green-500">✅</span> 機遇
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 全新商業模式</li>
                    <li>• 品牌進軍元宇宙</li>
                    <li>• 虛擬經濟爆發</li>
                    <li>• 跨平台互通</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.futureTitle}</h2>
              <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">👔</div>
                    <h3 className="font-semibold text-gray-800 mb-2">虛擬辦公室</h3>
                    <p className="text-sm text-gray-600">企業喺元宇宙設立虛擬辦公室，員工遙距協作</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🎓</div>
                    <h3 className="font-semibold text-gray-800 mb-2">虛擬教育</h3>
                    <p className="text-sm text-gray-600">沉浸式學習體驗，虛擬教室同實驗室</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🏥</div>
                    <h3 className="font-semibold text-gray-800 mb-2">虛擬醫療</h3>
                    <p className="text-sm text-gray-600">遠程醫療咨詢，VR手術模擬訓練</p>
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
