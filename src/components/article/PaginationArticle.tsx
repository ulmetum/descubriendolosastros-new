"use client"

import Image from "next/image"

import { AnimatePresence, motion } from "framer-motion"

import { Datum } from "@/interfaces"
import { useMouseParallax } from "@/hooks"
import { Link } from "next-view-transitions"

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
  } = useMouseParallax({ movement: -25 })

  // Datos
  const prevTitleArticle = dataPrevArticle.attributes.title
  const prevUrlArticle = dataPrevArticle.attributes.slug
  const prevImageArticle =
    dataPrevArticle.attributes.featuredImage.data.attributes.url
  const nextTitleArticle = dataNextArticle.attributes.title
  const nextUrlArticle = dataNextArticle.attributes.slug
  const nextImageArticle =
    dataNextArticle.attributes.featuredImage.data.attributes.url

  return (
    <div className="space-y-8 border-t px-4 py-16 text-center font-headings text-amber-900 lg:flex lg:items-center lg:justify-between lg:space-y-0">
      <Link
        href={`/blog/article/${nextUrlArticle}`}
        className="relative mx-auto flex justify-center text-center lg:mx-0 lg:w-1/2"
      >
        <AnimatePresence>
          {hoveredImage === 2 && (
            <motion.div
              className="pointer-events-none absolute bottom-full aspect-video h-[100px] w-[200px] object-cover"
              style={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              }}
              exit={{ opacity: 0, scale: 0.6 }}
            >
              <Image
                className="aspect-video h-[100px] w-[200px] rounded object-cover"
                width={200}
                height={100}
                src={`${nextImageArticle}`}
                alt="Imagen destacada del post siguiente"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.h4
          onMouseMove={(e) => {
            handleMouseMove(e)
          }}
          onHoverStart={() => {
            handleHoverStart(2)
          }}
          onHoverEnd={() => {
            handleHoverEnd()
          }}
          className="w-max cursor-pointer text-4xl text-amber-700 lg:text-[2.75rem]"
        >
          {nextTitleArticle}
        </motion.h4>
      </Link>
      <Link
        href={`/blog/article/${prevUrlArticle}`}
        className="relative mx-auto flex justify-center text-center lg:mx-0 lg:w-1/2"
      >
        <AnimatePresence>
          {hoveredImage === 1 && (
            <motion.div
              className="pointer-events-none absolute bottom-full aspect-video h-[100px] w-[200px] object-cover"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  type: "spring",
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
                src={prevImageArticle}
                alt="Imagen destacada del post previo"
                className="aspect-video h-[100px] w-[200px] rounded object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.h4
          onMouseMove={(e) => {
            handleMouseMove(e)
          }}
          onHoverStart={() => {
            handleHoverStart(1)
          }}
          onHoverEnd={() => {
            handleHoverEnd()
          }}
          className="w-max cursor-pointer text-4xl text-amber-700 lg:text-[2.75rem]"
        >
          {prevTitleArticle}
        </motion.h4>
      </Link>
    </div>
  )
}
