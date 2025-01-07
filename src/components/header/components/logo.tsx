'use client'

import { motion } from 'motion/react'

export const Logo = () => {
  return (
    <motion.div
      initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
      animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      transition={{
        duration: 2,
        ease: [0.83, 0, 0.17, 1],
      }}
      className={`text-xl slg:text-4xl flex items-center pl-3 sm:text-2xl text-dark`}
    >
      Astros
    </motion.div>
  )
}
