'use client'

import { motion } from 'motion/react'

export const IntroTitle = () => {
  return (
    <h1 className='flex items-center text-6xl leading-none md:text-7xl lg:h-[135px] lg:justify-end lg:text-8xl'>
      <span className='flex h-[95px] items-center font-headings text-6xl leading-normal text-light mix-blend-difference md:h-[110px] md:text-7xl lg:h-[135px] lg:text-8xl'>
        ASTRO
      </span>
      <div className='relative h-[95px] w-full overflow-hidden leading-normal text-light mix-blend-difference md:h-[110px] md:w-[170px] lg:h-[135px] lg:w-[230px]'>
        <motion.span
          variants={{
            animate: {
              transition: { staggerChildren: 0.05, delayChildren: 2.5 },
            },
          }}
          initial='initial'
          animate='animate'
          className='absolute left-0 top-0 flex h-[95px] w-[215px] items-center font-headings text-6xl !leading-normal [transform:perspective(1000px)] md:h-[110px] md:text-7xl lg:h-[135px] lg:text-8xl'
        >
          {'NOMÍA'.split('').map((letter, i) => (
            <motion.span
              variants={{
                initial: { scale: 1, opacity: 1, rotateY: 0 },
                animate: { scale: 0, opacity: 0, rotateY: '90deg' },
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 0.5,
                repeatDelay: 3,
                type: 'spring',
                bounce: 0.5,
              }}
              className='font-headings text-6xl !leading-normal text-light mix-blend-difference md:text-7xl lg:text-8xl'
              key={i}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
        <motion.span
          variants={{
            animate: {
              transition: { staggerChildren: 0.05, delayChildren: 2.5 },
            },
          }}
          initial='initial'
          animate='animate'
          className='absolute left-0 top-0 flex h-[95px] w-[215px] items-center font-headings text-6xl !leading-normal [transform:perspective(1000px)] md:h-[110px] md:text-7xl lg:h-[135px] lg:text-8xl'
        >
          {'LOGÍA'.split('').map((letter, i) => (
            <motion.span
              variants={{
                initial: { scale: 0, opacity: 0, rotateY: '90deg' },
                animate: { scale: 1, opacity: 1, rotateY: 0 },
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 0.5,
                repeatDelay: 3,
                type: 'spring',
                bounce: 0.5,
              }}
              className='font-headings text-6xl !leading-normal text-light mix-blend-difference md:text-7xl lg:text-8xl'
              key={i}
            >
              {letter}
            </motion.span>
          ))}
          {/* LOGÍA */}
        </motion.span>
      </div>
    </h1>
  )
}
