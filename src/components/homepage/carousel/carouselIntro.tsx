import { FadeIn, TitleCarouselIntro } from '@/components'

export const CarouselIntro = () => {
  return (
    <div className='w-[min(100%,1024px)] p-16'>
      <div className='flex items-center justify-center'>
        <span className='text-stroke-3 text-fill relative font-headings text-6xl font-bold'>
          3
        </span>
      </div>
      <TitleCarouselIntro />
      <FadeIn>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos,
          facilis. Tempora, debitis maxime. Non ullam vitae mollitia consequatur
          dicta, est voluptatibus. Aliquam voluptatem, architecto nemo amet
          quidem consectetur rem dolore? Repellendus enim impedit quas iusto.
        </p>
      </FadeIn>
      <div className='flex justify-end'>
        <div className='group relative cursor-pointer font-headings text-2xl transition hover:text-red-800'>
          Contact me
          <span className='absolute -bottom-1 left-1/2 h-[2px] w-0 bg-dark transition-all group-hover:left-0 group-hover:w-full group-hover:bg-red-800'></span>
        </div>
      </div>
    </div>
  )
}
