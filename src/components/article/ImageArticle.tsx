"use client"
import { cn } from "@/utils"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface Props {
  imageArticle: string
}

export function ImageArticle({ imageArticle }: Props) {
  const [isShow, setIsShow] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
  return (
    <div className="relative h-[60dvh] w-screen overflow-hidden">
      <div
        className={cn(
          "absolute inset-0 z-10 bg-black/50 transition-all delay-300 duration-[3500ms] ease-[cubic-bezier(0.76,0,0.24,1)] lg:max-w-none",
          {
            "opacity-100": isShow,
            "opacity-0": !isShow,
          },
        )}
      />
      <motion.div className="relative h-full w-full" style={{ y }}>
        <Image
          src={imageArticle}
          onLoad={() => setIsShow(true)}
          className={cn(
            "object-cover object-top transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]",
            {
              "opacity-100": isShow,
              "opacity-0": !isShow,
            },
          )}
          alt="featured_image"
          fill
          priority
        />
      </motion.div>

      {/* <motion.div
        style={{
          backgroundImage: `url(${imageArticle})`,
          y,
          scale: 1.2,
        }}
        className={`featured_image flex h-full items-center justify-center bg-cover bg-center bg-no-repeat`}
      ></motion.div> */}
    </div>
  )
}
