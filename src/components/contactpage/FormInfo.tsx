'use client'

import { motion } from 'motion/react'
import { CopyClipboard } from '@/components/CopyClipboard'

export const FormInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, delay: 1.5 }}
      className='bg-white px-4 lg:px-8 py-20 w-[min(100%,1024px)] lg:mx-auto lg:-mt-[10rem] relative z-10 mb-20 lg:rounded-xl lg:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'
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
      <p className='mt-6 text-xl font-semibold sm:text-xl'>
        <span className='font-semibold text-lg'>**</span> Debes indicar la hora
        del evento junto a la fecha del evento.
      </p>
    </motion.div>
  )
}
