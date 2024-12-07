import {
  getAllArticlesAction,
  getArticleBySlugAction,
  getNextAndPrevArticlesAction,
} from '@/actions'
import {
  BackBlogBtn,
  Container,
  ElementsManager,
  PaginationArticle,
} from '@/components'
import { BgImageArticle } from '@/components/article/BgImageArticle'
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

  const { metaTitle = 'Título no disponible', metaDescription = '' } =
    articleBySlug[0]?.metadata || {}

  return {
    title: `Descubriendo los Astros | ${metaTitle}`,
    description: `${metaDescription}`,
  }
}

// Generamos de forma estáticas todas las páginas del blog (en build time)
export async function generateStaticParams() {
  const res = await getAllArticlesAction()

  const allArticles = res?.data?.articles.data || []

  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

const page = async ({ params }: Props) => {
  const { slug } = await params

  const res = await getArticleBySlugAction({ slug })

  const articleBySlug = res?.data?.article.data

  // Si se produce un error
  if (res?.serverError) {
    throw new ErrorArticle(res?.serverError)
  }

  // Si no hay datos de artículos por slug
  if (!articleBySlug || articleBySlug.length === 0) {
    notFound()
    return null
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
      currentArticleId: articleBySlug[0].id,
    })

  return (
    <div className='article ml-[calc(50%-50vw)] mt-[calc(var(--main-header-height)+1rem)] min-h-dvh w-screen'>
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
    </div>
  )
}
export default page
