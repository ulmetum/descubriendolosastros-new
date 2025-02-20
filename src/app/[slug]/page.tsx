import { getAllArticlesAction } from '@/actions/articles/get-all-articles.action'
import { getArticleBySlugAction } from '@/actions/articles/get-article-by-slug.action'
import { getNextAndPrevArticlesAction } from '@/actions/articles/get-next-and-prev-articles.action'
import { BgImageArticle } from '@/components/article/BgImageArticle'
import { ElementsManager } from '@/components/article/ElementsManager'
import { PaginationArticle } from '@/components/article/PaginationArticle'
import { BackBlogBtn } from '@/components/BackBlogBtn'
import { Container } from '@/components/Container'

import { ErrorArticle } from '@/errors'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params

  const res = await getArticleBySlugAction({
    slug,
  })

  const articleBySlug = res?.data?.article.data

  if (res?.serverError || !articleBySlug || articleBySlug.length === 0) {
    return {
      title: 'Página del artículo del Blog',
      description:
        'Se ha producido un error y no se ha podido generar la información adecuada',
    }
  }

  const {
    metaTitle = 'Título no disponible',
    metaDescription = '',
    sharedImage,
  } = articleBySlug[0]?.metadata || {}

  const image = sharedImage?.url || '/default-image.webp'

  return {
    title:
      metaTitle ||
      'El Cosmos Revelado: Descubre los Secretos de la Astronomía y la Astrología',
    description:
      metaDescription ||
      'Artículos sobre astronomía y astrología, explorando el universo, los astros y su impacto en nuestra vida cotidiana.',
    openGraph: {
      title:
        metaTitle ||
        'El Cosmos Revelado: Descubre los Secretos de la Astronomía y la Astrología',
      description:
        metaDescription ||
        'Artículos sobre astronomía y astrología, explorando el universo, los astros y su impacto en nuestra vida cotidiana.',
      type: 'article',
      locale: 'es_ES',
      url: `https://descubriendolosastros.com/${slug}`,
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

// Generamos de forma estáticas todas las páginas del blog (en build time)
export async function generateStaticParams() {
  const res = await getAllArticlesAction()

  const allArticles = res?.data?.articles.data ?? []

  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

const page = async ({ params }: Props) => {
  const { slug } = await params

  const res = await getArticleBySlugAction({ slug })

  // Si se produce un error
  if (res?.serverError) {
    throw new ErrorArticle(
      res?.serverError || 'Error al obtener datos de los artículos.'
    )
  }

  const articleBySlug = res?.data?.article.data

  // Si no hay datos de artículos por slug
  if (!articleBySlug || articleBySlug.length === 0) {
    notFound()
    // return null
  }

  const { title, subtitle, createdAt, writer, featuredImage, elements } =
    articleBySlug[0]
  const imageArticle = featuredImage.url

  if (!writer) {
    return (
      <div>
        <p>Información del autor no está disponible.</p>
      </div>
    )
  }

  const { name, picture, social } = writer

  const { dataNextArticle, dataPrevArticle } =
    await getNextAndPrevArticlesAction({
      currentArticleId: articleBySlug[0].documentId,
    })

  return (
    <section className='article ml-[calc(50%-50vw)] mt-[calc(var(--main-header-height)+1rem)] min-h-dvh w-screen'>
      <BackBlogBtn />
      <BgImageArticle
        createdAt={createdAt}
        subtitle={subtitle}
        imageArticle={imageArticle}
        title={title}
        name={name}
        picture={picture}
        socials={social}
      />
      <Container className='min-h-screen px-4 py-16'>
        <ElementsManager elements={elements} />
      </Container>

      <Container>
        {dataPrevArticle && dataNextArticle && (
          <PaginationArticle
            dataPrevArticle={dataPrevArticle}
            dataNextArticle={dataNextArticle}
          />
        )}
      </Container>
    </section>
  )
}
export default page
