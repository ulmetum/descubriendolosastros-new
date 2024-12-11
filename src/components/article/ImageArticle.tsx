'use client'
import { cn } from '@/utils'
import { motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  imageArticle: string
}

export function ImageArticle({ imageArticle }: Props) {
  const [isShow, setIsShow] = useState(false)

  const image = imageArticle.startsWith('http')
    ? imageArticle
    : `${process.env.NEXT_PUBLIC_STRAPI_HOST}${imageArticle}`

  return (
    <div className='relative h-[60dvh] w-screen overflow-hidden'>
      <div
        className={cn(
          'absolute inset-0 z-10 bg-black/50 transition-all delay-300 duration-[3500ms] ease-[cubic-bezier(0.76,0,0.24,1)] lg:max-w-none',
          {
            'opacity-100': isShow,
            'opacity-0': !isShow,
          }
        )}
      />
      <motion.div className='relative h-full w-full'>
        <Image
          src={image}
          onLoad={() => setIsShow(true)}
          className={cn(
            'object-cover object-top transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]',
            {
              'opacity-100': isShow,
              'opacity-0': !isShow,
            }
          )}
          alt='Imagen destacada del artículo'
          fill
          priority
        />
      </motion.div>
    </div>
  )
}
