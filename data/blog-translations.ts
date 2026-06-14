// Comprehensive translations for all travel blog pages
// Languages: yue (Cantonese), zh-TW (Traditional), zh-CN (Simplified), en (English)

export type Language = "yue" | "zh-TW" | "zh-CN" | "en";

export interface PageTranslation {
  [key: string]: {
    yue?: string;
    "zh-TW": string;
    "zh-CN": string;
    en?: string;
  };
}

export interface BlogTranslations {
  [pageSlug: string]: PageTranslation;
}

// Common UI elements
const common = {
  backToHome: { yue: "← 返回 NewsFlow", "zh-TW": "← 返回 NewsFlow", "zh-CN": "← 返回 NewsFlow", en: "← Back to NewsFlow" },
  blog: { yue: "| Blog", "zh-TW": "| Blog", "zh-CN": "| Blog", en: "| Blog" },
  rateThis: { yue: "⭐ 俾呢個景點評分", "zh-TW": "⭐ 給這個景點評分", "zh-CN": "⭐ 给这个景点评分", en: "⭐ Rate This Spot" },
  share: { yue: "📤 分享俾朋友", "zh-TW": "📤 分享給朋友", "zh-CN": "📤 分享给朋友", en: "📤 Share with Friends" },
  addToWishlist: { yue: "加入心願清單：", "zh-TW": "加入心願清單：", "zh-CN": "加入心愿清单：", en: "Add to Wishlist:" },
  relatedPosts: { yue: "相關文章", "zh-TW": "相關文章", "zh-CN": "相关文章", en: "Related Articles" },
  infoTitle: { yue: "📊 景點資訊一覽", "zh-TW": "📊 景點資訊一覽", "zh-CN": "📊 景点资讯一览", en: "📊 Spot Information" },
  address: { yue: "地址", "zh-TW": "地址", "zh-CN": "地址", en: "Address" },
  hours: { yue: "開放時間", "zh-TW": "開放時間", "zh-CN": "开放时间", en: "Hours" },
  ticket: { yue: "費用", "zh-TW": "費用", "zh-CN": "费用", en: "Fee" },
  rating: { yue: "評分", "zh-TW": "評分", "zh-CN": "评分", en: "Rating" },
  transport: { yue: "交通", "zh-TW": "交通", "zh-CN": "交通", en: "Transport" },
  duration: { yue: "建議遊覽", "zh-TW": "建議遊覽", "zh-CN": "建议游览", en: "Suggested Visit" },
  tipsTitle: { yue: "💡 精明自遊：實用小貼士", "zh-TW": "💡 精明自遊：實用小貼士", "zh-CN": "💡 精明自游：实用小贴士", en: "💡 Smart Travel Tips" },
  author: { yue: "作者：純粹旅人", "zh-TW": "作者：純粹旅人", "zh-CN": "作者：纯粹旅人", en: "Author: Pure Traveler" },
};

// Lion Monument translations
const lionMonumentTranslations: PageTranslation = {
  location: { yue: "🇨🇭 瑞士 · 琉森", "zh-TW": "🇨🇭 瑞士 · 琉森", "zh-CN": "🇨🇭 瑞士 · 卢塞恩", en: "🇨🇭 Switzerland · Lucerne" },
  title: { yue: "全球最傷心嘅石頭", "zh-TW": "世界上最悲傷的石頭", "zh-CN": "世界上最悲伤的石头", en: "The World's Saddest Stone" },
  subtitle: { yue: "瑞士琉森獅子紀念碑深度遊覽攻略", "zh-TW": "瑞士琉森獅子紀念碑深度遊覽攻略", "zh-CN": "瑞士卢塞恩狮子纪念碑深度游览攻略", en: "Swiss Lucerne Lion Monument In-Depth Guide" },
  quote: { yue: "馬克·吐溫話，呢個係全球最令人心碎、最感動嘅一舊石頭。", "zh-TW": "馬克·吐溫說，這是世界上最讓人心碎、最感人的一塊石頭。", "zh-CN": "马克·吐温说，这是世界上最让人心碎、最感人的一块石头。", en: "Mark Twain said this is the most heart-wrenching stone in the world." },
  intro: { yue: "垂死獅子紀念碑係琉森最沉重、最直擊靈魂的歷史圖騰...", "zh-TW": "垂死獅子紀念碑是琉森最沉重、最直擊靈魂的歷史圖騰...", "zh-CN": "垂死狮子纪念碑是卢塞恩最沉重、最直击灵魂的历史图腾...", en: "The Dying Lion Monument is Lucerne's heaviest, most soul-stirring historical totem..." },
  tocIntro: { yue: "介紹", "zh-TW": "介紹", "zh-CN": "介绍", en: "Introduction" },
  tocHistory: { yue: "1792年悲劇", "zh-TW": "1792年悲劇", "zh-CN": "1792年悲剧", en: "1792 Tragedy" },
  tocExperience: { yue: "實地遊覽", "zh-TW": "實地遊覽", "zh-CN": "实地游览", en: "Experience" },
  tocTips: { yue: "實用提示", "zh-TW": "實用提示", "zh-CN": "实用提示", en: "Tips" },
  photoCaption: { yue: "近距離觀看垂死獅子雕像", "zh-TW": "近距離觀看垂死獅子雕像", "zh-CN": "近距离观看垂死狮子雕像", en: "Close-up view of the dying lion sculpture" },
  historyTitle: { yue: "📊 1792年鐵血悲歌", "zh-TW": "📊 1792年鐵血悲歌", "zh-CN": "📊 1792年铁血悲歌", en: "📊 1792 Iron-Blood Tragedy" },
  experienceTitle: { yue: "🌲 在萬樹沙沙與綠池如淚間凝望", "zh-TW": "🌲 在萬樹沙沙與綠池如淚間凝望", "zh-CN": "🌲 在万树沙沙与绿池如泪间凝望", en: "🌲 Gazing at Immortality" },
  tip1: { yue: "100% 完全免費，24小時開放", "zh-TW": "100% 完全免費，24小時開放", "zh-CN": "100% 免费，24小时开放", en: "100% FREE, open 24 hours" },
  tip2: { yue: "最佳拍攝點：池塘正前方的右側觀景台", "zh-TW": "最佳拍攝點：池塘正前方的右側觀景台", "zh-CN": "最佳拍摄点：池塘正前方的右侧观景台", en: "Best photo spot: right side viewing platform" },
  footer: { yue: "歷史鐫刻於砂岩，忠誠長留於森林。", "zh-TW": "歷史鐫刻於砂岩，忠誠長留於森林。", "zh-CN": "历史镌刻于砂岩，忠诚长留于森林。", en: "History carved in sandstone, loyalty lasting in the forest." },
};

// Hohensalzburg Fortress translations
const hohensalzburgFortressTranslations: PageTranslation = {
  location: { yue: "🇦🇹 奧地利 · 薩爾茨堡", "zh-TW": "🇦🇹 奧地利 · 薩爾茨堡", "zh-CN": "🇦🇹 奥地利 · 萨尔茨堡", en: "🇦🇹 Austria · Salzburg" },
  title: { yue: "俯瞰莫扎特故鄉的天際線", "zh-TW": "俯瞰莫扎特故鄉的天際線", "zh-CN": "俯瞰莫扎特故乡的天际线", en: "Skyline Overlooking Mozart's Hometown" },
  subtitle: { yue: "薩爾茨堡城堡深度遊覽全攻略", "zh-TW": "薩爾茨堡城堡深度遊覽全攻略", "zh-CN": "萨尔茨堡城堡深度游览全攻略", en: "Hohensalzburg Fortress Complete Guide" },
  tocIntro: { yue: "介紹", "zh-TW": "介紹", "zh-CN": "介绍", en: "Introduction" },
  tocHistory: { yue: "千年歷史", "zh-TW": "千年歷史", "zh-CN": "千年历史", en: "Millennium History" },
  tocArchitecture: { yue: "建築亮點", "zh-TW": "建築亮點", "zh-CN": "建筑亮点", en: "Architecture" },
  tocPhotoSpots: { yue: "打卡機位", "zh-TW": "打卡機位", "zh-CN": "打卡机位", en: "Photo Spots" },
  tocTips: { yue: "實用提示", "zh-TW": "實用提示", "zh-CN": "实用提示", en: "Tips" },
  intro: { yue: "薩爾茨堡城堡係中歐最大、保存最完好的城堡之一，被譽為「鶴巢」。", "zh-TW": "薩爾茨堡城堡是中歐最大、保存最完好的城堡之一，被譽為「鶴巢」。", "zh-CN": "萨尔茨堡城堡是中欧最大、保存最完好的城堡之一，被誉为「鹤巢」。", en: "Hohensalzburg Fortress is one of Central Europe's largest and best-preserved castles." },
  historyTitle: { yue: "⏰ 跨越千年的守望", "zh-TW": "⏰ 跨越千年的守望", "zh-CN": "⏰ 跨越千年的守望", en: "⏰ A Millennium of Vigil" },
  architectureTitle: { yue: "🧱 必看亮點", "zh-TW": "🧱 必看亮點", "zh-CN": "🧱 必看亮点", en: "🧱 Must-See Highlights" },
  photoSpotsTitle: { yue: "📸 攝影師私藏打卡機位", "zh-TW": "📸 攝影師私藏打卡機位", "zh-CN": "📸 摄影师私藏打卡机位", en: "📸 Photographer's Secret Spots" },
  photoCaption: { yue: "城堡內的禮拜堂", "zh-TW": "城堡內的禮拜堂", "zh-CN": "城堡内的礼拜堂", en: "Castle chapel interior" },
  tip1: { yue: "門票資訊：纜車來回 + 城堡參觀約 €15-20 起", "zh-TW": "門票資訊：纜車來回 + 城堡參觀約 €15-20 起", "zh-CN": "门票资讯：缆车来回 + 城堡参观约 €15-20 起", en: "Tickets: Cable car + castle from €15-20" },
  footer: { yue: "願每位造訪城堡的旅人，都能在歷史長廊中找到自己的故事。", "zh-TW": "願每位造訪城堡的旅人，都能在歷史長廊中找到自己的故事。", "zh-CN": "愿每位造访城堡的旅人，都能在历史长廊中找到自己的故事。", en: "May every visitor find their own story in this castle's history." },
};

// Chapel Bridge Lucerne translations
const chapelBridgeLucerneTranslations: PageTranslation = {
  location: { yue: "🇨🇭 瑞士 · 琉森", "zh-TW": "🇨🇭 瑞士 · 琉森", "zh-CN": "🇨🇭 瑞士 · 卢塞恩", en: "🇨🇭 Switzerland · Lucerne" },
  title: { yue: "歐洲最古老的走廊橋樑", "zh-TW": "歐洲最古老的走廊橋樑", "zh-CN": "欧洲最古老的走廊桥梁", en: "Europe's Oldest Covered Bridge" },
  subtitle: { yue: "琉森卡貝爾橋深度遊覽攻略", "zh-TW": "琉森卡貝爾橋深度遊覽攻略", "zh-CN": "卢塞恩卡贝尔桥深度游览攻略", en: "Lucerne Chapel Bridge Complete Guide" },
  tocIntro: { yue: "介紹", "zh-TW": "介紹", "zh-CN": "介绍", en: "Introduction" },
  tocHistory: { yue: "歷史故事", "zh-TW": "歷史故事", "zh-CN": "历史故事", en: "History" },
  tocPaintings: { yue: "橋上油畫", "zh-TW": "橋上油畫", "zh-CN": "桥上油画", en: "Paintings" },
  tocPhotoSpots: { yue: "打卡機位", "zh-TW": "打卡機位", "zh-CN": "打卡机位", en: "Photo Spots" },
  tocTips: { yue: "實用提示", "zh-TW": "實用提示", "zh-CN": "实用提示", en: "Tips" },
  intro: { yue: "卡貝爾橋係建於1333年的木製走廊橋樑，是歐洲最古老的蓋頂橋之一。", "zh-TW": "卡貝爾橋是建於1333年的木製走廊橋樑，是歐洲最古老的蓋頂橋之一。", "zh-CN": "卡贝尔桥是建于1333年的木制走廊桥梁，是欧洲最古老的盖顶桥之一。", en: "The Chapel Bridge, built in 1333, is one of Europe's oldest wooden covered bridges." },
  historyTitle: { yue: "🔑 700年歷史", "zh-TW": "🔑 700年歷史", "zh-CN": "🔑 700年历史", en: "🔑 700 Years of History" },
  paintingsTitle: { yue: "🎨 橋上油畫收藏", "zh-TW": "🎨 橋上油畫收藏", "zh-CN": "🎨 桥上油画收藏", en: "🎨 Bridge Painting Collection" },
  photoSpotsTitle: { yue: "📸 最佳拍攝位置", "zh-TW": "📸 最佳拍攝位置", "zh-CN": "📸 最佳拍摄位置", en: "📸 Best Photo Locations" },
  tip1: { yue: "完全免費參觀", "zh-TW": "完全免費參觀", "zh-CN": "完全免费参观", en: "Completely free to visit" },
  footer: { yue: "願每位漫步橋上的旅人，都能感受700年的歷史沉澱。", "zh-TW": "願每位漫步橋上的旅人，都能感受700年的歷史沉澱。", "zh-CN": "愿每位漫步桥上的旅人，都能感受700年的历史沉淀。", en: "May every walker feel 700 years of history on this bridge." },
};

// Combine all translations
export const blogTranslations: BlogTranslations = {
  "lion-monument": { ...common, ...lionMonumentTranslations },
  "hohensalzburg-fortress": { ...common, ...hohensalzburgFortressTranslations },
  "chapel-bridge-lucerne": { ...common, ...chapelBridgeLucerneTranslations },
  // Add placeholder for other pages (can be expanded)
  "colosseum": { ...common },
  "eiffel-tower": { ...common },
  "grand-palace": { ...common },
  "livraria-lello": { ...common },
  "royal-palace-madrid": { ...common },
  "schonbrunn-palace": { ...common },
  "sistine-chapel": { ...common },
  "st-marks-square": { ...common },
  "st-peters-basilica": { ...common },
  "st-stephens-cathedral": { ...common },
  "tower-bridge": { ...common },
  "trevi": { ...common },
  "belem-tower": { ...common },
};

export default blogTranslations;