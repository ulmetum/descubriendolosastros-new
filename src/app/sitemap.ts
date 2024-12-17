import type { MetadataRoute } from 'next'
import { getAllArticlesAction } from '@/actions/articles/get-all-articles.action'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await getAllArticlesAction()

  if (res?.serverError || !res?.data?.articles?.data) {
    console.error('Error fetching articles:', res?.serverError)
    return []
  }

  const articlesUrls =
    res?.data?.articles.data.map((article) => ({
      url: `https://descubriendolosastros.com/${article.slug}`,
      lastModified: new Date(article.createdAt),
    })) ?? []

  return [
    {
      url: 'https://descubriendolosastros.com',
      lastModified: new Date(),
    },
    {
      url: 'https://descubriendolosastros.com/contacto',
      lastModified: new Date(),
    },
    {
      url: 'https://descubriendolosastros.com/blog',
      lastModified: new Date(),
    },
    ...articlesUrls,
  ]
}
