'use client'

import { useHidden } from '@/hooks'
import { motion } from 'motion/react'
import { Link } from 'next-view-transitions'

export const BackBlogBtn = () => {
  const { isHidden } = useHidden()
  return (
    <motion.div
      animate={isHidden ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: '-100%' },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        delay: isHidden ? 0.45 : 0.2,
        type: 'spring',

        bounce: 0.65,
      }}
      className='fixed right-2 z-30 top-8 pointer-events-none'
    >
      <Link
        href='/blog'
        className='group relative overflow-hidden rounded-md border border-text bg-light/50 px-2 py-3 leading-none backdrop-blur-sm transition  pointer-events-auto'
      >
        <small className='font-semibold  tracking-wide'>Volver Blog</small>
        <small className='absolute inset-0 top-full -z-10 bg-white transition-all duration-300 group-hover:top-1/2' />
        <small className='absolute inset-0 bottom-full -z-10 bg-white transition-all duration-300 group-hover:bottom-1/2' />
      </Link>
    </motion.div>
  )
}
