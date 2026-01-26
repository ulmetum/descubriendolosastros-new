'use client'

import { cn } from '@/utils/mergeClass'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

export const FormHeroContact = ({
  image = '/hero-contact-image.webp',
}: {
  image?: string
}) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className='w-full'>
      <div className='h-[calc(100dvh-var(--header-height))] w-full overflow-hidden lg:h-[75vh]'>
        <div className='relative flex h-full w-full flex-col items-center justify-center gap-2 bg-cover bg-center bg-no-repeat'>
          <Image
            onLoad={() => setIsShow(true)}
            src={image}
            alt='Hero contact image'
            fill
            placeholder='blur'
            blurDataURL={image}
            className={cn(
              'transition-all  duration-[750ms] ease-[var(--transition-ease)] object-cover',
              {
                'opacity-100': isShow,
                'opacity-0': !isShow,
              },
            )}
          />
          <div
            className={cn(
              'absolute inset-0 bg-black/50 transition-all delay-500 duration-[3500ms] ease-[var(--transition-ease)] lg:max-w-none',
              {
                'opacity-100': isShow,
                'opacity-0': !isShow,
              },
            )}
          />

          {/* <div className='overflow-hidden leading-none pb-4 '>
            <motion.h1
              initial={{ y: 'calc(100% + 1rem)' }}
              animate={{ y: '0%' }}
              transition={{
                duration: 2,
                ease: [0.83, 0, 0.17, 1],
              }}
              className='text-light font-semibold text-center text-4xl sm:text-6xl md:text-7xl  '
            >
              ¿Tienes alguna pregunta?
            </motion.h1>
          </div> */}
          <div
            className={cn(
              'relative z-10 max-w-2xl text-center  transition-all delay-500 duration-[3500ms] ease-[var(--transition-ease)]',
              {
                'opacity-100': isShow,
                'opacity-0': !isShow,
              },
            )}
          >
            <h1 className='text-light pb-4 overflow-hidden font-semibold text-center text-4xl sm:text-6xl md:text-7xl  '>
              Solicita tu{' '}
              <span className='inline-block relative '>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: '-120%' }}
                  transition={{
                    delay: 4,
                    ease: [0.83, 0, 0.17, 1],
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 5,
                  }}
                  className='text-light text-4xl font-headings sm:text-6xl md:text-7xl font-semibold'
                >
                  mapa estelar
                </motion.div>
                <motion.div
                  initial={{ top: '115%' }}
                  animate={{ top: 0 }}
                  transition={{
                    delay: 4,
                    ease: [0.83, 0, 0.17, 1],
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 5,
                  }}
                  className='text-light absolute text-4xl font-headings sm:text-6xl md:text-7xl font-semibold'
                >
                  carta astral
                </motion.div>
              </span>
            </h1>
          </div>

          <div className='relative z-10'>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.25,
                duration: 2,
                ease: 'easeOut',
              }}
              className='text-light text-center'
            >
              Estoy aquí para guiarte en tu viaje hacia las estrellas
            </motion.h3>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
