'use client'
import { motion } from 'motion/react'
import { VanishText } from '@/components'

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export const ServiceTitleSection = () => {
  return (
    <div>
      <motion.h2
        variants={variants}
        initial='hidden'
        whileInView='visible'
        viewport={{ margin: '0px 0px -300px 0px' }}
        className='mt-20 text-center text-5xl font-semibold md:text-6xl xl:text-7xl'
      >
        LA MAGIA DEL MAPA ESTELAR
      </motion.h2>
      <motion.div
        variants={variants}
        initial='hidden'
        whileInView='visible'
        viewport={{ margin: '0px 0px -300px 0px' }}
        className='relative h-4'
      >
        <VanishText />
      </motion.div>
    </div>
  )
}
