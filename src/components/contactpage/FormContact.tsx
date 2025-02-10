'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
// import { sendFormContactSafe } from '@/actions/send-form-contact.action'

import {
  formContact,
  formContactSchema,
} from '@/validations/form-contact.schema'
import { zodResolver } from '@hookform/resolvers/zod'

import { AnimatePresence, motion } from 'motion/react'
import { FormComplete } from '@/components/contactpage/FormComplete'
import { sendFormContactSafe } from '@/actions/send-form-contact.action'
import { toast } from 'sonner'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const FormContact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formContact>({
    resolver: zodResolver(formContactSchema),
  })

  const [isSuccess, setIsSuccess] = useState(true)

  const updateIsSuccess = () => {
    setIsSuccess((prev) => !prev)
  }

  const processForm: SubmitHandler<formContact> = async (data) => {
    const res = await sendFormContactSafe({
      ...data,
      typeError: 'ErrorFormContact',
    })
    if (!res?.data?.success) {
      toast(
        <div className='text-dark bg-primary p-4 rounded-lg w-full '>
          <h3 className=' font-medium text-light '>
            Error al enviar el formulario
          </h3>
          <div className='my-4 space-y-4'>
            <p className='text-lg text-light'>{res?.data?.error}</p>
            <h4 className='text-3xl text-light text-center'>
              descubriendolosastros@gmail.com
            </h4>
          </div>
          <div className='flex justify-end'>
            <button
              className='bg-light text-primary p-2 rounded-lg '
              onClick={() => toast.dismiss()}
            >
              Cerrar
            </button>
          </div>
        </div>,
        {
          dismissible: false,
          classNames: {
            toast: 'w-[80vw] left-1/2 -translate-x-1/2 p-0 ',
          },
        }
      )
      // reset()
      return
    }
    updateIsSuccess()
    reset()
  }
  return (
    <div>
      <AnimatePresence
        mode='wait'
        initial={false}
      >
        {isSuccess ? (
          <motion.div
            key='form'
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <form onSubmit={handleSubmit(processForm)}>
              <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto'>
                <label
                  htmlFor='subject'
                  className=' block text-sm/6 font-medium text-dark'
                >
                  Asunto
                </label>
                <div className='mt-2 '>
                  <input
                    placeholder='Asunto del mensaje'
                    id='subject'
                    type='text'
                    autoComplete='given-name'
                    className='block h-12 w-full rounded-md bg-white px-3 py-1.5 text-base text-dark outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
                    {...register('subject')}
                  />
                  {errors.subject?.message && (
                    <p className='my-4 w-[max-content]  text-base text-primary'>
                      {' - '}
                      {errors.subject?.message}
                      {' - '}
                    </p>
                  )}
                </div>
              </div>
              <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto'>
                <label
                  htmlFor='name'
                  className=' block text-sm/6 font-medium text-dark'
                >
                  Nombre
                </label>
                <div className='mt-2 '>
                  <input
                    placeholder='José Luis Campos Ruíz'
                    id='name'
                    type='text'
                    autoComplete='given-name'
                    className='block h-12 w-full rounded-md bg-white px-3 py-1.5 text-base text-dark outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
                    {...register('name')}
                  />
                  {errors.name?.message && (
                    <p className='my-4 w-[max-content]  text-base text-primary'>
                      {' - '}
                      {errors.name?.message}
                      {' - '}
                    </p>
                  )}
                </div>
              </div>
              <div className='sm:col-span-4 mb-6 w-[min(100%,480px)] mx-auto '>
                <label
                  htmlFor='email'
                  className=' block text-sm/6 font-medium text-dark'
                >
                  Correo electrónico
                </label>
                <div className='mt-2 '>
                  <input
                    placeholder='joseluiscamposruiz@mail.com'
                    id='email'
                    type='email'
                    autoComplete='email'
                    className='block h-12 w-full rounded-md bg-white px-3 py-1.5 text-base text-dark outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
                    {...register('email')}
                  />
                  {errors.email?.message && (
                    <p className='my-4  text-base text-primary'>
                      {' - '}
                      {errors.email?.message}
                      {' - '}
                    </p>
                  )}
                </div>
              </div>
              <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto '>
                <label
                  htmlFor='city-event'
                  className=' block text-sm/6 font-medium text-dark'
                >
                  Comentario
                </label>
                <div className='flex items-center gap-2'>
                  <textarea
                    {...register('message')}
                    id='message'
                    rows={4}
                    className='block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-dark focus:outline-primary focus:ring-sky-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:primary dark:focus:ring-sky-600'
                    placeholder='Escribe aquí tu comentario...'
                  ></textarea>
                </div>
                {errors.message?.message && (
                  <p className='my-4 w-[max-content] text-base text-primary'>
                    {' - '}
                    {errors.message?.message}
                    {' - '}
                  </p>
                )}
              </div>
              <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto'>
                <button
                  type='submit'
                  className='text-white bg-primary/90 hover:bg-primary focus:ring-4 focus:outline-none tracking-wider rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center transition-all font-headings'
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key='success'
            variants={variants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <FormComplete updateIsSuccess={updateIsSuccess} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
