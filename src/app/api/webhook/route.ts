import { products } from '@/app/productos/data'
import { STRAPI_HOST, STRIPE_SIGNIN_SECRET, TOKEN_PRODUCTS } from '@/config'
import { stripe } from '@/utils/stripe'
import dayjs from 'dayjs'
import { cookies, headers } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.text()

  const headersList = await headers()
  const sign = headersList.get('Stripe-Signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sign, STRIPE_SIGNIN_SECRET!)
  } catch (error) {
    console.log('Error verificando la firma:', error)
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    )
  }

  switch (event?.type) {
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data
        .object as Stripe.Checkout.Session

      // console.log({ checkoutSessionCompleted })

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

        // console.log({
        //   timestamp,
        //   email,
        //   date,
        //   last4,
        //   brand,
        //   productName,
        //   productPrice,
        // })

        const response = await fetch(`${STRAPI_HOST}/api/products`, {
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

        const data = await response.json()

        // console.log({ data })

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
        console.log('Error recuperando el PaymentIntent:', error)
      }

      break

    default:
      console.log('Evento no manejado:', event.type)
      break
  }

  return NextResponse.json('ok', { status: 200 })
}
