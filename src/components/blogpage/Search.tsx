'use client'

import { useSearchStore } from '@/stores/searchStore'
import { cn } from '@/utils/mergeClass'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useShallow } from 'zustand/shallow'

interface Props {
  className: string
}

export const Search = ({ className }: Props) => {
  const pathname = usePathname()
  const { search, setSearch } = useSearchStore(
    useShallow((state) => ({
      search: state.search,
      setSearch: state.setSearch,
    }))
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
  }

  // Cada vez que el usuario navega a otra url, limpiamos el campo de búsqueda
  useEffect(() => {
    setSearch('')
  }, [pathname, setSearch])

  return (
    <div className={cn('search mx-auto my-8 w-[min(100%,480px)]', className)}>
      <div className='flex items-center'>
        <label
          htmlFor='simple-search'
          className='sr-only'
        >
          Search
        </label>
        <div className='relative w-full'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            <svg
              className='h-4 w-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 18 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2'
              />
            </svg>
          </div>
          <input
            value={search}
            onChange={handleChange}
            type='text'
            id='simple-search'
            className='block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            placeholder='Escribe el título de una entrada...'
            required
          />
          <span
            className={`absolute right-10 top-0 ml-2 flex h-full w-8 items-center justify-center transition-all`}
          >
            🗙
          </span>
          <div className='absolute right-0 top-0 ml-2 flex h-full items-center justify-center rounded-r-md border border-secondary bg-sky-900 p-2.5 text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            <svg
              className='h-4 w-4'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
