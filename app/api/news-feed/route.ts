import { NextRequest, NextResponse } from 'next/server'

// Enhanced Travel Data with more metadata
const TRAVEL_GUIDES: Record<string, {
  city: string;
  city_zh: string;
  emoji: string;
  description: string;
  description_zh: string;
  best_season: string;
  avg_temp: string;
  currency: string;
  language: string;
  tips: string[];
  areas: {
    name: string;
    name_zh: string;
    description: string;
    description_zh: string;
    places: {
      name: string;
      name_zh: string;
      description: string;
      description_zh: string;
      type: 'attraction' | 'food' | 'activity' | 'shopping' | 'nightlife' | 'nature';
      image: string;
      address: string;
      hours?: string;
      price_range?: string;
      rating?: string;
      review_count?: string;
      best_time?: string;
      duration?: string;
      cost_level?: 'free' | 'low' | 'medium' | 'high' | 'luxury';
      transit?: string;
      tips?: string[];
      tags?: string[];
      related_places?: string[];
    }[];
  }[];
}> = {
  tokyo: {
    city: "Tokyo",
    city_zh: "東京",
    emoji: "🗼",
    description: "Traditional and modern perfectly blended international metropolis",
    description_zh: "傳統與現代完美融合嘅國際大都會",
    best_season: "春季 (3-5月) 同秋季 (9-11月)",
    avg_temp: "16°C",
    currency: "JPY (¥)",
    language: "日語",
    tips: [
      "建議購買 Suica 卡方便搭地鐵",
      "免稅店購物需帶護照",
      "餐厅大多需要預約",
      "計程車幾貴，建議搭公共交通"
    ],
    areas: [
      {
        name: "Shibuya & Harajuku",
        name_zh: "澀谷 & 原宿",
        description: "Youth culture and fashion hub",
        description_zh: "青少年文化同時尚中心",
        places: [
          {
            name: "Shibuya Crossing",
            name_zh: "澀谷十字路口",
            description: "World's busiest pedestrian crossing, ~3000 people per light",
            description_zh: "世界上最繁忙嘅行人十字路口，每個紅綠燈有大約3000人同時過馬路",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800",
            address: "Shibuya, Tokyo",
            hours: "24小時",
            price_range: "免費",
            rating: "4.7",
            review_count: "52,389",
            best_time: "黃昏時分",
            duration: "30分鐘",
            cost_level: "free",
            transit: "JR山手線 澀谷站",
            tips: ["建議喺澀谷站陽台睇全景", "附近商場可以Shopping"],
            tags: ["地標", "夜景", "必去"]
          },
          {
            name: "Meiji Shrine",
            name_zh: "明治神宮",
            description: "Shinto shrine dedicated to Emperor Meiji, surrounded by forest",
            description_zh: "供奉明治天皇嘅神社，周圍係一片寧靜嘅森林",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=800",
            address: "1-1 Yoyogikamizonocho, Shibuya",
            hours: "日出至日落",
            price_range: "免費",
            rating: "4.8",
            review_count: "41,205",
            best_time: "清晨",
            duration: "1-2小時",
            cost_level: "free",
            transit: "JR山手線 原宿站",
            tips: ["淨心之旅，建議早起", "入口處有洗手禮"],
            tags: ["神社", "寧靜", "文化"]
          },
          {
            name: "Takeshita Street",
            name_zh: "竹下通",
            description: "Most popular fashion street in Harajuku",
            description_zh: "原宿最具人氣嘅潮流購物街，適合年輕人",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1557409518-691ebcd96038?w=800",
            address: "Takeshita Street, Harajuku",
            hours: "11:00-20:00",
            price_range: "$$",
            rating: "4.3",
            review_count: "28,456",
            best_time: "下午",
            duration: "2-3小時",
            cost_level: "medium",
            transit: "JR山手線 原宿站",
            tips: ["週末好多人", "化妝品試用裝好正"],
            tags: ["購物", "潮流", "美食"]
          },
          {
            name: "Omotesando",
            name_zh: "表參道",
            description: "Upscale shopping street with designer boutiques",
            description_zh: "名牌大道，兩旁係國際設計師品牌",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=800",
            address: "Omotesando, Shibuya",
            hours: "店鋪各異",
            price_range: "$$$",
            rating: "4.5",
            review_count: "18,932",
            best_time: "任何時間",
            duration: "2-4小時",
            cost_level: "high",
            transit: "Metro 明治神宮前站",
            tips: ["建築設計好靚", "係影相打卡热点"],
            tags: ["名牌", "建築", "打卡"]
          }
        ]
      },
      {
        name: "Asakusa & Ueno",
        name_zh: "淺草 & 上野",
        description: "Traditional Tokyo with temples and markets",
        description_zh: "傳統東京代表寺院同市場",
        places: [
          {
            name: "Senso-ji Temple",
            name_zh: "淺草寺",
            description: "Tokyo's oldest Buddhist temple with iconic Thunder Gate",
            description_zh: "東京最古老嘅佛教寺廟，标志係雷門大燈籠",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800",
            address: "2-3-1 Asakusa, Taito",
            hours: "6:00-17:00",
            price_range: "免費",
            rating: "4.8",
            review_count: "67,842",
            best_time: "早上",
            duration: "1-2小時",
            cost_level: "free",
            transit: "Metro 淺草站",
            tips: ["雷門影相要排隊", "抽籤好準!", "人形燒好食"],
            tags: ["寺廟", "歷史", "必去"]
          },
          {
            name: "Tsukiji Outer Market",
            name_zh: "築地場外市場",
            description: "Fresh seafood and Japanese food paradise",
            description_zh: "新鮮海鮮同日本料理嘅天堂",
            type: "food",
            image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
            address: "4-16-2 Tsukiji, Chuo",
            hours: "5:00-14:00",
            price_range: "$$$",
            rating: "4.6",
            review_count: "35,128",
            best_time: "清晨",
            duration: "2-3小時",
            cost_level: "high",
            transit: "Metro 築地站",
            tips: ["越早去越好", "壽司係必試", "海鮮丼好正"],
            tags: ["美食", "海鮮", "地道"]
          },
          {
            name: "Ueno Park",
            name_zh: "上野公園",
            description: "Large park in central Tokyo, especially beautiful during cherry blossom season",
            description_zh: "東京市中心嘅大型公園，櫻花季節特別美",
            type: "nature",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
            address: "Uenokoen, Taito",
            hours: "5:00-23:00",
            price_range: "免費",
            rating: "4.5",
            review_count: "29,567",
            best_time: "春天櫻花季",
            duration: "2-3小時",
            cost_level: "free",
            transit: "JR山手線 上野站",
            tips: ["博物館優惠票", "熊貓好可愛"],
            tags: ["公園", "櫻花", "文化"]
          }
        ]
      },
      {
        name: "Shinjuku & Kabukicho",
        name_zh: "新宿 & 歌舞伎町",
        description: "Entertainment and nightlife district",
        description_zh: "娛樂與夜生活區",
        places: [
          {
            name: "Tokyo Metropolitan Building",
            name_zh: "東京都廳",
            description: "Free observation deck with panoramic Tokyo view",
            description_zh: "免費觀景台，俯瞰東京全景",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800",
            address: "2-8-1 Nishi-shinjuku",
            hours: "9:30-23:00",
            price_range: "免費",
            rating: "4.4",
            review_count: "22,345",
            best_time: "黃昏睇日落",
            duration: "1小時",
            cost_level: "free",
            transit: "JR新宿站 西口步行10分鐘",
            tips: ["建議帶遮", "黃昏景色最靚"],
            tags: ["夜景", "免費", "打卡"]
          },
          {
            name: "Golden Gai",
            name_zh: "黃金街",
            description: "Preserved post-war alleys with unique bars",
            description_zh: "保存完好嘅戰後小巷，充滿特色酒吧",
            type: "nightlife",
            image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800",
            address: "Kabukicho, Shinjuku",
            hours: "19:00-5:00",
            price_range: "$$",
            rating: "4.5",
            review_count: "8,234",
            best_time: "夜晚",
            duration: "2-3小時",
            cost_level: "medium",
            transit: "JR新宿站 東口步行5分鐘",
            tips: ["每間酒吧只有幾個位", "體驗地道夜生活"],
            tags: ["酒吧", "夜生活", "地道"]
          }
        ]
      },
      {
        name: "Akihabara",
        name_zh: "秋葉原",
        description: "Electronics, anime and gaming heaven",
        description_zh: "電子產品、動畫、同遊戲天堂",
        places: [
          {
            name: "Yodobashi Camera",
            name_zh: "友都八喜",
            description: "Japan's largest electronics store",
            description_zh: "日本最大型電器店，電子產品天堂",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1578000402869-3e2b1d0d0d00?w=800",
            address: "1-1 Kanda Hanaokacho, Chiyoda",
            hours: "9:30-22:00",
            price_range: "$$$",
            rating: "4.4",
            review_count: "19,876",
            best_time: "任何時間",
            duration: "2-4小時",
            cost_level: "high",
            transit: "JR秋葉原站",
            tips: ["免稅優惠", "大型相機店"],
            tags: ["電子產品", "電器", "數碼"]
          },
          {
            name: "Akihabara Electric Town",
            name_zh: "秋葉原電器城",
            description: "Anime, manga, games and figures",
            description_zh: "動畫、漫畫、遊戲、手辦集中地",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800",
            address: "Akihabara",
            hours: "10:00-20:00",
            price_range: "$$",
            rating: "4.5",
            review_count: "24,567",
            best_time: "下午",
            duration: "3-4小時",
            cost_level: "medium",
            transit: "JR秋葉原站",
            tips: ["動漫迷聖地", "手辦幾貴"],
            tags: ["動漫", "遊戲", "電子"]
          }
        ]
      },
      {
        name: "Marunouchi & Ginza",
        name_zh: "丸之內 & 銀座",
        description: "Upscale shopping and business district",
        description_zh: "高檔購物同商業區",
        places: [
          {
            name: "Ginza",
            name_zh: "銀座",
            description: "Japan's most famous upscale shopping district",
            description_zh: "日本最有名嘅高檔購物區",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1549693578-d683be217e58?w=800",
            address: "Ginza, Chuo",
            hours: "店鋪各異",
            price_range: "$$$",
            rating: "4.5",
            review_count: "31,234",
            best_time: "下午至夜晚",
            duration: "3-5小時",
            cost_level: "luxury",
            transit: "Metro 銀座站",
            tips: ["名牌集中地", "晚上霓虹燈好靚"],
            tags: ["名牌", "購物", "夜景"]
          },
          {
            name: "Tokyo Station",
            name_zh: "東京站",
            description: "Iconic red-brick building and underground shopping",
            description_zh: "標誌性紅磚建築同地下購物商場",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800",
            address: "1-9-1 Marunouchi, Chiyoda",
            hours: "5:30-23:30",
            price_range: "免費",
            rating: "4.4",
            review_count: "42,876",
            best_time: "任何時間",
            duration: "1-2小時",
            cost_level: "free",
            transit: "JR東京站",
            tips: ["地下商場好大", "係打卡热点"],
            tags: ["地標", "建築", "購物"]
          }
        ]
      }
    ]
  },
  paris: {
    city: "Paris",
    city_zh: "巴黎",
    emoji: "🗼",
    description: "Romantic capital, temple of art and fashion",
    description_zh: "浪漫之都，藝術與時尚嘅殿堂",
    best_season: "春季 (4-6月) 同秋季 (9-11月)",
    avg_temp: "12°C",
    currency: "EUR (€)",
    language: "法語",
    tips: [
      "博物館套票慳錢",
      "餐廳要預約",
      "小費通常已包含",
      "地鐵係最方便交通工具"
    ],
    areas: [
      {
        name: "Eiffel Tower & Champ de Mars",
        name_zh: "艾菲爾鐵塔 & 戰神廣場",
        description: "Iconic Paris landmark and surrounding area",
        description_zh: "巴黎標誌性地標同周邊區域",
        places: [
          {
            name: "Eiffel Tower",
            name_zh: "埃菲爾鐵塔",
            description: "Paris landmark built for 1889 World Fair",
            description_zh: "巴黎地標，建於1889年世界博覽會",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=800",
            address: "Champ de Mars, 5 Avenue Anatole France",
            hours: "9:30-23:45",
            price_range: "€€",
            rating: "4.7",
            review_count: "89,456",
            best_time: "黃昏睇日落",
            duration: "2-3小時",
            cost_level: "medium",
            transit: "Metro 艾菲爾鐵塔站",
            tips: ["網上預購門票", "帶外套晚上好凍", "觀景台睇夜景好靚"],
            tags: ["地標", "夜景", "必去"]
          },
          {
            name: "Seine River Cruise",
            name_zh: "塞納河遊船",
            description: "See main Paris attractions from the river",
            description_zh: "從河面欣賞巴黎主要景點",
            type: "activity",
            image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
            address: "Port de la Bourdonnais",
            hours: "10:00-22:00",
            price_range: "€€",
            rating: "4.5",
            review_count: "34,567",
            best_time: "黃昏或夜晚",
            duration: "1小時",
            cost_level: "medium",
            transit: "Metro 艾菲爾鐵塔站",
            tips: ["晚餐遊船浪漫", "建議預訂"],
            tags: ["遊船", "浪漫", "夜景"]
          },
          {
            name: "Trocadéro Gardens",
            name_zh: "特羅卡德羅花園",
            description: "Best spot to photograph Eiffel Tower",
            description_zh: "欣賞埃菲爾鐵塔最佳位置",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
            address: "Place de Trocadéro",
            hours: "24小時",
            price_range: "免費",
            rating: "4.6",
            review_count: "28,234",
            best_time: "日出或日落",
            duration: "30分鐘-1小時",
            cost_level: "free",
            transit: "Metro 特羅卡德羅站",
            tips: ["攝影師天堂", "可以影全景"],
            tags: ["打卡", "攝影", "免費"]
          }
        ]
      },
      {
        name: "Le Marais & Île de la Cité",
        name_zh: "瑪黑區 & 西堤島",
        description: "Historic heart of Paris with medieval architecture",
        description_zh: "巴黎歷史中心，中世紀建築",
        places: [
          {
            name: "Notre-Dame Cathedral",
            name_zh: "巴黎聖母院",
            description: " Gothic masterpiece, under restoration",
            description_zh: "哥德式建築傑作，正在修復中",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=800",
            address: "6 Parvis Notre-Dame",
            hours: "修復中",
            price_range: "免費外觀",
            rating: "4.7",
            review_count: "45,678",
            best_time: "任何時間",
            duration: "1小時",
            cost_level: "free",
            transit: "Metro 聖母院站",
            tips: ["外觀仍然好靚", "周邊花園好舒服"],
            tags: ["教堂", "歷史", "地標"]
          },
          {
            name: "Sainte-Chapelle",
            name_zh: "聖禮拜堂",
            description: "Gothic chapel famous for stunning stained glass",
            description_zh: "以其彩色玻璃窗聞名嘅哥德式教堂",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800",
            address: "8 Boulevard du Palais",
            hours: "9:00-19:00",
            price_range: "€",
            rating: "4.7",
            review_count: "26,890",
            best_time: "中午有陽光時",
            duration: "1小時",
            cost_level: "low",
            transit: "Metro 夏特萊站",
            tips: ["彩色玻璃窗好震撼", "建議預購門票"],
            tags: ["教堂", "玻璃", "建築"]
          },
          {
            name: "Place des Vosges",
            name_zh: "孚日廣場",
            description: "Paris's oldest square surrounded by classical buildings",
            description_zh: "巴黎最古老嘅廣場，周圍係古典建築",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
            address: "Place des Vosges",
            hours: "24小時",
            price_range: "免費",
            rating: "4.5",
            review_count: "18,456",
            best_time: "下午",
            duration: "30分鐘-1小時",
            cost_level: "free",
            transit: "Metro 巴士底站",
            tips: ["周杰倫MV拍攝地", "好靜好舒服"],
            tags: ["廣場", "歷史", "打卡"]
          }
        ]
      },
      {
        name: "Montmartre & Sacré-Cœur",
        name_zh: "蒙馬特 & 聖心堂",
        description: "Bohemian artistic neighborhood with stunning views",
        description_zh: "波希米亞藝術區，可以俯瞰巴黎全景",
        places: [
          {
            name: "Sacré-Cœur Basilica",
            name_zh: "聖心堂",
            description: "Romanesque-Byzantine church with panoramic view",
            description_zh: "羅馬拜占庭風格教堂，可俯瞰巴黎全景",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800",
            address: "35 Rue du Chevalier de la Barre",
            hours: "6:00-22:30",
            price_range: "免費",
            rating: "4.6",
            review_count: "52,345",
            best_time: "日落時分",
            duration: "1-2小時",
            cost_level: "free",
            transit: "Metro 安西站 或 纜車",
            tips: ["纜車慳力", "日落景色好靚", "區内有小偷要小心"],
            tags: ["教堂", "夜景", "全景"]
          },
          {
            name: "Le Consulat",
            name_zh: "雙風車咖啡館",
            description: "Filming location for In the Mood for Love",
            description_zh: "《花樣年華》取景地，法式咖啡館",
            type: "food",
            image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
            address: "18 Rue Amiral de Joinville",
            hours: "7:00-2:00",
            price_range: "€",
            rating: "4.3",
            review_count: "12,345",
            best_time: "任何時間",
            duration: "1小時",
            cost_level: "low",
            transit: "Metro 布朗什廣場站",
            tips: ["電影取景地", "體驗法式咖啡文化"],
            tags: ["咖啡", "電影", "打卡"]
          },
          {
            name: "Place du Tertre",
            name_zh: "藝術家廣場",
            description: "Artists' square with portrait painters",
            description_zh: "蒙特婁藝術家聚集地，可以即場畫肖像",
            type: "activity",
            image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800",
            address: "Place du Tertre",
            hours: "10:00-19:00",
            price_range: "€€",
            rating: "4.2",
            review_count: "15,678",
            best_time: "早上",
            duration: "1-2小時",
            cost_level: "medium",
            transit: "Metro 布朗什廣場站",
            tips: ["可以畫肖像", "價錢可以傾"],
            tags: ["藝術", "畫廊", "地道"]
          }
        ]
      },
      {
        name: "Le Louvre & Tuileries",
        name_zh: "羅浮宮 & 杜樂麗",
        description: "World's largest art museum and adjacent gardens",
        description_zh: "世界最大博物館，同相鄰嘅花園",
        places: [
          {
            name: "Louvre Museum",
            name_zh: "羅浮宮",
            description: "World's largest museum with 380,000+ artworks",
            description_zh: "世界最大博物館，收藏超過380,000件展品",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1499426600726-ac12f68c0d19?w=800",
            address: "Rue de Rivoli",
            hours: "9:00-18:00 (星期二休息)",
            price_range: "€€",
            rating: "4.8",
            review_count: "98,765",
            best_time: "平日或早上",
            duration: "4-6小時",
            cost_level: "medium",
            transit: "Metro 羅浮宮站",
            tips: ["預留一整天", "蒙娜麗莎喺1樓", "預購門票免排隊"],
            tags: ["博物館", "藝術", "必去"]
          },
          {
            name: "Palais Royal Gardens",
            name_zh: "皇宮花園",
            description: "Beautiful gardens near the Louvre",
            description_zh: "羅浮宮旁嘅美麗園林，適合散步",
            type: "nature",
            image: "https://images.unsplash.com/photo-1503149779833-1de50ced91f4?w=800",
            address: "Place du Palais Royal",
            hours: "7:30-21:00",
            price_range: "免費",
            rating: "4.5",
            review_count: "19,234",
            best_time: "春天或秋天",
            duration: "1-2小時",
            cost_level: "free",
            transit: "Metro 皇宮站",
            tips: ["結合羅浮宮遊覽", "好舒服嘅花園"],
            tags: ["花園", "散步", "免費"]
          }
        ]
      }
    ]
  },
  seoul: {
    city: "Seoul",
    city_zh: "首爾",
    emoji: "🏯",
    description: "K-pop, beauty and food paradise",
    description_zh: "K-pop、整容與美食嘅天堂",
    best_season: "春季 (3-5月) 同秋季 (9-11月)",
    avg_temp: "12°C",
    currency: "KRW (₩)",
    language: "韓語",
    tips: [
      "T-money 卡搭地鐵必備",
      "免稅店購物要護照",
      "大多數地方接受信用卡",
      "計程車幾平"
    ],
    areas: [
      {
        name: "Gangnam & Apgujeong",
        name_zh: "江南 & 狎鷗亭",
        description: "Wealthy shopping and nightlife district",
        description_zh: "有錢人區購物同夜生活",
        places: [
          {
            name: "COEX Mall & Starfield",
            name_zh: "COEX商場",
            description: "Korea's largest underground mall, SMTOWN must-visit",
            description_zh: "韓國最大地下商場，SMTOWN粉絲必去",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
            address: "513 Yeongdong-daero, Gangnam",
            hours: "10:00-22:00",
            price_range: "$$",
            rating: "4.4",
            review_count: "32,456",
            best_time: "任何時間",
            duration: "3-4小時",
            cost_level: "medium",
            transit: "Metro 奉恩寺站",
            tips: ["室內恐龍博物館", "星空圖書館", "SMTOWN體驗館"],
            tags: ["購物", "室內", "K-pop"]
          },
          {
            name: "Garosu-gil",
            name_zh: "林蔭道",
            description: "Seoul's most stylish shopping street lined with ginkgo trees",
            description_zh: "首爾最時尚嘅購物街，兩旁種滿銀杏樹",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1545699684-5aefd977e0ce?w=800",
            address: "Garosu-gil, Sinsa-dong",
            hours: "店鋪各異",
            price_range: "$$",
            rating: "4.5",
            review_count: "21,876",
            best_time: "秋天銀杏季",
            duration: "2-3小時",
            cost_level: "medium",
            transit: "Metro 聖水站",
            tips: ["秋天好靚", "特色咖啡店林立"],
            tags: ["購物", "咖啡", "打卡"]
          }
        ]
      },
      {
        name: "Insadong & Bukchon",
        name_zh: "仁寺洞 & 北村",
        description: "Traditional Korean culture and hanok villages",
        description_zh: "傳統韓國文化同韓屋村",
        places: [
          {
            name: "Bukchon Hanok Village",
            name_zh: "北村韓屋村",
            description: "Preserved traditional Korean houses over 600 years old",
            description_zh: "保存完好嘅傳統韓屋建築群",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1547693222-33d4e7b8d5a9?w=800",
            address: "Bukchon-dong, Jongno",
            hours: "24小時 (博物館各有時間)",
            price_range: "免費",
            rating: "4.6",
            review_count: "38,765",
            best_time: "早上或黃昏",
            duration: "2-3小時",
            cost_level: "free",
            transit: "Metro 安國站",
            tips: ["穿韓服免費進入", "好適合影相", "建議參加導賞團"],
            tags: ["傳統", "建築", "打卡"]
          },
          {
            name: "Gyeongno-buk-ro",
            name_zh: "景福宮到曹溪寺散步路",
            description: "Traditional cultural walking route in central Seoul",
            description_zh: "首爾市中心嘅傳統文化路線",
            type: "activity",
            image: "https://images.unsplash.com/photo-1558626640-0af11a6d2d8c?w=800",
            address: "Gyeongno, Jongno",
            hours: "24小時",
            price_range: "免費",
            rating: "4.5",
            review_count: "15,432",
            best_time: "春天或秋天",
            duration: "1-2小時",
            cost_level: "free",
            transit: "Metro 景福宮站",
            tips: ["途經國立民俗博物館", "春天有櫻花"],
            tags: ["散步", "文化", "免費"]
          },
          {
            name: "Ssamzie-gil",
            name_zh: "仁寺洞地下街",
            description: "Korean culture mall combining traditional and modern",
            description_zh: "傳統與現代結合嘅韓國文化商場",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1538485399081-7195a3a8d9a4?w=800",
            address: "Insa-dong",
            hours: "10:00-20:00",
            price_range: "$$",
            rating: "4.3",
            review_count: "18,234",
            best_time: "下午",
            duration: "2-3小時",
            cost_level: "medium",
            transit: "Metro 仁寺洞站",
            tips: ["手工藝品好正", "傳統茶室"],
            tags: ["購物", "文化", "地道"]
          }
        ]
      },
      {
        name: "Hongdae & Sinchon",
        name_zh: "弘大 & 新村",
        description: "Youth culture, arts and nightlife",
        description_zh: "青少年文化、藝術同夜生活",
        places: [
          {
            name: "Hongdae Free Market",
            name_zh: "弘大自由市場",
            description: "Weekend handmade crafts market",
            description_zh: "每週末舉行嘅手工藝品市集",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800",
            address: "Hongdae Square, Mapo-gu",
            hours: "每週六日13:00-18:00",
            price_range: "免費",
            rating: "4.4",
            review_count: "12,876",
            best_time: "週末下午",
            duration: "1-2小時",
            cost_level: "free",
            transit: "Metro 弘大入口站",
            tips: ["本地藝術家作品", "街頭表演"],
            tags: ["市集", "藝術", "地道"]
          },
          {
            name: "K-Star Road",
            name_zh: "K星路",
            description: "K-pop idol themed street with giant hand statues",
            description_zh: "以K-pop偶像為主題嘅特色街道",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1545699684-5aefd977e0ce?w=800",
            address: "Apgujeong, Gangnam",
            hours: "24小時",
            price_range: "免費",
            rating: "4.3",
            review_count: "24,567",
            best_time: "任何時間",
            duration: "30分鐘-1小時",
            cost_level: "free",
            transit: "Metro 江南站",
            tips: ["3米高巨型手雕像", "各大娛樂公司位置"],
            tags: ["K-pop", "打卡", "追星"]
          },
          {
            name: "Spaland",
            name_zh: "汗蒸幕體驗",
            description: "Traditional Korean sauna with various temperature rooms",
            description_zh: "傳統韓式桑拿，多種不同溫度嘅汗蒸房",
            type: "activity",
            image: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=800",
            address: "Various locations in Hongdae",
            hours: "24小時",
            price_range: "€",
            rating: "4.5",
            review_count: "9,876",
            best_time: "任何時間",
            duration: "2-4小時",
            cost_level: "low",
            transit: "Metro 弘大入口站",
            tips: ["體驗韓國傳統文化", "韓劇常見場景"],
            tags: ["體驗", "放鬆", "地道"]
          }
        ]
      },
      {
        name: "Myeongdong & Namdaemun",
        name_zh: "明洞 & 南大門",
        description: "Shopping and street food paradise",
        description_zh: "購物同街頭美食天堂",
        places: [
          {
            name: "Myeongdong Shopping Street",
            name_zh: "明洞購物街",
            description: "Seoul's most bustling shopping area, cosmetics heaven",
            description_zh: "首爾最繁華購物區，化妝品天堂",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
            address: "Myeongdong",
            hours: "10:00-22:00",
            price_range: "$$",
            rating: "4.4",
            review_count: "56,789",
            best_time: "下午至夜晚",
            duration: "3-4小時",
            cost_level: "medium",
            transit: "Metro 明洞站",
            tips: ["化妝品最平", "地下商場好大", "街頭美食多"],
            tags: ["購物", "化妝品", "美食"]
          },
          {
            name: "Namsan Seoul Tower",
            name_zh: "南山首爾塔",
            description: "Seoul landmark with 360-degree city views",
            description_zh: "首爾地標，塔頂可360度俯瞰全市",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1545699684-5aefd977e0ce?w=800",
            address: "Yongsan District",
            hours: "10:00-23:00",
            price_range: "€€",
            rating: "4.5",
            review_count: "48,234",
            best_time: "日落或夜晚",
            duration: "2-3小時",
            cost_level: "medium",
            transit: "地鐵4號線 至 公營客運站",
            tips: ["情侶鎖牆", "夜景好靚", "可以坐纜車上山"],
            tags: ["夜景", "地標", "打卡"]
          },
          {
            name: "Myeongdong Kyoja",
            name_zh: "明洞餃子",
            description: "70-year old traditional Korean restaurant",
            description_zh: "70年歷史嘅傳統韓食老店",
            type: "food",
            image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800",
            address: "29 Myeongdong-gil, Jung-gu",
            hours: "11:00-21:30",
            price_range: "€",
            rating: "4.6",
            review_count: "18,765",
            best_time: "午餐或晚餐",
            duration: "1小時",
            cost_level: "low",
            transit: "Metro 明洞站",
            tips: ["必試綠豆煎餅", "辣炒年糕", "餃子"],
            tags: ["美食", "地道", "老店"]
          }
        ]
      }
    ]
  },
  bangkok: {
    city: "Bangkok",
    city_zh: "曼谷",
    emoji: "🏯",
    description: "Land of smiles, temples and food city",
    description_zh: "微笑國度，佛寺與美食之城",
    best_season: "冬季 (11-2月)",
    avg_temp: "29°C",
    currency: "THB (฿)",
    language: "泰語",
    tips: [
      "突突車要講價",
      "皇宮著裝要求嚴格",
      "路邊美食好便宜但要小心",
      "天氣炎熱多喝水"
    ],
    areas: [
      {
        name: "Old City (Rattanakosin)",
        name_zh: "舊城 (拉達那哥欣)",
        description: "Historic heart with grand palaces and temples",
        description_zh: "歷史中心，大皇宮同寺廟",
        places: [
          {
            name: "Grand Palace",
            name_zh: "大皇宮",
            description: "Thai Royal Palace, home to Emerald Buddha temple",
            description_zh: "泰國皇家宮殿，佛教聖地玉佛寺所在地",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
            address: "Na Phra Lan Rd, Phra Borom Maha Ratchawang",
            hours: "8:30-15:30",
            price_range: "€€€",
            rating: "4.6",
            review_count: "45,678",
            best_time: "早上",
            duration: "2-3小時",
            cost_level: "high",
            transit: "碼頭至 Tha Chang 站",
            tips: ["穿著要端莊", "門票包含玉佛寺", "建議預導賞團"],
            tags: ["皇宮", "寺廟", "必去"]
          },
          {
            name: "Wat Pho",
            name_zh: "臥佛寺",
            description: "Oldest temple in Bangkok with 46m reclining Buddha",
            description_zh: "泰國最古老寺廟，46米巨型臥佛像",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800",
            address: "2 Sanam Chai Rd, Wat Pho",
            hours: "8:00-18:30",
            price_range: "€",
            rating: "4.7",
            review_count: "38,234",
            best_time: "早上",
            duration: "1-2小時",
            cost_level: "low",
            transit: "碼頭至 Tha Tien 站",
            tips: ["傳統泰式按摩發源地", "可以試泰式按摩"],
            tags: ["寺廟", "佛像", "按摩"]
          },
          {
            name: "Khao San Road",
            name_zh: "考山路",
            description: "Backpacker heaven with bars, restaurants and massage",
            description_zh: "背包客天堂，酒吧、餐廳、按摩店林立",
            type: "nightlife",
            image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
            address: "Khao San Rd, Phra Nakhon",
            hours: "24小時",
            price_range: "€",
            rating: "4.2",
            review_count: "28,876",
            best_time: "夜晚",
            duration: "2-3小時",
            cost_level: "low",
            transit: "突突車或的士",
            tips: ["背包客聖地", "街頭按摩平", "夜生活熱點"],
            tags: ["夜生活", "美食", "酒吧"]
          }
        ]
      },
      {
        name: "Chinatown (Yaowarat)",
        name_zh: "唐人街 (耀華力路)",
        description: "Vibrant Chinese-Thai neighborhood with street food",
        description_zh: "繁華嘅唐人街區域，泰式美食",
        places: [
          {
            name: "Yaowarat Road",
            name_zh: "耀華力路",
            description: "Core street of Bangkok's Chinatown",
            description_zh: "曼谷唐人街核心街道",
            type: "food",
            image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800",
            address: "Yaowarat Rd, Chinatown",
            hours: "店鋪各異",
            price_range: "$$",
            rating: "4.4",
            review_count: "22,345",
            best_time: "夜晚",
            duration: "2-3小時",
            cost_level: "medium",
            transit: "MRT 至 Sam Yot 站",
            tips: ["金店、燕窩店", "美食多"],
            tags: ["美食", "購物", "唐人街"]
          },
          {
            name: "Thieves' Market",
            name_zh: "扒手市場",
            description: "Bangkok's largest open-air market",
            description_zh: "曼谷最大嘅露天市場",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800",
            address: "Sampeng Lane, Chinatown",
            hours: "9:00-18:00",
            price_range: "€",
            rating: "4.1",
            review_count: "8,765",
            best_time: "早上",
            duration: "1-2小時",
            cost_level: "low",
            transit: "MRT 至 Sam Yot 站",
            tips: ["古董、手錶", "要講價"],
            tags: ["購物", "市場", "地道"]
          },
          {
            name: "T&K Seafood",
            name_zh: "T&K海鮮",
            description: "Most popular seafood stall in Chinatown",
            description_zh: "唐人街最人氣海鮮大排檔",
            type: "food",
            image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758359?w=800",
            address: "49 Yaowarat Rd, Chinatown",
            hours: "16:00-02:00",
            price_range: "€€",
            rating: "4.5",
            review_count: "15,678",
            best_time: "晚餐",
            duration: "1-2小時",
            cost_level: "medium",
            transit: "MRT 至 Sam Yot 站",
            tips: ["炭燒大頭蝦", "咖喱蟹", "泰式炒含笑"],
            tags: ["美食", "海鮮", "必試"]
          }
        ]
      },
      {
        name: "Sukhumvit & Silom",
        name_zh: "素坤逸 & 是隆",
        description: "Modern Bangkok with shopping and nightlife",
        description_zh: "現代曼谷，購物同夜生活",
        places: [
          {
            name: "Lumpini Park",
            name_zh: "倫批尼公園",
            description: "Large green oasis in central Bangkok",
            description_zh: "曼谷市中心大型綠洲，適合晨運",
            type: "nature",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
            address: "Rama IV Road, Silom",
            hours: "4:30-21:00",
            price_range: "免費",
            rating: "4.4",
            review_count: "19,876",
            best_time: "清晨或黃昏",
            duration: "1-2小時",
            cost_level: "free",
            transit: "MRT 至 Lumphini 站",
            tips: ["太極拳、健身", "水上單車"],
            tags: ["公園", "運動", "免費"]
          },
          {
            name: "Terminal 21",
            name_zh: "21號航站樓商場",
            description: "Airport-themed shopping mall with global food court",
            description_zh: "以國際機場為主題嘅特色商場",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
            address: "88 Sukhumvit Soi 19, Wattana",
            hours: "10:00-22:00",
            price_range: "$$",
            rating: "4.5",
            review_count: "31,234",
            best_time: "任何時間",
            duration: "3-4小時",
            cost_level: "medium",
            transit: "BTS 至 Asok 站",
            tips: ["每層代表不同城市", "全球美食廣場"],
            tags: ["購物", "美食", "室內"]
          },
          {
            name: "Patpong Night Market",
            name_zh: "巴彭夜市",
            description: "Famous night market with copies and street food",
            description_zh: "曼谷著名夜市，模仿製品與街頭小食",
            type: "nightlife",
            image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
            address: "Patpong Rd, Silom",
            hours: "18:00-02:00",
            price_range: "€",
            rating: "4.0",
            review_count: "12,345",
            best_time: "夜晚",
            duration: "1-2小時",
            cost_level: "low",
            transit: "BTS 至 Sala Daeng 站",
            tips: ["名牌手袋、手錶", "要講價"],
            tags: ["夜市", "購物", "夜生活"]
          }
        ]
      },
      {
        name: "Chatuchak & Ratchada",
        name_zh: "乍都節 & 拉差達",
        description: "Massive weekend market and entertainment district",
        description_zh: "大型週末市集同娛樂區",
        places: [
          {
            name: "Chatuchak Weekend Market",
            name_zh: "乍都節週末市集",
            description: "One of the world's largest weekend markets",
            description_zh: "世界最大型週末市集之一",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800",
            address: "Chatuchak",
            hours: "週六日 9:00-18:00",
            price_range: "€",
            rating: "4.6",
            review_count: "42,567",
            best_time: "早上",
            duration: "4-6小時",
            cost_level: "low",
            transit: "BTS 至 Mo Chit 站",
            tips: ["15,000+ 店鋪", "帶水，做好防曬", "分區明確"],
            tags: ["購物", "市集", "必去"]
          },
          {
            name: "Rod Fai Market",
            name_zh: "火車頭市集",
            description: "Vintage and antique market with night atmosphere",
            description_zh: "復古同古董市場，夜間氛圍",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800",
            address: "Chatuchak",
            hours: "週五六日 17:00-01:00",
            price_range: "$$",
            rating: "4.4",
            review_count: "18,234",
            best_time: "夜晚",
            duration: "3-4小時",
            cost_level: "medium",
            transit: "MRT 至 Kamphaeng Phet 站",
            tips: ["復古物品", "現場音樂", "美食攤"],
            tags: ["購物", "復古", "夜生活"]
          },
          {
            name: "Esplanade Ratchada",
            name_zh: "拉差達火車夜市",
            description: "Modern night market behind shopping mall",
            description_zh: "商場後面嘅現代夜市",
            type: "nightlife",
            image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
            address: "Esplanade Mall, Ratchadaphisek",
            hours: "17:00-23:00",
            price_range: "€",
            rating: "4.3",
            review_count: "24,567",
            best_time: "夜晚",
            duration: "2-3小時",
            cost_level: "low",
            transit: "MRT 至 Thailand Cultural Centre 站",
            tips: ["時尚服裝", "美食", "室內有冷氣"],
            tags: ["夜市", "購物", "美食"]
          }
        ]
      }
    ]
  }
};


// RSS sources by category
const RSS_SOURCES: Record<string, {url: string, source: string}[]> = {
  finance: [
    { url: 'https://finance.yahoo.com/news/rssindex', source: 'Yahoo Finance' },
    { url: 'http://feeds.marketwatch.com/marketwatch/topstories/', source: 'MarketWatch' },
    { url: 'https://www.investing.com/rss/news_25.rss', source: 'Investing.com' },
  ],
  crypto: [
    { url: 'https://cointelegraph.com/rss', source: 'CoinTelegraph' },
    { url: 'https://www.coindesk.com/arc/outboundfeeds/rss/', source: 'CoinDesk' },
    { url: 'https://cryptopanic.com/news/rss/', source: 'CryptoPanic' },
  ],
  business: [
    { url: 'https://www.reutersagency.com/feed/?taxonomy=best-topics&post_type=best', source: 'Reuters' },
    { url: 'https://www.investing.com/rss/news.rss', source: 'Investing.com' },
  ],
  technology: [
    { url: 'https://techcrunch.com/feed/', source: 'TechCrunch' },
    { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge' },
    { url: 'https://www.wired.com/feed/rss', source: 'Wired' },
  ],
  health: [
    { url: 'https://rss.msn.com/zh-hk', source: 'MSN Health' },
    { url: 'https://www.bbc.com/news/health/rss.xml', source: 'BBC Health' },
    { url: 'https://news.google.com/rss/search?q=health+medical+news&hl=en-US&gl=US&ceid=US:en', source: 'Google Health' },
  ],
  gaming: [
    { url: 'https://www.gamespot.com/feed/', source: 'GameSpot' },
    { url: 'https://kotaku.com/rss', source: 'Kotaku' },
    { url: 'https://www.ign.com/rss.xml', source: 'IGN' },
    { url: 'https://www.polygon.com/rss/index', source: 'Polygon' },
  ],
  food: [
    { url: 'https://www.epicurious.com/feed/rss', source: 'Epicurious' },
    { url: 'https://www.bonappetit.com/feed/rss', source: 'Bon Appétit' },
    { url: 'https://www.food.com/rss', source: 'Food.com' },
  ],
  travel: [
    // Travel uses static curated data - see TRAVEL_GUIDES
  ],
  ai_art: [
    { url: 'https://www.theverge.com/rss/index.xml', source: 'The Verge AI' },
    { url: 'https://techcrunch.com/feed/', source: 'TechCrunch AI' },
    { url: 'https://www.artnome.com/feed/', source: 'Artnome AI Art' },
  ],
  art: [
    { url: 'https://www.artsy.net/articles.rss', source: 'Artsy' },
    { url: 'https://www.artforum.com/rss', source: 'Artforum' },
  ],
  astronomy: [
    { url: 'https://www.nasa.gov/rss/dyn/breaking_news.rss', source: 'NASA' },
    { url: 'https://www.universetoday.com/universetoday.xml', source: 'Universe Today' },
  ],
  mystery: [
    { url: 'https://news.google.com/rss/search?q=ghost%20paranormal%20supernatural&hl=en-US&gl=US&ceid=US:en', source: 'Paranormal' },
    { url: 'https://news.google.com/rss/search?q=UFO%20alien%20extraterrestrial&hl=en-US&gl=US&ceid=US:en', source: 'UFO News' },
  ],
  data_journalism: [
    // Official statistics bureaus
    { url: 'https://www.ons.gov.uk/feeds/a0099736.rss', source: 'UK ONS' },
    { url: 'https://www.census.gov/library/current/news.rss.xml', source: 'US Census' },
    // Data journalism outlets
    { url: 'https://feeds.bbci.co.uk/news/rss.xml', source: 'BBC Data' },
    { url: 'https://www.theguardian.com/data/rss', source: 'Guardian Data' },
    // Big data & AI statistics
    { url: 'https://news.google.com/rss/search?q=AI%20statistics%20market%20report&hl=en-US&gl=US&ceid=US:en', source: 'AI Market Data' },
    { url: 'https://news.google.com/rss/search?q=global%20economy%20data%20GDP%20statistics&hl=en-US&gl=US&ceid=US:en', source: 'Economy Stats' },
    // Our World in Data & research
    { url: 'https://ourworldindata.org/rss', source: 'Our World in Data' },
    { url: 'https://data.gov.uk/rss/news', source: 'UK Open Data' },
    // Tech & digital economy data
    { url: 'https://news.google.com/rss/search?q=digital%20economy%20internet%20usage%20stats&hl=en-US&gl=US&ceid=US:en', source: 'Digital Stats' },
    { url: 'https://news.google.com/rss/search?q=population%20demographics%20census%20data&hl=en-US&gl=US&ceid=US:en', source: 'Demographics' },
  ],
}


// Clean HTML from text
function cleanHtml(text: string): string {
  return text
    .replace(/<!\[CDATA\[([\s\S]*?)\]/gi, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim()
}

// Extract text from CDATA or plain text
function extractText(content: string): string {
  const cdata = content.match(/<!\[CDATA\[([\s\S]*?)\]>/i)
  return cleanHtml(cdata ? cdata[1] : content)
}

// Extract image from RSS item
function extractImage(itemXml: string): string {
  const mediaTags = itemXml.match(/<media:content[^>]*>/gi) || []
  if (mediaTags.length > 0) {
    let bestUrl = '', bestWidth = 0
    for (const tag of mediaTags) {
      const urlMatch = tag.match(/url="([^"]+)"/i)
      const widthMatch = tag.match(/width="(\d+)"/i)
      if (urlMatch && widthMatch) {
        const width = parseInt(widthMatch[1])
        if (width > bestWidth) { bestWidth = width; bestUrl = urlMatch[1] }
      }
    }
    if (bestUrl) return bestUrl
  }
  const thumb = itemXml.match(/<media:thumbnail[^>]*url="([^"]+)"/i)
  if (thumb) return thumb[1]
  const enc = itemXml.match(/<enclosure[^>]*url="([^"]+)"/i)
  if (enc) return enc[1]
  return ''
}

// Translate text using Google Translate API (free)
async function translateText(text: string, targetLang: string): Promise<string> {
  if (!text || text.length < 2) return text
  const translateTarget = targetLang === 'zh-TW' ? 'zh-TW' : targetLang === 'zh-CN' ? 'zh-CN' : 'en'
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${translateTarget}&dt=t&q=${encodeURIComponent(text)}`
    const res = await fetch(url, { signal: AbortSignal.timeout(5000) })
    if (!res.ok) return text
    const data = await res.json()
    if (data && data[0] && data[0][0] && data[0][0][0]) return data[0][0][0]
  } catch (e) { console.error(`[Translate] Error:`, e) }
  return text
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category') || 'finance'
  const lang = searchParams.get('lang') || 'zh-TW'
  
  // Special handling for travel - return curated travel guides
  if (category === 'travel') {
    const cityFilter = searchParams.get('city') || 'all'
    
    // Build city metadata summary
    const citySummaries = Object.entries(TRAVEL_GUIDES).map(([cityId, cityData]) => {
      const totalPlaces = cityData.areas.reduce((sum: number, area: any) => sum + area.places.length, 0)
      const avgRating = (cityData.areas.flatMap((a: any) => a.places)
        .reduce((sum: number, p: any) => sum + (parseFloat(p.rating) || 4.5), 0) / totalPlaces).toFixed(1)
      return {
        id: cityId,
        city: cityData.city,
        city_zh: cityData.city_zh,
        emoji: cityData.emoji,
        description: cityData.description,
        description_zh: cityData.description_zh,
        best_season: cityData.best_season,
        avg_temp: cityData.avg_temp,
        currency: cityData.currency,
        language: cityData.language,
        tips: cityData.tips,
        total_places: totalPlaces,
        avg_rating: avgRating,
        areas: cityData.areas.map((a: any) => ({
          name: a.name,
          name_zh: a.name_zh,
          place_count: a.places.length
        }))
      }
    })

    // Build travel items
    const travelItems: any[] = []
    
    Object.entries(TRAVEL_GUIDES).forEach(([cityId, cityData]) => {
      // Skip if filtering by city
      if (cityFilter !== 'all' && cityId !== cityFilter) return
      
      cityData.areas.forEach((area: any) => {
        area.places.forEach((place: any) => {
          const emoji = cityId === 'tokyo' ? '🗼' : cityId === 'paris' ? '🗼' : cityId === 'seoul' ? '🏯' : '🏯'
          const rating = place.rating || '4.5'
          const bestTime = place.best_time || place.hours || '建議停留2-3小時'
          
          // Build related places from same city
          const relatedPlaces = cityData.areas
            .flatMap((a: any) => a.places)
            .filter((p: any) => p.name !== place.name)
            .slice(0, 3)
            .map((p: any) => ({
              name: p.name,
              name_zh: p.name_zh,
              type: p.type
            }))
          
          travelItems.push({
            id: 'travel-' + cityId + '-' + place.name_zh.replace(/\s/g, '-'),
            title: place.name_zh,
            title_translated: place.name_zh,
            desc: place.description_zh + '。最佳遊覽時間：' + bestTime + '。評分：' + rating + '/5.0。',
            desc_translated: place.description_zh + '。最佳遊覽時間：' + bestTime + '。評分：' + rating + '/5.0。',
            translated: true,
            link: place.website || ('https://www.google.com/search?q=' + encodeURIComponent(place.name_zh + ' ' + cityData.city_zh)),
            pubDate: new Date().toISOString(),
            source: cityData.city_zh + ' · ' + area.name_zh,
            img: true,
            img_url: place.image,
            emoji: emoji,
            name: place.name_zh,
            name_zh: place.name_zh,
            name_en: place.name,
            city: cityData.city_zh,
            city_en: cityData.city,
            city_id: cityId,
            area: area.name_zh,
            best_time: bestTime,
            duration: place.duration || '2-3小時',
            rating: rating,
            review_count: place.review_count || '10,000+',
            address: place.address || '',
            hours: place.hours || '',
            price_range: place.price_range || '',
            cost_level: place.cost_level || 'medium',
            transit: place.transit || '',
            type: place.type || 'attraction',
            tags: place.tags || [],
            tips: place.tips || [],
            related_places: relatedPlaces,
            blog_content: place.description_zh + '\n\n遊覽建議：\n' + (place.tips ? place.tips.map((t: string) => '• ' + t).join('\n') : ''),
            city_emoji: cityData.emoji,
            city_description: cityData.description_zh,
            best_season: cityData.best_season,
            avg_temp: cityData.avg_temp,
          })
        })
      })
    })
    
    // Get unique place types for filtering
    const placeTypes = [...new Set(travelItems.map((item: any) => item.type))]
    
    return NextResponse.json({
      success: true,
      category: 'travel',
      items: travelItems,
      isTravelGuide: true,
      citySummaries: citySummaries,
      placeTypes: placeTypes,
      timestamp: Date.now()
    })
  }

  const now = Date.now()
  const MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000
  const sources = RSS_SOURCES[category as keyof typeof RSS_SOURCES] || RSS_SOURCES.world

  const sourcePromises = sources.map(async (source) => {
    try {
      const res = await fetch(source.url, { signal: AbortSignal.timeout(10000) })

      if (!res.ok) return []
      const xml = await res.text()
      const itemMatches = xml.match(/<item[^>]*>([\s\S]*?)<\/item>/gi) || []
      const sourceItems: any[] = []

      for (const itemXml of itemMatches.slice(0, 15)) {
        const titleMatch = itemXml.match(/<title>([\s\S]*?)<\/title>/i)
        const descMatch = itemXml.match(/<description>([\s\S]*?)<\/description>/i)
        const linkMatch = itemXml.match(/<link>([\s\S]*?)<\/link>/i)
        const dateMatch = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/i)
        
        const title = titleMatch ? extractText(titleMatch[1]) : ''
        const desc = descMatch ? extractText(descMatch[1]) : ''
        const link = linkMatch ? extractText(linkMatch[1]) : ''
        const pubDateStr = dateMatch ? extractText(dateMatch[1]) : ''
        
        let pubTimestamp = 0
        if (pubDateStr) {
          const parsedDate = new Date(pubDateStr)
          pubTimestamp = isNaN(parsedDate.getTime()) ? 0 : parsedDate.getTime()
        }

        if (pubTimestamp !== 0 && (now - pubTimestamp) > MAX_AGE_MS) continue

        const img = extractImage(itemXml)
        
        if (title && link) {
          sourceItems.push({
            id: Buffer.from(link).toString('base64').slice(0, 16),
            title,
            desc: desc.slice(0, 200),
            link,
            pubDate: pubDateStr,
            pubTimestamp: pubTimestamp || now,
            img: !!img,
            img_url: img || '',
            source: source.source,
          })
        }
      }
      return sourceItems
    } catch (err) {
      console.error(`Failed to fetch ${source.url}:`, err)
      return []
    }
  })

  const results = await Promise.all(sourcePromises)
  const allItems = results.flat().sort((a, b) => b.pubTimestamp - a.pubTimestamp)
  const itemsToTranslate = allItems.slice(0, 15)
  const remainingItems = allItems.slice(15, 30)

  const translatedItems = await Promise.all(itemsToTranslate.map(async (item) => {
    const isChineseSource = /[\u4e00-\u9fff]/.test(item.title)
    let needsTranslation = false
    if (lang === 'en') needsTranslation = isChineseSource
    else if (lang === 'zh-TW' || lang === 'zh-CN') needsTranslation = !isChineseSource
    
    if (needsTranslation) {
      try {
        const [tTitle, tDesc] = await Promise.all([
          translateText(item.title, lang),
          item.desc ? translateText(item.desc, lang) : Promise.resolve('')
        ])
        return { ...item, title_translated: tTitle, desc_translated: tDesc, translated: true }
      } catch (e) { console.error("[Translation error]", e) }
    }
    return { ...item, title_translated: item.title, desc_translated: item.desc, translated: false }
  }))

  const finalRemaining = remainingItems.map(item => ({
    ...item,
    title_translated: item.title,
    desc_translated: item.desc,
    translated: false
  }))

  const combined = [...translatedItems, ...finalRemaining]
  const newestFive = combined.slice(0, 5)
  const others = combined.slice(5).sort(() => Math.random() - 0.5)
  const finalItems = [...newestFive, ...others].slice(0, 25)
  
  
// Travel Guide Data - Detailed city guides with areas and places

// Generate travel items from TRAVEL_GUIDES
function generateTravelItems(city: string): any[] {
  const guide = TRAVEL_GUIDES[city]
  if (!guide) return []
  
  const items: any[] = []
  
  for (const area of guide.areas) {
    for (const place of area.places) {
      items.push({
        id: `${city}-${area.name}-${place.name}`.replace(/[^a-zA-Z0-9]/g, '_'),
        title: place.name,
        title_translated: place.name_zh,
        desc: place.description,
        desc_translated: place.description_zh,
        link: place.image,
        pubDate: new Date().toISOString(),
        source: `${guide.city} · ${area.name}`,
        img: true,
        img_url: place.image,
        translated: true,
        type: place.type,
        city: guide.city_zh,
        area: area.name,
        address: place.address,
        hours: place.hours,
        price_range: place.price_range
      })
    }
  }
  
  return items
}


return NextResponse.json({
    success: true,
    category,
    items: finalItems,
    timestamp: now,
  })
}
