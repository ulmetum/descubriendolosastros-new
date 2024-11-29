'use client'
import { MotionValue, motion, useTransform } from 'motion/react'

interface Props {
  scrollY: MotionValue<number>
  transition: number
}

export function LineArticle({ scrollY, transition }: Props) {
  return (
    <motion.div
      style={{
        scaleX: useTransform(scrollY, [0, 1], [0, 1]),
        transition: `transform calc(0.7*1ms*var(--duration-animation-post)) cubic-bezier(var(--transition-ease))`,
        transitionDelay: useTransform(
          scrollY,
          [0, 1],
          ['0ms', `${transition - transition * 0.15}ms`]
        ),
      }}
      className='relative z-20 h-[2px] w-72 bg-white'
    ></motion.div>
  )
}
