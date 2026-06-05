/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

declare module 'react' {
  interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
    jsx?: boolean
    global?: boolean
  }
}

declare module 'next/script' {
  interface ScriptProps {
    src?: string
    strategy?: 'afterInteractive' | 'lazyOnload' | 'beforeInteractive' | 'worker'
    id?: string
    onLoad?: (e: Event) => void
    onReady?: () => void
    onError?: (e: Error) => void
    children?: React.ReactNode
    crossOrigin?: string
  }
  export default function Script(props: ScriptProps): JSX.Element | null
}