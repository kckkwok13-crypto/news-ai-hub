import Link from "next/link";

const blogPosts = [
  {
    slug: "sensoji",
    title: "🏮 東京最古老寺廟：淺草寺（Sensō-ji）深度一日遊全攻略",
    excerpt: "創建於公元628年，是東京都內最古老的寺廟。從雷門巨大紅燈籠、仲見世通商店街到本堂參拜，帶你玩轉這個東京最經典的地標！",
    date: "May 2026",
    image: "https://live.staticflickr.com/6552/6972841610_e3c87b77f4_b.jpg",
    icon: "🏮"
  },
  {
    slug: "shibuya-crossing",
    title: "🌍 走進世界最繁忙的十字路口：東京澀谷十字路口全攻略！",
    excerpt: "如果要選一個最能代表現代東京、甚至全日本繁華景象的地標，澀谷十字路口（Shibuya Crossing）絕對當之無愧！",
    date: "May 2026",
    image: "https://images.unsplash.com/photo-1759491125973-6c46d3f86c13?w=1200&q=80",
    icon: "🌍"
  },
  {
    slug: "meiji-shrine",
    title: "🌲 東京市中心的森林秘境：明治神宮深度半日遊攻略",
    excerpt: "緊鄰原宿與竹下通，只要走過一條橋，就能瞬間從喧囂都市切換到原始森林。供奉明治天皇與昭憲皇太后的神道教聖地！",
    date: "May 2026",
    image: "https://japanjourneys.jp/wp-content/uploads/2019/08/meiji-jingu-torii-gate-1-1024x681.jpg",
    icon: "🌲"
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Travel Blog</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {/* First blog card — positioned higher to avoid floating TOC */}
          <Link
            key={blogPosts[0].slug}
            href={`/blog/${blogPosts[0].slug}`}
            className="block group md:col-span-2"
          >
            <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:scale-[1.02]">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm flex items-center gap-2">
                  <span>{blogPosts[0].icon}</span>
                  <span>Travel</span>
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-zinc-400 text-sm mb-3">{blogPosts[0].excerpt}</p>
                <p className="text-zinc-500 text-xs">{blogPosts[0].date}</p>
              </div>
            </div>
          </Link>
          {blogPosts.slice(1).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:scale-[1.02]">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-zinc-900/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm flex items-center gap-2">
                    <span>{post.icon}</span>
                    <span>Travel</span>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-zinc-400 text-sm mb-3">{post.excerpt}</p>
                  <p className="text-zinc-500 text-xs">{post.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}