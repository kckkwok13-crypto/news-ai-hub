import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'NewsFlow - AI 驅動的智能新聞平台',
  description: 'AI驅動的新聞聚合平台，支持多語言即時翻譯、多元分類，涵蓋財經、加密貨幣、科技、遊戲、美食、旅遊、藝術等領域',
  keywords: ['AI新聞', '智能新聞', '新聞聚合', '多語言新聞', '財經新聞', '科技新聞', 'AI翻譯', 'News AI Hub'],
  authors: [{ name: 'NewsFlow' }],
  openGraph: {
    title: 'NewsFlow - AI 驅動的智能新聞平台',
    description: '即時翻譯 · AI 分析 · 多元分類',
    type: 'website',
    locale: 'zh_HK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NewsFlow - AI 驅動的智能新聞平台',
    description: '即時翻譯 · AI 分析 · 多元分類',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const adsenseId = 'ca-pub-4745583996243741';

  return (
    <html lang="zh-HK">
      <head>
        {adsenseId && (
          <>
            <Script
              async
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
      <body>{children}</body>
    </html>
  )
}
