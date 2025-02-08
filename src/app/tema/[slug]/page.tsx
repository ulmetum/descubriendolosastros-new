import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getDataLandingPagesBySlugAction } from '@/actions/landing-pages/get-data-landing-pages-by-slug.action'
import { getDataLandingPagesAction } from '@/actions/landing-pages/get-data-landing-pages.action'
import { ErrorLandingPages } from '@/errors'
import { Container } from '@/components/Container'
import { ElementsManager } from '@/components/article/ElementsManager'
import { ImageTheme } from '@/components/themepage/ImageTheme'
import { HeroTheme } from '@/components/themepage/HeroTheme'

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
      res?.serverError || 'Error al obtener datos de los artículos.'
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
            <ImageTheme imageUrl={imageUrl} />
          </div>
          <HeroTheme
            description={description}
            type={type}
            title={title}
            url={url}
          />
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
