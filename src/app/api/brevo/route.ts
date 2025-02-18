import { CRYPTO_KEY } from '@/config'
import { NextResponse, NextRequest } from 'next/server'
import CryptoJS from 'crypto-js'
import { sendEmail } from '@/utils/brevo'

export async function POST(req: NextRequest) {
  try {
    // Obtener los datos del body (respuesta del webhook de Brevo)
    const data = await req.json()

    const encryptedData = data['X-Mailin-custom']
    const key = CRYPTO_KEY as string

    // Verificar si el custom header existe en los datos
    if (!encryptedData) {
      return NextResponse.json(
        { error: 'No se encontró el header cifrado en la solicitud' },
        { status: 400 }
      )
    }

    // Descifrar los datos cifrados
    const decryptedData = CryptoJS.AES.decrypt(encryptedData, key).toString(
      CryptoJS.enc.Utf8
    )
    const dataUser = JSON.parse(decryptedData)

    // Verifica si tienes datos en el body de la respuesta del webhook
    if (!data) {
      return NextResponse.json(
        { error: 'No se enviaron datos desde el webhook de Brevo' },
        { status: 400 }
      )
    }

    if (data.event === 'delivered' && data.tags.includes('respond')) {
      // Se ha enviado un mail desde el formulario de contacto
      if (data.tags.includes('contact')) {
        await sendEmail({
          type: 'contact',
          action: 'not-respond', // No se debe enviar un correo de respuesta automática
          to: [{ name: dataUser.name, email: dataUser.email }],
          templateId: 5, // Plantilla de contestación automática para usuarios del formulario de contacto
          params: {
            name: dataUser.name,
            website: 'descubriendolosastros.com',
          },
        })
      }
      // Se ha enviado un mail desde el formulario de productos
      // if (data.tags.includes('products')) {

      // }
    }

    // Si quieres enviar una respuesta al webhook de Brevo (dependiendo de lo que espera Brevo)
    return NextResponse.json(
      { message: 'Webhook procesado con éxito' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Error procesando la solicitud del webhook' },
      { status: 500 }
    )
  }
}
