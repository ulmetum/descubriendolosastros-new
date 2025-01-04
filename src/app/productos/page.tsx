'use client'

import { FormHero } from '@/components/contactpage/FormHero'
import { FormInfo } from '@/components/contactpage/FormInfo'
import { MultiStepProducts } from '@/components/contactpage/MultiStepProducts'

export interface Product {
  id: string
  name: string
  price: number
  type: string
}

export const products: Product[] = [
  {
    id: 'ba149034',
    name: 'Mapa Estelar (20x30)',
    type: 'small',
    price: 29,
  },
  {
    id: '82b28685',
    name: 'Mapa Estelar (30x40)',
    type: 'big',
    price: 34,
  },
  {
    id: '7166539e',
    name: 'Carta astral completa',
    type: 'Complete',
    price: 137,
  },
  {
    id: 'd5590ae9',
    name: 'Carta astral simple',
    type: 'Simple',
    price: 108,
  },
]

const ProductPage = () => {
  return (
    <section className='mt-[calc(var(--main-header-height)*1.25)] min-h-[100dvh] flex-col flex justify-center w-full pb-16'>
      <FormHero />
      <FormInfo />
      <MultiStepProducts />
    </section>
  )
}
export default ProductPage
