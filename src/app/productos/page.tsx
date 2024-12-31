'use client'

interface Product {
  id: number
  name: string
  price: number
}

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  },
]

const ProductPage = () => {
  const handlePay = async (product: Product) => {
    console.log('Comprando', product)
    const response = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await response.json()

    console.log({ data })
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button onClick={() => handlePay(product)}>Comprar</button>
        </div>
      ))}
    </div>
  )
}
export default ProductPage
