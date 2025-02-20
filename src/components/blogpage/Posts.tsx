import { getAllArticlesAction } from '@/actions/articles/get-all-articles.action'
import { getArticlesByPageAction } from '@/actions/articles/get-articles-by-page.action'
import { ListOfPosts } from '@/components/blogpage/ListOfPost'
import { notFound } from 'next/navigation'
import { CustomError } from '@/components/CustomError'

export const Posts = async ({ page }: { page: string }) => {
  // const [resultByPage, resultAllArticles] = await Promise.all([
  //   getArticlesByPageAction({ page }),
  //   getAllArticlesAction(),
  // ])

  // if (resultByPage?.serverError || resultAllArticles?.serverError) {
  //   notFound()
  //   return null
  // }

  // const articlesByPage = resultByPage?.data?.articles.data
  // const meta = resultByPage?.data?.articles.meta
  // const allArticles = resultAllArticles?.data?.articles.data

  const results = await Promise.allSettled([
    getArticlesByPageAction({ page }),
    getAllArticlesAction(),
  ])

  const [resultByPage, resultAllArticles] = results

  const hasError =
    resultByPage.status === 'rejected' ||
    resultAllArticles.status === 'rejected' ||
    resultByPage.value?.serverError ||
    resultAllArticles.value?.serverError

  if (hasError) {
    // notFound()
    // return null
    return <CustomError error={hasError as string} />
  }

  const articlesByPage = resultByPage.value?.data?.articles.data
  const meta = resultByPage.value?.data?.articles.meta
  const allArticles = resultAllArticles.value?.data?.articles.data

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
