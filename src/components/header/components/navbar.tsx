'use client'

import { motion } from 'motion/react'
import { Navigation } from './navigation'
import { useHidden } from '@/hooks/useHidden'
import { Logo } from '@/components/header/components/logo'
import { MenuLine } from '@/components/header/components/menu-line'
import type { MenuElement } from '@/interfaces/menu.interface'

interface Props {
  menuItems: MenuElement[]
}

export const Navbar = ({ menuItems }: Props) => {
  const { isHidden, updateIsHidden } = useHidden()

  return (
    <motion.div
      animate={isHidden ? 'hidden' : 'show'}
      onHoverStart={() => updateIsHidden(false)}
      onFocusCapture={() => updateIsHidden(false)}
      variants={{
        hidden: {
          y: '-90%',
          backgroundColor: 'rgb(255 255 255 / 1)',
          opacity: 0.75,
        },
        show: {
          y: '0%',
          backgroundColor: 'rgb(255 255 255 / .9)',
          opacity: 1,
        },
      }}
      transition={{ duration: 0.75, ease: [0.83, 0, 0.17, 1] }}
      className={`fixed inset-x-1 top-0 z-[9990] mx-auto mt-2 flex max-w-7xl items-center justify-between rounded-lg px-2 py-4 backdrop-blur-sm sm:h-[var(--main-header-height)]`}
    >
      <Logo />
      <Navigation menuItems={menuItems} />
      <MenuLine isHidden={isHidden} />
    </motion.div>
  )
}
