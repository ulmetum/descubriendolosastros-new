'use client'

import { cn } from '@/utils'
import Image from 'next/image'
import { useState } from 'react'

export const FormHero = () => {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className='w-full'>
      <div className='h-[calc(100dvh-var(--header-height))] w-full overflow-hidden lg:h-[75vh]'>
        <div className='relative flex h-full w-full flex-col items-center justify-center gap-2 bg-cover bg-center bg-no-repeat'>
          <Image
            onLoad={() => setIsShow(true)}
            src='/contact-hero.webp'
            alt='hero'
            fill
            className={cn(
              'transition-all duration-[750ms] ease-[var(--transition-ease)]',
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
          <h1
            className={cn(
              'relative z-10 max-w-2xl text-center font-medium text-light underline decoration-1 underline-offset-8 transition-all delay-500 duration-[3500ms] ease-[var(--transition-ease)] lg:max-w-none',
              {
                'opacity-100': isShow,
                'opacity-0': !isShow,
              }
            )}
          >
            Solicita tu carta astral
          </h1>
          <h3
            className={cn(
              'relative z-10 max-w-2xl text-center text-light transition-all delay-1000 duration-[3500ms] ease-[var(--transition-ease)] lg:max-w-none',
              {
                'opacity-100': isShow,
                'opacity-0': !isShow,
              }
            )}
          >
            Descubre tu vínculo con el cosmos
          </h3>
        </div>
      </div>
    </div>
  )
}
