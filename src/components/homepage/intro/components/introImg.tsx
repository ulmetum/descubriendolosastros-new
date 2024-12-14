'use client'

import Image from 'next/image'
import { useMouseParallax } from '@/hooks/useMouseParallax'
import { motion, useAnimate, useMotionTemplate } from 'motion/react'
import { MouseEvent } from 'react'

export const IntroImage = () => {
  const [scope, animate] = useAnimate()

  const { handleMouseMove, handleHoverEnd, mousePosition } = useMouseParallax({
    movement: 25,
  })
  return (
    <motion.div
      onMouseMove={(e: MouseEvent<HTMLHeadingElement>) => {
        handleMouseMove(e)
      }}
      onHoverEnd={() => {
        handleHoverEnd()
      }}
      className=''
    >
      <div
        ref={scope}
        className='wrap-section flex items-center justify-center text-light'
      >
        <motion.div
          style={{
            x: useMotionTemplate`${mousePosition.x}px`,
            y: useMotionTemplate`${mousePosition.y}px`,
          }}
          className='wrap-circle relative h-[15vw] w-[15vw] overflow-hidden rounded-full border border-light/30 mix-blend-difference'
        >
          <motion.div
            onAnimationComplete={() => {
              animate([
                [
                  '.bg-circle',
                  { opacity: 0 },
                  { duration: 1, ease: [0.83, 0, 0.17, 1] },
                ],
                [
                  '.wrap-circle',
                  { borderColor: 'rgba(255, 255, 255, 0)' },
                  { duration: 1, ease: [0.83, 0, 0.17, 1] },
                ],
                [
                  '.moon-image',
                  { opacity: [0, 1] },
                  { duration: 1, ease: [0.83, 0, 0.17, 1], at: 0 },
                ],
              ])
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: '100%' }}
            transition={{
              duration: 2,
              ease: [0.83, 0, 0.17, 1],
            }}
            className='bg-circle h-full origin-bottom bg-light'
          ></motion.div>

          <div className='moon-image absolute inset-0 opacity-0'>
            <Image
              fill
              src='/moon-web.png'
              alt='moon'
              sizes='15vw'
              className='object-cover scale-[2]'
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
