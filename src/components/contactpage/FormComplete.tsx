'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

interface Props {
  updateIsSuccess: () => void
}

export const FormComplete = ({ updateIsSuccess }: Props) => {
  return (
    <div className='space-y-12 w-full flex-shrink-0'>
      <header className=' space-y-2 text-center'>
        <h2 className='text-primary'>¡La sonda ha sido lanzada con éxito!</h2>
        <p className='text-lg'>
          Tu mensaje acaba de entrar en órbita y lo leeremos antes de que
          alcance la velocidad de la luz... Pronto recibirás una respuesta.
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
          className='mx-auto w-[400px] h-[400px]'
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1,
          type: 'spring', // Usa un efecto de resorte para el rebote
          stiffness: 300, // Controla la rigidez del resorte
          damping: 10,
        }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={updateIsSuccess}
          className='rounded-full block bg-primary py-2 px-3.5 font-headings mx-auto  text-light'
          transition={{
            duration: 1.2,
            type: 'spring', // Usa un efecto de resorte para el rebote
            stiffness: 300, // Controla la rigidez del resorte
            damping: 10,
          }}
        >
          Escribe un nuevo mensaje
        </motion.button>
      </motion.div>
    </div>
  )
}
