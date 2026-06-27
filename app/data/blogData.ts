// Blog posts data - shared between components
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  icon: string;
  tags: string[];
  accent: string;
  category?: 'local' | 'world' | 'gba'; // 分类: local=地方游記, world=世界任我行, gba=大灣區
}

export const blogPosts: BlogPost[] = [
  {
    slug: "southern-italy-18-days",
    title: "🇮🇹 地中海驕陽與蔚藍：一家三口19天順序暢遊南意大利慢活全攻略",
    excerpt: "南意大利深度慢活19天：拿坡里、龐貝、維蘇威火山、阿瑪菲海岸、卡布里島藍洞、蘑菇屋、馬泰拉石窟、西西里島全景遊記攻略！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200&q=80",
    icon: "🇮🇹",
    tags: ["南意大利", "拿坡里", "阿瑪菲海岸", "西西里島", "家庭旅遊", "19天遊記"],
    accent: "from-blue-500 to-cyan-500",
    category: "local"
  },
  {
    slug: "big-ben",
    title: "🕰️ 聆聽英倫的時光心跳：倫敦大笨鐘深度打卡與泰晤士河散策攻略",
    excerpt: "哥德復興式巨型時鐘塔！大笨鐘的3大歷史密碼、4大終極打卡機位，以及走進國會大廈的完整攻略！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1200&q=80",
    icon: "🕰️",
    tags: ["倫敦", "英國", "打卡"],
    accent: "from-blue-500 to-cyan-500",
    category: "local"
  },
  {
    slug: "tower-bridge",
    title: "🌉 泰晤士河上的藍色童話：倫敦塔橋深度打卡與高空玻璃走廊攻略",
    excerpt: "結合維多利亞哥德式城堡與現代懸索橋工藝的工業傑作！解鎖被誤會的歷史秘密、挑戰離地42米高空玻璃走廊、兩大私藏拍照機位！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?w=1200&q=80",
    icon: "🌉",
    tags: ["倫敦", "英國", "打卡"],
    accent: "from-blue-600 to-cyan-600",
    category: "local"
  },
  {
    slug: "london-eye",
    title: "🎡 轉動在千禧年的浪漫：倫敦眼終極打卡與高空落日觀景攻略",
    excerpt: "高達135米的全球首座巨型觀景摩天輪！解鎖消失的13號太空艙之謎、兩大私藏拍照機位、黃昏日落最佳時段攻略！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=1200&q=80",
    icon: "🎡",
    tags: ["倫敦", "英國", "打卡"],
    accent: "from-pink-500 to-rose-500",
    category: "local"
  },
  {
    slug: "marienplatz-munich",
    title: "🦁 走進巴伐利亞的心臟：慕尼黑瑪利亞廣場深度打卡與百年木偶鐘全攻略",
    excerpt: "始建於1158年！解鎖新市政廳43個木偶壁鐘、聖母教堂雙洋蔥頭、306級老彼得教堂天際線，以及正宗HB皇家啤酒屋攻略！",
    date: "June 2026",
    image: "/images/marienplatz-munich-hero.jpg",
    icon: "🦁",
    tags: ["慕尼黑", "德國", "巴伐利亞"],
    accent: "from-red-600 to-amber-500",
    category: "local"
  },
  {
    slug: "english-garden-munich",
    title: "🌲 城市中心的自然狂歡：慕尼黑英國花園深度散策與冰川衝浪攻略",
    excerpt: "全歐洲最大城市公園！解鎖艾斯巴赫河人工冰川衝浪、圓頂希臘神廟360度全景、正宗中國塔7000人啤酒花園！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1518176258769-f227c798150e?w=1200&q=80",
    icon: "🌲",
    tags: ["慕尼黑", "德國", "自然"],
    accent: "from-emerald-600 to-teal-500",
    category: "local"
  },
  {
    slug: "edinburgh-castle",
    title: "🏰 矗立在火山岩上的蘇格蘭之魂：愛丁堡城堡深度打卡與避坑全攻略",
    excerpt: "名列聯合國教科文組織世界文化遺產！解鎖「命運之石」與最古老皇冠、下午一點鐘大砲儀式、兩大私藏拍照機位！",
    date: "June 2026",
    image: "https://cdn.britannica.com/24/94424-050-6302BA2E/Edinburgh-Castle-Scotland.jpg",
    icon: "🏰",
    tags: ["愛丁堡", "蘇格蘭", "打卡"],
    accent: "from-red-600 to-amber-500",
    category: "local"
  },
  {
    slug: "brandenburg-gate",
    title: "🏛️ 見證德意志的世紀風雲：柏林勃蘭登堡門深度打卡與和平祭壇攻略",
    excerpt: "落成於1791年！解鎖勝利女神四馬戰車被拿破崙擄走的屈辱歷史、柏林圍牆分裂傷痕、國會大廈玻璃穹頂順遊攻略！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80",
    icon: "🏛️",
    tags: ["柏林", "德國", "歷史"],
    accent: "from-amber-600 to-yellow-500",
    category: "local"
  },
  {
    slug: "sagrada-familia",
    title: "🦎 上帝的建築巨作：巴塞隆納聖家堂百年未完工的奇幻光影全攻略",
    excerpt: "高第傾注43年心血的傳奇神作！深度解讀兩大經典立面、大殿內仿生森林、黃昏日落夢幻拍攝時刻與搶票生存指南！",
    date: "June 2026",
    image: "/images/sagrada-familia-hero.jpg",
    icon: "🦎",
    tags: ["巴塞隆納", "西班牙", "高第"],
    accent: "from-amber-500 to-orange-500",
    category: "local"
  },
  {
    slug: "park-guell",
    title: "🏡 走進高第的彩色童話糖果屋：古埃爾公園深度打卡與浪漫散策攻略",
    excerpt: "世界遺產！彩色波浪馬賽克長椅、大蜥蜴噴泉、百柱廳與石柱長廊的童話王國，附避開人潮完美拍照攻略！",
    date: "June 2026",
    image: "/images/park-guell-hero.jpg",
    icon: "🏡",
    tags: ["巴塞隆納", "西班牙", "高第"],
    accent: "from-teal-500 to-cyan-500",
    category: "local"
  },
  {
    slug: "prague-castle",
    title: "🏰 查理四世的黃金夢：布拉格城堡世界最大古堡群深度攻略",
    excerpt: "全球規模最大的連體古堡建築群！聖維特大教堂、黃金巷、舊皇宮與慕夏彩繪玻璃窗的千年史詩。",
    date: "June 2026",
    image: "https://c8.alamy.com/comp/MXMW07/aerial-view-on-prague-castle-and-saint-vitus-cathedral-czech-republic-panoramic-view-from-airplane-in-sunny-day-MXMW07.jpg",
    icon: "🏰",
    tags: ["布拉格", "捷克", "波希米亞", "城堡"],
    accent: "from-purple-600 to-violet-600",
    category: "local"
  },
  {
    slug: "charles-bridge",
    title: "🌉 東歐最美的黃金絲帶：布拉格查理大橋650年星象密碼與反思散策",
    excerpt: "始建於1357年的中世紀砂岩石拱橋！516米橋身長廊、30尊巴洛克聖人雕像、1357黃金回文密碼與聖尼波木克的神秘傳說。",
    date: "June 2026",
    image: "https://as1.ftcdn.net/v2/jpg/02/98/53/04/1000_F_298530452_hsRg2k4VaHvy5m1DFIs6Ui4NYKtr5OEc.jpg",
    icon: "🌉",
    tags: ["布拉格", "捷克", "波希米亞", "查理大橋"],
    accent: "from-blue-600 to-indigo-600",
    category: "local"
  },
  {
    slug: "schonbrunn-palace",
    title: "🏰 帝國的黃金夏日：維也納美泉宮1441間房的皇家大數據與深度攻略",
    excerpt: "落成於1749年的巨型巴洛克宮殿！瑪麗亞·特蕾莎與茜茜公主的傳奇、1441房僅45間開放、百萬大廳與凱旋門的深度遊記。",
    date: "June 2026",
    image: "https://media.muvamo.com/wp-content/uploads/2024/12/schoenbrunn-park-58-scaled.jpg",
    icon: "🏰",
    tags: ["維也納", "奧地利", "哈布斯堡", "美泉宮"],
    accent: "from-amber-600 to-red-600",
    category: "local"
  },
  {
    slug: "st-stephens-cathedral",
    title: "⛪ 聆聽維也納的心跳：聖斯蒂芬大教堂深度遊覽與周邊散策攻略",
    excerpt: "維也納的心臟地標！800年歷史的哥德式巨作、四大時代建築疊加、登上136米南塔俯瞰全城、4大終極打卡機位！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&q=80",
    icon: "⛪",
    tags: ["維也納", "奧地利", "建築", "打卡"],
    accent: "from-amber-600 to-orange-500",
    category: "local"
  },
  {
    slug: "hohensalzburg-fortress",
    title: "🏰 俯瞰莫扎特故鄉的天際線：薩爾茨堡城堡深度遊覽全攻略",
    excerpt: "中歐最大、保存最完好的城堡！建於1077年、900年未被攻破的防禦奇蹟、金牛與皇家公寓、4大終極打卡機位！",
    date: "June 2026",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Salzburg_-_Festung_Hohensalzburg.JPG/1280px-Salzburg_-_Festung_Hohensalzburg.JPG",
    icon: "🏰",
    tags: ["薩爾茨堡", "奧地利", "城堡", "打卡"],
    accent: "from-stone-600 to-zinc-600",
    category: "local"
  },
  {
    slug: "lake-zurich",
    title: "🏞️ 阿爾卑斯山下的翡翠淚珠：瑞士蘇黎世湖深度遊覽與湖畔散策攻略",
    excerpt: "瑞士最迷人的高山湖泊！阿爾卑斯山倒影、蒸汽船遊湖、湖畔騎單車與游泳、4大終極打卡機位！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    icon: "🏞️",
    tags: ["蘇黎世", "瑞士", "湖泊", "打卡"],
    accent: "from-blue-600 to-cyan-500",
    category: "local"
  },
  {
    slug: "chapel-bridge-lucerne",
    title: "🌉 歐洲最古老的廊橋：瑞士琉森卡貝爾橋深度遊覽攻略",
    excerpt: "建於1333年！歐洲最古老木製廊橋、120幅三角形油畫、1993年浴火重生的傳奇、4大終極打卡機位！",
    date: "June 2026",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/CH.LU.Luzern_Kapellbr%C3%BCcke_01_16x9-R_16384x9216.jpg/1280px-CH.LU.Luzern_Kapellbr%C3%BCcke_01_16x9-R_16384x9216.jpg",
    icon: "🌉",
    tags: ["琉森", "瑞士", "廊橋", "打卡"],
    accent: "from-orange-600 to-amber-500",
    category: "local"
  },
  {
    slug: "lion-monument",
    title: "🦁 世界上最悲傷的石頭：瑞士琉森獅子紀念碑深度遊覽攻略",
    excerpt: "馬克·吐溫說，這是世界上最讓人心碎、最感人的一塊石頭。1792年瑞士雇傭兵血染巴黎的忠誠悲歌，托瓦爾森的不朽巨作。",
    date: "June 2026",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/01/Lion_Monument.jpg",
    icon: "🦁",
    tags: ["琉森", "瑞士", "獅子紀念碑", "歷史"],
    accent: "from-gray-600 to-slate-600",
    category: "local"
  },
  {
    slug: "santorini-oia",
    title: "🌅 愛琴海燃燒的終極終章：希臘聖托里尼伊亞落日熔金攻略",
    excerpt: "全球最美落日！探索希臘聖托里尼伊亞小鎮，藍頂教堂、白牆洞穴屋與熔金晚霞的浪漫極致慢活之旅。",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80",
    icon: "🌅",
    tags: ["聖托里尼", "伊亞", "希臘", "日落", "愛琴海"],
    accent: "from-blue-600 to-indigo-600",
    category: "local"
  },
  {
    slug: "parthenon-athens",
    title: "🏛️ 黃金比例的永恆凝視：雅典衛城帕特農神廟2500年建築幾何攻略",
    excerpt: "2500年人類美學巔峰！探索帕特農神廟的黃金分割建築奇蹟、光學視差修正結構與古希臘文明瑰寶。",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80",
    icon: "🏛️",
    tags: ["帕特農", "雅典", "希臘", "衛城", "古蹟"],
    accent: "from-sky-600 to-blue-600",
    category: "local"
  },
  {
    slug: "belem-tower",
    title: "🏰 大航海時代的蔚藍起點：里斯本貝倫塔500年星海密碼攻略",
    excerpt: "世界文化遺產！1519年落成的曼努埃爾式江海碉堡，達伽馬、麥哲倫出海遠征的終極起航點，見證大航海時代的輝煌。",
    date: "July 2026",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Torre_de_Bel%C3%A9m%2C_Lisbon_39.jpg/1280px-Torre_de_Bel%C3%A9m%2C_Lisbon_39.jpg",
    icon: "🏰",
    tags: ["里斯本", "葡萄牙", "貝倫塔", "大航海", "世界遺產"],
    accent: "from-blue-600 to-red-600",
    category: "local"
  },
  {
    slug: "livraria-lello",
    title: "📚 通往霍格華茲的魔幻階梯：波爾圖萊羅書店百年書香攻略",
    excerpt: "全球第三美書店！1906年新哥德式百年書海聖地，與哈利波特的千絲萬縷，猩紅色迴旋階梯與8米彩繪玻璃天窗。",
    date: "July 2026",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Livraria_Lello_Bookshop%2C_staircase%2C_skylight_and_bookcases%2C_Porto_%2838218323992%29.jpg/1280px-Livraria_Lello_Bookshop%2C_staircase%2C_skylight_and_bookcases%2C_Porto_%2838218323992%29.jpg",
    icon: "📚",
    tags: ["波爾圖", "葡萄牙", "萊羅書店", "哈利波特", "書店"],
    accent: "from-red-600 to-blue-600",
    category: "local"
  },
  {
    slug: "royal-palace-madrid",
    title: "🏛️ 走進西歐最大的奢華宮殿：馬德里皇宮深度打卡與無痛避坑攻略",
    excerpt: "西歐最大皇室宮殿！解鎖帝王主樓梯、王座廳、瓷器廳與黃昏日落拍照攻略，旅遊達人必收藏！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80",
    icon: "🏛️",
    tags: ["馬德里", "西班牙", "皇室"],
    accent: "from-amber-500 to-yellow-500",
    category: "local"
  },
  {
    slug: "sensoji",
    title: "東京最古老寺廟：淺草寺（Sensō-ji）深度一日遊全攻略",
    excerpt: "創建於公元628年，是東京都內最古老的寺廟。從雷門巨大紅燈籠、仲見世通商店街到本堂參拜，帶你玩轉這個東京最經典的地標！",
    date: "June 2026",
    image: "/images/sensoji-thumb.jpg",
    icon: "🏮",
    tags: ["東京", "寺廟", "文化"],
    accent: "from-red-500 to-orange-500",
    category: "world"
  },
  {
    slug: "kansai-trip",
    title: "🗾 關西和風漫步：京阪神六日慢活家庭遊",
    excerpt: "大阪、京都、神戶6天5夜家庭慢活之旅，帶家人走訪嵐山竹林、金閣寺、神戶港夜景與大阪城，品嚐神戶牛與地道美食。",
    date: "June 2026",
    image: "/images/kansai-kansai-hero.jpg",
    icon: "🗾",
    tags: ["關西", "大阪", "京都", "神戶", "家庭遊", "日本"],
    accent: "from-emerald-600 to-teal-500",
    category: "world"
  },
  {
    slug: "shibuya-crossing",
    title: "走進世界最繁忙的十字路口：東京澀谷十字路口全攻略！",
    excerpt: "如果要選一個最能代表現代東京、甚至全日本繁華景象的地標，澀谷十字路口（Shibuya Crossing）絕對當之無愧！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1759491125973-6c46d3f86c13?w=1200&q=80",
    icon: "🌍",
    tags: ["東京", "城市", "打卡"],
    accent: "from-purple-500 to-pink-500",
    category: "world"
  },
  {
    slug: "meiji-shrine",
    title: "東京市中心的森林秘境：明治神宮深度半日遊攻略",
    excerpt: "緊鄰原宿與竹下通，只要走過一條橋，就能瞬間從喧囂都市切換到原始森林。供奉明治天皇與昭憲皇太后的神道教聖地！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1682744210484-5f23d77b21c7?w=1200&q=80",
    icon: "🌲",
    tags: ["東京", "神社", "自然"],
    accent: "from-green-500 to-emerald-500",
    category: "world"
  },
  {
    slug: "dotonbori",
    title: "大阪不夜城：道頓堀運河（Dotonbori）全攻略！吃貨與霓虹夜景的天堂",
    excerpt: "17世紀開鑿的古老運河，現今已經蛻變成全日本最誇張、最迷幻的娛樂與美食重鎮。固力果跑跑人、立體巨型招牌、水上觀光船，帶你深度解鎖！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1565559204102-f59129a70ae2?w=1200&q=80",
    icon: "🌊",
    tags: ["大阪", "美食", "夜景"],
    accent: "from-cyan-500 to-blue-500",
    category: "world"
  },
  {
    slug: "arashiyama",
    title: "🎋 京都避世仙境：嵐山竹林小徑深度散策！尋找那一抹翠綠與心靈寧靜",
    excerpt: "穿越千年竹林、踏足渡月橋、乘搭嵐山小火車。一條通往異世界的神秘小徑，被譽為日本最想保留的聲音風景！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    icon: "🎋",
    tags: ["京都", "竹林", "自然"],
    accent: "from-green-600 to-emerald-500",
    category: "world"
  },
  {
    slug: "eiffel-tower",
    title: "🗼 遇見巴黎的浪漫定義：艾菲爾鐵塔深度打卡與登塔全攻略",
    excerpt: "全球最浪漫的時尚地標！從夏樂宮最佳拍攝位到戰神廣場野餐體驗，深度解鎖這座花都最耀眼的主角！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80",
    icon: "🗼",
    tags: ["巴黎", "歐洲", "浪漫"],
    accent: "from-amber-500 to-yellow-500",
    category: "local"
  },
  {
    slug: "myeongdong",
    title: "🛍️ 首爾潮流不夜城：明洞購物街（Myeongdong）終極狂歡攻略！",
    excerpt: "K-Beauty、潮人服飾、街頭美食、換錢攻略——全部一站式滿足你！帶你深度掃描首爾最具代表性的超級商圈！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1699316788084-d4c0943a4bcf?w=1200&q=80",
    icon: "🛍️",
    tags: ["首爾", "韓國", "購物"],
    accent: "from-rose-500 to-pink-500",
    category: "world"
  },
  {
    slug: "st-peters-basilica",
    title: "🏛️ 走進全球最大的教堂：梵蒂岡聖伯多祿大殿（St. Peter's Basilica）",
    excerpt: "文藝復興與巴洛克藝術的巔峰之作！米開朗基羅的圓頂、貝尼尼的 Baldacchino、必看的西斯汀小堂，讓你一次看遍人類文明最璀璨的藝術瑰寶！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1746071062145-f01c2dbdbc23?w=1200&q=80",
    icon: "🏛️",
    tags: ["羅馬", "歐洲", "宗教"],
    accent: "from-amber-600 to-yellow-500",
    category: "local"
  },
  {
    slug: "sistine-chapel",
    title: "🎨 米開朗基羅的世紀畫布：西斯汀小堂（Cappella Sistina）",
    excerpt: "抬頭仰望《創世紀》與《末日審判》—— 一場跨越五百年的藝術心靈之旅，感受文藝復興最輝煌的色彩與靈魂！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1722979830401-fd878aad76fe?w=1200&q=80",
    icon: "🎨",
    tags: ["羅馬", "歐洲", "藝術"],
    accent: "from-purple-600 to-pink-500",
    category: "local"
  },
  {
    slug: "trevi",
    title: "⛲ 許願池的秘密：羅馬特萊維噴泉（Trevi Fountain）",
    excerpt: "傳說硬幣許願、品味巴洛克美學！羅馬最標誌性的噴泉，帶你揭開千年水神的震撼與浪漫！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&q=80",
    icon: "⛲",
    tags: ["羅馬", "歐洲", "浪漫"],
    accent: "from-blue-500 to-cyan-500",
    category: "local"
  },
  {
    slug: "grand-palace",
    title: "👑 曼谷金碧輝煌：大皇宮（Grand Palace）深度遊",
    excerpt: "泰國皇室的莊嚴聖地！玉佛寺、節基皇殿、皇家儀式——走進這座金光閃閃的建築群，體驗泰國最重要的文化心臟！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&q=80",
    icon: "👑",
    tags: ["曼谷", "泰國", "文化"],
    accent: "from-yellow-500 to-amber-500",
    category: "world"
  },
  {
    slug: "colosseum",
    title: "🏟️ 羅馬鬥獸場：古羅馬最殘酷與最輝煌的競技場",
    excerpt: "角鬥士的生死之戰、獅子與野獸的怒吼！站在這座2000年前的橢圓巨型競技場，感受古羅馬帝國的震撼與哀愁！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1724398915427-edc535c546fe?w=1200&q=80",
    icon: "🏟️",
    tags: ["羅馬", "歐洲", "歷史"],
    accent: "from-red-600 to-orange-500",
    category: "local"
  },
  {
    slug: "florence-cathedral",
    title: "🧱 佛羅倫斯大教堂：布魯內萊斯基的永恆奇蹟",
    excerpt: "文藝復興的搖籃！走進佛羅倫斯聖母百花大教堂，探索那個震撼世界的無木架巨型圓頂，感受徐徐而上的463級階梯與米開朗基羅的感嘆！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1775343970007-d70d54e86526?w=1200&q=80",
    icon: "🧱",
    tags: ["佛羅倫斯", "歐洲", "建築"],
    accent: "from-emerald-600 to-teal-500",
    category: "local"
  },
  {
    slug: "ponte-vecchio",
    title: "🌅 繾綣阿諾河的黃昏浪漫：佛羅倫斯老橋深度散策",
    excerpt: "橫跨1345年！走過二戰奇蹟存活的欧洲最古老石桥，揭開美第奇家族的神秘走廊與百年珠寶街的奢華故事！",
    date: "May 2026",
    image: "/images/ponte-vecchio-hero.jpg",
    icon: "🌉",
    tags: ["佛羅倫斯", "歐洲", "浪漫"],
    accent: "from-amber-600 to-orange-500",
    category: "local"
  },
  {
    slug: "st-marks-square",
    title: "🏛️ 歐洲最美的客廳：威尼斯聖馬可廣場深度一日遊攻略",
    excerpt: "漫步聖馬可廣場，探索金色大教堂、總督宮與聖馬可鐘樓的千年風華。藍調時刻的威尼斯，浪漫指數爆表！",
    date: "May 2026",
    image: "/images/st-marks-square-hero.jpg",
    icon: "🎭",
    tags: ["威尼斯", "意大利", "浪漫"],
    accent: "from-blue-600 to-indigo-600",
    category: "local"
  },
  {
    slug: "rialto-bridge",
    title: "🌉 繾綣大運河的黃昏餘暉：威尼斯里奧托橋深度打卡攻略",
    excerpt: "橫跨1591年的白色大理石單拱石橋，打敗米開朗基羅的建築奇蹟。深度解鎖里奧托橋的建築傳奇與唯美日落打卡位！",
    date: "June 2026",
    image: "/images/rialto-bridge-hero.jpg",
    icon: "🌉",
    tags: ["威尼斯", "意大利", "浪漫"],
    accent: "from-amber-600 to-orange-500",
    category: "local"
  },
  // ===== 大灣區退休遊記專欄 =====
  {
    slug: "gba-shenzhen",
    title: "🛍️ 深圳2天慢活遊：東門老街懷舊 + 華強北科技尋寶 + 深圳灣日落",
    excerpt: "退休後的深圳輕旅行！從羅湖過關只需30分鐘，帶你走訪東門老街尋找老香港味道、探索華強北黑科技、最後在深圳灣公園欣賞絕美日落。",
    date: "June 2026",
    image: "/images/gba-shenzhen-dongmen.jpg",
    icon: "🏙️",
    tags: ["大灣區", "深圳", "退休遊", "2天1夜"],
    accent: "from-orange-500 to-red-500",
    category: "gba"
  },
  {
    slug: "gba-guangzhou",
    title: "🍜 廣州3天慢活遊：北京路尋古 · 上下九淘貨 · 珠江夜遊",
    excerpt: "食在廣州！退休後的慢活之旅——陶陶居飲茶、黃沙海鮮市場、北京路千年古道、上下九步行街掃貨、小蠻腰夜景、珠江夜遊，最全面嘅廣州攻略！",
    date: "June 2026",
    image: "/images/guangzhou-hero.jpg",
    icon: "🍜",
    tags: ["大灣區", "廣州", "退休遊", "3天2夜", "美食"],
    accent: "from-amber-500 to-orange-500",
    category: "gba"
  },
  {
    slug: "gba-macau-2days",
    title: "🎰 澳門2天奢華遊：五星酒店試住 + 葡撻尋味 + 氹仔舊城區漫步",
    excerpt: "過大海享受葡韻風情！免費發財巴來回、免費酒店飲品、葡撻與豬扒包的完美搭配，以及氹仔舊城區的彩色葡萄牙建築打卡攻略。",
    date: "June 2026",
    image: "/images/macau-skyline-twilight.jpg",
    icon: "🎰",
    tags: ["大灣區", "澳門", "退休遊", "2天1夜"],
    accent: "from-purple-500 to-indigo-500",
    category: "gba"
  },
  {
    slug: "gba-zhuhai-3days",
    title: "🌊 珠海3天2夜銀髮慢活遊：情侶路 + 日月貝 + 御溫泉",
    excerpt: "港珠澳大橋直達！情侶路聽海、珠海漁女打卡、日月貝歌劇院賞夕陽、御溫泉泡湯養生，三日兩夜慢活度假攻略。",
    date: "June 2026",
    image: "/images/zhuhai-lovers-road.jpg",
    icon: "🌊",
    tags: ["大灣區", "珠海", "退休遊", "3天2夜", "海邊"],
    accent: "from-teal-500 to-cyan-500",
    category: "gba"
  },
  {
    slug: "gba-chimelong-3days",
    title: "🐳 橫琴長隆3天2夜銀髮浪漫遊：鯨鯊館 + 企鵝共餐 + 海洋煙花",
    excerpt: "老夫老妻的奇幻海洋之旅！長隆橫琴灣酒店運河遊艇、鯨鯊館深海靜謐、企鵝酒店共餐、震撼煙花匯演，三日兩夜浪漫攻略。",
    date: "June 2026",
    image: "/images/chimelong-hotel.jpg",
    icon: "🐳",
    tags: ["大灣區", "珠海", "長隆", "退休遊", "3天2夜", "海洋"],
    accent: "from-blue-500 to-cyan-500",
    category: "gba"
  },
  {
    slug: "gba-hongkong-3days",
    title: "🎇 香港3天2夜親友同遊：物超所值、有情懷、有鑊氣的東方之珠暢遊攻略",
    excerpt: "帶親戚老友玩轉香港！北角海逸酒店、叮叮車、天星小輪、太平山、廟街夜市、黃大仙、旺角、西九文化區、大館，親友同遊三天兩夜完全攻略。",
    date: "June 2026",
    image: "/images/hongkong-harbour.jpg",
    icon: "🎇",
    tags: ["大灣區", "香港", "親友遊", "3天2夜", "維港", "美食"],
    accent: "from-amber-500 to-yellow-500",
    category: "gba"
  },
  {
    slug: "gba-dongguan-2days",
    title: "🏛️ 東莞2天1夜銀髮族深度慢活之旅：可園嶺南詩意 + 南社古村 + 光明路夜市",
    excerpt: "退下火線後親自前來，才驚覺這裏藏著極美嘅嶺南園林、百年古村與溫潤嘅水鄉煙火。可園荷風、南社榕蔭、光明路湯粉，兩天一夜細細品味莞邑慢活滋味。",
    date: "June 2026",
    image: "/images/dongguan-keyuan.jpg",
    icon: "🏛️",
    tags: ["大灣區", "東莞", "退休遊", "2天1夜", "慢活", "銀髮"],
    accent: "from-emerald-500 to-teal-500",
    category: "gba"
  },
  {
    slug: "gba-foshan-2days",
    title: "🥢 佛山2天1夜老友同遊功夫與順德美食慢活隨筆：祖廟醒獅 + 嶺南天地 + 逢簡水鄉",
    excerpt: "退休後最開心嘅事，莫過於約埋大半生相識嘅幾位知心老友。一班老友同行，步伐依舊悠閒，佛山兩天一夜，一路開懷大笑，一路尋味嶺南。",
    date: "June 2026",
    image: "/images/foshan-zumiao.jpg",
    icon: "🥢",
    tags: ["大灣區", "佛山", "退休遊", "2天1夜", "老友記", "功夫", "順德美食"],
    accent: "from-red-600 to-amber-500",
    category: "gba"
  },
  {
    slug: "gba-humen-2days",
    title: "🎒 虎門2天1夜一人獨闖慢活之旅：銷煙池 + 萬達廣場 + 光明路夜市",
    excerpt: "退休後反而迷上了獨行。帶上一個背包，一張高鐵票，來到伶仃洋畔的虎門。兩天一夜，看銷煙歷史，逛繁華商圈，品味一個人嘅絕對自由。",
    date: "June 2026",
    image: "/images/gba-humen-fort.jpg",
    icon: "🎒",
    tags: ["大灣區", "東莞", "虎門", "一人遊", "2天1夜", "慢活", "歷史"],
    accent: "from-teal-500 to-cyan-500",
    category: "gba"
  },
  {
    slug: "anne-frank-house",
    title: "🏠 走進那段不能被遺忘的歷史：阿姆斯特丹安妮之家深度遊記",
    excerpt: "走進那段不能被遺忘的歷史：阿姆斯特丹安妮之家深度遊記。探索安妮·弗蘭克的秘密側樓，感受《安妮日記》背後的真實故事。",
    date: "June 2026",
    image: "https://www.annefrank.org/media/filer_public_thumbnails/filer_public/dd/61/dd614ecb-14e6-4c74-b345-ff0bb16685d4/001_012_010_voorkant_carel_blazer.jpg__1536x1536_q85_subject_location-1601%2C2511_subsampling-2.jpg",
    icon: "🏠",
    tags: ["阿姆斯特丹", "荷蘭", "歷史", "二戰", "安妮弗蘭克"],
    accent: "from-amber-600 to-orange-500",
    category: "local"
  },
  {
    slug: "keukenhof",
    title: "🌷 狂歡大自然的調色盤：荷蘭庫肯霍夫花園700萬株鬱金香極致賞花全攻略",
    excerpt: "全球最大規模春季花卉公園！32公頃鋪天蓋地的七彩花毯、四大王室室內展館、歷史復古大風車，帶你深度解鎖這片驚艷全球的春日彩虹夢境！",
    date: "April 2026",
    image: "https://i0.wp.com/tulipfestivalamsterdam.com/wp-content/uploads/2020/02/bigstock-Aerial-Drone-Shot-View-Of-Tuli-333213211-scaled.jpg?ssl=1",
    icon: "🌷",
    tags: ["荷蘭", "庫肯霍夫", "鬱金香", "賞花", "歐洲"],
    accent: "from-pink-500 to-rose-500",
    category: "local"
  },
];