'use client'

import { useState } from 'react'

import { motion } from 'motion/react'

export const AccordeonItemArticle = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <motion.div
      layout
      animate={open ? 'open' : 'closed'}
      className='border-b-[1px] border-b-slate-300'
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className='flex w-full items-center justify-between gap-4 py-6'
      >
        <motion.h3
          variants={{
            open: {
              color: 'rgb(var(--primary-rgb))',
            },
            closed: {
              color: 'rgb(var(--dark-rgb))',
            },
          }}
          className=' bg-clip-text text-left text-2xl font-medium'
        >
          {title}
        </motion.h3>
        <motion.span
          layout
          variants={{
            open: {
              rotate: '180deg',
              color: 'rgb(var(--primary-rgb))',
            },
            closed: {
              rotate: '0deg',
              color: 'rgb(var(--dark-rgb))',
            },
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon icon-tabler icons-tabler-outline icon-tabler-chevron-up'
          >
            <path
              stroke='none'
              d='M0 0h24v24H0z'
              fill='none'
            />
            <path d='M6 15l6 -6l6 6' />
          </svg>
        </motion.span>
      </button>
      <motion.div
        layout
        initial={false}
        animate={{
          height: open ? 'auto' : 0,
          marginBottom: open ? 24 : 0,
        }}
        className='overflow-hidden text-slate-600'
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: open ? 1 : 0,
            y: open ? 0 : 15,
            transition: {
              delay: open ? 0.15 : 0,
              type: 'spring',
              stiffness: 350,
              damping: 10,
            },
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
