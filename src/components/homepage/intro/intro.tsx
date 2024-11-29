import {
  ImageIntro,
  IntroBg,
  IntroContent,
  IntroSmallContent,
  IntroTitle,
} from '@/components/homepage/intro'

export const Intro = () => {
  return (
    <div className='grid-intro relative mx-auto h-full w-full px-2'>
      <IntroBg />
      <div className='mt-[calc(var(--header-height)*2)] hidden [grid-area:image] xl:flex xl:items-center xl:justify-center'>
        <ImageIntro />
      </div>
      <div className='mt-[calc(var(--header-height)*2)] [grid-area:content] lg:flex lg:items-start'>
        <IntroContent />
      </div>

      <div className='[grid-area:smallContent] lg:flex lg:items-end'>
        <IntroSmallContent />
      </div>
      <div className='[grid-area:title]'>
        <IntroTitle />
      </div>
    </div>
  )
}
