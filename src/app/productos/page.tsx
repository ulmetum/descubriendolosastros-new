'use client'

import { MultiStepProducts } from '@/components/contactpage/MultiStepProducts'

interface Product {
  id: string
  name: string
  price: number
  type: string
}

// const products: Product[] = [
//   {
//     id: 1,
//     name: 'Product 1',
//     price: 100,
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     price: 200,
//   },
//   {
//     id: 3,
//     name: 'Product 3',
//     price: 300,
//   },
// ]

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
  // const handlePay = async (productId: string) => {
  //   const product = products.find((product) => product.id === productId)

  //   const response = await fetch('/api/checkout', {
  //     method: 'POST',
  //     body: JSON.stringify(product),
  //     headers: { 'Content-Type': 'application/json' },
  //   })

  //   const data = await response.json()

  //   console.log({ data })
  // }

  return (
    <div>
      <MultiStepProducts />
    </div>
  )
}
export default ProductPage
