'use client'

import { cn } from '@/utils/mergeClass'
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
            className={cn(
              'transition-all duration-[750ms] ease-[var(--transition-ease)] object-cover',
              {
                'opacity-100': isShow,
                'opacity-0': !isShow,
              }
            )}
          />
          <div
            className={cn(
              'absolute inset-0 bg-black/50 transition-all delay-500 duration-[3500ms] ease-[var(--transition-ease)] lg:max-w-none',
              {
                'opacity-100': isShow,
                'opacity-0': !isShow,
              }
            )}
          />
          <div
            className={cn(
              'relative z-10 max-w-2xl text-center font-medium  transition-all delay-500 duration-[3500ms] ease-[var(--transition-ease)]   ',
              {
                'opacity-100': isShow,
                'opacity-0': !isShow,
              }
            )}
          >
            <h1 className='text-light text-center text-4xl sm:text-6xl md:text-7xl  pb-2'>
              ¿Tienes alguna pregunta?
            </h1>
          </div>
          <div
            className={cn(
              'relative z-10 max-w-2xl   transition-all delay-1000 duration-[3500ms] ease-[var(--transition-ease)] lg:max-w-none',
              {
                'opacity-100': isShow,
                'opacity-0': !isShow,
              }
            )}
          >
            <h3 className='text-light text-center'>
              Estoy aquí para guiarte en tu viaje hacia las estrellas
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
