import { useState, useEffect } from "react";

type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

export default function ClientWrapper() {
  const [lang, setLang] = useState<TravelLanguage>("yue");

  useEffect(() => {
    const stored = localStorage.getItem("travel_blog_lang") as TravelLanguage;
    if (stored) setLang(stored);

    const handleLangChange = (e: CustomEvent<TravelLanguage>) => setLang(e.detail);
    window.addEventListener("travel-lang-change", handleLangChange as EventListener);
    return () => window.removeEventListener("travel-lang-change", handleLangChange as EventListener);
  }, []);

  const tocItems = {
    yue: [
      { id: "overview", label: "市場概覽" },
      { id: "tools", label: "主流工具比較" },
      { id: "technology", label: "技術原理" },
      { id: "pricing", label: "價格方案" },
      { id: "usecases", label: "應用場景" },
      { id: "verdict", label: "選擇建議" },
    ],
    "zh-TW": [
      { id: "overview", label: "市場概覽" },
      { id: "tools", label: "主流工具比較" },
      { id: "technology", label: "技術原理" },
      { id: "pricing", label: "價格方案" },
      { id: "usecases", label: "應用場景" },
      { id: "verdict", label: "選擇建議" },
    ],
    "zh-CN": [
      { id: "overview", label: "市场概览" },
      { id: "tools", label: "主流工具比较" },
      { id: "technology", label: "技术原理" },
      { id: "pricing", label: "价格方案" },
      { id: "usecases", label: "应用场景" },
      { id: "verdict", label: "选择建议" },
    ],
    en: [
      { id: "overview", label: "Market Overview" },
      { id: "tools", label: "Tool Comparison" },
      { id: "technology", label: "Technology" },
      { id: "pricing", label: "Pricing" },
      { id: "usecases", label: "Use Cases" },
      { id: "verdict", label: "Recommendations" },
    ],
  };

  const tContent = {
    yue: {
      title: "AI 影片生成工具深度評測 2026 | Sora vs Runway vs Pika",
      description: "全面比較 Sora、Runway Gen-3、Pika、Kling 等主流 AI 影片生成工具，助你選擇最適合的創作平台。",
      heroImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80",
      overviewTitle: "市場概覽：AI 影片生成的元年",
      overviewContent: `<p>2026 年被業界稱為「AI 影片生成元年」，技術實現重大突破。<strong>Sora</strong> 的發布引發行業變革，<strong>Runway Gen-3</strong>、<strong>Pika 2.0</strong>、<strong>Kling</strong> 等工具相繼問世。</p>
      <p>市場數據顯示：</p>
      <ul>
        <li>全球 AI 影片生成市場規模達 <strong>25 億美元</strong></li>
        <li>年增長率達 <strong>285%</strong></li>
        <li>專業創作者使用率超過 <strong>40%</strong></li>
        <li>平均影片生成時間從 30 分鐘縮短至 <strong>3 分鐘</strong></li>
      </ul>`,
      toolsTitle: "主流工具詳細比較",
      soraName: "OpenAI Sora",
      soraDesc: "OpenAI 開發的影片生成模型，能根據文字描述生成高達 60 秒的高質量影片。",
      soraStrength: "最長生成時間、動作一致性強、場景複雜度領先",
      runwayName: "Runway Gen-3",
      runwayDesc: "專業影視製作工具，支援 Cinematic 模式，導演級控制選項。",
      runwayStrength: "電影感強、專業工具鏈、多人協作",
      pikaName: "Pika 2.0",
      pikaDesc: "強調易用性的 AI 影片工具，支援多種風格和運動控制。",
      pikaStrength: "操作簡單、界面友好、價格親民",
      klingName: "快手 Kling",
      klingDesc: "中國團隊開發的影片生成模型，支援中文提示詞，本土化優勢明顯。",
      klingStrength: "中文支援、本土化、性價比高",
      techTitle: "技術原理與能力對比",
      tech1Title: "文字轉影片 (Text-to-Video)",
      tech1Desc: "根據文字描述生成對應影片內容，是最基礎的功能。",
      tech2Title: "圖片轉影片 (Image-to-Video)",
      tech2Desc: "將靜態圖片轉換為動態影片，支援局部動畫控制。",
      tech3Title: "影片延長 (Video Extension)",
      tech3Desc: "將現有影片延長至更長時長，保持風格一致。",
      tech4Title: "導演控制 (Camera Control)",
      tech4Desc: "控制攝影機運動軌跡，實現專業運鏡效果。",
      pricingTitle: "價格方案比較",
      pricingDesc: "各平台的訂閱方案：",
      freeName: "免費版",
      freePrice: "HK$0",
      freeFeatures: ["每日積分限制", "低分辨率輸出", "基礎功能"],
      proName: "Pro 版",
      proPrice: "HK$195/月",
      proFeatures: ["無限制生成", "高清輸出", "商業授權", "優先隊列"],
      teamName: "Team 版",
      teamPrice: "HK$390/月",
      teamFeatures: ["5 席位", "API 訪問", "自定義模型", "專屬支援"],
      usecase1Title: "社交媒體內容",
      usecase1Desc: "快速生成短影片、Reels、Story 等社交平台內容。",
      usecase2Title: "營銷廣告",
      usecase2Desc: "製作產品展示、活動宣傳、品牌故事影片。",
      usecase3Title: "影視製作",
      usecase3Desc: "預覽、分鏡、特效製作，降低前期製作成本。",
      usecase4Title: "教育培訓",
      usecase4Desc: "製作教學影片、解說動畫、知識科普內容。",
      verdictTitle: "選擇建議",
      verdictSummary: "根據不同需求選擇最適合的工具",
      verdictPros: ["大幅降低影片製作門檻", "生成速度從數小時縮短至數分鐘", "成本從數千美元降至數十美元", "支援多種創意風格和表現形式"],
      verdictCons: ["版權和倫理爭議", "部分地區使用限制", "長影片一致性仍有挑戰", "需要付費才能獲得高質量輸出"],
      verdictNote: "建議先從免費版開始，評估工具是否符合需求再升級。",
    },
    "zh-TW": {
      title: "AI 影片生成工具深度評測 2026 | Sora vs Runway vs Pika",
      description: "全面比較 Sora、Runway Gen-3、Pika、Kling 等主流 AI 影片生成工具，助你選擇最適合的創作平台。",
      heroImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80",
      overviewTitle: "市場概覽：AI 影片生成的元年",
      overviewContent: `<p>2026 年被業界稱為「AI 影片生成元年」，技術實現重大突破。<strong>Sora</strong> 的發布引發行業變革，<strong>Runway Gen-3</strong>、<strong>Pika 2.0</strong>、<strong>Kling</strong> 等工具相繼問世。</p>
      <p>市場數據顯示：</p>
      <ul>
        <li>全球 AI 影片生成市場規模達 <strong>25 億美元</strong></li>
        <li>年增長率達 <strong>285%</strong></li>
        <li>專業創作者使用率超過 <strong>40%</strong></li>
        <li>平均影片生成時間從 30 分鐘縮短至 <strong>3 分鐘</strong></li>
      </ul>`,
      toolsTitle: "主流工具詳細比較",
      soraName: "OpenAI Sora",
      soraDesc: "OpenAI 開發的影片生成模型，能根據文字描述生成高達 60 秒的高質量影片。",
      soraStrength: "最長生成時間、動作一致性強、場景複雜度領先",
      runwayName: "Runway Gen-3",
      runwayDesc: "專業影視製作工具，支援 Cinematic 模式，導演級控制選項。",
      runwayStrength: "電影感強、專業工具鏈、多人協作",
      pikaName: "Pika 2.0",
      pikaDesc: "強調易用性的 AI 影片工具，支援多種風格和運動控制。",
      pikaStrength: "操作簡單、界面友好、價格親民",
      klingName: "快手 Kling",
      klingDesc: "中國團隊開發的影片生成模型，支援中文提示詞，本土化優勢明顯。",
      klingStrength: "中文支援、本土化、性價比高",
      techTitle: "技術原理與能力對比",
      tech1Title: "文字轉影片 (Text-to-Video)",
      tech1Desc: "根據文字描述生成對應影片內容，是最基礎的功能。",
      tech2Title: "圖片轉影片 (Image-to-Video)",
      tech2Desc: "將靜態圖片轉換為動態影片，支援局部動畫控制。",
      tech3Title: "影片延長 (Video Extension)",
      tech3Desc: "將現有影片延長至更長時長，保持風格一致。",
      tech4Title: "導演控制 (Camera Control)",
      tech4Desc: "控制攝影機運動軌跡，實現專業運鏡效果。",
      pricingTitle: "價格方案比較",
      pricingDesc: "各平台的訂閱方案：",
      freeName: "免費版",
      freePrice: "HK$0",
      freeFeatures: ["每日積分限制", "低分辨率輸出", "基礎功能"],
      proName: "Pro 版",
      proPrice: "HK$195/月",
      proFeatures: ["無限制生成", "高清輸出", "商業授權", "優先隊列"],
      teamName: "Team 版",
      teamPrice: "HK$390/月",
      teamFeatures: ["5 席位", "API 訪問", "自定義模型", "專屬支援"],
      usecase1Title: "社交媒體內容",
      usecase1Desc: "快速生成短影片、Reels、Story 等社交平台內容。",
      usecase2Title: "營銷廣告",
      usecase2Desc: "製作產品展示、活動宣傳、品牌故事影片。",
      usecase3Title: "影視製作",
      usecase3Desc: "預覽、分鏡、特效製作，降低前期製作成本。",
      usecase4Title: "教育培訓",
      usecase4Desc: "製作教學影片、解說動畫、知識科普內容。",
      verdictTitle: "選擇建議",
      verdictSummary: "根據不同需求選擇最適合的工具",
      verdictPros: ["大幅降低影片製作門檻", "生成速度從數小時縮短至數分鐘", "成本從數千美元降至數十美元", "支援多種創意風格和表現形式"],
      verdictCons: ["版權和倫理爭議", "部分地區使用限制", "長影片一致性仍有挑戰", "需要付費才能獲得高質量輸出"],
      verdictNote: "建議先從免費版開始，評估工具是否符合需求再升級。",
    },
    "zh-CN": {
      title: "AI 视频生成工具深度评测 2026 | Sora vs Runway vs Pika",
      description: "全面比较 Sora、Runway Gen-3、Pika、Kling 等主流 AI 视频生成工具，助你选择最适合的创作平台。",
      heroImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80",
      overviewTitle: "市场概览：AI 视频生成的元年",
      overviewContent: `<p>2026 年被业界称为「AI 视频生成元年」，技术实现重大突破。<strong>Sora</strong> 的发布引发行业变革，<strong>Runway Gen-3</strong>、<strong>Pika 2.0</strong>、<strong>Kling</strong> 等工具相继问世。</p>
      <p>市场数据显示：</p>
      <ul>
        <li>全球 AI 视频生成市场规模达 <strong>25 亿美元</strong></li>
        <li>年增长率达 <strong>285%</strong></li>
        <li>专业创作者使用率超过 <strong>40%</strong></li>
        <li>平均视频生成时间从 30 分钟缩短至 <strong>3 分钟</strong></li>
      </ul>`,
      toolsTitle: "主流工具详细比较",
      soraName: "OpenAI Sora",
      soraDesc: "OpenAI 开发的视频生成模型，能根据文字描述生成长达 60 秒的高质量视频。",
      soraStrength: "最长生成时间、动作一致性强、场景复杂度领先",
      runwayName: "Runway Gen-3",
      runwayDesc: "专业影视制作工具，支持 Cinematic 模式，导演级控制选项。",
      runwayStrength: "电影感强、专业工具链、多人协作",
      pikaName: "Pika 2.0",
      pikaDesc: "强调易用性的 AI 视频工具，支持多种风格和运动控制。",
      pikaStrength: "操作简单、界面友好、价格亲民",
      klingName: "快手 Kling",
      klingDesc: "中国团队开发的视频生成模型，支持中文提示词，本土化优势明显。",
      klingStrength: "中文支持、本土化、性价比高",
      techTitle: "技术原理与能力对比",
      tech1Title: "文字转视频 (Text-to-Video)",
      tech1Desc: "根据文字描述生成对应视频内容，是最基础的功能。",
      tech2Title: "图片转视频 (Image-to-Video)",
      tech2Desc: "将静态图片转换为动态视频，支持局部动画控制。",
      tech3Title: "视频延长 (Video Extension)",
      tech3Desc: "将现有视频延长至更长时长，保持风格一致。",
      tech4Title: "导演控制 (Camera Control)",
      tech4Desc: "控制摄像机运动轨迹，实现专业运镜效果。",
      pricingTitle: "价格方案比较",
      pricingDesc: "各平台的订阅方案：",
      freeName: "免费版",
      freePrice: "HK$0",
      freeFeatures: ["每日积分限制", "低分辨率输出", "基础功能"],
      proName: "Pro 版",
      proPrice: "HK$195/月",
      proFeatures: ["无限制生成", "高清输出", "商业授权", "优先队列"],
      teamName: "Team 版",
      teamPrice: "HK$390/月",
      teamFeatures: ["5 席位", "API 访问", "自定义模型", "专属支持"],
      usecase1Title: "社交媒体内容",
      usecase1Desc: "快速生成短视频、Reels、Story 等社交平台内容。",
      usecase2Title: "营销广告",
      usecase2Desc: "制作产品展示、活动宣传、品牌故事视频。",
      usecase3Title: "影视制作",
      usecase3Desc: "预览、分镜、特效制作，降低前期制作成本。",
      usecase4Title: "教育培训",
      usecase4Desc: "制作教学视频、解说动画、知识科普内容。",
      verdictTitle: "选择建议",
      verdictSummary: "根据不同需求选择最适合的工具",
      verdictPros: ["大幅降低视频制作门槛", "生成速度从数小时缩短至数分钟", "成本从数千美元降至数十美元", "支持多种创意风格和表现形式"],
      verdictCons: ["版权和伦理争议", "部分地区使用限制", "长视频一致性仍有挑战", "需要付费才能获得高质量输出"],
      verdictNote: "建议先从免费版开始，评估工具是否符合需求再升级。",
    },
    en: {
      title: "AI Video Generation Tools Review 2026 | Sora vs Runway vs Pika",
      description: "Comprehensive comparison of Sora, Runway Gen-3, Pika, Kling and other mainstream AI video generation tools.",
      heroImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&q=80",
      overviewTitle: "Market Overview: The Year of AI Video Generation",
      overviewContent: `<p>2026 is called the "Year of AI Video Generation" by the industry, with major technological breakthroughs. <strong>Sora</strong>'s release sparked industry changes, followed by <strong>Runway Gen-3</strong>, <strong>Pika 2.0</strong>, <strong>Kling</strong> and more.</p>
      <p>Market data shows:</p>
      <ul>
        <li>Global AI video generation market size: <strong>$2.5 billion</strong></li>
        <li>Annual growth rate: <strong>285%</strong></li>
        <li>Professional creator usage: <strong>40%+</strong></li>
        <li>Average generation time reduced from 30 min to <strong>3 min</strong></li>
      </ul>`,
      toolsTitle: "Mainstream Tools Comparison",
      soraName: "OpenAI Sora",
      soraDesc: "Video generation model developed by OpenAI, can generate up to 60 seconds of high-quality video from text descriptions.",
      soraStrength: "Longest generation time, strong motion consistency, industry-leading scene complexity",
      runwayName: "Runway Gen-3",
      runwayDesc: "Professional film production tool with Cinematic mode and director-level control options.",
      runwayStrength: "Cinematic quality, professional toolchain, multi-person collaboration",
      pikaName: "Pika 2.0",
      pikaDesc: "AI video tool emphasizing ease of use, supporting multiple styles and motion controls.",
      pikaStrength: "Simple operation, friendly interface, affordable pricing",
      klingName: "Kuaishou Kling",
      klingDesc: "Video generation model developed by Chinese team, supporting Chinese prompts with strong localization.",
      klingStrength: "Chinese support, localization, high cost-effectiveness",
      techTitle: "Technology & Capability Comparison",
      tech1Title: "Text-to-Video",
      tech1Desc: "Generate corresponding video content based on text descriptions, the most basic feature.",
      tech2Title: "Image-to-Video",
      tech2Desc: "Convert static images to dynamic video with local animation control.",
      tech3Title: "Video Extension",
      tech3Desc: "Extend existing videos to longer duration while maintaining style consistency.",
      tech4Title: "Camera Control",
      tech4Desc: "Control camera movement trajectories for professional cinematography.",
      pricingTitle: "Pricing Plans Comparison",
      pricingDesc: "Subscription plans for each platform:",
      freeName: "Free",
      freePrice: "HK$0",
      freeFeatures: ["Daily credits limit", "Low resolution output", "Basic features"],
      proName: "Pro",
      proPrice: "HK$195/month",
      proFeatures: ["Unlimited generation", "HD output", "Commercial license", "Priority queue"],
      teamName: "Team",
      teamPrice: "HK$390/month",
      teamFeatures: ["5 seats", "API access", "Custom models", "Dedicated support"],
      usecase1Title: "Social Media Content",
      usecase1Desc: "Quickly generate short videos, Reels, Stories for social platforms.",
      usecase2Title: "Marketing & Ads",
      usecase2Desc: "Create product showcases, event promos, brand story videos.",
      usecase3Title: "Film Production",
      usecase3Desc: "Previews, storyboards, VFX production, reducing pre-production costs.",
      usecase4Title: "Education & Training",
      usecase4Desc: "Create teaching videos, explainer animations, educational content.",
      verdictTitle: "Recommendations",
      verdictSummary: "Choose the best tool based on your specific needs",
      verdictPros: ["Significantly lowered video production barrier", "Generation time reduced from hours to minutes", "Cost reduced from thousands to tens of dollars", "Supports multiple creative styles and formats"],
      verdictCons: ["Copyright and ethics disputes", "Usage restrictions in some regions", "Long video consistency challenges", "Paid plans required for high-quality output"],
      verdictNote: "Recommended to start with the free version and evaluate if the tool meets your needs before upgrading.",
    },
  };

  const tc = tContent[lang];

  // SVG Charts
  const MarketGrowthChart = () => (
    <svg viewBox="0 0 400 180" className="w-full max-w-md mx-auto my-6">
      <rect x="30" y="150" width="50" height="20" fill="#3b82f6" rx="4" />
      <rect x="100" y="120" width="50" height="50" fill="#3b82f6" rx="4" />
      <rect x="170" y="80" width="50" height="90" fill="#8b5cf6" rx="4" />
      <rect x="240" y="30" width="50" height="140" fill="#10b981" rx="4" />
      <rect x="310" y="5" width="50" height="165" fill="#f59e0b" rx="4" />
      <text x="55" y="140" textAnchor="middle" className="text-xs fill-white">$0.2B</text>
      <text x="125" y="110" textAnchor="middle" className="text-xs fill-white">$0.5B</text>
      <text x="195" y="70" textAnchor="middle" className="text-xs fill-white">$1.2B</text>
      <text x="265" y="20" textAnchor="middle" className="text-xs fill-white">$2.5B</text>
      <text x="335" y="5" textAnchor="middle" className="text-xs fill-white">$6B</text>
      <text x="55" y="170" textAnchor="middle" className="text-xs fill-gray-500">2023</text>
      <text x="125" y="170" textAnchor="middle" className="text-xs fill-gray-500">2024</text>
      <text x="195" y="170" textAnchor="middle" className="text-xs fill-gray-500">2025</text>
      <text x="265" y="170" textAnchor="middle" className="text-xs fill-gray-500">2026</text>
      <text x="335" y="170" textAnchor="middle" className="text-xs fill-gray-500">2027</text>
    </svg>
  );

  const QualityChart = () => (
    <svg viewBox="0 0 400 150" className="w-full max-w-md mx-auto my-6">
      <rect x="30" y="80" width="80" height="50" fill="#10b981" rx="4" />
      <rect x="130" y="40" width="80" height="90" fill="#3b82f6" rx="4" />
      <rect x="230" y="20" width="80" height="110" fill="#8b5cf6" rx="4" />
      <rect x="330" y="10" width="50" height="120" fill="#f59e0b" rx="4" />
      <text x="70" y="60" textAnchor="middle" className="text-sm font-bold fill-white">60%</text>
      <text x="170" y="30" textAnchor="middle" className="text-sm font-bold fill-white">85%</text>
      <text x="270" y="10" textAnchor="middle" className="text-sm font-bold fill-white">92%</text>
      <text x="355" y="5" textAnchor="middle" className="text-sm font-bold fill-white">98%</text>
      <text x="70" y="140" textAnchor="middle" className="text-xs fill-gray-500">Pika</text>
      <text x="170" y="140" textAnchor="middle" className="text-xs fill-gray-500">Runway</text>
      <text x="270" y="140" textAnchor="middle" className="text-xs fill-gray-500">Sora</text>
      <text x="355" y="140" textAnchor="middle" className="text-xs fill-gray-500">Kling</text>
    </svg>
  );

  const PricingChart = () => (
    <svg viewBox="0 0 400 150" className="w-full max-w-md mx-auto my-6">
      <rect x="30" y="100" width="100" height="40" fill="#10b981" rx="4" />
      <rect x="150" y="60" width="100" height="80" fill="#3b82f6" rx="4" />
      <rect x="270" y="30" width="100" height="110" fill="#8b5cf6" rx="4" />
      <text x="80" y="70" textAnchor="middle" className="text-lg font-bold fill-white">Free</text>
      <text x="200" y="30" textAnchor="middle" className="text-lg font-bold fill-white">HK$195</text>
      <text x="320" y="10" textAnchor="middle" className="text-lg font-bold fill-white">HK$390</text>
    </svg>
  );

  const SpeedChart = () => (
    <svg viewBox="0 0 350 120" className="w-full max-w-sm mx-auto my-6">
      <rect x="20" y="30" width="60" height="70" fill="#f59e0b" rx="4" />
      <rect x="100" y="50" width="60" height="50" fill="#3b82f6" rx="4" />
      <rect x="180" y="70" width="60" height="30" fill="#10b981" rx="4" />
      <rect x="260" y="80" width="60" height="20" fill="#8b5cf6" rx="4" />
      <text x="50" y="25" textAnchor="middle" className="text-lg font-bold fill-white">5min</text>
      <text x="130" y="45" textAnchor="middle" className="text-lg font-bold fill-white">3min</text>
      <text x="210" y="65" textAnchor="middle" className="text-lg font-bold fill-white">2min</text>
      <text x="290" y="75" textAnchor="middle" className="text-lg font-bold fill-white">1min</text>
      <text x="50" y="110" textAnchor="middle" className="text-xs fill-gray-500">Sora</text>
      <text x="130" y="110" textAnchor="middle" className="text-xs fill-gray-500">Runway</text>
      <text x="210" y="110" textAnchor="middle" className="text-xs fill-gray-500">Pika</text>
      <text x="290" y="110" textAnchor="middle" className="text-xs fill-gray-500">Kling</text>
    </svg>
  );

  const UseCaseChart = () => (
    <svg viewBox="0 0 400 150" className="w-full max-w-md mx-auto my-6">
      <rect x="20" y="30" width="80" height="100" fill="#3b82f6" rx="4" />
      <rect x="120" y="50" width="80" height="80" fill="#8b5cf6" rx="4" />
      <rect x="220" y="20" width="80" height="110" fill="#10b981" rx="4" />
      <rect x="320" y="60" width="60" height="70" fill="#f59e0b" rx="4" />
      <text x="60" y="85" textAnchor="middle" className="text-lg font-bold fill-white">45%</text>
      <text x="160" y="95" textAnchor="middle" className="text-lg font-bold fill-white">30%</text>
      <text x="260" y="80" textAnchor="middle" className="text-lg font-bold fill-white">15%</text>
      <text x="350" y="100" textAnchor="middle" className="text-sm font-bold fill-white">10%</text>
      <text x="60" y="120" textAnchor="middle" className="text-xs fill-gray-600">Social</text>
      <text x="160" y="120" textAnchor="middle" className="text-xs fill-gray-600">Marketing</text>
      <text x="260" y="120" textAnchor="middle" className="text-xs fill-gray-600">Film</text>
      <text x="350" y="120" textAnchor="middle" className="text-xs fill-gray-600">Other</text>
    </svg>
  );

  const FeatureRadar = () => (
    <svg viewBox="0 0 300 250" className="w-full max-w-sm mx-auto my-6">
      <polygon points="150,30 250,70 230,180 70,180 50,70" fill="none" stroke="#e5e7eb" strokeWidth="1" />
      <polygon points="150,60 220,90 210,160 90,160 80,90" fill="none" stroke="#e5e7eb" strokeWidth="1" />
      <polygon points="150,90 190,110 190,140 110,140 110,110" fill="none" stroke="#e5e7eb" strokeWidth="1" />
      <polygon points="150,50 240,80 220,170 80,170 60,80" fill="#8b5cf6" fillOpacity="0.3" stroke="#8b5cf6" strokeWidth="2" />
      <text x="150" y="20" textAnchor="middle" className="text-xs fill-gray-600">Quality</text>
      <text x="265" y="75" textAnchor="start" className="text-xs fill-gray-600">Speed</text>
      <text x="245" y="190" textAnchor="start" className="text-xs fill-gray-600">Ease of Use</text>
      <text x="55" y="190" textAnchor="end" className="text-xs fill-gray-600">Pricing</text>
      <text x="35" y="75" textAnchor="end" className="text-xs fill-gray-600">Features</text>
      <circle cx="150" cy="50" r="4" fill="#8b5cf6" />
      <circle cx="240" cy="80" r="4" fill="#8b5cf6" />
      <circle cx="220" cy="170" r="4" fill="#8b5cf6" />
      <circle cx="80" cy="170" r="4" fill="#8b5cf6" />
      <circle cx="60" cy="80" r="4" fill="#8b5cf6" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-blue-600">NewsKingdom</a>
            <nav className="flex gap-6">
              <a href="/travel" className="text-gray-600 hover:text-blue-600">旅遊</a>
              <a href="/blog" className="text-gray-600 hover:text-blue-600">博客</a>
            </nav>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
          <img src={tc.heroImage} alt={tc.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{tc.title}</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-blue-600">$2.5B</div>
            <div className="text-sm text-gray-500">Market Size</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-purple-600">285%</div>
            <div className="text-sm text-gray-500">YoY Growth</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600">40%+</div>
            <div className="text-sm text-gray-500">Creator Usage</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-orange-600">3min</div>
            <div className="text-sm text-gray-500">Avg Gen Time</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-4 shadow-sm sticky top-24">
              <h3 className="font-bold text-gray-800 mb-4">目錄</h3>
              <nav className="space-y-2">
                {tocItems[lang].map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-gray-600 hover:text-blue-600 py-1">{item.label}</a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-1 space-y-8">
            <section id="overview" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{tc.overviewTitle}</h2>
              <div dangerouslySetInnerHTML={{ __html: tc.overviewContent }} />
              <MarketGrowthChart />
              <p className="text-sm text-gray-500 text-center">Chart: AI Video Generation Market Growth</p>
            </section>

            <section id="tools" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{tc.toolsTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-xl">🔴</div>
                    <h3 className="font-bold text-lg">{tc.soraName}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tc.soraDesc}</p>
                  <div className="bg-red-50 rounded-lg p-3">
                    <span className="text-xs text-red-700 font-medium">Strengths: </span>
                    <span className="text-sm text-gray-700">{tc.soraStrength}</span>
                  </div>
                </div>
                <div className="border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">🔵</div>
                    <h3 className="font-bold text-lg">{tc.runwayName}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tc.runwayDesc}</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <span className="text-xs text-blue-700 font-medium">Strengths: </span>
                    <span className="text-sm text-gray-700">{tc.runwayStrength}</span>
                  </div>
                </div>
                <div className="border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">🟣</div>
                    <h3 className="font-bold text-lg">{tc.pikaName}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tc.pikaDesc}</p>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <span className="text-xs text-purple-700 font-medium">Strengths: </span>
                    <span className="text-sm text-gray-700">{tc.pikaStrength}</span>
                  </div>
                </div>
                <div className="border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl">🟠</div>
                    <h3 className="font-bold text-lg">{tc.klingName}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tc.klingDesc}</p>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <span className="text-xs text-orange-700 font-medium">Strengths: </span>
                    <span className="text-sm text-gray-700">{tc.klingStrength}</span>
                  </div>
                </div>
              </div>
              <QualityChart />
              <p className="text-sm text-gray-500 text-center">Chart: Video Quality Scores</p>
            </section>

            <section id="technology" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{tc.techTitle}</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">{tc.tech1Title}</h4>
                  <p className="text-sm text-gray-600">{tc.tech1Desc}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">{tc.tech2Title}</h4>
                  <p className="text-sm text-gray-600">{tc.tech2Desc}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">{tc.tech3Title}</h4>
                  <p className="text-sm text-gray-600">{tc.tech3Desc}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">{tc.tech4Title}</h4>
                  <p className="text-sm text-gray-600">{tc.tech4Desc}</p>
                </div>
              </div>
              <FeatureRadar />
              <p className="text-sm text-gray-500 text-center">Chart: Feature Comparison Radar</p>
              <SpeedChart />
              <p className="text-sm text-gray-500 text-center">Chart: Average Generation Speed</p>
            </section>

            <section id="pricing" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{tc.pricingTitle}</h2>
              <p className="text-gray-600 mb-6">{tc.pricingDesc}</p>
              <PricingChart />
              <p className="text-sm text-gray-500 text-center mb-6">Chart: Pricing Tiers</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{tc.freeName}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-4">{tc.freePrice}</div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {tc.freeFeatures.map((f, i) => (<li key={i}>✓ {f}</li>))}
                  </ul>
                </div>
                <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{tc.proName}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{tc.proPrice}</div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {tc.proFeatures.map((f, i) => (<li key={i}>✓ {f}</li>))}
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{tc.teamName}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-4">{tc.teamPrice}</div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {tc.teamFeatures.map((f, i) => (<li key={i}>✓ {f}</li>))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="usecases" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{lang === "en" ? "Use Cases" : "應用場景"}</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white">
                  <h3 className="font-bold text-lg mb-2">{tc.usecase1Title}</h3>
                  <p className="text-sm opacity-90">{tc.usecase1Desc}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-5 text-white">
                  <h3 className="font-bold text-lg mb-2">{tc.usecase2Title}</h3>
                  <p className="text-sm opacity-90">{tc.usecase2Desc}</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white">
                  <h3 className="font-bold text-lg mb-2">{tc.usecase3Title}</h3>
                  <p className="text-sm opacity-90">{tc.usecase3Desc}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white">
                  <h3 className="font-bold text-lg mb-2">{tc.usecase4Title}</h3>
                  <p className="text-sm opacity-90">{tc.usecase4Desc}</p>
                </div>
              </div>
              <UseCaseChart />
              <p className="text-sm text-gray-500 text-center">Chart: Use Case Distribution</p>
            </section>

            <section id="verdict" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{tc.verdictTitle}</h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                <p className="text-lg font-medium text-gray-800">{tc.verdictSummary}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-green-600 mb-3">✓ Pros</h3>
                  <ul className="space-y-2">
                    {tc.verdictPros.map((p, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-green-500 mt-1">●</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-red-600 mb-3">✗ Cons</h3>
                  <ul className="space-y-2">
                    {tc.verdictCons.map((c, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-red-500 mt-1">●</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700">{tc.verdictNote}</p>
              </div>
            </section>
          </div>
        </div>
      </article>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 NewsKingdom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}