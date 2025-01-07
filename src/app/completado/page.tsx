import { SuccessIcon } from '@/components/icons/success.icon'

const PageSuccess = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4 p-4 md:p-6'>
      <div className='flex flex-col items-center gap-2 text-center'>
        <SuccessIcon
          size='lg'
          classNames='text-primary'
        />
        {/* <CircleCheckIcon className='h-12 w-12 text-green-500' /> */}
        <h1 className='font-semibold text-4xl text-primary'>
          Payment successful
        </h1>
        <p className='max-w-[678px] mb-8 text-gray-500 text-xl sm:text-2xl'>
          Tu pedido ha sido confirmado y pronto será procesado y enviado.
          ¡Muchas gracias por apoyarme comprando mis productos!
        </p>
      </div>
      <div className='w-full max-w-[678px] p-0 border border-dark/30 rounded-md'>
        <div className='py-8 px-14 md:px-16'>
          <div className='grid gap-1 '>
            <div className='flex items-center gap-2'>
              <div className='text-lg font-medium text-primary brightness-90'>
                Pedido:
              </div>
              <div className='text-lg '>Carta Astral Simple</div>
              <div className='text-lg text-dark border border-dark px-2 rounded-md font-medium'>
                {' '}
                108 €{' '}
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div className='text-lg font-medium text-primary brightness-90'>
                Fecha:
              </div>
              <div className='text-lg '>March 28, 2023, 10:32 AM</div>
            </div>
            <div className='flex items-center gap-2'>
              <div className='text-lg font-medium text-primary brightness-90'>
                Método de pago:
              </div>
              <div className='text-lg '>Visa ending in 4242</div>
            </div>
          </div>
          <div className='shrink-0 bg-dark/30 h-[1px] w-full my-4 ' />
          <div className='grid gap-1 '>
            <div className='flex items-center gap-2'>
              <div className='text-lg font-medium text-primary brightness-90'>
                Correo Electrónico:
              </div>
              <div className='text-lg '>sophia@example.com</div>
            </div>
            {/* <div className='flex items-center gap-2'>
              <div className='font-medium'>Phone:</div>
              <div>+1 123 456 7890</div>
            </div> */}
          </div>
        </div>
        {/* <div className='flex w-full p-4 md:p-6'>
          <button className='ml-auto'>View in account</button>
        </div> */}
      </div>
    </div>
  )
}
export default PageSuccess
