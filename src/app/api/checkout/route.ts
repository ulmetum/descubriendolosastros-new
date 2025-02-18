import { Product } from '@/app/productos/data'
import { BASE_URL } from '@/config'
import { stripe } from '@/utils/stripe'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body: Product = await req.json()
    // console.log({ body })

    const session = await stripe.checkout.sessions.create({
      success_url: `${BASE_URL}/completado/{CHECKOUT_SESSION_ID}`,
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: body.name,
              images: [body.image],
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

    // console.log({ session })

    return NextResponse.json({ session }, { status: 201 })
  } catch (error: any) {
    // console.error('Error al crear la sesión de pago:', error)

    console.log({ error })

    if (error.type === 'StripeInvalidRequestError') {
      if (error.raw?.code === 'url_invalid')
        return NextResponse.json(
          { error: 'La url de la imagen es inválida' },
          { status: 500 }
        )
      if (error.raw?.code === 'amount_too_small') {
        return NextResponse.json(
          { error: 'El coste debe ser al menos de 0.50€' },
          { status: 500 }
        )
      }
    }

    return NextResponse.json(
      { error: 'Hubo un error al procesar el pago' },
      { status: 500 }
    )
  }
}
