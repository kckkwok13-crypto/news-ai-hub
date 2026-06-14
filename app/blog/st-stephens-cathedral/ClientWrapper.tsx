"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useEffect, useState } from "react";
import ReadingProgress from "../../components/ReadingProgress";
import SocialShare from "../../components/SocialShare";
import StarRating from "../../components/StarRating";
import FavoriteButton from "../../components/FavoriteButton";
import RelatedPosts from "../../components/RelatedPosts";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "⛪" },
  { id: "history", title: "歷史密碼", emoji: "🔑" },
  { id: "tower", title: "登塔眺望", emoji: "🗼" },
  { id: "photo-spots", title: "打卡機位", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

const currentTags = ["維也納", "奧地利", "建築", "打卡"];

export default function StStephensCathedralPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-950 via-orange-950/50 to-red-950/30 text-white">
      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Floating Summary Card */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-amber-900/95 to-orange-900/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-5 w-60 shadow-2xl shadow-amber-500/10">
          <h3 className="text-sm font-bold text-amber-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30"
                      : "text-amber-200/70 hover:text-white hover:bg-amber-800/50"
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
          className="inline-flex items-center gap-2 text-amber-400 hover:text-white mb-8 transition-colors bg-amber-900/30 px-4 py-2 rounded-full hover:bg-amber-800/50"
        >
          ← 返回 NewsFlow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-400 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-amber-500/30">
            🇦🇹 奧地利 · 維也納心臟
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-amber-200 to-orange-300 bg-clip-text text-transparent">
            聆聽維也納的心跳
          </h1>
          <h2 className="text-xl text-amber-400 font-semibold mb-4">聖斯蒂芬大教堂（Stephansdom）深度遊覽與周邊散策攻略</h2>
          <p className="text-amber-700">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20">
          <img
            src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&q=80"
            alt="維也納聖斯蒂芬大教堂"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-amber-700 text-sm mb-12">
          ▲ 維也納市中心的天際線主宰——聖斯蒂芬大教堂的標誌性南塔與彩色瓦片屋頂
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <p id="intro">
            如果說有一座建築能代表維也納的灵魂，那一定是佇立於市中心格拉本大街（Graben）南端的<strong>聖斯蒂芬大教堂（Stephansdom / St. Stephen&apos;s Cathedral）</strong>。這座建於12世紀的羅馬式與哥德式混合建築，不僅是維也納總教區的主教座堂，更是哈布斯堡王朝數百年權力的精神象徵。教堂南塔高達136.44米，與北塔相映成趣，已成為維也納天際線最具辨識度的標誌。
          </p>
          <p>
            走進教堂內部，你會被那高聳的廳柱、璀璨的彩色玻璃窗，以及莊嚴的氣氛所震撼。而登上343級台階登上南塔頂端，俯瞰整個維也納舊城區，更是每位旅人必打卡嘅體驗。無論你是否對建築或歷史有興趣，聖斯蒂芬大教堂都值得你花上半天時間細細品味。
          </p>

          <div id="history" className="bg-gradient-to-br from-amber-900/50 to-orange-900/40 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⏰ 世紀的疊加：聖斯蒂芬大教堂的 3 大歷史密碼
            </h3>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">1. 四個時代的建築疊加</h4>
            <p className="text-amber-100/80">
              聖斯蒂芬大教堂的獨特之處在於它是一部「活著的建築史書」。教堂分為四個主要部分，見證了四個不同時代的建築風格：<strong>12世紀的羅馬式地基</strong>、<strong>13世紀的哥德式合唱堂</strong>、<strong>15世紀壯觀的南塔</strong>，以及<strong>1945年戰後重建的北塔</strong>。走進教堂，你會發現不同時代的痕跡和諧共存，形成獨一無二的建築景觀。
            </p>

            <h4 className="text-lg font-semibold text-white mt-6 mb-3">2. 拿破崙與聖斯蒂芬大教堂</h4>
            <p className="text-amber-100/80">
              歷史上著名的<strong>拿破崙戰爭</strong>也與這座教堂有著戲劇性的聯繫。1805年，拿破崙在奧斯特里茨戰役擊敗俄奧聯軍後，曾在教堂廣場上檢閱軍隊。1809年，教堂在法軍轟炸中嚴重受損，北塔被大火焚毀。現在遊客看到的北塔頂部，就是戰後重建的成果。
            </p>

            <div className="bg-gradient-to-br from-yellow-900/40 to-amber-900/30 border border-yellow-500/30 rounded-xl p-5 my-6">
              <h4 className="text-yellow-400 font-bold mb-3 flex items-center gap-2">
                ✨ 皇家珍寶：地下墓穴與皇家棺材
              </h4>
              <p className="text-amber-100/80">
                教堂地下墓穴安葬著多位哈布斯堡家族成員的內臟器官，而聖斯蒂芬大教堂亦收藏了大量中世紀珍貴文物，包括<strong>12世紀的銀聖物箱</strong>、<strong>15世紀的祭壇畫</strong>，以及一系列由神聖羅馬帝國皇帝捐贈的藝術品。
              </p>
            </div>
          </div>

          <h2 id="tower">🗼 登塔眺望：俯瞰維也納全景</h2>
          <p>
            聖斯蒂芬大教堂的南塔是維也納最高的觀景點之一。遊客可以付費乘坐電梯（部分路段需步行）到達<strong>觀景台</strong>，360度俯瞰維也納舊城區、環城大道（Ringstrasse）的壯麗建築，以及遠處的維也納森林（Wienerwald）。
          </p>
          <p>
            塔頂的風景在日出、日落時分最為動人。如果時間允許，建議安排在傍晚时分登塔，看著夕陽將維也納染成金黃色，然後等待城市萬家燈火逐漸亮起。
          </p>

          <h2 id="photo-spots">📸 攝影師私藏：聖斯蒂芬大教堂 4 大終極打卡機位</h2>
          <p>
            聖斯蒂芬大教堂周邊是維也納最熱鬧的區域，想要拍出與眾不同的作品，以下四個角度請一定要收藏好：
          </p>

          <h3>① 格拉本大街遠攝——壓縮透視的經典視角</h3>
          <p>
            站在格拉本大街（Graben）南端往北拍，利用街道的透視效果，讓聖斯蒂芬大教堂的南塔成為畫面的視覺焦點。建議使用70-200mm長焦鏡頭拍攝，可以獲得極具壓縮感的透視效果。這也是維也納最經典的旅遊宣傳照角度。
          </p>

          <div className="my-8">
            <img
              src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=1200&q=80"
              alt="維也納城市景觀"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-amber-700 text-sm mt-4 mb-8">
              ▲ 從格拉本大街遠眺聖斯蒂芬大教堂，南塔巍然聳立於維也納天際線
            </p>
          </div>

          <h3>② 教堂廣場低角度仰拍——震撼的透視衝擊</h3>
          <p>
            走到教堂正門前的小廣場，把相機放低仰拍南塔。使用超廣角鏡頭可以拍出極具視覺衝擊力的照片，南塔仿佛要突破畫面直插雲霄。這種角度最能表現出教堂的雄偉與崇高。
          </p>

          <h3>③ 斯蒂芬廣場東側長廊——彩色瓦片屋頂特寫</h3>
          <p>
            走到斯蒂芬廣場（Stephansplatz）東側的小巷，利用長焦鏡頭捕捉南塔上半部分的<strong>彩色幾何圖案瓦片屋頂</strong>。這是教堂最具辨識度的元素之一，由23萬片彩色瓷磚拼成，展現了高超的工藝水準。
          </p>

          <h3>④ 地下墓穴入口——神秘的中世紀氛圍</h3>
          <p>
            購買教堂地下墓穴門票後，在入口台階處往內拍。這裡光線昏黃，石壁古舊，充滿神秘的中世紀氛圍。配合教堂內的莊嚴音樂，是拍攝人文風格照片的绝佳場所。
          </p>

          <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/40 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              💡 聖斯蒂芬大教堂 旅遊實用小貼士 (Travel Tips)
            </h3>
            <ul className="space-y-3 text-amber-100/80">
              <li className="flex gap-3">
                <span className="text-amber-400">🎟️</span>
                <span><strong>門票資訊：</strong>教堂主體參觀免費，但登塔（電梯+樓梯混合）、地下墓穴、珍寶館需另外購票。推薦購買<strong>聯票</strong>（Combined Ticket），可參觀所有開放區域，成人約 €16 起。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">⛪</span>
                <span><strong>彌撒時間：</strong>教堂平日有彌撒活動，參加時請保持安靜尊重。週日可能因禮儀活動部分區域關閉，建議提前查詢官方網站。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400">🌅</span>
                <span><strong>最佳拍攝時間：</strong>建議在<strong>清晨或傍晚</strong>前來。清晨廣場人流稀少，傍晚則可拍到金色夕陽下的南塔剪影。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">🚇</span>
                <span><strong>交通方式：</strong>乘搭維也納地鐵 U1 或 U3 線至 <strong>Stephansplatz（斯蒂芬廣場站）</strong>，出口即達教堂廣場。從維也納火車總站（Hbf）步行約15分鐘亦可到達。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">👔</span>
                <span><strong>穿著要求：</strong>作為宗教場所，請穿著端莊。建議避免短褲、無袖上衣或暴露服裝。</span>
              </li>
            </ul>
          </div>

          <h2>📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/60 rounded-xl p-4 border border-amber-700/30">
              <span className="text-amber-400 font-bold">📍 地址</span>
              <p className="text-amber-100/80 text-sm mt-1">Stephansplatz 1, 1010 Wien, Austria</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/60 rounded-xl p-4 border border-amber-700/30">
              <span className="text-amber-400 font-bold">🕐 開放時間</span>
              <p className="text-amber-100/80 text-sm mt-1">週一至週六 10:00-17:30<br/>週日及假日 13:00-17:30</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/60 rounded-xl p-4 border border-amber-700/30">
              <span className="text-amber-400 font-bold">💰 費用</span>
              <p className="text-amber-100/80 text-sm mt-1">教堂參觀免費<br/>聯票約 €16 起</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/60 rounded-xl p-4 border border-amber-700/30">
              <span className="text-amber-400 font-bold">⭐ 評分</span>
              <p className="text-amber-100/80 text-sm mt-1">4.8/5.0（67,892 評論）</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/60 rounded-xl p-4 border border-amber-700/30">
              <span className="text-amber-400 font-bold">🚇 交通</span>
              <p className="text-amber-100/80 text-sm mt-1">地鐵 Stephansplatz 站</p>
            </div>
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/60 rounded-xl p-4 border border-amber-700/30">
              <span className="text-amber-400 font-bold">⏱️ 建議遊覽</span>
              <p className="text-amber-100/80 text-sm mt-1">2-3小時</p>
            </div>
          </div>

          {/* Infolinks Ad Script */}
          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          {/* Star Rating */}
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/20 border border-amber-500/30 rounded-2xl p-6 my-10">
            <h3 className="text-amber-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⭐ 給這個景點評分
            </h3>
            <StarRating slug="st-stephens-cathedral" />
          </div>

          {/* Social Share */}
          <div className="bg-amber-900/30 rounded-2xl p-6 my-10 border border-amber-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">📤 分享給朋友</h3>
            <SocialShare
              title="⛪ 聆聽維也納的心跳：聖斯蒂芬大教堂深度遊覽與周邊散策攻略"
            />
          </div>

          {/* Favorite Button */}
          <div className="flex justify-center my-8">
            <div className="bg-amber-900/30 rounded-2xl p-6 border border-amber-700/30 flex items-center gap-4">
              <span className="text-amber-100/80">加入心願清單：</span>
              <FavoriteButton slug="st-stephens-cathedral" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          {/* Related Posts */}
          <RelatedPosts currentSlug="st-stephens-cathedral" currentTags={currentTags} />
        </article>
      </div>


        {/* Comments Section */}
      <Comments slug="st-stephens-cathedral" />
    </div>
  );
}