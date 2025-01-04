import { z } from 'zod'

const products = ['ba149034', '82b28685', '7166539e', 'd5590ae9'] as const

// Esquema para el formato fisico (incluye los campos adicionales)
export const formProductsSchema = z.object({
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
  cityEvent: z
    .string()
    .min(1, { message: 'Debe escribir la ciudad del evento' }),
  dateEvent: z.coerce.date({
    errorMap: (issue, { defaultError }) => ({
      message:
        issue.code === 'invalid_date'
          ? 'Debes introducir la fecha del evento'
          : defaultError,
    }),
  }),
  terms: z.boolean().refine((value) => value === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
  product: z.enum(products, {
    errorMap: () => ({ message: 'Debes seleccionar un producto' }),
  }),
})

export type formProducts = z.infer<typeof formProductsSchema>
