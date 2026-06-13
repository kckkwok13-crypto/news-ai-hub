"use client";
import Comments from "@/components/Comments";
import Link from "next/link";

// ============ 装饰性几何 SVG 组件 ============

// 1. 复杂几何装饰图案
const GeometricDecorSVG = () => (
  <svg viewBox="0 0 800 200" className="w-full h-32 my-8">
    <defs>
      <linearGradient id="geoGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8"/>
      </linearGradient>
      <linearGradient id="geoGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6"/>
      </linearGradient>
    </defs>
    {/* 三角形 */}
    <polygon points="100,100 150,40 200,100" fill="none" stroke="url(#geoGrad1)" strokeWidth="2" className="animate-pulse"/>
    <polygon points="200,100 250,40 300,100" fill="none" stroke="url(#geoGrad1)" strokeWidth="2"/>
    <polygon points="300,100 350,40 400,100" fill="none" stroke="url(#geoGrad1)" strokeWidth="2"/>
    {/* 圆形 */}
    <circle cx="450" cy="70" r="40" fill="none" stroke="#06b6d4" strokeWidth="2"/>
    <circle cx="450" cy="70" r="25" fill="none" stroke="#8b5cf6" strokeWidth="2"/>
    <circle cx="450" cy="70" r="10" fill="#ec4899"/>
    {/* 方形 */}
    <rect x="550" y="30" width="80" height="80" fill="none" stroke="url(#geoGrad1)" strokeWidth="2" transform="rotate(15 590 70)"/>
    <rect x="570" y="50" width="40" height="40" fill="none" stroke="#10b981" strokeWidth="2" transform="rotate(45 590 70)"/>
    {/* 六边形 */}
    <polygon points="700,30 740,50 740,90 700,110 660,90 660,50" fill="none" stroke="url(#geoGrad1)" strokeWidth="2"/>
    <polygon points="700,45 725,57 725,83 700,95 675,83 675,57" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="1"/>
    {/* 连接线 */}
    <line x1="200" y1="100" x2="300" y2="100" stroke="url(#geoGrad1)" strokeWidth="1" strokeDasharray="5,5"/>
    <line x1="300" y1="100" x2="400" y2="100" stroke="url(#geoGrad1)" strokeWidth="1" strokeDasharray="5,5"/>
  </svg>
);

// 2. 水平柱状图
const HorizontalBarChartSVG = () => (
  <svg viewBox="0 0 400 220" className="w-full max-w-md mx-auto">
    <defs>
      <linearGradient id="hBarGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06b6d4"/>
        <stop offset="100%" stopColor="#0891b2"/>
      </linearGradient>
      <linearGradient id="hBarGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#7c3aed"/>
      </linearGradient>
      <linearGradient id="hBarGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ec4899"/>
        <stop offset="100%" stopColor="#db2777"/>
      </linearGradient>
    </defs>
    <text x="200" y="20" textAnchor="middle" className="fill-cyan-300 text-sm font-bold">AI 工具使用率對比</text>
    {/* ChatGPT */}
    <rect x="70" y="40" width="280" height="25" rx="12" fill="#1e293b"/>
    <rect x="70" y="40" width="260" height="25" rx="12" fill="url(#hBarGrad1)"/>
    <text x="65" y="57" textAnchor="end" className="fill-cyan-300 text-xs">ChatGPT</text>
    <text x="335" y="57" className="fill-white text-xs font-bold">92%</text>
    {/* Midjourney */}
    <rect x="70" y="80" width="280" height="25" rx="12" fill="#1e293b"/>
    <rect x="70" y="80" width="220" height="25" rx="12" fill="url(#hBarGrad2)"/>
    <text x="65" y="97" textAnchor="end" className="fill-violet-300 text-xs">Midjourney</text>
    <text x="295" y="97" className="fill-white text-xs font-bold">78%</text>
    {/* Claude */}
    <rect x="70" y="120" width="280" height="25" rx="12" fill="#1e293b"/>
    <rect x="70" y="120" width="190" height="25" rx="12" fill="url(#hBarGrad3)"/>
    <text x="65" y="137" textAnchor="end" className="fill-pink-300 text-xs">Claude</text>
    <text x="265" y="137" className="fill-white text-xs font-bold">68%</text>
    {/* GitHub Copilot */}
    <rect x="70" y="160" width="280" height="25" rx="12" fill="#1e293b"/>
    <rect x="70" y="160" width="160" height="25" rx="12" fill="#10b981"/>
    <text x="65" y="177" textAnchor="end" className="fill-emerald-300 text-xs">Copilot</text>
    <text x="235" y="177" className="fill-white text-xs font-bold">57%</text>
  </svg>
);

// 3. 3D 效果环形图
const DonutChart3DSVG = () => (
  <svg viewBox="0 0 250 250" className="w-full max-w-xs mx-auto">
    <defs>
      <linearGradient id="donutGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4"/>
        <stop offset="100%" stopColor="#0891b2"/>
      </linearGradient>
      <linearGradient id="donutGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#7c3aed"/>
      </linearGradient>
      <linearGradient id="donutGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f472b6"/>
        <stop offset="100%" stopColor="#ec4899"/>
      </linearGradient>
      <linearGradient id="donutGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981"/>
        <stop offset="100%" stopColor="#059669"/>
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.5"/>
      </filter>
    </defs>
    <text x="125" y="20" textAnchor="middle" className="fill-cyan-300 text-sm font-bold">AI 市場份額分佈</text>
    {/* 外圈阴影 */}
    <circle cx="125" cy="135" r="85" fill="none" stroke="#1e293b" strokeWidth="35" filter="url(#shadow)"/>
    {/* 数据环 - 外圈 */}
    <circle cx="125" cy="130" r="85" fill="none" stroke="url(#donutGrad1)" strokeWidth="35" strokeDasharray="200 334" strokeDashoffset="0" strokeLinecap="round"/>
    <circle cx="125" cy="130" r="85" fill="none" stroke="url(#donutGrad2)" strokeWidth="35" strokeDasharray="95 439" strokeDashoffset="-200" strokeLinecap="round"/>
    <circle cx="125" cy="130" r="85" fill="none" stroke="url(#donutGrad3)" strokeWidth="35" strokeDasharray="60 474" strokeDashoffset="-295" strokeLinecap="round"/>
    <circle cx="125" cy="130" r="85" fill="none" stroke="url(#donutGrad4)" strokeWidth="35" strokeDasharray="179 355" strokeDashoffset="-355" strokeLinecap="round"/>
    {/* 中心 */}
    <circle cx="125" cy="130" r="55" fill="#0f172a"/>
    <text x="125" y="120" textAnchor="middle" className="fill-white text-2xl font-bold">$4.5T</text>
    <text x="125" y="145" textAnchor="middle" className="fill-cyan-400 text-xs">市場規模</text>
    {/* 图例 */}
    <circle cx="50" cy="230" r="6" fill="url(#donutGrad1)"/>
    <text x="60" y="234" className="fill-gray-300 text-xs">寫作 35%</text>
    <circle cx="110" cy="230" r="6" fill="url(#donutGrad2)"/>
    <text x="120" y="234" className="fill-gray-300 text-xs">圖像 17%</text>
    <circle cx="165" cy="230" r="6" fill="url(#donutGrad3)"/>
    <text x="175" y="234" className="fill-gray-300 text-xs">影片 10%</text>
    <circle cx="215" cy="230" r="6" fill="url(#donutGrad4)"/>
    <text x="225" y="234" className="fill-gray-300 text-xs">代碼 31%</text>
  </svg>
);

// 4. 仪表盘图
const GaugeChartSVG = () => (
  <svg viewBox="0 0 300 180" className="w-full max-w-sm mx-auto">
    <defs>
      <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ef4444"/>
        <stop offset="50%" stopColor="#eab308"/>
        <stop offset="100%" stopColor="#10b981"/>
      </linearGradient>
    </defs>
    <text x="150" y="20" textAnchor="middle" className="fill-cyan-300 text-sm font-bold">AI 效率提升指數</text>
    {/* 背景弧 */}
    <path d="M30,150 A120,120 0 0,1 270,150" fill="none" stroke="#1e293b" strokeWidth="20" strokeLinecap="round"/>
    {/* 彩色弧 - 75% */}
    <path d="M30,150 A120,120 0 0,1 230,80" fill="none" stroke="url(#gaugeGrad)" strokeWidth="20" strokeLinecap="round"/>
    {/* 刻度 */}
    <text x="35" y="170" className="fill-gray-400 text-xs">0</text>
    <text x="145" y="35" className="fill-gray-400 text-xs">50</text>
    <text x="260" y="170" className="fill-gray-400 text-xs">100</text>
    {/* 指针 */}
    <line x1="150" y1="150" x2="220" y2="90" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="150" cy="150" r="12" fill="#0f172a" stroke="#06b6d4" strokeWidth="3"/>
    <circle cx="150" cy="150" r="5" fill="#06b6d4"/>
    {/* 数值 */}
    <text x="150" y="145" textAnchor="middle" className="fill-white text-3xl font-bold">75</text>
    <text x="150" y="165" textAnchor="middle" className="fill-emerald-400 text-xs">效率提升 +300%</text>
  </svg>
);

// 5. 堆叠区域图
const AreaChartSVG = () => (
  <svg viewBox="0 0 400 200" className="w-full max-w-lg mx-auto">
    <defs>
      <linearGradient id="areaGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="areaGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <text x="200" y="20" textAnchor="middle" className="fill-cyan-300 text-sm font-bold">AI 採用趨勢預測</text>
    {/* 区域1 */}
    <path d="M30,180 L30,140 L100,120 L170,100 L240,70 L310,50 L370,30 L370,180 Z" fill="url(#areaGrad1)"/>
    <path d="M30,140 L100,120 L170,100 L240,70 L310,50 L370,30" fill="none" stroke="#06b6d4" strokeWidth="3"/>
    {/* 区域2 */}
    <path d="M30,180 L30,160 L100,150 L170,130 L240,110 L310,90 L370,70 L370,180 Z" fill="url(#areaGrad2)"/>
    <path d="M30,160 L100,150 L170,130 L240,110 L310,90 L370,70" fill="none" stroke="#8b5cf6" strokeWidth="3"/>
    {/* 数据点 */}
    <circle cx="30" cy="140" r="5" fill="#06b6d4"/>
    <circle cx="100" cy="120" r="5" fill="#06b6d4"/>
    <circle cx="170" cy="100" r="5" fill="#8b5cf6"/>
    <circle cx="240" cy="70" r="5" fill="#8b5cf6"/>
    <circle cx="310" cy="50" r="5" fill="#ec4899"/>
    <circle cx="370" cy="30" r="6" fill="#ec4899"/>
    {/* 年份标签 */}
    <text x="30" y="195" textAnchor="middle" className="fill-gray-400 text-xs">2022</text>
    <text x="100" y="195" textAnchor="middle" className="fill-gray-400 text-xs">2023</text>
    <text x="170" y="195" textAnchor="middle" className="fill-gray-400 text-xs">2024</text>
    <text x="240" y="195" textAnchor="middle" className="fill-gray-400 text-xs">2025</text>
    <text x="310" y="195" textAnchor="middle" className="fill-gray-400 text-xs">2026</text>
    <text x="370" y="195" textAnchor="middle" className="fill-pink-400 text-xs font-bold">2030</text>
    {/* 图例 */}
    <rect x="250" y="8" width="12" height="12" fill="#06b6d4" rx="2"/>
    <text x="267" y="18" className="fill-gray-300 text-xs">企業採用</text>
    <rect x="320" y="8" width="12" height="12" fill="#8b5cf6" rx="2"/>
    <text x="337" y="18" className="fill-gray-300 text-xs">個人用戶</text>
  </svg>
);

// 6. 雷达图增强版
const RadarChartEnhancedSVG = () => (
  <svg viewBox="0 0 350 350" className="w-full max-w-md mx-auto">
    <defs>
      <linearGradient id="radarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4"/>
      </linearGradient>
    </defs>
    <text x="175" y="30" textAnchor="middle" className="fill-cyan-300 text-sm font-bold">AI 能力評估雷達圖</text>
    {/* 外圈 */}
    <polygon points="175,50 275,100 240,220 110,220 75,100" fill="none" stroke="#1e293b" strokeWidth="1"/>
    {/* 中圈 */}
    <polygon points="175,80 250,115 220,200 130,200 100,115" fill="none" stroke="#1e293b" strokeWidth="1"/>
    {/* 内圈 */}
    <polygon points="175,110 225,130 200,180 150,180 125,130" fill="none" stroke="#1e293b" strokeWidth="1"/>
    {/* 中心圈 */}
    <polygon points="175,130 200,140 180,160 170,160 150,140" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="2"/>
    {/* 轴线 */}
    <line x1="175" y1="50" x2="175" y2="220" stroke="#1e293b" strokeWidth="1"/>
    <line x1="75" y1="100" x2="240" y2="220" stroke="#1e293b" strokeWidth="1"/>
    <line x1="275" y1="100" x2="110" y2="220" stroke="#1e293b" strokeWidth="1"/>
    {/* 数据区域 */}
    <polygon points="175,65 260,110 235,190 120,210 90,115" fill="url(#radarGrad)" stroke="#06b6d4" strokeWidth="2"/>
    {/* 数据点 */}
    <circle cx="175" cy="65" r="6" fill="#06b6d4" stroke="#fff" strokeWidth="2"/>
    <circle cx="260" cy="110" r="6" fill="#8b5cf6" stroke="#fff" strokeWidth="2"/>
    <circle cx="235" cy="190" r="6" fill="#f472b6" stroke="#fff" strokeWidth="2"/>
    <circle cx="120" cy="210" r="6" fill="#fbbf24" stroke="#fff" strokeWidth="2"/>
    <circle cx="90" cy="115" r="6" fill="#10b981" stroke="#fff" strokeWidth="2"/>
    {/* 标签 */}
    <text x="175" y="38" textAnchor="middle" className="fill-cyan-400 text-xs font-bold">寫作</text>
    <text x="285" y="100" textAnchor="start" className="fill-violet-400 text-xs font-bold">圖像</text>
    <text x="250" y="235" textAnchor="middle" className="fill-pink-400 text-xs font-bold">影片</text>
    <text x="85" y="235" textAnchor="middle" className="fill-yellow-400 text-xs font-bold">翻譯</text>
    <text x="55" y="100" textAnchor="end" className="fill-emerald-400 text-xs font-bold">代碼</text>
  </svg>
);

// 7. 进度环图
const ProgressRingSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
    <text x="100" y="20" textAnchor="middle" className="fill-cyan-300 text-xs font-bold">用戶滿意度</text>
    {/* 背景环 */}
    <circle cx="100" cy="110" r="70" fill="none" stroke="#1e293b" strokeWidth="15"/>
    {/* 进度环 - 92% */}
    <circle cx="100" cy="110" r="70" fill="none" stroke="#06b6d4" strokeWidth="15" strokeDasharray="405 439" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 100 110)"/>
    {/* 中心内容 */}
    <text x="100" y="100" textAnchor="middle" className="fill-white text-4xl font-bold">92%</text>
    <text x="100" y="125" textAnchor="middle" className="fill-cyan-400 text-xs">用戶滿意</text>
    {/* 装饰 */}
    <circle cx="100" cy="110" r="55" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5"/>
  </svg>
);

// 8. 对比柱状图
const ComparisonBarChartSVG = () => (
  <svg viewBox="0 0 400 200" className="w-full max-w-md mx-auto">
    <defs>
      <linearGradient id="compGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#64748b"/>
        <stop offset="100%" stopColor="#475569"/>
      </linearGradient>
      <linearGradient id="compGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4"/>
        <stop offset="100%" stopColor="#0891b2"/>
      </linearGradient>
    </defs>
    <text x="200" y="20" textAnchor="middle" className="fill-cyan-300 text-sm font-bold">使用 AI 前後效率對比</text>
    {/* 柱状图组1 - 文案写作 */}
    <text x="80" y="55" textAnchor="middle" className="fill-gray-400 text-xs">文案</text>
    <rect x="50" y="65" width="25" height="100" rx="4" fill="url(#compGrad1)"/>
    <text x="62" y="175" className="fill-gray-300 text-xs">2h</text>
    <rect x="80" y="100" width="25" height="65" rx="4" fill="url(#compGrad2)"/>
    <text x="92" y="175" className="fill-cyan-400 text-xs">30m</text>
    {/* 柱状图组2 - 图片处理 */}
    <text x="160" y="55" textAnchor="middle" className="fill-gray-400 text-xs">圖片</text>
    <rect x="130" y="70" width="25" height="95" rx="4" fill="url(#compGrad1)"/>
    <text x="142" y="175" className="fill-gray-300 text-xs">3h</text>
    <rect x="160" y="115" width="25" height="50" rx="4" fill="url(#compGrad2)"/>
    <text x="172" y="175" className="fill-cyan-400 text-xs">15m</text>
    {/* 柱状图组3 - 代码审查 */}
    <text x="240" y="55" textAnchor="middle" className="fill-gray-400 text-xs">代碼</text>
    <rect x="210" y="75" width="25" height="90" rx="4" fill="url(#compGrad1)"/>
    <text x="222" y="175" className="fill-gray-300 text-xs">4h</text>
    <rect x="240" y="120" width="25" height="45" rx="4" fill="url(#compGrad2)"/>
    <text x="252" y="175" className="fill-cyan-400 text-xs">1h</text>
    {/* 柱状图组4 - 翻译 */}
    <text x="320" y="55" textAnchor="middle" className="fill-gray-400 text-xs">翻譯</text>
    <rect x="290" y="80" width="25" height="85" rx="4" fill="url(#compGrad1)"/>
    <text x="302" y="175" className="fill-gray-300 text-xs">2.5h</text>
    <rect x="320" y="108" width="25" height="57" rx="4" fill="url(#compGrad2)"/>
    <text x="332" y="175" className="fill-cyan-400 text-xs">20m</text>
    {/* 图例 */}
    <rect x="50" y="188" width="12" height="8" fill="url(#compGrad1)" rx="2"/>
    <text x="67" y="195" className="fill-gray-400 text-xs">使用前</text>
    <rect x="120" y="188" width="12" height="8" fill="url(#compGrad2)" rx="2"/>
    <text x="137" y="195" className="fill-cyan-400 text-xs">使用後</text>
  </svg>
);

// 9. 3D 效果柱状图
const BarChart3DSVG = () => (
  <svg viewBox="0 0 400 220" className="w-full max-w-md mx-auto">
    <defs>
      <linearGradient id="bar3dGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06b6d4"/>
        <stop offset="100%" stopColor="#0891b2"/>
      </linearGradient>
      <linearGradient id="bar3dGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#7c3aed"/>
      </linearGradient>
      <linearGradient id="bar3dGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ec4899"/>
        <stop offset="100%" stopColor="#db2777"/>
      </linearGradient>
    </defs>
    <text x="200" y="20" textAnchor="middle" className="fill-cyan-300 text-sm font-bold">AI 市場增長柱狀圖</text>
    {/* 2022 */}
    <rect x="40" y="170" width="40" height="30" fill="url(#bar3dGrad1)"/>
    <rect x="40" y="165" width="40" height="5" fill="#22d3ee" rx="2"/>
    <text x="60" y="210" textAnchor="middle" className="fill-cyan-400 text-xs">2022</text>
    <text x="60" y="160" textAnchor="middle" className="fill-white text-xs">$500B</text>
    {/* 2023 */}
    <rect x="100" y="140" width="40" height="60" fill="url(#bar3dGrad1)"/>
    <rect x="100" y="135" width="40" height="5" fill="#22d3ee" rx="2"/>
    <text x="120" y="210" textAnchor="middle" className="fill-cyan-400 text-xs">2023</text>
    <text x="120" y="130" textAnchor="middle" className="fill-white text-xs">$1.2T</text>
    {/* 2024 */}
    <rect x="160" y="110" width="40" height="90" fill="url(#bar3dGrad2)"/>
    <rect x="160" y="105" width="40" height="5" fill="#a78bfa" rx="2"/>
    <text x="180" y="210" textAnchor="middle" className="fill-violet-400 text-xs">2024</text>
    <text x="180" y="100" textAnchor="middle" className="fill-white text-xs">$2.1T</text>
    {/* 2025 */}
    <rect x="220" y="80" width="40" height="120" fill="url(#bar3dGrad2)"/>
    <rect x="220" y="75" width="40" height="5" fill="#a78bfa" rx="2"/>
    <text x="240" y="210" textAnchor="middle" className="fill-violet-400 text-xs">2025</text>
    <text x="240" y="70" textAnchor="middle" className="fill-white text-xs">$3.2T</text>
    {/* 2026 */}
    <rect x="280" y="50" width="40" height="150" fill="url(#bar3dGrad3)"/>
    <rect x="280" y="45" width="40" height="5" fill="#f472b6" rx="2"/>
    <text x="300" y="210" textAnchor="middle" className="fill-pink-400 text-xs">2026</text>
    <text x="300" y="40" textAnchor="middle" className="fill-white text-xs font-bold">$4.5T</text>
    {/* 2030 预测 */}
    <rect x="340" y="20" width="40" height="180" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5,5"/>
    <text x="360" y="210" textAnchor="middle" className="fill-yellow-400 text-xs">2030</text>
    <text x="360" y="15" textAnchor="middle" className="fill-yellow-400 text-xs">$15.7T</text>
  </svg>
);

// 10. 波浪动画背景装饰
const WavePatternSVG = () => (
  <svg viewBox="0 0 800 100" className="w-full h-16 my-6" preserveAspectRatio="none">
    <defs>
      <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3"/>
        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5"/>
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3"/>
      </linearGradient>
    </defs>
    <path d="M0,50 Q100,20 200,50 T400,50 T600,50 T800,50 V100 H0 Z" fill="url(#waveGrad)"/>
    <path d="M0,60 Q100,80 200,60 T400,60 T600,60 T800,60 V100 H0 Z" fill="url(#waveGrad)" fillOpacity="0.5"/>
  </svg>
);

// 目录项
const tocItems = [
  { id: "intro", title: "AI 工具概覽", emoji: "🤖" },
  { id: "writing", title: "AI 寫作助手", emoji: "✍️" },
  { id: "image", title: "AI 圖像生成", emoji: "🎨" },
  { id: "code", title: "AI 編程工具", emoji: "💻" },
  { id: "charts", title: "數據統計圖表", emoji: "📊" },
  { id: "tips", title: "高效使用技巧", emoji: "💡" },
];

export default function AIToolsTutorialPage() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-teal-950 to-emerald-950 text-white">
      {/* 浮动目录卡片 */}
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
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 text-cyan-200 hover:text-white hover:bg-cyan-800/80"
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
        {/* 返回链接 */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-300 hover:text-white mb-8 transition-colors bg-cyan-900/30 px-4 py-2 rounded-full hover:bg-cyan-900/50"
        >
          ← 返回 Newsflow
        </Link>

        {/* 文章头部 */}
        <header className="text-center py-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-cyan-500/30">
            🤖 人工智能 · 實用教程
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 bg-clip-text text-transparent">
            2026 年必學 AI 工具指南
          </h1>
          <h2 className="text-xl text-cyan-300 font-semibold mb-4">從寫作到編碼，全方位提升工作效率的 AI 工具地圖</h2>
          <p className="text-cyan-400">June 2026 · 作者：科技嚮導</p>
        </header>

        {/* 主图 */}
        <div className="relative mb-6 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20">
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/1*ExRB_JfPoHh5VpOIbft4iw.png"
            alt="AI 工具學習"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/80 via-cyan-950/30 to-transparent" />
        </div>
        <p className="text-center text-cyan-400 text-sm mb-4">
          ▲ 掌握 AI 工具，讓您的生產力提升 10 倍以上
        </p>

        {/* 装饰性几何图案 */}
        <GeometricDecorSVG />
        <p className="text-center text-cyan-400 text-sm mb-6">▲ 幾何科技美學 · AI 時代的視覺標誌</p>

        <article className="prose prose-cyan prose-lg max-w-none">
          {/* 引言部分 */}
          <div id="intro" className="mb-8">
            <p className="text-lg leading-relaxed text-cyan-100">
              人工智能不再是科幻電影中的情節，而是你我日常工作與生活的重要夥伴。從<strong>智能寫作</strong>到<strong>圖像生成</strong>，從<strong>代碼輔助</strong>到<strong>數據分析</strong>，AI 工具正在以驚人的速度滲透每一個行業。
            </p>
            <p className="mt-4 text-cyan-200">
              本篇文章將為您详细介绍 2026 年最值得學習的 AI 工具，並透過精美的<strong>彩色幾何 SVG 統計圖表</strong>呈現數據洞察，讓您一目了然地掌握 AI 工具的使用趨勢與效能提升！
            </p>
          </div>

          {/* 市场数据卡片 */}
          <div className="bg-gradient-to-r from-cyan-900/40 to-teal-900/30 border border-cyan-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-cyan-300 font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">📈</span> AI 工具市場數據
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-cyan-900/30 rounded-lg p-4 text-center">
                <span className="text-cyan-400 text-xs">市場規模</span>
                <p className="text-white font-bold text-xl mt-1">$4.5T</p>
              </div>
              <div className="bg-cyan-900/30 rounded-lg p-4 text-center">
                <span className="text-cyan-400 text-xs">年增長率</span>
                <p className="text-white font-bold text-xl mt-1">42.8%</p>
              </div>
              <div className="bg-cyan-900/30 rounded-lg p-4 text-center">
                <span className="text-cyan-400 text-xs">企業採用率</span>
                <p className="text-white font-bold text-xl mt-1">78%</p>
              </div>
              <div className="bg-cyan-900/30 rounded-lg p-4 text-center">
                <span className="text-cyan-400 text-xs">用戶滿意度</span>
                <p className="text-white font-bold text-xl mt-1">92%</p>
              </div>
            </div>
          </div>

          {/* 3D 柱状图 */}
          <BarChart3DSVG />
          <p className="text-center text-cyan-400 text-sm mb-6">▲ AI 市場增長柱狀圖（單位：萬億美元）</p>

          {/* 水平柱状图 */}
          <HorizontalBarChartSVG />
          <p className="text-center text-cyan-400 text-sm mb-8">▲ 各平台用戶使用率對比</p>

          {/* 波浪装饰 */}
          <WavePatternSVG />

          {/* AI 写作助手部分 */}
          <h2 id="writing" className="text-2xl font-bold text-cyan-200 mt-12 mb-6 flex items-center gap-3">
            <span className="text-3xl">✍️</span> AI 寫作助手：釋放您的創意潛能
          </h2>

          <div className="relative my-8 rounded-2xl overflow-hidden">
            <img
              src="https://cdn.vectorstock.com/i/1000v/78/70/ai-writing-assistant-concept-vector-56737870.jpg"
              alt="AI 寫作助手"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-cyan-300 text-sm">▲ AI 寫作助手讓創意表達更加輕鬆自如</p>
          </div>

          <p className="text-cyan-100 leading-relaxed">
            <strong>ChatGPT、Claude、Gemini</strong> 等大型語言模型已經徹底改變了我們的寫作方式。這些 AI 助手不僅能幫您：
          </p>
          <ul className="mt-4 space-y-2 text-cyan-200">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              <span>撰寫部落格文章、社交媒體內容</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              <span>校對文法錯誤、優化文章結構</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              <span>生成創意標題與文案靈感</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              <span>翻譯多語言內容並保持語境流暢</span>
            </li>
          </ul>

          {/* 工具推荐卡片 */}
          <div className="bg-gradient-to-r from-violet-900/40 to-purple-900/30 border border-violet-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-violet-300 font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">✨</span> 頂級 AI 寫作工具推薦
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex justify-between items-center bg-violet-900/30 rounded-xl p-4">
                <div>
                  <span className="text-violet-100 font-semibold">ChatGPT</span>
                  <p className="text-violet-400 text-xs">OpenAI</p>
                </div>
                <span className="text-violet-400 text-sm bg-violet-800/50 px-2 py-1 rounded">通用寫作</span>
              </div>
              <div className="flex justify-between items-center bg-violet-900/30 rounded-xl p-4">
                <div>
                  <span className="text-violet-100 font-semibold">Claude</span>
                  <p className="text-violet-400 text-xs">Anthropic</p>
                </div>
                <span className="text-violet-400 text-sm bg-violet-800/50 px-2 py-1 rounded">長文分析</span>
              </div>
              <div className="flex justify-between items-center bg-violet-900/30 rounded-xl p-4">
                <div>
                  <span className="text-violet-100 font-semibold">Gemini</span>
                  <p className="text-violet-400 text-xs">Google</p>
                </div>
                <span className="text-violet-400 text-sm bg-violet-800/50 px-2 py-1 rounded">搜索整合</span>
              </div>
              <div className="flex justify-between items-center bg-violet-900/30 rounded-xl p-4">
                <div>
                  <span className="text-violet-100 font-semibold">Jasper</span>
                  <p className="text-violet-400 text-xs">Marketing</p>
                </div>
                <span className="text-violet-400 text-sm bg-violet-800/50 px-2 py-1 rounded">營銷文案</span>
              </div>
            </div>
          </div>

          {/* 3D 环形图 */}
          <DonutChart3DSVG />
          <p className="text-center text-cyan-400 text-sm mb-8">▲ AI 市場份額分佈圖</p>

          {/* 仪表盘图 */}
          <GaugeChartSVG />
          <p className="text-center text-cyan-400 text-sm mb-8">▲ AI 效率提升指數</p>

          {/* AI 图像生成部分 */}
          <h2 id="image" className="text-2xl font-bold text-pink-200 mt-12 mb-6 flex items-center gap-3">
            <span className="text-3xl">🎨</span> AI 圖像生成：將想像化為現實
          </h2>

          <div className="relative my-8 rounded-2xl overflow-hidden">
            <img
              src="https://www.supplychaintoday.com/wp-content/uploads/2025/12/Artificial-Intelligence-tools-to-learn.webp"
              alt="AI 圖像生成"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-950/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-pink-300 text-sm">▲ AI 圖像生成工具讓創意無限延伸</p>
          </div>

          <p className="text-pink-100 leading-relaxed">
            <strong>Midjourney、DALL-E 3、Stable Diffusion、Adobe Firefly</strong> 等工具讓每個人都能成為數位藝術家。無論您需要：
          </p>

          {/* 工具卡片网格 */}
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="bg-gradient-to-br from-pink-900/60 to-rose-900/60 rounded-xl p-5 border border-pink-500/30 text-center">
              <span className="text-4xl mb-3 block">🎨</span>
              <span className="text-pink-300 font-bold">Midjourney</span>
              <p className="text-pink-100 text-xs mt-1">藝術風格強</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/60 to-amber-900/60 rounded-xl p-5 border border-orange-500/30 text-center">
              <span className="text-4xl mb-3 block">🌟</span>
              <span className="text-orange-300 font-bold">DALL-E 3</span>
              <p className="text-orange-100 text-xs mt-1">精確控制強</p>
            </div>
            <div className="bg-gradient-to-br from-violet-900/60 to-purple-900/60 rounded-xl p-5 border border-violet-500/30 text-center">
              <span className="text-4xl mb-3 block">⚡</span>
              <span className="text-violet-300 font-bold">Stable Diffusion</span>
              <p className="text-violet-100 text-xs mt-1">開源可本地部署</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/60 to-pink-900/60 rounded-xl p-5 border border-red-500/30 text-center">
              <span className="text-4xl mb-3 block">🔥</span>
              <span className="text-red-300 font-bold">Adobe Firefly</span>
              <p className="text-red-100 text-xs mt-1">設計工作流整合</p>
            </div>
          </div>

          {/* AI 编程部分 */}
          <h2 id="code" className="text-2xl font-bold text-emerald-200 mt-12 mb-6 flex items-center gap-3">
            <span className="text-3xl">💻</span> AI 編程工具：開發者的智能副駕駛
          </h2>

          <div className="relative my-8 rounded-2xl overflow-hidden">
            <img
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230602113310/Neural-Networks-Architecture.png"
              alt="AI 編程助手"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
            <p className="absolute bottom-4 left-4 text-emerald-300 text-sm">▲ AI 編程工具大幅提升開發效率</p>
          </div>

          <p className="text-emerald-100 leading-relaxed">
            對於開發者而言，<strong>GitHub Copilot、Cursor、Codeium</strong> 等 AI 編程助手已經成為不可或缺的工具：
          </p>
          <ul className="mt-4 space-y-2 text-emerald-200">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>智能代碼補全與建議</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>自動生成文檔註釋</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>代碼重構與優化建議</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400">✓</span>
              <span>Bug 定位與修復建議</span>
            </li>
          </ul>

          {/* 对比柱状图 */}
          <ComparisonBarChartSVG />
          <p className="text-center text-cyan-400 text-sm mb-8">▲ 使用 AI 前後效率對比</p>

          {/* 面积趋势图 */}
          <AreaChartSVG />
          <p className="text-center text-cyan-400 text-sm mb-8">▲ AI 採用趨勢預測（2022-2030）</p>

          {/* 图表展示区域 */}
          <h2 id="charts" className="text-2xl font-bold text-cyan-200 mt-12 mb-6 flex items-center gap-3">
            <span className="text-3xl">📊</span> 彩色幾何 SVG 統計圖表：數據視覺化之美
          </h2>

          <p className="text-cyan-100 mb-6">
            SVG 圖表不僅加載快速，而且可以任意縮放不失真。以下是我們為您準備的精美幾何風格統計圖表：
          </p>

          {/* 图表网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-6 border border-cyan-500/30">
              <h4 className="text-cyan-300 font-bold mb-4 text-center">📊 市場增長</h4>
              <BarChart3DSVG />
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-6 border border-violet-500/30">
              <h4 className="text-violet-300 font-bold mb-4 text-center">🥧 市場份額</h4>
              <DonutChart3DSVG />
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-6 border border-emerald-500/30">
              <h4 className="text-emerald-300 font-bold mb-4 text-center">📈 採用趨勢</h4>
              <AreaChartSVG />
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-6 border border-pink-500/30">
              <h4 className="text-pink-300 font-bold mb-4 text-center">🎯 能力雷達</h4>
              <RadarChartEnhancedSVG />
            </div>
          </div>

          {/* SVG 优势 */}
          <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/30 border border-emerald-500/30 rounded-2xl p-6 my-8">
            <h4 className="text-emerald-300 font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">💎</span> SVG 圖表優勢
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-emerald-100 text-sm">加載速度快</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-2xl">🔍</span>
                <span className="text-emerald-100 text-sm">任意縮放無失真</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-2xl">🎨</span>
                <span className="text-emerald-100 text-sm">支援漸變色彩</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-2xl">♿</span>
                <span className="text-emerald-100 text-sm">無障礙友好</span>
              </div>
            </div>
          </div>

          {/* 进度环 */}
          <ProgressRingSVG />
          <p className="text-center text-cyan-400 text-sm mb-8">▲ 用戶滿意度持續走高</p>

          {/* 高效技巧部分 */}
          <h2 id="tips" className="text-2xl font-bold text-yellow-200 mt-12 mb-6 flex items-center gap-3">
            <span className="text-3xl">💡</span> 高效使用 AI 工具的專家技巧
          </h2>

          <div className="bg-gradient-to-br from-cyan-800 to-teal-900 border border-cyan-500/30 rounded-2xl p-6 my-8">
            <ul className="space-y-4 text-cyan-100">
              <li className="flex gap-3">
                <span className="text-cyan-300 text-xl flex-shrink-0">🎯</span>
                <span><strong>精確提示詞工程：</strong>AI 输出的质量完全取决于输入的提示词。学会使用<strong>具体、清晰、有上下文</strong>的提示词，远比模糊的请求效果要好得多。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-300 text-xl flex-shrink-0">🔄</span>
                <span><strong>迭代優化：</strong>不要期望一次就能得到完美结果。使用<strong>逐步引導</strong>的方式，先得到初步版本，再逐步修正和優化。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-300 text-xl flex-shrink-0">🧠</span>
                <span><strong>批判性思維：</strong>AI 有時會產生<strong>幻覺</strong>（hallucination）——看似合理但實際錯誤的內容。務必對輸出的事實性進行核實。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-300 text-xl flex-shrink-0">⚡</span>
                <span><strong>工作流整合：</strong>將 AI 工具整合到您的日常工作流程中，例如使用 API 或瀏覽器插件，讓使用更加順暢自然。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-300 text-xl flex-shrink-0">🔒</span>
                <span><strong>隱私保護：</strong>在使用 AI 工具時，<strong>避免輸入敏感個人資訊或商業機密</strong>，除非您完全信任該平台的隱私政策。</span>
              </li>
            </ul>
          </div>

          {/* 总结信息卡片 */}
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

          {/* 结尾装饰 */}
          <GeometricDecorSVG />
          <p className="text-center text-cyan-400 text-sm mb-8">▲ 開啟您的 AI 工具學習之旅</p>

          {/* 广告 */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>
        </article>
      </div>

      {/* 评论部分 */}
      <Comments slug="ai-tools-tutorial" />
    </div>
  );
}