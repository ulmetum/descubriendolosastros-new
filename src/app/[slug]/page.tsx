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

  const dataArticle = articleBySlug[0]
  const { metaTitle, metaDescription } = dataArticle.metadata

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

  // // Si se produce un error
  if (res?.serverError) {
    throw new ErrorArticle(res?.serverError)
  }

  // // Si no hay datos de artículos por slug
  if (!articleBySlug || articleBySlug.length === 0) {
    notFound()
    return null
  }

  const { title, subtitle, createdAt, writer, featuredImage, elements } =
    articleBySlug[0]
  const imageArticle = featuredImage.url
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

// const replaceOembedWithIframe = (domNode: any) => {
//   if (domNode.type === 'tag') {
//     if (domNode.name === 'oembed') {
//       const url = domNode.attribs?.url

//       if (typeof url === 'string') {
//         // Convertir URL de YouTube a formato de embed
//         const embedUrl = url.replace(
//           'https://www.youtube.com/watch?v=',
//           'https://www.youtube.com/embed/'
//         )

//         return (
//           <iframe
//             src={embedUrl}
//             width='560'
//             height='315'
//             allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
//             allowFullScreen
//           />
//         )
//       } else {
//         return <p>URL no encontrada</p>
//       }
//     } else if (domNode.name === 'iframe') {
//       // Retornar el iframe sin modificar si ya es un iframe
//       return <iframe {...domNode.attribs} />
//     }
//   }

//   // Para nodos que no son <oembed> ni <iframe>, retornar null para no alterarlos
//   return null
// }
