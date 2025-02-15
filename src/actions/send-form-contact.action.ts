'use server'

import { safeAction } from './safeAction'
import { z } from 'zod'
import dayjs from 'dayjs'
import 'dayjs/locale/es' // Importa el idioma español
import { formContactSchema } from '@/validations/form-contact.schema'
import { sendEmail } from '@/utils/brevo'
dayjs.locale('es')

interface BodyData {
  subject: string
  name: string
  email: string
  message: string
}

const buildBodyData = (data: z.infer<typeof formContactSchema>) => {
  const bodyData: BodyData = {
    subject: data.subject,
    name: data.name,
    email: data.email,
    message: data.message,
  }

  return bodyData
}

export const sendFormContactSafe = safeAction.schema(formContactSchema).action(
  async ({
    parsedInput,
  }: {
    parsedInput: z.infer<typeof formContactSchema> // Inferir el tipo correctamente
  }) => {
    try {
      // Construir los datos del formulario
      const formData = buildBodyData(parsedInput)

      await sendEmail({
        type: 'contact',
        action: 'resend',
        to: [{ name: 'Míriam', email: 'descubriendolosastros@gmail.com' }],
        templateId: 2, // Plantilla para la web descubriendolosastros.com
        params: {
          subject: formData.subject,
          email: formData.email,
          name: formData.name,
          message: formData.message,
          website: 'descubriendolosastros.com',
        },
      })

      // Retornar respuesta exitosa
      return { success: true, name: parsedInput.name }
    } catch (error) {
      return { success: false, error: (error as Error).message }
    }
  }
)
