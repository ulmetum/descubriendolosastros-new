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
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0 },
      }}
      className='fixed inset-y-0 -right-4 z-30 flex items-center'
    >
      <Link
        href='/blog'
        className='group relative overflow-hidden rounded-md border border-zinc-900 bg-pampas-50/50 px-2 py-3 leading-none backdrop-blur-sm transition rotate-90'
      >
        <small>Volver Blog</small>
        <small className='absolute inset-0 top-full -z-10 bg-white transition-all duration-300 group-hover:top-1/2' />
        <small className='absolute inset-0 bottom-full -z-10 bg-white transition-all duration-300 group-hover:bottom-1/2' />
        {/* <small className="absolute left-1/2 top-1/2 -z-10 h-0 w-full bg-white transition-all duration-300 -translate-x-1/2 -translate-y-1/2 group-hover:h-full" /> */}
      </Link>
    </motion.div>
  )
}
