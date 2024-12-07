'use server'

import { safeAction } from '@/actions/safeAction'
import { Articles } from '@/interfaces'
import { getAllArticlesQuery } from '@/queries'
import { fetchData } from '@/utils'

export const getAllArticlesAction = safeAction.action(async () => {
  const query = getAllArticlesQuery()

  const url = `articles?${query}`

  const articles = await fetchData<Articles>(url)

  return { articles }
})
