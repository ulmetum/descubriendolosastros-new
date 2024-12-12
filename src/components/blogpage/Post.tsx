// Interfaces
import Image from 'next/image'
import { Link } from 'next-view-transitions'

import { Datum } from '@/interfaces'
import { ImagePost, PostDate } from '@/components'
import { NEXT_PUBLIC_STRAPI_HOST } from '@/config'

interface Props {
  post: Datum
}

export const Post = ({ post }: Props) => {
  const { title, subtitle, slug } = post
  const featuredImageUrl = post.featuredImage.url || ''
  const { name = 'Mirova', email, picture } = post.writer || {}
  const profileUrl = picture.url || ''
  const url = profileUrl.startsWith('http')
    ? profileUrl
    : `${NEXT_PUBLIC_STRAPI_HOST}${profileUrl}`

  return (
    <article
      key={post.id}
      className='post after:left[5%] relative flex justify-center pb-12 after:absolute after:bottom-0 after:h-[1px] after:w-[90%] after:bg-secondary/10 last-of-type:after:hidden md:pb-20 xl:my-0 xl:after:hidden xl:[&:nth-child(1)]:col-span-1 xl:[&:nth-child(2)]:col-span-1 xl:[&:nth-child(3)>div]:w-[80%] xl:[&:nth-child(3)]:col-[2/4] xl:[&:nth-child(3)]:row-span-full xl:[&:nth-child(3)]:flex xl:[&:nth-child(3)]:items-center xl:[&:nth-child(3)]:justify-center xl:[&:nth-child(4)]:col-span-1 xl:[&:nth-child(5)]:col-span-1'
    >
      <div className='post__content w-full md:flex md:justify-between md:gap-2 xl:mx-0 xl:flex-col'>
        <Link
          href={`/${slug}`}
          className='image group relative block aspect-[16/9] overflow-hidden md:h-full md:w-1/2 xl:aspect-[3/4] xl:h-auto xl:w-full'
        >
          <PostDate
            color='white'
            createdAt={post.createdAt}
          />
          <ImagePost featuredImageUrl={featuredImageUrl} />
        </Link>
        <div className='info px-2 text-center md:grid md:w-1/2 md:grid-rows-[auto_auto_1fr] md:flex-col md:px-0 md:text-left xl:flex xl:w-full xl:flex-1 xl:pl-0 xl:text-center'>
          <h3 className='my-4 md:mt-0 xl:mt-4'>
            <Link
              href={`/${slug}`}
              className='font-headings leading-4 text-secondary'
            >
              {title}
            </Link>
          </h3>
          <h5 className='mb-4 mt-0 font-light italic leading-6 text-dark/70 xl:flex-1'>
            {subtitle}
          </h5>
          <div className='writtenBy font-headings text-primary md:mb-0 md:flex md:items-end'>
            <div className='profile xs:h-[50px] flex h-10 items-center justify-center md:w-full'>
              <Image
                className='xs:h-[50px] xs:w-[50px] h-10 w-10 rounded-full'
                width={50}
                height={50}
                src={url}
                alt='Imagen perfil usuario'
              />
              <div className='nickname ml-2 grid w-full grid-cols-[auto_auto_1fr] font-thin'>
                <small className='xl:text-sm'>Por @</small>
                <small className='xl:text-sm'>{`${name || 'Mirova'}`}</small>
                <small className='mail flex justify-end xl:text-sm'>
                  {email}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
