'use client'

import { motion } from 'motion/react'

export const IntroCosmos = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1.5, ease: 'easeOut' }}
      className='-z-10 absolute inset-0 bg-dark bg-blend-soft-light'
      style={{ backgroundImage: 'url(/cosmos.webp)' }}
    ></motion.div>
  )
}
