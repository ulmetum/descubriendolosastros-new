'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'next-view-transitions'
import { useEffect, useState } from 'react'

const menuItems = [
  { id: 1, label: 'inicio' },
  { id: 2, label: 'contacto' },
]

export const MenuNotFound = () => {
  const [selected, setSelected] = useState<number | null>(null)
  const handleMouseEnter = (data: number | null) => {
    setSelected(data)
  }

  const handleMouseLeave = (data: number | null) => {
    setSelected(data)
  }

  useEffect(() => {
    document.body.classList.add('error404')
    return () => {
      document.body.classList.remove('error404')
    }
  })

  return (
    <ul
      className='flex space-x-4'
      onMouseLeave={() => handleMouseLeave(null)}
    >
      {menuItems.map((item) => (
        <li
          className='relative'
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
        >
          <Link
            className='font-headings text-2xl capitalize text-light underline decoration-dotted underline-offset-4 lg:no-underline'
            href={item.label === 'inicio' ? '/' : `/${item.label}`}
          >
            {item.label}
          </Link>

          <AnimatePresence>
            {selected === item.id ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='absolute bottom-0 hidden h-[2px] w-full bg-light lg:block'
                layoutId='underline'
              />
            ) : null}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  )
}
