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
        Si quieres conocer cómo era el cielo en ese momento tan especial, o
        quieres conocer qué mensajes tienen para ti las estrellas puedes
        solicitar tu Mapa Estelar o tu Carta Astral contactando conmigo a través
        del formulario que verás a continuación:
      </p>
      {/* <div className='my-10 sm:my-16'>
        <CopyClipboard color='amber' />
      </div> */}

      <p className='mt-6 text-xl sm:text-2xl'>
        Una vez que reciba yo los datos,{' '}
        <span className='mt-6 text-xl font-semibold sm:text-2xl relative'>
          previo pago
          <span className='font-semibold text-base absolute -top-1 -right-2'>
            *
          </span>
        </span>
        , procederé a elaborar el producto.
      </p>

      <p className='mt-6 text-xl font-semibold sm:text-2xl'>
        <span className='font-semibold text-lg'>*</span> Al tratarse de
        productos digitales y personalizados, una vez realizado el pago, no
        habrá devolución, según las leyes de consumo de la UE.
      </p>
      <p className='mt-6 text-xl font-semibold sm:text-2xl'>
        <span className='font-semibold text-lg'>**</span> El Mapa Estelar y/o la
        Carta Astral se entragarán en un periodo de 7 días (el Mapa Estelar) a
        15 días (la Carta Astral) a la dirección de correo electrónico
        facilitada.
      </p>
      <p className='mt-6 text-xl sm:text-2xl'>
        Por favor, es muy importante que rellenes correctamente todos los
        campos.
      </p>
      <p className='mt-6 text-xl sm:text-2xl'>
        Si necesitas comunicarme algo tienes la opción de escribirme tu mensaje
        en el caja de comentario del formulario y me pondré en contacto contigo.
      </p>
    </motion.div>
  )
}
