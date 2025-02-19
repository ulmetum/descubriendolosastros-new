'use server'

import { safeAction } from '@/actions/safeAction'
import type { Articles } from '@/interfaces/articles.interface'
import { getArticleBySlugQuery } from '@/queries/articles.query'
import { fetchData } from '@/utils/fetchData'
import { z } from 'zod'

const schema = z.object({
  slug: z.string(),
})

export const getArticleBySlugAction = safeAction
  .schema(schema)
  .action(async ({ parsedInput: { slug } }) => {
    const query = getArticleBySlugQuery({ slug })

    const url = `articles?${query}`

    const article = await fetchData<Articles>(url, 'ErrorArticles')

    return { article }
  })
