import Link from 'next/link'

export const metadata = {
  title: '旅行博客 - NewsKingdom',
  description: '探索世界各地的旅行故事、景點推薦和旅遊攻略',
}

const destinations = [
  {
    region: '亞洲',
    places: [
      { name: '日本', slug: 'japan', emoji: '🗾', description: '東京、大阪、京都美食之旅' },
      { name: '韓國', slug: 'korea', emoji: '🇰🇷', description: '首爾潮流與寺廟文化' },
      { name: '台灣', slug: 'taiwan', emoji: '🇹🇼', description: '夜市小吃與自然風光' },
      { name: '泰國', slug: 'thailand', emoji: '🇹🇭', description: '曼谷、清邁、海島風情' },
      { name: '新加坡', slug: 'singapore', emoji: '🇸🇬', description: '都市與花園城市' },
    ]
  },
  {
    region: '歐洲',
    places: [
      { name: '法國', slug: 'france', emoji: '🇫🇷', description: '巴黎浪漫與酒莊風光' },
      { name: '意大利', slug: 'italy', emoji: '🇮🇹', description: '羅馬、佛羅倫斯、威尼斯' },
      { name: '英國', slug: 'uk', emoji: '🇬🇧', description: '倫敦歷史與文化之旅' },
      { name: '西班牙', slug: 'spain', emoji: '🇪🇸', description: '巴塞羅那熱情與弗拉明戈' },
    ]
  },
  {
    region: '其他',
    places: [
      { name: '澳洲', slug: 'australia', emoji: '🇦🇺', description: '悉尼、海岸線與內陸風光' },
      { name: '美國', slug: 'usa', emoji: '🇺🇸', description: '紐約、洛杉矶、三藩市' },
      { name: '迪拜', slug: 'dubai', emoji: '🇦🇪', description: '奢華都市與沙漠風情' },
    ]
  }
]

export default function TravelBlogPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">✈️ 旅行博客</h1>
          <p className="text-gray-400 text-lg">探索世界各地的旅行故事與攻略</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map(region => (
            <div key={region.region} className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
              <h2 className="text-xl font-bold mb-4 text-blue-400">{region.region}</h2>
              <div className="space-y-3">
                {region.places.map(place => (
                  <Link
                    key={place.slug}
                    href={`/travel-blog/${place.slug}`}
                    className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
                  >
                    <span className="text-2xl">{place.emoji}</span>
                    <div>
                      <div className="font-semibold">{place.name}</div>
                      <div className="text-sm text-gray-400">{place.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>更多目的地即將推出...</p>
        </div>
      </div>
    </main>
  )
}
