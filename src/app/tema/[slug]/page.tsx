import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getDataLandingPagesBySlugAction } from '@/actions/landing-pages/get-data-landing-pages-by-slug.action'
import { getDataLandingPagesAction } from '@/actions/landing-pages/get-data-landing-pages.action'
import { ErrorLandingPages } from '@/errors'
import { Container } from '@/components/Container'

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

  const image = landingPagesBySlug[0]?.featuredImage || '/default-image.webp'

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
  console.log({ res })

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

  const { title } = landingPagesBySlug[0]

  return (
    <section className=' ml-[calc(50%-50vw)] mt-[calc(var(--main-header-height)+1rem)] min-h-dvh w-screen'>
      <Container>
        <h1>{title}</h1>
      </Container>
    </section>
  )
}
export default ThemePage
