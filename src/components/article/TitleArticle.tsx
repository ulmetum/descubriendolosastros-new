'use client'

import { motion } from 'framer-motion'

interface Props {
  translate: number
  title: string
}

export function TitleArticle({ title }: Props) {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 3, delay: 0.5, ease: [0.83, 0, 0.17, 1] },
      }}
      style={{ margin: '1.5rem 0' }}
      className='relative z-20 mb-4 flex items-center justify-center text-center text-white'
    >
      <div className='font-headings leading-none'>{title}</div>
    </motion.h1>
  )
}
