'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export const FormProductComplete = () => {
  return (
    <div className='space-y-12 w-full flex-shrink-0'>
      <header className=' space-y-2 text-center'>
        <h2 className='text-primary'>¡Su pedido será procesado en breve!</h2>
        <p className='text-lg'>
          Tan solo tienes que seguir los pasos a través de la pasarela para
          realizar el pago.
        </p>
      </header>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.35,
          type: 'spring',
          bounce: 0.35,
        }}
      >
        <Image
          src='/astronaut-sent.svg'
          alt='astronaut'
          width={400}
          height={400}
          className='mx-auto'
        />
      </motion.div>
    </div>
  )
}
