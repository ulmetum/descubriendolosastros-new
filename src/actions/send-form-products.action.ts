'use server'

import { safeAction } from './safeAction'
import { z } from 'zod'
import dayjs from 'dayjs'
import 'dayjs/locale/es' // Importa el idioma español
import { formProductsSchema } from '@/validations/form-products.schema'
import { products } from '@/app/productos/data'
import { ActionError, errorMessages } from '@/errors'
import { sendEmail } from '@/utils/brevo'
dayjs.locale('es')

interface BodyData {
  name: string
  email: string
  countryEvent: string
  timeEvent: string
  city: string
  postalCode: string
  cityEvent: string
  dateEvent: string
  terms: boolean
  product: string
  event?: string | undefined
}

const buildBodyData = (data: z.infer<typeof formProductsSchema>) => {
  const productName =
    products.find((product) => product.id === data.product)?.name ??
    'Producto no encontrado'

  const bodyData: BodyData = {
    name: data.name,
    email: data.email,
    city: data.city,
    postalCode: data.postalCode,
    product: productName,
    countryEvent: data.countryEvent,
    cityEvent: data.cityEvent,
    dateEvent: dayjs(data.dateEvent).format('dddd, D [de] MMMM [de] YYYY'),
    timeEvent: data.timeEvent,
    terms: data.terms,
  }

  if (data.event) {
    bodyData.event = data.event
  }

  return bodyData
}

export const sendFormProductsSafe = safeAction
  .schema(formProductsSchema)
  .action(
    async ({
      parsedInput,
    }: {
      parsedInput: z.infer<typeof formProductsSchema> // Inferir el tipo correctamente
    }) => {
      try {
        // Construir los datos del formulario
        const formData = buildBodyData(parsedInput)

        await sendEmail({
          type: 'products',
          action: 'resend',
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
        return { success: false, error: (error as Error).message }
      }
    }
  )
