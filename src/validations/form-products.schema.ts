import { z } from 'zod'

const products = ['ba149034', '82b28685', '7166539e', 'd5590ae9'] as const
const errorTypes = [
  'ErrorLandingPages',
  'ErrorMenu',
  'ErrorWriter',
  'ErrorArticles',
  'ErrorFormContact',
  'ErrorFormProducts',
] as const

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
  countryEvent: z
    .string()
    .min(1, { message: 'Debe escribir el país donde ocurrió el evento' }),
  timeEvent: z
    .string()
    .min(1, 'Debe ingresar una hora válida') // Asegura que no esté vacío
    .regex(
      /^([01]?[0-9]|2[0-3]):([0-5]?[0-9])$/,
      'Debe ser un tiempo válido en formato HH:mm'
    ),
  city: z
    .string()
    .min(1, { message: 'Debe introducir la ciudad donde vive' })
    .min(5, { message: 'La ciudad es demasiado corta' }),
  postalCode: z.string().regex(/^\d{5}$/, {
    message: 'El código postal debe tener exactamente 5 dígitos numéricos',
  }),
  event: z
    .string()
    .min(1, { message: 'Debe escribir el tipo de evento' })
    .min(5, { message: 'El nombre del evento es demasiado corto' })
    .max(20, {
      message: 'La descripción del evento debe tener de max 20 caracteres',
    })
    .optional(),
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
  // typeError: z.enum(errorTypes).optional(),
})

export type formProducts = z.infer<typeof formProductsSchema>
