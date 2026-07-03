"use client";

import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

const tocItems = {
  yue: [
    { id: "overview", title: "DAO概述" },
    { id: "governance", title: "治理機制" },
    { id: "treasury", title: "國庫管理" },
    { id: "cases", title: "成功案例" },
    { id: "future", title: "未來展望" }
  ],
  "zh-TW": [
    { id: "overview", title: "DAO概述" },
    { id: "governance", title: "治理機制" },
    { id: "treasury", title: "國庫管理" },
    { id: "cases", title: "成功案例" },
    { id: "future", title: "未來展望" }
  ],
  "zh-CN": [
    { id: "overview", title: "DAO概述" },
    { id: "governance", title: "治理机制" },
    { id: "treasury", title: "国库管理" },
    { id: "cases", title: "成功案例" },
    { id: "future", title: "未来展望" }
  ],
  en: [
    { id: "overview", title: "DAO Overview" },
    { id: "governance", title: "Governance" },
    { id: "treasury", title: "Treasury" },
    { id: "cases", title: "Case Studies" },
    { id: "future", title: "Future" }
  ]
};

const tContent = {
  yue: {
    title: "DAO治理新時代：去中心化組織如何運作？",
    subtitle: "DAO國庫規模 200億美元+ · 投票成員 100萬+ · 平均提案通過率 67%",
    overview: `去中心化自治組織（DAO）正在重塑人類協作方式！2026年，全球DAO管理嘅國庫規模已突破200億美元，活躍投票成員超過100萬人。從治理加密貨幣協議到創建虛擬城市，DAO已成為Web3世界嘅核心治理模式。

DAO係基於區塊鏈嘅智能合約運作嘅組織，唔再需要傳統公司架構，唔需要CEO、董事長，所有決策由代幣持有者投票決定。呢種全新嘅組織形態，正在顛覆我哋對「公司」嘅認知。

DAO關鍵數據（2026年6月）：
- 活躍DAO數量：15,000+
- 總國庫規模：200億美元
- 註冊成員：500萬+
- 平均投票率：15-20%`,
    featuresTitle: "DAO 核心特點",
    applicationsTitle: "DAO 應用場景",
    applicationsDesc: "DAO正在顛覆多個領域：",
    challengesTitle: "挑戰與機遇",
    futureTitle: "未來發展方向"
  },
  "zh-TW": {
    title: "DAO治理新時代：去中心化組織如何運作？",
    subtitle: "DAO國庫規模 200億美元+ · 投票成員 100萬+ · 平均提案通過率 67%",
    overview: `去中心化自治組織（DAO）正在重塑人類協作方式！2026年，全球DAO管理的國庫規模已突破200億美元，活躍投票成員超過100萬人。從治理加密貨幣協議到創建虛擬城市，DAO已成為Web3世界的核心治理模式。

DAO是基於區塊鏈智能合約運作的組織，不需要傳統公司架構，不需要CEO、董事長，所有決策由代幣持有者投票決定。這種全新的組織形態，正在顛覆我們對「公司」的認知。

DAO關鍵數據（2026年6月）：
- 活躍DAO數量：15,000+
- 總國庫規模：200億美元
- 註冊成員：500萬+
- 平均投票率：15-20%`,
    featuresTitle: "DAO 核心特點",
    applicationsTitle: "DAO 應用場景",
    applicationsDesc: "DAO正在顛覆多個領域：",
    challengesTitle: "挑戰與機遇",
    futureTitle: "未來發展方向"
  },
  "zh-CN": {
    title: "DAO治理新时代：去中心化组织如何运作？",
    subtitle: "DAO国库规模 200亿美元+ · 投票成员 100万+ · 平均提案通过率 67%",
    overview: `去中心化自治组织（DAO）正在重塑人类协作方式！2026年，全球DAO管理的国库规模已突破200亿美元，活跃投票成员超过100万人。从治理加密货币协议到创建虚拟城市，DAO已成为Web3世界的核心治理模式。

DAO是基于区块链智能合约运作的组织，不需要传统公司架构，不需要CEO、董事长，所有决策由代币持有者投票决定。这种全新的组织形态，正在颠覆我们对「公司」的认知。

DAO关键数据（2026年6月）：
- 活跃DAO数量：15,000+
- 总国库规模：200亿美元
- 注册成员：500万+
- 平均投票率：15-20%`,
    featuresTitle: "DAO 核心特点",
    applicationsTitle: "DAO 应用场景",
    applicationsDesc: "DAO正在颠覆多个领域：",
    challengesTitle: "挑战与机遇",
    futureTitle: "未来发展方向"
  },
  en: {
    title: "DAO Governance: How Decentralized Organizations Work",
    subtitle: "DAO Treasury $20B+ · Voters 1M+ · Pass Rate 67%",
    overview: `Decentralized Autonomous Organizations (DAO) are reshaping human collaboration! In June 2026, global DAO treasuries exceed $20 billion with 1M+ active voters. From governing crypto protocols to building virtual cities, DAO has become Web3's core governance model.

DAO operates through blockchain smart contracts without traditional corporate structure. All decisions are made through token holder voting. This new organizational form is disrupting our concept of "company".

DAO Key Data (June 2026):
- Active DAOs: 15,000+
- Total Treasury: $20B
- Registered Members: 5M+
- Average Voting Rate: 15-20%`,
    featuresTitle: "DAO Core Features",
    applicationsTitle: "DAO Applications",
    applicationsDesc: "DAO is disrupting multiple areas:",
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
                lang === l ? "bg-slate-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {l === "yue" ? "粵語" : l === "zh-TW" ? "繁體" : l === "zh-CN" ? "简体" : "English"}
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 bg-slate-700 text-white text-sm rounded-full mb-3">DAO</span>
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
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-slate-700 transition-colors">{item.title}</a>
                ))}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <section id="overview" className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.overview}</p>
            </section>

            <section id="governance" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">{content.featuresTitle}</h2>
              <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-800 mb-4">DAO治理機制示意圖</h3>
                <div className="flex items-center justify-between text-sm">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-2">👤</div>
                    <div className="font-medium">提案者</div>
                    <div className="text-gray-500 text-xs">任何代幣持有者</div>
                  </div>
                  <div className="text-2xl text-slate-400">→</div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-2">📝</div>
                    <div className="font-medium">提案討論</div>
                    <div className="text-gray-500 text-xs">社群Forum審議</div>
                  </div>
                  <div className="text-2xl text-slate-400">→</div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-2">🗳️</div>
                    <div className="font-medium">鏈上投票</div>
                    <div className="text-gray-500 text-xs">代幣加權投票</div>
                  </div>
                  <div className="text-2xl text-slate-400">→</div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-2">⚙️</div>
                    <div className="font-medium">自動執行</div>
                    <div className="text-gray-500 text-xs">智能合約執行</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">📊</div>
                  <h3 className="font-semibold text-gray-800 mb-2">代幣加權投票</h3>
                  <p className="text-sm text-gray-600">持有代幣數量決定投票權重，避免一人一票被操控</p>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">⏰</div>
                  <h3 className="font-semibold text-gray-800 mb-2">時間鎖定</h3>
                  <p className="text-sm text-gray-600">代幣需鎖定一定時間先可以投票，防止短期操控</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">🎯</div>
                  <h3 className="font-semibold text-gray-800 mb-2">多重簽名</h3>
                  <p className="text-sm text-gray-600">大額資金需多個地址共同簽署，保障資產安全</p>
                </div>
                <div className="bg-rose-50 rounded-lg p-5">
                  <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center text-white text-2xl mb-3">⚖️</div>
                  <h3 className="font-semibold text-gray-800 mb-2">法定人數</h3>
                  <p className="text-sm text-gray-600">投票人數需達到最低門檻，提案先可以通過</p>
                </div>
              </div>
            </section>

            <section id="treasury" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.applicationsTitle}</h2>
              <p className="text-gray-600 mb-6">{content.applicationsDesc}</p>
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-800 mb-4">DAO國庫排行榜（2026年6月）</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🥇</span>
                      <span className="font-medium">BitDAO</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-amber-600">$23億</div>
                      <div className="text-xs text-gray-500">代幣國庫</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🥈</span>
                      <span className="font-medium">Uniswap</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-amber-600">$18億</div>
                      <div className="text-xs text-gray-500">代幣國庫</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🥉</span>
                      <span className="font-medium">MakerDAO</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-amber-600">$15億</div>
                      <div className="text-xs text-gray-500">代幣國庫</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">4</span>
                      <span className="font-medium">Aave</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-amber-600">$12億</div>
                      <div className="text-xs text-gray-500">代幣國庫</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">5</span>
                      <span className="font-medium">Compound</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-amber-600">$8億</div>
                      <div className="text-xs text-gray-500">代幣國庫</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="cases" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.challengesTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-orange-500">⚠️</span> DAO挑戰
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 投票率低（通常15-20%）</li>
                    <li>• 大戶操控風險</li>
                    <li>• 法律地位不明確</li>
                    <li>• 智能合約漏洞</li>
                    <li>• 決策效率較低</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="text-green-500">✅</span> DAO優勢
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• 完全透明可驗證</li>
                    <li>• 24/7全球參與</li>
                    <li>• 無需信任中介</li>
                    <li>• 規則代碼化執行</li>
                    <li>• 快速國際協作</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{content.futureTitle}</h2>
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🏢</div>
                    <h3 className="font-semibold text-gray-800 mb-2">DAO公司化</h3>
                    <p className="text-sm text-gray-600">傳統公司轉型DAO，提升治理效率</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🌍</div>
                    <h3 className="font-semibold text-gray-800 mb-2">跨鏈DAO</h3>
                    <p className="text-sm text-gray-600">打破區塊鏈邊界，實現跨鏈治理</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">⚖️</div>
                    <h3 className="font-semibold text-gray-800 mb-2">法律框架</h3>
                    <p className="text-sm text-gray-600">各國制定DAO法律地位，納入監管</p>
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
