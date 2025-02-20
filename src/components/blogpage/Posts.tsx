import { getAllArticlesAction } from '@/actions/articles/get-all-articles.action'
import { getArticlesByPageAction } from '@/actions/articles/get-articles-by-page.action'
import { ListOfPosts } from '@/components/blogpage/ListOfPost'
import { CustomError } from '@/components/CustomError'
import type { Datum, Meta } from '@/interfaces/articles.interface'

interface Props {
  articlesByPage: Datum[] | undefined
  meta: Meta | undefined
}

export const Posts = async ({ articlesByPage, meta }: Props) => {
  const res = await getAllArticlesAction()

  if (res?.serverError) {
    return <CustomError error={res.serverError as string} />
  }

  const allArticles = res?.data?.articles.data

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
