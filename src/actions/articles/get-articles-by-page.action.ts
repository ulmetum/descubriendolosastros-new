'use server'

import { z } from 'zod'
import { safeAction } from '@/actions/safeAction'
import type { Articles } from '@/interfaces/articles.interface'
import { getArticlesByPageQuery } from '@/queries/articles.query'
import { fetchData } from '@/utils/fetchData'

const schema = z.object({
  page: z.string(),
})

export const getArticlesByPageAction = safeAction
  .schema(schema)
  .action(async ({ parsedInput: { page } }) => {
    console.log({ page })
    const query = getArticlesByPageQuery({ page })

    const url = `articles?${query}`

    const articles = await fetchData<Articles>(url, 'ErrorArticles')

    return { articles }
  })
