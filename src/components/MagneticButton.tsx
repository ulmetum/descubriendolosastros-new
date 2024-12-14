'use client'

import { useHidden } from '@/hooks/useHidden'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react'
import { useRef } from 'react'
import { ArrowUpIcon } from '@/components/icons/ArrowUp.icon'
import { cn } from '@/utils/mergeClass'

interface Props {
  classNames?: string
  size?: 'sm' | 'md' | 'lg'
}

export const MagneticButton = ({ classNames, size = 'md' }: Props) => {
  const { isHidden } = useHidden()
  return (
    <motion.div
      animate={isHidden ? 'show' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', bounce: 0.75, duration: 1 },
        },
      }}
      className='fixed bottom-2 right-2 z-50 grid h-[100px] w-[100px] place-content-center rounded-full lg:bottom-4 lg:right-4'
    >
      <MagnetButton
        classNames={classNames}
        size={size}
      />
    </motion.div>
  )
}

const MagnetButton = ({
  classNames,
  size = 'md',
}: {
  size?: 'sm' | 'md' | 'lg'
  classNames?: string
}) => {
  const ref = useRef<HTMLButtonElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const sizes = {
    sm: 'w-[90px] h-[90px]',
    md: 'w-[100px] h-[100px]',
    lg: 'w-[110px] h-[110px]',
  }

  const xSpring = useSpring(x, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  })
  const ySpring = useSpring(y, {
    mass: 3,
    stiffness: 400,
    damping: 50,
  })

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`

  const handleMouseMove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!ref.current) return

    const { height, width, left, top } = ref.current.getBoundingClientRect()

    x.set(e.clientX - (left + width / 2))
    y.set(e.clientY - (top + height / 2))
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      onClick={() => {
        window.scroll({
          top: 0,
          behavior: 'smooth',
        })
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={cn(
        'group relative grid place-content-center rounded-full border-2 border-black bg-light/70 backdrop-blur-sm transition-colors duration-700 ease-out scale-[40%] lg:scale-[45%]',
        classNames,
        sizes[size]
      )}
    >
      <ArrowUpIcon classNames='pointer-events-none relative z-10 text-7xl text-black transition-all duration-500 ease-out group-hover:-rotate-180 group-hover:fill-black' />

      <div className='pointer-events-none absolute inset-0 z-0 rounded-full bg-white transition-transform duration-700 ease-out scale-0 group-hover:scale-100' />
    </motion.button>
  )
}
