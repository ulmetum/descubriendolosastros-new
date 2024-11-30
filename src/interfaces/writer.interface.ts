export interface Writer {
  data: DatumWriter[]
}

export interface DatumWriter {
  id: number
  documentId: string
  name: string
  description: string
  email: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  picture: PictureWriter
  social: SocialWriter[]
}

export interface PictureWriter {
  id: number
  documentId: string
  url: string
}

export interface SocialWriter {
  id: number
  socialMedia: string
  url: string
  icon: PictureWriter
}
