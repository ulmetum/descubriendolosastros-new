import { FormHero } from '@/components/contactpage/FormHero'
import { FormInfo } from '@/components/contactpage/FormInfo'
import { MultiStep } from '@/components/contactpage/MultiStep'

export const metadata = {
  title: 'Descubriendo los astros | Contacto',
  description:
    'Ponte en contacto con Descubriendo los Astros para consultas sobre astrología, astronomía o para la realización de cartas astrales. Estamos aquí para responder tus preguntas y ofrecerte más información sobre el fascinante mundo de los astros.',
}

const ContactPage = () => {
  return (
    <section className='mt-[calc(var(--main-header-height)*1.25)] min-h-[100dvh] flex-col flex justify-center w-full pb-16'>
      <FormHero />
      <FormInfo />
      <MultiStep />
    </section>
  )
}
export default ContactPage
