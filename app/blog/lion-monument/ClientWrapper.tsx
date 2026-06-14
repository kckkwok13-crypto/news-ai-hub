"use client";
import Comments from "@/components/Comments";

import Link from "next/link";
import { useState } from "react";
import ReadingProgress from "../../components/ReadingProgress";
import SocialShare from "../../components/SocialShare";
import StarRating from "../../components/StarRating";
import FavoriteButton from "../../components/FavoriteButton";
import RelatedPosts from "../../components/RelatedPosts";

const tocItems = [
  { id: "intro", title: "介紹", emoji: "🦁" },
  { id: "history", title: "1792年悲劇", emoji: "📊" },
  { id: "experience", title: "實地遊覽", emoji: "🌲" },
  { id: "tips", title: "實用提示", emoji: "💡" },
];

const currentTags = ["琉森", "瑞士", "獅子紀念碑", "歷史"];

export default function LionMonumentPage() {
  const [activeSection, setActiveSection] = useState("intro");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900/50 to-zinc-900/30 text-white">
      <ReadingProgress />

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gradient-to-br from-gray-800/95 to-slate-800/95 backdrop-blur-xl border border-gray-600/30 rounded-2xl p-5 w-60 shadow-2xl shadow-gray-500/10">
          <h3 className="text-sm font-bold text-gray-400 mb-4 flex items-center gap-2">
            📋 目錄導覽
          </h3>
          <ul className="space-y-1">
            {tocItems.map(({ id, title, emoji }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-gray-500 to-slate-500 text-white shadow-lg shadow-gray-500/30"
                      : "text-gray-300/70 hover:text-white hover:bg-gray-700/50"
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
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors bg-gray-800/30 px-4 py-2 rounded-full hover:bg-gray-700/50"
        >
          ← 返回 NewsFlow
        </Link>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-400 mb-8 ml-6 transition-colors"
        >
          | Blog
        </Link>

        <header className="text-center py-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-500 to-slate-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-gray-500/30">
            🇨🇭 瑞士 · 琉森
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-slate-300 bg-clip-text text-transparent">
            世界上最悲傷的石頭
          </h1>
          <h2 className="text-xl text-gray-400 font-semibold mb-4">瑞士琉森獅子紀念碑（Löwendenkmal）深度遊覽攻略</h2>
          <p className="text-gray-600">June 2026 · 作者：純粹旅人</p>
        </header>

        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl shadow-gray-500/20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/01/Lion_Monument.jpg"
            alt="琉森垂死獅子紀念碑"
            className="w-full h-80 object-cover"
          />
        </div>
        <p className="text-center text-gray-600 text-sm mb-12">
          ▲ 隱藏在琉森舊城森林幽谷中的垂死獅子紀念碑，馬克·吐溫稱其為「世界上最讓人心碎的雕塑」
        </p>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="bg-gradient-to-br from-gray-900/50 to-slate-900/40 border border-gray-600/30 rounded-2xl p-6 my-8">
            <p className="text-gray-300 text-lg italic leading-relaxed border-l-4 border-yellow-500/50 pl-6">
              「馬克·吐溫說，這是世界上最讓人心碎、最感人的一塊石頭；而當你站在這面被幽靜森林環繞的巨型花崗岩崖壁前，看著那隻利箭穿心、神態痛苦卻死死用身軀護著波旁王朝盾牌的巨獅，你才會明白：這不是一尊冰冷的雕塑，而是一曲用鮮血與絕對忠誠譜寫的長眠哀歌。」
            </p>
          </div>

          <p id="intro">
            如果說卡貝爾橋展現了琉森（Lucerne）溫柔繾綣的湖畔風情，那麼隱藏在老街背後、掩映在蔥鬱樹林之中的<strong>垂死獅子紀念碑（Lion Monument / Löwendenkmal）</strong>，無疑就是這座瑞士山城最沉重、最直擊靈魂的歷史圖騰。這座完全在一面巨型砂岩採石場崖壁上<strong>純手工鑿刻而成</strong>的巨幅雕塑，長 10 米，高 6 米，落成於 1821 年。它不僅是一件卓越的藝術品，更是一座記錄了 1792 年法國大革命期間，一場震驚歐洲的血腥大屠殺的紀念碑。
          </p>

          <div id="history" className="bg-gradient-to-br from-gray-900/50 to-slate-900/40 border border-gray-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-gray-400 font-bold mb-4 flex items-center gap-2 text-xl">
              📊 1792年鐵血悲歌：杜樂麗宮保衛戰大數據
            </h3>

            <p className="text-gray-100/80 mb-4">
              這尊悲傷巨獅背後，隱藏著一段令人头皮发麻的真實大屠殺大數據。在 1792 年 8 月 10 日法國大革命風暴中，憤怒的起義暴民瘋狂圍攻巴黎杜樂麗宮（Tuileries）。當時懦弱的法國國王路易十六早已棄宮逃跑，並下達了「不准向平民開槍」的荒謬命令。然而，負責守衛皇宮的 <strong>1,100 多名瑞士雇傭兵（Swiss Guards）</strong>，出於對契約與職業操守的極致忠誠，死守陣地絕不投降，最終幾乎全軍覆沒。
            </p>

            <div className="bg-gradient-to-br from-red-900/40 to-red-800/20 border border-red-700/30 rounded-xl p-5 my-6">
              <h4 className="text-red-400 font-bold mb-4 text-lg">傷亡統計</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-500">786</p>
                  <p className="text-red-300/70 text-sm">戰死與被屠殺 (71.5%)</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-gray-400">350</p>
                  <p className="text-gray-400/70 text-sm">死裡逃生 (28.5%)</p>
                </div>
              </div>
            </div>

            <p className="text-gray-100/80 text-sm">
              這場慘劇直接催生了日後瑞士堅決中立的國策 —— 瑞士從此不再向外輸出雇傭兵。
            </p>
          </div>

          <h2 id="experience">🌲 第一身沉浸實感：在萬樹沙沙與綠池如淚間凝望不朽</h2>

          <div className="my-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Pilatus_Lake_Lucerne.jpg/1280px-Pilatus_Lake_Lucerne.jpg"
              alt="琉森湖畔風光"
              className="w-full rounded-2xl"
            />
            <p className="text-center text-gray-600 text-sm mt-4 mb-8">
              ▲ 琉森湖畔的寧靜風光，距離獅子紀念碑僅十分鐘步行路程
            </p>
          </div>

          <p>
            從小城熱鬧的低岸天鵝廣場步行約 10 分鐘，拐進一條幽靜的林蔭小巷，四周的市井喧囂瞬間退去，取而代之的是阿爾卑斯松樹林沙沙的葉浪聲。一抬頭，那一整面高聳、斑駁、帶著千年地質層理的花崗岩巨型崖壁便排山倒海般在眼前鋪開。這是一座隱藏在城市中心的綠色幽谷。
          </p>

          <p>
            崖壁中央，那隻被純手工一鑿一斧雕刻出來的巨獅在深邃的石窟中默默躺著，背部那根折斷的矛狠狠刺入骨血，它緊鎖的眉頭、微張的嘴巴、以及眼角下彷彿乾涸了的淚痕線條，將瀕死之際的痛苦、不甘與無上忠誠展現得淋漓盡致，強烈的視覺衝擊力會讓你的靈魂瞬間被死死揪住。
          </p>

          <p>
            雕塑下方是一汪如鏡面般平靜、半透明的翡翠碧綠色水池，池水清澈得能看見掉落的松針。這汪水池被當地人悲情地稱為「全瑞士最深沉的淚水」。當黃昏時分，一縷金色的夕陽斜斜地穿透密密的樹冠，正好投射在巨獅那泛白的石質身軀上，周邊的綠池倒影流光溢彩。
          </p>

          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/30 border border-green-700/30 rounded-xl p-5 my-8">
            <h3 className="text-green-400 font-bold mb-3 flex items-center gap-2">
              🎨 歷史大解密：托瓦爾森的「憤怒野豬」黑色幽默
            </h3>
            <p className="text-gray-100/80 mb-3">
              這尊莊嚴的雕像背後，隱藏著一段令人啼笑皆非的故事：丹麥大師托瓦爾森（Bertel Thorvaldsen）完成了完美的黏土模型設計後，琉森當地的發起人卻因為資金短缺，<strong>嚴重拖欠了大師的一大筆雕刻尾款</strong>。
            </p>
            <p className="text-gray-100/80">
              脾氣古怪的大師嘴上沒說，卻在純手工雕刻石窟外廓時進行了天才般的暗中復仇：如果你現在站得稍遠一點，仔細觀察包裹著巨獅的那個巨型石窟外沿線條，你會驚覺：<strong>整個石窟的外形竟然被精確地雕刻成了一隻巨大的「野豬」輪廓！</strong>
            </p>
          </div>

          <h2 id="tips">💡 精明自遊：獅子紀念碑完美避坑隨身手札</h2>

          <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/40 border border-gray-600/30 rounded-2xl p-6 my-10">
            <ul className="space-y-4 text-gray-100/80">
              <li className="flex gap-3">
                <span className="text-yellow-400">🎟️</span>
                <span><strong>100% 完全免費：</strong>獅子紀念碑是一座全開放式的公共歷史公園，<strong>完全免費、無須任何門票、且 24 小時全天候對外開放</strong>！</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400">📸</span>
                <span><strong>攝影師私藏機位：</strong>最佳拍照點是站在池塘正前方的右側觀景台。將鏡頭拉長焦至 50mm-85mm，將大樹的綠葉作為天然的微焦框邊，能拍出極具大氣的電影分鏡畫面。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400">🚌</span>
                <span><strong>交通方式：</strong>從琉森火車站乘搭 <strong>1 號、19 號、22 號或 23 號公共大巴</strong>，在 <strong>Löwenplatz 站</strong> 下車，下車後步行 1 分鐘即可抵達。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-400">🌅</span>
                <span><strong>最佳遊覽時間：</strong>清晨九點前與傍晚六點後最能體會原著的史詩感，這兩個時段遊客稀少，光線柔和，最適合靜靜沉思。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400">🙏</span>
                <span><strong>共同維護歷史莊嚴：</strong>這裏不是熱鬧的嬉戲遊樂場，而是一座存放著 786 名忠魂靈魂的精神公墓。請務必保持輕聲細語，嚴禁大聲喧嘩或嬉戲打鬧。</span>
              </li>
            </ul>
          </div>

          <h2>📊 景點資訊一覽</h2>
          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/60 rounded-xl p-4 border border-gray-700/30">
              <span className="text-gray-400 font-bold">📍 地址</span>
              <p className="text-gray-100/80 text-sm mt-1">Denkmalstrasse 4, 6006 Luzern, Switzerland</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/60 rounded-xl p-4 border border-gray-700/30">
              <span className="text-gray-400 font-bold">🕐 開放時間</span>
              <p className="text-gray-100/80 text-sm mt-1">24小時全天候開放<br/>免費參觀</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/60 rounded-xl p-4 border border-gray-700/30">
              <span className="text-gray-400 font-bold">💰 費用</span>
              <p className="text-gray-100/80 text-sm mt-1">完全免費<br/>無須門票</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/60 rounded-xl p-4 border border-gray-700/30">
              <span className="text-gray-400 font-bold">⭐ 評分</span>
              <p className="text-gray-100/80 text-sm mt-1">4.8/5.0（28,432 評論）</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/60 rounded-xl p-4 border border-gray-700/30">
              <span className="text-gray-400 font-bold">🚇 交通</span>
              <p className="text-gray-100/80 text-sm mt-1">巴士至 Löwenplatz 站</p>
            </div>
            <div className="bg-gradient-to-br from-gray-900/50 to-zinc-900/60 rounded-xl p-4 border border-gray-700/30">
              <span className="text-gray-400 font-bold">⏱️ 建議遊覽</span>
              <p className="text-gray-100/80 text-sm mt-1">1-2小時</p>
            </div>
          </div>

          <div className="my-8 text-center">
            <ins className="infolinks_ad" data-pid="3445528" data-wsid="0"></ins>
          </div>

          <div className="bg-gradient-to-r from-gray-900/30 to-zinc-900/20 border border-gray-600/30 rounded-2xl p-6 my-10">
            <h3 className="text-gray-400 font-bold mb-4 flex items-center gap-2 text-xl">
              ⭐ 給這個景點評分
            </h3>
            <StarRating slug="lion-monument" />
          </div>

          <div className="bg-gray-900/30 rounded-2xl p-6 my-10 border border-gray-700/30">
            <h3 className="text-white font-bold mb-4 text-xl">📤 分享給朋友</h3>
            <SocialShare
              title="🦁 世界上最悲傷的石頭：瑞士琉森獅子紀念碑深度遊覽攻略"
            />
          </div>

          <div className="flex justify-center my-8">
            <div className="bg-gray-900/30 rounded-2xl p-6 border border-gray-700/30 flex items-center gap-4">
              <span className="text-gray-100/80">加入心願清單：</span>
              <FavoriteButton slug="lion-monument" className="!bg-red-500/20 !text-red-400 hover:!bg-red-500/30" />
            </div>
          </div>

          <div className="border-t border-gray-700/30 pt-8 mt-8">
            <p className="text-gray-400 italic text-center">
              歷史鐫刻於砂岩，忠誠長留於森林。願每位造訪這片綠色幽谷的旅人，都能在琉森的巨獅眼淚中找到屬於自己的思辨夢。
            </p>
          </div>

          <RelatedPosts currentSlug="lion-monument" currentTags={currentTags} />
        </article>
      </div>

      <Comments slug="lion-monument" />
    </div>
  );
}