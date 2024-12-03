import { FormContact } from '@/validations'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface Props {
  register: UseFormRegister<FormContact>
  errors: FieldErrors<FormContact>
  currentStep: number
}

export const FormMap = ({ register, errors, currentStep }: Props) => {
  return (
    <div className='space-y-2 w-full flex-shrink-0'>
      <header className='mb-12 space-y-2'>
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
              className='block w-[min(100%,480px)] h-12 rounded-md bg-white px-3 py-1.5 text-base text-dark outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
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
      </div>
    </div>
  )
}
