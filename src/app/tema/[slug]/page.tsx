import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getDataLandingPagesBySlugAction } from '@/actions/landing-pages/get-data-landing-pages-by-slug.action'
import { getDataLandingPagesAction } from '@/actions/landing-pages/get-data-landing-pages.action'
import { ErrorLandingPages } from '@/errors'
import { Container } from '@/components/Container'
import Image from 'next/image'
import { ElementsManager } from '@/components/article/ElementsManager'
import { cn } from '@/utils/mergeClass'
import { Link } from 'next-view-transitions'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const res = await getDataLandingPagesBySlugAction({
    slug,
  })

  const landingPagesBySlug = res?.data?.landingPages.data

  if (
    res?.serverError ||
    !landingPagesBySlug ||
    landingPagesBySlug.length === 0
  ) {
    return {
      title: 'Página específica del tema en descubriendolosastros.com',
      description:
        'Se ha producido un error y no se ha podido generar la información adecuada',
    }
  }

  const { metaTitle = 'Título no disponible', metaDescription = '' } =
    landingPagesBySlug[0]?.metadata || {}

  const image =
    landingPagesBySlug[0]?.featuredImage.url || '/default-image.webp'

  return {
    title:
      metaTitle ||
      'Todo sobre astronomía y astrología en Descubriendo los astros',
    description:
      metaDescription ||
      'Análisis de la Carta Natal, Diseño del Mapa Estelar Personalizado, Escuela De Astrología y El Universo y sus Misterios',
    openGraph: {
      title:
        metaTitle ||
        'Todo sobre astronomía y astrología en Descubriendo los astros',
      description:
        metaDescription ||
        'Análisis de la Carta Natal, Diseño del Mapa Estelar Personalizado, Escuela De Astrología y El Universo y sus Misterios',
      type: 'article',
      locale: 'es_ES',
      url: `https://descubriendolosastros.com/tema/${slug}`,
      images: [
        {
          url: `${image}`,
          width: 1200,
          height: 630,
          alt: 'Descubriendo los astros',
        },
      ],
      siteName: 'Descubriendo los astros',
    },
  }
}

export async function generateStaticParams() {
  const res = await getDataLandingPagesAction()

  const landingPagesData = res?.data?.landingPages.data || []

  return landingPagesData.map((landingPage) => ({
    slug: landingPage.slug,
  }))
}

const ThemePage = async ({ params }: Props) => {
  const { slug } = await params
  const res = await getDataLandingPagesBySlugAction({ slug })

  const landingPagesBySlug = res?.data?.landingPages.data

  // Si se produce un error
  if (res?.serverError) {
    throw new ErrorLandingPages(
      res?.serverError.message || 'Error al obtener datos de los artículos.'
    )
  }

  if (!landingPagesBySlug || landingPagesBySlug.length === 0) {
    notFound()
    return null
  }

  const { elements, title, featuredImage, description, type, podcastUrl } =
    landingPagesBySlug[0]
  const imageUrl = featuredImage.url || '/default-image.webp'

  const url =
    podcastUrl ??
    'https://www.ivoox.com/podcast-descubriendo-astros_sq_f1795095_1.html'

  return (
    <section className=' ml-[calc(50%-50vw)] mt-[calc(var(--main-header-height)+1rem)] min-h-dvh w-screen'>
      <Container className='w-[min(100%,1640px)]  border-b border-primary/25 pb-14'>
        <div className='lg:flex lg:items-center lg:justify-center'>
          <div className='relative lg:w-1/3 min-h-[50vh] '>
            <Image
              src={imageUrl}
              alt='Imagen destacada'
              fill
              className='rounded-lg object-cover  '
            />
          </div>
          <div className='lg:w-2/3 px-4 pt-8 lg:flex lg:flex-col lg:justify-between lg:min-h-[50vh]'>
            <p className='font-headings text-2xl text-primary '>
              ¿Qué trataremos en este espacio?
            </p>
            <div className='lg:my-auto max-w-lg:my-10'>
              <h1 className='lg:text-6xl mb-6 text-primary'>{title}</h1>
              <p>{description}</p>
            </div>
            <div
              className={cn(
                'flex items-center',
                type ? 'justify-between' : 'justify-end'
              )}
            >
              {type === 'podcast' ? (
                <Link
                  href={url}
                  target='_blank'
                  className='font-headings text-primary hover:underline'
                >
                  Accede al {type}
                </Link>
              ) : (
                <Link
                  href='/contacto'
                  target='_blank'
                  className='font-headings text-primary hover:underline'
                >
                  Adquiere el {type}
                </Link>
              )}
              <Image
                src='/miriam-name.svg'
                alt='Míriam'
                width={150}
                height={100}
              />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <article className='max-w-xl:px-4'>
          <ElementsManager elements={elements} />
        </article>
      </Container>
    </section>
  )
}
export default ThemePage
