'use client'

import Image from 'next/image'

import { AnimatePresence, motion } from 'motion/react'

import { Datum } from '@/interfaces'
import { useMouseParallax } from '@/hooks'
import { Link } from 'next-view-transitions'
import { MouseEvent } from 'react'

interface Props {
  dataPrevArticle: Datum
  dataNextArticle: Datum
}

export function PaginationArticle({ dataPrevArticle, dataNextArticle }: Props) {
  const {
    mousePosition,
    hoveredImage,
    handleHoverEnd,
    handleHoverStart,
    handleMouseMove,
  } = useMouseParallax({ movement: -50 })

  // Datos
  const prevTitleArticle = dataPrevArticle.title
  const prevUrlArticle = dataPrevArticle.slug
  const prevImageArticle = dataPrevArticle.featuredImage.url
  const nextTitleArticle = dataNextArticle.title
  const nextUrlArticle = dataNextArticle.slug
  const nextImageArticle = dataNextArticle.featuredImage.url

  const nextImage = `${process.env.NEXT_PUBLIC_STRAPI_HOST}${nextImageArticle}`
  const prevImage = `${process.env.NEXT_PUBLIC_STRAPI_HOST}${prevImageArticle}`

  return (
    <div className='space-y-8 border-t px-4 py-16 text-center font-headings text-amber-900 lg:flex lg:items-center lg:justify-between lg:space-y-0'>
      <Link
        href={`/${prevUrlArticle}`}
        className='relative mx-auto flex justify-center text-center lg:mx-0 lg:w-1/2'
      >
        <AnimatePresence>
          {hoveredImage === 2 && (
            <motion.div
              className='pointer-events-none absolute bottom-[170%] aspect-video h-[100px] w-[200px] object-cover'
              style={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                },
              }}
              exit={{ opacity: 0, scale: 0.6 }}
            >
              <Image
                className='aspect-video h-[125px] w-[200px] rounded object-cover'
                width={200}
                height={100}
                src={`${prevImage}`}
                alt='Imagen destacada del post siguiente'
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.h4
          onMouseMove={(e: MouseEvent<HTMLHeadingElement>) => {
            handleMouseMove(e)
          }}
          onHoverStart={() => {
            handleHoverStart(2)
          }}
          onHoverEnd={() => {
            handleHoverEnd()
          }}
          className='w-max cursor-pointer text-4xl text-primary lg:text-[2.75rem]'
        >
          {prevTitleArticle}
        </motion.h4>
      </Link>
      <Link
        href={`/${nextUrlArticle}`}
        className='relative mx-auto flex justify-center text-center lg:mx-0 lg:w-1/2'
      >
        <AnimatePresence>
          {hoveredImage === 1 && (
            <motion.div
              className='pointer-events-none absolute bottom-[170%] aspect-video h-[100px] w-[200px] object-cover'
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                },
              }}
              exit={{ opacity: 0, scale: 0.6 }}
              style={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
            >
              <Image
                width={200}
                height={100}
                src={nextImage}
                alt='Imagen destacada del post previo'
                className='aspect-video h-[125px] w-[200px] rounded object-cover'
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.h4
          onMouseMove={(e: MouseEvent<HTMLHeadingElement>) => {
            handleMouseMove(e)
          }}
          onHoverStart={() => {
            handleHoverStart(1)
          }}
          onHoverEnd={() => {
            handleHoverEnd()
          }}
          className='w-max cursor-pointer text-4xl text-primary lg:text-[2.75rem]'
        >
          {nextTitleArticle}
        </motion.h4>
      </Link>
    </div>
  )
}
