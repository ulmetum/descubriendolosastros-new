import Image from 'next/image'

export const FormComplete = () => {
  return (
    <div className='space-y-12 w-full flex-shrink-0'>
      <header className=' space-y-2 text-center'>
        <h2 className='text-primary'>¡La sonda ha sido lanzada con éxito!</h2>
        <p className='text-lg'>
          Tu mensaje acaba de entrar en órbita y lo leeremos antes de que
          alcance la velocidad de la luz... Pronto recibirás una respuesta.
        </p>
      </header>

      <Image
        src='/astronaut-sent.svg'
        alt='astronaut'
        width={400}
        height={400}
        className='mx-auto'
      />
    </div>
  )
}
