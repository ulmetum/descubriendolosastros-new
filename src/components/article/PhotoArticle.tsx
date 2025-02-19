import type { FeaturedImage } from '@/interfaces/articles.interface'
import { cn } from '@/utils/mergeClass'
import Image from 'next/image'

interface Props {
  image?: FeaturedImage
  textImage?: string
  positionText?: string
  classNames?: string
}

export const PhotoArticle = ({
  image,
  textImage,
  positionText,
  classNames,
}: Props) => {
  const url = image
    ? image.url.startsWith('http')
      ? image.url
      : '/universe-04.webp'
    : '/universe-04.webp'

  return (
    <section
      className={cn(
        'py-12 w-screen relative min-h-[450px] xl:min-h-[50vh] left-1/2 -translate-x-1/2 flex items-center justify-center ',
        classNames,
        { 'md:justify-start': positionText === 'left' },
        { 'md:justify-end': positionText === 'right' || !positionText }
      )}
    >
      <Image
        src={url}
        alt='Imagen del artículo'
        fill
        className='object-cover object-center'
      />
      {textImage && (
        <p className='hidden sm:block relative z-10 bg-light/85 py-8 px-6 md:px-8 mx-6 rounded-lg w-[min(100%,480px)] md:!text-xl xl:w-[640px] '>
          {textImage}
        </p>
      )}
    </section>
  )
}
