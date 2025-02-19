import { products } from '@/app/productos/data'
import { STRAPI_HOST, STRIPE_SIGNIN_SECRET, TOKEN_PRODUCTS } from '@/config'
import { stripe } from '@/utils/stripe'
import dayjs from 'dayjs'
import { headers } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()

  const headersList = await headers()
  const sign = headersList.get('Stripe-Signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sign, STRIPE_SIGNIN_SECRET!)
  } catch (error) {
    console.error('❌ Error verificando la firma del webhook:', error)

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Error desconocido al verificar la firma.',
      },
      { status: 400 }
    )
  }

  switch (event?.type) {
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data
        .object as Stripe.Checkout.Session

      // Obtener el PaymentIntent
      const paymentIntentId = checkoutSessionCompleted.payment_intent as string

      try {
        const productId = checkoutSessionCompleted.metadata?.productId
        const product = products.find((product) => product.id === productId)
        // Recuperar el PaymentIntent primero
        const paymentIntent = await stripe.paymentIntents.retrieve(
          paymentIntentId,
          {
            expand: ['payment_method'],
          }
        )
        const paymentMethod =
          paymentIntent.payment_method as Stripe.PaymentMethod

        const timestamp = paymentMethod.created
        const email = paymentMethod.billing_details.email
        const date = dayjs.unix(timestamp).format('YYYY-MM-DD HH:mm:ss')
        const last4 = paymentMethod.card?.last4
        const brand = paymentMethod.card?.brand
        const productName = product?.name
        const productPrice = product?.price

        const url = `${STRAPI_HOST}/api/products`

        await fetch(`${url}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN_PRODUCTS}`,
          },
          body: JSON.stringify({
            data: {
              date,
              lastDigits: last4,
              brand,
              email,
              productName,
              productPrice,
            },
          }),
        })

        return NextResponse.json(
          {
            date,
            last4,
            brand,
            email,
            productName,
            productPrice,
          },
          { status: 200 }
        )

        // Guardar en la base de datos, enviar correos, etc.
      } catch (error) {
        console.error(
          '❌ Error recuperando el PaymentIntent o enviando datos a Strapi:',
          error
        )

        return NextResponse.json(
          {
            error:
              error instanceof Error
                ? error.message
                : 'No se pudo recuperar el PaymentIntent o enviar los datos.',
          },
          { status: 500 }
        )
      }

      break

    default:
      console.warn('⚠️ Evento no manejado:', event.type)
  }

  return NextResponse.json('ok', { status: 200 })
}
