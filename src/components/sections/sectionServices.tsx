'use client'

import { motion } from 'motion/react'

// Components
import { Container } from '@/components/Container'
import { ServiceTitleSection } from '@/components/homepage/services/ServiceTitleSection'
import { ServiceText } from '@/components/homepage/services/ServiceText'
import { NeuPricing } from '@/components/homepage/services/NeuPricing'
import { dataText } from '@/components/homepage/services/dataServs'
import { Carousel } from '@/components/homepage/carousel/carousel'

export function SectionServices() {
  return (
    <section className='relative z-10 mb-48 bg-light'>
      <Container className='px-2'>
        <ServiceTitleSection />
        <ServicesContent />
      </Container>
    </section>
  )
}

const ServicesContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      viewport={{ margin: '0px 0px -300px 0px' }}
      className='grid-services mt-24 xl:relative xl:mx-auto xl:w-[min(100%,1380px)]'
    >
      <div className='h-full xl:[grid-area:text]'>
        <ServiceText data={dataText} />
      </div>
      <div className='hidden h-full md:block xl:[grid-area:carousel]'>
        <Carousel />
      </div>
      <div className='flex h-full flex-col gap-8 xl:flex-row xl:[grid-area:items]'>
        <NeuPricing />
      </div>
    </motion.div>
  )
}
