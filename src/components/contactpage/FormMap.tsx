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
import { formProducts } from '@/validations/form-products.schema'

interface Props {
  register: UseFormRegister<formProducts>
  errors: FieldErrors<formProducts>
  currentStep: number
  control: Control<formProducts>
  selectedProduct: string
}

export const FormMap = ({
  register,
  errors,
  currentStep,
  control,
  selectedProduct,
}: Props) => {
  const charAstralSelected =
    selectedProduct === 'ba149034' || selectedProduct === '82b28685'

  const handleColor = (time: Date) => {
    return time.getHours() > 12 ? 'text-primary' : 'text-secondary'
  }
  return (
    <div className='space-y-12 w-full flex-shrink-0'>
      <header className='space-y-2 text-center'>
        <h2 className='text-primary'>Datos del Mapa Estelar</h2>
        <p className='text-lg'>
          ¿Qué evento quieres que se vea reflejado en tu pedido?
        </p>
      </header>
      <div>
        <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto'>
          <label
            htmlFor='product'
            className=' block text-sm/6 font-medium text-dark'
          >
            ¿Qué producto deseas?
          </label>
          <div className='mt-2 '>
            <select
              id='product'
              {...register('product')}
              className='block py-2.5 px-0 w-full text-2xl text-primary font-medium bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
            >
              <option value=''>Selecciona un producto</option>
              <option
                className='text-dark/60 '
                value='ba149034'
              >
                Mapa estelar (20x30)
              </option>
              <option
                className='text-dark/60 '
                value='82b28685'
              >
                Mapa estelar (30x40)
              </option>
              <option
                className='text-dark/60 '
                value='7166539e'
              >
                Carta astral completa
              </option>
              <option
                className='text-dark/60 '
                value='d5590ae9'
              >
                Carta astral simple
              </option>
            </select>

            {errors.product?.message && (
              <p className='my-4 w-[max-content] text-base text-primary'>
                {' - '}
                {errors.product?.message}
                {' - '}
              </p>
            )}
          </div>
        </div>

        {charAstralSelected && (
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
                // value={charAstralSelected && 'Nacimiento'}
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
        )}

        <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto '>
          <label
            htmlFor='countryEvent'
            className=' block text-sm/6 font-medium text-dark'
          >
            País del evento
          </label>
          <div className='mt-2'>
            <input
              tabIndex={currentStep === 1 ? 0 : -1}
              placeholder='Suecia, Chile, Japón...'
              id='countryEvent'
              type='text'
              className=' block h-12 w-full rounded-md bg-white px-3 py-1.5 text-base text-dark outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
              {...register('countryEvent')}
            />
            {errors.countryEvent?.message && (
              <p className='my-4 w-[max-content]  text-base text-primary'>
                {' - '}
                {errors.countryEvent?.message}
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
        <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto'>
          <label
            htmlFor='timeEvent'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Hora del evento:
          </label>
          <div className='relative max-w-40'>
            <div className='absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none'>
              <svg
                className='w-4 h-4 text-primary dark:text-light'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <input
              {...register('timeEvent')}
              type='time'
              id='timeEvent'
              className=' bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary'
              required
            />
          </div>
          {errors.timeEvent?.message && (
            <p className='my-4 w-[max-content] text-base text-primary'>
              {' - '}
              {errors.timeEvent?.message}
              {' - '}
            </p>
          )}
        </div>
        {/* <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto '>
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
        </div> */}
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
