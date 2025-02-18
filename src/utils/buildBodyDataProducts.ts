import { products } from '@/app/productos/data'
import { BodyDataProducts } from '@/interfaces/products.interface'
import { formProductsSchema } from '@/validations/form-products.schema'
import dayjs from 'dayjs'
import { z } from 'zod'

export const buildBodyDataProducts = (
  data: z.infer<typeof formProductsSchema>
) => {
  const productName =
    products.find((product) => product.id === data.product)?.name ??
    'Producto no encontrado'

  const bodyData: BodyDataProducts = {
    name: data.name,
    email: data.email,
    city: data.city,
    postalCode: data.postalCode,
    product: productName,
    countryEvent: data.countryEvent,
    cityEvent: data.cityEvent,
    dateEvent: dayjs(data.dateEvent).format('dddd, D [de] MMMM [de] YYYY'),
    timeEvent: data.timeEvent,
    terms: data.terms,
  }

  if (data.event) {
    bodyData.event = data.event
  }

  return bodyData
}
