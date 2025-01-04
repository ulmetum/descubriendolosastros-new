import { FormContact } from '@/components/contactpage/FormContact'
import { FormHero } from '@/components/contactpage/FormHero'
import { FormInfo } from '@/components/contactpage/FormInfo'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Ponte en contacto con Descubriendo los Astros para consultas sobre astrología, astronomía o para la realización de cartas astrales. Estamos aquí para responder tus preguntas y ofrecerte más información sobre el fascinante mundo de los astros.',
  openGraph: {
    title: 'Contacto',
    description:
      'Contáctanos para consultas de astrología, astronomía o cartas astrales. Resolvemos tus dudas y te acercamos al fascinante mundo de los astros.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://descubriendolosastros.com',
    siteName: 'Descubriendo los astros',
    images: [
      {
        url: 'https://descubriendolosastros.com/contacto/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Descubriendo los astros',
      },
    ],
  },
}

const ContactPage = () => {
  return (
    <section className='mt-[calc(var(--main-header-height)*1.25)] min-h-[100dvh] flex-col flex justify-center w-full pb-16'>
      <FormHero />
      <FormInfo />
      <FormContact />
    </section>
  )
}
export default ContactPage
