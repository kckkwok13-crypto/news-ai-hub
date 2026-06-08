import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { FavoritesProvider } from './components/FavoritesProvider'
import { RatingsProvider } from './components/RatingProvider'
import ThemeToggle from './components/ThemeToggle'

export const metadata: Metadata = {
  title: 'NewsFlow - AI 驅動的智能新聞平台 | 純粹旅人遊記',
  description: 'AI驅動的新聞聚合平台，支持多語言即時翻譯。純粹旅人原創深度遊記，涵蓋大灣區退休遊、日本、歐洲等旅遊攻略。免費旅遊博客、新聞資訊。',
  keywords: ['AI新聞', '智能新聞', '新聞聚合', '多語言新聞', '財經新聞', '科技新聞', 'AI翻譯', 'News AI Hub', '旅遊博客', '遊記', '日本旅遊', '歐洲旅遊', '大灣區'],
  authors: [{ name: '純粹旅人' }],
  creator: '純粹旅人',
  publisher: 'NewsFlow',
  metadataBase: new URL('https://www.newskingdom.store'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-HK': '/',
      'zh-CN': '/',
      'en': '/en',
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.svg',
  },
  openGraph: {
    title: 'NewsFlow - AI 驅動的智能新聞平台',
    description: '即時翻譯 · AI 分析 · 多元分類 · 純粹旅人深度遊記',
    type: 'website',
    locale: 'zh_HK',
    siteName: 'NewsFlow',
    images: [{
      url: '/images/pure-traveler-avatar.jpg',
      width: 512,
      height: 512,
      alt: 'NewsFlow Logo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NewsFlow - AI 驅動的智能新聞平台',
    description: '即時翻譯 · AI 分析 · 多元分類 · 純粹旅人深度遊記',
    images: ['/images/pure-traveler-avatar.jpg'],
    creator: '@puretraveler',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const adsenseId = 'ca-pub-4745583996243741';

  return (
    <html lang="zh-HK" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        {adsenseId && (
          <>
            <Script
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
              crossOrigin="anonymous"
              strategy="afterInteractive"
            />
            <Script id="adsbygoogle-init" strategy="afterInteractive">
              {`(adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "${adsenseId}",
                enable_page_level_ads: true
              });`}
            </Script>
          </>
        )}
        <meta name="google-adsense-account" content={adsenseId || ''} />
      </head>
      <body>
        <ThemeProvider>
          <FavoritesProvider>
            <RatingsProvider>
              <ThemeToggle />
              {children}
            </RatingsProvider>
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
