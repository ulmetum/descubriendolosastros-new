'use client'

import { motion } from 'motion/react'

interface Props {
  direction: string
  variants: {
    enter: (direction: string) => {
      x: number
      opacity: number
    }
    center: {
      x: number
      opacity: number
    }
    exit: (direction: string) => {
      x: number
      opacity: number
    }
  }
}

export const FormUser = ({ direction, variants }: Props) => {
  return (
    <motion.div
      variants={variants}
      initial='enter'
      animate='center'
      exit='exit'
      custom={direction}
      transition={{ duration: 0.25 }}
      className='space-y-2 px-8 absolute inset-0'
    >
      <h3>Paso 1</h3>
      <div className='h-4 w-5/6 rounded bg-neutral-500' />
      <div className='h-4 rounded bg-neutral-500' />
      <div className='h-4 w-4/6 rounded bg-neutral-500' />
    </motion.div>
  )
}
