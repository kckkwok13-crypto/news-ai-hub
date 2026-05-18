"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🌊" },
  { id: "glico", title: "固力果跑跑人", emoji: "🏃" },
  { id: "signs", title: "立體招牌", emoji: "🎯" },
  { id: "cruise", title: "水上觀光船", emoji: "⛵" },
  { id: "food", title: "必吃美食", emoji: "🍡" },
  { id: "houchi", title: "法善寺横丁", emoji: "🏮" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

export default function DotonboriPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-950 to-zinc-950 text-white">
      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-cyan-500/10">
          <h3 className="text-sm font-bold text-cyan-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
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
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-white mb-8 transition-colors bg-zinc-800/50 px-4 py-2 rounded-full hover:bg-zinc-700/50"
        >
          ← 返回 Blog
        </Link>
        
        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-cyan-500/30">
            🌊 大阪美食
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
            大阪不夜城：道頓堀運河（Dotonbori）
          </h1>
          <h2 className="text-xl text-cyan-400 font-semibold mb-4">吃貨與霓虹夜景的天堂</h2>
          <p className="text-zinc-500">May 2026 · 作者：純粹旅人</p>
        </header>

        <img
          src="https://images.unsplash.com/photo-1590559899731-a382839e5545?w=1200src="https://static.gltjp.com/glt/data/article/21000/20444/20230926_162903_bf6866e1_w1920.webp"q=80"
          alt="道頓堀運河夜景"
          className="w-full rounded-2xl mb-4 shadow-2xl shadow-cyan-500/20"
        />
        <p className="text-center text-zinc-500 text-sm mb-12">
          ▲ 夜幕下的道頓堀運河，霓虹燈光與運河倒影構成大阪最標誌性的夜景
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro">
            如果說東京的代表是冷靜有序的澀谷十字路口，咁大阪嘅代表就一定是熱情奔放、香氣四溢的<strong>道頓堀運河（Dotonbori Canal）</strong>！呢條開鑿於17世紀的古老運河，現今已經蛻變成全日本最誇張、最迷幻的娛樂與美食重鎮。兩旁鋪天蓋地的立體巨型招牌、閃爍的霓虹燈投射喺水面上，構成咗大阪最標誌性的夜景。
          </p>
          <p>
            無論你想搵頂級的關西平民美食，定係想感受最地道的大阪熱情，跟住呢篇 Blog 帶你深度解鎖道頓堀運河的必玩、必食亮點！
          </p>

          <h2 id="glico">🌃 道頓堀運河的 3 大經典體驗</h2>
          
          <h3>1. 戎橋上與「固力果跑跑人」擺同一個 Pose！</h3>
          <p>
            橫跨運河的「戎橋」是全個區域最熱鬧的中心點。站在橋上，你就可以正面迎向那面陪伴了大阪幾十年的<strong>固力果跑跑人廣告牌</strong>。每當夜幕低垂，廣告牌的背景會不斷變換，展示跑跑人跑過世界各地的場景。來到這裡，記得入鄉隨俗，舉起雙手、抬起一隻腳，拍一張標準嘅大阪打卡相！
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1590559899731-a382839e5545?w=1200src="https://ak-d.tripcdn.com/images/1mi4e224x989zsbt5B712.jpg?proc=resize%2Fm_z%2Cw_375%2Ch_0%3Bformat%2Ff_webp%2C9C2E"q=80"
              alt="道頓堀運河夜景"
              className="w-full rounded-2xl mb-4"
            />
            <p className="text-center text-zinc-500 text-sm mb-8">
              ▲ 霓虹璀璨的道頓堀運河夜景，完美展現大阪的熱鬧繁華
            </p>
          </div>

          <h3 id="signs">2. 誇張度爆表！立體巨型招牌大巡禮</h3>
          <p>
            道頓堀沿街的店舖完全將「招牌文化」發揮到極致。你會見到會動的<strong>「蟹道樂」大螃蟹</strong>、目光兇狠的<strong>「元祖炸串」達摩大叔</strong>、巨大的<strong>章魚燒模型</strong>，甚至是一整條從牆壁飛踩出來的巨龍！呢啲極具視覺衝擊的招牌，完美展現咗大阪人幽默又誇張的商業美學。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1618397863983-55449318c4e3?w=1200src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguBvbtqk5TcFWPd07Irc1DRvyPj-WkF7OfR2mxJPe23i6cmfdca9rc9CIjpKOAMzF8rTHoufd7DEibaWNTuOo_cp17o9xBYkKUWDvmXRYKWxyww7VCWLBADbF_oaZNP5yyBDmds3HL5Wlo3yeJK_2P9JxNierd38m7ozKvWD03zUWFDDjbiK8hihE8ozfz/s2048/11705446_10152930658386146_6526082904172322605_o.jpg"q=80"
              alt="道頓堀霓虹夜景"
              className="w-full rounded-2xl mb-4"
            />
            <p className="text-center text-zinc-500 text-sm mb-8">
              ▲ 運河沿岸的霓虹燈光與建築倒影相互輝映，呈現迷離的夜色氛圍
            </p>
          </div>

          <h3 id="cruise">3. 乘搭「道頓堀水上觀光船」—— 浪漫夜航</h3>
          <p>
            想用最舒服的角度欣賞運河？咁就一定要去「太左衛門橋」乘搭黃色的<strong>水上觀光船（Tombori River Cruise）</strong>。全程大約20分鐘，活力十足的導覽員會用充滿魔性的關西腔為大家介紹沿途的9座橋樑。當船隻緩緩駛過固力果廣告牌下方時，全船人一齊揮手，氣氛簡直一流！
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1590559899731-a382839e5545?w=1200src="https://image.kkday.com/v2/image/get/c_fit%2Cq_55%2Ct_webp%2Cw_960/s1.kkday.com/product_285067/20260225053425_pXtrD/png"q=80"
              alt="道頓堀水上觀光船"
              className="w-full rounded-2xl mb-4"
            />
            <p className="text-center text-zinc-500 text-sm mb-8">
              ▲ 黃色水上觀光船穿行於霓虹夜景之間，是欣賞道頓堀的最佳方式
            </p>
          </div>

          <div id="food" className="bg-gradient-to-br from-amber-900/30 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h4 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              🐙 吃貨天堂：道頓堀必吃三大平民美食
            </h4>
            <div className="space-y-4">
              <div className="bg-zinc-800/50 rounded-xl p-4">
                <p className="text-cyan-300 font-bold mb-1">🍡 章魚燒 (Takoyaki)</p>
                <p className="text-zinc-400 text-sm">道頓堀是章魚燒的激戰區！首推「本家大章魚」或「章魚燒道樂 Wanaka」，外皮微酥、內裏爆漿，裡面的章魚塊大到讓人滿足。</p>
              </div>
              <div className="bg-zinc-800/50 rounded-xl p-4">
                <p className="text-cyan-300 font-bold mb-1">🥞 大阪燒 (Okonomiyaki)</p>
                <p className="text-zinc-400 text-sm">一定要試試歷史悠久的「美津の」或者「千房」，看著師傅在鐵板上把高麗菜、麵糊和五花肉煎得金黃，最後淋上濃郁美乃滋和柴魚片，香氣撲鼻！</p>
              </div>
              <div className="bg-zinc-800/50 rounded-xl p-4">
                <p className="text-cyan-300 font-bold mb-1">🍜 金龍拉麵</p>
                <p className="text-zinc-400 text-sm">榻榻米座席配上屋頂巨龍招牌，提供濃郁的豚骨拉麵，最正的是泡菜、韭菜和蒜泥都是免費無限添加。</p>
              </div>
            </div>
          </div>

          <h2 id="houchi">📸 攝影師秘境：法善寺橫丁</h2>
          <p>
            喺喧鬧的道頓堀運河步行唔使3分鐘，隱藏著一條彷彿時空凍結的青石板小巷 —— <strong>法善寺橫丁</strong>。這裡保留了江戶時代的小酒館風情，巷尾供奉著全身長滿綠色青苔的「水掛不動尊」。信眾參拜時會往神像身上潑水祈福，夜晚油燈亮起時，這裡靜謐的氛圍與運河的浮華形成極大對比，非常適合拍照。
          </p>

          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-6 my-10" id="tips">
            <h3 className="text-cyan-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 道頓堀 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-cyan-400">🎟️</span>
                <span className="text-zinc-300"><strong>水上觀光船優惠：</strong>如果你購買了<strong>「大阪周遊卡 (Osaka Amazing Pass)」</strong>，可以免費兌換道頓堀水上觀光船的船票（原價1000日圓），非常划算！建議下午先去換好晚上的夜航船票。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">🌙</span>
                <span className="text-zinc-300"><strong>避開人潮時間：</strong>道頓堀白天相對冷清，大部分店舖在中午甚至傍晚才營業。最佳到訪時間為<strong>晚上19:00至22:00</strong>，這時候霓虹燈全開，氣氛最正。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">🚇</span>
                <span className="text-zinc-300"><strong>交通方式：</strong>搭乘地下鐵御堂筋線、四橋線、千日前線至「難波站（Namba）」，從14號出口步行約3-5分鐘即可到達運河戎橋。</span>
              </li>
            </ul>
          </div>

          <h2>📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-cyan-400 font-bold">📍 地址</span>
              <p className="text-zinc-300 text-sm mt-1">1 Chome Dotonbori, Chuo Ward, Osaka</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-cyan-400 font-bold">🕐 開放時間</span>
              <p className="text-zinc-300 text-sm mt-1">24小時開放（店舖約11:00-23:00）</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-cyan-400 font-bold">💰 費用</span>
              <p className="text-zinc-300 text-sm mt-1">免費參觀</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-cyan-400 font-bold">⭐ 評分</span>
              <p className="text-zinc-300 text-sm mt-1">4.5/5.0（67,891 評論）</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-cyan-400 font-bold">🚇 交通</span>
              <p className="text-zinc-300 text-sm mt-1">大阪Metro 難波站 步行5分鐘</p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800/60 to-zinc-900/60 rounded-xl p-4 border border-zinc-700/50">
              <span className="text-cyan-400 font-bold">⏱️ 建議遊覽</span>
              <p className="text-zinc-300 text-sm mt-1">2-3小時</p>
            </div>
          </div>

          {/* Comment Section */}
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-cyan-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💬 留言分享
            </h3>
            <p className="text-zinc-300 text-lg mb-4">
              👇 留言分享：你最想挑戰道頓堀的邊一款美食？定係你已經同跑跑人影過相呢？
            </p>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="輸入你的留言..."
                className="w-full bg-zinc-800/60 border border-zinc-700/50 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                提交留言
              </button>
            </div>
          </div>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <script type="text/javascript">
              {`var infolinks_pid = 3445528; var infolinks_wsid = 0;`}
            </script>
            <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
          </div>
        </article>
      </div>
    </div>
  );
}