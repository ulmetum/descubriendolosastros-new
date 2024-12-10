'use client'

import { motion, TargetAndTransition } from 'motion/react'
import { ImageProps } from '@/interfaces'
import { images } from '../carousel'

export const CarouselImage = ({
  slideIndex,
  direction,
  index,
  image,
}: ImageProps) => {
  const indexPosition = (index - slideIndex + images.length) % images.length

  const positions: Record<string, string> = {
    0: 'center',
    1: 'right',
    2: 'left',
  }

  const position = positions[indexPosition]

  const animations: Record<string, TargetAndTransition> = {
    center: {
      rotateY: '0deg',
      scale: 1.2,
      x: '0%',
      zIndex: 10,
    },
    right: {
      rotateY: '-35deg',
      scale: 1,
      x: '115%',
      zIndex: direction > 0 ? 0 : 5,
    },
    left: {
      rotateY: '35deg',
      scale: 1,
      x: '-115%',
      zIndex: direction < 0 ? 0 : 5,
    },
  }

  return (
    <motion.div
      initial={false}
      animate={animations[position]}
      transition={{
        duration: 1.25,
        ease: [0.83, 0, 0.17, 1],
      }}
      style={{
        backgroundImage: `url(${image.url.src})`,
      }}
      className='absolute aspect-[9/13] w-60 rounded-md bg-cover bg-center bg-no-repeat'
    >
      <div className='absolute inset-0 rounded-md bg-gray-900 opacity-40'></div>
    </motion.div>
  )
}
