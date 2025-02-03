import { safeAction } from '../safeAction'
import { z } from 'zod'
import { Articles } from '@/interfaces/articles.interface'
import { getArticleByIdQuery } from '@/queries/articles.query'
import { fetchData } from '@/utils/fetchData'

const schema = z.object({
  id: z.string(),
})

export const getArticleByIdAction = safeAction
  .schema(schema)
  .action(async ({ parsedInput: { id } }) => {
    const query = getArticleByIdQuery({ id })
    const url = `articles?${query}`

    const article = await fetchData<Articles>(url, 'ErrorArticles')

    return { article }
  })
