'use server'

import { safeAction } from './safeAction'
import { z } from 'zod'
import dayjs from 'dayjs'
import 'dayjs/locale/es' // Importa el idioma español
import { formProductsSchema } from '@/validations/form-products.schema'
import { products } from '@/app/productos/data'
dayjs.locale('es')

const buildBodyData = (data: z.infer<typeof formProductsSchema>) => {
  const product = products.find((product) => product.id === data.product)
  const productName = product ? product.name : 'Producto no encontrado'

  console.log({ productName })

  let bodyData = {}
  if (data.event) {
    bodyData = {
      Nombre: data.name,
      'Correo electrónico': data.email,
      Ciudad: data.city,
      'Código postal': data.postalCode,
      Evento: data.event,
      producto: productName,
      'País del Evento': data.countryEvent,
      'Ciudad del evento': data.cityEvent,
      'Fecha del evento': dayjs(data.dateEvent).format(
        'dddd, D [de] MMMM [de] YYYY, HH:mm'
      ),
      'Hora del evento': data.timeEvent,
    }
  } else {
    bodyData = {
      Nombre: data.name,
      'Correo electrónico': data.email,
      // Dirección: data.address,
      Ciudad: data.city,
      'Código postal': data.postalCode,
      producto: productName,
      'País del Evento': data.countryEvent,
      'Ciudad del evento': data.cityEvent,
      'Fecha del evento': dayjs(data.dateEvent).format(
        'dddd, D [de] MMMM [de] YYYY, HH:mm'
      ),
      'Hora del evento': data.timeEvent,
    }
  }

  console.log({ products })

  return bodyData
}

const sendFormData = async (formData: Record<string, string>) => {
  // Realizamos la solicitud para el formato 'fisico'
  const result = await fetch('https://formcarry.com/s/etL-VYlEn3t', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  })

  const json = await result.json()

  if (json.status !== 'success') {
    throw new Error(
      'Se ha producido un error en el envío de tu comentario. Por favor, vuelve a intentarlo más tarde o ponte en contacto conmigo directamente a través del correo electrónico'
    )
  }

  return json
}

export const sendFormSafe = safeAction.schema(formProductsSchema).action(
  async ({
    parsedInput,
  }: {
    parsedInput: z.infer<typeof formProductsSchema> // Inferir el tipo correctamente
  }) => {
    try {
      console.log({ parsedInput })
      // Construir los datos del formulario
      const formData = buildBodyData(parsedInput)

      // Enviar los datos al servidor
      await sendFormData(formData)

      // Retornar respuesta exitosa
      return { name: parsedInput.name }
    } catch (error) {
      return { error: (error as Error).message }
    }
  }
)
// 'use server'

// import { safeAction } from './safeAction'
// import { z } from 'zod'
// import dayjs from 'dayjs'
// import 'dayjs/locale/es' // Importa el idioma español
// import { formProductsSchema } from '@/validations/form-products.schema'
// import { products } from '@/app/productos/page'
// dayjs.locale('es')

// const buildBodyData = (data: z.infer<typeof formProductsSchema>) => {
//   const productName = products.find(
//     (product) => product.id === data.product
//   )?.name
//   let bodyData = {}
//   if (data.event) {
//     bodyData = {
//       Nombre: data.name,
//       'Correo electrónico': data.email,
//       // Dirección: data.address,
//       Ciudad: data.city,
//       'Código postal': data.postalCode,
//       Evento: data.event,
//       producto: productName,
//       'País del Evento': data.countryEvent,
//       'Ciudad del evento': data.cityEvent,
//       'Fecha del evento': dayjs(data.dateEvent).format(
//         'dddd, D [de] MMMM [de] YYYY, HH:mm'
//       ),
//       'Hora del evento': data.timeEvent,
//     }
//   } else {
//     bodyData = {
//       Nombre: data.name,
//       'Correo electrónico': data.email,
//       // Dirección: data.address,
//       Ciudad: data.city,
//       'Código postal': data.postalCode,
//       producto: productName,
//       'País del Evento': data.countryEvent,
//       'Ciudad del evento': data.cityEvent,
//       'Fecha del evento': dayjs(data.dateEvent).format(
//         'dddd, D [de] MMMM [de] YYYY, HH:mm'
//       ),
//       'Hora del evento': data.timeEvent,
//     }
//   }

//   console.log({ bodyData })

//   return bodyData
// }

// const sendFormData = async (formData: Record<string, string>) => {
//   // Realizamos la solicitud para el formato 'fisico'
//   const result = await fetch('https://formcarry.com/s/etL-VYlEn3t', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify(formData),
//   })

//   const json = await result.json()

//   if (json.status !== 'success') {
//     throw new Error(
//       'Se ha producido un error en el envío de tu comentario. Por favor, vuelve a intentarlo más tarde o ponte en contacto conmigo directamente a través del correo electrónico'
//     )
//   }

//   return json
// }

// export const sendFormSafe = safeAction.schema(formProductsSchema).action(
//   async ({
//     parsedInput,
//   }: {
//     parsedInput: z.infer<typeof formProductsSchema> // Inferir el tipo correctamente
//   }) => {
//     try {
//       // Construir los datos del formulario
//       const formData = buildBodyData(parsedInput)

//       // Enviar los datos al servidor
//       await sendFormData(formData)

//       // Retornar respuesta exitosa
//       return { name: parsedInput.name }
//     } catch (error) {
//       return { error: (error as Error).message }
//     }
//   }
// )
