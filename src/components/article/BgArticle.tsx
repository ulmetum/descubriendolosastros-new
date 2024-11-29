'use client'
import { MotionValue, motion, useTransform } from 'motion/react'

interface Props {
  scrollY: MotionValue<number>
}

export function BgArticle({ scrollY }: Props) {
  return (
    <div className='absolute inset-0 z-20'>
      <motion.div
        style={{
          scaleY: useTransform(scrollY, [0, 1], [0, 1]),
          transition: 'transform 1s cubic-bezier(var(--transition-ease))',
        }}
        className='absolute -top-[5%] h-[20%] w-full origin-top bg-pampas-50'
      ></motion.div>
      <motion.div
        style={{
          scaleY: useTransform(scrollY, [0, 1], [0, 1]),
          transition: 'transform 1s cubic-bezier(var(--transition-ease))',
        }}
        className='absolute -bottom-[5%] h-[20%] w-full origin-bottom bg-pampas-50'
      ></motion.div>
    </div>
  )
}
