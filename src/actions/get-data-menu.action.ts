import { z } from 'zod'
import { safeAction } from './safeAction'
import type { Menu } from '@/interfaces/menu.interface'
import { getMenuQuery } from '@/queries/menu.query'
import { fetchData } from '@/utils/fetchData'

const schema = z.object({
  name: z.literal('principal'),
})

export const getDataMenuAction = safeAction
  .inputSchema(schema)
  .action(async ({ parsedInput: { name } }) => {
    const query = getMenuQuery({ name })

    const url = `menus?${query}`

    const menu = await fetchData<Menu>(url, 'ErrorMenu')

    return { menu }
  })
