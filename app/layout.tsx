import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'News AI Hub - 智能 新聞聚合',
  description: 'AI驅動的新聞聚合平台，支持多語言、多分類',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-HK">
      <body>{children}</body>
    </html>
  )
}
