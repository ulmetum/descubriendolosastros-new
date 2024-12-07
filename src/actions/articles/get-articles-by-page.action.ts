'use server'

import { z } from 'zod'
import { safeAction } from '@/actions/safeAction'
import { Articles } from '@/interfaces'
import { getArticlesByPageQuery } from '@/queries'
import { fetchData } from '@/utils'

const schema = z.object({
  page: z.string(),
})

export const getArticlesByPageAction = safeAction
  .schema(schema)
  .action(async ({ parsedInput: { page } }) => {
    const query = getArticlesByPageQuery({ page })

    const url = `articles?${query}`

    const articles = await fetchData<Articles>(url)

    return { articles }
  })
