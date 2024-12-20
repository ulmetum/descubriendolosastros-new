import { IntroBg } from '@/components/homepage/intro/components/introBg'
import { IntroContent } from '@/components/homepage/intro/components/introContent'
import { IntroSmallContent } from '@/components/homepage/intro/components/introSmallContent'
import { IntroTitle } from '@/components/homepage/intro/components/introTitle'
import { IntroImage } from '@/components/homepage/intro/components/introImg'
import { IntroCosmos } from '@/components/homepage/intro/components/IntroCosmos'

export const Intro = () => {
  return (
    <div className='pt-[calc(var(--header-height)+2rem)] flex flex-col gap-8 relative mx-auto min-h-screen w-full px-2'>
      <IntroBg />
      <IntroCosmos />
      <div className='w-[min(100%,1440px)] mx-auto flex-grow lg:flex lg:items-center justify-center '>
        <div className=' hidden lg:w-[20%] xl:flex xl:items-center xl:justify-center'>
          <IntroImage />
        </div>
        <div className=' lg:flex lg:w-[80%] '>
          <IntroContent />
        </div>
      </div>

      <div className='w-[min(100%,1024px)] mx-auto lg:flex'>
        <div className='order-1 lg:flex lg:items-end'>
          <IntroSmallContent />
        </div>
        <div className=''>
          <IntroTitle />
        </div>
      </div>
    </div>
  )
}

// <div className='grid-intro relative mx-auto h-full w-full px-2'>
//   <IntroBg />
//   <IntroCosmos />
//   <div className='mt-[calc(var(--header-height)*2)] hidden [grid-area:image] xl:flex xl:items-center xl:justify-center'>
//     <IntroImage />
//   </div>
//   <div className='mt-[calc(var(--header-height)*2)] [grid-area:content] lg:flex lg:items-start landscape-xl:mt-[calc(var(--header-height)+3rem)]'>
//     <IntroContent />
//   </div>

//   <div className='[grid-area:smallContent] lg:flex lg:items-end'>
//     <IntroSmallContent />
//   </div>
//   <div className='[grid-area:title]'>
//     <IntroTitle />
//   </div>
// </div>
