import { Carousel, CarouselIntro } from "@/components"

export const SectionCarousel = () => {
  return (
    <section className="relative z-10 h-[300dvh] bg-pampas-50">
      <div className="sticky top-0 flex flex-col items-center justify-center">
        <CarouselIntro />
        <Carousel />
      </div>
    </section>
  )
}
