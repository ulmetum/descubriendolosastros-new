import { FormContact } from '@/validations'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface Props {
  register: UseFormRegister<FormContact>
  errors: FieldErrors<FormContact>
  currentStep: number
}

export const FormUserSimple = ({ register, errors, currentStep }: Props) => {
  return (
    <div className='space-y-12 w-full flex-shrink-0'>
      <header className=' space-y-2 text-center'>
        <h2 className='text-primary'>Información Personal</h2>
        <p className='text-lg'>
          Para poder hacerte llegar el pedido necesito saber algunos datos sobre
          ti.
        </p>
      </header>

      <div>
        <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto'>
          <label
            htmlFor='name'
            className=' block text-sm/6 font-medium text-dark'
          >
            Nombre
          </label>
          <div className='mt-2 '>
            <input
              tabIndex={currentStep === 0 ? 0 : -1}
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
            Email address
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
      </div>
    </div>
  )
}
