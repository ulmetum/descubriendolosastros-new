import { SectionFeatures, SectionIntro } from '@/components'
import SectionServices from '@/components/sections/sectionServices'

export default async function HomePage() {
  return (
    <>
      <SectionIntro />
      <SectionFeatures />
      <SectionServices />
    </>
  )
}
