"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const tocItems = [
  { id: "history", title: "歷史核心", emoji: "⚔️" },
  { id: "photography", title: "攝影攻略", emoji: "📸" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

interface Comment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

export default function BrandenburgGatePage() {
  const [activeSection, setActiveSection] = useState("history");
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch("/api/comments?slug=brandenburg-gate");
      const data = await res.json();
      if (data.comments) setComments(data.comments);
    } catch (err) {
      console.error("Failed to fetch comments", err);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: "brandenburg-gate",
          author: "匿名旅人",
          content: newComment,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setComments([data.comment, ...comments]);
        setNewComment("");
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Failed to submit comment", err);
      setSubmitStatus("error");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-stone-50 to-amber-50">
      {/* Floating TOC */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-amber-500/40 rounded-2xl p-5 w-60 shadow-2xl shadow-amber-500/10">
          <h3 className="text-sm font-bold text-amber-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg shadow-amber-500/30"
                      : "text-amber-100 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <span className="text-lg">{emoji}</span>
                  <span>{title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors bg-amber-100 px-4 py-2 rounded-full hover:bg-amber-200"
          >
            ← Newsflow
          </Link>
          <Link
            href="/blog"
            className="text-amber-600 hover:text-amber-800 transition-colors"
          >
            | Blog
          </Link>
        </div>

        {/* Header */}
        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-amber-500/30">
            ⚔️ 德意志地標 · 世紀風雲
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
            🏛️ 見證德意志的世紀風雲
          </h1>
          <h2 className="text-xl text-amber-700 font-semibold mb-4">柏林勃蘭登堡門（Brandenburg Gate）深度打卡與和平祭壇攻略</h2>
          <p className="text-stone-500">June 2026 · 作者：純粹旅人</p>
        </header>

        {/* Hero Image */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20">
          <img
            src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1400&q=80"
            alt="柏林勃蘭登堡門"
            className="w-full h-80 object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1400&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white text-sm">
              落成於 1791 年、歷經普魯士榮耀、拿破崙掠奪、冷戰分裂與兩德統一的國家象徵 —— 勃蘭登堡門
            </p>
          </div>
        </div>

        {/* Main Content */}
        <article className="prose prose-stone prose-lg max-w-none">
          {/* Introduction */}
          <section id="intro">
            <p className="text-stone-700 text-lg leading-relaxed mb-6">
              如果說有一座建築，能將兩百多年來德意志民族的榮耀、屈辱、分裂與重生徹底凝聚於一身，那絕對非矗立在柏林市中心的<strong className="text-amber-600">勃蘭登堡門（Brandenburg Gate / Brandenburger Tor）</strong>莫屬。這座高 26 米、寬 65.5 米的新古典主義巨型砂岩門樓，最初是普魯士國王腓特烈·威廉二世為了紀念七年戰爭勝利、祈求國家和平而建。幾百年間，它默默見證了拿破崙的鐵騎、希特勒的瘋狂、柏林圍牆的分裂，以及最終冷戰結束、兩德統一的淚水。當你站在空曠的巴黎廣場上，撫摸著那粗獷的多立克石柱，那份沉甸甸的歷史厚重感，絕對會讓你肅然起敬。
            </p>
            <p className="text-stone-700 text-lg leading-relaxed mb-10">
              今日呢篇 Blog 就帶大家深度漫步這座「和平祭壇」，解鎖頂部雕像背後的戰火恩怨，並奉上攝影師私藏的黃昏夜拍絕美機位！
            </p>
          </section>

          {/* History Section */}
          <section id="history" className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <span>⚔️</span> 世紀風雲的歷史心跳：勃蘭登堡門 3 大核心必看點
            </h2>

            {/* Point 1 */}
            <div className="bg-gradient-to-r from-slate-100 to-amber-50 rounded-2xl p-6 mb-8 border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                1. 打開希臘美學大門 —— 仿阿克羅波利斯的新古典神作
              </h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                勃蘭登堡門的外觀極具古希臘神聖美感，因為它的設計靈感精準地源自雅典衛城的山門（Propylaea）。門樓由 12 根巨大的多立克柱（Doric Columns）組成，前後各 6 根，巧妙地形成了 5 個通道。
              </p>
              <p className="text-stone-700 leading-relaxed">
                <strong className="text-amber-600">王室特權祕辛：</strong>在古代普魯士時期，只有皇室成員、以及獲得特許的外國元首才能走最中央、最寬闊的那條「皇帝通道」，平民百姓只能從兩側狹窄的通道進城，如今這裡早已對全球遊客免費開放，你可以肆意穿梭！
              </p>
            </div>

            {/* Highlight Box */}
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-6 mb-8 border border-amber-300 shadow-lg">
              <h4 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                🦅 被拿破崙擄走的戰利品 —— 「勝利女神與四馬戰車」（Quadriga）
              </h4>
              <p className="text-stone-700 leading-relaxed mb-4">
                門樓頂部最耀眼的靈魂，是一尊由青銅打造、駕駛著四馬雙輪戰車向城內奔馳的<strong className="text-amber-600">勝利女神維多利亞 (Victoria)</strong> 雕像。但在 1806 年，普魯士軍隊被法國拿破崙徹底擊敗，傲慢的拿破崙進城後，下令將整尊精美的勝利女神雕像拆解、裝箱打包作為戰利品運回巴黎！這對普魯士人來說是莫大的恥辱。
              </p>
              <p className="text-stone-700 leading-relaxed">
                直到 8 年後（1814年）普魯士軍隊反攻巴黎打敗拿破崙，才揚眉吐氣地將女神接回柏林。回歸後，建築師特意在女神手中的橡樹花環中央加了一枚<strong className="text-amber-600">象徵鐵血榮譽的「鐵十字勳章」</strong>，並在上方加上一隻展翅的普魯士神鷹，以此宣示主權與復仇的榮耀。
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-gradient-to-r from-slate-100 to-amber-50 rounded-2xl p-6 mb-8 border-l-4 border-amber-600">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                2. 兩德分裂與重生的歷史傷痕 —— 柏林圍牆的「哭牆」
              </h3>
              <p className="text-stone-700 leading-relaxed mb-4">
                冷戰時期（1961-1989年），大名鼎鼎的柏林圍牆（Berlin Wall）剛好以一道冰冷的弧線從勃蘭登堡門的正後方攔腰築起！這座門樓尷尬地被劃入了東柏林（蘇聯控制區）的軍事邊境禁區之內，無論是西德人還是東德人都無法再靠近它。
              </p>
              <p className="text-stone-700 leading-relaxed">
                當時的美國總統雷根曾站在這裡對著圍牆大喊：<em className="text-amber-600">「戈巴契夫先生，請推倒這堵牆！」</em> 1989 年圍牆倒塌、冷戰結束，成千上萬的東西德同胞在勃蘭登堡門下相擁痛哭，這裡從分裂的符號瞬間昇華為全人類自由與團結的終極象徵。
              </p>
            </div>

            {/* Second Image - Reichstag */}
            <div className="my-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20">
                <img
                  src="https://images.unsplash.com/photo-1592496001020-d6d2b1b7553d?w=1400&q=80"
                  alt="國會大廈玻璃穹頂"
                  className="w-full h-72 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1400&q=80";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-sm">
                    順遊推薦 —— 象徵德國當代民主與環保科技的國會大廈（Reichstag）玻璃穹頂
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Photography Section */}
          <section id="photography" className="mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <span>📸</span> 攝影師指南：如何拍出極致大氣的「帝國藍調夜景」
            </h2>
            <p className="text-stone-700 text-lg leading-relaxed mb-6">
              勃蘭登堡門正前方的巴黎廣場（Pariser Platz）非常空曠且常年行人不斷。想要拍出高級的大片，這兩個私藏機位一定要記好：
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-900/80 to-slate-800 rounded-2xl p-6 border border-amber-500/30 shadow-xl">
                <h4 className="text-xl font-semibold text-amber-400 mb-3">
                  🌅 黃金中軸線正拍：廣場噴泉對稱視角
                </h4>
                <p className="text-amber-100 leading-relaxed">
                  黃昏時分，走到巴黎廣場兩側精緻的矩形噴泉水池後方。將相機放低貼近水面，利用微風拂過、波光粼粼的水面作為天然前景，仰拍正前方大門。當日落落入西邊的六月十七日大街，天空展現出深邃的皇家藍調，大門的金黃色夜燈亮起，拍出來的照片色彩對比強烈，史詩感滿分。
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-900/80 to-slate-800 rounded-2xl p-6 border border-amber-500/30 shadow-xl">
                <h4 className="text-xl font-semibold text-amber-400 mb-3">
                  🌧️ 經典倒影雨天網美照：廣場石磚透視
                </h4>
                <p className="text-amber-100 leading-relaxed">
                  如果去柏林不幸遇到下雨，千萬別沮喪！雨後的巴黎廣場黑色石磚地會像一面巨型的黑色鏡子。站在大門前方約 50 米處，用低角度拍攝大門在濕滑地面上的金黃色完整倒影，畫面帶有一種肅穆、深邃的歐式老電影質感。
                </p>
              </div>
            </div>
          </section>

          {/* Travel Tips */}
          <section id="tips" className="mb-16">
            <div className="bg-gradient-to-br from-slate-800 to-amber-900 border border-amber-500/30 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-3">
                💡 勃蘭登堡門 旅遊實用小貼士 (Travel Tips)
              </h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <span className="text-amber-400 text-2xl">🆓</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">完全免費！全天候開放參觀</h4>
                    <p className="text-amber-100">
                      勃蘭登堡門是一座位於市中心的開放式歷史地標，<strong className="text-white">完全不需要門票、也沒有圍欄阻擋</strong>，24小時對公眾開放。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-amber-400 text-2xl">⚠️</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">警惕廣場「扮軍人」與換錢騙局</h4>
                    <p className="text-amber-100">
                      大門正前方的廣場上，長年有許多穿著舊東德或美國冷戰時期軍服的街頭藝人熱情邀你合照，拍完後會開出高價索取小費；另外，如果有陌生人拿著厚厚的歐元或舊馬克過來詢問你是否需要「優惠換匯」，<strong className="text-white">請絕對嚴肅無視拒絕</strong>，這100%是掉包和盜竊的犯罪團伙。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-amber-400 text-2xl">🏛️</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">順遊免費國會大廈玻璃穹頂（必須提前網上預約）</h4>
                    <p className="text-amber-100">
                      從勃蘭登堡門往北步行只需 3 分鐘，即可來到<strong className="text-white">德國國會大廈 (Reichstag)</strong>。你可以免費預約登上由大師諾曼·福斯特設計的巨大全玻璃透明穹頂！沿著螺旋通道漫步到頂端，一邊聽著免費的中文語音導覽，一邊 360 度鳥瞰柏林老城與勃蘭登堡門的上帝視角，非常震撼。但注意：<strong className="text-white">這裏必須提前 2-4 星期在德國國會官網實名預約</strong>，現場排隊名額極少。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-amber-400 text-2xl">🚇</span>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">交通方式</h4>
                    <p className="text-amber-100">
                      乘搭柏林地鐵 S-Bahn (S1, S2, S25) 或地鐵 U-Bahn (U5) 直接在 <strong className="text-white">Brandenburger Tor 站</strong> 出站。一走出地鐵扶手電梯大門，宏偉的勃蘭登堡門就會直接在距離你不到二十米的位置震撼現身！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-5 text-center border border-amber-300">
              <div className="text-2xl mb-2">📍</div>
              <div className="text-stone-500 text-sm">位置</div>
              <div className="text-slate-800 font-semibold">巴黎廣場</div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-5 text-center border border-amber-300">
              <div className="text-2xl mb-2">🏛️</div>
              <div className="text-stone-500 text-sm">落成年份</div>
              <div className="text-slate-800 font-semibold">1791年</div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-5 text-center border border-amber-300">
              <div className="text-2xl mb-2">🎫</div>
              <div className="text-stone-500 text-sm">門票</div>
              <div className="text-slate-800 font-semibold">免費</div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-5 text-center border border-amber-300">
              <div className="text-2xl mb-2">🚇</div>
              <div className="text-stone-500 text-sm">交通</div>
              <div className="text-slate-800 font-semibold">U5 S1-S25</div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-8 text-center mb-16">
            <p className="text-white text-xl mb-4">
              👇 留言分享：你更想在清晨幽靜的晨霧中漫步巴黎廣場，還是渴望在暮色下聽一場大門背後關於冷戰與統一的世紀風雲故事呢？
            </p>
          </div>

          {/* Comments Section */}
          <section className="bg-gradient-to-br from-slate-100 to-amber-50 rounded-2xl p-8 border border-amber-200 mb-12">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">💬 留言</h3>

            {/* Comment Form */}
            <form onSubmit={handleSubmitComment} className="mb-8">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="分享你的勃蘭登堡門遊記..."
                className="w-full bg-white text-slate-800 rounded-xl p-4 mb-4 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-amber-500 border border-amber-200"
              />
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !newComment.trim()}
                  className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 disabled:from-slate-400 disabled:to-slate-500 text-white px-6 py-3 rounded-xl font-semibold transition-all"
                >
                  {isSubmitting ? "發布中..." : "發布留言"}
                </button>
                {submitStatus === "success" && (
                  <span className="text-green-600">✅ 留言已發布！</span>
                )}
                {submitStatus === "error" && (
                  <span className="text-red-600">❌ 發布失敗，請重試</span>
                )}
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
              {comments.length === 0 ? (
                <p className="text-stone-500 text-center py-8">暫時未有留言，開始分享你的遊記吧！</p>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className="bg-white rounded-xl p-5 border border-amber-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-amber-600 font-semibold">{comment.author}</span>
                      <span className="text-stone-400 text-sm">{comment.createdAt}</span>
                    </div>
                    <p className="text-stone-600">{comment.content}</p>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Back Link */}
          <div className="text-center">
            <Link href="/blog" className="text-amber-600 hover:text-amber-800 hover:underline">
              ← 返回 Blog 列表
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}