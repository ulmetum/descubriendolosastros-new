import { NextResponse, NextRequest } from 'next/server'
import { stripe } from '@/utils/stripe' // Asegúrate de que tengas configurado el cliente de Stripe.

export async function GET(req: NextRequest) {
  // Obtén el sessionId de los parámetros de la URL
  const url = req.nextUrl.href

  console.log({ url })

  // // Obtén el 'sessionId' del parámetro de la URL
  // const sessionId = url.searchParams.get('sessionId')

  // console.log({ sessionId })
  // if (!sessionId) {
  //   return NextResponse.json(
  //     { error: 'Session ID is required' },
  //     { status: 400 }
  //   )
  // }

  // try {
  //   // Usa el sessionId para obtener detalles de la sesión en Stripe
  //   const session = await stripe.checkout.sessions.retrieve(sessionId)

  //   // Devuelve la información de la sesión
  //   return NextResponse.json({ session }, { status: 200 })
  // } catch (error) {
  //   console.error('Error retrieving session:', error)
  //   return NextResponse.json(
  //     { error: 'Failed to retrieve session' },
  //     { status: 500 }
  //   )
  // }
  return NextResponse.json(
    { error: 'Failed to retrieve session' },
    { status: 500 }
  )
}
