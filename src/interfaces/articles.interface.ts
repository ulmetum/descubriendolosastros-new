export interface Articles {
  data: Datum[]
  meta: Meta
}

export interface Datum {
  id: number
  documentId: string
  title: string
  subtitle: string
  createdAt: Date
  slug: string
  excerpt: string
  elements: Element[]
  tags: Tag[]
  featuredImage: FeaturedImage
  writer: Writer
  metadata: Metadata
}

export interface Element {
  __component: string
  id: number
  alt?: string
  position?: string
  image?: FeaturedImage
  videoUrl?: VideoURL
  richText?: string
}

export interface ElementPhoto {
  __component: string
  id: number
  image?: FeaturedImage
  position?: string
}

export interface ElementText {
  __component: string
  id: number
  richText?: string
}

export interface ElementVideo {
  __component: string
  id: number
  videoUrl?: VideoURL
}

export interface FeaturedImage {
  id: number
  documentId: string
  url: string
}

export interface Social {
  id: number
  socialLink: string
  url: string
  icon: FeaturedImage
}

export interface VideoURL {
  url: string
  provider: string
  providerUid: string
}

export interface Metadata {
  id: number
  metaTitle: string
  metaDescription: string
  sharedImage: FeaturedImage
}

export interface Tag {
  id: number
  documentId: string
  slug: string
}

export interface Writer {
  id: number
  documentId: string
  name: string
  email: string
  picture: FeaturedImage
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
