'use client'

import { CopyClipboard } from '@/components'
import { motion } from 'motion/react'

export const FormInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1.5 }}
      className='bg-white px-4  lg:px-8 py-20 w-[min(100%,1024px)] lg:mx-auto -mt-[10rem] relative z-10 mb-20 lg:rounded-xl'
    >
      <p className='text-xl sm:text-2xl'>
        Si quieres conocer qué mensaje tienen para ti las estrellas y develar el
        camino trazado por los astros, puedes ponerte en contacto conmigo a
        través del formulario que verás más abajo o a través del correo
        electrónico:
      </p>
      <div className='my-10 sm:my-16'>
        <CopyClipboard color='amber' />
      </div>

      <p className='mt-6 text-xl sm:text-2xl'>
        Cuando tenga los datos, previo pago, procederé a elaborar el mapa
        personalizado.{' '}
        <span className='font-semibold sm:text-2xl underline-offset-2 underline'>
          Una vez procesado el pedido, no habrá devolución
        </span>
        .
      </p>
      <p className='mt-6 text-xl font-semibold sm:text-2xl'>
        El tiempo aproximado de elaboración es de 7 días para formato digital y
        de 15 días para formato{' '}
        <span className='mt-6 text-xl font-semibold sm:text-2xl relative'>
          físico{' '}
          <span className='font-semibold text-base absolute -top-1 -right-1'>
            *
          </span>
        </span>{' '}
        .
      </p>
      <p className='mt-6 text-xl font-semibold sm:text-xl'>
        <span className='font-semibold text-lg'>*</span> Los pedidos en formato
        físico solo se podrán enviar a{' '}
        <span className=' font-semibold underline underline-offset-2'>
          España
        </span>
        .
      </p>
    </motion.div>
  )
}
