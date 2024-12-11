'use client'

import { cn } from '@/utils'
import Image from 'next/image'
import { useState } from 'react'

export const ImagePost = ({
  featuredImageUrl,
}: {
  featuredImageUrl: string
}) => {
  const [isShow, setIsShow] = useState(false)
  const url = featuredImageUrl.startsWith('http')
    ? featuredImageUrl
    : `${process.env.NEXT_PUBLIC_STRAPI_HOST}${featuredImageUrl}`

  return (
    <div className='absolute inset-0'>
      <div
        className={cn(
          `absolute inset-0 z-10 bg-gradient-to-t from-transparent to-black transition-opacity duration-[1200ms] group-hover:opacity-55`,
          {
            'opacity-90': isShow,
            'opacity-0': !isShow,
          }
        )}
      />
      <Image
        className={cn(
          `object-cover transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-110`,
          {
            'opacity-100': isShow,
            'opacity-0': !isShow,
          }
        )}
        onLoad={() => setIsShow(true)}
        priority
        fill
        alt={'Imagen destacada del artículo'}
        src={url}
        sizes='100%'
      />
    </div>
  )
}
