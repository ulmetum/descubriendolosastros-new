import { z } from 'zod'
import { formContactSchema } from '@/validations/form-contact.schema'
import { BodyDataContact } from '@/interfaces/contact.interface'

export const buildBodyDataContact = (
  data: z.infer<typeof formContactSchema>
) => {
  const bodyData: BodyDataContact = {
    subject: data.subject,
    name: data.name,
    email: data.email,
    message: data.message,
  }

  return bodyData
}
