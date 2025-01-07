'use client'

import { FormHeroProducts } from '@/components/productspage/FormHeroProducts'
import { FormInfo } from '@/components/contactpage/FormInfo'
import { FormInfoContentProducts } from '@/components/productspage/FormInfoContentProducts'
import { MultiStepProducts } from '@/components/contactpage/MultiStepProducts'

const ProductPage = () => {
  return (
    <section className='mt-[calc(var(--main-header-height)*1.25)] min-h-[100dvh] flex-col flex justify-center w-full pb-16'>
      <FormHeroProducts />
      <FormInfo>
        <FormInfoContentProducts />
      </FormInfo>
      <MultiStepProducts />
    </section>
  )
}
export default ProductPage
