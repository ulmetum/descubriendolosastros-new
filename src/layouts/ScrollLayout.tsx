'use client'
import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function ScrollLayout({ children }: Props) {
  return <ReactLenis root>{children}</ReactLenis>
}
