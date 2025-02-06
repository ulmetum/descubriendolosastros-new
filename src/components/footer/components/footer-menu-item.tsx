'use client'

import { MenuElement } from '@/interfaces/menu.interface'
import { motion } from 'motion/react'
import { Link } from 'next-view-transitions'

interface Props {
  item: MenuElement
}

export const FooterMenuItem = ({ item }: Props) => {
  return (
    <Link
      href={item.url}
      key={item.id}
    >
      <motion.li
        className='inline-block capitalize'
        initial='rest'
        whileHover='hover'
        animate='rest'
      >
        {item.label.split('').map((char, i) => (
          <motion.span
            className='font-headings text-3xl font-light text-light md:text-4xl'
            key={i}
            variants={{
              rest: {
                textShadow: '0px 0px 0px rgba(217, 119, 6, 0)',
                color: 'var(--light)',
                opacity: 0.85,
                transition: { delay: i * 0.05, duration: 0.15 },
              },
              hover: {
                opacity: 1,
                color: 'var(--primary)',
                textShadow: '1px 0px 1px rgba(217, 119, 6, 0.75)',
                transition: { delay: i * 0.05, duration: 0.15 },
              },
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.li>
    </Link>
  )
}
