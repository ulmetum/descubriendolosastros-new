'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import Marquee from 'react-fast-marquee'

// Components
import { FooterMenu } from '@/components/footer/components/footer-menu'
import { FooterSocialMenu } from '@/components/footer/components/footer-social-menu'
import { FooterEmail } from '@/components/footer/components/footer-email'
import { FooterImage } from '@/components/footer/components/footer-image'
import { MenuElement } from '@/interfaces/menu.interface'
import { SocialWriter } from '@/interfaces/writer.interface'

interface Props {
  menuItems: MenuElement[] | undefined
  currentYear: number
  socials: SocialWriter[]
}

export const FooterInner = ({ menuItems, currentYear, socials }: Props) => {
  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0.65, 1], [250, 0])

  return (
    <div className='relative -top-[100vh] h-[calc(100vh+500px)] w-full px-8'>
      <div className='sticky top-0 flex h-screen items-end'>
        <motion.div
          style={{ y }}
          className='relative flex h-[500px] w-full flex-col'
        >
          <div className='relative z-10 mx-auto flex w-[min(100%,1120px)] justify-between pt-12 md:pt-14'>
            <FooterMenu menuItems={menuItems} />
            <div className='flex flex-1 items-center justify-center'>
              <FooterImage />
            </div>
            <div className='flex flex-col'>
              <FooterSocialMenu socials={socials} />
            </div>
          </div>

          <div className='mt-8 flex flex-1 flex-col items-center justify-center lg:mt-24 lg:justify-start'>
            <FooterEmail />
          </div>

          <div className='mx-auto w-[min(100%,1024px)]'>
            <Marquee
              className='overflow-hidden'
              pauseOnHover
              autoFill
              gradient
              gradientColor='var(--dark)'
              gradientWidth={50}
            >
              <span className='mx-2 font-headings text-[1.7rem] text-primary '>
                descubriendolosastros.com
              </span>
              <span className='text-2xl text-light'>-</span>
              <span className='ml-2 font-headings text-2xl text-light'>
                &#174; {currentYear}
              </span>
              <span className='mx-2 font-headings text-2xl text-light'>
                Web diseñada por Ulmetum
              </span>
              <span className='text-2xl text-light'>-</span>
            </Marquee>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
