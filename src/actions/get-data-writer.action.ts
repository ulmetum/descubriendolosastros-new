import { z } from 'zod'
import { safeAction } from './safeAction'
import { Writers } from '@/interfaces/writer.interface'
import { getDataWriterQuery } from '@/queries/writer.query'
import { fetchData } from '@/utils/fetchData'

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
