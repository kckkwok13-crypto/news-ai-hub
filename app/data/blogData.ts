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
}

export const blogPosts: BlogPost[] = [
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
    image: "/images/marienplatz-munich-hero.jpg",
    icon: "🦁",
    tags: ["慕尼黑", "德國", "巴伐利亞"],
    accent: "from-red-600 to-amber-500"
  },
  {
    slug: "english-garden-munich",
    title: "🌲 城市中心的自然狂歡：慕尼黑英國花園深度散策與冰川衝浪攻略",
    excerpt: "全歐洲最大城市公園！解鎖艾斯巴赫河人工冰川衝浪、圓頂希臘神廟360度全景、正宗中國塔7000人啤酒花園！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1518176258769-f227c798150e?w=1200&q=80",
    icon: "🌲",
    tags: ["慕尼黑", "德國", "自然"],
    accent: "from-emerald-600 to-teal-500"
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
    slug: "brandenburg-gate",
    title: "🏛️ 見證德意志的世紀風雲：柏林勃蘭登堡門深度打卡與和平祭壇攻略",
    excerpt: "落成於1791年！解鎖勝利女神四馬戰車被拿破崙擄走的屈辱歷史、柏林圍牆分裂傷痕、國會大廈玻璃穹頂順遊攻略！",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80",
    icon: "🏛️",
    tags: ["柏林", "德國", "歷史"],
    accent: "from-amber-600 to-yellow-500"
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
    excerpt: "K-Beauty、潮人服飾、街頭美食、換錢攻略——全部一站式滿足你！帶你深度掃描首爾最具代表性的超級商圈！",
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
  // ===== 大灣區退休遊記專欄 =====
  {
    slug: "gba-shenzhen",
    title: "🛍️ 深圳2天慢活遊：東門老街懷舊 + 華強北科技尋寶 + 深圳灣日落",
    excerpt: "退休後的深圳輕旅行！從羅湖過關只需30分鐘，帶你走訪東門老街尋找老香港味道、探索華強北黑科技、最後在深圳灣公園欣賞絕美日落。",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=1200&q=80",
    icon: "🏙️",
    tags: ["大灣區", "深圳", "退休遊", "2天1夜"],
    accent: "from-orange-500 to-red-500"
  },
  {
    slug: "gba-guangzhou",
    title: "🍜 廣州3天慢活遊：北京路尋古 · 上下九淘貨 · 珠江夜遊",
    excerpt: "食在廣州！退休後的慢活之旅——陶陶居飲茶、黃沙海鮮市場、北京路千年古道、上下九步行街掃貨、小蠻腰夜景、珠江夜遊，最全面嘅廣州攻略！",
    date: "June 2026",
    image: "/images/guangzhou-hero.jpg",
    icon: "🍜",
    tags: ["大灣區", "廣州", "退休遊", "3天2夜", "美食"],
    accent: "from-amber-500 to-orange-500"
  },
  {
    slug: "gba-macau-2days",
    title: "🎰 澳門2天奢華遊：五星酒店試住 + 葡撻尋味 + 氹仔舊城區漫步",
    excerpt: "過大海享受葡韻風情！免費發財巴來回、免費酒店飲品、葡撻與豬扒包的完美搭配，以及氹仔舊城區的彩色葡萄牙建築打卡攻略。",
    date: "June 2026",
    image: "/images/macau-skyline-twilight.jpg",
    icon: "🎰",
    tags: ["大灣區", "澳門", "退休遊", "2天1夜"],
    accent: "from-purple-500 to-indigo-500"
  },
  {
    slug: "gba-zhuhai-3days",
    title: "🌊 珠海3天2夜銀髮慢活遊：情侶路 + 日月貝 + 御溫泉",
    excerpt: "港珠澳大橋直達！情侶路聽海、珠海漁女打卡、日月貝歌劇院賞夕陽、御溫泉泡湯養生，三日兩夜慢活度假攻略。",
    date: "June 2026",
    image: "/images/zhuhai-lovers-road.jpg",
    icon: "🌊",
    tags: ["大灣區", "珠海", "退休遊", "3天2夜", "海邊"],
    accent: "from-teal-500 to-cyan-500"
  },
  {
    slug: "gba-zhuhai-4days",
    title: "🏖️ 珠海長隆4天深度遊：海洋王國 + 橫琴蚝情 + 海泉灣溫泉",
    excerpt: "珠海慢活4天行程推薦！長隆海洋王國的隱藏玩法、橫琴生蠔海鮮大餐、以及私密海泉灣溫泉渡假攻略，適合帶老人家一齊出發。",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    icon: "🏖️",
    tags: ["大灣區", "珠海", "退休遊", "4天3夜", "海邊"],
    accent: "from-cyan-500 to-blue-500"
  },
  {
    slug: "gba-hongkong-3days",
    title: "🏔️ 香港後花園3天遊：西貢地質公園 + 南丫島海鮮 + 赤柱殖民地風情",
    excerpt: "香港都有世外桃源！西貢地質公園探索六角形岩柱、南丫島品嚐原生態海鮮、赤柱感受殖民地風情。最適合退休人士的香港深度遊。",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1200&q=80",
    icon: "🏔️",
    tags: ["大灣區", "香港", "退休遊", "3天2夜", "郊遊"],
    accent: "from-green-500 to-teal-500"
  },
  {
    slug: "gba-dongguan-2days",
    title: "🏭 東莞2天工業風探索：可園嶺南園林 + 下壩坊文創區 + 道滘粵菜尋味",
    excerpt: "東莞不只有工廠！可園是岭南四大名園之一，下壩坊是文藝青年聚集地，道滘粵菜更是老饕摯愛。最適合喜歡深度文化的退休人士。",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=80",
    icon: "🏛️",
    tags: ["大灣區", "東莞", "退休遊", "2天1夜", "文化"],
    accent: "from-amber-500 to-yellow-500"
  },
  {
    slug: "gba-foshan-2days",
    title: "🦁 佛山2天武術尋蹤：黃飛鴻故居 + 祖廟粤劇 + 西樵山祈福",
    excerpt: "嶺南武術之鄉！走訪黃飛鴻故居、佛山祖廟看舞獅表演、品嚐盲公餅和雙皮奶，最後在西樵山祈福賞杜鵑，行程充實又有文化底蘊。",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=1200&q=80",
    icon: "🦁",
    tags: ["大灣區", "佛山", "退休遊", "2天1夜", "武術"],
    accent: "from-red-600 to-orange-500"
  },
  {
    slug: "gba-humen-2days",
    title: "🌉 虎門2天歷史之旅：威遠砲台 + 海戰博物館 + 蓮花山夜景",
    excerpt: "鴉片戰爭的歷史記憶！虎門威遠砲台見證民族滄桑、廣州海戰博物館了解近代史、晚上登上蓮花山俯瞰珠江兩岸璀璨夜景。",
    date: "June 2026",
    image: "https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=1200&q=80",
    icon: "🌉",
    tags: ["大灣區", "東莞", "退休遊", "2天1夜", "歷史"],
    accent: "from-slate-600 to-gray-600"
  },
];