'use client'

import { AnimatePresence, motion } from 'motion/react'
import { content } from '@/components/homepage/carousel/carousel'
import { useShallow } from 'zustand/shallow'
import type { ContentProps } from '@/interfaces/carousel.interface'
import { useActiveButtonStore } from '@/stores/activeButtonStore'

const containerVariants = {
  center: {
    transition: { delayChildren: 1, staggerChildren: 0.09 },
  },
  exit: {
    transition: { staggerChildren: 0.09 },
  },
}
const itemsVariants = {
  enter: {
    opacity: 0,
    y: 25,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: -95,
    transition: { ease: 'easeInOut' },
  },
}

export const CarouselContent = ({ counter, slideIndex }: ContentProps) => {
  const { setIsActiveButton } = useActiveButtonStore(
    useShallow((state) => ({
      setIsActiveButton: state.setIsActiveButton,
    }))
  )
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={counter}
        initial='enter'
        animate='center'
        exit='exit'
        variants={containerVariants}
        className='absolute z-10 w-[min(100%,250px)]'
        onAnimationComplete={(definition: string) => {
          if (definition === 'center') {
            setIsActiveButton(true)
          }
        }}
      >
        <motion.h2
          variants={itemsVariants}
          className='text-5xl font-bold text-white'
        >
          {content[slideIndex].title}
        </motion.h2>
        <motion.h3
          variants={itemsVariants}
          className='font-semiboldbold relative mb-7 ml-[40px] mt-2 text-2xl uppercase leading-none text-white before:absolute before:bottom-0 before:left-0 before:h-[5px] before:w-[20px] before:bg-white before:translate-x-[-40px] after:absolute after:bottom-[-15px] after:left-0 after:h-[2px] after:w-[60px] after:bg-white after:translate-x-[-40px]'
        >
          {content[slideIndex].subtitle}
        </motion.h3>
        <motion.p
          variants={itemsVariants}
          className='font-medium text-white'
        >
          {content[slideIndex].paragraph}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  )
}
