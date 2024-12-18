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
  image?: FeaturedImage
  videoUrl?: VideoURL
  richText?: string
  textImage?: string
  positionText?: string
  textColumnLeft?: string
  textColumnRight?: string
  textQuote?: string
  authorQuote?: string
  classNames?: string
  titleAccordion?: string
  contentAccordion?: string
  headingAccordion?: string
  items?: Item[]
}

export interface ElementPhoto {
  __component: string
  id: number
  image?: FeaturedImage
  textImage?: string
  positionText?: string
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

export interface ElementDoubleColumns {
  __component: string
  id: number
  textColumnLeft?: string
  textColumnRight?: string
}

export interface ElementQuote {
  __component: string
  id: number
  textQuote?: string
  authorQuote?: string
}

export interface ElementAccordion {
  __component: string
  id: number
  items?: Item[]
  headingAccordion?: string
}

export interface Item {
  id: number
  titleAccordion?: string
  contentAccordion?: string
}

interface Writer {
  id: number
  documentId: string
  name: string
  description: string
  email: string
  picture: FeaturedImage
  social: Social[]
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

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
