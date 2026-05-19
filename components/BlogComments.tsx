'use client'

import Giscus from "@giscus/react"

interface BlogCommentsProps {
  lang?: string
}

export default function BlogComments({ lang = "zh-TW" }: BlogCommentsProps) {
  return (
    <Giscus
      repo="kckkwok13-crypto/news-ai-hub"
      repoId="1227822003"
      category="Announcements"
      categoryId="DIC_kwDONz6bPM4CnWN7"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark_dimmed"
      lang={lang}
      loading="lazy"
    />
  )
}