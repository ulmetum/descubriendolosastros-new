'use client'

import { MotionValue, motion, useTransform } from 'motion/react'
import { NEXT_PUBLIC_STRAPI_HOST } from '@/config'
import { ImageProfile } from '@/components/blogpage/ImageProfile'
import { NameProfile } from '../blogpage/NameProfile'

interface Props {
  scrollY: MotionValue<number>
  transition: number
  name: string
  profileImg: string
}

export function AuthorArticle({
  scrollY,
  transition,
  profileImg,
  name,
}: Props) {
  const profileImageSrc = profileImg.startsWith('http')
    ? profileImg
    : `/profile-miriam.png`
  return (
    <motion.div
      style={{
        opacity: useTransform(scrollY, [0, 1], [0, 1]),
        y: useTransform(scrollY, [0, 1], ['75%', '0%']),
        transitionDelay: useTransform(
          scrollY,
          [0, 1],
          ['0ms', `${transition}ms`],
        ),
      }}
      className='relative z-20 gap-2 mt-0 flex items-center justify-center opacity-0 transition-all duration-500'
    >
      <div className='relative'>
        <ImageProfile profileImageSrc={profileImageSrc} />
        <motion.div className='absolute -inset-[.15rem] rounded-full border border-white/[.75] p-[.15rem] transition-all'></motion.div>
      </div>
      <NameProfile
        color='light'
        name={name}
      />
    </motion.div>
  )
}
