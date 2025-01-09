import { stripe } from '@/utils/stripe'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const session = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/completado/{CHECKOUT_SESSION_ID}',
    // success_url:
    //   'http://localhost:3000/completado?sessionId={CHECKOUT_SESSION_ID}',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: body.name,
            images: ['https://i.imgur.com/EHyR2nP.png'],
          },
          unit_amount: Math.round(body.price * 100),
        },
        quantity: 1,
      },
    ],
    metadata: {
      productId: body.id,
    },
    mode: 'payment',
  })

  return NextResponse.json({ session }, { status: 201 })
}
