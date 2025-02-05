import { MenuNotFound } from '@/components/menuNotFound'

export default function NotFound() {
  return (
    <div
      className='fixed left-0 top-0 z-[9980] flex h-screen w-full items-center justify-start overflow-hidden bg-cover bg-left bg-no-repeat p-8 xl:justify-center'
      style={{ backgroundImage: `url('/404-bg.webp')` }}
    >
      <div className='absolute inset-0 bg-black/20' />
      <div className='w-[90%]'>
        <div className='relative w-[min(100%,640px)]'>
          <h1 className='my-12 text-9xl font-light tracking-widest text-light'>
            404
          </h1>
          <p className='my-12 font-medium text-light lg:text-2xl'>
            El objeto cósmico que buscabas ha desaparecido más allá del
            horizonte de sucesos
          </p>
          <MenuNotFound />
        </div>
      </div>
    </div>
  )
}
