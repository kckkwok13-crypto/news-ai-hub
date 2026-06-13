"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";

// SVG Chart Components
const BarChartSVG = () => (
  <svg viewBox="0 0 400 250" className="w-full max-w-md mx-auto">
    <defs>
      <linearGradient id="barGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#0891b2" />
      </linearGradient>
      <linearGradient id="barGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="barGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <text x="200" y="20" textAnchor="middle" className="fill-cyan-300 text-sm font-bold">AI 工具使用率增長圖</text>
    <rect x="30" y="180" width="50" height="50" fill="url(#barGrad1)" rx="4" />
    <rect x="100" y="140" width="50" height="90" fill="url(#barGrad1)" rx="4" />
    <rect x="170" y="100" width="50" height="130" fill="url(#barGrad2)" rx="4" />
    <rect x="240" y="70" width="50" height="160" fill="url(#barGrad2)" rx="4" />
    <rect x="310" y="40" width="50" height="190" fill="url(#barGrad3)" rx="4" />
    <text x="55" y="245" textAnchor="middle" className="fill-cyan-400 text-xs">2022</text>
    <text x="125" y="245" textAnchor="middle" className="fill-cyan-400 text-xs">2023</text>
    <text x="195" y="245" textAnchor="middle" className="fill-violet-400 text-xs">2024</text>
    <text x="265" y="245" textAnchor="middle" className="fill-violet-400 text-xs">2025</text>
    <text x="335" y="245" textAnchor="middle" className="fill-pink-400 text-xs">2026</text>
  </svg>
);

const PieChartSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
    <defs>
      <linearGradient id="pieGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#0891b2" />
      </linearGradient>
      <linearGradient id="pieGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id="pieGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
      <linearGradient id="pieGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <text x="100" y="15" textAnchor="middle" className="fill-cyan-300 text-xs font-bold">AI 工具類型分佈</text>
    <path d="M100,100 L100,25 A75,75 0 0,1 165,55 Z" fill="url(#pieGrad1)" />
    <path d="M100,100 L165,55 A75,75 0 0,1 155,155 Z" fill="url(#pieGrad2)" />
    <path d="M100,100 L155,155 A75,75 0 0,1 65,155 Z" fill="url(#pieGrad3)" />
    <path d="M100,100 L65,155 A75,75 0 0,1 100,25 Z" fill="url(#pieGrad4)" />
    <text x="130" y="45" className="fill-white text-xs font-bold">寫作</text>
    <text x="160" y="105" className="fill-white text-xs font-bold">圖像</text>
    <text x="80" y="155" className="fill-white text-xs font-bold">代碼</text>
    <text x="50" y="90" className="fill-white text-xs font-bold">其他</text>
  </svg>
);

const LineChartSVG = () => (
  <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto">
    <defs>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
      </linearGradient>
    </defs>
    <text x="200" y="20" textAnchor="middle" className="fill-cyan-300 text-sm font-bold">工作效率提升趨勢</text>
    <path d="M30,170 Q80,160 100,140 T170,110 T240,80 T310,50 T370,30 L370,190 L30,190 Z" fill="url(#lineGrad)" />
    <path d="M30,170 Q80,160 100,140 T170,110 T240,80 T310,50 T370,30" fill="none" stroke="#06b6d4" strokeWidth="3" />
    <circle cx="30" cy="170" r="5" fill="#06b6d4" />
    <circle cx="100" cy="140" r="5" fill="#8b5cf6" />
    <circle cx="170" cy="110" r="5" fill="#8b5cf6" />
    <circle cx="240" cy="80" r="5" fill="#f472b6" />
    <circle cx="310" cy="50" r="5" fill="#f472b6" />
    <circle cx="370" cy="30" r="5" fill="#fbbf24" />
    <text x="30" y="190" textAnchor="middle" className="fill-cyan-400 text-xs">週一</text>
    <text x="100" y="190" textAnchor="middle" className="fill-cyan-400 text-xs">週二</text>
    <text x="170" y="190" textAnchor="middle" className="fill-violet-400 text-xs">週三</text>
    <text x="240" y="190" textAnchor="middle" className="fill-violet-400 text-xs">週四</text>
    <text x="310" y="190" textAnchor="middle" className="fill-pink-400 text-xs">週五</text>
    <text x="370" y="190" textAnchor="middle" className="fill-yellow-400 text-xs">週六</text>
  </svg>
);

const RadarChartSVG = () => (
  <svg viewBox="0 0 300 300" className="w-full max-w-sm mx-auto">
    <text x="150" y="25" textAnchor="middle" className="fill-cyan-300 text-sm font-bold">AI 能力雷達圖</text>
    <polygon points="150,50 230,100 200,200 100,200 70,100" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
    <polygon points="150,70 210,110 185,190 115,190 90,110" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.5" />
    <polygon points="150,90 190,120 170,180 130,180 110,120" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.7" />
    <polygon points="150,100 175,125 160,175 140,175 125,125" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="2" />
    <line x1="150" y1="50" x2="150" y2="200" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
    <line x1="70" y1="100" x2="230" y2="100" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
    <line x1="85" y1="175" x2="215" y2="175" stroke="#06b6d4" strokeWidth="1" opacity="0.3" />
    <text x="150" y="40" textAnchor="middle" className="fill-cyan-400 text-xs">寫作</text>
    <text x="245" y="100" textAnchor="start" className="fill-violet-400 text-xs">圖像</text>
    <text x="210" y="215" textAnchor="middle" className="fill-pink-400 text-xs">影片</text>
    <text x="90" y="215" textAnchor="middle" className="fill-yellow-400 text-xs">翻譯</text>
    <text x="55" y="100" textAnchor="end" className="fill-emerald-400 text-xs">代碼</text>
    <circle cx="150" cy="110" r="4" fill="#06b6d4" />
    <circle cx="180" cy="115" r="4" fill="#8b5cf6" />
    <circle cx="165" cy="165" r="4" fill="#f472b6" />
    <circle cx="135" cy="165" r="4" fill="#fbbf24" />
    <circle cx="115" cy="120" r="4" fill="#10b981" />
  </svg>
);

const DonutChartSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
    <text x="100" y="15" textAnchor="middle" className="fill-cyan-300 text-xs font-bold">用戶滿意度</text>
    <circle cx="100" cy="100" r="70" fill="none" stroke="#1e293b" strokeWidth="20" />
    <circle cx="100" cy="100" r="70" fill="none" stroke="#06b6d4" strokeWidth="20" strokeDasharray="330 110" strokeDashoffset="0" />
    <circle cx="100" cy="100" r="70" fill="none" stroke="#8b5cf6" strokeWidth="20" strokeDasharray="66 374" strokeDashoffset="-330" />
    <circle cx="100" cy="100" r="70" fill="none" stroke="#f472b6" strokeWidth="20" strokeDasharray="44 396" strokeDashoffset="-396" />
    <text x="100" y="95" textAnchor="middle" className="fill-white text-2xl font-bold">92%</text>
    <text x="100" y="115" textAnchor="middle" className="fill-cyan-400 text-xs">滿意度</text>
  </svg>
);

const GeometricPatternSVG = () => (
  <svg viewBox="0 0 400 150" className="w-full">
    <defs>
      <linearGradient id="geoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <linearGradient id="geoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
    </defs>
    <polygon points="50,75 100,25 150,75 100,125" fill="none" stroke="url(#geoGrad1)" strokeWidth="2" />
    <polygon points="150,75 200,25 250,75 200,125" fill="none" stroke="url(#geoGrad1)" strokeWidth="2" />
    <polygon points="250,75 300,25 350,75 300,125" fill="none" stroke="url(#geoGrad2)" strokeWidth="2" />
    <circle cx="100" cy="75" r="15" fill="none" stroke="#06b6d4" strokeWidth="2" />
    <circle cx="200" cy="75" r="15" fill="none" stroke="#8b5cf6" strokeWidth="2" />
    <circle cx="300" cy="75" r="15" fill="none" stroke="#f472b6" strokeWidth="2" />
    <line x1="50" y1="75" x2="20" y2="75" stroke="#06b6d4" strokeWidth="2" />
    <line x1="350" y1="75" x2="380" y2="75" stroke="#f472b6" strokeWidth="2" />
    <rect x="85" y="60" width="30" height="30" fill="none" stroke="#8b5cf6" strokeWidth="2" transform="rotate(45 100 75)" />
    <rect x="185" y="60" width="30" height="30" fill="none" stroke="#f472b6" strokeWidth="2" transform="rotate(45 200 75)" />
    <rect x="285" y="60" width="30" height="30" fill="none" stroke="#fbbf24" strokeWidth="2" transform="rotate(45 300 75)" />
  </svg>
);

const tocItems = [
  { id: "intro", title: "AI 工具概覽", emoji: "🤖" },
  { id: "writing", title: "AI 寫作助手", emoji: "✍️" },
  { id: "image", title: "AI 圖像生成", emoji: "🎨" },
  { id: "code", title: "AI 編程工具", emoji: "💻" },
  { id: "charts", title: "數據統計圖表", emoji: "📊" },
  { id: "tips", title: "高效使用技巧", emoji: "💡" },
];

export default function AIToolsTutorialPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-teal-950 to-emerald-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-cyan-900/95 to-teal-900/95 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-5 w-60 shadow-2xl shadow-cyan-500/10">
          <h3 className="text-sm font-bold text-cyan-300 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/30"
                      : "text-cyan-200 hover:text-white hover:bg-cyan-800/80"
                  }`}
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
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-300 hover:text-white mb-8 transition-colors bg-cyan-900/30 px-4 py-2 rounded-full hover:bg-cyan-900/50"
        >
          ← 返回 Newsflow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 ml-4 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-cyan-500/30">
            🤖 人工智能 · 實用教程
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent">
            2026 年必學 AI 工具指南
          </h1>
          <h2 className="text-xl text-cyan-300 font-semibold mb-4">從寫作到編碼，全方位提升工作效率的 AI 工具地圖</h2>
          <p className="text-cyan-400">June 2026 · 作者：科技嚮導</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*ExRB_JfPoHh5VpOIbft4iw.png"
            alt="AI 工具學習"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/80 via-transparent to-transparent" />
        </div>
        <p className="text-center text-cyan-400 text-sm mb-12">
          ▲ 掌握 AI 工具，讓您的生產力提升 10 倍以上
        </p>

        <GeometricPatternSVG />
        <p className="text-center text-cyan-400 text-sm mb-8">▲ 幾何科技美學 · AI 時代的視覺標誌</p>

        <article className="prose prose-cyan prose-lg max-w-none">
          <div id="intro" className="mb-8">
            <p>
              人工智能不再是科幻電影中的情節，而是你我日常工作與生活的重要夥伴。從<strong>智能寫作</strong>到<strong>圖像生成</strong>，從<strong>代碼輔助</strong>到<strong>數據分析</strong>，AI 工具正在以驚人的速度滲透每一個行業。
            </p>
            <p>
              本篇文章將為您详细介绍 2026 年最值得學習的 AI 工具，並透過精美的<strong>彩色幾何 SVG 統計圖表</strong>呈現數據洞察，讓您一目了然地掌握 AI 工具的使用趨勢與效能提升！
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-900/40 to-teal-900/30 border border-cyan-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-cyan-300 font-bold mb-3 flex items-center gap-2">
              <span className="text-2xl">📈</span> AI 工具市場數據
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-cyan-900/30 rounded-lg p-3">
                <span className="text-cyan-400">市場規模</span>
                <p className="text-white font-semibold">4,500 億美元</p>
              </div>
              <div className="bg-cyan-900/30 rounded-lg p-3">
                <span className="text-cyan-400">年增長率</span>
                <p className="text-white font-semibold">42.8%</p>
              </div>
              <div className="bg-cyan-900/30 rounded-lg p-3">
                <span className="text-cyan-400">企業採用率</span>
                <p className="text-white font-semibold">78%</p>
              </div>
              <div className="bg-cyan-900/30 rounded-lg p-3">
                <span className="text-cyan-400">用戶滿意度</span>
                <p className="text-white font-semibold">92%</p>
              </div>
            </div>
          </div>

          <BarChartSVG />
          <p className="text-center text-cyan-400 text-sm mb-8">▲ AI 工具使用率逐年爆發式增長</p>

          <h2 id="writing">✍️ AI 寫作助手：釋放您的創意潛能</h2>

          <div className="relative my-8 rounded-2xl overflow-hidden">
            <img
              src="https://cdn.vectorstock.com/i/1000v/78/70/ai-writing-assistant-concept-vector-56737870.jpg"
              alt="AI 寫作助手"
              className="w-full h-72 object-cover"
            />
            <p className="text-center text-cyan-400 text-sm mt-3">
              ▲ AI 寫作助手讓創意表達更加輕鬆自如
            </p>
          </div>

          <p>
            <strong>ChatGPT、Claude、Gemini</strong> 等大型語言模型已經徹底改變了我們的寫作方式。這些 AI 助手不僅能幫您：
          </p>
          <ul>
            <li>撰寫部落格文章、社交媒體內容</li>
            <li>校對文法錯誤、優化文章結構</li>
            <li>生成創意標題與文案靈感</li>
            <li>翻譯多語言內容並保持語境流暢</li>
          </ul>

          <div className="bg-gradient-to-r from-violet-900/40 to-purple-900/30 border border-violet-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-violet-300 font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">✨</span> 頂級 AI 寫作工具推薦
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-violet-900/30 rounded-lg p-3">
                <span className="text-violet-100">ChatGPT (OpenAI)</span>
                <span className="text-violet-400 text-sm">通用寫作</span>
              </div>
              <div className="flex justify-between items-center bg-violet-900/30 rounded-lg p-3">
                <span className="text-violet-100">Claude (Anthropic)</span>
                <span className="text-violet-400 text-sm">長文分析</span>
              </div>
              <div className="flex justify-between items-center bg-violet-900/30 rounded-lg p-3">
                <span className="text-violet-100">Gemini (Google)</span>
                <span className="text-violet-400 text-sm">搜索整合</span>
              </div>
              <div className="flex justify-between items-center bg-violet-900/30 rounded-lg p-3">
                <span className="text-violet-100">Jasper</span>
                <span className="text-violet-400 text-sm">營銷文案</span>
              </div>
            </div>
          </div>

          <PieChartSVG />
          <p className="text-center text-cyan-400 text-sm mb-8">▲ AI 工具類型使用分佈</p>

          <h2 id="image">🎨 AI 圖像生成：將想像化為現實</h2>

          <div className="relative my-8 rounded-2xl overflow-hidden">
            <img
              src="https://www.supplychaintoday.com/wp-content/uploads/2025/12/Artificial-Intelligence-tools-to-learn.webp"
              alt="AI 圖像生成"
              className="w-full h-72 object-cover"
            />
            <p className="text-center text-cyan-400 text-sm mt-3">
              ▲ AI 圖像生成工具讓創意無限延伸
            </p>
          </div>

          <p>
            <strong>Midjourney、DALL-E 3、Stable Diffusion、Adobe Firefly</strong> 等工具讓每個人都能成為數位藝術家。無論您需要：
          </p>
          <ul>
            <li>商業廣告素材與品牌視覺</li>
            <li>社群媒體配圖與封面設計</li>
            <li>產品原型與概念藝術</li>
            <li>個人頭像與數位藝術創作</li>
          </ul>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="bg-gradient-to-br from-pink-900/60 to-rose-900/60 rounded-xl p-4 border border-pink-500/30 text-center">
              <span className="text-3xl mb-2 block">🎨</span>
              <span className="text-pink-300 font-bold">Midjourney</span>
              <p className="text-pink-100 text-xs mt-1">藝術風格強</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/60 to-amber-900/60 rounded-xl p-4 border border-orange-500/30 text-center">
              <span className="text-3xl mb-2 block">🌟</span>
              <span className="text-orange-300 font-bold">DALL-E 3</span>
              <p className="text-orange-100 text-xs mt-1">精確控制強</p>
            </div>
            <div className="bg-gradient-to-br from-violet-900/60 to-purple-900/60 rounded-xl p-4 border border-violet-500/30 text-center">
              <span className="text-3xl mb-2 block">⚡</span>
              <span className="text-violet-300 font-bold">Stable Diffusion</span>
              <p className="text-violet-100 text-xs mt-1">開源可本地部署</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/60 to-pink-900/60 rounded-xl p-4 border border-red-500/30 text-center">
              <span className="text-3xl mb-2 block">🔥</span>
              <span className="text-red-300 font-bold">Adobe Firefly</span>
              <p className="text-red-100 text-xs mt-1">設計工作流整合</p>
            </div>
          </div>

          <h2 id="code">💻 AI 編程工具：開發者的智能副駕駛</h2>

          <div className="relative my-8 rounded-2xl overflow-hidden">
            <img
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230602113310/Neural-Networks-Architecture.png"
              alt="AI 編程助手"
              className="w-full h-72 object-cover"
            />
            <p className="text-center text-cyan-400 text-sm mt-3">
              ▲ AI 編程工具大幅提升開發效率
            </p>
          </div>

          <p>
            對於開發者而言，<strong>GitHub Copilot、Cursor、Codeium</strong> 等 AI 編程助手已經成為不可或缺的工具：
          </p>
          <ul>
            <li>智能代碼補全與建議</li>
            <li>自動生成文檔註釋</li>
            <li>代碼重構與優化建議</li>
            <li>Bug 定位與修復建議</li>
            <li>多語言翻譯與解釋</li>
          </ul>

          <LineChartSVG />
          <p className="text-center text-cyan-400 text-sm mb-8">▲ 使用 AI 編程工具後工作效率顯著提升</p>

          <h2 id="charts">📊 彩色幾何 SVG 統計圖表：數據視覺化之美</h2>

          <p>
            SVG 圖表不僅加載快速，而且可以任意縮放不失真。以下是我們為您準備的精美幾何風格統計圖表：
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-6 border border-cyan-500/30">
              <h4 className="text-cyan-300 font-bold mb-4 text-center">📊 使用率增長</h4>
              <BarChartSVG />
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-6 border border-violet-500/30">
              <h4 className="text-violet-300 font-bold mb-4 text-center">🥧 工具類型分佈</h4>
              <PieChartSVG />
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-6 border border-emerald-500/30">
              <h4 className="text-emerald-300 font-bold mb-4 text-center">📈 效率提升趨勢</h4>
              <LineChartSVG />
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-6 border border-pink-500/30">
              <h4 className="text-pink-300 font-bold mb-4 text-center">🎯 能力雷達圖</h4>
              <RadarChartSVG />
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/30 border border-emerald-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-emerald-300 font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">💎</span> SVG 圖表優勢
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400">⚡</span>
                <span className="text-emerald-100 text-sm">加載速度極快</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400">🔍</span>
                <span className="text-emerald-100 text-sm">任意縮放無失真</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400">🎨</span>
                <span className="text-emerald-100 text-sm">支援漸變色彩</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400">♿</span>
                <span className="text-emerald-100 text-sm">無障礙友好</span>
              </div>
            </div>
          </div>

          <DonutChartSVG />
          <p className="text-center text-cyan-400 text-sm mb-8">▲ 用戶滿意度持續走高</p>

          <h2 id="tips">💡 高效使用 AI 工具的專家技巧</h2>

          <div className="bg-gradient-to-br from-cyan-800 to-teal-900 border border-cyan-500/30 rounded-2xl p-6 my-8">
            <ul className="space-y-4 text-cyan-100">
              <li className="flex gap-3">
                <span className="text-cyan-300 text-xl">🎯</span>
                <span><strong>精確提示詞工程：</strong>AI 输出的质量完全取决于输入的提示词。学会使用<strong>具体、清晰、有上下文</strong>的提示词，远比模糊的请求效果要好得多。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-300 text-xl">🔄</span>
                <span><strong>迭代優化：</strong>不要期望一次就能得到完美结果。使用<strong>逐步引導</strong>的方式，先得到初步版本，再逐步修正和優化。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-300 text-xl">🧠</span>
                <span><strong>批判性思維：</strong>AI 有時會產生<strong>幻覺</strong>（hallucination）——看似合理但實際錯誤的內容。務必對輸出的事實性進行核實。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-300 text-xl">⚡</span>
                <span><strong>工作流整合：</strong>將 AI 工具整合到您的日常工作流程中，例如使用 API 或瀏覽器插件，讓使用更加順暢自然。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-300 text-xl">🔒</span>
                <span><strong>隱私保護：</strong>在使用 AI 工具時，<strong>避免輸入敏感個人資訊或商業機密</strong>，除非您完全信任該平台的隱私政策。</span>
              </li>
            </ul>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="bg-gradient-to-br from-cyan-800/60 to-teal-900/60 rounded-xl p-4 border border-cyan-500/30">
              <span className="text-cyan-300 font-bold">⏰ 建議學習時間</span>
              <p className="text-cyan-100 text-sm mt-1">每天 30 分鐘</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-800/60 to-teal-900/60 rounded-xl p-4 border border-cyan-500/30">
              <span className="text-cyan-300 font-bold">📚 推薦順序</span>
              <p className="text-cyan-100 text-sm mt-1">寫作 → 圖像 → 編碼</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-800/60 to-teal-900/60 rounded-xl p-4 border border-cyan-500/30">
              <span className="text-cyan-300 font-bold">💰 預算規劃</span>
              <p className="text-cyan-100 text-sm mt-1">月費 $20-50</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-800/60 to-teal-900/60 rounded-xl p-4 border border-cyan-500/30">
              <span className="text-cyan-300 font-bold">🎯 預期提升</span>
              <p className="text-cyan-100 text-sm mt-1">效率提升 300%+</p>
            </div>
          </div>

          <GeometricPatternSVG />
          <p className="text-center text-cyan-400 text-sm mb-8">▲ 開啟您的 AI 工具學習之旅</p>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>
        </article>
      </div>

      {/* Comments Section */}
      <Comments slug="ai-tools-tutorial" />
    </div>
  );
}
