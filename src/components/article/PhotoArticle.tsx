import { FeaturedImage } from '@/interfaces'
import { cn } from '@/utils'
import Image from 'next/image'

interface Props {
  image?: FeaturedImage
  position?: 'left' | 'right' | 'center'
}

export const PhotoArticle = ({ image, position }: Props) => {
  const url = image
    ? `${process.env.NEXT_PUBLIC_STRAPI_HOST}${image.url}`
    : '/placeholder.jpg'

  return (
    <div
      className={cn('photo-article my-12', {
        'flex justify-start': position === 'left',
        'flex justify-end': position === 'right',
        'flex justify-center': position === 'center',
      })}
    >
      <Image
        src={url}
        alt='Imagen del artículo'
        width={400}
        height={400}
        className='rounded-[6px]'
      />
    </div>
  )
}
