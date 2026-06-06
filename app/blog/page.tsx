"use client";
// NewsFlow Travel Blog - Updated June 2026
import Link from "next/link";
import { useState, useMemo } from "react";

const blogPosts = [
  {
    slug: "big-ben",
    title: "🕰️ 聆聽英倫的時光心跳：倫敦大笨鐘深度打卡與泰晤士河散策攻略",
    excerpt: "哥德復興式巨型時鐘塔！大笨鐘的3大歷史密碼、4大終極打卡機位，以及走進國會大廈的完整攻略！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1200&q=80",
    icon: "🕰️",
    tags: ["倫敦", "英國", "打卡"],
    accent: "from-blue-500 to-cyan-500"
  },
  {
    slug: "tower-bridge",
    title: "🌉 泰晤士河上的藍色童話：倫敦塔橋深度打卡與高空玻璃走廊攻略",
    excerpt: "結合維多利亞哥德式城堡與現代懸索橋工藝的工業傑作！解鎖被誤會的歷史秘密、挑戰離地42米高空玻璃走廊、兩大私藏拍照機位！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=1200&q=80",
    icon: "🌉",
    tags: ["倫敦", "英國", "打卡"],
    accent: "from-blue-600 to-cyan-600"
  },
  {
    slug: "london-eye",
    title: "🎡 轉動在千禧年的浪漫：倫敦眼終極打卡與高空落日觀景攻略",
    excerpt: "高達135米的全球首座巨型觀景摩天輪！解鎖消失的13號太空艙之謎、兩大私藏拍照機位、黃昏日落最佳時段攻略！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=1200&q=80",
    icon: "🎡",
    tags: ["倫敦", "英國", "打卡"],
    accent: "from-pink-500 to-rose-500"
  },
  {
    slug: "marienplatz-munich",
    title: "🦁 走進巴伐利亞的心臟：慕尼黑瑪利亞廣場深度打卡與百年木偶鐘全攻略",
    excerpt: "始建於1158年！解鎖新市政廳43個木偶壁鐘、聖母教堂雙洋蔥頭、306級老彼得教堂天際線，以及正宗HB皇家啤酒屋攻略！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1590618552334-4c8e2c21b4f9?w=1200&q=80",
    icon: "🦁",
    tags: ["慕尼黑", "德國", "巴伐利亞"],
    accent: "from-red-600 to-amber-500"
  },
  {
    slug: "edinburgh-castle",
    title: "🏰 矗立在火山岩上的蘇格蘭之魂：愛丁堡城堡深度打卡與避坑全攻略",
    excerpt: "名列聯合國教科文組織世界文化遺產！解鎖「命運之石」與最古老皇冠、下午一點鐘大砲儀式、兩大私藏拍照機位！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1200&q=80",
    icon: "🏰",
    tags: ["愛丁堡", "蘇格蘭", "打卡"],
    accent: "from-red-600 to-amber-500"
  },
  {
    slug: "sagrada-familia",
    title: "🦎 上帝的建築巨作：巴塞隆納聖家堂百年未完工的奇幻光影全攻略",
    excerpt: "高第傾注43年心血的傳奇神作！深度解讀兩大經典立面、大殿內仿生森林、黃昏日落夢幻拍攝時刻與搶票生存指南！",
    date: "June 2026",
    image: "/images/sagrada-familia-hero.jpg",
    icon: "🦎",
    tags: ["巴塞隆納", "西班牙", "高第"],
    accent: "from-amber-500 to-orange-500"
  },
  {
    slug: "park-guell",
    title: "🏡 走進高第的彩色童話糖果屋：古埃爾公園深度打卡與浪漫散策攻略",
    excerpt: "世界遺產！彩色波浪馬賽克長椅、大蜥蜴噴泉、百柱廳與石柱長廊的童話王國，附避開人潮完美拍照攻略！",
    date: "June 2026",
    image: "/images/park-guell-hero.jpg",
    icon: "🏡",
    tags: ["巴塞隆納", "西班牙", "高第"],
    accent: "from-teal-500 to-cyan-500"
  },
  {
    slug: "royal-palace-madrid",
    title: "🏛️ 走進西歐最大的奢華宮殿：馬德里皇宮深度打卡與無痛避坑攻略",
    excerpt: "西歐最大皇室宮殿！解鎖帝王主樓梯、王座廳、瓷器廳與黃昏日落拍照攻略，旅遊達人必收藏！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80",
    icon: "🏛️",
    tags: ["馬德里", "西班牙", "皇室"],
    accent: "from-amber-500 to-yellow-500"
  },
  {
    slug: "sensoji",
    title: "東京最古老寺廟：淺草寺（Sensō-ji）深度一日遊全攻略",
    excerpt: "創建於公元628年，是東京都內最古老的寺廟。從雷門巨大紅燈籠、仲見世通商店街到本堂參拜，帶你玩轉這個東京最經典的地標！",
    date: "June 2026",
    image: "/images/sensoji-thumb.jpg",
    icon: "🏮",
    tags: ["東京", "寺廟", "文化"],
    accent: "from-red-500 to-orange-500"
  },
  {
    slug: "shibuya-crossing",
    title: "走進世界最繁忙的十字路口：東京澀谷十字路口全攻略！",
    excerpt: "如果要選一個最能代表現代東京、甚至全日本繁華景象的地標，澀谷十字路口（Shibuya Crossing）絕對當之無愧！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1759491125973-6c46d3f86c13?w=1200&q=80",
    icon: "🌍",
    tags: ["東京", "城市", "打卡"],
    accent: "from-purple-500 to-pink-500"
  },
  {
    slug: "meiji-shrine",
    title: "東京市中心的森林秘境：明治神宮深度半日遊攻略",
    excerpt: "緊鄰原宿與竹下通，只要走過一條橋，就能瞬間從喧囂都市切換到原始森林。供奉明治天皇與昭憲皇太后的神道教聖地！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1682744210484-5f23d77b21c7?w=1200&q=80",
    icon: "🌲",
    tags: ["東京", "神社", "自然"],
    accent: "from-green-500 to-emerald-500"
  },
  {
    slug: "dotonbori",
    title: "大阪不夜城：道頓堀運河（Dotonbori）全攻略！吃貨與霓虹夜景的天堂",
    excerpt: "17世紀開鑿的古老運河，現今已經蛻變成全日本最誇張、最迷幻的娛樂與美食重鎮。固力果跑跑人、立體巨型招牌、水上觀光船，帶你深度解鎖！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1565559204102-f59129a70ae2?w=1200&q=80",
    icon: "🌊",
    tags: ["大阪", "美食", "夜景"],
    accent: "from-cyan-500 to-blue-500"
  },
  {
    slug: "arashiyama",
    title: "🎋 京都避世仙境：嵐山竹林小徑深度散策！尋找那一抹翠綠與心靈寧靜",
    excerpt: "穿越千年竹林、踏足渡月橋、乘搭嵐山小火車。一條通往異世界的神秘小徑，被譽為日本最想保留的聲音風景！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    icon: "🎋",
    tags: ["京都", "竹林", "自然"],
    accent: "from-green-600 to-emerald-500"
  },
  {
    slug: "eiffel-tower",
    title: "🗼 遇見巴黎的浪漫定義：艾菲爾鐵塔深度打卡與登塔全攻略",
    excerpt: "全球最浪漫的時尚地標！從夏樂宮最佳拍攝位到戰神廣場野餐體驗，深度解鎖這座花都最耀眼的主角！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
    icon: "🗼",
    tags: ["巴黎", "歐洲", "浪漫"],
    accent: "from-amber-500 to-yellow-500"
  },
  {
    slug: "myeongdong",
    title: "🛍️ 首爾潮流不夜城：明洞購物街（Myeongdong）終極狂歡攻略！",
    excerpt: "K-Beauty、潮人服飾、街头美食、換錢攻略——全部一站式滿足你！帶你深度掃描首爾最具代表性的超級商圈！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1699316788084-d4c0943a4bcf?w=1200&q=80",
    icon: "🛍️",
    tags: ["首爾", "韓國", "購物"],
    accent: "from-rose-500 to-pink-500"
  },
  {
    slug: "st-peters-basilica",
    title: "🏛️ 走進全球最大的教堂：梵蒂岡聖伯多祿大殿（St. Peter's Basilica）",
    excerpt: "文藝復興與巴洛克藝術的巔峰之作！米開朗基羅的圓頂、貝尼尼的 Baldacchino、必看的西斯汀小堂，讓你一次看遍人類文明最璀璨的藝術瑰寶！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1746071062145-f01c2dbdbc23?w=1200&q=80",
    icon: "🏛️",
    tags: ["羅馬", "歐洲", "宗教"],
    accent: "from-amber-600 to-yellow-500"
  },
  {
    slug: "sistine-chapel",
    title: "🎨 米開朗基羅的世紀畫布：西斯汀小堂（Cappella Sistina）",
    excerpt: "抬頭仰望《創世紀》與《末日審判》—— 一場跨越五百年的藝術心靈之旅，感受文藝復興最輝煌的色彩與靈魂！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1722979830401-fd878aad76fe?w=1200&q=80",
    icon: "🎨",
    tags: ["羅馬", "歐洲", "藝術"],
    accent: "from-purple-600 to-pink-500"
  },
  {
    slug: "trevi",
    title: "⛲ 許願池的秘密：羅馬特萊維噴泉（Trevi Fountain）",
    excerpt: "傳說硬幣許願、品味巴洛克美學！羅馬最標誌性的噴泉，帶你揭開千年水神的震撼與浪漫！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&q=80",
    icon: "⛲",
    tags: ["羅馬", "歐洲", "浪漫"],
    accent: "from-blue-500 to-cyan-500"
  },
  {
    slug: "grand-palace",
    title: "👑 曼谷金碧輝煌：大皇宮（Grand Palace）深度遊",
    excerpt: "泰國皇室的莊嚴聖地！玉佛寺、節基皇殿、皇家儀式——走進這座金光閃閃的建築群，體驗泰國最重要的文化心臟！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80",
    icon: "👑",
    tags: ["曼谷", "泰國", "文化"],
    accent: "from-yellow-500 to-amber-500"
  },
  {
    slug: "colosseum",
    title: "🏟️ 羅馬鬥獸場：古羅馬最殘酷與最輝煌的競技場",
    excerpt: "角鬥士的生死之戰、獅子與野獸的怒吼！站在這座2000年前的橢圓巨型競技場，感受古羅馬帝國的震撼與哀愁！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1724398915427-edc535c546fe?w=1200&q=80",
    icon: "🏟️",
    tags: ["羅馬", "歐洲", "歷史"],
    accent: "from-red-600 to-orange-500"
  },
  {
    slug: "florence-cathedral",
    title: "🧱 佛羅倫斯大教堂：布魯內萊斯基的永恆奇蹟",
    excerpt: "文藝復興的搖籃！走進佛羅倫斯聖母百花大教堂，探索那個震撼世界的無木架巨型圓頂，感受徐徐而上的463級階梯與米開朗基羅的感嘆！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1775343970007-d70d54e86526?w=1200&q=80",
    icon: "🧱",
    tags: ["佛羅倫斯", "歐洲", "建築"],
    accent: "from-emerald-600 to-teal-500"
  },
  {
    slug: "ponte-vecchio",
    title: "🌅 繾綣阿諾河的黃昏浪漫：佛羅倫斯老橋深度散策",
    excerpt: "橫跨1345年！走過二戰奇蹟存活的欧洲最古老石桥，揭開美第奇家族的神秘走廊與百年珠寶街的奢華故事！",
    date: "May 2026",
    image: "/images/ponte-vecchio-hero.jpg",
    icon: "🌉",
    tags: ["佛羅倫斯", "歐洲", "浪漫"],
    accent: "from-amber-600 to-orange-500"
  },
  {
    slug: "st-marks-square",
    title: "🏛️ 歐洲最美的客廳：威尼斯聖馬可廣場深度一日遊攻略",
    excerpt: "漫步聖馬可廣場，探索金色大教堂、總督宮與聖馬可鐘樓的千年風華。藍調時刻的威尼斯，浪漫指數爆表！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=80",
    icon: "🎭",
    tags: ["威尼斯", "意大利", "浪漫"],
    accent: "from-blue-600 to-indigo-600"
  },
  {
    slug: "rialto-bridge",
    title: "🌉 繾綣大運河的黃昏餘暉：威尼斯里奧托橋深度打卡攻略",
    excerpt: "橫跨1591年的白色大理石單拱石橋，打敗米開朗基羅的建築奇蹟。深度解鎖里奧托橋的建築傳奇與唯美日落打卡位！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1200&q=80",
    icon: "🌉",
    tags: ["威尼斯", "意大利", "浪漫"],
    accent: "from-amber-600 to-orange-500"
  },
];

// Extract unique tags for filters (sorted alphabetically)
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

// Country/Region mapping for stats
const regionStats = blogPosts.reduce((acc, post) => {
  const region = post.tags[0];
  acc[region] = (acc[region] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"date" | "title">("date");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let posts = blogPosts.filter(post => {
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some(tag => post.tags.includes(tag));
      return matchesSearch && matchesTags;
    });

    posts.sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });

    return posts;
  }, [searchQuery, selectedTags, sortBy]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSortBy("date");
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 via-emerald-700 to-teal-700 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✈️</span>
            <h1 className="text-3xl font-bold">NewsFlow Travel Blog Dashboard</h1>
          </div>
          <p className="text-emerald-200">用雙腳探索世界，用相機記錄每一個難忘瞬間 🌍</p>
          <div className="mt-4">
            <Link href="/" className="text-emerald-200 hover:text-white underline text-sm">
              ← 返回 Newsflow 首頁
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-4 text-white">
            <div className="text-3xl font-bold">{blogPosts.length}</div>
            <div className="text-sm text-emerald-100">總文章數</div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-4 text-white">
            <div className="text-3xl font-bold">{Object.keys(regionStats).length}</div>
            <div className="text-sm text-blue-100">目的地數量</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4 text-white">
            <div className="text-3xl font-bold">{allTags.length}</div>
            <div className="text-sm text-purple-100">標籤種類</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl p-4 text-white">
            <div className="text-3xl font-bold">{filteredPosts.length}</div>
            <div className="text-sm text-orange-100">當前顯示</div>
          </div>
        </div>

        {/* Region Stats */}
        <div className="bg-slate-800 rounded-xl p-4 mb-6">
          <h3 className="text-white text-sm font-semibold mb-3">📊 目的地分布</h3>
          <div className="flex flex-wrap gap-2">
            {Object.entries(regionStats).map(([region, count]) => (
              <div key={region} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                <span>{region}</span>
                <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-slate-800 rounded-xl p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="🔍 搜尋文章標題、內容或標籤..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-700 text-white placeholder-slate-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* Sort */}
            <div className="flex gap-2">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "date" | "title")}
                className="bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="date">最近更新</option>
                <option value="title">標題 A-Z</option>
              </select>
              <button
                onClick={clearFilters}
                className="bg-slate-600 hover:bg-slate-500 text-white px-4 py-3 rounded-lg transition-colors"
              >
                清除
              </button>
            </div>
          </div>

          {/* Tags Filter */}
          <div>
            <h4 className="text-slate-400 text-sm mb-2">🏷️ 標籤篩選</h4>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                    selectedTags.includes(tag)
                      ? 'bg-green-600 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`block group transition-all duration-500 ${
                index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              onMouseEnter={() => setHoveredSlug(post.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
            >
              <div className={`
                relative h-full bg-slate-800 rounded-2xl overflow-hidden 
                border border-slate-700 hover:border-green-500/50
                transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/10
                ${hoveredSlug === post.slug ? 'shadow-xl shadow-green-500/10' : ''}
              `}>
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${post.accent} opacity-80 group-hover:opacity-100 transition-opacity`} />
                
                {/* Image container */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className={`
                      w-full object-cover transition-all duration-700
                      ${index === 0 ? 'h-52 md:h-64' : 'h-40'}
                      group-hover:scale-110
                    `}
                    onError={(e) => {
                      e.currentTarget.src = `https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className={`absolute top-3 left-3 bg-gradient-to-r ${post.accent} rounded-full p-2 text-xl shadow-lg`}>
                    {post.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Tags */}
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-slate-700 text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h2 className={`font-bold mb-2 text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:${post.accent} transition-all`}>
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs">{post.date}</span>
                    <span className={`text-sm font-semibold bg-gradient-to-r ${post.accent} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity`}>
                      閱讀全文 →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-white text-xl font-semibold mb-2">找不到符合條件的文章</h3>
            <p className="text-slate-400 mb-4">嘗試調整搜尋條件或清除篩選</p>
            <button
              onClick={clearFilters}
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg transition-colors"
            >
              清除所有篩選
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-16 py-8 border-t border-slate-700">
          <p className="text-slate-500 text-sm">
            🌍 純粹旅人 · 用心感受每一個城市的溫度
          </p>
        </footer>
      </div>
    </div>
  );
}