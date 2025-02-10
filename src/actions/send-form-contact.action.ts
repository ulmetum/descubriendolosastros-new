'use server'

import { safeAction } from './safeAction'
import { z } from 'zod'
import dayjs from 'dayjs'
import 'dayjs/locale/es' // Importa el idioma español
import { formContactSchema } from '@/validations/form-contact.schema'
import { ActionError, errorMessages } from '@/errors'
dayjs.locale('es')

const buildBodyData = (data: z.infer<typeof formContactSchema>) => {
  const bodyData: Record<string, string> = {
    Asunto: data.subject,
    Nombre: data.name,
    'Correo electrónico': data.email,
    Comentario: data.message,
  }

  return bodyData
}

const sendFormData = async (formData: Record<string, string>) => {
  // Realizamos la solicitud para el formato 'fisico'
  const result = await fetch('https://formcarry.com/s/etL-VYlEn3t', {
    // const result = await fetch('https://formcarry.com/s/etL-VYlEn3t', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (!result.ok && errorMessages['ErrorFormContact']) {
    throw new ActionError(errorMessages['ErrorFormContact'])
  }

  const json = await result.json()

  return json
}

export const sendFormContactSafe = safeAction.schema(formContactSchema).action(
  async ({
    parsedInput,
  }: {
    parsedInput: z.infer<typeof formContactSchema> // Inferir el tipo correctamente
  }) => {
    try {
      // console.log({ parsedInput })
      // Construir los datos del formulario
      const formData = buildBodyData(parsedInput)

      // Enviar los datos al servidor
      await sendFormData(formData)

      // Retornar respuesta exitosa
      return { success: true, name: parsedInput.name }
    } catch (error) {
      return { success: false, error: (error as Error).message }
    }
  }
)
