'use client'

import { useScroll } from 'framer-motion'

import { FeaturedImage, Social } from '@/interfaces'

// Componentes
import {
  BgArticle,
  ImageArticle,
  TitleArticle,
  LineArticle,
  SubtitleArticle,
  AuthorArticle,
  DateSocialArticle,
} from '@/components/article'

interface Props {
  imageArticle: string
  title: string
  subtitle: string
  createdAt: Date
  name: string
  picture: FeaturedImage
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

  const profileImg = picture.url

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
        <SubtitleArticle
          scrollY={scrollY}
          transition={transition}
          subtitle={subtitle}
        />
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
