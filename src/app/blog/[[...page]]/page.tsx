import { Suspense } from 'react'
import { redirect } from 'next/navigation'

import { getArticlesByPageAction } from '@/actions/articles/get-articles-by-page.action'

import { Posts, Search } from '@/components/blogpage'
import { Container, Skeleton } from '@/components'

import { wrap } from '@/utils'

export const metadata = {
  title: 'Descubriendo los astros | Blog',
  description:
    '"Descubriendo los astros" es tu guía al universo, con artículos sobre planetas, estrellas, fenómenos celestes y diversos temas de astronomía y astrología. Explora el cosmos y mantente al día con nuestras publicaciones',
}

export async function generateStaticParams() {
  const res = await getArticlesByPageAction({ page: '1' })
  const pagination = res?.data?.articles.meta.pagination
  const pages = pagination?.pageCount || 0

  const staticPagesBlog = Array.from({ length: pages }, (value, i) => i + 1)

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

  console.log({ page })

  const res = await getArticlesByPageAction({ page })

  const pagination = res?.data?.articles?.meta.pagination
  const pageCount = pagination?.pageCount ?? 0
  const numberOfPosts = pagination?.pageSize ?? 0

  const currentPage = wrap({
    number: Number(page),
    min: 1,
    max: pageCount,
  })

  if (res?.serverError) {
    return redirect('/blog')
  }

  if (res?.data?.articles.data.length === 0) {
    return redirect(`/blog/${pageCount}`)
  }

  // console.log({ res })

  return (
    <Container className='relative mt-[calc(var(--header-height)+1rem)] min-h-dvh px-1'>
      <Suspense
        key={currentPage}
        fallback={<Skeleton numberOfPosts={numberOfPosts} />}
      >
        <Search className='absolute left-1/2 top-0 -translate-x-1/2' />
        <Posts page={currentPage.toString()} />
      </Suspense>
    </Container>
  )
}
export default BlogPage
