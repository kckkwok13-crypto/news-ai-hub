"use client";
import Comments from "@/components/Comments";
import Link from "next/link";

// ============ SVG Chart Components ============

// 1. Market Share Pie
const MarketShareSVG = () => (
  <svg viewBox="0 0 350 350" className="w-full max-w-md mx-auto">
    <text x="175" y="25" textAnchor="middle" className="fill-pink-300 text-sm font-bold">AI 圖像生成工具市場份額</text>

    {/* Pie */}
    <circle cx="175" cy="175" r="100" fill="none" stroke="#1e293b" strokeWidth="45"/>

    {/* Midjourney 45% */}
    <circle cx="175" cy="175" r="100" fill="none" stroke="#8b5cf6" strokeWidth="45"
      strokeDasharray="282 628" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 175 175)"/>

    {/* DALL-E 30% */}
    <circle cx="175" cy="175" r="100" fill="none" stroke="#10b981" strokeWidth="45"
      strokeDasharray="188 722" strokeDashoffset="-282" strokeLinecap="round" transform="rotate(-90 175 175)"/>

    {/* Stable Diffusion 18% */}
    <circle cx="175" cy="175" r="100" fill="none" stroke="#06b6d4" strokeWidth="45"
      strokeDasharray="113 797" strokeDashoffset="-470" strokeLinecap="round" transform="rotate(-90 175 175)"/>

    {/* Adobe Firefly 7% */}
    <circle cx="175" cy="175" r="100" fill="none" stroke="#f472b6" strokeWidth="45"
      strokeDasharray="44 866" strokeDashoffset="-583" strokeLinecap="round" transform="rotate(-90 175 175)"/>

    {/* Center */}
    <circle cx="175" cy="175" r="60" fill="#0f172a"/>
    <text x="175" y="165" textAnchor="middle" className="fill-white text-xl font-bold">45%</text>
    <text x="175" y="190" textAnchor="middle" className="fill-pink-400 text-xs">市場領先</text>

    {/* Legend */}
    <circle cx="55" cy="300" r="6" fill="#8b5cf6"/>
    <text x="68" y="304" className="fill-gray-300 text-xs">Midjourney 45%</text>
    <circle cx="165" cy="300" r="6" fill="#10b981"/>
    <text x="178" y="304" className="fill-gray-300 text-xs">DALL-E 30%</text>
    <circle cx="260" cy="300" r="6" fill="#06b6d4"/>
    <text x="273" y="304" className="fill-gray-300 text-xs">SD 18%</text>
  </svg>
);

// 2. Quality Comparison Bar
const QualityChartSVG = () => (
  <svg viewBox="0 0 450 250" className="w-full max-w-xl mx-auto">
    <text x="225" y="22" textAnchor="middle" className="fill-pink-300 text-sm font-bold">圖像質量評分對比（100分制）</text>

    {/* Realism */}
    <text x="90" y="60" className="fill-gray-300 text-sm">真實感</text>
    <rect x="100" y="45" width="300" height="22" rx="4" fill="#1e293b"/>
    <rect x="100" y="45" width="285" height="22" rx="4" fill="#8b5cf6"/>
    <text x="405" y="61" className="fill-white text-sm">95</text>

    {/* Artistic */}
    <text x="90" y="95" className="fill-gray-300 text-sm">藝術性</text>
    <rect x="100" y="80" width="300" height="22" rx="4" fill="#1e293b"/>
    <rect x="100" y="80" width="295" height="22" rx="4" fill="#ec4899"/>
    <text x="405" y="96" className="fill-white text-sm">98</text>

    {/* Detail */}
    <text x="90" y="130" className="fill-gray-300 text-sm">細節度</text>
    <rect x="100" y="115" width="300" height="22" rx="4" fill="#1e293b"/>
    <rect x="100" y="115" width="270" height="22" rx="4" fill="#10b981"/>
    <text x="405" y="131" className="fill-white text-sm">90</text>

    {/* Speed */}
    <text x="90" y="165" className="fill-gray-300 text-sm">生成速度</text>
    <rect x="100" y="150" width="300" height="22" rx="4" fill="#1e293b"/>
    <rect x="100" y="150" width="240" height="22" rx="4" fill="#06b6d4"/>
    <text x="405" y="166" className="fill-white text-sm">80</text>

    {/* Consistency */}
    <text x="90" y="200" className="fill-gray-300 text-sm">風格一致性</text>
    <rect x="100" y="185" width="300" height="22" rx="4" fill="#1e293b"/>
    <rect x="100" y="185" width="285" height="22" rx="4" fill="#f472b6"/>
    <text x="405" y="201" className="fill-white text-sm">95</text>

    {/* User Rating */}
    <text x="90" y="235" className="fill-gray-300 text-sm">用戶評分</text>
    <rect x="100" y="220" width="300" height="22" rx="4" fill="#1e293b"/>
    <rect x="100" y="220" width="288" height="22" rx="4" fill="#fbbf24"/>
    <text x="405" y="236" className="fill-white text-sm">96</text>
  </svg>
);

// 3. Parameter Effects Chart
const ParameterChartSVG = () => (
  <svg viewBox="0 0 400 220" className="w-full max-w-lg mx-auto">
    <text x="200" y="20" textAnchor="middle" className="fill-pink-300 text-sm font-bold">Midjourney 參數效果影響度</text>

    {/* Stylize */}
    <rect x="30" y="50" width="340" height="25" rx="6" fill="#1e293b"/>
    <rect x="30" y="50" width="280" height="25" rx="6" fill="#8b5cf6"/>
    <text x="315" y="67" className="fill-pink-300 text-xs font-bold">82%</text>
    <text x="320" y="67" className="fill-gray-400 text-xs">Stylize</text>

    {/* Chaos */}
    <rect x="30" y="90" width="340" height="25" rx="6" fill="#1e293b"/>
    <rect x="30" y="90" width="220" height="25" rx="6" fill="#ec4899"/>
    <text x="255" y="107" className="fill-pink-300 text-xs font-bold">65%</text>
    <text x="260" y="107" className="fill-gray-400 text-xs">Chaos</text>

    {/* Quality */}
    <rect x="30" y="130" width="340" height="25" rx="6" fill="#1e293b"/>
    <rect x="30" y="130" width="200" height="25" rx="6" fill="#10b981"/>
    <text x="235" y="147" className="fill-emerald-300 text-xs font-bold">59%</text>
    <text x="240" y="147" className="fill-gray-400 text-xs">Quality</text>

    {/* Aspect */}
    <rect x="30" y="170" width="340" height="25" rx="6" fill="#1e293b"/>
    <rect x="30" y="170" width="160" height="25" rx="6" fill="#06b6d4"/>
    <text x="195" y="187" className="fill-cyan-300 text-xs font-bold">47%</text>
    <text x="200" y="187" className="fill-gray-400 text-xs">Aspect</text>
  </svg>
);

// 4. Usage Growth
const UsageGrowthSVG = () => (
  <svg viewBox="0 0 450 220" className="w-full max-w-xl mx-auto">
    <text x="225" y="20" textAnchor="middle" className="fill-pink-300 text-sm font-bold">Midjourney 圖像生成量增長（百萬/月）</text>

    {/* Grid */}
    <line x1="40" y1="50" x2="40" y2="180" stroke="#1e293b" strokeWidth="2"/>
    <line x1="40" y1="180" x2="420" y2="180" stroke="#1e293b" strokeWidth="2"/>

    {/* Y labels */}
    <text x="35" y="55" textAnchor="end" className="fill-gray-400 text-xs">100M</text>
    <text x="35" y="87" textAnchor="end" className="fill-gray-400 text-xs">75M</text>
    <text x="35" y="120" textAnchor="end" className="fill-gray-400 text-xs">50M</text>
    <text x="35" y="152" textAnchor="end" className="fill-gray-400 text-xs">25M</text>
    <text x="35" y="185" textAnchor="end" className="fill-gray-400 text-xs">0</text>

    {/* Bars */}
    <rect x="55" y="160" width="40" height="20" rx="4" fill="#8b5cf6"/>
    <rect x="110" y="140" width="40" height="40" rx="4" fill="#8b5cf6"/>
    <rect x="165" y="110" width="40" height="70" rx="4" fill="#8b5cf6"/>
    <rect x="220" y="80" width="40" height="100" rx="4" fill="#8b5cf6"/>
    <rect x="275" y="55" width="40" height="125" rx="4" fill="#ec4899"/>
    <rect x="330" y="45" width="40" height="135" rx="4" fill="#ec4899"/>
    <rect x="385" y="40" width="40" height="140" rx="4" fill="#f472b6"/>

    {/* Labels */}
    <text x="75" y="198" textAnchor="middle" className="fill-gray-400 text-xs">2023/01</text>
    <text x="130" y="198" textAnchor="middle" className="fill-gray-400 text-xs">2023/04</text>
    <text x="185" y="198" textAnchor="middle" className="fill-gray-400 text-xs">2023/07</text>
    <text x="240" y="198" textAnchor="middle" className="fill-gray-400 text-xs">2023/10</text>
    <text x="295" y="198" textAnchor="middle" className="fill-gray-400 text-xs">2024/04</text>
    <text x="350" y="198" textAnchor="middle" className="fill-gray-400 text-xs">2024/10</text>
    <text x="405" y="198" textAnchor="middle" className="fill-pink-400 text-xs font-bold">2025/06</text>
  </svg>
);

// 5. Style Comparison
const StyleCompareSVG = () => (
  <svg viewBox="0 0 450 200" className="w-full max-w-xl mx-auto">
    <text x="225" y="20" textAnchor="middle" className="fill-pink-300 text-sm font-bold">不同風格生成效果評分</text>

    {/* Photorealistic */}
    <rect x="30" y="45" width="180" height="35" rx="6" fill="#10b981"/>
    <text x="40" y="68" className="fill-white text-sm font-bold">Photorealistic</text>
    <text x="220" y="68" className="fill-white text-sm">95%</text>

    {/* Anime */}
    <rect x="30" y="90" width="180" height="35" rx="6" fill="#ec4899"/>
    <text x="40" y="113" className="fill-white text-sm font-bold">Anime/漫畫</text>
    <text x="220" y="113" className="fill-white text-sm">92%</text>

    {/* Oil Painting */}
    <rect x="30" y="135" width="180" height="35" rx="6" fill="#8b5cf6"/>
    <text x="40" y="158" className="fill-white text-sm font-bold">Oil Painting</text>
    <text x="220" y="158" className="fill-white text-sm">97%</text>

    {/* 3D Render */}
    <rect x="240" y="45" width="180" height="35" rx="6" fill="#06b6d4"/>
    <text x="250" y="68" className="fill-white text-sm font-bold">3D Render</text>
    <text x="430" y="68" className="fill-white text-sm">89%</text>

    {/* Abstract */}
    <rect x="240" y="90" width="180" height="35" rx="6" fill="#f472b6"/>
    <text x="250" y="113" className="fill-white text-sm font-bold">Abstract</text>
    <text x="430" y="113" className="fill-white text-sm">85%</text>

    {/* Architecture */}
    <rect x="240" y="135" width="180" height="35" rx="6" fill="#fbbf24"/>
    <text x="250" y="158" className="fill-gray-900 text-sm font-bold">建築設計</text>
    <text x="430" y="158" className="fill-gray-900 text-sm">94%</text>
  </svg>
);

// 6. Price Comparison
const PriceCompareSVG = () => (
  <svg viewBox="0 400 200" className="w-full max-w-lg mx-auto">
    <text x="200" y="20" textAnchor="middle" className="fill-pink-300 text-sm font-bold">訂閱方案對比（每月）</text>

    {/* Basic */}
    <rect x="30" y="45" width="110" height="130" rx="8" fill="#1e293b" stroke="#64748b" strokeWidth="2"/>
    <text x="85" y="70" textAnchor="middle" className="fill-gray-300 text-sm font-bold">Basic</text>
    <text x="85" y="105" textAnchor="middle" className="fill-white text-2xl font-bold">$10</text>
    <text x="85" y="130" textAnchor="middle" className="fill-gray-400 text-xs">3.3小時</text>
    <text x="85" y="150" textAnchor="middle" className="fill-gray-400 text-xs">200張圖/月</text>
    <text x="85" y="165" textAnchor="middle" className="fill-gray-500 text-xs">fast mode</text>

    {/* Standard */}
    <rect x="150" y="45" width="110" height="130" rx="8" fill="#0f172a" stroke="#8b5cf6" strokeWidth="3"/>
    <text x="205" y="55" textAnchor="middle" className="fill-pink-400 text-xs font-bold">推薦</text>
    <text x="205" y="75" textAnchor="middle" className="fill-pink-300 text-sm font-bold">Standard</text>
    <text x="205" y="110" textAnchor="middle" className="fill-white text-2xl font-bold">$30</text>
    <text x="205" y="135" textAnchor="middle" className="fill-gray-400 text-xs">15小時</text>
    <text x="205" y="155" textAnchor="middle" className="fill-gray-400 text-xs">無限慢速</text>

    {/* Pro */}
    <rect x="270" y="45" width="110" height="130" rx="8" fill="#1e293b" stroke="#ec4899" strokeWidth="2"/>
    <text x="325" y="70" textAnchor="middle" className="fill-gray-300 text-sm font-bold">Pro</text>
    <text x="325" y="105" textAnchor="middle" className="fill-white text-2xl font-bold">$80</text>
    <text x="325" y="130" textAnchor="middle" className="fill-gray-400 text-xs">30小時</text>
    <text x="325" y="150" textAnchor="middle" className="fill-gray-400 text-xs">+隱私模式</text>
  </svg>
);

// TOC
const tocItems = [
  { id: "intro", title: "產品介紹", emoji: "🎨" },
  { id: "getting-started", title: "快速入門", emoji: "🚀" },
  { id: "prompts", title: "提示詞技巧", emoji: "✨" },
  { id: "parameters", title: "參數詳解", emoji: "⚙️" },
  { id: "comparison", title: "競品對比", emoji: "📊" },
];

export default function MidjourneyGuidePage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-950 via-purple-950 to-violet-950 text-white">
      {/* Floating TOC */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-pink-900/95 to-purple-900/95 backdrop-blur-xl border border-pink-400/30 rounded-2xl p-5 w-60 shadow-2xl">
          <h3 className="text-sm font-bold text-pink-300 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 text-pink-200 hover:text-white hover:bg-pink-800/80"
                >
                  <span className="text-lg">{emoji}</span>
                  <span>{title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-pink-300 hover:text-white mb-8 transition-colors bg-pink-900/30 px-4 py-2 rounded-full hover:bg-pink-900/50">
          ← 返回 Newsflow
        </Link>

        {/* Header */}
        <header className="text-center py-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-purple-600 to-violet-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            🎨 AI 圖像生成
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-200 via-purple-200 to-violet-200 bg-clip-text text-transparent">
            Midjourney 完整指南 2026
          </h1>
          <h2 className="text-xl text-pink-300 font-semibold mb-4">
            從新手到大師的圖像生成教程 | 提示詞技巧 + 實戰案例
          </h2>
          <p className="text-pink-400">June 2026 · 作者：AI 視覺藝術師</p>
        </header>

        {/* Hero Images Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-pink-500/20">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80" alt="AI Art 1" className="w-full h-48 object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
            <img src="https://images.unsplash.com/photo-16857915853-0ef4becd02d8?w=600&q=80" alt="AI Art 2" className="w-full h-48 object-cover" />
          </div>
        </div>
        <p className="text-center text-pink-400 text-sm mb-8">
          ▲ Midjourney 生成的驚豔 AI 藝術作品
        </p>

        <article className="prose prose-pink prose-lg max-w-none">
          {/* Introduction */}
          <div id="intro" className="mb-8">
            <p className="text-lg leading-relaxed text-pink-100">
              Midjourney 是目前最受歡迎的 <strong>AI 圖像生成工具</strong>，以其出色的藝術風格和令人驚嘆的視覺效果聞名。自 2022 年推出以來，已生成超過 <strong>10 億張圖像</strong>，成為設計師、藝術家和內容創作者的首選工具。
            </p>
            <p className="mt-4 text-pink-200">
              本指南將帶你從<strong>零基礎</strong>到<strong>掌握大師級技巧</strong>，涵蓋所有重要參數、提示詞策略，以及與其他工具的深度對比。
            </p>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/30 border border-pink-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-pink-300 font-bold mb-4 flex items-center gap-2">
              📈 Midjourney 關鍵數據
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-pink-900/30 rounded-lg p-4 text-center">
                <span className="text-pink-400 text-xs">總生成量</span>
                <p className="text-white font-bold text-xl mt-1">10億+</p>
              </div>
              <div className="bg-pink-900/30 rounded-lg p-4 text-center">
                <span className="text-pink-400 text-xs">市場份額</span>
                <p className="text-white font-bold text-xl mt-1">45%</p>
              </div>
              <div className="bg-pink-900/30 rounded-lg p-4 text-center">
                <span className="text-pink-400 text-xs">付費用戶</span>
                <p className="text-white font-bold text-xl mt-1">1500萬+</p>
              </div>
              <div className="bg-pink-900/30 rounded-lg p-4 text-center">
                <span className="text-pink-400 text-xs">用戶評分</span>
                <p className="text-white font-bold text-xl mt-1">4.8/5</p>
              </div>
            </div>
          </div>

          {/* Market Share Chart */}
          <MarketShareSVG />
          <p className="text-center text-pink-400 text-sm mb-8">▲ AI 圖像生成工具市場份額分佈</p>

          {/* Getting Started */}
          <h2 id="getting-started" className="text-2xl font-bold text-pink-200 mt-12 mb-6 flex items-center gap-3">
            <span className="text-3xl">🚀</span> 快速入門指南
          </h2>

          <div className="relative my-8 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" alt="Getting Started" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-950/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-pink-300 text-sm">▲ 開始你的 Midjourney 創作之旅</p>
          </div>

          <div className="bg-gradient-to-br from-pink-800 to-purple-900 border border-pink-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-pink-300 font-bold mb-4">📝 基礎命令格式</h4>
            <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
              <p className="text-pink-300">/imagine prompt: </p>
              <p className="text-purple-300">a beautiful landscape, sunset, photorealistic --ar 16:9 --v 6</p>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-pink-100">
              <div>
                <span className="text-pink-400 font-bold">/imagine</span>
                <p className="text-pink-200/70">開啟生成命令</p>
              </div>
              <div>
                <span className="text-pink-400 font-bold">prompt:</span>
                <p className="text-pink-200/70">你的描述詞</p>
              </div>
              <div>
                <span className="text-pink-400 font-bold">--v 6</span>
                <p className="text-pink-200/70">使用版本6模型</p>
              </div>
            </div>
          </div>

          {/* Prompts Section */}
          <h2 id="prompts" className="text-2xl font-bold text-pink-200 mt-12 mb-6 flex items-center gap-3">
            <span className="text-3xl">✨</span> 高級提示詞技巧
          </h2>

          <div className="relative my-8 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=80" alt="AI Art Examples" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-950/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-violet-300 text-sm">▲ 掌握提示詞，創作出獨特的藝術作品</p>
          </div>

          {/* Style Comparison */}
          <StyleCompareSVG />
          <p className="text-center text-pink-400 text-sm mb-8">▲ 不同藝術風格的生成效果評分</p>

          {/* Prompt Templates */}
          <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 rounded-2xl p-6 my-8 border border-purple-500/30">
            <h4 className="text-purple-300 font-bold mb-4">🎯 黃金提示詞模板</h4>
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <p className="text-purple-300 font-bold text-sm mb-2">風景攝影</p>
                <p className="text-pink-100 text-sm">
                  dramatic mountain landscape, golden hour lighting, aerial view, highly detailed, 8k resolution, National Geographic style --ar 16:9 --v 6
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <p className="text-purple-300 font-bold text-sm mb-2">人物肖像</p>
                <p className="text-pink-100 text-sm">
                  beautiful woman portrait, soft studio lighting, detailed skin texture, fashion photography, Canon 85mm f/1.4 --ar 3:4 --v 6
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <p className="text-purple-300 font-bold text-sm mb-2">產品設計</p>
                <p className="text-pink-100 text-sm">
                  minimalist product design, white background, floating, clean shadow, industrial design, studio photography --ar 1:1 --v 6
                </p>
              </div>
            </div>
          </div>

          {/* Parameters Section */}
          <h2 id="parameters" className="text-2xl font-bold text-pink-200 mt-12 mb-6 flex items-center gap-3">
            <span className="text-3xl">⚙️</span> 關鍵參數詳解
          </h2>

          <ParameterChartSVG />
          <p className="text-center text-pink-400 text-sm mb-8">▲ 各參數對生成效果的影響程度</p>

          {/* Quality Chart */}
          <QualityChartSVG />
          <p className="text-center text-pink-400 text-sm mb-8">▲ Midjourney v6 綜合質量評分</p>

          {/* Usage Growth */}
          <UsageGrowthSVG />
          <p className="text-center text-pink-400 text-sm mb-8">▲ Midjourney 圖像生成量增長趨勢</p>

          {/* Comparison Section */}
          <h2 id="comparison" className="text-2xl font-bold text-pink-200 mt-12 mb-6 flex items-center gap-3">
            <span className="text-3xl">📊</span> 與競品深度對比
          </h2>

          <PriceCompareSVG />
          <p className="text-center text-pink-400 text-sm mb-8">▲ Midjourney 訂閱方案對比</p>

          {/* Comparison Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-pink-900/50">
                  <th className="px-4 py-3 text-left text-pink-300">功能</th>
                  <th className="px-4 py-3 text-center text-pink-300">Midjourney</th>
                  <th className="px-4 py-3 text-center text-pink-300">DALL-E 3</th>
                  <th className="px-4 py-3 text-center text-pink-300">Stable Diffusion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-800/30">
                <tr className="bg-pink-900/20">
                  <td className="px-4 py-3 text-pink-100">月費</td>
                  <td className="px-4 py-3 text-center text-white">$30</td>
                  <td className="px-4 py-3 text-center text-white">$20</td>
                  <td className="px-4 py-3 text-center text-white">免費*</td>
                </tr>
                <tr className="bg-pink-900/10">
                  <td className="px-4 py-3 text-pink-100">藝術風格</td>
                  <td className="px-4 py-3 text-center text-emerald-400">★★★★★</td>
                  <td className="px-4 py-3 text-center text-emerald-400">★★★★☆</td>
                  <td className="px-4 py-3 text-center text-emerald-400">★★★★☆</td>
                </tr>
                <tr className="bg-pink-900/20">
                  <td className="px-4 py-3 text-pink-100">寫實度</td>
                  <td className="px-4 py-3 text-center text-emerald-400">★★★★★</td>
                  <td className="px-4 py-3 text-center text-emerald-400">★★★★★</td>
                  <td className="px-4 py-3 text-center text-emerald-400">★★★★☆</td>
                </tr>
                <tr className="bg-pink-900/10">
                  <td className="px-4 py-3 text-pink-100">速度</td>
                  <td className="px-4 py-3 text-center text-emerald-400">★★★★☆</td>
                  <td className="px-4 py-3 text-center text-emerald-400">★★★★★</td>
                  <td className="px-4 py-3 text-center text-amber-400">★★★☆☆</td>
                </tr>
                <tr className="bg-pink-900/20">
                  <td className="px-4 py-3 text-pink-100">本地部署</td>
                  <td className="px-4 py-3 text-center text-red-400">✗</td>
                  <td className="px-4 py-3 text-center text-red-400">✗</td>
                  <td className="px-4 py-3 text-center text-emerald-400">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-pink-900/40 to-purple-900/30 border border-pink-500/30 rounded-2xl p-6 my-8 text-center">
            <h4 className="text-pink-300 font-bold text-xl mb-3">🏆 總結推薦</h4>
            <p className="text-pink-100 leading-relaxed">
              Midjourney 是追求<strong>高質量藝術風格</strong>創作的首選工具。其獨特的美學風格和持續更新的模型版本，使其在 AI 圖像生成領域保持領先地位。建議從 <strong>Standard 方案</strong>（$30/月）開始，包含 15 小時快速生成時間，適合一般創作需求。
            </p>
          </div>

          {/* Ad */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>
        </article>
      </div>

      <Comments slug="midjourney-complete-guide" />
    </div>
  );
}