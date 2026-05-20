export type Lang = "zh-TW" | "zh-CN" | "en";
export type Category = "finance" | "crypto" | "business" | "technology" | "astronomy" | "mystery" | "health" | "gaming" | "food" | "travel" | "ai_art" | "art" | "data_journalism";

export interface TravelPlace {
  id: string;
  name: string;
  desc: string;
  type: string;
  image: string;
}

export interface TravelGuide {
  id: string;
  name: string;
  emoji: string;
  places: TravelPlace[];
}

export interface NewsItem {
  id: string;
  title: string;
  title_translated: string;
  desc: string;
  desc_translated: string;
  link: string;
  pubDate: string;
  source: string;
  img: boolean;
  img_url: string;
  translated: boolean;
  translationError?: string;
  emoji?: string;
  name?: string;
  name_zh?: string;
  city?: string;
  city_zh?: string;
  city_id?: string;
  city_en?: string;
  city_emoji?: string;
  country?: string;
  country_zh?: string;
  country_id?: string;
  city_description?: string;
  area?: string;
  area_zh?: string;
  rating?: string;
  review_count?: string;
  best_time?: string;
  best_season?: string;
  avg_temp?: string;
  price_range?: string;
  cost_level?: string;
  address?: string;
  hours?: string;
  description?: string;
  blog_content?: string;
  blog_slug?: string;
  type?: string;
  duration?: string;
  transit?: string;
  tags?: string[];
  tips?: string[];
  related_places?: Array<{ name: string; name_zh: string; type: string }>;
}

export const LANG_OPTIONS: { id: Lang; flag: string; label: string }[] = [
  { id: 'zh-TW', flag: '🇭🇰', label: '廣東話' },
  { id: 'zh-CN', flag: '🇨🇳', label: '简体' },
  { id: 'en', flag: '🇺🇸', label: 'English' },
];

export const CATEGORIES: { id: Category; icon: string; color: string; label_zh: string; label_en: string }[] = [
  { id: "finance", icon: "💰", color: "bg-green-500", label_zh: "財經", label_en: "Finance" },
  { id: "crypto", icon: "₿", color: "bg-orange-500", label_zh: "加密幣", label_en: "Crypto" },
  { id: "business", icon: "💼", color: "bg-purple-500", label_zh: "商業", label_en: "Business" },
  { id: "technology", icon: "🚀", color: "bg-indigo-500", label_zh: "科技", label_en: "Tech" },
  { id: "astronomy", icon: "🔭", color: "bg-violet-500", label_zh: "天文", label_en: "Astronomy" },
  { id: "mystery", icon: "🔮", color: "bg-purple-600", label_zh: "神秘學", label_en: "Mystic" },
  { id: "health", icon: "🏥", color: "bg-red-500", label_zh: "健康", label_en: "Health" },
  { id: "gaming", icon: "🎮", color: "bg-cyan-500", label_zh: "遊戲", label_en: "Gaming" },
  { id: "food", icon: "🍜", color: "bg-yellow-500", label_zh: "美食", label_en: "Food" },
  { id: "travel", icon: "✈️", color: "bg-teal-500", label_zh: "旅遊", label_en: "Travel" },
  { id: "ai_art", icon: "🤖", color: "bg-pink-500", label_zh: "AI藝術", label_en: "AI Art" },
  { id: "art", icon: "🎨", color: "bg-rose-500", label_zh: "藝術", label_en: "Art" },
  { id: "data_journalism", icon: "📊", color: "bg-cyan-600", label_zh: "數據新聞 24h熱門", label_en: "Data 24h Trending" },
];