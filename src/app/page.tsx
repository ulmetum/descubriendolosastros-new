import { SectionFeatures } from '@/components/sections/sectionFeatures'
import { SectionIntro } from '@/components/sections/sectionIntro'
import { SectionServices } from '@/components/sections/sectionServices'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inicio | Descubriendo los astros',
  description:
    'Explora el fascinante universo de la astronomía y la astrología en descubriendolosastros.com. Aprende sobre constelaciones, planetas, fenómenos cósmicos y cómo los astros influyen en nuestras vidas. Una mirada al cielo para descubrir su magia y ciencia.',
}

export default async function HomePage() {
  return (
    <>
      <SectionIntro />
      <SectionFeatures />
      <SectionServices />
    </>
  )
}
