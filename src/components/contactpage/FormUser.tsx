import { FormContact } from '@/validations/form-contact.schema'
import { FieldErrors, UseFormRegister, UseFormReset } from 'react-hook-form'

interface Props {
  register: UseFormRegister<FormContact>
  errors: FieldErrors<
    FormContact & { address?: string; city?: string; postalCode?: string }
  >
  currentStep: number
  reset: UseFormReset<FormContact>
}

export const FormUser = ({ register, errors, currentStep }: Props) => {
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
            htmlFor='product'
            className=' block text-sm/6 font-medium text-dark'
          >
            Producto
          </label>
          <div className='mt-2 '>
            <select
              id='product'
              {...register('product')}
              className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
            >
              <option value=''>Selecciona un producto</option>
              <option value='map'>Mapa Estelar</option>
              <option value='chart'>Carta Astral</option>
              <option value='both'>Ambos</option>
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
        {/* {format === 'fisico' && (
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
        )} */}
      </div>
    </div>
  )
}
