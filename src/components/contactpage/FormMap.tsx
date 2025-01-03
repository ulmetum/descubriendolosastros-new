'use client'

import {
  FieldErrors,
  UseFormRegister,
  Controller,
  Control,
} from 'react-hook-form'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { Calendar } from '@/components/icons/Calendar.icon'
import { FormContact } from '@/validations/form-contact.schema'

interface Props {
  register: UseFormRegister<FormContact>
  errors: FieldErrors<FormContact>
  currentStep: number
  control: Control<FormContact>
}

export const FormMap = ({ register, errors, currentStep, control }: Props) => {
  const handleColor = (time: Date) => {
    return time.getHours() > 12 ? 'text-primary' : 'text-secondary'
  }
  return (
    <div className='space-y-12 w-full flex-shrink-0'>
      <header className='space-y-2 text-center'>
        <h2 className='text-primary'>Datos del Mapa Estelar</h2>
        <p className='text-lg'>
          ¿Qué evento quieres que se vea reflejado en tu mapa estelar?
        </p>
      </header>
      <div>
        <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto '>
          <label
            htmlFor='event'
            className=' block text-sm/6 font-medium text-dark'
          >
            Evento
          </label>
          <div className='mt-2'>
            <input
              tabIndex={currentStep === 1 ? 0 : -1}
              placeholder='Nacimiento, bautizo, boda...'
              id='event'
              type='text'
              className=' block h-12 w-full rounded-md bg-white px-3 py-1.5 text-base text-dark outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
              {...register('event')}
            />
            {errors.event?.message && (
              <p className='my-4 w-[max-content]  text-base text-primary'>
                {' - '}
                {errors.event?.message}
                {' - '}
              </p>
            )}
          </div>
        </div>
        <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto'>
          <label
            htmlFor='city-event'
            className=' block text-sm/6 font-medium text-dark'
          >
            Ciudad del evento
          </label>
          <div className='mt-2'>
            <input
              tabIndex={currentStep === 1 ? 0 : -1}
              placeholder='Bilbao, Vigo, Leon...'
              id='cityEvent'
              type='text'
              className='block h-12 w-full rounded-md bg-white px-3 py-1.5 text-base text-dark outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
              {...register('cityEvent')}
            />
            {errors['cityEvent']?.message && (
              <p className='my-4 w-[max-content]  text-base text-primary'>
                {' - '}
                {errors['cityEvent']?.message}
                {' - '}
              </p>
            )}
          </div>
        </div>
        {/* <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto'>
          <div className='w-full max-w-sm min-w-[200px]'>
            <label className='block text-sm/6 font-medium text-dark'>
              Formato
            </label>

            <div className='relative'>
              <select
                {...register('format')}
                className='w-full bg-transparent placeholder:text-slate-400 text-dark text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer'
              >
                <option value='fisico'>Físico</option>
                <option value='digital'>Digital</option>
              </select>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.2'
                stroke='currentColor'
                className='h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
                />
              </svg>
            </div>
            <p className='flex items-center mt-2 text-sm text-primary font-normal'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5 mr-2'
              >
                <path
                  fillRule='evenodd'
                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z'
                  clipRule='evenodd'
                ></path>
              </svg>
              Elige el formato que prefieras para tu Mapa estelar.
            </p>
            {errors.format?.message && (
              <p className='my-4 w-[max-content]  text-base text-primary'>
                {' - '}
                {errors.format?.message}
                {' - '}
              </p>
            )}
          </div>
        </div> */}
        <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto'>
          <label
            htmlFor='cityEvent'
            className=' block text-sm/6 font-medium text-dark'
          >
            Fecha del Evento
          </label>
          <div className='mt-2'>
            <Controller
              control={control}
              name='dateEvent'
              render={({ field: { onChange, value, onBlur, name } }) => {
                return (
                  <DatePicker
                    showIcon
                    isClearable
                    showTimeSelect
                    icon={
                      <Calendar classNames='absolute top-1/2 left-1 -translate-y-1/2 h-[1em] w-[1em] text-dark' />
                    }
                    name={name}
                    onBlur={onBlur}
                    className='text-lg placeholder:font-headings placeholder:pl-2 placeholder:text-lg font-headings !pl-8'
                    dateFormat='dd-MM-yyyy'
                    placeholderText='Selecciona una fecha'
                    timeClassName={handleColor}
                    onChange={(date) => {
                      onChange(date ? date.getTime() : undefined)
                    }}
                    selected={value ? new Date(value) : undefined}
                  />
                )
              }}
            />
            {errors['dateEvent']?.message && (
              <p className='my-4 w-[max-content]  text-base text-primary'>
                {' - '}
                {errors['dateEvent']?.message}
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
              {...register('comments')}
              id='message'
              rows={4}
              className='block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-dark focus:outline-primary focus:ring-sky-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:primary dark:focus:ring-sky-600'
              placeholder='Escribe aquí tu comentario...'
            ></textarea>
          </div>
          {errors.comments?.message && (
            <p className='my-4 w-[max-content] text-base text-primary'>
              {' - '}
              {errors.comments?.message}
              {' - '}
            </p>
          )}
        </div>
        <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto '>
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
      </div>
    </div>
  )
}
