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
      { id: "tools", label: "語音合成工具" },
      { id: "music", label: "AI 音樂生成" },
      { id: "pricing", label: "價格方案" },
      { id: "usecases", label: "應用場景" },
      { id: "verdict", label: "選擇建議" },
    ],
    "zh-TW": [
      { id: "overview", label: "市場概覽" },
      { id: "tools", label: "語音合成工具" },
      { id: "music", label: "AI 音樂生成" },
      { id: "pricing", label: "價格方案" },
      { id: "usecases", label: "應用場景" },
      { id: "verdict", label: "選擇建議" },
    ],
    "zh-CN": [
      { id: "overview", label: "市场概览" },
      { id: "tools", label: "语音合成工具" },
      { id: "music", label: "AI 音乐生成" },
      { id: "pricing", label: "价格方案" },
      { id: "usecases", label: "应用场景" },
      { id: "verdict", label: "选择建议" },
    ],
    en: [
      { id: "overview", label: "Market Overview" },
      { id: "tools", label: "Voice Synthesis" },
      { id: "music", label: "AI Music" },
      { id: "pricing", label: "Pricing" },
      { id: "usecases", label: "Use Cases" },
      { id: "verdict", label: "Recommendations" },
    ],
  };

  const tContent = {
    yue: {
      title: "AI 音頻與語音工具全面評測 2026 | Eleven Labs vs Suno vs Udio",
      description: "深度比較 Eleven Labs、OpenAI Voice Engine、Suno、Udio 等 AI 音頻工具，涵蓋語音合成、AI 音樂生成等領域。",
      heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80",
      overviewTitle: "市場概覽：AI 音頻技術的爆發年",
      overviewContent: `<p>2026 年 AI 音頻技術實現重大突破。<strong>Eleven Labs</strong> 的語音克隆技術達到以假亂真程度，<strong>Suno</strong> 和 <strong>Udio</strong> 將 AI 音樂創作推向大眾。</p>
      <p>市場數據：</p>
      <ul>
        <li>全球 AI 音頻市場規模達 <strong>18 億美元</strong></li>
        <li>年增長率達 <strong>180%</strong></li>
        <li>語音合成準確率提升至 <strong>98.5%</strong></li>
        <li>AI 音樂歌曲數量突破 <strong>1 億首</strong></li>
      </ul>`,
      voiceTitle: "語音合成工具比較",
      elevenName: "Eleven Labs",
      elevenDesc: "業界領先的 AI 語音合成平台，支援 120+ 種語言和聲音克隆。",
      elevenStrength: "聲音質量最高、情感表達豐富、支援聲音克隆",
      voicecraftName: "OpenAI Voice Engine",
      voicecraftDesc: "OpenAI 開發的語音引擎，專注於自然對話和情感表達。",
      voicecraftStrength: "自然度高、延遲低、與 GPT 集成",
      azureName: "Azure TTS",
      azureDesc: "微軟 Azure 認知服務，企業級語音合成解決方案。",
      azureStrength: "企業級安全、多語言支援、穩定性高",
      playhtName: "Play.ht",
      playhtDesc: "開源友好的語音合成工具，支援自定義語音訓練。",
      playhtStrength: "開源、可定制、價格實惠",
      musicTitle: "AI 音樂生成工具",
      sunoName: "Suno",
      sunoDesc: "能夠根據文字描述生成完整歌曲，包括歌詞、旋律、編曲。",
      sunoStrength: "完整歌曲生成、音樂質量高、操作簡單",
      udioName: "Udio",
      udioDesc: "新興 AI 音樂平台，強調音樂風格多樣性和創作自由度。",
      udioStrength: "風格多樣、生成速度快、社區活躍",
      a封面Title: "音頻處理工具",
      a封面Desc: "包括降噪、音效增強、音頻編輯等輔助工具。",
      pricingTitle: "價格方案比較",
      pricingDesc: "各平台的訂閱方案：",
      freeName: "免費版",
      freePrice: "HK$0",
      freeFeatures: ["有限額度", "基礎功能", "浮水印輸出"],
      proName: "Pro 版",
      proPrice: "HK$130/月",
      proFeatures: ["無限制使用", "商業授權", "高質量輸出", "無浮水印"],
      teamName: "Enterprise",
      teamPrice: "HK$650/月",
      teamFeatures: ["API 訪問", "自定義模型", "專屬支援", "批量處理"],
      usecase1Title: "有聲書與播客",
      usecase1Desc: "快速將文字內容轉換為語音，支援多種音色和情感風格。",
      usecase2Title: "遊戲與動畫",
      usecase2Desc: "為遊戲角色、動畫配音，支持多語言本地化。",
      usecase3Title: "音樂創作",
      usecase3Desc: "輔助音樂人創作，提供靈感和編曲建議。",
      usecase4Title: "企業通訊",
      usecase4Desc: "自動化客服語音、IVR 系統、培訓影片配音。",
      verdictTitle: "選擇建議",
      verdictSummary: "根據使用場景和預算選擇最適合的工具",
      verdictPros: ["大幅降低音頻製作成本", "製作速度從數天縮短至數分鐘", "支援 100+ 語言和方言", "聲音克隆技術日益成熟"],
      verdictCons: ["版權和倫理問題凸顯", "部分工具需付費才能商用", "音樂風格同質化嚴重", "需要後期調整以達到專業標準"],
      verdictNote: "建議先從免費版測試音色和質量，確認滿足需求後再升級付費方案。",
    },
    "zh-TW": {
      title: "AI 音頻與語音工具全面評測 2026 | Eleven Labs vs Suno vs Udio",
      description: "深度比較 Eleven Labs、OpenAI Voice Engine、Suno、Udio 等 AI 音頻工具，涵蓋語音合成、AI 音樂生成等領域。",
      heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80",
      overviewTitle: "市場概覽：AI 音頻技術的爆發年",
      overviewContent: `<p>2026 年 AI 音頻技術實現重大突破。<strong>Eleven Labs</strong> 的語音克隆技術達到以假亂真程度，<strong>Suno</strong> 和 <strong>Udio</strong> 將 AI 音樂創作推向大眾。</p>
      <p>市場數據：</p>
      <ul>
        <li>全球 AI 音頻市場規模達 <strong>18 億美元</strong></li>
        <li>年增長率達 <strong>180%</strong></li>
        <li>語音合成準確率提升至 <strong>98.5%</strong></li>
        <li>AI 音樂歌曲數量突破 <strong>1 億首</strong></li>
      </ul>`,
      voiceTitle: "語音合成工具比較",
      elevenName: "Eleven Labs",
      elevenDesc: "業界領先的 AI 語音合成平台，支援 120+ 種語言和聲音克隆。",
      elevenStrength: "聲音質量最高、情感表達豐富、支援聲音克隆",
      voicecraftName: "OpenAI Voice Engine",
      voicecraftDesc: "OpenAI 開發的語音引擎，專注於自然對話和情感表達。",
      voicecraftStrength: "自然度高、延遲低、與 GPT 集成",
      azureName: "Azure TTS",
      azureDesc: "微軟 Azure 認知服務，企業級語音合成解決方案。",
      azureStrength: "企業級安全、多語言支援、穩定性高",
      playhtName: "Play.ht",
      playhtDesc: "開源友好的語音合成工具，支援自定義語音訓練。",
      playhtStrength: "開源、可定制、價格實惠",
      musicTitle: "AI 音樂生成工具",
      sunoName: "Suno",
      sunoDesc: "能夠根據文字描述生成完整歌曲，包括歌詞、旋律、編曲。",
      sunoStrength: "完整歌曲生成、音樂質量高、操作簡單",
      udioName: "Udio",
      udioDesc: "新興 AI 音樂平台，強調音樂風格多樣性和創作自由度。",
      udioStrength: "風格多樣、生成速度快、社區活躍",
      a封面Title: "音頻處理工具",
      a封面Desc: "包括降噪、音效增強、音頻編輯等輔助工具。",
      pricingTitle: "價格方案比較",
      pricingDesc: "各平台的訂閱方案：",
      freeName: "免費版",
      freePrice: "HK$0",
      freeFeatures: ["有限額度", "基礎功能", "浮水印輸出"],
      proName: "Pro 版",
      proPrice: "HK$130/月",
      proFeatures: ["無限制使用", "商業授權", "高質量輸出", "無浮水印"],
      teamName: "Enterprise",
      teamPrice: "HK$650/月",
      teamFeatures: ["API 訪問", "自定義模型", "專屬支援", "批量處理"],
      usecase1Title: "有聲書與播客",
      usecase1Desc: "快速將文字內容轉換為語音，支援多種音色和情感風格。",
      usecase2Title: "遊戲與動畫",
      usecase2Desc: "為遊戲角色、動畫配音，支持多語言本地化。",
      usecase3Title: "音樂創作",
      usecase3Desc: "輔助音樂人創作，提供靈感和編曲建議。",
      usecase4Title: "企業通訊",
      usecase4Desc: "自動化客服語音、IVR 系統、培訓影片配音。",
      verdictTitle: "選擇建議",
      verdictSummary: "根據使用場景和預算選擇最適合的工具",
      verdictPros: ["大幅降低音頻製作成本", "製作速度從數天縮短至數分鐘", "支援 100+ 語言和方言", "聲音克隆技術日益成熟"],
      verdictCons: ["版權和倫理問題凸顯", "部分工具需付費才能商用", "音樂風格同質化嚴重", "需要後期調整以達到專業標準"],
      verdictNote: "建議先從免費版測試音色和質量，確認滿足需求後再升級付費方案。",
    },
    "zh-CN": {
      title: "AI 音频与语音工具全面评测 2026 | Eleven Labs vs Suno vs Udio",
      description: "深度比较 Eleven Labs、OpenAI Voice Engine、Suno、Udio 等 AI 音频工具，涵盖语音合成、AI 音乐生成等领域。",
      heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80",
      overviewTitle: "市场概览：AI 音频技术的爆发年",
      overviewContent: `<p>2026 年 AI 音频技术实现重大突破。<strong>Eleven Labs</strong> 的语音克隆技术达到以假乱真程度，<strong>Suno</strong> 和 <strong>Udio</strong> 将 AI 音乐创作推向大众。</p>
      <p>市场数据：</p>
      <ul>
        <li>全球 AI 音频市场规模达 <strong>18 亿美元</strong></li>
        <li>年增长率达 <strong>180%</strong></li>
        <li>语音合成准确率提升至 <strong>98.5%</strong></li>
        <li>AI 音乐歌曲数量突破 <strong>1 亿首</strong></li>
      </ul>`,
      voiceTitle: "语音合成工具比较",
      elevenName: "Eleven Labs",
      elevenDesc: "业界领先的 AI 语音合成平台，支持 120+ 种语言和声音克隆。",
      elevenStrength: "声音质量最高、情感表达丰富、支持声音克隆",
      voicecraftName: "OpenAI Voice Engine",
      voicecraftDesc: "OpenAI 开发的语音引擎，专注于自然对话和情感表达。",
      voicecraftStrength: "自然度高、延迟低、与 GPT 集成",
      azureName: "Azure TTS",
      azureDesc: "微软 Azure 认知服务，企业级语音合成解决方案。",
      azureStrength: "企业级安全、多语言支持、稳定性高",
      playhtName: "Play.ht",
      playhtDesc: "开源友好的语音合成工具，支持自定义语音训练。",
      playhtStrength: "开源、可定制、价格实惠",
      musicTitle: "AI 音乐生成工具",
      sunoName: "Suno",
      sunoDesc: "能够根据文字描述生成完整歌曲，包括歌词、旋律、编曲。",
      sunoStrength: "完整歌曲生成、音乐质量高、操作简单",
      udioName: "Udio",
      udioDesc: "新兴 AI 音乐平台，强调音乐风格多样性和创作自由度。",
      udioStrength: "风格多样、生成速度快、社区活跃",
      a封面Title: "音频处理工具",
      a封面Desc: "包括降噪、音效增强、音频编辑等辅助工具。",
      pricingTitle: "价格方案比较",
      pricingDesc: "各平台的订阅方案：",
      freeName: "免费版",
      freePrice: "HK$0",
      freeFeatures: ["有限额度", "基础功能", "水印输出"],
      proName: "Pro 版",
      proPrice: "HK$130/月",
      proFeatures: ["无限制使用", "商业授权", "高质量输出", "无水印"],
      teamName: "Enterprise",
      teamPrice: "HK$650/月",
      teamFeatures: ["API 访问", "自定义模型", "专属支持", "批量处理"],
      usecase1Title: "有声书与播客",
      usecase1Desc: "快速将文字内容转换为语音，支持多种音色和情感风格。",
      usecase2Title: "游戏与动画",
      usecase2Desc: "为游戏角色、动画配音，支持多语言本地化。",
      usecase3Title: "音乐创作",
      usecase3Desc: "辅助音乐人创作，提供灵感和编曲建议。",
      usecase4Title: "企业通讯",
      usecase4Desc: "自动化客服语音、IVR 系统、培训视频配音。",
      verdictTitle: "选择建议",
      verdictSummary: "根据使用场景和预算选择最适合的工具",
      verdictPros: ["大幅降低音频制作成本", "制作速度从数天缩短至数分钟", "支持 100+ 语言和方言", "声音克隆技术日益成熟"],
      verdictCons: ["版权和伦理问题凸显", "部分工具需付费才能商用", "音乐风格同质化严重", "需要后期调整以达到专业标准"],
      verdictNote: "建议先从免费版测试音色和质量，确认满足需求后再升级付费方案。",
    },
    en: {
      title: "AI Audio & Voice Tools Review 2026 | Eleven Labs vs Suno vs Udio",
      description: "In-depth comparison of Eleven Labs, OpenAI Voice Engine, Suno, Udio and other AI audio tools.",
      heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80",
      overviewTitle: "Market Overview: The Year of AI Audio Breakthrough",
      overviewContent: `<p>2026 sees major breakthroughs in AI audio technology. <strong>Eleven Labs</strong> voice cloning reaches near-perfect realism, while <strong>Suno</strong> and <strong>Udio</strong> bring AI music creation to the masses.</p>
      <p>Market data:</p>
      <ul>
        <li>Global AI audio market size: <strong>$1.8 billion</strong></li>
        <li>Annual growth rate: <strong>180%</strong></li>
        <li>Voice synthesis accuracy: <strong>98.5%</strong></li>
        <li>AI music songs created: <strong>100 million+</strong></li>
      </ul>`,
      voiceTitle: "Voice Synthesis Tools Comparison",
      elevenName: "Eleven Labs",
      elevenDesc: "Industry-leading AI voice synthesis platform, supporting 120+ languages and voice cloning.",
      elevenStrength: "Highest audio quality, rich emotional expression, voice cloning support",
      voicecraftName: "OpenAI Voice Engine",
      voicecraftDesc: "Voice engine developed by OpenAI, focusing on natural dialogue and emotional expression.",
      voicecraftStrength: "High naturalness, low latency, GPT integration",
      azureName: "Azure TTS",
      azureDesc: "Microsoft Azure Cognitive Services, enterprise-grade voice synthesis solution.",
      azureStrength: "Enterprise security, multi-language support, high stability",
      playhtName: "Play.ht",
      playhtDesc: "Open-source friendly voice synthesis tool with custom voice training support.",
      playhtStrength: "Open-source, customizable, affordable pricing",
      musicTitle: "AI Music Generation Tools",
      sunoName: "Suno",
      sunoDesc: "Generate complete songs from text descriptions, including lyrics, melody, and arrangement.",
      sunoStrength: "Complete song generation, high music quality, easy operation",
      udioName: "Udio",
      udioDesc: "Emerging AI music platform emphasizing musical style diversity and creative freedom.",
      udioStrength: "Style diversity, fast generation, active community",
      a封面Title: "Audio Processing Tools",
      a封面Desc: "Including noise reduction, audio enhancement, audio editing and other utilities.",
      pricingTitle: "Pricing Plans Comparison",
      pricingDesc: "Subscription plans for each platform:",
      freeName: "Free",
      freePrice: "HK$0",
      freeFeatures: ["Limited credits", "Basic features", "Watermarked output"],
      proName: "Pro",
      proPrice: "HK$130/month",
      proFeatures: ["Unlimited usage", "Commercial license", "High quality output", "No watermark"],
      teamName: "Enterprise",
      teamPrice: "HK$650/month",
      teamFeatures: ["API access", "Custom models", "Dedicated support", "Batch processing"],
      usecase1Title: "Audiobooks & Podcasts",
      usecase1Desc: "Quickly convert text content to speech with multiple voice and emotion styles.",
      usecase2Title: "Gaming & Animation",
      usecase2Desc: "Voice for game characters, animations with multi-language localization.",
      usecase3Title: "Music Creation",
      usecase3Desc: "Assist musicians with creative inspiration and arrangement suggestions.",
      usecase4Title: "Enterprise Communications",
      usecase4Desc: "Automated customer service voice, IVR systems, training video narration.",
      verdictTitle: "Recommendations",
      verdictSummary: "Choose the best tool based on your use case and budget",
      verdictPros: ["Significantly reduced audio production costs", "Production time from days to minutes", "Support for 100+ languages and dialects", "Voice cloning technology maturing rapidly"],
      verdictCons: ["Copyright and ethics issues emerging", "Some tools require paid plans for commercial use", "Music style homogenization", "Post-processing often needed for professional standards"],
      verdictNote: "Recommended to test voice quality with free versions first, then upgrade after confirming it meets your needs.",
    },
  };

  const tc = tContent[lang];

  // SVG Charts
  const MarketGrowthChart = () => (
    <svg viewBox="0 0 400 180" className="w-full max-w-md mx-auto my-6">
      <rect x="30" y="140" width="50" height="30" fill="#3b82f6" rx="4" />
      <rect x="100" y="110" width="50" height="60" fill="#3b82f6" rx="4" />
      <rect x="170" y="70" width="50" height="100" fill="#8b5cf6" rx="4" />
      <rect x="240" y="30" width="50" height="140" fill="#10b981" rx="4" />
      <rect x="310" y="5" width="50" height="165" fill="#f59e0b" rx="4" />
      <text x="55" y="130" textAnchor="middle" className="text-xs fill-white">$0.2B</text>
      <text x="125" y="100" textAnchor="middle" className="text-xs fill-white">$0.5B</text>
      <text x="195" y="60" textAnchor="middle" className="text-xs fill-white">$1B</text>
      <text x="265" y="20" textAnchor="middle" className="text-xs fill-white">$1.8B</text>
      <text x="335" y="5" textAnchor="middle" className="text-xs fill-white">$4B</text>
      <text x="55" y="170" textAnchor="middle" className="text-xs fill-gray-500">2023</text>
      <text x="125" y="170" textAnchor="middle" className="text-xs fill-gray-500">2024</text>
      <text x="195" y="170" textAnchor="middle" className="text-xs fill-gray-500">2025</text>
      <text x="265" y="170" textAnchor="middle" className="text-xs fill-gray-500">2026</text>
      <text x="335" y="170" textAnchor="middle" className="text-xs fill-gray-500">2027</text>
    </svg>
  );

  const VoiceQualityChart = () => (
    <svg viewBox="0 0 400 150" className="w-full max-w-md mx-auto my-6">
      <rect x="30" y="60" width="80" height="70" fill="#10b981" rx="4" />
      <rect x="130" y="30" width="80" height="100" fill="#3b82f6" rx="4" />
      <rect x="230" y="10" width="80" height="120" fill="#8b5cf6" rx="4" />
      <rect x="330" y="50" width="50" height="80" fill="#f59e0b" rx="4" />
      <text x="70" y="50" textAnchor="middle" className="text-sm font-bold fill-white">92%</text>
      <text x="170" y="20" textAnchor="middle" className="text-sm font-bold fill-white">95%</text>
      <text x="270" y="5" textAnchor="middle" className="text-sm font-bold fill-white">98.5%</text>
      <text x="355" y="45" textAnchor="middle" className="text-sm font-bold fill-white">94%</text>
      <text x="70" y="140" textAnchor="middle" className="text-xs fill-gray-500">Play.ht</text>
      <text x="170" y="140" textAnchor="middle" className="text-xs fill-gray-500">Azure</text>
      <text x="270" y="140" textAnchor="middle" className="text-xs fill-gray-500">Eleven Labs</text>
      <text x="355" y="140" textAnchor="middle" className="text-xs fill-gray-500">VoiceEngine</text>
    </svg>
  );

  const MusicGrowthChart = () => (
    <svg viewBox="0 0 350 120" className="w-full max-w-sm mx-auto my-6">
      <polyline points="30,100 80,80 130,55 180,35 230,20 280,10 330,5" fill="none" stroke="#8b5cf6" strokeWidth="3" />
      <circle cx="30" cy="100" r="4" fill="#8b5cf6" />
      <circle cx="80" cy="80" r="4" fill="#8b5cf6" />
      <circle cx="130" cy="55" r="4" fill="#8b5cf6" />
      <circle cx="180" cy="35" r="4" fill="#8b5cf6" />
      <circle cx="230" cy="20" r="4" fill="#8b5cf6" />
      <circle cx="280" cy="10" r="4" fill="#8b5cf6" />
      <circle cx="330" cy="5" r="5" fill="#ef4444" />
      <text x="330" y="0" className="text-xs fill-gray-500">100M songs</text>
      <text x="30" y="115" className="text-xs fill-gray-500">2024</text>
      <text x="180" y="115" className="text-xs fill-gray-500">2025</text>
      <text x="330" y="115" className="text-xs fill-gray-500">2026</text>
    </svg>
  );

  const PricingChart = () => (
    <svg viewBox="0 0 400 150" className="w-full max-w-md mx-auto my-6">
      <rect x="30" y="90" width="100" height="50" fill="#10b981" rx="4" />
      <rect x="150" y="50" width="100" height="90" fill="#3b82f6" rx="4" />
      <rect x="270" y="20" width="100" height="120" fill="#8b5cf6" rx="4" />
      <text x="80" y="70" textAnchor="middle" className="text-lg font-bold fill-white">Free</text>
      <text x="200" y="30" textAnchor="middle" className="text-lg font-bold fill-white">HK$130</text>
      <text x="320" y="10" textAnchor="middle" className="text-lg font-bold fill-white">HK$650</text>
    </svg>
  );

  const LanguageSupportChart = () => (
    <svg viewBox="0 0 400 150" className="w-full max-w-md mx-auto my-6">
      <rect x="20" y="80" width="80" height="50" fill="#3b82f6" rx="4" />
      <rect x="120" y="40" width="80" height="90" fill="#8b5cf6" rx="4" />
      <rect x="220" y="20" width="80" height="110" fill="#10b981" rx="4" />
      <rect x="320" y="60" width="60" height="70" fill="#f59e0b" rx="4" />
      <text x="60" y="60" textAnchor="middle" className="text-lg font-bold fill-white">40+</text>
      <text x="160" y="30" textAnchor="middle" className="text-lg font-bold fill-white">60+</text>
      <text x="260" y="10" textAnchor="middle" className="text-lg font-bold fill-white">120+</text>
      <text x="350" y="50" textAnchor="middle" className="text-sm font-bold fill-white">100+</text>
      <text x="60" y="140" textAnchor="middle" className="text-xs fill-gray-500">VoiceCraft</text>
      <text x="160" y="140" textAnchor="middle" className="text-xs fill-gray-500">Azure</text>
      <text x="260" y="140" textAnchor="middle" className="text-xs fill-gray-500">Eleven Labs</text>
      <text x="350" y="140" textAnchor="middle" className="text-xs fill-gray-500">Play.ht</text>
    </svg>
  );

  const UseCaseChart = () => (
    <svg viewBox="0 0 400 150" className="w-full max-w-md mx-auto my-6">
      <rect x="20" y="30" width="80" height="100" fill="#3b82f6" rx="4" />
      <rect x="120" y="50" width="80" height="80" fill="#8b5cf6" rx="4" />
      <rect x="220" y="20" width="80" height="110" fill="#10b981" rx="4" />
      <rect x="320" y="60" width="60" height="70" fill="#f59e0b" rx="4" />
      <text x="60" y="85" textAnchor="middle" className="text-lg font-bold fill-white">35%</text>
      <text x="160" y="95" textAnchor="middle" className="text-lg font-bold fill-white">25%</text>
      <text x="260" y="80" textAnchor="middle" className="text-lg font-bold fill-white">25%</text>
      <text x="350" y="100" textAnchor="middle" className="text-sm font-bold fill-white">15%</text>
      <text x="60" y="120" textAnchor="middle" className="text-xs fill-gray-600">Audiobooks</text>
      <text x="160" y="120" textAnchor="middle" className="text-xs fill-gray-600">Gaming</text>
      <text x="260" y="120" textAnchor="middle" className="text-xs fill-gray-600">Music</text>
      <text x="350" y="120" textAnchor="middle" className="text-xs fill-gray-600">Enterprise</text>
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
            <div className="text-2xl font-bold text-blue-600">$1.8B</div>
            <div className="text-sm text-gray-500">Market Size</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-purple-600">180%</div>
            <div className="text-sm text-gray-500">YoY Growth</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-green-600">98.5%</div>
            <div className="text-sm text-gray-500">Accuracy</div>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="text-2xl font-bold text-orange-600">100M+</div>
            <div className="text-sm text-gray-500">AI Songs</div>
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
              <p className="text-sm text-gray-500 text-center">Chart: AI Audio Market Growth</p>
            </section>

            <section id="tools" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{tc.voiceTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">🎙️</div>
                    <h3 className="font-bold text-lg">{tc.elevenName}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tc.elevenDesc}</p>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <span className="text-xs text-purple-700 font-medium">Strengths: </span>
                    <span className="text-sm text-gray-700">{tc.elevenStrength}</span>
                  </div>
                </div>
                <div className="border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-xl">🔴</div>
                    <h3 className="font-bold text-lg">{tc.voicecraftName}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tc.voicecraftDesc}</p>
                  <div className="bg-red-50 rounded-lg p-3">
                    <span className="text-xs text-red-700 font-medium">Strengths: </span>
                    <span className="text-sm text-gray-700">{tc.voicecraftStrength}</span>
                  </div>
                </div>
                <div className="border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">🔵</div>
                    <h3 className="font-bold text-lg">{tc.azureName}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tc.azureDesc}</p>
                  <div className="bg-blue-50 rounded-lg p-3">
                    <span className="text-xs text-blue-700 font-medium">Strengths: </span>
                    <span className="text-sm text-gray-700">{tc.azureStrength}</span>
                  </div>
                </div>
                <div className="border rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl">🟠</div>
                    <h3 className="font-bold text-lg">{tc.playhtName}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{tc.playhtDesc}</p>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <span className="text-xs text-orange-700 font-medium">Strengths: </span>
                    <span className="text-sm text-gray-700">{tc.playhtStrength}</span>
                  </div>
                </div>
              </div>
              <VoiceQualityChart />
              <p className="text-sm text-gray-500 text-center">Chart: Voice Quality Scores</p>
              <LanguageSupportChart />
              <p className="text-sm text-gray-500 text-center">Chart: Language Support</p>
            </section>

            <section id="music" className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{tc.musicTitle}</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl p-6 text-white">
                  <h3 className="font-bold text-xl mb-2">{tc.sunoName}</h3>
                  <p className="text-sm opacity-90 mb-3">{tc.sunoDesc}</p>
                  <div className="bg-white/20 rounded-lg p-3">
                    <span className="text-xs">Strengths: </span>
                    <span className="text-sm">{tc.sunoStrength}</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-6 text-white">
                  <h3 className="font-bold text-xl mb-2">{tc.udioName}</h3>
                  <p className="text-sm opacity-90 mb-3">{tc.udioDesc}</p>
                  <div className="bg-white/20 rounded-lg p-3">
                    <span className="text-xs">Strengths: </span>
                    <span className="text-sm">{tc.udioStrength}</span>
                  </div>
                </div>
              </div>
              <MusicGrowthChart />
              <p className="text-sm text-gray-500 text-center">Chart: AI Music Songs Created Over Time</p>
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