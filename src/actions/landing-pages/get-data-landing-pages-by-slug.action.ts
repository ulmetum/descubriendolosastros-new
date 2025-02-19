import { safeAction } from '@/actions/safeAction'
import { fetchData } from '@/utils/fetchData'
import { getLandingPagesBySlugQuery } from '@/queries/landing-pages.query'
import type { LandingPages } from '@/interfaces/landing-pages.interface'
import { z } from 'zod'

const schema = z.object({
  slug: z.string(),
})

export const getDataLandingPagesBySlugAction = safeAction
  .schema(schema)
  .action(async ({ parsedInput: { slug } }) => {
    const query = getLandingPagesBySlugQuery({ slug })

    const url = `landing-pages?${query}`

    const landingPages = await fetchData<LandingPages>(url, 'ErrorLandingPages')

    return { landingPages }
  })
