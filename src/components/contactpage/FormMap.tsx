'use client'

import { FormContact } from '@/validations'
import {
  FieldErrors,
  UseFormRegister,
  Controller,
  Control,
} from 'react-hook-form'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { Calendar } from '@/components'

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
        <p className='text-base'>
          ¿Qué evento quieres que se vea reflejado en tu mapa estelar?
        </p>
      </header>
      <div>
        <div className='sm:col-span-3 mb-6'>
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
              className=' block w-[min(100%,480px)] h-12 rounded-md bg-white px-3 py-1.5 text-base text-dark outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
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
        <div className='sm:col-span-3 mb-6'>
          <label
            htmlFor='city-event'
            className=' block text-sm/6 font-medium text-dark'
          >
            Ciudad del evento
          </label>
          <div className='mt-2'>
            <input
              tabIndex={currentStep === 1 ? 0 : -1}
              placeholder='José Luis Campos Ruíz'
              id='city-event'
              type='text'
              className='block w-[min(100%,480px)] h-12 rounded-md bg-white px-3 py-1.5 text-base text-dark outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
              {...register('city-event')}
            />
            {errors['city-event']?.message && (
              <p className='my-4 w-[max-content]  text-base text-primary'>
                {' - '}
                {errors['city-event']?.message}
                {' - '}
              </p>
            )}
          </div>
        </div>
        <div className='sm:col-span-3 mb-6'>
          <label
            htmlFor='city-event'
            className=' block text-sm/6 font-medium text-dark'
          >
            Fecha del Evento
          </label>
          <div className='mt-2'>
            <Controller
              control={control}
              name='date-event'
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
            {errors['date-event']?.message && (
              <p className='my-4 w-[max-content]  text-base text-primary'>
                {' - '}
                {errors['date-event']?.message}
                {' - '}
              </p>
            )}
          </div>
        </div>
        <div className='sm:col-span-3 mb-6 '>
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
