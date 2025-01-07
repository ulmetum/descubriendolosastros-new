import { z } from 'zod'

export const formContactSchema = z.object({
  subject: z
    .string()
    .min(1, { message: 'Debe escribir un asunto para el mensaje' })
    .min(5, { message: 'Debe escribir un asunto de al menos 5 caracteres' })
    .max(50, { message: 'El asunto es demasiado largo' }),
  name: z
    .string()
    .min(1, { message: 'Debe escribir un nombre' })
    .min(5, { message: 'Debe escribir un nombre de al menos 5 caracteres' }),
  email: z
    .string()
    .min(1, { message: 'Debe escribir un correo electrónico' })
    .email({ message: 'El correo electrónico no es válido' }),
  message: z
    .string()
    .min(1, { message: 'Debe escribir un mensaje' })
    .min(5, { message: 'El mensaje es demasiado corto' })
    .max(500, { message: 'El mensaje es demasiado largo' }),
})

export type formContact = z.infer<typeof formContactSchema>
