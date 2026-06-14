// Travel Blog Translations
// Languages: yue (Cantonese), zh-TW (Traditional Chinese), zh-CN (Simplified Chinese), en (English)

export type TravelLanguage = "yue" | "zh-TW" | "zh-CN" | "en";

export interface TravelTranslation {
  // Basic info
  backHome: string;
  blog: string;
  tocTitle: string;
  ratingTitle: string;
  shareTitle: string;
  shareButton: string;
  favoriteText: string;
  relatedPosts: string;
  // Info table
  infoTitle: string;
  address: string;
  openingHours: string;
  fee: string;
  rating: string;
  transport: string;
  visitDuration: string;
  // Common
  bestTime: string;
  free: string;
  reviews: string;
  author: string;
  // Page specific
  meta: {
    region: string;
    country: string;
    title: string;
    subtitle: string;
    heroCaption: string;
  };
}

const en: TravelTranslation = {
  backHome: "← Back to NewsFlow",
  blog: "| Blog",
  tocTitle: "📋 Table of Contents",
  ratingTitle: "⭐ Rate this attraction",
  shareTitle: "📤 Share with friends",
  shareButton: "Share",
  favoriteText: "Add to wishlist:",
  relatedPosts: "Related Articles",
  infoTitle: "📊 Attraction Information",
  address: "📍 Address",
  openingHours: "🕐 Opening Hours",
  fee: "💰 Fee",
  rating: "⭐ Rating",
  transport: "🚇 Transport",
  visitDuration: "⏱️ Suggested Visit",
  bestTime: "Best time to visit",
  free: "Free",
  reviews: "reviews",
  author: "Author: Pure Traveler",
  meta: {
    region: "Europe",
    country: "",
    title: "",
    subtitle: "",
    heroCaption: "",
  },
};

const zhTW: TravelTranslation = {
  backHome: "← 返回 NewsFlow",
  blog: "| Blog",
  tocTitle: "📋 目錄導覽",
  ratingTitle: "⭐ 給這個景點評分",
  shareTitle: "📤 分享給朋友",
  shareButton: "分享",
  favoriteText: "加入心願清單：",
  relatedPosts: "相關文章",
  infoTitle: "📊 景點資訊一覽",
  address: "📍 地址",
  openingHours: "🕐 開放時間",
  fee: "💰 費用",
  rating: "⭐ 評分",
  transport: "🚇 交通",
  visitDuration: "⏱️ 建議遊覽",
  bestTime: "最佳遊覽時間",
  free: "免費",
  reviews: "評論",
  author: "作者：純粹旅人",
  meta: {
    region: "歐洲",
    country: "",
    title: "",
    subtitle: "",
    heroCaption: "",
  },
};

const zhCN: TravelTranslation = {
  backHome: "← 返回 NewsFlow",
  blog: "| 博客",
  tocTitle: "📋 目录导览",
  ratingTitle: "⭐ 给这个景点评分",
  shareTitle: "📤 分享给朋友",
  shareButton: "分享",
  favoriteText: "加入心愿清单：",
  relatedPosts: "相关文章",
  infoTitle: "📊 景点资讯一览",
  address: "📍 地址",
  openingHours: "🕐 开放时间",
  fee: "💰 费用",
  rating: "⭐ 评分",
  transport: "🚇 交通",
  visitDuration: "⏱️ 建议游览",
  bestTime: "最佳游览时间",
  free: "免费",
  reviews: "评论",
  author: "作者：纯粹旅人",
  meta: {
    region: "欧洲",
    country: "",
    title: "",
    subtitle: "",
    heroCaption: "",
  },
};

const yue: TravelTranslation = {
  backHome: "← 返回 NewsFlow",
  blog: "| 博客",
  tocTitle: "📋 目錄導覽",
  ratingTitle: "⭐ 俾呢個景點評分",
  shareTitle: "📤 分享畀朋友",
  shareButton: "分享",
  favoriteText: "加入心願清單：",
  relatedPosts: "相關文章",
  infoTitle: "📊 景點資訊一覽",
  address: "📍 地址",
  openingHours: "🕐 開放時間",
  fee: "💰 費用",
  rating: "⭐ 評分",
  transport: "🚇 交通",
  visitDuration: "⏱️ 建議遊覽",
  bestTime: "最佳遊覽時間",
  free: "免費",
  reviews: "評論",
  author: "作者：純粹旅人",
  meta: {
    region: "歐洲",
    country: "",
    title: "",
    subtitle: "",
    heroCaption: "",
  },
};

const baseTranslations: Record<TravelLanguage, TravelTranslation> = {
  en,
  "zh-TW": zhTW,
  "zh-CN": zhCN,
  yue,
};

export function getTranslation(lang: TravelLanguage): TravelTranslation {
  return baseTranslations[lang] || baseTranslations["zh-TW"];
}

// Language display info
export const languageInfo: Record<TravelLanguage, { code: TravelLanguage; label: string; native: string; flag: string }> = {
  yue: { code: "yue", label: "Cantonese", native: "廣東話", flag: "🇭🇰" },
  "zh-TW": { code: "zh-TW", label: "Traditional Chinese", native: "繁體中文", flag: "🇹🇼" },
  "zh-CN": { code: "zh-CN", label: "Simplified Chinese", native: "简体中文", flag: "🇨🇳" },
  en: { code: "en", label: "English", native: "English", flag: "🇬🇧" },
};
