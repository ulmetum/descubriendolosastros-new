import { IntroBg } from '@/components/homepage/intro/components/introBg'
import { IntroContent } from '@/components/homepage/intro/components/introContent'
import { IntroSmallContent } from '@/components/homepage/intro/components/introSmallContent'
import { IntroTitle } from '@/components/homepage/intro/components/introTitle'
import { IntroImage } from '@/components/homepage/intro/components/introImg'
import { IntroCosmos } from '@/components/homepage/intro/components/IntroCosmos'

export const Intro = () => {
  return (
    <div className='grid-intro relative mx-auto h-full w-full px-2'>
      <IntroBg />
      <IntroCosmos />
      <div className='mt-[calc(var(--header-height)*2)] hidden [grid-area:image] xl:flex xl:items-center xl:justify-center'>
        <IntroImage />
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
