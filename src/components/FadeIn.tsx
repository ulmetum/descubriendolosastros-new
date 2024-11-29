'use client'
import { ReactNode } from 'react'
import { motion } from 'motion/react'

interface Props {
  children: ReactNode
}

export const FadeIn = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { ease: [0.83, 0, 0.17, 1], duration: 1 },
      }}
      viewport={{ margin: '0px 0px -300px 0px' }}
    >
      {children}
    </motion.div>
  )
}
