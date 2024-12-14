'use client'

import { cn } from '@/utils/mergeClass'
import Image from 'next/image'
import { useState } from 'react'

export const ImageProfile = ({
  profileImageSrc,
}: {
  profileImageSrc: string
}) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <Image
      onLoad={() => setIsShow(true)}
      className={cn(
        'xs:h-[50px] xs:w-[50px] h-10 w-10 rounded-full transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]',
        {
          'opacity-90': isShow,
          'opacity-0': !isShow,
        }
      )}
      width={50}
      height={50}
      src={profileImageSrc}
      alt='Imagen perfil usuario'
    />
  )
}
