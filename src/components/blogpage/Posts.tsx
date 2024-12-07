import { ListOfPosts } from '@/components/blogpage'
import { getAllArticlesAction, getArticlesByPageAction } from '@/actions'
import { notFound } from 'next/navigation'

export const Posts = async ({ page }: { page: string }) => {
  const [resultByPage, resultAllArticles] = await Promise.all([
    getArticlesByPageAction({ page }),
    getAllArticlesAction(),
  ])

  if (resultByPage?.serverError || resultAllArticles?.serverError) {
    notFound()
    return null
  }

  const articlesByPage = resultByPage?.data?.articles.data
  const meta = resultByPage?.data?.articles.meta
  const allArticles = resultAllArticles?.data?.articles.data

  return (
    <>
      <ListOfPosts
        meta={meta}
        articlesByPage={articlesByPage}
        allArticles={allArticles}
      />
    </>
  )
}
