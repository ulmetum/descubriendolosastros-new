'use client'

import { motion } from 'motion/react'

export const TitleCarouselIntro = () => {
  return (
    <div className='mb-16 overflow-hidden'>
      <motion.h2
        initial={{ y: '125%', skewY: '6deg' }}
        whileInView={{
          y: '0%',
          skewY: '0deg',
          transition: { ease: [0.83, 0, 0.17, 1], duration: 1.5 },
        }}
        viewport={{ margin: '0px 0px -300px 0px', once: true }}
        className='relative inline-block text-7xl uppercase'
      >
        Servicios
        <div className='absolute -bottom-2 -right-6 w-[60%]'>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{
              width: '100%',
              transition: { ease: [0.83, 0, 0.17, 1], duration: 0.5 },
            }}
            viewport={{ margin: '0px 0px -300px 0px' }}
            className='block h-[3px] bg-dark'
          />
        </div>
      </motion.h2>
    </div>
  )
}
