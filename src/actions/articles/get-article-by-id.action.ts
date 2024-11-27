import { getArticleByIdQuery } from '@/queries'

export const getArticleByIdAction = async ({ id }: { id: number }) => {
  const query = getArticleByIdQuery({ id })
  const url = `articles?${query}`
  // const res = await fetch(url, { cache: "no-store" })
  console.log({ url })

  // if (res.status !== 200) {
  //   return { error: "Hubo un error al obtener el artículo" }
  // }

  // const { data } = (await res.json()) as Post

  // return { success: data }
  return {}
}
