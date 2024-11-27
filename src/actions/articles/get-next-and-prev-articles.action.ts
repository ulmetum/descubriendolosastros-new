import { ErrorArticles } from '@/errors'
import { getAllArticlesAction } from '@/actions/articles/get-all-articles.action'
import { getArticleByIdAction } from '@/actions/articles/get-article-by-id.action'

export const getNextAndPrevArticlesAction = async ({
  currentArticleId,
}: {
  currentArticleId: number
}) => {
  const res = await getAllArticlesAction()
  const articles = res?.data?.articles.data

  // Verificamos que `allArticles` esté definido
  if (res?.serverError || !articles) {
    throw new ErrorArticles(
      res?.serverError || 'Hubo un error al obtener los datos del artículos.'
    )
  }

  const idsArticles = articles.map((article) => article.id)

  const currentIndexArticle = idsArticles.indexOf(currentArticleId)

  // Ids de los articulos anterior y siguiente
  const nextArticleId =
    idsArticles[
      currentIndexArticle === idsArticles?.length - 1
        ? 0
        : currentIndexArticle + 1
    ]
  const prevArticleId =
    idsArticles[
      currentIndexArticle === 0
        ? idsArticles?.length - 1
        : currentIndexArticle - 1
    ]

  const responsePrevArticle = await getArticleByIdAction({ id: prevArticleId })
  const responseNextArticle = await getArticleByIdAction({ id: nextArticleId })

  // console.log({ responseNextArticle, responsePrevArticle })
  const dataPrevArticle = responsePrevArticle?.data?.article.data[0]
  const dataNextArticle = responseNextArticle?.data?.article.data[0]

  return { dataPrevArticle, dataNextArticle }
}
