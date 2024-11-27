'use server'

import { safeAction } from '@/actions/safeAction'
import { Articles } from '@/interfaces'
import { getArticleBySlugQuery } from '@/queries'
import { fetchData } from '@/utils'
import { z } from 'zod'

const schema = z.object({
  slug: z.string(),
})

export const getArticleBySlugAction = safeAction
  .schema(schema)
  .action(async ({ parsedInput: { slug } }) => {
    const query = getArticleBySlugQuery({ slug })

    const url = `articles?${query}`

    console.log({ url })

    const article = await fetchData<Articles>(url)

    return { article }
  })
