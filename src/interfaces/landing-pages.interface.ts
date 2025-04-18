import type { Element } from '@/interfaces/articles.interface'

export interface LandingPages {
  data: DatumLandingPages[]
}

export interface DatumLandingPages {
  id: number
  documentId: string
  title: string
  description: string
  createdAt: Date
  type: string
  podcastUrl: string
  slug: string
  elements: Element[]
  featuredImage: FeaturedImageLandingPages
  metadata: null
}

export interface ElementLandingPages {
  __component: string
  id: number
  richText: string
}

export interface FeaturedImageLandingPages {
  id: number
  documentId: string
  url: string
}
