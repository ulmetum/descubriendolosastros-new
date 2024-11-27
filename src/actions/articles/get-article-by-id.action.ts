import { getArticleByIdQuery } from '@/queries'
import { safeAction } from '../safeAction'
import { z } from 'zod'
import { fetchData } from '@/utils'
import { Articles } from '@/interfaces'

const schema = z.object({
  id: z.number(),
})

export const getArticleByIdAction = safeAction
  .schema(schema)
  .action(async ({ parsedInput: { id } }) => {
    const query = getArticleByIdQuery({ id })
    const url = `articles?${query}`

    const article = await fetchData<Articles>(url)

    return { article }
  })
