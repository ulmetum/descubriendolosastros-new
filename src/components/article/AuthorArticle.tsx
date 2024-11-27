'use client'

import Image from 'next/image'

import { MotionValue, motion, useTransform } from 'framer-motion'

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
  const imageWriter = `${process.env.NEXT_PUBLIC_STRAPI_HOST}${profileImg}`
  return (
    <motion.div
      style={{
        opacity: useTransform(scrollY, [0, 1], [0, 1]),
        y: useTransform(scrollY, [0, 1], ['50%', '0%']),
        transitionDelay: useTransform(
          scrollY,
          [0, 1],
          ['0ms', `${transition}ms`]
        ),
      }}
      className='relative z-20 mt-4 flex items-center justify-center opacity-0 transition-all duration-500'
    >
      <div className='relative h-8 w-8'>
        <Image
          sizes='100%'
          className='rounded-full object-cover object-center'
          fill
          src={imageWriter || '/profile-user.svg'}
          alt={'Imagen de perfil de usuario'}
        />
        <motion.div className='absolute -inset-[.15rem] rounded-full border border-white/[.75] p-[.15rem] transition-all'></motion.div>
      </div>
      <small className='ml-[.5rem] font-headings font-light text-white'>
        Por {name}
      </small>
    </motion.div>
  )
}
