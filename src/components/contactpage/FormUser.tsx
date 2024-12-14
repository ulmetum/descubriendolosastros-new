import { FormContact } from '@/validations/form-contact.schema'
import { FieldErrors, UseFormRegister, UseFormReset } from 'react-hook-form'

interface Props {
  register: UseFormRegister<FormContact>
  errors: FieldErrors<
    FormContact & { address?: string; city?: string; postalCode?: string }
  >
  currentStep: number
  format: 'fisico' | 'digital'
  reset: UseFormReset<FormContact>
}

export const FormUser = ({
  register,
  errors,
  currentStep,
  format,
}: // reset,
Props) => {
  return (
    <div className='space-y-12 w-full flex-shrink-0'>
      <header className=' space-y-2 text-center'>
        <h2 className='text-primary'>Información Personal</h2>
        <p className='text-lg'>
          Para poder hacerte llegar el pedido necesito saber algunos datos sobre
          ti.
        </p>
      </header>
      <div className='flex flex-col gap-4 items-center my-12'>
        <h3 className='text-center'>Elige el formato que desees recibir:</h3>
        <div className='flex gap-4'>
          <div className='inline-flex items-center'>
            <label
              className='relative flex items-center cursor-pointer'
              htmlFor='fisico'
            >
              <input
                {...register('formatMap')}
                type='radio'
                value='fisico'
                className='peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all'
                id='fisico'
              />
              <span className='absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></span>
            </label>
            <label
              className='ml-2 text-slate-600 cursor-pointer text-lg'
              htmlFor='fisico'
            >
              Físico
            </label>
          </div>

          <div className='inline-flex items-center'>
            <label
              className='relative flex items-center cursor-pointer'
              htmlFor='digital'
            >
              <input
                {...register('formatMap')}
                type='radio'
                value='digital'
                className='peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all'
                id='digital'
              />
              <span className='absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></span>
            </label>
            <label
              className='ml-2 text-slate-600 cursor-pointer text-lg'
              htmlFor='digital'
            >
              Digital
            </label>
          </div>
        </div>
        {errors.formatMap?.message && (
          <p className='my-4  text-base text-light bg-primary px-3 rounded-lg'>
            {errors.formatMap?.message}
          </p>
        )}
      </div>
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
        {format === 'fisico' && (
          <>
            <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto'>
              <label
                htmlFor='address'
                className=' block text-sm/6 font-medium text-dark'
              >
                Dirección
              </label>
              <div className='mt-2 '>
                <input
                  placeholder='Calle 1, Nº 123'
                  id='address'
                  type='text'
                  autoComplete='address-line1'
                  className='block h-12 w-full rounded-md bg-white px-3 py-1.5 text-base text-dark outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
                  {...register('address')}
                />
                {errors.address?.message && (
                  <p className='my-4  text-base text-primary'>
                    {' - '}
                    {errors.address?.message}
                    {' - '}
                  </p>
                )}
              </div>
            </div>
            <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto'>
              <label
                htmlFor='city'
                className=' block text-sm/6 font-medium text-dark'
              >
                Ciudad
              </label>
              <div className='mt-2 '>
                <input
                  placeholder='Santiago de Compostela'
                  id='city'
                  type='text'
                  autoComplete='home city'
                  className='block h-12 w-full rounded-md bg-white px-3 py-1.5 text-base text-dark outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
                  {...register('city')}
                />
                {errors.city?.message && (
                  <p className='my-4  text-base text-primary'>
                    {' - '}
                    {errors.city?.message}
                    {' - '}
                  </p>
                )}
              </div>
            </div>
            <div className='sm:col-span-3 mb-6 w-[min(100%,480px)] mx-auto'>
              <label
                htmlFor='postal-code'
                className=' block text-sm/6 font-medium text-dark'
              >
                Código Postal
              </label>
              <div className='mt-2 '>
                <input
                  placeholder='05001'
                  id='postal-code'
                  type='text'
                  autoComplete='postal-code'
                  className='block h-12 w-full rounded-md bg-white px-3 py-1.5 text-base text-dark outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6'
                  {...register('postalCode')}
                />
                {errors.postalCode?.message && (
                  <p className='my-4  text-base text-primary'>
                    {' - '}
                    {errors.postalCode?.message}
                    {' - '}
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
