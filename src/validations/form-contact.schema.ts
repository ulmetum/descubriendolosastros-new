import { z } from 'zod'

export const formContactSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Debe escribir un nombre' })
    .min(5, { message: 'Debe escribir un nombre de al menos 5 caracteres' }),
  email: z
    .string()
    .min(1, { message: 'Debe escribir un correo electrónico' })
    .email({ message: 'El correo electrónico no es válido' }),
  address: z
    .string()
    .min(1, { message: 'Debe introducir una dirección postal' })
    .min(5, { message: 'La dirección es demasiado corta' }),
  city: z
    .string()
    .min(1, { message: 'Debe introducir la ciudad donde vive' })
    .min(5, { message: 'La ciudad es demasiado corta' }),
  postalCode: z.string().regex(/^\d{5}$/, {
    message: 'El código postal debe tener exactamente 5 dígitos numéricos',
  }),
  event: z
    .string()
    .min(1, { message: 'Debe escribir el nombre del evento' })
    .min(5, { message: 'El nombre del evento es demasiado corto' }),
  'city-event': z
    .string()
    .min(1, { message: 'Debe escribir la ciudad del evento' }),
})

export type FormContact = z.infer<typeof formContactSchema>
