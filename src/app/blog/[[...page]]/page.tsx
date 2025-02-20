import { Suspense } from 'react'
import { redirect } from 'next/navigation'

import { getArticlesByPageAction } from '@/actions/articles/get-articles-by-page.action'

import { Container } from '@/components/Container'
import { Skeleton } from '@/components/Skeleton'
import { Search } from '@/components/blogpage/Search'
import { Posts } from '@/components/blogpage/Posts'
import { wrap } from '@/utils/wrap'
import { Metadata } from 'next'
import { CustomError } from '@/components/CustomError'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    '"Descubriendo los astros" es tu guía al universo, con artículos sobre planetas, estrellas, fenómenos celestes y diversos temas de astronomía y astrología. ',
  openGraph: {
    title: 'Blog',
    description:
      'Descubriendo los astros es tu guía al universo, con artículos sobre planetas, estrellas, fenómenos celestes y diversos temas de astronomía y astrología.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://descubriendolosastros.com',
    siteName: 'Descubriendo los astros',
    images: [
      {
        url: 'https://descubriendolosastros.com/blog/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Descubriendo los astros',
      },
    ],
  },
}

export async function generateStaticParams() {
  const res = await getArticlesByPageAction({ page: '1' })
  const pagination = res?.data?.articles.meta.pagination
  const pages = pagination?.pageCount || 0

  const staticPagesBlog = Array.from({ length: pages }, (_, i) => i + 1)

  return staticPagesBlog.map((page) => ({
    page: [`${page}`],
  }))
  // return [
  //   { page: ["1"] },
  //   { page: ["2"] },
  // ]
}

const BlogPage = async ({
  params,
}: {
  params: Promise<{ page: string[] }>
}) => {
  const paramsResolved = await params
  const page = paramsResolved?.page?.[0] ?? '1'

  const res = await getArticlesByPageAction({ page })

  if (res?.serverError) {
    return (
      <CustomError
        classNames='min-h-screen'
        error={res.serverError}
      />
    )
  }

  const articlesByPage = res?.data?.articles.data
  const meta = res?.data?.articles.meta
  const pagination = meta && meta.pagination
  const pageCount = pagination?.pageCount ?? 0
  const numberOfPosts = pagination?.pageSize ?? 0

  // Garantizar que la pagina actual esta dentro del rango de paginas que existen
  const currentPage = wrap({
    number: Number(page),
    min: 1,
    max: pageCount,
  })

  if (articlesByPage?.length === 0) {
    return redirect(`/blog/${pageCount}`)
  }

  return (
    <Container className='relative mt-[calc(var(--header-height)+1rem)] min-h-dvh px-1'>
      <Suspense
        key={currentPage}
        fallback={<Skeleton numberOfPosts={numberOfPosts} />}
      >
        <Search className='absolute left-1/2 top-0 -translate-x-1/2' />
        <Posts
          meta={meta}
          articlesByPage={articlesByPage}
        />
      </Suspense>
    </Container>
  )
}
export default BlogPage
