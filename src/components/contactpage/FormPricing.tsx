import { NeuPricing } from '../homepage/services/NeuPricing'

export const FormPricing = () => {
  return (
    <div className=' gap-8 mt-16 mb-32'>
      <div className='bg-white px-4 lg:px-8 py-20 w-[min(100%,1024px)] lg:mx-auto relative z-10 mb-20 lg:rounded-xl lg:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
        <p className='text-xl sm:text-2xl my-6 '>
          Si quieres descubrir cómo estaba el cielo en ese momento tan especial
          y qué mensajes guardan las estrellas para ti, no esperes más. Solicita
          tu Mapa Estelar o tu Carta Astral y conecta con la energía que te
          acompaña desde el inicio.
        </p>
      </div>
      <NeuPricing />
    </div>
  )
}
