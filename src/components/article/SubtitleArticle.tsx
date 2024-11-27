'use client'
import { MotionValue, motion, useTransform } from 'framer-motion'

interface Props {
  scrollY: MotionValue<number>
  transition: number
  subtitle: string
}

export function SubtitleArticle({ scrollY, transition, subtitle }: Props) {
  return (
    <motion.h3
      style={{
        opacity: useTransform(scrollY, [0, 1], [0, 1]),
        y: useTransform(scrollY, [0, 1], ['50%', '0%']),
        transitionDelay: useTransform(
          scrollY,
          [0, 1],
          ['0s', `${transition - transition * 0.15}ms`]
        ),
        margin: '1.5rem 0',
      }}
      className={`text-md relative z-20 mx-auto flex w-[min(100%,768px)] items-center justify-center text-center text-lg text-white opacity-0 transition-all duration-500`}
    >
      <div className='block font-headings sm:w-[75%]'>{subtitle}</div>
    </motion.h3>
  )
}
