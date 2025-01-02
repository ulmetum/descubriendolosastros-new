import { STRIPE_SIGNIN_SECRET } from '@/config'
import { stripe } from '@/utils/stripe'
import { headers } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  // console.log(body)

  const headersList = await headers()
  const sign = headersList.get('Stripe-Signature') as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sign, STRIPE_SIGNIN_SECRET!)
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    )
  }

  switch (event?.type) {
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data
        .object as Stripe.Checkout.Session

      // Guardar en la base de datos

      // Enviar correo electrónico al cliente pedido completado

      console.log({ checkoutSessionCompleted })

      break

    default:
      console.log('Evento no manejado', event.type)
      break
  }

  return NextResponse.json('ok', { status: 200 })
}
