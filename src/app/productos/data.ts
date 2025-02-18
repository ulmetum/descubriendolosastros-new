export interface Product {
  id: string
  name: string
  price: number
  type: string
  image: string
}
export const products: Product[] = [
  {
    id: 'ba149034',
    name: 'Mapa Estelar (20x30)',
    type: 'small',
    price: 0.5,
    // price: 29,
    image:
      'https://images.pexels.com/photos/20419148/pexels-photo-20419148/free-photo-of-religion-cristales-decoraciones-vela-encendida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '82b28685',
    name: 'Mapa Estelar (30x40)',
    type: 'big',
    price: 0.5,
    // price: 34,
    image:
      'https://images.pexels.com/photos/20419148/pexels-photo-20419148/free-photo-of-religion-cristales-decoraciones-vela-encendida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '7166539e',
    name: 'Carta astral completa',
    type: 'Complete',
    price: 0.5,
    // price: 137,
    image:
      'https://images.pexels.com/photos/6931886/pexels-photo-6931886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'd5590ae9',
    name: 'Carta astral simple',
    type: 'Simple',
    price: 0.5,
    // price: 108,
    image:
      'https://images.pexels.com/photos/6931886/pexels-photo-6931886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
]
