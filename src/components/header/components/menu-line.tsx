'use client'

import { motion } from 'motion/react'

interface Props {
  isHidden: boolean
}

export const MenuLine = ({ isHidden }: Props) => {
  return (
    <div className='absolute bottom-1 flex w-full justify-center'>
      <motion.div
        animate={isHidden ? 'hidden' : 'show'}
        variants={{
          hidden: {
            boxShadow: 'inset 0 0 0 10px rgb(8 47 73 / .85 )',
            width: '8%',
          },
          show: { boxShadow: 'inset 0 0 0 1px rgb(8 47 73 / .25 )' },
        }}
        transition={{
          duration: 0.5,
          ease: [0.83, 0, 0.17, 1],
        }}
        className='h-1 w-[20%] rounded-xl'
      ></motion.div>
    </div>
  )
}
