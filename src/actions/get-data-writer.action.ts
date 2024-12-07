import { z } from 'zod'
import { safeAction } from './safeAction'
import { getDataWriterQuery } from '@/queries'
import { Writers } from '@/interfaces'
import { fetchData } from '@/utils'

const schema = z.object({
  name: z.string(),
})

export const getDataWriterAction = safeAction
  .schema(schema)
  .action(async ({ parsedInput: { name } }) => {
    const query = getDataWriterQuery({ name })
    const url = `writers?${query}`

    const writer = await fetchData<Writers>(url)

    return { writer }
  })
