'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/utils/mergeClass'

export const ImageTheme = ({ imageUrl }: { imageUrl: string }) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <Image
      src={imageUrl}
      alt='Imagen destacada'
      fill
      className={cn(
        `rounded-md object-cover transition-opacity duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)]`,
        {
          'opacity-100': isShow,
          'opacity-0': !isShow,
        }
      )}
      onLoad={() => setIsShow(true)}
    />
  )
}
