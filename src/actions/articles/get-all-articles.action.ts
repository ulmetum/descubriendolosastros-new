'use server'

import { safeAction } from '@/actions/safeAction'
import { Articles } from '@/interfaces/articles.interface'
import { getAllArticlesQuery } from '@/queries/articles.query'
import { fetchData } from '@/utils/fetchData'

export const getAllArticlesAction = safeAction.action(async () => {
  const query = getAllArticlesQuery()

  const url = `articles?${query}`

  const articles = await fetchData<Articles>(url, 'ErrorArticles')

  return { articles }
})
