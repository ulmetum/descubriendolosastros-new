import { safeAction } from '@/actions/safeAction'
import { fetchData } from '@/utils/fetchData'
import { getLandingPagesQuery } from '@/queries/landing-pages.query'
import { LandingPages } from '@/interfaces/landing-pages.interface'

export const getDataLandingPagesAction = safeAction.action(async () => {
  const query = getLandingPagesQuery()

  const url = `landing-pages?${query}`

  const landingPages = await fetchData<LandingPages>(url, 'ErrorLandingPages')

  return { landingPages }
})
