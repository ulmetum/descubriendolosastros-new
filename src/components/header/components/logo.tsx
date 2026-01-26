'use client'

import { LogoDescubriendolosastros } from '@/components/icons/LogoDescubriendolosastros.icon'
import { motion } from 'motion/react'
import { useTransitionRouter } from 'next-view-transitions'
import { slideInOut } from './menu'

export const Logo = () => {
  const router = useTransitionRouter()
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
      <a
        href='/'
        onClick={(e) => {
          e.preventDefault()
          router.push(`/`, {
            onTransitionReady: slideInOut,
          })
        }}
      >
        <LogoDescubriendolosastros classNames='w-14 h-14' />
      </a>
    </motion.div>
  )
}
