import { NextRequest, NextResponse } from 'next/server'

const TRAVEL_GUIDES: Record<string, {
  city: string;
  city_zh: string;
  description: string;
  areas: {
    name: string;
    places: {
      name: string;
      name_zh: string;
      description: string;
      description_zh: string;
      type: 'attraction' | 'food' | 'activity' | 'shopping';
      image: string;
      address: string;
      hours?: string;
      price_range?: string;
    }[];
  }[];
}> = {
  tokyo: {
    city: "Tokyo",
    city_zh: "東京",
    description: "傳統與現代完美融合嘅國際大都會",
    areas: [
      {
        name: "Shibuya & Harajuku",
        places: [
          {
            name: "Shibuya Crossing",
            name_zh: "澀谷十字路口",
            description: "世界上最繁忙嘅行人十字路口，每個紅綠燈有大約3000人同時過馬路",
            description_zh: "全球最繁忙嘅行人過路處，感受東京嘅急速脈搏",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800",
            address: "Shibuya, Tokyo",
            hours: "24小時",
            price_range: "免費"
          },
          {
            name: "Meiji Shrine",
            name_zh: "明治神宮",
            description: "供奉明治天皇嘅神社，周圍係一片寧靜嘅森林",
            description_zh: "東京市中心嘅綠洲，感受傳統日本文化",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=800",
            address: "1-1 Yoyogikamizonocho, Shibuya",
            hours: "日出至日落",
            price_range: "免費"
          },
          {
            name: "Takeshita Street",
            name_zh: "竹下通",
            description: "原宿最具人氣嘅潮流購物街，適合年輕人",
            description_zh: "日本街頭時尚集中地，潮流服飾、化妝品、甜品",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1557409518-691ebcd96038?w=800",
            address: "Takeshita Street, Harajuku",
            hours: "11:00-20:00",
            price_range: "$$"
          }
        ]
      },
      {
        name: "Asakusa & Ueno",
        places: [
          {
            name: "Senso-ji Temple",
            name_zh: "淺草寺",
            description: "東京最古老嘅佛教寺廟，标志係雷門大燈籠",
            description_zh: "感受傳統東京嘅最佳去處，香火鼎盛",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800",
            address: "2-3-1 Asakusa, Taito",
            hours: "6:00-17:00",
            price_range: "免費"
          },
          {
            name: "Tsukiji Outer Market",
            name_zh: "築地場外市場",
            description: "新鮮海鮮同日本料理嘅天堂",
            description_zh: "品嚐最地道嘅日本壽司、海鮮飯",
            type: "food",
            image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800",
            address: "4-16-2 Tsukiji, Chuo",
            hours: "5:00-14:00",
            price_range: "$$$"
          },
          {
            name: "Ueno Park",
            name_zh: "上野公園",
            description: "東京市中心嘅大型公園，櫻花季節特別美",
            description_zh: "博物館、動物園、神社匯集嘅文化區",
            type: "activity",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
            address: "Uenokoen, Taito",
            hours: "5:00-23:00",
            price_range: "免費"
          }
        ]
      },
      {
        name: "Shinjuku & Kabukicho",
        places: [
          {
            name: "Tokyo Metropolitan Building",
            name_zh: "東京都廳",
            description: "免費觀景台，俯瞰東京全景",
            description_zh: "45樓免費觀景台，360度無遮擋東京景色",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800",
            address: "2-8-1 Nishi-shinjuku",
            hours: "9:30-23:00",
            price_range: "免費"
          },
          {
            name: "Golden Gai",
            name_zh: "黃金街",
            description: "保存完好嘅戰後小巷，充滿特色酒吧",
            description_zh: "約200間小型酒吧，每間只有幾個座位",
            type: "activity",
            image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800",
            address: "Kabukicho, Shinjuku",
            hours: "19:00-5:00",
            price_range: "$$"
          },
          {
            name: "Robot Restaurant",
            name_zh: "機械人餐廳",
            description: "前所未有嘅未來感表演體驗",
            description_zh: "霓虹燈、機械人表演、激光show",
            type: "activity",
            image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800",
            address: "1-7-1 Kabukicho",
            hours: "表演時間請查詢",
            price_range: "$$$"
          }
        ]
      },
      {
        name: "Akihabara & Akiba",
        places: [
          {
            name: "Yodobashi Camera",
            name_zh: "友都八喜",
            description: "日本最大型電器店，電子產品天堂",
            description_zh: "由相機到電腦、由遊戲機到玩具應有盡有",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1578000402869-3e2b1d0d0d00?w=800",
            address: "1-1 Kanda Hanaokacho, Chiyoda",
            hours: "9:30-22:00",
            price_range: "$$$"
          },
          {
            name: "Akihabara Electric Town",
            name_zh: "秋葉原電器城",
            description: "動畫、漫畫、遊戲、手辦集中地",
            description_zh: "動漫迷聖地，動畫、漫畫、遊戲、周邊商品",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800",
            address: "Akihabara",
            hours: "10:00-20:00",
            price_range: "$$"
          },
          {
            name: "Maid Cafe Experience",
            name_zh: "女僕咖啡廳",
            description: "獨特嘅角色扮演餐飲體驗",
            description_zh: "穿著女僕裝嘅服務員為你服務",
            type: "activity",
            image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800",
            address: "Multiple locations in Akihabara",
            hours: "11:00-21:00",
            price_range: "$$"
          }
        ]
      }
    ]
  },
  paris: {
    city: "Paris",
    city_zh: "巴黎",
    description: "浪漫之都，藝術與時尚嘅殿堂",
    areas: [
      {
        name: "Eiffel Tower & Champ de Mars",
        places: [
          {
            name: "Eiffel Tower",
            name_zh: "埃菲爾鐵塔",
            description: "巴黎地標，建於1889年世界博覽會",
            description_zh: "欣賞巴黎全景最佳位置，特別係日落時分",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce65f4?w=800",
            address: "Champ de Mars, 5 Avenue Anatole France",
            hours: "9:30-23:45",
            price_range: "€€"
          },
          {
            name: "Seine River Cruise",
            name_zh: "塞納河遊船",
            description: "從河面欣賞巴黎主要景點",
            description_zh: "45分鐘船程，途經巴黎聖母院、羅浮宮等",
            type: "activity",
            image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
            address: "Port de la Bourdonnais",
            hours: "10:00-22:00",
            price_range: "€€"
          },
          {
            name: "Trocadéro Gardens",
            name_zh: "特羅卡德羅花園",
            description: "欣賞埃菲爾鐵塔最佳位置",
            description_zh: "鐵塔靚景加日落，攝影師天堂",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
            address: "Place de Trocadéro",
            hours: "24小時",
            price_range: "免費"
          }
        ]
      },
      {
        name: "Le Marais & Île de la Cité",
        places: [
          {
            name: "Notre-Dame Cathedral",
            name_zh: "巴黎聖母院",
            description: "哥德式建築傑作，正在修復中",
            description_zh: "法國最具代表性嘅教堂之一",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=800",
            address: "6 Parvis Notre-Dame",
            hours: "修復中",
            price_range: "免費外觀"
          },
          {
            name: "Sainte-Chapelle",
            name_zh: "聖禮拜堂",
            description: "以其彩色玻璃窗聞名嘅哥德式教堂",
            description_zh: "上層小堂嘅13扇巨型彩窗非常壯觀",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800",
            address: "8 Boulevard du Palais",
            hours: "9:00-19:00",
            price_range: "€"
          },
          {
            name: "Place des Vosges",
            name_zh: "孚日廣場",
            description: "巴黎最古老嘅廣場，周圍係古典建築",
            description_zh: "優雅廣場，周杰倫MV拍攝地",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
            address: "Place des Vosges",
            hours: "24小時",
            price_range: "免費"
          }
        ]
      },
      {
        name: "Montmartre & Sacré-Cœur",
        places: [
          {
            name: "Sacré-Cœur Basilica",
            name_zh: "聖心堂",
            description: "羅馬拜占庭風格教堂，可俯瞰巴黎全景",
            description_zh: "欣賞巴黎無敵景觀嘅最佳地點",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800",
            address: "35 Rue du Chevalier de la Barre",
            hours: "6:00-22:30",
            price_range: "免費"
          },
          {
            name: "Le Consulat",
            name_zh: "雙風車咖啡館",
            description: "《花樣年華》取景地，法式咖啡館",
            description_zh: "體驗巴黎咖啡文化，Café au Lait配牛角包",
            type: "food",
            image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
            address: "18 Rue Amiral de Joinville",
            hours: "7:00-2:00",
            price_range: "€"
          },
          {
            name: "Place du Tertre",
            name_zh: "藝術家廣場",
            description: "蒙特婁藝術家聚集地，可以即場畫肖像",
            description_zh: "體驗巴黎藝術氛圍購買地道艺术品",
            type: "activity",
            image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800",
            address: "Place du Tertre",
            hours: "10:00-19:00",
            price_range: "€€"
          }
        ]
      },
      {
        name: "Le Louvre & Tuileries",
        places: [
          {
            name: "Louvre Museum",
            name_zh: "羅浮宮",
            description: "世界最大博物館，收藏超過380,000件展品",
            description_zh: "蒙娜麗莎、勝利女神、米羅的維納斯",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1499426600726-ac12f68c0d19?w=800",
            address: "Rue de Rivoli",
            hours: "9:00-18:00 (星期二休息)",
            price_range: "€€"
          },
          {
            name: "Palais Royal Gardens",
            name_zh: "皇宮花園",
            description: "羅浮宮旁嘅美麗園林，適合散步",
            description_zh: "結合古典與現代藝術的大型花園",
            type: "activity",
            image: "https://images.unsplash.com/photo-1503149779833-1de50ced91f4?w=800",
            address: "Place du Palais Royal",
            hours: "7:30-21:00",
            price_range: "免費"
          },
          {
            name: "Le Grand Louvre",
            name_zh: "大羅浮宮美食廣場",
            description: "羅浮宮內嘅美食廣場，多國料理",
            description_zh: "參觀博物館之餘品嚐法式甜品",
            type: "food",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
            address: "Cour Napoléon, Louvre",
            hours: "9:00-21:00",
            price_range: "€€"
          }
        ]
      }
    ]
  },
  seoul: {
    city: "Seoul",
    city_zh: "首爾",
    description: "K-pop、整容與美食嘅天堂",
    areas: [
      {
        name: "Gangnam & Apgujeong",
        places: [
          {
            name: "COEX Mall & Starfield",
            name_zh: "COEX商場",
            description: "韓國最大地下商場，SMTOWN粉絲必去",
            description_zh: "室內恐龍博物館、星空圖書館、SMTOWN體驗館",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
            address: "513 Yeongdong-daero, Gangnam",
            hours: "10:00-22:00",
            price_range: "$$"
          },
          {
            name: "Garosu-gil",
            name_zh: "林蔭道",
            description: "首爾最時尚嘅購物街，兩旁種滿銀杏樹",
            description_zh: "特色咖啡店、精品店、時尚餐廳",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1545699684-5aefd977e0ce?w=800",
            address: "Garosu-gil, Sinsa-dong",
            hours: "店鋪各異",
            price_range: "$$"
          },
          {
            name: "COEX Aquarium",
            name_zh: "COEX水族館",
            description: "韓國最大型主題水族館，超過40,000種生物",
            description_zh: "適合一家大小的室內活動",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
            address: "COEX Mall, Gangnam",
            hours: "10:00-20:00",
            price_range: "€€"
          }
        ]
      },
      {
        name: "Insadong & Bukchon",
        places: [
          {
            name: "Bukchon Hanok Village",
            name_zh: "北村韓屋村",
            description: "保存完好嘅傳統韓屋建築群",
            description_zh: "近600年歷史嘅傳統韓屋，感受古代韓國生活",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1547693222-33d4e7b8d5a9?w=800",
            address: "Bukchon-dong, Jongno",
            hours: "24小時 (博物館各有時間)",
            price_range: "免費"
          },
          {
            name: "Gyeongno-buk-ro",
            name_zh: "景福宮到曹溪寺散步路",
            description: "首爾市中心嘅傳統文化路線",
            description_zh: "途經國立民俗博物館、景福宮、三清洞",
            type: "activity",
            image: "https://images.unsplash.com/photo-1558626640-0af11a6d2d8c?w=800",
            address: "Gyeongno, Jongno",
            hours: "24小時",
            price_range: "免費"
          },
          {
            name: "Ssamzie-gil",
            name_zh: "仁寺洞地下街",
            description: "傳統與現代結合嘅韓國文化商場",
            description_zh: "手工藝品、傳統茶室、韓流商品",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1538485399081-7195a3a8d9a4?w=800",
            address: "Insa-dong",
            hours: "10:00-20:00",
            price_range: "$$"
          }
        ]
      },
      {
        name: "Hongdae & Sinchon",
        places: [
          {
            name: "Hongdae Free Market",
            name_zh: "弘大自由市場",
            description: "每週末舉行嘅手工藝品市集",
            description_zh: "本地藝術家作品、街頭表演、創意商品",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800",
            address: "Hongdae Square, Mapo-gu",
            hours: "每週六日13:00-18:00",
            price_range: "免費"
          },
          {
            name: "K-Star Road",
            name_zh: "K星路",
            description: "以K-pop偶像為主題嘅特色街道",
            description_zh: "3米高巨型手雕像、各大娛樂公司位置指引",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1545699684-5aefd977e0ce?w=800",
            address: "Apgujeong, Gangnam",
            hours: "24小時",
            price_range: "免費"
          },
          {
            name: "So止巖",
            name_zh: "汗蒸幕體驗",
            description: "傳統韓式桑拿，多種不同溫度嘅汗蒸房",
            description_zh: "體驗韓國傳統文化，休閒放鬆好去處",
            type: "activity",
            image: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?w=800",
            address: "Various locations in Hongdae",
            hours: "24小時",
            price_range: "€"
          }
        ]
      },
      {
        name: "Myeongdong & Namdaemun",
        places: [
          {
            name: "Myeongdong Shopping Street",
            name_zh: "明洞購物街",
            description: "首爾最繁華購物區，化妝品天堂",
            description_zh: "國際品牌、韓妝、地下購物商場",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
            address: "Myeongdong",
            hours: "10:00-22:00",
            price_range: "$$"
          },
          {
            name: "Namsan Seoul Tower",
            name_zh: "南山首爾塔",
            description: "首爾地標，塔頂可360度俯瞰全市",
            description_zh: "情侣鎖牆、觀景台、特色咖啡廳",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1545699684-5aefd977e0ce?w=800",
            address: "Yongsan District",
            hours: "10:00-23:00",
            price_range: "€€"
          },
          {
            name: "Myeongdong Kyoja",
            name_zh: "明洞餃子",
            description: "70年歷史嘅傳統韓食老店",
            description_zh: "必試綠豆煎餅、辣炒年糕、餃子",
            type: "food",
            image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800",
            address: "29 Myeongdong-gil, Jung-gu",
            hours: "11:00-21:30",
            price_range: "€"
          }
        ]
      }
    ]
  },
  bangkok: {
    city: "Bangkok",
    city_zh: "曼谷",
    description: "微笑國度，佛寺與美食之城",
    areas: [
      {
        name: "Old City (Rattanakosin)",
        places: [
          {
            name: "Grand Palace",
            name_zh: "大皇宮",
            description: "泰國皇家宮殿，佛教聖地玉佛寺所在地",
            description_zh: "金碧輝煌嘅宮殿建築，感受泰國皇家氣派",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
            address: "Na Phra Lan Rd, Phra Borom Maha Ratchawang",
            hours: "8:30-15:30",
            price_range: "€€€"
          },
          {
            name: "Wat Pho",
            name_zh: "臥佛寺",
            description: "泰國最古老寺廟，46米巨型臥佛像",
            description_zh: "傳統泰式按摩發源地，環境清幽",
            type: "attraction",
            image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800",
            address: "2 Sanam Chai Rd, Wat Pho",
            hours: "8:00-18:30",
            price_range: "€"
          },
          {
            name: "Khao San Road",
            name_zh: "考山路",
            description: "背包客天堂，酒吧、餐廳、按摩店林立",
            description_zh: "感受曼谷夜生活，平價美食與購物",
            type: "activity",
            image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
            address: "Khao San Rd, Phra Nakhon",
            hours: "24小時",
            price_range: "€"
          }
        ]
      },
      {
        name: "Chinatown (Yaowarat)",
        places: [
          {
            name: "Yaowarat Road",
            name_zh: "耀華力路",
            description: "曼谷唐人街核心街道",
            description_zh: "金店、燕窩店、中泰美食",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800",
            address: "Yaowarat Rd, Chinatown",
            hours: "店鋪各異",
            price_range: "$$"
          },
          {
            name: "Thieves' Market",
            name_zh: "扒手市場",
            description: "曼谷最大嘅露天市場",
            description_zh: "古董、手錶、皮革製品、數碼產品",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800",
            address: "Sampeng Lane, Chinatown",
            hours: "9:00-18:00",
            price_range: "€"
          },
          {
            name: "T&K Seafood",
            name_zh: "T&K海鮮",
            description: "唐人街最人氣海鮮大排檔",
            description_zh: "炭燒大頭蝦、咖喱蟹、泰式炒含笑",
            type: "food",
            image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758359?w=800",
            address: "49 Yaowarat Rd, Chinatown",
            hours: "16:00-02:00",
            price_range: "€€"
          }
        ]
      },
      {
        name: "Sukhumvit & Silom",
        places: [
          {
            name: "Lumpini Park",
            name_zh: "倫批尼公園",
            description: "曼谷市中心大型綠洲，適合晨運",
            description_zh: "太極拳、健身、水上單車",
            type: "activity",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
            address: "Rama IV Road, Silom",
            hours: "4:30-21:00",
            price_range: "免費"
          },
          {
            name: "Terminal 21",
            name_zh: "21號航站樓商場",
            description: "以國際機場為主題嘅特色商場",
            description_zh: "每層代表不同城市，全球美食廣場",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
            address: "88 Sukhumvit Soi 19, Wattana",
            hours: "10:00-22:00",
            price_range: "$$"
          },
          {
            name: "Patpong Night Market",
            name_zh: "巴彭夜市",
            description: "曼谷著名夜市，模仿製品與街頭小食",
            description_zh: "名牌手袋、手錶、衣物應有盡有",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
            address: "Patpong Rd, Silom",
            hours: "18:00-02:00",
            price_range: "€"
          }
        ]
      },
      {
        name: "Chatuchak & Ratchada",
        places: [
          {
            name: "Chatuchak Weekend Market",
            name_zh: "乍都節週末市場",
            description: "全球最大市集，超過15,000個攤位",
            description_zh: "衣服、寵物、植物、家品、美食",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800",
            address: "Kamphaeng Phet 2 Rd, Chatuchak",
            hours: "週六日9:00-18:00",
            price_range: "€"
          },
          {
            name: "Thai Boxing (Muay Thai)",
            name_zh: "泰拳表演",
            description: "體驗泰國國技，傳統與現代結合",
            description_zh: "感受泰拳文化，為拳手加油",
            type: "activity",
            image: "https://images.unsplash.com/photo-1540118497-22e3d2e45c27?w=800",
            address: "Ratchadamnoen Nok Rd",
            hours: "每晚18:00及20:00",
            price_range: "€€"
          },
          {
            name: "Rot Fai Market (Ratchada)",
            name_zh: "拉查達火車夜市",
            description: "大型夜市，工廠直銷商品",
            description_zh: "二手古董、潮流服飾、美食廣場",
            type: "shopping",
            image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800",
            address: "Ratchadaphisek Rd",
            hours: "17:00-01:00 (週二至日)",
            price_range: "€"
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
    { url: 'https://www.medicalnewstoday.com/rss', source: 'Medical News Today' },
    { url: 'https://health.google/news.rss', source: 'Google Health' },
    { url: 'https://feeds.feedburner.com/WebmdHealthNews', source: 'WebMD' },
    { url: 'https://www.healthline.com/rss', source: 'Healthline' },
  ],
  gaming: [
    { url: 'https://www.gamespot.com/feed/', source: 'GameSpot' },
    { url: 'https://kotaku.com/rss', source: 'Kotaku' },
    { url: 'https://www.ign.com/rss.xml', source: 'IGN' },
    { url: 'https://www.polygon.com/rss/index', source: 'Polygon' },
  ],
  food: [
    { url: 'https://www.epicurious.com/rss/ek.xml', source: 'Epicurious' },
    { url: 'https://www.seriouseats.com/rss', source: 'Serious Eats' },
    { url: 'https://www.bonappetit.com/feed/feed.xml', source: 'Bon Appetit' },
    { url: 'https://www.foodandwine.com/rss', source: 'Food & Wine' },
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
  data_journalism: [
    { url: 'https://fivethirtyeight.com/rss/', source: 'FiveThirtyEight' },
    { url: 'https://www.pewresearch.org/feed/', source: 'Pew Research' },
    { url: 'https://hbr.org/rss/ideas', source: 'Harvard Business Review' },
  ],
  mystery: [
    { url: 'https://news.google.com/rss/search?q=ghost%20paranormal%20supernatural&hl=en-US&gl=US&ceid=US:en', source: 'Paranormal' },
    { url: 'https://news.google.com/rss/search?q=UFO%20alien%20extraterrestrial&hl=en-US&gl=US&ceid=US:en', source: 'UFO News' },
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
    // Return comprehensive blog-style travel items
    const travelItems: any[] = []
    
    Object.entries(TRAVEL_GUIDES).forEach(([cityId, cityData]) => {
      cityData.areas.forEach((area: any) => {
        area.places.forEach((place: any) => {
          const emoji = cityId === 'tokyo' ? '🗼' : cityId === 'paris' ? '🗼' : cityId === 'seoul' ? '🏯' : cityId === 'bangkok' ? '🏯' : '🌏'
          const rating = place.rating || '4.5'
          const bestTime = place.best_time || place.hours || '建議停留2-3小時'
          
          // Create comprehensive blog-style content
          travelItems.push({
            id: 'travel-' + cityId + '-' + place.name_zh.replace(/\s/g, '-'),
            title: place.name_zh,
            title_translated: place.name_zh,
            desc: place.description_zh + '。最佳遊覽時間：' + bestTime + '。評分：' + rating + '/5.0。',
            desc_translated: place.description_zh + '。最佳遊覽時間：' + bestTime + '。評分：' + rating + '/5.0。',
            translated: true,
            link: place.website || ('https://www.google.com/search?q=' + encodeURIComponent(place.name_zh + ' ' + cityData.city_zh)),
            pubDate: new Date().toISOString(),
            source: cityData.city_zh + ' · ' + area.name,
            img: true,
            img_url: place.image,
            emoji: emoji,
            name: place.name_zh,
            name_zh: place.name_zh,
            name_en: place.name,
            city: cityData.city_zh,
            city_zh: cityData.city_zh,
            city_en: cityData.city,
            area: area.name,
            area_zh: area.name,
            best_time: bestTime,
            rating: rating,
            address: place.address || '',
            hours: place.hours || '',
            price_range: place.price_range || '',
            type: place.type || 'attraction',
          })
        })
      })
    })
    
    return NextResponse.json({
      success: true,
      category: 'travel',
      items: travelItems,
      isTravelGuide: true,
      timestamp: Date.now()
    })
  }
  
  // Static curated content for game, food, health, aiart
  if (category === 'gaming') {
    const gamingItems = [
      { id: 'g1', title: '🎮 PlayStation 6 預測2027年發布', desc: 'Sony正積極開發下一代主機，預計採用Advanced AI晶片，支持8K遊戲和即時光線追蹤。', img: true, img_url: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400', link: '#', source: 'GameSpot', pubDate: new Date().toISOString(), translated: false },
      { id: 'g2', title: '🕹️ 騰訊遊戲收入突破新高', desc: '2026年第一季度騰訊遊戲收入達到歷史新高，主要受《王者榮耀》海外版和《英雄聯盟手遊》推動。', img: true, img_url: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400', link: '#', source: 'Kotaku', pubDate: new Date().toISOString(), translated: false },
      { id: 'g3', title: '🎲 米哈遊《原神》登陸Netflix', desc: '熱門開放世界遊戲《原神》宣佈與Netflix合作，將在平台上獨家發布動畫改編作品。', img: true, img_url: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400', link: '#', source: 'GameSpot', pubDate: new Date().toISOString(), translated: false },
      { id: 'g4', title: '🏆 電競世界杯2026香港站', desc: '香港首次舉辦電競世界杯，總獎金池超過500萬美元，涵蓋英雄聯盟、CS2等多個項目。', img: true, img_url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400', link: '#', source: 'Kotaku', pubDate: new Date().toISOString(), translated: false },
      { id: 'g5', title: '🤖 AI遊戲引擎革命', desc: '最新AI遊戲引擎可以自動生成遊戲關卡和NPC對話，大幅降低遊戲開發成本。', img: true, img_url: 'https://images.unsplash.com/photo-1486572788966-cfd5df692014?w=400', link: '#', source: 'GameSpot', pubDate: new Date().toISOString(), translated: false },
    ]
    return NextResponse.json({ success: true, category: 'gaming', items: gamingItems, timestamp: Date.now() })
  }
  
  if (category === 'food') {
    const foodItems = [
      { id: 'f1', title: '🍜 香港米芝蓮街頭小吃2026', desc: '2026年香港米芝蓮指南新增10間街頭小吃，當中包括石澳既傳統豆腐花和深井既燒鵝。', img: true, img_url: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400', link: '#', source: 'Epicurious', pubDate: new Date().toISOString(), translated: false },
      { id: 'f2', title: '🍣 日本壽司師傅AI配對系統', desc: '東京新創公司推出AI系統，根據顧客口味偏好配對最適合的壽司師傅和餐廳。', img: true, img_url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400', link: '#', source: 'Serious Eats', pubDate: new Date().toISOString(), translated: false },
      { id: 'f3', title: '🥐 巴黎最好食嘅法式牛角包', desc: '法國權威美食雜誌評選2026年度最佳牛角包，巴黎15區既「Le Grenier」再次奪冠。', img: true, img_url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400', link: '#', source: 'Epicurious', pubDate: new Date().toISOString(), translated: false },
      { id: 'f4', title: '🍕 意大利拿玻里披薩文化遺產', desc: '聯合國教科文組織將拿玻里手拉披薩列入非物質文化遺產名錄。', img: true, img_url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400', link: '#', source: 'Serious Eats', pubDate: new Date().toISOString(), translated: false },
      { id: 'f5', title: '🍲 曼谷米芝蓮街頭美食地圖', desc: '泰國旅遊局發佈2026年最新版曼谷米芝蓮街頭美食地圖，收錄50間平價美食餐廳。', img: true, img_url: 'https://images.unsplash.com/photo-1562565652-bb8f6c4e23f9?w=400', link: '#', source: 'Epicurious', pubDate: new Date().toISOString(), translated: false },
    ]
    return NextResponse.json({ success: true, category: 'food', items: foodItems, timestamp: Date.now() })
  }
  
  if (category === 'health') {
    const healthItems = [
      { id: 'h1', title: '🏥 AI醫療影像診斷準確率超越人類', desc: '最新研究顯示，AI系統喺肺癌篩查既準確率達到96%，超過專業放射科醫生既93%。', img: true, img_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400', link: '#', source: 'Health News', pubDate: new Date().toISOString(), translated: false },
      { id: 'h2', title: '🧘 冥想App全球用戶突破5億', desc: '以冥想和心理健康為主既App用戶數量急增，其中Headspace和Calm引領市場。', img: true, img_url: 'https://images.unsplash.com/photo-1506126613408-eca07ce12873?w=400', link: '#', source: 'Health News', pubDate: new Date().toISOString(), translated: false },
      { id: 'h3', title: '💊 個人化維他命訂製服務', desc: '香港科技公司推出AI分析個人飲食習慣，訂製個人化維他命補充方案。', img: true, img_url: 'https://images.unsplash.com/photo-1584308666744-24d5c7f7d864?w=400', link: '#', source: 'Health News', pubDate: new Date().toISOString(), translated: false },
      { id: 'h4', title: '🏃 馬拉松訓練AI計劃', desc: '最新AI教練App可以根據用戶體能數據和天氣情況，制定個人化馬拉松訓練計劃。', img: true, img_url: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400', link: '#', source: 'Health News', pubDate: new Date().toISOString(), translated: false },
      { id: 'h5', title: '🥗 植物肉市場持續增長', desc: '2026年全球植物肉市場預計達到250億美元，其中亞洲市場增長最為迅速。', img: true, img_url: 'https://images.unsplash.com/photo-1529717525775-26dc4d15fb88?w=400', link: '#', source: 'Health News', pubDate: new Date().toISOString(), translated: false },
    ]
    return NextResponse.json({ success: true, category: 'health', items: healthItems, timestamp: Date.now() })
  }
  
  if (category === 'ai_art') {
    const aiartItems = [
      { id: 'a1', title: '🎨 AI生成藝術品拍賣價破百萬', desc: '一幅由AI系統生成既抽象藝術品喺紐約拍賣行以120萬美元成交，創下AI藝術品拍賣新紀錄。', img: true, img_url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400', link: '#', source: 'The Verge', pubDate: new Date().toISOString(), translated: false },
      { id: 'a2', title: '🖼️ Midjourney V7 版本發布', desc: 'Midjourney推出全新V7版本，生成圖像既真實度和藝術性大幅提升，支援電影級畫質。', img: true, img_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400', link: '#', source: 'TechCrunch', pubDate: new Date().toISOString(), translated: false },
      { id: 'a3', title: '📱 手機AI相機App革命', desc: '最新手機AI相機App可以即時生成藝術風格既照片，唔需要任何拍攝技巧。', img: true, img_url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400', link: '#', source: 'The Verge', pubDate: new Date().toISOString(), translated: false },
      { id: 'a4', title: '🎭 AI主播虛擬人物登場', desc: '日本NHK推出首個AI虛擬主播，可以24小時不間斷提供新聞資訊服務。', img: true, img_url: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400', link: '#', source: 'TechCrunch', pubDate: new Date().toISOString(), translated: false },
      { id: 'a5', title: '✏️ AI輔助設計工具普及', desc: 'Adobe推出新一代AI設計工具，大幅提升設計師工作效率，深受年輕設計師喜愛。', img: true, img_url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400', link: '#', source: 'The Verge', pubDate: new Date().toISOString(), translated: false },
    ]
    return NextResponse.json({ success: true, category: 'ai_art', items: aiartItems, timestamp: Date.now() })
  }
  
  // Regular news feed for other categories
  const sources = RSS_SOURCES[category] || RSS_SOURCES.finance
  const now = Date.now()
  const MAX_AGE_MS = 72 * 60 * 60 * 1000

  const sourcePromises = sources.map(async (source) => {
    try {
      const res = await fetch(source.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'application/rss+xml, application/xml, text/xml, */*',
        },
        signal: AbortSignal.timeout(15000),
      })
      
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
