import { NextRequest, NextResponse } from 'next/server'

const RSS_SOURCES: Record<string, Array<{ url: string; source: string }>> = {
  finance: [
    { url: 'https://feeds.bloomberg.com/markets/news.rss', source: 'Bloomberg' },
    { url: 'https://feeds.marketwatch.com/marketwatch/topstories/', source: 'MarketWatch' },
    { url: 'https://www.investing.com/rss/news.rss', source: 'Investing.com' },
  ],
  crypto: [
    { url: 'https://cointelegraph.com/rss', source: 'CoinTelegraph' },
    { url: 'https://coindesk.com/arc/outboundfeeds/rss/', source: 'CoinDesk' },
    { url: 'https://cryptonews.com/feed/', source: 'Cryptonews' },
  ],
  business: [
    { url: 'https://feeds.bbci.co.uk/news/business/rss.xml', source: 'BBC Business' },
    { url: 'https://search.cnbc.com/rs/search/combinedcms/view.xml?partnerId=wrss01&id=100003114', source: 'CNBC' },
  ],
  technology: [
    { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge' },
    { url: 'https://feeds.arstechnica.com/arstechnica/index', source: 'Ars Technica' },
    { url: 'https://techcrunch.com/feed/', source: 'TechCrunch' },
  ],
  health: [
    { url: 'https://feeds.bbci.co.uk/news/health/rss.xml', source: 'BBC Health' },
    { url: 'https://www.sciencedaily.com/rss/health_medicine.xml', source: 'ScienceDaily Health' },
  ],
  gaming: [
    { url: 'https://www.gamesindustry.biz/feed', source: 'GamesIndustry.biz' },
    { url: 'https://kotaku.com/rss', source: 'Kotaku' },
    { url: 'https://www.polygon.com/rss/index.xml', source: 'Polygon' },
  ],
  food: [
    { url: 'https://www.seriouseats.com/rss', source: 'Serious Eats' },
    { url: 'https://www.bonappetit.com/feed/rss', source: 'Bon Appétit' },
  ],
  ai_art: [
    { url: 'https://venturebeat.com/ai/feed/', source: 'VentureBeat AI' },
    { url: 'https://www.artnews.com/feed/', source: 'ARTnews' },
    { url: 'https://hyperallergic.com/rss/', source: 'Hyperallergic' },
  ],
  art: [
    { url: 'https://www.artforum.com/rss', source: 'Artforum' },
    { url: 'https://www.artnews.com/feed/', source: 'ARTnews' },
    { url: 'https://hyperallergic.com/rss/', source: 'Hyperallergic' },
    { url: 'https://www.theartnewspaper.com/rss', source: 'The Art Newspaper' },
  ],
  astronomy: [
    { url: 'https://www.space.com/feeds/hot/', source: 'Space.com' },
    { url: 'https://www.nasa.gov/rss/dyn/breaking_news.rss', source: 'NASA' },
  ],
  mystery: [
    { url: 'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml', source: 'BBC Science' },
    { url: 'https://www.sciencedaily.com/rss/top.xml', source: 'ScienceDaily' },
    { url: 'https://www.livescience.com/feeds/hot/', source: 'Live Science' },
  ],
}

const DATA_JOURNALISM_SUBCATS: Record<string, Array<{ url: string; source: string }>> = {
  gdp: [
    { url: 'https://feeds.reuters.com/reuters/businessNews', source: 'Reuters' },
    { url: 'https://feeds.bbci.co.uk/news/business/rss.xml', source: 'BBC Business' },
  ],
  digital: [
    { url: 'https://techcrunch.com/feed/', source: 'TechCrunch' },
    { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge' },
  ],
  demographics: [
    { url: 'https://www.sciencedaily.com/rss/top.xml', source: 'ScienceDaily' },
    { url: 'https://feeds.bbci.co.uk/news/science_and_environment/rss.xml', source: 'BBC Science' },
  ],
  ai: [
    { url: 'https://venturebeat.com/ai/feed/', source: 'VentureBeat AI' },
  ],
  official: [
    { url: 'https://feeds.reuters.com/reuters/businessNews', source: 'Reuters' },
  ],
}

// ============ TRAVEL DATA ============
const TRAVEL_COUNTRIES: Record<string, any> = {
  japan: {
    id: 'japan', name: 'Japan', name_zh: '日本', emoji: '🗾',
    description_zh: '傳統與現代完美融合嘅國度',
    best_season: '春季 (3-5月) 同秋季 (9-11月)',
    avg_temp: '16°C',
    cities: [
      {
        id: 'tokyo', name: 'Tokyo', name_zh: '東京', emoji: '🗼',
        description_zh: '傳統與現代完美融合嘅國際大都會',
        areas: [
          {
            name: 'Shibuya & Harajuku', name_zh: '澀谷 & 原宿',
            places: [
              { name: 'Shibuya Crossing', name_zh: '澀谷十字路口', blog_slug: 'shibuya-crossing', description_zh: '世界上最繁忙嘅行人十字路口，每當綠燈亮起就有三千多人同時穿越馬路', type: 'attraction', image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800', address: 'Shibuya, Tokyo', hours: '24小時', rating: '4.7', review_count: '52,389', best_time: '黃昏時分', duration: '30分鐘至1小時', cost_level: 'free', transit: 'JR山手線 澀谷站 B3出口', tips: ['建議喺澀谷站陽台睇全景', '附近商場可以Shopping', '用慢快門影人流動感', 'SHIBUYA SKY睇夜景一流', '星巴克二樓係秘密景點'], tags: ['地標', '夜景', '必去', '打卡'], blog_content: '## 📍 位置與交通\n- **最近車站**：JR東京Metro「澀谷站」B3出口徒步1分鐘\n- **地址**：Tokyo, Shibuya, Dogenzaka, 1-16-3\n\n## 🌆 十字路口的震撼\n\n東京澀谷十字路口被譽為「世界最繁忙的十字路口」，每當紅綠燈轉綠，**三千多人**同時穿越馬路，場面壯觀如同城市的心跳。\n\n### 📸 拍攝攻略\n| 拍攝點 | 特色 | 推薦時間 |\n|--------|------|----------|\n| **SHIBUYA SKY** (14/F) | 俯瞰全景，夜景一流 | 19:00-21:00 |\n| **星巴克二樓** | 室內角度，光污染建築背景 | 全日 |\n| **路邊** | 人物互動，近距離感受人潮 | 傍晚 |\n\n\n> 💡 **專業提示**：想影人流？試吓用慢快門（約1/15秒）捕捉人影流動，得出cyberpunk感覺！\n\n## 🗺️ 周邊打卡點\n\n| 地點 | 特色 | 步行時間 |\n|------|------|----------|\n| **八公像** | 忠犬八公青銅雕塑，約會地點 | 2分鐘 |\n| **忠犬八公外壁** | 巨大LED廣告牌，賽博朋克風 | 1分鐘 |\n| **宮下公園** | 空中花園，年輕人聚集地 | 5分鐘 |\n\n## 🍽️ 附近美食\n\n- **西班牙菜餐廳** — 夜景襯托\n- **宮下公園美食街** — 平價又多選擇\n- **松本清** — 藥妝店，買到手軟\n\n## ⏰ 最佳到訪時間\n\n| 時段 | 體驗 | 適合對象 |\n|------|------|----------|\n| 🌅 平日早上 7:00-9:00 | 感受當地人潮 | 深度遊 |\n| 🌇 下午 3:00-5:00 | 光線柔和，適合拍照 | 打卡一族 |\n| 🌃 晚上 8:00-10:00 | 霓虹夜景，氣氛爆燈 | 情侶 / 夜景控 |\n\n## ⚠️ 注意事項\n\n1. **唔好行行停下** — 阻礙人流，會被側目望過嚟\n2. **高峰期**（17:00-20:00）人流係平日嘅3倍\n3. **帶備周遊券** — 如果去埋大阪周邊\n4. **留意天氣** — 下雨天人流會少啲，但氣氛依然熱鬧\n\n> 🏙️ *「在這個城市的脈搏中，你不只是觀眾，而是東京生命力的一部分。」*' },
              { name: 'Meiji Shrine', name_zh: '明治神宮', blog_slug: 'meiji-shrine', description_zh: '供奉明治天皇嘅神社，周圍係一片寧靜嘅森林', type: 'attraction', image: 'https://japanjourneys.jp/wp-content/uploads/2019/08/meiji-jingu-torii-gate-1-1024x681.jpg', address: '1-1 Yoyogikamizonocho, Shibuya', hours: '日出至日落', rating: '4.8', review_count: '41,205', best_time: '清晨', duration: '1-2小時', cost_level: 'free', transit: 'JR山手線 原宿站', tips: ['淨心之旅，建議早起', '入口處有洗手禮', '清正之井係能量景點'], tags: ['神社', '寧靜', '文化', '森林'] },
            ]
          },
          {
            name: 'Asakusa & Ueno', name_zh: '淺草 & 上野',
            places: [
              { name: 'Senso-ji Temple', name_zh: '淺草寺', blog_slug: 'sensoji', description_zh: '東京最古老嘅佛教寺廟，标志係雷門大燈籠', type: 'attraction', image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', address: '2-3-1 Asakusa, Taito', hours: '6:00-17:00', rating: '4.8', review_count: '67,842', best_time: '早上', duration: '1-2小時', cost_level: 'free', transit: 'Metro 淺草站', tips: ['雷門影相要排隊', '抽籤好準!', '人形燒好食'], tags: ['寺廟', '歷史', '必去'] },
            ]
          }
        ]
      },
      {
        id: 'osaka', name: 'Osaka', name_zh: '大阪', emoji: '🏯',
        description_zh: '美食之都，章魚燒同大阪燒嘅發源地',
        areas: [
          {
            name: 'Namba & Dotonbori', name_zh: '難波 & 道頓堀',
            places: [
              { name: 'Dotonbori Canal', name_zh: '道頓堀運河', blog_slug: 'dotonbori', description_zh: '大阪最繁華嘅夜景區域，著名嘅蟹道樂就喺呢度', type: 'attraction', image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800', address: 'Dotonbori, Chuo, Osaka', hours: '24小時', rating: '4.6', review_count: '45,123', best_time: '夜晚', duration: '1-2小時', cost_level: 'free', transit: 'Metro 難波站', tips: ['夜晚去影相最靚', '可以坐船遊河'], tags: ['夜景', '美食', '打卡'] },
            ]
          }
        ]
      },
      {
        id: 'kyoto', name: 'Kyoto', name_zh: '京都', emoji: '⛩️',
        description_zh: '千年古都，保留住日本傳統文化嘅精髓',
        areas: [
          {
            name: 'Arashiyama', name_zh: '嵐山',
            places: [
              { name: 'Arashiyama Bamboo Grove', name_zh: '嵐山竹林', blog_slug: 'arashiyama', description_zh: '壯觀嘅竹林小徑，仿佛置身另一個世界', type: 'attraction', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800', address: 'Arashiyama, Kyoto', hours: '24小時', rating: '4.7', review_count: '38,901', best_time: '清晨', duration: '1-2小時', cost_level: 'free', transit: 'JR山手線 嵐山站', tips: ['建議清晨去避開人潮', '附近有天龍寺'], tags: ['自然', '打卡', '寧靜'] },
            ]
          }
        ]
      }
    ]
  },
  france: {
    id: 'france', name: 'France', name_zh: '法國', emoji: '🗼',
    description_zh: '浪漫之都，藝術與時尚嘅殿堂',
    best_season: '春季 (4-6月) 同秋季 (9-11月)',
    avg_temp: '12°C',
    cities: [
      {
        id: 'paris', name: 'Paris', name_zh: '巴黎', emoji: '🗼',
        description_zh: '浪漫之都，藝術與時尚嘅殿堂',
        areas: [
          {
            name: 'Eiffel Tower Area', name_zh: '艾菲爾鐵塔區',
            places: [
              { name: 'Eiffel Tower', name_zh: '艾菲爾鐵塔', blog_slug: 'eiffel-tower', description_zh: '巴黎鐵塔，浪漫嘅象徵', type: 'attraction', image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800', address: 'Champ de Mars, Paris', hours: '9:30-23:45', rating: '4.7', review_count: '89,234', best_time: '日落', duration: '2-3小時', cost_level: 'high', transit: '地鐵Bir-Hakeim站', tips: ['建議黃昏去睇日落', '可以坐電梯或行樓梯'], tags: ['地標', '浪漫', '必去'] },
            ]
          }
        ]
      }
    ]
  },
  korea: {
    id: 'korea', name: 'South Korea', name_zh: '南韓', emoji: '🏯',
    description_zh: 'K-pop與傳統文化完美融合',
    best_season: '春季 (3-5月) 同秋季 (9-11月)',
    avg_temp: '12°C',
    cities: [
      {
        id: 'seoul', name: 'Seoul', name_zh: '首爾', emoji: '🏯',
        description_zh: '傳統與現代完美融合嘅韓流之都',
        areas: [
          {
            name: 'Myeongdong', name_zh: '明洞',
            places: [
              { name: 'Myeongdong Shopping Street', name_zh: '明洞購物街', blog_slug: 'myeongdong', description_zh: '首爾最繁華購物區，化妝品天堂', type: 'shopping', image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800', address: 'Myeongdong', hours: '10:00-22:00', rating: '4.4', review_count: '56,789', best_time: '下午至夜晚', duration: '3-4小時', cost_level: 'medium', transit: 'Metro 明洞站', tips: ['化妝品最平', '地下商場好大', '街頭美食多'], tags: ['購物', '化妝品', '美食'] },
            ]
          }
        ]
      }
    ]
  },
  thailand: {
    id: 'thailand', name: 'Thailand', name_zh: '泰國', emoji: '🏝️',
    description_zh: '微笑之都，佛寺海灘與美食天堂',
    best_season: '11月-4月（涼季）',
    avg_temp: '28°C',
    cities: [
      {
        id: 'bangkok', name: 'Bangkok', name_zh: '曼谷', emoji: '🛕',
        description_zh: '佛教之都，融合古老寺廟與現代都市',
        areas: [
          {
            name: 'Old City & Rattanakosin', name_zh: '舊城區',
            places: [
              { name: 'Grand Palace', name_zh: '大皇宮', blog_slug: 'grand-palace', description_zh: '泰國皇家宮殿，金碧輝煌嘅建築群', type: 'attraction', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800', address: 'Na Phra Lan Rd, Grand Palace', hours: '8:30-16:30', rating: '4.6', review_count: '62,341', best_time: '上午', duration: '2-3小時', cost_level: 'medium', transit: 'MRT Sanam Chai站', tips: ['衣著要莊重', '門票包含玉佛寺', '防騙要小心'], tags: ['寺廟', '歷史', '打卡'] },
            ]
          }
        ]
      }
    ]
  },
  // ============ 歐洲國家 ============
  italy: {
    id: 'italy', name: 'Italy', name_zh: '意大利', emoji: '🗼',
    description_zh: '藝術殿堂，古羅馬與文藝復興嘅發源地',
    best_season: '春季 (4-6月) 同秋季 (9-10月)',
    avg_temp: '15°C',
    cities: [
      {
        id: 'rome', name: 'Rome', name_zh: '羅馬', emoji: '🏛️',
        description_zh: '永恆之城，古羅馬帝國嘅心臟',
        areas: [
          {
            name: 'Ancient Rome', name_zh: '古羅馬遺址',
            places: [
              { name: 'Colosseum', name_zh: '羅馬鬥獸場', blog_slug: 'colosseum', description_zh: '古羅馬建築代表作，曾舉辦角鬥比賽', type: 'attraction', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800', address: 'Piazza del Colosseo, Rome', hours: '8:30-19:00', rating: '4.8', review_count: '98,234', best_time: '清晨或黃昏', duration: '2-3小時', cost_level: 'medium', transit: 'Metro B線 Colosseo站', tips: ['建議網上預訂門票', '買 Roma Pass 更抵', '地下層好震撼'], tags: ['古蹟', '歷史', '必去'] },
              { name: 'Trevi Fountain', name_zh: '特萊維噴泉', blog_slug: 'trevi', description_zh: '羅馬最大嘅巴洛克風格噴泉，許願池', type: 'attraction', image: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?w=800', address: 'Piazza di Trevi, Rome', hours: '24小時', rating: '4.7', review_count: '76,543', best_time: '夜晚', duration: '30分鐘', cost_level: 'free', transit: 'Metro A線 Barberini站', tips: ['擲硬幣許願', '清晨人少啲', '小心小偷'], tags: ['打卡', '浪漫', '地標'] },
              { name: 'Sistine Chapel', name_zh: '西斯汀小堂', blog_slug: 'sistine-chapel', description_zh: '米開朗基羅壁畫《創世紀》《最後的審判》所在地，人類藝術史上最璀璨的皇冠', type: 'attraction', image: 'https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=800', address: 'Vatican Museums, Vatican City', hours: '9:00-18:00', rating: '4.9', review_count: '89,234', best_time: '早上', duration: '1-2小時', cost_level: 'high', transit: 'Metro A線 Ottaviano站', tips: ['必須預訂', '服裝要莊重', '嚴禁拍照', '保持肅靜'], tags: ['藝術', '壁畫', '歷史', '必去'] },
            ]
          },
          {
            name: 'Vatican City', name_zh: '梵蒂岡',
            places: [
              { name: 'Sistine Chapel', name_zh: '西斯汀小堂', blog_slug: 'sistine-chapel', description_zh: '米開朗基羅天花板壁畫《創世紀》嘅所在地', type: 'attraction', image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=800', address: 'Vatican City', hours: '9:00-18:00', rating: '4.9', review_count: '89,456', best_time: '上午', duration: '1-2小時', cost_level: 'high', transit: 'Metro A線 Ottaviano站', tips: ['服裝要莊重', '禁止拍照', '預留半天參觀博物館'], tags: ['藝術', '宗教', '必去'] },
              { name: 'St. Peter\'s Basilica', name_zh: '聖伯多祿大殿', blog_slug: 'st-peters-basilica', description_zh: '世界上最大嘅教堂，文藝復興建築傑作', type: 'attraction', image: 'https://images.unsplash.com/photo-1548585744-3e3c7f4f0f79?w=800', address: 'Piazza San Pietro, Vatican', hours: '7:00-19:00', rating: '4.8', review_count: '84,321', best_time: '上午', duration: '1-2小時', cost_level: 'free', transit: 'Metro A線 Ottaviano站', tips: ['圓頂好靚', '免費參觀', '廣場好大'], tags: ['教堂', '建築', '歷史'] },
            ]
          }
        ]
      },
      {
        id: 'florence', name: 'Florence', name_zh: '佛羅倫斯', emoji: '🎨',
        description_zh: '文藝復興之都，徐志摩筆下嘅翡冷翠',
        areas: [
          {
            name: 'Historic Centre', name_zh: '歷史城區',
            places: [
              { name: 'Florence Cathedral', name_zh: '佛羅倫斯大教堂', blog_slug: 'florence-cathedral', description_zh: '以紅磚圓頂聞名嘅宏偉教堂', type: 'attraction', image: 'https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?w=800', address: 'Piazza del Duomo, Florence', hours: '10:00-17:00', rating: '4.8', review_count: '67,890', best_time: '上午', duration: '1-2小時', cost_level: 'medium', transit: '火車直達 Florenza SMN站', tips: ['可以爬圓頂', '廣場好靚', '好多假門票'], tags: ['教堂', '建築', '藝術'] },
              { name: 'Ponte Vecchio', name_zh: '老橋', description_zh: '充滿首飾店嘅中世紀石橋，達芬奇都讚過', type: 'attraction', image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800', address: 'Ponte Vecchio, Florence', hours: '24小時', rating: '4.6', review_count: '45,678', best_time: '日落', duration: '30分鐘', cost_level: 'free', transit: '步行', tips: ['夜晚兩邊餐廳好浪漫', '影日落一流'], tags: ['打卡', '夜景', '浪漫'] },
            ]
          }
        ]
      },
      {
        id: 'venice', name: 'Venice', name_zh: '威尼斯', emoji: '🚣',
        description_zh: '水都，世界上最浪漫嘅城市之一',
        areas: [
          {
            name: 'San Marco', name_zh: '聖馬可區',
            places: [
              { name: "St. Mark's Square", name_zh: '聖馬可廣場', description_zh: '威尼斯政治與宗教中心，被稱為「歐洲最美廣場」', type: 'attraction', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800', address: 'Piazza San Marco, Venice', hours: '24小時', rating: '4.7', review_count: '56,789', best_time: '清晨或黃昏', duration: '1-2小時', cost_level: 'free', transit: '水上巴士 San Marco站', tips: ['小心鴿子', '咖啡廳好貴', '清晨影相最靚'], tags: ['廣場', '地標', '打卡'] },
              { name: 'Rialto Bridge', name_zh: '里奧托橋', description_zh: '威尼斯最古老嘅橋，電影《皇后密令》場景', type: 'attraction', image: 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800', address: 'Ponte di Rialto, Venice', hours: '24小時', rating: '4.6', review_count: '43,210', best_time: '日落', duration: '30分鐘', cost_level: 'free', transit: '水上巴士 Rialto站', tips: ['兩邊影相好靚', '附近有好野食'], tags: ['橋', '打卡', '日落'] },
            ]
          }
        ]
      }
    ]
  },
  uk: {
    id: 'uk', name: 'United Kingdom', name_zh: '英國', emoji: '🇬🇧',
    description_zh: '皇室傳統與現代文化嘅完美融合',
    best_season: '春季 (4-6月) 同夏季 (7-8月)',
    avg_temp: '10°C',
    cities: [
      {
        id: 'london', name: 'London', name_zh: '倫敦', emoji: '🎡',
        description_zh: '國際大都會，皇室、藝術與多元文化嘅交匯點',
        areas: [
          {
            name: 'Westminster', name_zh: '西敏區',
            places: [
              { name: 'Big Ben', name_zh: '大笨鐘', description_zh: '倫敦標誌性鐘樓，英國國會大廈嘅一部分', type: 'attraction', image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800', address: 'Westminster, London', hours: '24小時（外觀）', rating: '4.8', review_count: '89,234', best_time: '日落', duration: '30分鐘', cost_level: 'free', transit: '地鐵 Westminster站', tips: ['可以入內參觀', '鐘聲好靚', '黃昏影相最靚'], tags: ['地標', '建築', '必去'] },
              { name: 'Tower Bridge', name_zh: '倫敦塔橋', description_zh: '維多利亞時期嘅哥德式橋樑，可以行玻璃走廊', type: 'attraction', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800', address: 'Tower Bridge, London', hours: '10:00-18:00', rating: '4.7', review_count: '67,890', best_time: '日落', duration: '1-2小時', cost_level: 'medium', transit: '地鐵 Tower Hill站', tips: ['行玻璃地板好刺激', '可以睇塔橋升起', '附近有倫敦塔'], tags: ['橋', '打卡', '玻璃走廊'] },
            ]
          },
          {
            name: 'South Bank', name_zh: '南岸區',
            places: [
              { name: 'London Eye', name_zh: '倫敦眼', description_zh: '世界上最高嘅摩天輪之一，俯瞰倫敦全景', type: 'attraction', image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800', address: 'Riverside Building, London', hours: '10:00-18:30', rating: '4.5', review_count: '78,456', best_time: '日落', duration: '30分鐘', cost_level: 'high', transit: '地鐵 Waterloo站', tips: ['預訂飛時間', '天氣好先去', '黃昏時分最靚'], tags: ['摩天輪', '全景', '打卡'] },
            ]
          }
        ]
      },
      {
        id: 'edinburgh', name: 'Edinburgh', name_zh: '愛丁堡', emoji: '🏴',
        description_zh: '蘇格蘭首府，充滿歷史與神秘色彩嘅古城',
        areas: [
          {
            name: 'Old Town', name_zh: '舊城區',
            places: [
              { name: 'Edinburgh Castle', name_zh: '愛丁堡城堡', description_zh: '屹立喺火山岩上嘅古老城堡，俯瞰成個城市', type: 'attraction', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800', address: 'Castlehill, Edinburgh', hours: '9:30-18:00', rating: '4.8', review_count: '54,321', best_time: '上午', duration: '2-3小時', cost_level: 'medium', transit: '火車 Edinburgh Waverley站', tips: ['語音導覽好有用', '軍樂隊表演好震撼', '建議預留半天'], tags: ['城堡', '歷史', '必去'] },
            ]
          }
        ]
      }
    ]
  },
  spain: {
    id: 'spain', name: 'Spain', name_zh: '西班牙', emoji: '🇪🇸',
    description_zh: '熱情之国，佛朗明哥與海鲜饭嘅故鄉',
    best_season: '春季 (4-6月) 同秋季 (9-11月)',
    avg_temp: '18°C',
    cities: [
      {
        id: 'barcelona', name: 'Barcelona', name_zh: '巴塞羅那', emoji: '🏖️',
        description_zh: '高迪之城，藝術與建築嘅天堂',
        areas: [
          {
            name: 'Eixample', name_zh: '擴展區',
            places: [
              { name: 'La Sagrada Familia', name_zh: '聖家堂', description_zh: '高迪未完成嘅遺作，世界上最宏偉嘅教堂之一', type: 'attraction', image: 'https://images.unsplash.com/photo-1583779457264-4c1ec95d662c?w=800', address: 'Carrer de Mallorca, Barcelona', hours: '9:00-20:00', rating: '4.9', review_count: '95,678', best_time: '上午或日落', duration: '2-3小時', cost_level: 'high', transit: 'Metro Sagrada Familia站', tips: ['必須預訂', '行頂層睇全景', '入面光線好靚'], tags: ['教堂', '建築', '必去'] },
              { name: 'Park Güell', name_zh: '古埃爾公園', description_zh: '高迪設計嘅彩色童話公園，睇巴塞全景', type: 'attraction', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800', address: 'Carrer d\'Olot, Barcelona', hours: '9:30-19:30', rating: '4.7', review_count: '67,234', best_time: '日落', duration: '2-3小時', cost_level: 'medium', transit: 'Metro Lesseps站', tips: ['要預訂時段', '建議黃昏去', '好多人'], tags: ['公園', '高迪', '打卡'] },
            ]
          },
          {
            name: 'Gothic Quarter', name_zh: '哥特區',
            places: [
              { name: 'Barcelona Cathedral', name_zh: '巴塞羅那大教堂', description_zh: '宏偉嘅哥特式教堂，有免費參觀區域', type: 'attraction', image: 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?w=800', address: 'La老人家 Cathedral, Barcelona', hours: '8:00-19:30', rating: '4.6', review_count: '34,567', best_time: '上午', duration: '1小時', cost_level: 'free', transit: 'Metro Jaume I站', tips: ['免費區域好靚', '電梯可以上屋頂', '廣場有café'], tags: ['教堂', '歷史', '打卡'] },
            ]
          }
        ]
      },
      {
        id: 'madrid', name: 'Madrid', name_zh: '馬德里', emoji: '👑',
        description_zh: '西班牙首都，太陽門廣場同皇宮所在地',
        areas: [
          {
            name: 'Royal Palace Area', name_zh: '皇宮區',
            places: [
              { name: 'Royal Palace of Madrid', name_zh: '馬德里皇宮', description_zh: '西班牙皇室官方宮殿歐洲最大皇宮之一', type: 'attraction', image: 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e?w=800', address: 'Calle de Bailén, Madrid', hours: '10:00-20:00', rating: '4.7', review_count: '45,678', best_time: '上午', duration: '2-3小時', cost_level: 'medium', transit: 'Metro Ópera站', tips: ['語音導覽必備', '軍械庫好靚', '花園免費'], tags: ['皇宮', '歷史', '建築'] },
            ]
          }
        ]
      }
    ]
  },
  germany: {
    id: 'germany', name: 'Germany', name_zh: '德國', emoji: '🇩🇪',
    description_zh: '工程之國，城堡、古城與啤酒花園嘅國度',
    best_season: '春季 (4-6月) 同秋季 (9-10月)',
    avg_temp: '10°C',
    cities: [
      {
        id: 'munich', name: 'Munich', name_zh: '慕尼黑', emoji: '🍺',
        description_zh: '啤酒之都，每年十月啤酒節嘅舉辦地',
        areas: [
          {
            name: 'Old Town', name_zh: '舊城區',
            places: [
              { name: 'Marienplatz', name_zh: '瑪利亞廣場', description_zh: '慕尼黑市中心，新舊市政廳同埋鐘樓所在地', type: 'attraction', image: 'https://images.unsplash.com/photo-1590561622217-9c6c5a7e32aa?w=800', address: 'Marienplatz, Munich', hours: '24小時', rating: '4.7', review_count: '56,789', best_time: '上午', duration: '1小時', cost_level: 'free', transit: 'S-Bahn Marienplatz站', tips: ['睇鐘樓表演', '附近好多商店', '聖誕市集好靚'], tags: ['廣場', '打卡', '地標'] },
              { name: 'English Garden', name_zh: '英國花園', description_zh: '世界上最大城市公園之一，有慕尼黑海灘', type: 'attraction', image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800', address: 'Englischer Garten, Munich', hours: '24小時', rating: '4.8', review_count: '43,210', best_time: '下午', duration: '2-3小時', cost_level: 'free', transit: '地鐵Universität站', tips: ['帶定啤酒', '日本茶屋好特別', '冲浪好出名'], tags: ['公園', '自然', '休閒'] },
            ]
          }
        ]
      },
      {
        id: 'berlin', name: 'Berlin', name_zh: '柏林', emoji: '🎭',
        description_zh: '創意之都，歷史與前衛藝術嘅碰撞',
        areas: [
          {
            name: 'Mitte', name_zh: '米特區',
            places: [
              { name: 'Brandenburg Gate', name_zh: '勃蘭登堡門', description_zh: '德國統一嘅象徵，柏林最重要嘅地標', type: 'attraction', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800', address: 'Pariser Platz, Berlin', hours: '24小時', rating: '4.7', review_count: '67,890', best_time: '日落', duration: '30分鐘', cost_level: 'free', transit: 'S-Bahn Brandenburger Tor站', tips: ['夜晚影相最靚', '附近有 Holocaust Memorial', '好近美國大使館'], tags: ['地標', '歷史', '必去'] },
            ]
          }
        ]
      }
    ]
  },
  netherlands: {
    id: 'netherlands', name: 'Netherlands', name_zh: '荷蘭', emoji: '🌷',
    description_zh: '運河之國，風車、木屐同埋鬱金香嘅故鄉',
    best_season: '春季 (4-5月) - 鬱金香季節',
    avg_temp: '10°C',
    cities: [
      {
        id: 'amsterdam', name: 'Amsterdam', name_zh: '阿姆斯特丹', emoji: '🚲',
        description_zh: '自由之都，運河、單車同埋博物館之城',
        areas: [
          {
            name: 'Canal Ring', name_zh: '運河區',
            places: [
              { name: 'Anne Frank House', name_zh: '安妮法蘭克屋', description_zh: '二戰期間安妮法蘭克匿藏嘅房子，而家係博物館', type: 'attraction', image: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=800', address: 'Prinsengracht 263, Amsterdam', hours: '9:00-22:00', rating: '4.7', review_count: '65,432', best_time: '上午或傍晚', duration: '1-2小時', cost_level: 'medium', transit: '有軌電車 13/14/17 線', tips: ['必須預訂', '語音導覽好催淚', '好多人'], tags: ['博物館', '歷史', '二戰'] },
              { name: 'Van Gogh Museum', name_zh: '梵高博物館', description_zh: '收藏梵高作品最多嘅博物館，包括《向日葵》', type: 'attraction', image: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=800', address: 'Museumplein 6, Amsterdam', hours: '9:00-18:00', rating: '4.8', review_count: '58,765', best_time: '上午', duration: '2-3小時', cost_level: 'high', transit: '有軌電車 2/5/12 線', tips: ['預約時間', '好多人', '畫廊好靚'], tags: ['博物館', '藝術', '梵高'] },
            ]
          }
        ]
      },
      {
        id: 'keukenhof', name: 'Keukenhof', name_zh: '庫肯霍夫花園', emoji: '🌷',
        description_zh: '世界上最大嘅花卉展覽花園，荷蘭春天必去',
        areas: [
          {
            name: 'Flower Fields', name_zh: '花田',
            places: [
              { name: 'Keukenhof Gardens', name_zh: '庫肯霍夫花園', description_zh: '700萬朵鬱金香同時綻放嘅夢幻場景', type: 'attraction', image: 'https://images.unsplash.com/photo-1582731588792-4a22c1f6c4f4?w=800', address: 'Stationsweg 166A, Lisse', hours: '8:00-19:30', rating: '4.8', review_count: '89,234', best_time: '4月中旬', duration: '3-4小時', cost_level: 'medium', transit: '巴士 854 from Leiden站', tips: ['4月中去最靚', '帶防晒', '花車巡遊好靚'], tags: ['花園', '打卡', '春天'] },
            ]
          }
        ]
      }
    ]
  },
  czech: {
    id: 'czech', name: 'Czech Republic', name_zh: '捷克', emoji: '🏰',
    description_zh: '童話之城，CK小鎮同埋布拉格城堡聞名世界',
    best_season: '春季 (4-6月) 同秋季 (9-10月)',
    avg_temp: '8°C',
    cities: [
      {
        id: 'prague', name: 'Prague', name_zh: '布拉格', emoji: '🎻',
        description_zh: '百塔之城，最大型嘅古城堡建築群',
        areas: [
          {
            name: 'Castle Town', name_zh: '城堡區',
            places: [
              { name: 'Prague Castle', name_zh: '布拉格城堡', description_zh: '世界上最大嘅古城堡建築群，總統府所在地', type: 'attraction', image: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=800', address: 'Hradčany, Prague', hours: '6:00-22:00', rating: '4.8', review_count: '78,901', best_time: '上午', duration: '3-4小時', cost_level: 'medium', transit: '地鐵 Malostranská站', tips: ['行去城堡頂睇全景', '換崗儀式好特別', '建議預留半天'], tags: ['城堡', '歷史', '必去'] },
              { name: 'Charles Bridge', name_zh: '查理大橋', description_zh: '布拉格最美嘅橋，30座巴洛克雕像列陣兩旁', type: 'attraction', image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=800', address: 'Karlův most, Prague', hours: '24小時', rating: '4.8', review_count: '87,654', best_time: '日出或日落', duration: '1小時', cost_level: 'free', transit: '步行', tips: ['清晨或夜晚去避開人群', '街頭藝術家表演', '影日落一流'], tags: ['橋', '打卡', '浪漫'] },
            ]
          }
        ]
      }
    ]
  },
  austria: {
    id: 'austria', name: 'Austria', name_zh: '奧地利', emoji: '🎵',
    description_zh: '音樂之國，莫扎特同埋維也納愛樂樂團嘅故鄉',
    best_season: '春季 (4-6月) 同聖誕市集季節 (12月)',
    avg_temp: '9°C',
    cities: [
      {
        id: 'vienna', name: 'Vienna', name_zh: '維也納', emoji: '🎼',
        description_zh: '音樂之都，皇宮、咖啡館同埋古典音樂嘅天堂',
        areas: [
          {
            name: 'Innere Stadt', name_zh: '內城區',
            places: [
              { name: 'Schönbrunn Palace', name_zh: '美泉宮', description_zh: '哈布斯堡皇室夏宮，花園可以影到成個維也納', type: 'attraction', image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800', address: 'Schönbrunner Schlosspark, Vienna', hours: '8:30-17:30', rating: '4.8', review_count: '67,234', best_time: '上午', duration: '3-4小時', cost_level: 'high', transit: '地鐵 U4 Schönbrunn站', tips: ['買聯票參觀皇宮', '花園免費', '迷宮好得意'], tags: ['皇宮', '花園', '歷史'] },
              { name: 'St. Stephen\'s Cathedral', name_zh: '史蒂芬大教堂', description_zh: '維也納市中心嘅哥特式大教堂，可以爬南塔睇全景', type: 'attraction', image: 'https://images.unsplash.com/photo-1565610030808-6084a62d6e8e?w=800', address: 'Stephansplatz, Vienna', hours: '6:00-22:00', rating: '4.7', review_count: '54,321', best_time: '上午或日落', duration: '1-2小時', cost_level: 'medium', transit: '地鐵 U1/U3 Stephansplatz站', tips: ['可以行樓梯上塔頂', '地下墓穴好神秘', '聖誕市集時好靚'], tags: ['教堂', '打卡', '全景'] },
            ]
          }
        ]
      },
      {
        id: 'salzburg', name: 'Salzburg', name_zh: '薩爾茨堡', emoji: '🎶',
        description_zh: '莫扎特出生地，《真善美》電影拍攝地',
        areas: [
          {
            name: 'Old Town', name_zh: '舊城區',
            places: [
              { name: 'Hohensalzburg Castle', name_zh: '薩爾茨堡城堡', description_zh: '世界上最大嘅中世紀城堡之一，俯瞰成個舊城', type: 'attraction', image: 'https://images.unsplash.com/photo-1594238930626-ed5369c82e2c?w=800', address: 'Mönchsberg 34, Salzburg', hours: '9:00-19:00', rating: '4.7', review_count: '45,678', best_time: '上午或日落', duration: '2-3小時', cost_level: 'medium', transit: '纜車或行山', tips: ['坐纜車上去', '城堡內有博物館', '影日落最靚'], tags: ['城堡', '歷史', '電影'] },
            ]
          }
        ]
      }
    ]
  },
  switzerland: {
    id: 'switzerland', name: 'Switzerland', name_zh: '瑞士', emoji: '🏔️',
    description_zh: '雪山之國，歐洲最纯净嘅大自然',
    best_season: '夏季 (6-8月) 行山，冬季 (12-2月) 滑雪',
    avg_temp: '8°C',
    cities: [
      {
        id: 'zurich', name: 'Zurich', name_zh: '蘇黎世', emoji: '🏦',
        description_zh: '瑞士最大城市，銀行同藝術文化嘅中心',
        areas: [
          {
            name: 'Old Town', name_zh: '舊城區',
            places: [
              { name: 'Lake Zurich', name_zh: '蘇黎世湖', description_zh: '城市中心嘅湖泊，天鵝同埋天鹅绒沙滩', type: 'attraction', image: 'https://images.unsplash.com/photo-1531210483974-4f8c1f33fd35?w=800', address: 'Seestrasse, Zurich', hours: '24小時', rating: '4.8', review_count: '43,210', best_time: '清晨或日落', duration: '2-3小時', cost_level: 'free', transit: '有軌電車 2/9/91 線', tips: ['天鵝好得意', '可以游水', '好多人跑步'], tags: ['湖泊', '自然', '休閒'] },
            ]
          }
        ]
      },
      {
        id: 'lucerne', name: 'Lucerne', name_zh: '琉森', emoji: '🌉',
        description_zh: '瑞士最美城市之一，獅子紀念碑同埋卡貝爾橋所在地',
        areas: [
          {
            name: 'Old Town', name_zh: '舊城區',
            places: [
              { name: 'Chapel Bridge', name_zh: '卡貝爾橋', description_zh: '歐洲最古老嘅有罩木橋，橋上有120幅17世紀畫作', type: 'attraction', image: 'https://images.unsplash.com/photo-1596227760643-5a3f73c06e5a?w=800', address: 'Kapellbrücke, Lucerne', hours: '24小時', rating: '4.7', review_count: '56,789', best_time: '日落', duration: '30分鐘', cost_level: 'free', transit: '火車 Lucerne站', tips: ['夜晚影倒影好靚', '橋上畫作要行過去睇', '附近有獅子紀念碑'], tags: ['橋', '打卡', '日落'] },
              { name: 'Lion Monument', name_zh: '獅子紀念碑', description_zh: '雕刻喺岩石上嘅垂死獅子，紀念法國大革命期間喪生嘅瑞士衛兵', type: 'attraction', image: 'https://images.unsplash.com/photo-1577155260803-1a82e9e6a1b4?w=800', address: 'Denkmal, Lucerne', hours: '24小時', rating: '4.7', review_count: '38,901', best_time: '任何時間', duration: '30分鐘', cost_level: 'free', transit: '步行 from 舊城', tips: ['好震撼', '附近有冰川花園', '蓮花噴泉好靚'], tags: ['紀念碑', '歷史', '感人'] },
            ]
          }
        ]
      }
    ]
  },
  greece: {
    id: 'greece', name: 'Greece', name_zh: '希臘', emoji: '🏛️',
    description_zh: '古老文明之地，奧運發源地同埋浪漫海島',
    best_season: '春季 (4-6月) 同秋季 (9-10月)',
    avg_temp: '20°C',
    cities: [
      {
        id: 'santorini', name: 'Santorini', name_zh: '聖托里尼', emoji: '🌅',
        description_zh: '世界上最浪漫嘅海島之一，白色小屋配藍色圓頂',
        areas: [
          {
            name: 'Oia', name_zh: '伊亞',
            places: [
              { name: 'Oia Sunset', name_zh: '伊亞日落', description_zh: '號稱世界上最美嘅日落，影相位好多人排隊', type: 'attraction', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800', address: 'Oia, Santorini', hours: '24小時', rating: '4.9', review_count: '89,234', best_time: '日落前1小時到', duration: '3-4小時', cost_level: 'free', transit: '巴士 from Fira', tips: ['早啲去占位', '帶定風褸', '影相要去盡頭'], tags: ['日落', '打卡', '浪漫'] },
              { name: 'Blue Domes', name_zh: '藍色圓頂教堂', description_zh: '聖托里尼標誌性景色，明信片必備', type: 'attraction', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800', address: 'Imerovigli, Santorini', hours: '24小時', rating: '4.9', review_count: '76,543', best_time: '上午或正午', duration: '1-2小時', cost_level: 'free', transit: '巴士或的士', tips: ['Imerovigli影最好', '避開中午太熱', '藍頂襯白屋好靚'], tags: ['打卡', '必去', '明信片'] },
            ]
          }
        ]
      },
      {
        id: 'athens', name: 'Athens', name_zh: '雅典', emoji: '🏛️',
        description_zh: '西方文明發源地，古代奧運會聖火采集地',
        areas: [
          {
            name: 'Acropolis', name_zh: '衛城',
            places: [
              { name: 'Parthenon', name_zh: '帕特農神廟', description_zh: '供奉雅典娜女神嘅神廟，世界上最重要嘅古蹟之一', type: 'attraction', image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800', address: 'Acropolis, Athens', hours: '8:00-20:00', rating: '4.8', review_count: '78,901', best_time: '上午', duration: '2-3小時', cost_level: 'medium', transit: 'Metro Acropoli站', tips: ['預留半天', '著舒適鞋', '帶水'], tags: ['古蹟', '歷史', '必去'] },
            ]
          }
        ]
      }
    ]
  },
  portugal: {
    id: 'portugal', name: 'Portugal', name_zh: '葡萄牙', emoji: '🇵🇹',
    description_zh: '大航海時代嘅起點，蛋撻同波特酒嘅故鄉',
    best_season: '春季 (4-6月) 同秋季 (9-10月)',
    avg_temp: '16°C',
    cities: [
      {
        id: 'lisbon', name: 'Lisbon', name_zh: '里斯本', emoji: '🚃',
        description_zh: '七丘之城，復古電車同埋法朵音樂之都',
        areas: [
          {
            name: 'Alfama', name_zh: '阿爾法瑪區',
            places: [
              { name: 'Belém Tower', name_zh: '貝倫塔', description_zh: '16世紀航海時代嘅防禦塔，里斯本嘅象徵', type: 'attraction', image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800', address: 'Av. Brasília, Lisbon', hours: '10:00-18:30', rating: '4.6', review_count: '45,678', best_time: '日落', duration: '1小時', cost_level: 'medium', transit: '巴士 201/202/203', tips: ['好多人排隊', '附近有蛋撻店', '海邊影相靚'], tags: ['塔', '打卡', '歷史'] },
            ]
          }
        ]
      },
      {
        id: 'porto', name: 'Porto', name_zh: '波爾圖', emoji: '🍷',
        description_zh: '波特酒產地，里克索斯修道院係《哈利波特》場景靈感',
        areas: [
          {
            name: 'Ribeira', name_zh: '河邊區',
            places: [
              { name: 'Livraria Lello', name_zh: '萊羅書店', description_zh: '被稱為世界最美書店之一，《哈利波特》作者經常到訪', type: 'attraction', image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800', address: 'Rua das Carmelitas, Porto', hours: '9:00-20:00', rating: '4.6', review_count: '54,321', best_time: '開門就去', duration: '1小時', cost_level: 'medium', transit: 'Metro Aliados站', tips: ['要俾錢入場', '影相要排隊', '樓梯好靚'], tags: ['書店', '打卡', 'J.K. Rowling'] },
            ]
          }
        ]
      }
    ]
  }
}

// ============ UTILITIES ============
function extractText(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'").trim()
}

function extractImage(itemXml: string): string | null {
  // Try multiple patterns for image extraction
  const patterns = [
    // Media content/thumbnail elements (common in modern RSS)
    /<media:content[^>]*url=["']([^"']*)["']/i,
    /<media:thumbnail[^>]*url=["']([^"']*)["']/i,
    // Standard enclosure (check if it's an image type)
    /<enclosure[^>]*url=["']([^"']*)["'][^>]*type=["']([^"']*)["']/i,
    // Image elements in description/content
    /<img[^>]*src=["']([^"']*)["']/i,
    // Open Graph:image meta tag (sometimes in content)
    /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i,
    // Content:encoded section with images
    /<content:encoded[^>]*>([\s\S]*?)<\/content:encoded>/i,
  ]

  for (let i = 0; i < patterns.length; i++) {
    const p = patterns[i]
    if (i === 2) {
      // Special handling for enclosure - check if it's an image
      const match = itemXml.match(p)
      if (match && match[1]) {
        const type = match[2] || ''
        if (type.startsWith('image/') || match[1].match(/\.(jpg|jpeg|png|gif|webp)/i)) {
          return match[1]
        }
      }
    } else if (i === 6) {
      // Content:encoded - extract first image from HTML content
      const match = itemXml.match(p)
      if (match && match[1]) {
        const imgMatch = match[1].match(/<img[^>]*src=["']([^"']*)["']/i)
        if (imgMatch && imgMatch[1]) return imgMatch[1]
      }
    } else {
      const m = itemXml.match(p)
      if (m && m[1]) {
        // Validate it's a valid image URL
        const url = m[1]
        if (url.startsWith('http') && (url.match(/\.(jpg|jpeg|png|gif|webp|svg)/i) || url.includes('image'))) {
          return url
        }
      }
    }
  }
  return null
}

async function translateText(text: string, lang: string, timeoutMs = 10000): Promise<string> {
  if (!text || text.length < 2) return text
  const hasChinese = /[\u4e00-\u9fff]/.test(text)
  const isTargetChinese = lang === 'zh-CN' || lang === 'zh-TW'
  // Skip if already in target language
  if ((isTargetChinese && hasChinese) || (!isTargetChinese && !hasChinese)) return text

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
    const targetLang = lang === 'en' ? 'en' : lang === 'zh-CN' ? 'zh-CN' : 'zh-TW'
    const fromLang = hasChinese ? 'zh' : 'en'
    const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`, { signal: controller.signal })
    clearTimeout(timeoutId)
    if (res.ok) {
      const data = await res.json()
      const translated = data[0]?.[0]?.[0]
      if (translated && translated !== text) return translated
    }
  } catch {}
  // If translation fails, return original text (no API key needed)
  return text
}

async function safeFetch(url: string, timeoutMs = 10000): Promise<string | null> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
    const res = await fetch(url, { signal: controller.signal })
    clearTimeout(timeoutId)
    if (!res.ok) return null
    return await res.text()
  } catch { return null }
}

// ============ HANDLERS ============
async function handleTravelCategory(lang: string, countryFilter: string, cityFilter: string) {
  const now = new Date().toISOString()

  // Build country summaries for the selector
  const countrySummaries = Object.entries(TRAVEL_COUNTRIES).map(([id, data]: [string, any]) => ({
    id,
    name_zh: data.name_zh,
    name: data.name,
    emoji: data.emoji,
    cityCount: data.cities.length,
    placeCount: data.cities.reduce((acc: number, c: any) => acc + c.areas.reduce((a: number, ar: any) => a + ar.places.length, 0), 0),
  }))

  // Also provide flat citySummaries for backward compatibility
  const citySummaries = Object.values(TRAVEL_COUNTRIES).flatMap((country: any) =>
    country.cities.map((city: any) => ({
      id: city.id,
      name_zh: city.name_zh,
      name: city.name,
      emoji: city.emoji,
      country_id: country.id,
      country_zh: country.name_zh,
      areaCount: city.areas.length,
      placeCount: city.areas.reduce((acc: number, ar: any) => acc + ar.places.length, 0),
    }))
  )

  const travelItems: any[] = []

  for (const [countryId, countryData] of Object.entries(TRAVEL_COUNTRIES)) {
    if (countryFilter !== 'all' && countryId !== countryFilter) continue

    for (const city of countryData.cities) {
      if (cityFilter !== 'all' && city.id !== cityFilter) continue

      for (const area of city.areas) {
        for (const place of area.places) {
          const relatedPlaces = Object.values(TRAVEL_COUNTRIES)
            .flatMap((c: any) => c.cities.flatMap((ci: any) => ci.areas.flatMap((ar: any) => ar.places)))
            .filter((p: any) => p.name !== place.name)
            .slice(0, 3)
            .map((p: any) => ({ name: p.name, name_zh: p.name_zh, type: p.type }))

          travelItems.push({
            id: `travel-${countryId}-${city.id}-${place.name_zh.replace(/\s/g, '-')}`,
            title: place.name_zh,
            title_translated: place.name_zh,
            desc: place.description_zh + '。最佳遊覽時間：' + (place.best_time || '建議停留2-3小時') + '。評分：' + (place.rating || '4.5') + '/5.0。',
            desc_translated: place.description_zh,
            translated: true,
            link: 'https://www.google.com/search?q=' + encodeURIComponent(place.name_zh + ' ' + city.name_zh),
            pubDate: now,
            source: countryData.name_zh + ' · ' + city.name_zh + ' · ' + area.name_zh,
            img: true,
            img_url: place.image,
            emoji: city.emoji,
            name: place.name_zh,
            name_zh: place.name_zh,
            name_en: place.name,
            city: city.name_zh,
            city_en: city.name,
            city_id: city.id,
            city_emoji: city.emoji,
            city_description: city.description_zh,
            area: area.name_zh,
            area_zh: area.name_zh,
            country: countryData.name_zh,
            country_id: countryId,
            country_zh: countryData.name_zh,
            best_time: place.best_time || '建議停留2-3小時',
            duration: place.duration || '2-3小時',
            rating: place.rating || '4.5',
            review_count: place.review_count || '10,000+',
            address: place.address || '',
            hours: place.hours || '',
            price_range: place.price_range || '',
            cost_level: place.cost_level || 'medium',
            transit: place.transit || '',
            type: place.type || 'attraction',
            tags: place.tags || [],
            tips: place.tips || [],
            blog_content: place.blog_content || (place.description_zh + '\n\n遊覽建議：\n' + (place.tips || []).map((t: string) => '• ' + t).join('\n')),
            blog_slug: place.blog_slug || null,
            country_emoji: countryData.emoji,
            best_season: countryData.best_season,
            avg_temp: countryData.avg_temp,
            related_places: relatedPlaces,
          })
        }
      }
    }
  }

  const placeTypes = ['attraction', 'food', 'shopping', 'nightlife', 'nature']

  return NextResponse.json({
    success: true,
    category: 'travel',
    items: travelItems,
    isTravelGuide: true,
    countrySummaries,
    citySummaries,
    placeTypes,
    timestamp: Date.now()
  })
}

async function handleDataJournalismCategory(sub: string, lang: string) {
  const subcategoryLabels: Record<string, any> = {
    gdp: { name: 'GDP & Economy', name_zh: 'GDP與經濟', emoji: '📈', description_zh: '經濟指標、GDP增長、貿易統計' },
    digital: { name: 'Digital Economy', name_zh: '數碼經濟', emoji: '💻', description_zh: '互聯網、電子商務、AI市場、網絡安全數據' },
    demographics: { name: 'Demographics', name_zh: '人口統計', emoji: '👥', description_zh: '人口、遷移、出生率、人口統計' },
    ai: { name: 'AI & Technology', name_zh: 'AI與科技', emoji: '🤖', description_zh: 'AI統計、機器學習、科技應用' },
    official: { name: 'Official Statistics', name_zh: '官方統計', emoji: '🏛️', description_zh: '政府統計局、官方數據發布' },
  }

  const subSources = DATA_JOURNALISM_SUBCATS[sub] || DATA_JOURNALISM_SUBCATS.gdp
  const subLabel = subcategoryLabels[sub] || subcategoryLabels.gdp
  const now = Date.now()

  const results = await Promise.allSettled(
    subSources.map(async (source) => {
      const xml = await safeFetch(source.url, 10000)
      if (!xml) return []
      const itemMatches = xml.match(/<item[^>]*>([\s\S]*?)<\/item>/gi) || []
      return itemMatches.slice(0, 10).map((itemXml: string) => {
        const title = extractText(itemXml.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '')
        const desc = extractText(itemXml.match(/<description>([\s\S]*?)<\/description>/i)?.[1] || '').slice(0, 200)
        const link = extractText(itemXml.match(/<link>([\s\S]*?)<\/link>/i)?.[1] || '')
        const pubDateStr = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/i)?.[1] || ''
        const pubTimestamp = pubDateStr ? (isNaN(new Date(pubDateStr).getTime()) ? 0 : new Date(pubDateStr).getTime()) : 0
        const img = extractImage(itemXml)
        return { id: Buffer.from(link).toString('base64').slice(0, 16), title, desc, link, pubDate: pubDateStr, pubTimestamp, img: !!img, img_url: img || '', source: source.source }
      }).filter((item: any) => item.title && item.link)
    })
  )

  const allItems = results.flatMap(r => r.status === 'fulfilled' ? r.value : []).sort((a: any, b: any) => b.pubTimestamp - a.pubTimestamp).slice(0, 20)

  const toTranslate = allItems.slice(0, 8)
  const translated = await Promise.allSettled(toTranslate.map(async (item: any) => {
    const isChineseSource = /[\u4e00-\u9fff]/.test(item.title)
    const needsTranslation = lang !== 'en' && !isChineseSource
    if (needsTranslation) {
      const [tTitle, tDesc] = await Promise.allSettled([
        translateText(item.title, lang, 8000),
        translateText(item.desc, lang, 8000),
      ])
      return { ...item, title_translated: tTitle.status === 'fulfilled' ? tTitle.value : item.title, desc_translated: tDesc.status === 'fulfilled' ? tDesc.value : item.desc, translated: true }
    }
    return { ...item, title_translated: item.title, desc_translated: item.desc, translated: false }
  }))

  const translatedItems = translated.map(t => t.status === 'fulfilled' ? t.value : null).filter(Boolean)
  const restItems = allItems.slice(8).map(item => ({ ...item, title_translated: item.title, desc_translated: item.desc, translated: false }))

  return NextResponse.json({
    success: true, category: 'data_journalism', subcategory: sub, subcategoryLabel: subLabel,
    subcategories: Object.entries(DATA_JOURNALISM_SUBCATS).map(([id, sources]) => ({ id, ...subcategoryLabels[id], sourceCount: (sources as any[]).length })),
    items: [...translatedItems, ...restItems].slice(0, 20),
    isDataJournalism: true, timestamp: now,
  })
}

async function handleNewsCategory(category: string, lang: string) {
  const sources = RSS_SOURCES[category] || []
  if (sources.length === 0) return NextResponse.json({ success: true, category, items: [], timestamp: Date.now() })

  const MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000
  const now = Date.now()

  const results = await Promise.allSettled(
    sources.map(async (source) => {
      const xml = await safeFetch(source.url, 10000)
      if (!xml) return []
      const itemMatches = xml.match(/<item[^>]*>([\s\S]*?)<\/item>/gi) || []
      const sourceItems: any[] = []
      for (const itemXml of itemMatches.slice(0, 15)) {
        const title = extractText(itemXml.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '')
        const desc = extractText(itemXml.match(/<description>([\s\S]*?)<\/description>/i)?.[1] || '').slice(0, 200)
        const link = extractText(itemXml.match(/<link>([\s\S]*?)<\/link>/i)?.[1] || '')
        const pubDateStr = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/i)?.[1] || ''
        let pubTimestamp = 0
        if (pubDateStr) { const pd = new Date(pubDateStr); pubTimestamp = isNaN(pd.getTime()) ? 0 : pd.getTime() }
        if (pubTimestamp !== 0 && (now - pubTimestamp) > MAX_AGE_MS) continue
        const img = extractImage(itemXml)
        if (title && link) sourceItems.push({ id: Buffer.from(link).toString('base64').slice(0, 16), title, desc, link, pubDate: pubDateStr, pubTimestamp, img: !!img, img_url: img || '', source: source.source })
      }
      return sourceItems
    })
  )

  const allItems = results.flatMap(r => r.status === 'fulfilled' ? r.value : []).sort((a, b) => b.pubTimestamp - a.pubTimestamp)
  const itemsToTranslate = allItems.slice(0, 12)
  const remainingItems = allItems.slice(12, 27)

  const translated = await Promise.allSettled(itemsToTranslate.map(async (item) => {
    const isChineseSource = /[\u4e00-\u9fff]/.test(item.title)
    let needsTranslation = false
    if (lang === 'en') needsTranslation = isChineseSource
    else if (lang === 'zh-TW' || lang === 'zh-CN') needsTranslation = !isChineseSource
    if (needsTranslation) {
      const [tTitle, tDesc] = await Promise.allSettled([translateText(item.title, lang, 10000), translateText(item.desc, lang, 10000)])
      return { ...item, title_translated: tTitle.status === 'fulfilled' ? tTitle.value : item.title, desc_translated: tDesc.status === 'fulfilled' ? tDesc.value : item.desc, translated: true }
    }
    return { ...item, title_translated: item.title, desc_translated: item.desc, translated: false }
  }))

  const translatedItems = translated.map(t => t.status === 'fulfilled' ? t.value : null).filter(Boolean)
  const finalRemaining = remainingItems.map(item => ({ ...item, title_translated: item.title, desc_translated: item.desc, translated: false }))
  const combined = [...translatedItems, ...finalRemaining]
  const newestFive = combined.slice(0, 5)
  const others = combined.slice(5).sort(() => Math.random() - 0.5)
  const finalItems = [...newestFive, ...others].slice(0, 25)

  return NextResponse.json({ success: true, category, items: finalItems, sources: sources.length, timestamp: now })
}

// ============ MAIN ROUTE ============
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category') || 'finance'
    const lang = searchParams.get('lang') || 'zh-TW'
    const country = searchParams.get('country') || 'all'
    const city = searchParams.get('city') || 'all'

    if (category === 'travel') return handleTravelCategory(lang, country, city)
    if (category === 'data_journalism') {
      const sub = searchParams.get('sub') || 'gdp'
      return handleDataJournalismCategory(sub, lang)
    }
    return handleNewsCategory(category, lang)
  } catch (err: any) {
    console.error('[news-feed] Error:', err)
    return NextResponse.json({ success: false, error: 'Failed to fetch news' }, { status: 500 })
  }
}

export const runtime = 'nodejs'
