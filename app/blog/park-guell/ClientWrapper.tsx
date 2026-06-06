"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "landmarks", title: "童話地標", emoji: "🏡" },
  { id: "dragon", title: "大蜥蜴", emoji: "🦎" },
  { id: "pillars", title: "百柱長廊", emoji: "🏛️" },
  { id: "photo-spots", title: "拍照攻略", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function ParkGuellPage() {
  const [activeSection, setActiveSection] = useState("landmarks");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
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
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-teal-50/95 to-cyan-100/95 backdrop-blur-xl border border-teal-400/40 rounded-2xl p-5 w-60 shadow-2xl shadow-teal-500/10">
          <h3 className="text-sm font-bold text-teal-700 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/30"
                      : "text-teal-700 hover:text-teal-900 hover:bg-teal-200/50"
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
          className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900 mb-8 transition-colors bg-teal-100 px-4 py-2 rounded-full hover:bg-teal-200"
        >
          ← 返回 Newsflow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-800 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-teal-500/30">
            🦎 西班牙地中海 · 高第瘋狂想像
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-900">
            走進高第的彩色童話糖果屋
          </h1>
          <h2 className="text-xl text-teal-700 font-semibold mb-4">巴塞隆納古埃爾公園（Park Güell）深度打卡與浪漫散策攻略</h2>
          <p className="text-teal-600">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/20">
          <img
            src="/images/park-guell-hero.jpg"
            alt="古埃爾公園"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-teal-600 text-sm mb-12">
          ▲ 名列聯合國教科文組織世界文化遺產、將大自然曲線與彩色馬賽克完美融合的奇幻國度 —— 古埃爾公園
        </p>

        <article className="prose prose-teal prose-lg max-w-none">
          <p id="intro">
            如果說聖家堂展現了安東尼·高第（Antoni Gaudí）對上帝虔誠、莊嚴的靈魂吶喊，那麼坐落在巴塞隆納北部山丘上的<strong>古埃爾公園（Park Güell / 奎爾公園）</strong>，則釋放了他內心深處最純真、最天馬行空的彩色童話夢。在這裏，高第徹底拋棄了傳統建築的刻板幾何形狀，將碎瓷片馬賽克拼貼工藝（Trencadís）發揮到了極致。當你漫步在五彩繽紛的波浪長椅上，眺望遠處地中海的微風，你絕對會懷疑自己是不是不小心掉進了《愛麗絲夢遊仙境》的奇幻王國。
          </p>
          <p>
            今日呢篇 Blog 就帶大家深度征服這個瘋狂的彩色花園，解鎖三個絕對不能錯過的打卡亮點，並奉上攝影師私藏的避開人潮完美拍照機位！
          </p>

          <h2 id="landmarks">🏡 糖果屋與噴泉巨龍：3 大不可錯過的童話地標</h2>

          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 border border-teal-400/50 rounded-2xl p-6 my-8">
            <h4 className="text-teal-700 font-bold mb-4 flex items-center gap-2 text-xl">
              🏗️ 歷史大翻轉：大名鼎鼎的世界遺產，當年居然是個「高級爛尾樓盤」？
            </h4>
            <p className="text-teal-800">
              這絕對是建築史上最幽默的冷知識！在 1900 年，高第的伯樂 —— 富商古埃爾伯爵（Eusebi Güell）買下這片山坡，雄心勃勃地邀請高第將其規劃成一個包含 60 棟別墅的<strong>超豪華封閉式生態富人住宅區</strong>。結果因為地理位置在當年太過偏遠、交通不便，加上設計理念太過前衛，最後<strong>整整14年竟然只賣出了 2 棟</strong>（其中一棟還是高第自己買下來住的，笑）。這個豪宅項目徹底宣告破產「爛尾」，最後被市政府收購變成了公共公園，這才成就了今日名揚世界的彩色文化遺產。
            </p>
          </div>

          <h3>世界最大、最長的「彩色波浪馬賽克長椅」</h3>
          <p>
            走上大階梯，你會來到公園中央開闘的「自然廣場（Plaça de la Natura）」。廣場邊沿環繞著一整條如巨龍般蜿蜒盤旋的<strong>立體波浪大長椅</strong>。這條長椅貼滿了無數由高第和助手從工廠收集而來的廢棄彩色碎瓷片、玻璃和瓷磚。<strong>人體工學細節：</strong>高第當年在設計椅子弧度時，特意叫一個光著屁股的工人坐在黏土上壓出痕跡，藉此精準測量出最符合人體脊椎的曲線，坐上去真的非常舒服！
          </p>

          <h3 id="dragon">公園的鎮園之寶 —— 彩色魔幻大蜥蜴（El Drac）</h3>
          <p>
            在公園正門的雙面大階梯正中央，守護著一隻全巴塞隆納人出鏡率最高的明星 —— <strong>彩色大蜥蜴（又稱高第龍）</strong>。這座同樣用碎瓷片拼貼而成的噴泉雕塑，色彩斑斕，嘴裏緩緩吐出清泉。它不僅是古埃爾公園的象徵，更是代表巴塞隆納熱情奔放、不拘一格精神的城市名片，來到這裡必須排隊同佢影張合照！
          </p>

          <div id="pillars" className="my-8">
            <img
              src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80"
              alt="古埃爾公園石柱長廊"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-teal-600 text-sm mt-4 mb-8">
              ▲ 利用當地山體原石建造的石柱高架長廊，完美融入了周邊的山林地貌
            </p>
          </div>

          <h3>幾何學奇蹟 —— 百柱廳與大自然石廊</h3>
          <p>
            在波浪平台正下方，是由 86 根巨型多立克柱子支撐的「百柱廳（Sala Hipóstila）」，原本規劃為富人區的室內菜市場。穹頂上裝飾著精美的瓷磚太陽馬賽克。而走到公園兩側，你會看到高第利用山體原石搭建的<strong>高架石廊（Viaducts）</strong>，其中最著名的「洗衣婦長廊（The Laundry Room Portico）」，石柱歪歪扭扭、傾斜得如同隨時會拍打過來的海浪，走在其中彷彿步入了一個魔幻的石頭巢穴。
          </p>

          <h2 id="photo-spots">📸 攝影師指南：如何拍出完美無人的「童話世界大片」</h2>
          <p>
            古埃爾公園是巴塞隆納僅次於聖家堂的超級激戰區，白天這裡永遠擠滿了自拍桿與遮陽帽。想要拍到乾淨、高質感的畫面，唯一的秘訣就是<strong>預約當天「最早 9:30 的頭一班門票」</strong>！進場後，<strong>一秒都不要逗留，直接衝上大階梯</strong>去拍無人的彩色大蜥蜴和兩座糖果屋門房。等拍完了大階梯，再慢悠悠地走上二樓拍波浪長椅。這時候旅行團大軍還在門口安檢，你就可以完美享受短暫的「包場」浪漫時刻。
          </p>

          <div id="tips" className="bg-gradient-to-br from-teal-800 to-cyan-900 border border-teal-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-teal-300 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 古埃爾公園 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-3 text-teal-100">
              <li className="flex gap-3">
                <span className="text-teal-300">🎟️</span>
                <span><strong>魔鬼預約守則：絕對要提前 2-3 星期網上訂票！</strong><br/>古埃爾公園現在採取<strong>嚴格的預約限流制</strong>（每半小時只放固定人數進場）。**現場是完全不設售票處、買不到任何即場門票的**！請務必提前在古埃爾公園官方 App 或網站買好普通門票 (General Admission, 約 10 歐元)。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-300">👟</span>
                <span><strong>周邊依山而建，記得穿運動鞋：</strong>公園佔據了整個大山坡，內部有大量斜坡、碎石路和石階。請務必穿一雙<strong>舒服的防滑運動鞋</strong>，不然爬完一圈山，雙腳絕對會廢掉。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-300">💰</span>
                <span><strong>注意免費區域與核心收費區：</strong>現在<strong>最精華的核心歷史遺跡區（Monumental Zone）</strong>（包括大蜥蜴、波浪長椅、糖果屋和百柱廳）已經全部納入需要門票的收費範圍。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-300">🚌</span>
                <span><strong>交通方式：</strong>最舒服、無痛的方法是搭乘<strong>巴塞隆納市區巴士 24 號或 D40 號線</strong>，這兩班巴士可以直接坐到公園的後門（山頂入口），出站後順著下坡路一路往下逛，完全不需要辛苦爬山，超級推薦！</span>
              </li>
            </ul>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-4 border border-teal-300">
              <span className="text-teal-700 font-bold">📍 地址</span>
              <p className="text-teal-800 text-sm mt-1">08024 Barcelona, Spain</p>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-4 border border-teal-300">
              <span className="text-teal-700 font-bold">🕐 開放時間</span>
              <p className="text-teal-800 text-sm mt-1">9:30-19:30（季節性調整）</p>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-4 border border-teal-300">
              <span className="text-teal-700 font-bold">💰 費用</span>
              <p className="text-teal-800 text-sm mt-1">成人約 €10</p>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-4 border border-teal-300">
              <span className="text-teal-700 font-bold">⚠️ 重要提醒</span>
              <p className="text-teal-800 text-sm mt-1">必須提前網上預訂</p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-gradient-to-r from-teal-100 to-cyan-100 border border-teal-400/50 rounded-2xl p-6 my-10">
            <h3 className="text-teal-700 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-teal-800 text-lg mb-4">
              👇 留言分享：你更喜歡坐在符合人體工學的彩色波浪長椅上看海，還是想去那兩座精緻可愛嘅「糖果屋」裡探秘呢？
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-white/80 border border-teal-300 rounded-xl px-4 py-3 text-teal-800 placeholder-teal-500 focus:outline-none focus:border-teal-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>
        </article>
      </div>
    </div>
  );
}