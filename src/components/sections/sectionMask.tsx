import { Container } from "@/components"
import { MaskComponentText } from "../maskComponentText"

export const SectionMask = () => {
  return (
    <section className="relative -mt-[100vh] hidden h-[300dvh] bg-pampas-50 xl:block">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <MaskComponentText />
      </div>
    </section>
  )
}
