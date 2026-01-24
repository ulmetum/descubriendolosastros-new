'use client'

import { useScroll } from 'motion/react'

// Componentes
import { BgArticle } from '@/components/article/BgArticle'
import { ImageArticle } from '@/components/article/ImageArticle'
import { TitleArticle } from '@/components/article/TitleArticle'
import { SubtitleArticle } from '@/components/article/SubtitleArticle'
import { AuthorArticle } from '@/components/article/AuthorArticle'
import { DateSocialArticle } from '@/components/article/DateSocialArticle'
import { LineArticle } from '@/components/article/LineArticle'
import type { FeaturedImage, Social } from '@/interfaces/articles.interface'

interface Props {
  imageArticle: string
  title: string
  subtitle: string
  createdAt: Date
  name: string
  picture: string
  socials?: Social[]
}

const transition = 1000
const translate = 40

export function BgImageArticle({
  imageArticle,
  title,
  subtitle,
  createdAt,
  name,
  picture,
  socials,
}: Props) {
  const { scrollY } = useScroll()

  const profileImg = picture

  return (
    <div className='relative'>
      <div className='relative '>
        <BgArticle scrollY={scrollY} />
        <ImageArticle imageArticle={imageArticle} />
      </div>
      <div className='absolute inset-0 flex flex-col items-center justify-center p-2'>
        <TitleArticle
          translate={translate}
          title={title}
        />
        <div className='flex h-[2px] justify-center'>
          <LineArticle
            scrollY={scrollY}
            transition={transition}
          />
        </div>
        <SubtitleArticle subtitle={subtitle} />
        <AuthorArticle
          name={name}
          scrollY={scrollY}
          transition={transition}
          profileImg={profileImg}
        />
        <DateSocialArticle
          createdAt={createdAt}
          scrollY={scrollY}
          socials={socials}
        />
      </div>
    </div>
  )
}
