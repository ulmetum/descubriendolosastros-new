import { SectionFeatures } from '@/components/sections/sectionFeatures'
import { SectionIntro } from '@/components/sections/sectionIntro'
import { SectionServices } from '@/components/sections/sectionServices'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inicio | Descubriendo los astros',
  description:
    'Aprende sobre constelaciones, planetas, fenómenos cósmicos y cómo los astros influyen en tu vida. Descubre la magia y ciencia del universo mirando al cielo.',
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
