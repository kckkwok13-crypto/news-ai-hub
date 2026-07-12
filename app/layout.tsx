import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { FavoritesProvider } from './components/FavoritesProvider'
import { RatingsProvider } from './components/RatingProvider'
import ThemeToggle from './components/ThemeToggle'
import SiteSearch from './components/SiteSearch'
import NewsletterPopup from './components/NewsletterPopup'

const BASE_URL = 'https://www.newskingdom.store';

export const metadata: Metadata = {
  title: {
    default: '旅遊王國 | 純粹旅人原創深度遊記攻略',
    template: '%s | 旅遊王國',
  },
  description: '純粹旅人原創深度遊記平台，涵蓋日本、歐洲、東南亞等全球旅遊攻略。免費旅遊博客、簽證資訊、行程規劃工具，大灣區出發的最佳旅行參考。',
  keywords: ['旅遊王國', '旅遊博客', '遊記', '日本旅遊', '歐洲旅遊', '東南亞旅遊', '大灣區', '簽證攻略', '行程規劃', '自由行', '深度遊', '純粹旅人'],
  authors: [{ name: '純粹旅人', url: BASE_URL }],
  creator: '純粹旅人',
  publisher: 'NewsFlow',
  metadataBase: new URL(BASE_URL),
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
    title: '旅遊王國 | 純粹旅人原創深度遊記攻略',
    description: '原創深度旅遊遊記，涵蓋日本、歐洲、東南亞等全球目的地。簽證攻略、行程規劃、旅行工具，大灣區出發的最佳旅行參考。',
    type: 'website',
    locale: 'zh_HK',
    siteName: '旅遊王國',
    url: BASE_URL,
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: '旅遊王國 - 純粹旅人原創深度遊記',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '旅遊王國 | 純粹旅人原創深度遊記攻略',
    description: '原創深度旅遊遊記，涵蓋日本、歐洲、東南亞等全球目的地',
    site: '@puretraveler',
    creator: '@puretraveler',
    images: {
      url: '/og-image.png',
      alt: '旅遊王國 - 純粹旅人原創深度遊記',
    },
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
  other: {
    'google-site-verification': 'your-verification-code-here',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '旅遊王國',
  url: 'https://www.newskingdom.store',
  description: '純粹旅人原創深度遊記平台，涵蓋日本、歐洲、東南亞等全球旅遊攻略。簽證資訊、行程規劃工具，大灣區出發的最佳旅行參考。',
  publisher: {
    '@type': 'Person',
    name: '純粹旅人',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.newskingdom.store/icon.svg',
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.newskingdom.store/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '純粹旅人',
  url: 'https://www.newskingdom.store',
  logo: 'https://www.newskingdom.store/icon.svg',
  description: '熱愛旅行的部落客，專注於原創深度遊記和旅遊攻略',
  sameAs: [
    'https://twitter.com/puretraveler',
  ],
  email: 'contact@newskingdom.store',
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
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
              <SiteSearch />
              <NewsletterPopup />
              {children}
            </RatingsProvider>
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
