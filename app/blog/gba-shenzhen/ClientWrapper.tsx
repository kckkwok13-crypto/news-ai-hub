"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "出發", emoji: "✈️" },
  { id: "transport", title: "交通", emoji: "🚄" },
  { id: "hotel", title: "住宿", emoji: "🏨" },
  { id: "dongmen", title: "東門老街", emoji: "🏪" },
  { id: "huaqiangbei", title: "華強北", emoji: "🔌" },
  { id: "food", title: "美食", emoji: "🍜" },
  { id: "bay", title: "深圳灣", emoji: "🌅" },
  { id: "nightlife", title: "夜生活", emoji: "🌃" },
  { id: "tips", title: "實用Tips", emoji: "💡" },
];

export default function ShenzhenPage() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-orange-950/20 to-zinc-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-orange-500/10">
          <h3 className="text-sm font-bold text-orange-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/80"
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
          href="/blog"
          className="inline-flex items-center gap-2 text-orange-400 hover:text-white mb-8 transition-colors bg-zinc-800/50 px-4 py-2 rounded-full hover:bg-zinc-700/50"
        >
          ← 返回 Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-orange-500/30">
            🌴 大灣區退休遊記
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-orange-200 to-red-300 bg-clip-text text-transparent">
            深圳2天慢活遊
          </h1>
          <h2 className="text-xl text-orange-400 font-semibold mb-4">東門老街懷舊 · 華強北科技尋寶 · 深圳灣日落</h2>
          <p className="text-zinc-500">June 2026 · 作者：純粹旅人</p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=1200&q=80"
          alt="深圳夜景"
          className="w-full rounded-2xl mb-4 shadow-2xl shadow-orange-500/20"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80";
          }}
        />
        <p className="text-center text-zinc-500 text-sm mb-12">
          ▲ 深圳灣畔的璀璨夜色，對岸就是香港天水圍，兩地只係一橋之隔
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          {/* 引言 */}
          <p id="intro" className="text-xl leading-relaxed text-zinc-300 mb-8">
            退休後，我最鍾意就係揹住相機周圍走。今次試下用兩日時間，慢遊我地熟悉又陌生嘅深圳。羅湖過關，30分鐘就到，完全係「話走就走」嘅節奏。
          </p>
          <p className="text-zinc-400 mb-8">
            話說深圳呢個地方，對我哋香港人來說又近又遠。近，係因為只係一關之隔；遠，係因為好多人都只係去東門、華強北，未真正體驗過佢嘅魅力。今次，我就帶你用另一個角度睇深圳——慢活、深度、美食與日落。
          </p>

          {/* 交通攻略 */}
          <h2 id="transport" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            🚄 由香港去深圳，你要知嘅嘢
          </h2>

          <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold text-orange-300 mb-4">🚇 兩種方法入深圳</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">🚄</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">東鐵直達（最方便）</h4>
                  <p className="text-zinc-400 mb-2">羅湖口岸或落馬洲 → 深圳站（羅湖）</p>
                  <ul className="text-zinc-300 space-y-1 text-sm">
                    <li>• 車程：約45分鐘</li>
                    <li>• 車費：約HK$35（使用八達通）</li>
                    <li>• 適合：想直接去東門、羅湖區域</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">🚅</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">高鐵（最快速）</h4>
                  <p className="text-zinc-400 mb-2">香港西九龍 → 深圳北站</p>
                  <ul className="text-zinc-300 space-y-1 text-sm">
                    <li>• 車程：約14分鐘</li>
                    <li>• 車費：約HK$75（需提前購票）</li>
                    <li>• 適合：趕時間、想去南山區</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
              alt="深圳地鐵站"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 深圳地鐵網絡完善，一卡在手就可以走遍全城
            </p>
          </div>

          <h3 className="text-xl font-bold text-orange-300 mb-4">深圳市內交通</h3>
          <p className="text-zinc-400 mb-4">
            深圳地鐵覆蓋全面，建議購買「深圳通」卡（相當於香港八達通），可以話係「嘟一嘟」就走。另外，我強烈建議下載「滴滴出行」App，喺深圳叫的士比香港平好多，而且司機服務態度好好，就算你唔識中文，佢哋都會用電話聯絡你。
          </p>

          {/* 住宿推薦 */}
          <h2 id="hotel" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            🏨 住宿推薦：邊度瞓邊度玩？
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-5 border border-zinc-700/50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🏨</span>
                <div>
                  <span className="text-orange-400 font-bold text-lg">深圳瑞吉酒店</span>
                  <div className="text-zinc-500 text-sm">⭐⭐⭐⭐ 四星</div>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-2">📍 羅湖區，近地鐵大劇院站</p>
              <p className="text-zinc-300 text-sm mb-2">💰 約 RMB 600/晚（含早餐）</p>
              <p className="text-zinc-400 text-sm">✨ 景觀絕佳，可以睇到成個深圳天際線！夜晚喺房睇夜景，特別有feel。</p>
            </div>

            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-5 border border-zinc-700/50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🌟</span>
                <div>
                  <span className="text-orange-400 font-bold text-lg">深圳華僑城洲際大酒店</span>
                  <div className="text-zinc-500 text-sm">⭐⭐⭐⭐⭐ 五星</div>
                </div>
              </div>
              <p className="text-zinc-300 text-sm mb-2">📍 南山區，歡樂谷旁</p>
              <p className="text-zinc-300 text-sm mb-2">💰 約 RMB 900/晚</p>
              <p className="text-zinc-400 text-sm">✨ 環境優美，有園林景觀，適合想慢慢歎嘅退休人士。</p>
            </div>
          </div>

          {/* 東門老街 */}
          <h2 id="dongmen" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            🏪 東門老街：時光倒流30年
          </h2>

          <p className="text-zinc-400 mb-6">
            一踏出羅湖地鐵站，我就坐地鐵去東門站。東門老街，係深圳最老牌嘅商業區，保存住好多80年代嘅痕跡。行行下，我突然有種時光倒流嘅感覺——舊式招牌、懷舊茶餐廳、仲有嗰種人山人海嘅旺氣。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80"
              alt="東門老街"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 東門老街的霓虹招牌，充滿80年代香港味道
            </p>
          </div>

          <p className="text-zinc-300 mb-4">
            東門老街廣場係必到打卡點！巨型電子屏幕配上傳統嶺南建築，形成一種獨特嘅反差美感。我行行下，見到一間好有味道嘅老式茶餐廳——冰室風格、卡位設計、仲有嗰種舊式收音機喺角落播住懷舊金曲。
          </p>

          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-orange-400 font-bold mb-4 text-xl">💡 純粹旅人嘅東門購物心得</h3>
            <ul className="space-y-3 text-zinc-300">
              <li>• 🛍️ <strong>東門批發市場</strong>：呢度係淘寶貨源大本營，平靓正嘅衣服、飾品、精品應有盡有。</li>
              <li>• 💰 <strong>記得講價</strong>：呢度仲係可以講價嘅！試下對半劈，通常都有驚喜。</li>
              <li>• ☕ <strong>老式茶餐廳</strong>：一定要試下嗰度嘅港式奶茶同菠蘿油，舊香港嘅味道。</li>
              <li>• 📸 <strong>打卡位</strong>：東門天桥係影靚相嘅最佳位置，可以影到成條街嘅霓虹夜景。</li>
            </ul>
          </div>

          {/* 華強北 */}
          <h2 id="huaqiangbei" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            🔌 華強北：亞洲科技心臟
          </h2>

          <p className="text-zinc-400 mb-6">
            下午，我轉戰華強北。呢度係亞洲最大嘅電子產品批發市場，就算你唔係嚟買野，都一定要嚟開開眼界！
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
              alt="華強北電子廣場"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 華強北電子廣場，一個充滿科技感的地方
            </p>
          </div>

          <p className="text-zinc-300 mb-4">
            我行入去，真係大開眼界！最新款嘅手機殼、無線耳機、機械人、無人機、智能家居產品......全部都係最新科技。而且價錢比香港平30-50%，難怪咁多人專程嚟掃貨。
          </p>

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-blue-400 font-bold mb-4 text-xl">🔧 華強北必逛推介</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-blue-400 font-bold">📱 手機配件</span>
                <p className="text-zinc-300 text-sm mt-1">最新款式手機殼、耳機、充電線，價錢平到笑</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-blue-400 font-bold">🤖 智能產品</span>
                <p className="text-zinc-300 text-sm mt-1">機械人、無人機、智能家居，全部係最新型號</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-blue-400 font-bold">💻 電腦零件</span>
                <p className="text-zinc-300 text-sm mt-1">SSD、記憶卡、鍵盤滑鼠，砌機發燒友天堂</p>
              </div>
              <div className="bg-zinc-800/50 rounded-lg p-4">
                <span className="text-blue-400 font-bold">🎁 科技禮品</span>
                <p className="text-zinc-300 text-sm mt-1">送禮自用兩相宜，價錢抵到爛</p>
              </div>
            </div>
          </div>

          {/* 美食 */}
          <h2 id="food" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            🍜 美食推介：食在深圳
          </h2>

          <p className="text-zinc-400 mb-6">
            退休人士最關心嘅，除咗玩，就係食！深圳嘅美食性價比真係超高，以下係我今次試過覺得唔錯嘅地方：
          </p>

          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-red-400 font-bold mb-4 text-xl">🍗 Day 1 午餐：東門老街</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-3xl">🦆</div>
                <div>
                  <span className="text-white font-bold">肥妹燒鵝店</span>
                  <p className="text-zinc-400 text-sm">東門老街附近 · 人均約RMB 60</p>
                  <p className="text-zinc-300 text-sm mt-1">⭐ 必點：燒鵝瀨粉、叉燒飯，環境懷舊，性價比超高！</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">🍗</div>
                <div>
                  <span className="text-white font-bold">光明乳鴿</span>
                  <p className="text-zinc-400 text-sm">東門附近 · 每隻約RMB 35</p>
                  <p className="text-zinc-300 text-sm mt-1">⭐ 皮脆肉嫩，一咬落去，肉汁就爆出嚟！</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border border-yellow-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-yellow-400 font-bold mb-4 text-xl">🦐 Day 1 晚餐：海岸城</h3>
            <div className="flex gap-4">
              <div className="text-3xl">🐚</div>
              <div>
                <span className="text-white font-bold">悅海酒樓</span>
                <p className="text-zinc-400 text-sm">海岸城購物中心 · 人均約RMB 150</p>
                <p className="text-zinc-300 text-sm mt-1">⭐ 必點：白切雞、蝦餃、鳳爪、正宗粵菜味道。環境舒適，適合慢慢歎！</p>
              </div>
            </div>
          </div>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1536052443615-08b1f36aa89d?w=1200&q=80"
              alt="粵式美食"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 正宗粵菜，海岸城的海鮮酒樓水準一流
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-green-400 font-bold mb-4 text-xl">🥢 Day 2 午餐：華強北</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌶️</span>
                <span className="text-zinc-300">湘菜小館 - 正宗湖南味，酸辣過癮！人均約RMB 50</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">☕</span>
                <span className="text-zinc-300">港式茶餐廳 - 凍奶茶、菠蘿油，懷舊味道！人均約RMB 40</span>
              </div>
            </div>
          </div>

          {/* 深圳灣 */}
          <h2 id="bay" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            🌅 深圳灣：日落係為我而寫
          </h2>

          <p className="text-zinc-400 mb-6">
            傍晚五點，我特意搭地鐵去深圳灣公園，趕上日落時分。呢個13公里長嘅海濱長廊，係我今次旅程嘅最大驚喜。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
              alt="深圳灣日落"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 深圳灣的日落，金色光芒灑滿整個海面，對岸的香港清晰可見
            </p>
          </div>

          <p className="text-zinc-300 mb-4">
            我漫步喺海濱長廊，看住太陽慢慢降落。天色由橙轉紅，再由紅變紫，最後變成深藍色。對岸就係香港嘅天水圍、元朗，兩地只係一橋之隔，但風景就完全唔同。
          </p>

          <p className="text-zinc-300 mb-4">
            海風吹過，帶住微微嘅鹹味。有啲老人家喺度打太極，有啲後生仔踩單車，有啲一家人帶埋BB車出嚟散步。呢度嘅生活氣息好重，唔似旅遊景點，反而更像本地人嘅後花園。
          </p>

          <div className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border border-amber-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-amber-400 font-bold mb-4 text-xl">📸 打卡Tips</h3>
            <ul className="space-y-2 text-zinc-300">
              <li>• 🌅 <strong>最佳時間：</strong>下午5:30-7:00係日落黃金時段</li>
              <li>• 📍 <strong>最佳位置：</strong>海風廣場日落觀景台，可以影到成個深圳灣大橋</li>
              <li>• 🔭 <strong>幸運的話：</strong>有機會見到黑臉琵鷺！佢哋係冬候鳥，通常10月-3月最多</li>
              <li>• 🚴 <strong>租單車：</strong>可以喺園內租借單車，踩住單車睇日落，特別浪漫</li>
            </ul>
          </div>

          {/* 夜生活 */}
          <h2 id="nightlife" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            🌃 深圳夜生活：越夜越精彩
          </h2>

          <p className="text-zinc-400 mb-6">
            深圳嘅夜生活比香港更精彩，而且消費平一大截！以下係我今次體驗過嘅幾個地方：
          </p>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-purple-400 font-bold mb-4 text-xl">🍺 海岸城商圈</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛍️</span>
                <span className="text-zinc-300">大型商場雲集，國際品牌應有盡有</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍺</span>
                <span className="text-zinc-300">酒吧街有多間精釀啤酒酒吧，外國風情浓厚</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎤</span>
                <span className="text-zinc-300">KTV價錢比香港平一半！兩個人唱三個鐘都係RMB 150有找</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-red-400 font-bold mb-4 text-xl">🍢 華強北夜市</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span className="text-zinc-300">華強北步行街，晚上8點後就開始熱鬧</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍡</span>
                <span className="text-zinc-300">街頭小食推介：燒烤、串燒、煎餅果子、臭豆腐</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span className="text-zinc-300">全部RMB 10有找，抵到爛！</span>
              </div>
            </div>
          </div>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80"
              alt="深圳夜市"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-zinc-500 text-sm mt-4 mb-8">
              ▲ 深圳夜市的人間烟火氣，係香港體驗唔到嘅
            </p>
          </div>

          {/* 實用Tips */}
          <h2 id="tips" className="text-2xl font-bold text-orange-400 mt-12 mb-6 flex items-center gap-3">
            💡 實用小貼士（純粹旅人嘅私房分享）
          </h2>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-green-400 font-bold mb-4 text-xl">📱 必須下載的App</h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex gap-3">
                <span className="text-green-400">1️⃣</span>
                <span><strong>滴滴出行</strong> - 叫車必備，價錢透明，司機服務態度好</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">2️⃣</span>
                <span><strong>支付寶/微信支付</strong> - 深圳大部分地方不接受現金，必需！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">3️⃣</span>
                <span><strong>百度地圖</strong> - 比Google Maps準確，超好用！</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border border-amber-500/30 rounded-2xl p-6 my-8">
            <h3 className="text-amber-400 font-bold mb-4 text-xl">⚠️ 通關提醒</h3>
            <ul className="space-y-2 text-zinc-300">
              <li>✅ 身份證+回鄉證/護照必備</li>
              <li>⏰ 羅湖關口開放時間：06:30-00:00</li>
              <li>💡 建議開通漫遊或購買內地電話卡</li>
              <li>⚠️ 週末羅湖關口人流較多，建議早上8點前過關</li>
            </ul>
          </div>

          {/* 預算 */}
          <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 border border-zinc-700/50 rounded-2xl p-6 my-8">
            <h3 className="text-orange-400 font-bold mb-4 text-xl">💰 預算參考（每人）</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-700/50 rounded-lg p-3">
                <span className="text-zinc-400 text-sm">交通費（來回）</span>
                <p className="text-white font-bold text-lg">約 HK$70</p>
              </div>
              <div className="bg-zinc-700/50 rounded-lg p-3">
                <span className="text-zinc-400 text-sm">酒店（1晚）</span>
                <p className="text-white font-bold text-lg">約 HK$350-700</p>
              </div>
              <div className="bg-zinc-700/50 rounded-lg p-3">
                <span className="text-zinc-400 text-sm">餐飲（2日）</span>
                <p className="text-white font-bold text-lg">約 HK$200-300</p>
              </div>
              <div className="bg-zinc-700/50 rounded-lg p-3">
                <span className="text-zinc-400 text-sm">購物/特產</span>
                <p className="text-white font-bold text-lg">約 HK$100-200</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-orange-500/20 rounded-lg text-center">
              <span className="text-orange-400 font-bold text-lg">💰 總預算：HK$800-1,400</span>
            </div>
          </div>

          {/* 總結 */}
          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/20 border border-orange-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-orange-400 font-bold mb-4 text-xl">📝 遊記總結</h3>
            <p className="text-zinc-300 mb-4">
              深圳係非常適合退休人士嘅短途旅行目的地！交通方便、消費平、美食多，而且適合慢慢行、慢慢睇。今次旅程，我感受到咗深圳嘅另一面——唔只係購物天堂，仲係一个有味道、有故事、有日落嘅城市。
            </p>
            <p className="text-zinc-300">
              下次，我會再去廣州，試下佢嘅早茶文化！你呢？
            </p>
          </div>

          {/* 留言區 */}
          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/20 border border-orange-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-orange-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-zinc-300 text-lg mb-4">
              👇 你去過深圳嗎？分享一下你的體驗吧！
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-zinc-800/60 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}