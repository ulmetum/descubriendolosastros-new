'use server'
import { z } from 'zod'

import { safeAction } from '@/actions/safeAction'
import { formProductsSchema } from '@/validations/form-products.schema'

import { sendEmail } from '@/utils/brevo'
import { buildBodyDataProducts } from '@/utils/buildBodyDataProducts'

export const sendEmailResponseProductsAction = safeAction
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
          action: 'not-respond', // No se debe enviar un correo de respuesta automática
          to: [{ name: formData.name, email: formData.email }],
          templateId: 1, // Plantilla de contestación automática para usuarios del formulario de contacto
          params: {
            ...formData,
          },
        })
        return { success: true, name: parsedInput.name }
      } catch (error) {
        console.error(
          'Error al enviar la respuesta del formulario de productos:',
          error
        )

        return {
          success: false,
          error:
            error instanceof Error
              ? error.message
              : 'Ha ocurrido un error desconocido al enviar la respuesta.',
        }
      }
    }
  )
