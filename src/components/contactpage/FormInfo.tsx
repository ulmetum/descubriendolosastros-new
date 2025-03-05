'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const FormInfo = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.75 }}
      className='bg-white px-4 lg:px-8 py-20 w-[min(100%,1024px)] lg:mx-auto lg:-mt-[10rem] relative z-10 mb-20 lg:rounded-xl lg:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'
    >
      {children}
    </motion.div>
  )
}
