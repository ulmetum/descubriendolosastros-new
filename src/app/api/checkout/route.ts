import { stripe } from '@/utils/stripe'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  // console.log({ body })

  const session = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/completado',
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
