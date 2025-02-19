'use server'

import { safeAction } from '@/actions/safeAction'
import { z } from 'zod'
import { formProductsSchema } from '@/validations/form-products.schema'

import { sendEmail } from '@/utils/brevo'
import { buildBodyDataProducts } from '@/utils/buildBodyDataProducts'

import dayjs from 'dayjs'
import 'dayjs/locale/es' // Importa el idioma español
dayjs.locale('es')

export const sendEmailProductsAction = safeAction
  .schema(formProductsSchema)
  .action(
    async ({
      parsedInput,
    }: {
      parsedInput: z.infer<typeof formProductsSchema> // Inferir el tipo correctamente
    }) => {
      try {
        // Construir los datos del formulario
        const formData = buildBodyDataProducts(parsedInput)

        await sendEmail({
          type: 'products',
          action: 'respond', // Se debe enviar un coreo de respuesta automática
          to: [{ name: 'Míriam', email: 'descubriendolosastros@gmail.com' }],
          templateId: 4, // Plantilla para descubriendolosastros
          params: {
            ...formData,
            website: 'descubriendolosastros.com',
          },
        })

        // Retornar respuesta exitosa
        return { success: true, name: parsedInput.name }
      } catch (error) {
        console.error('Error al enviar el correo de productos:', error)

        return {
          success: false,
          error:
            error instanceof Error
              ? error.message
              : 'Ha ocurrido un error desconocido al enviar el correo.',
        }
      }
    }
  )
