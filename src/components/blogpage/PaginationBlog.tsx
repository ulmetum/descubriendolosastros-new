import { Link } from 'next-view-transitions'

import { Meta } from '@/interfaces/articles.interface'
import { wrap } from '@/utils/wrap'
import { cn } from '@/utils/mergeClass'

interface Props {
  meta: Meta | undefined
}

export function PaginationBlog({ meta }: Props) {
  if (!meta) return null
  const { page, pageCount, pageSize, total } = meta.pagination

  const prevPage = page > 1 ? page - 1 : null
  const nextPage = page < pageCount ? page + 1 : null

  const currentPage = wrap({
    number: page,
    min: 1,
    max: pageCount,
  })

  const startEntry = (currentPage - 1) * pageSize + 1
  const endEntry = Math.min(total, currentPage * pageSize)

  return (
    <div className='my-12 mt-auto flex flex-col items-center'>
      <span className='my-2 text-sm text-primary'>
        Mostrando <span className='text-primary'>{startEntry}</span> a{' '}
        <span className='text-primary'>{endEntry}</span> de{' '}
        <span className='text-primary'>{total}</span> entradas
      </span>

      <div className='xs:mt-0 mt-2 inline-flex space-x-2'>
        <Link
          href={`/blog/${prevPage}`}
          className={cn(
            `ease-[cubic-bezier(0.5, 0, 0.75, 0)] group relative z-10 flex h-8 items-center justify-center overflow-hidden rounded border border-primary px-3 text-sm font-medium text-primary transition-all duration-700 hover:text-white`,
            currentPage <= 1 &&
              'pointer-events-none border-text/20 text-dark/20'
          )}
        >
          <div className='ease-[cubic-bezier(0.5, 0, 0.75, 0)] absolute top-[150%] -z-[1] h-[150%] w-[110%] bg-primary transition-all duration-700 skew-y-6 group-hover:-top-[30%]'></div>
          Anteriores
        </Link>
        <Link
          href={`/blog/${nextPage}`}
          className={cn(
            `ease-[cubic-bezier(0.5, 0, 0.75, 0)] group relative z-10 flex h-8 items-center justify-center overflow-hidden rounded border border-primary px-3 text-sm font-medium text-primary transition-all duration-700 hover:text-white`,
            currentPage >= pageCount &&
              'pointer-events-none border-text/20 text-dark/20'
          )}
        >
          <div className='ease-[cubic-bezier(0.5, 0, 0.75, 0)] absolute top-[150%] -z-[1] h-[150%] w-[110%] bg-primary transition-all duration-700 -skew-y-6 group-hover:-top-[30%]'></div>
          Siguientes
        </Link>
      </div>
    </div>
  )
}
