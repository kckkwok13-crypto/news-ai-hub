"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useState, useEffect } from "react";
import ReadingProgress from "../../components/ReadingProgress";
import SocialShare from "../../components/SocialShare";
import StarRating from "../../components/StarRating";
import FavoriteButton from "../../components/FavoriteButton";
import RelatedPosts from "../../components/RelatedPosts";
import TravelLanguageSelector from "../../components/TravelLanguageSelector";
import { getTranslation, TravelLanguage } from "../../data/travelTranslations";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🏞️" },
  { id: "nature", title: "自然風光", emoji: "🌊" },
  { id: "activities", title: "活動體驗", emoji: "🚢" },
  { id: "photo-spots", title: "打卡機位", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

const currentTags = ["蘇黎世", "瑞士", "湖泊", "打卡"];

export default function LakeZurichPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const [lang, setLang] = useState<TravelLanguage>("zh-TW");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const saved = localStorage.getItem("travel_blog_lang") as TravelLanguage;
    if (saved) setLang(saved);
    const handler = (e: any) => setLang(e.detail);
    window.addEventListener("travel-lang-change", handler);
    return () => window.removeEventListener("travel-lang-change", handler);
  }, []);

  const t = getTranslation(lang);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-950/50 to-teal-950/30 text-white">
      <ReadingProgress />
      <TravelLanguageSelector />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-blue-900/95 to-cyan-900/95 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-blue-500/10">
          <h3 className="text-sm font-bold text-blue-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                      : "text-blue-200/70 hover:text-white hover:bg-blue-800/50"
                  }`}
                >
                  <span className="text-lg">{emoji}</span>
                  <span>{title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-white mb-8 transition-colors bg-blue-900/30 px-4 py-2 rounded-full hover:bg-blue-800/50"
        >
          ← 返回 NewsFlow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-400 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-blue-500/30">
            🇨🇭 瑞士 · 蘇黎世
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
            阿爾卑斯山下的翡翠淚珠
          </h1>
          <h2 className="text-xl text-blue-400 font-semibold mb-4">瑞士蘇黎世湖（Zürichsee）深度遊覽與湖畔散策攻略</h2>
          <p className="text-blue-600">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
            alt="蘇黎世湖全景"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-blue-600 text-sm mb-12">
          ▲ 阿爾卑斯山倒映在蘇黎世湖的翡翠碧波之中，如詩如畫的湖畔風光
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro">
            當你站在蘇黎世湖畔，望向遠處阿爾卑斯山的雪峰倒映在平靜如鏡的湖面上，你會明白為什麼這裡被稱為「歐洲最宜居的城市」。<strong>蘇黎世湖（Zürichsee）</strong>是瑞士最著名的湖泊之一，佔地約88平方公里，最深處達136米。湖水清澈見底，呈現出令人著迷的翡翠碧色，彷彿一枚鑲嵌在阿爾卑斯山脈中的巨型翡翠。
          </p>
          <p>
            蘇黎世湖與蘇黎世城市融為一體，湖畔兩岸分佈著古老的教堂、繁華的商業街與寧靜的住宅區。無論是乘坐傳統蒸汽船遊湖、在湖畔咖啡館悠閒度過一個下午，還是沿著湖濱步道騎單車，都能讓你感受到這座城市獨有的浪漫與活力。
          </p>

          <div id="nature" className="bg-gradient-to-br from-blue-900/50 to-cyan-900/40 border border-blue-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              🌊 大自然的鬼斧神工：蘇黎世湖的 4 大自然奇觀
            </h3>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">1. 阿爾卑斯山的倒影</h4>
            <p className="text-blue-100/80">
              蘇黎世湖最令人驚嘆的景觀之一，就是阿爾卑斯山的壯麗倒影。當清晨的薄霧籠罩湖面，或黃昏的夕陽染紅天際，雪山峰頂與湖面倒影融為一體，形成一幅天然的山水畫卷。這也是蘇黎世湖被稱為「翡翠淚珠」的原因。
            </p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">2. 獨特的冰川湖泊</h4>
            <p className="text-blue-100/80">
              蘇黎世湖是典型的冰川湖泊，約在15,000年前的冰河時期形成。湖水由阿爾卑斯山的冰川融水彙聚而成，因此水質極為純淨，能見度可達10米以上。湖中還有多種淡水魚類，包括著名的蘇黎世湖鱒魚。
            </p>

            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 border border-cyan-500/30 rounded-xl p-5 my-6">
              <h4 className="text-cyan-400 font-bold mb-3 flex items-center gap-2">
                ✨ 生態天堂：湖畔的野生動物
              </h4>
              <p className="text-blue-100/80">
                蘇黎世湖畔是多種野生動物的棲息地。在湖邊的蘆葦叢中，經常可以看到白天鵝、黑天鵝、野鴨等水鳥悠然覓食。而在湖畔的公園和綠地裡，松鼠、野兔等小動物也與人類和諧共處。
              </p>
            </div>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">3. 四季變幻的湖畔風光</h4>
            <p className="text-blue-100/80">
              蘇黎世湖的風光隨四季變幻而有所不同。春天，湖畔櫻花盛開，粉白相間的花瓣飄落湖面；夏天，碧波蕩漾，帆船點點；秋天，紅葉倒映水中，層林盡染；冬天，若運氣好，還能看到阿爾卑斯山披上白雪的壯觀景象。
            </p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">4. 湖畔花園與公園</h4>
            <p className="text-blue-100/80">
              蘇黎世湖畔分佈著多個美麗的公園和花園。湖畔公園（Seepark）種植了大量玫瑰和杜鵑花，是市民休閒的好去處。而位於湖東側的屈內普福爾（Küsnacht）地區，則保留著古老的湖畔別墅和私人花園。
            </p>
          </div>

          <h2 id="activities">🚢 必玩體驗：蘇黎世湖的 4 大經典活動</h2>

          <h3>① 乘坐蒸汽船遊湖</h3>
          <p>
            蘇黎世湖上有多家傳統蒸汽船和現代客船提供遊湖服務。其中最著名的<strong>蒸汽船「城市巴塞爾號」（Stadt Basel）</strong>建於1914年，至今仍在使用。乘坐蒸汽船遊湖，不僅可以欣賞兩岸風光，還能感受濃厚的懷舊氛圍。建議選擇2-3小時的航線，環湖一圈的線路最為經典。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80"
              alt="瑞士湖泊風光"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-blue-600 text-sm mt-4 mb-8">
              ▲ 蘇黎世湖上的傳統蒸汽船，緩緩駛過寧靜的湖面
            </p>
          </div>

          <h3>② 湖畔騎單車</h3>
          <p>
            蘇黎世湖畔設有完善的單車道，全長約120公里，沿途風光旖旎。你可以租借單車，從蘇黎世市中心出發，沿湖濱一路向北騎行，途經美麗的湖畔小鎮如施泰夫（Stäfa）、梅恩菲爾德（Meilen）等，一路享受湖光山色。
          </p>

          <h3>③ 湖畔游泳</h3>
          <p>
            夏季（6月-9月）是蘇黎世湖游泳的最佳時節。蘇黎世湖畔設有多個公共游泳場，提供更衣室、淋浴和救生員服務。最受歡迎的游泳場包括湖畔游泳場（Seebad Enge）和女子游泳場（Damenbad）等地。在清澈的湖水中暢游，同時欣賞阿爾卑斯山的美景，是難得的體驗。
          </p>

          <h3>④ 湖畔美食</h3>
          <p>
            蘇黎世湖畔分佈著許多優雅的餐廳和咖啡館，提供地道瑞士美食和國際料理。你可以選擇在湖畔露台享用瑞士火鍋（Fondue）、烤肉（Raclette），或品嚐新鮮的蘇黎世湖鱒魚。傍晚時分，在湖畔餐廳一邊品嚐美食，一邊觀賞日落，是最浪漫的體驗。
          </p>

          <h2 id="photo-spots">📸 攝影師私藏：蘇黎世湖 4 大終極打卡機位</h2>

          <h3>① 蘇黎世湖畔長廊——經典湖景</h3>
          <p>
            蘇黎世市中心的湖畔長廊（Bahnhofstrasse 到 Bürkliplatz 一帶）是拍攝蘇黎世湖最經典的位置。清晨或傍晚時分，可以使用廣角鏡頭拍攝湖面與阿爾卑斯山的全景。建議帶上偏光鏡，可以消除水面反光，讓天空和山脈更加飽和。
          </p>

          <h3>② 利馬特河河口——雙河交匯</h3>
          <p>
            利馬特河（Limmat）從蘇黎世湖流出，在河口處形成一道獨特的景觀。站在橋上，可以拍到湖水流入河道的壯觀場面。夜間配合燈光，拍攝效果更佳。
          </p>

          <h3>③ 蘇黎世歌劇院廣場——城市倒影</h3>
          <p>
            蘇黎世歌劇院（Opernhaus）前的廣場是拍攝湖面倒影的絕佳位置。當湖面平靜無風時，整個城市的天際線都會倒映在水中，形成一幅對稱的畫卷。使用三腳架和慢速快門，可以拍出夢幻般的效果。
          </p>

          <h3>④ 湖上日出——金色時刻</h3>
          <p>
            如果你是攝影愛好者，千萬不要錯過蘇黎世湖的日出。清晨5-6點來到湖畔，面對東方拍攝日出。陽光逐漸照亮阿爾卑斯山的雪峰，倒映在平靜的湖面上，金色的光線與翡翠般的湖水交相輝映，美得令人窒息。
          </p>

          <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/40 border border-blue-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 蘇黎世湖 旅遊實用小貼士
            </h3>
            <ul className="space-y-3 text-blue-100/80">
              <li className="flex gap-3">
                <span className="text-yellow-400">🎟️</span>
                <span><strong>船遊票價：</strong>蘇黎世湖船遊有多種選擇，單程票約 CHF 8-15，環湖票（含蒸汽船）約 CHF 45-60。建議購買<strong>蘇黎世卡（Zürich Card）</strong>，可免費乘坐公共交通和船遊。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">🚆</span>
                <span><strong>交通方式：</strong>從蘇黎世火車總站（Zürich HB）步行約10分鐘即可到達湖畔。也可乘搭有軌電車2號或5號線至<strong>Bürkliplatz</strong>站。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">🏊</span>
                <span><strong>游泳資訊：</strong>蘇黎世湖夏季水溫約20-24度，適合游泳。湖畔有多個免費和收費的公共游泳場。建議携带泳衣和沙灘毛巾。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">🚴</span>
                <span><strong>單車租借：</strong>蘇黎世市內有多處單車租借點，包括公共單車系統（Zurirollt）和私人租借店。湖畔單車道全線約120公里，建議安排半天時間。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400">☀️</span>
                <span><strong>最佳遊覽時間：</strong>5月-10月是最佳遊覽季節，其中6月-8月天氣最穩定，適合游泳和戶外活動。冬季湖景蕭瑟，但聖誕市集氣氛濃郁。</span>
              </li>
            </ul>
          </div>

          <h2>📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">📍 地址</span>
              <p className="text-blue-100/80 text-sm mt-1">Bahnhofstrasse / Bürkliplatz, 8001 Zürich, Switzerland</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">🕐 開放時間</span>
              <p className="text-blue-100/80 text-sm mt-1">湖畔全天候開放<br/>船遊 09:00-18:00</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">💰 費用</span>
              <p className="text-blue-100/80 text-sm mt-1">湖畔免費<br/>船遊 CHF 8-60</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">⭐ 評分</span>
              <p className="text-blue-100/80 text-sm mt-1">4.8/5.0（89,234 評論）</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">🚇 交通</span>
              <p className="text-blue-100/80 text-sm mt-1">電車至 Bürkliplatz 站</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/60 rounded-xl p-4 border border-blue-700/30">
              <span className="text-blue-400 font-bold">⏱️ 建議遊覽</span>
              <p className="text-blue-100/80 text-sm mt-1">3-5小時</p>
            </div>
          </div>

          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 border border-blue-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⭐ 給這個景點評分
            </h3>
            <StarRating slug="lake-zurich" />
          </div>

          <div className="bg-blue-900/30 rounded-2xl p-6 my-10 border border-blue-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">📤 分享給朋友</h3>
            <SocialShare
              title="🏞️ 阿爾卑斯山下的翡翠淚珠：瑞士蘇黎世湖深度遊覽與湖畔散策攻略"
            />
          </div>

          <div className="flex justify-center my-8">
            <div className="bg-blue-900/30 rounded-2xl p-6 border border-blue-700/30 flex items-center gap-4">
              <span className="text-blue-100/80">加入心願清單：</span>
              <FavoriteButton slug="lake-zurich" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          <RelatedPosts currentSlug="lake-zurich" currentTags={currentTags} />
        </article>
      </div>

      <Comments slug="lake-zurich" />
    </div>
  );
}