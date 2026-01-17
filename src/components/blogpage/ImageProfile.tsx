'use client'

import { cn } from '@/utils/mergeClass'
import Image from 'next/image'
import { useState } from 'react'

export const ImageProfile = ({
  size = 'sm',
  profileImageSrc,
}: {
  size?: 'sm' | 'md' | 'lg'
  profileImageSrc: undefined | string
}) => {
  const sizes = {
    sm: 'w-10 h-10 ',
    md: 'h-11 w-11',
    lg: 'h-12 w-12 ',
  }
  const [isShow, setIsShow] = useState(false)
  return (
    <div className={cn('relative shrink-0', sizes[size])}>
      <Image
        onLoad={() => setIsShow(true)}
        className={cn(
          ' rounded-full object-cover object-center transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]',
          {
            'opacity-90': isShow,
            'opacity-0': !isShow,
          },
        )}
        fill
        sizes='100%'
        src={profileImageSrc || '/profile-miriam.png'}
        alt='Imagen perfil usuario'
      />
    </div>
  )
}
