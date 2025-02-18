'use server'

import { safeAction } from '../safeAction'
import { z } from 'zod'
import { formContactSchema } from '@/validations/form-contact.schema'
import { sendEmail } from '@/utils/brevo'
import { buildBodyDataContact } from '@/utils/buildBodyDataContact'

import dayjs from 'dayjs'
import 'dayjs/locale/es' // Importa el idioma español
dayjs.locale('es')

export const sendEmailContactAction = safeAction
  .schema(formContactSchema)
  .action(
    async ({
      parsedInput,
    }: {
      parsedInput: z.infer<typeof formContactSchema> // Inferir el tipo correctamente
    }) => {
      try {
        // Construir los datos del formulario
        const formData = buildBodyDataContact(parsedInput)

        await sendEmail({
          type: 'contact',
          action: 'respond', // Se debe enviar un coreo de respuesta automática
          to: [{ name: 'Míriam', email: 'descubriendolosastros@gmail.com' }],
          templateId: 2, // Plantilla para la web descubriendolosastros.com
          params: {
            ...formData,
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
