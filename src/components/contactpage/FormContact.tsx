'use client'

import {
  formContact,
  formContactSchema,
} from '@/validations/form-contact.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

export const FormContact = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<formContact>({
    resolver: zodResolver(formContactSchema),
  })

  const processForm: SubmitHandler<formContact> = async (data) => {
    console.log({ data })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(processForm)}>
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
              placeholder='joseluiscamposruiz@gmail.com'
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
            className='text-white bg-primary/90 hover:bg-primary focus:ring-4 focus:outline-none tracking-wider rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center  font-headings'
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  )
}
