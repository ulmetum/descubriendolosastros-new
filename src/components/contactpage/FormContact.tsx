'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  formContact,
  formContactSchema,
} from '@/validations/form-contact.schema'

import { AnimatePresence, motion } from 'motion/react'
import { FormComplete } from '@/components/contactpage/FormComplete'
import { sendEmailContactAction } from '@/actions/brevo/send-email-contact.action'
import { cn } from '@/utils/mergeClass'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const FormContact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<formContact>({
    resolver: zodResolver(formContactSchema),
  })

  const [isSuccess, setIsSuccess] = useState(true)

  const updateIsSuccess = () => {
    setIsSuccess((prev) => !prev)
  }

  const processForm: SubmitHandler<formContact> = async (data) => {
    await sendEmailContactAction(data)

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
            <form
              className='flex justify-center w-full'
              onSubmit={handleSubmit(processForm)}
            >
              <div className='lg:flex justify-center w-full gap-10'>
                <div className='w-full lg:w-1/2 flex flex-col items-end'>
                  <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto lg:mx-0'>
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
                  <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto lg:mx-0'>
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
                  <div className='sm:col-span-4 mb-6 w-[min(100%,480px)] mx-auto lg:mx-0 '>
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
                </div>
                <div className='w-full lg:w-1/2  '>
                  <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto lg:mx-0 '>
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
                  <div className='sm:col-span-3 mt-7 w-[min(100%,480px)] mx-auto lg:mx-0 '>
                    <div className='flex items-center gap-2'>
                      <div className='inline-flex items-center'>
                        <label
                          className='flex items-center cursor-pointer relative'
                          htmlFor='check-with-link'
                        >
                          <input
                            type='checkbox'
                            className='peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-primary checked:border-primary'
                            id='check-with-link'
                            {...register('terms')}
                          />
                          <span className='absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-3.5 w-3.5'
                              viewBox='0 0 20 20'
                              fill='currentColor'
                              stroke='currentColor'
                              strokeWidth='1'
                            >
                              <path
                                fillRule='evenodd'
                                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                clipRule='evenodd'
                              ></path>
                            </svg>
                          </span>
                        </label>
                        <label
                          className='cursor-pointer ml-2 text-slate-600 text-sm'
                          htmlFor='check-with-link'
                        >
                          <p className='text-base font-medium text-dark'>
                            Estoy de acuerdo con los &nbsp;
                            <a
                              href='#'
                              className='text-amber-700 transition hover:text-amber-800 hover:underline dark:text-amber-800'
                            >
                              términos y condiciones
                            </a>
                            .
                          </p>
                        </label>
                      </div>
                    </div>
                    {errors.terms?.message && (
                      <div>
                        <p className='my-4 w-[max-content]  text-base text-primary'>
                          {' - '}
                          {errors.terms?.message}
                          {' - '}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className='sm:col-span-3 mt-7 w-[min(100%,480px)] mx-auto lg:mx-0'>
                    <button
                      type='submit'
                      className={cn(
                        'text-white w-full h-12 bg-primary/90 hover:bg-primary focus:ring-4 focus:outline-none tracking-wider rounded-lg text-lg  px-5 py-2.5 text-center transition-all font-headings',
                        {
                          'bg-dark/45 pointer-events-none': isSubmitting,
                        },
                      )}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                  </div>
                </div>
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
