import { SectionFeatures, SectionIntro } from '@/components'
import SectionServices from '@/components/sections/sectionServices'

export const metadata = {
  title: 'Descubriendo los astros | Inicio',
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
