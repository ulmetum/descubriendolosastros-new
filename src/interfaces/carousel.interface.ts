import { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

export type ImageProps = {
  image: Image
  index: number
  direction: number
  slideIndex: number
}

export type ContentProps = {
  counter: number
  slideIndex: number
}

export interface Image {
  type: 'image'
  id: number
  url: StaticImageData
}

export interface Content {
  type: 'content'
  id: number
  title: string
  subtitle: string
  paragraph: string
}

export interface CarouselButtonProps {
  children: ReactNode
  movement: (newDirection: number) => void
  direction: '1' | '-1'
}

export interface BgImageProps {
  slideIndex: number
  direction: number
  counter: number
}
