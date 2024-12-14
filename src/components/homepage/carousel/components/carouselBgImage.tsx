'use client'

import { AnimatePresence, motion } from 'motion/react'
import { images } from '../carousel'
import Image from 'next/image'
import { BgImageProps } from '@/interfaces/carousel.interface'

const variants = {
  enter: (direction: number) => ({
    x: direction < 0 ? -100 : 100,
    opacity: 0,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
  }),
}

export const CarouselBgImage = ({
  counter,
  direction,
  slideIndex,
}: BgImageProps) => {
  return (
    <div className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
      {/* <div className="absolute inset-0 z-10 bg-black opacity-90"></div> */}
      <AnimatePresence
        initial={false}
        custom={direction}
        mode='sync'
      >
        <motion.div
          key={counter}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { ease: 'easeInOut', duration: 0.8 },
            opacity: { ease: 'linear', duration: 1.9 },
          }}
          custom={direction}
          className='absolute left-1/2 top-1/2 z-0 h-[110%] w-[180%] blur-[4px] -translate-x-1/2 -translate-y-1/2 transform'
        >
          <Image
            className='h-full w-full object-cover contrast-50 grayscale saturate-150'
            src={images[slideIndex].url.src}
            alt='Fondo de imagen'
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
