import { safeAction } from '@/actions/safeAction'
import { stripe } from '@/utils/stripe'
import dayjs from 'dayjs'
import 'dayjs/locale/es'
import Stripe from 'stripe'
import { z } from 'zod'

import localizedFormat from 'dayjs/plugin/localizedFormat'
import { products } from '@/app/productos/data'

// Usamos el plugin localizedFormat
dayjs.extend(localizedFormat)

dayjs.locale('es')

const schema = z.object({
  sessionId: z.string(),
})

export const getDataProductsAction = safeAction
  .schema(schema)
  .action(async ({ parsedInput: { sessionId } }) => {
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId)

      // Verifica que el payment_intent sea válido
      if (
        !session.payment_intent ||
        typeof session.payment_intent !== 'string'
      ) {
        throw new Error('Payment Intent no está disponible o no es válido.')
      }
      const paymentIntent = await stripe.paymentIntents.retrieve(
        session.payment_intent, // ID del payment intent desde la sesión
        {
          expand: ['payment_method'], // Expande el payment_method
        }
      )

      console.log({ session })
      const productId = session.metadata?.productId

      const product = products.find((product) => product.id === productId)

      console.log({ product })

      const paymentMethod = paymentIntent.payment_method as Stripe.PaymentMethod

      const timestamp = paymentMethod.created
      const email = paymentMethod.billing_details.email
      const date = dayjs.unix(timestamp).format('LL, HH:mm')
      const last4 = paymentMethod.card?.last4
      const brand = paymentMethod.card?.brand
      const productName = product?.name
      const productPrice = product?.price

      return { timestamp, email, date, last4, brand, productName, productPrice }
    } catch (error) {
      return false
    }
  })
