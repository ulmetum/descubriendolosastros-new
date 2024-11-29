'use client'

import { motion } from 'motion/react'

export const IntroBg = () => {
  return (
    <motion.div
      initial={{ y: '0%' }}
      animate={{ y: '-100%' }}
      transition={{ duration: 2.5, ease: [0.83, 0, 0.17, 1] }}
      className='absolute left-0 top-0 h-full w-full origin-top bg-pampas-50 mix-blend-difference'
    ></motion.div>
  )
}
