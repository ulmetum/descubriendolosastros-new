'use client'

import Image from 'next/image'

// import { Post } from '.'
import { Post } from '@/components/blogpage'
import { Datum, Meta } from '@/interfaces'
import { useSearchStore } from '@/stores'
import { useShallow } from 'zustand/shallow'
// import { PaginationBlog } from '../paginationBlog'

interface Props {
  articlesByPage: Datum[] | undefined
  allArticles: Datum[] | undefined
  meta: Meta | undefined
}

export const ListOfPosts = ({
  articlesByPage = [],
  allArticles = [],
}: // meta,
Props) => {
  const { search } = useSearchStore(
    useShallow((state) => ({
      search: state.search,
    }))
  )

  const filteredPosts =
    search !== ''
      ? allArticles.filter((allArticles) =>
          allArticles.title.toLowerCase().includes(search.toLowerCase())
        )
      : articlesByPage

  if (!filteredPosts.length)
    return (
      <div className='relative flex h-[calc(100dvh-var(--header-height))] flex-col items-center justify-center'>
        <Image
          src='/cosmos-03.svg'
          alt='404'
          width={404}
          height={404}
          className='absolute w-full opacity-15'
        />
        <div className='relative flex flex-col items-center justify-center gap-4 text-center'>
          <h2 className='text-center text-5xl uppercase text-amber-700'>
            No hay artículos que mostrar
          </h2>
          <p className='text-sky-900'>Intente buscar otra palabra clave</p>
        </div>
      </div>
    )

  return (
    <div className='flex min-h-[calc(100dvh-var(--header-height))] flex-col'>
      <div className='posts xl:grid-areas-blog flex flex-col gap-12 py-[calc(var(--header-height)/2)] pt-[calc(41.6px+64px)] md:gap-20 xl:grid xl:grid-cols-4 xl:grid-rows-2 xl:gap-0'>
        {filteredPosts.map((post) => (
          <Post
            post={post}
            key={post.id}
          />
        ))}
      </div>
      {/* {(meta.pagination.total !== 0 || search !== "") && (
        <PaginationBlog meta={meta} />
      )} */}
    </div>
  )
}
