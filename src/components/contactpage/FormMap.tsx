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
        <div className='sm:col-span-3'>
          <label
            htmlFor='name'
            className=' block text-sm/6 font-medium text-dark'
          >
            Nombre
          </label>
          <div className='mt-2'>
            <input
              tabIndex={currentStep === 1 ? 0 : -1}
              placeholder='José Luis Campos Ruíz'
              id='name'
              name='name'
              type='text'
              autoComplete='given-name'
              className='block w-[min(100%,480px)] h-12 rounded-md bg-white px-3 py-1.5 text-base text-dark outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
