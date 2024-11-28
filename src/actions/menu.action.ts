import { z } from 'zod'
import { safeAction } from './safeAction'
import { getMenuQuery } from '@/queries'
import { fetchData } from '@/utils'
import { Menu } from '@/interfaces'

const schema = z.object({
  name: z.string(),
})

export const getMenuAction = safeAction
  .schema(schema)
  .action(async ({ parsedInput: { name } }) => {
    const query = getMenuQuery({ name })

    const url = `menus?${query}`

    const menu = await fetchData<Menu>(url)

    return { menu }
  })
