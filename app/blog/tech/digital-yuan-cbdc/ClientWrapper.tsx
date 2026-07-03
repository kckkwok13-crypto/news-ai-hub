"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tocItems = {
  yue: [
    { id: "overview", title: "CBDC概述" },
    { id: "digital-yuan", title: "數位人民幣" },
    { id: "global-cbdc", title: "各國CBDC發展" },
    { id: "stablecoins", title: "穩定幣競爭" },
    { id: "future", title: "未來展望" }
  ],
  "zh-TW": [
    { id: "overview", title: "CBDC概述" },
    { id: "digital-yuan", title: "數位人民幣" },
    { id: "global-cbdc", title: "各國CBDC發展" },
    { id: "stablecoins", title: "穩定幣競爭" },
    { id: "future", title: "未來展望" }
  ],
  "zh-CN": [
    { id: "overview", title: "CBDC概述" },
    { id: "digital-yuan", title: "数字人民币" },
    { id: "global-cbdc", title: "各国CBDC发展" },
    { id: "stablecoins", title: "稳定币竞争" },
    { id: "future", title: "未来展望" }
  ],
  en: [
    { id: "overview", title: "CBDC Overview" },
    { id: "digital-yuan", title: "Digital Yuan" },
    { id: "global-cbdc", title: "Global CBDC" },
    { id: "stablecoins", title: "Stablecoins" },
    { id: "future", title: "Future Outlook" }
  ]
};

const tContent = {
  yue: {
    title: "央行數位貨幣CBDC大戰：數位人民幣 vs 美元穩定幣",
    subtitle: "數位人民幣交易額 3萬億+ · 全球134國CBDC研究中 · 穩定幣市值 1500億美元",
    overview: `全球央行數位貨幣（CBDC）大戰已經爆發！截至2026年6月，全球134個國家同地區嘅央行已經喺度研究或開發CBDC，當中68個國家已經進入試點階段。中國數位人民幣（e-CNY）交易額已突破3萬億元人民幣，成為全球最大規模嘅CBDC項目。

CBDC係由央行發行嘅數位貨幣，唔同比特幣等加密貨幣，CBDC有國家信用背書，等於係現金嘅數位化形態。各國央行之所以積極研發CBDC，主要係為咗應對私營機構發行嘅穩定幣挑戰，同時提升支付效率同埋打擊洗錢。

全球CBDC發展數據（2026年6月）：
- 研究階段：66個國家
- 開發階段：44個國家
- 試點階段：68個國家
- 正式發行：11個國家`,
    featuresTitle: "CBDC 核心特點",
    applicationsTitle: "CBDC 應用場景",
    applicationsDesc: "央行數位貨幣正在改變多個領域：",
    challengesTitle: "挑戰與機遇",
    futureTitle: "未來發展方向"
  },
  "zh-TW": {
    title: "央行數位貨幣CBDC大戰：數位人民幣 vs 美元穩定幣",
    subtitle: "數位人民幣交易額 3萬億+ · 全球134國CBDC研究中 · 穩定幣市值 1500億美元",
    overview: `全球央行數位貨幣（CBDC）大戰已經爆發！截至2026年6月，全球134個國家和地區的央行正在研究或開發CBDC，其中68個國家已經進入試點階段。中國數位人民幣（e-CNY）交易額已突破3萬億元人民幣，成為全球最大規模的CBDC項目。

CBDC是由央行發行的數位貨幣，不同於比特幣等加密貨幣，CBDC有國家信用背書，等同於現金的數位化形態。各國央行之所以積極研發CBDC，主要是為了應對私營機構發行的穩定幣挑戰，同時提升支付效率和打擊洗錢。

全球CBDC發展數據（2026年6月）：
- 研究階段：66個國家
- 開發階段：44個國家
- 試點階段：68個國家
- 正式發行：11個國家`,
    featuresTitle: "CBDC 核心特點",
    applicationsTitle: "CBDC 應用場景",
    applicationsDesc: "央行數位貨幣正在改變多個領域：",
    challengesTitle: "挑戰與機遇",
    futureTitle: "未來發展方向"
  },
  "zh-CN": {
    title: "央行数字货币CBDC大战：数字人民币 vs 美元稳定币",
    subtitle: "数字人民币交易额 3万亿+ · 全球134国CBDC研究中 · 稳定币市值 1500亿美元",
    overview: `全球央行数字货币（CBDC）大战已经爆发！截至2026年6月，全球134个国家和地区央行正在研究或开发CBDC，其中68个国家已进入试点阶段。中国数字人民币（e-CNY）交易额已突破3万亿元人民币，成为全球最大规模的CBDC项目。

CBDC是由央行发行的数字货币，不同于比特币等加密货币，CBDC有国家信用背书，等同于现金的数字化形态。各国央行之所以积极研发CBDC，主要是为了应对私营机构发行的稳定币挑战，同时提升支付效率和打击洗钱。

全球CBDC发展数据（2026年6月）：
- 研究阶段：66个国家
- 开发阶段：44个国家
- 试点阶段：68个国家
- 正式发行：11个国家`,
    featuresTitle: "CBDC 核心特点",
    applicationsTitle: "CBDC 应用场景",
    applicationsDesc: "央行数字货币正在改变多个领域：",
    challengesTitle: "挑战与机遇",
    futureTitle: "未来发展方向"
  },
  en: {
    title: "CBDC Wars: Digital Yuan vs Dollar Stablecoins",
    subtitle: "e-CNY Volume 3T+ CNY · 134 Countries Researching · Stablecoin Cap $150B",
    overview: `The global Central Bank Digital Currency (CBDC) war has begun! As of June 2026, 134 countries are researching or developing CBDC, with 68 already in pilot stages. China's e-CNY has processed over 3 trillion yuan, becoming the world's largest CBDC project.

CBDC is a digital currency issued by central banks, backed by national credit unlike crypto. Central banks are developing CBDC to counter private stablecoins and improve payment efficiency.

Global CBDC Status (June 2026):
- Researching: 66 countries
- Developing: 44 countries
- Piloting: 68 countries
- Launched: 11 countries`,
    featuresTitle: "CBDC Core Features",
    applicationsTitle: "CBDC Applications",
    applicationsDesc: "CBDC is transforming multiple areas:",
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
                lang === l ? "bg-amber-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {l === "yue" ? "粵語" : l === "zh-TW" ? "繁體" : l === "zh-CN" ? "简体" : "English"}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-amber-600 text-white text-sm rounded-full mb-3">CBDC</span>
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
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-amber-600 transition-colors">{item.title}</a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <section id="overview" className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
            </section>

            <section id="digital-yuan" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{content.featuresTitle}</h2>
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-800 mb-4">數位人民幣（e-CNY）發展數據</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600">3.6萬億</div>
                    <div className="text-sm text-gray-600">累計交易額（人民幣）</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600">2.6億</div>
                    <div className="text-sm text-gray-600">開通錢包數量</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600">26個</div>
                    <div className="text-sm text-gray-600">試點城市</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-600">1200+</div>
                    <div className="text-sm text-gray-600">落地場景</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">💳</div>
                  <h3 className="font-semibold text-gray-800 mb-2">零售支付</h3>
                  <p className="text-sm text-gray-600">覆蓋超市、交通、餐飲等日常消費場景，支持雙離線支付</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">🏢</div>
                  <h3 className="font-semibold text-gray-800 mb-2">政務服務</h3>
                  <p className="text-sm text-gray-600">社保、公積金罰款繳納、政務補貼發放等場景</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">🌐</div>
                  <h3 className="font-semibold text-gray-800 mb-2">跨境支付</h3>
                  <p className="text-sm text-gray-600">已與香港、泰國、阿聯酋等國家進行跨境支付測試</p>
                </div>
                <div className="bg-rose-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">🧊</div>
                  <h3 className="font-semibold text-gray-800 mb-2">可控匿名</h3>
                  <p className="text-sm text-gray-600">小額支付匿名，大額支付需實名，平衡隱私與監管</p>
                </div>
              </div>
            </section>

            <section id="global-cbdc" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.applicationsTitle}</h2>
              <p className="text-gray-600 mb-6">{content.applicationsDesc}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 rounded-tl-lg">國家/地區</th>
                      <th className="text-left p-3">CBDC名稱</th>
                      <th className="text-left p-3">階段</th>
                      <th className="text-right p-3 rounded-tr-lg">特點</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3">🇺🇸 美國</td>
                      <td className="p-3">Digital Dollar</td>
                      <td className="p-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">試點中</span></td>
                      <td className="p-3 text-right">美元國際化</td>
                    </tr>
                    <tr>
                      <td className="p-3">🇪🇺 歐元區</td>
                      <td className="p-3">Digital Euro</td>
                      <td className="p-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">準備中</span></td>
                      <td className="p-3 text-right">隱私保護優先</td>
                    </tr>
                    <tr>
                      <td className="p-3">🇬🇧 英國</td>
                      <td className="p-3">Britcoin</td>
                      <td className="p-3"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">試點中</span></td>
                      <td className="p-3 text-right">金融科技中心</td>
                    </tr>
                    <tr>
                      <td className="p-3">🇯🇵 日本</td>
                      <td className="p-3">Digital Yen</td>
                      <td className="p-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">準備中</span></td>
                      <td className="p-3 text-right">老齡化社會需求</td>
                    </tr>
                    <tr>
                      <td className="p-3">🇰🇷 韓國</td>
                      <td className="p-3">Digital Won</td>
                      <td className="p-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">已發行</span></td>
                      <td className="p-3 text-right">批發型CBDC</td>
                    </tr>
                    <tr>
                      <td className="p-3">🇳🇬 奈及利亞</td>
                      <td className="p-3">e-Naira</td>
                      <td className="p-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">已發行</span></td>
                      <td className="p-3 text-right">非洲首個CBDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="stablecoins" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.challengesTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-orange-500">⚠️</span> CBDC挑戰
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 隱私與監管嘅平衡</li>
                    <li>• 銀行脫媒風險</li>
                    <li>• 跨境協調複雜</li>
                    <li>• 技術安全要求高</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-green-500">✅</span> 穩定幣優勢
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 全球流通無國界</li>
                    <li>• 24/7實時結算</li>
                    <li>• DeFi生態支援</li>
                    <li>• 跨境匯款低成本</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-gray-100 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">穩定幣市場數據（2026年6月）</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-gray-800">$1500億</div>
                    <div className="text-xs text-gray-600">總市值</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-800">$780億</div>
                    <div className="text-xs text-gray-600">USDT市值</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-800">$320億</div>
                    <div className="text-xs text-gray-600">USDC市值</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-800">$400億</div>
                    <div className="text-xs text-gray-600">日交易量</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="future" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.futureTitle}</h2>
              <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🔗</div>
                    <h3 className="font-semibold text-gray-800 mb-2">跨境互聯互通</h3>
                    <p className="text-sm text-gray-600">各國CBDC系統互聯，實現實時跨境支付</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">📱</div>
                    <h3 className="font-semibold text-gray-800 mb-2">支付即結算</h3>
                    <p className="text-sm text-gray-600">消除中間環節，實現即時清算結算</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🏛️</div>
                    <h3 className="font-semibold text-gray-800 mb-2">監管科技融合</h3>
                    <p className="text-sm text-gray-600">CBDC内嵌合規功能，自動監管交易</p>
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
