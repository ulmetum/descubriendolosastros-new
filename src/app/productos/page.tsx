'use client'

import { FormHero } from '@/components/contactpage/FormHero'
import { FormInfo } from '@/components/contactpage/FormInfo'
import { MultiStepProducts } from '@/components/contactpage/MultiStepProducts'

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
