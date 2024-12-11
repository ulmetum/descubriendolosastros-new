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
        hidden: { opacity: 0, y: '100%' },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        type: 'spring',
        bounce: isHidden ? 0.65 : 0.25,
      }}
      className='fixed left-2 lg:left-4 z-30 bottom-2 lg:bottom-4 pointer-events-none backdrop-blur-sm'
    >
      <Link
        href='/blog'
        className='h-[50px] group relative overflow-hidden rounded-md border border-dark bg-light/50 px-2 py-3 leading-none transition pointer-events-auto grid place-content-center'
      >
        <small className='font-semibold  tracking-wide'>Volver Blog</small>
        <small className='absolute inset-0 top-full -z-10 bg-white transition-all duration-300 group-hover:top-1/2' />
        <small className='absolute inset-0 bottom-full -z-10 bg-white transition-all duration-300 group-hover:bottom-1/2' />
      </Link>
    </motion.div>
  )
}
