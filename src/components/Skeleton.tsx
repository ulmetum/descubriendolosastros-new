interface Props {
  numberOfPosts: number
}

export function Skeleton({ numberOfPosts }: Props) {
  const arr = new Array(numberOfPosts).fill(0).map((_, index) => index + 1)

  return (
    <div className='posts xl:grid-areas-blog flex flex-col gap-4 py-[calc(var(--header-height)/2)] xl:grid xl:grid-cols-4 xl:grid-rows-2'>
      {arr.map((item, i) => (
        <div
          key={i}
          className='xl:my-0 xl:[&:nth-child(1)]:col-span-1 xl:[&:nth-child(2)]:col-span-1 xl:[&:nth-child(3)>div]:w-[80%] xl:[&:nth-child(3)]:col-[2/4] xl:[&:nth-child(3)]:row-span-full xl:[&:nth-child(3)]:flex xl:[&:nth-child(3)]:items-center xl:[&:nth-child(3)]:justify-center xl:[&:nth-child(4)]:col-span-1 xl:[&:nth-child(5)]:col-span-1'
        >
          <div
            key={i}
            role='status'
            className='animate-pulse space-y-8 md:flex md:space-x-8 md:space-y-0 xl:flex xl:flex-col xl:space-x-0 rtl:space-x-reverse'
          >
            <div className='flex aspect-[16/9] w-full items-center justify-center rounded bg-gray-300 xl:aspect-[3/4] dark:bg-gray-700'>
              <svg
                className='h-40 w-40 text-gray-200 dark:text-gray-600'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 18'
              >
                <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
              </svg>
            </div>
            <div className='w-full md:flex md:flex-col md:justify-between'>
              <div className=''>
                <div className='mx-auto my-4 h-2.5 w-48 rounded-full bg-gray-200 md:mx-0 dark:bg-gray-700'></div>
                <div className='mb-4'>
                  <div className='mx-auto my-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 md:mx-0 dark:bg-gray-700'></div>
                  <div className='mx-auto my-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 md:mx-0 dark:bg-gray-700'></div>
                </div>
              </div>
              <div className='mx-auto flex items-center md:mx-0'>
                <svg
                  className='me-3 h-10 w-10 text-gray-200 dark:text-gray-700'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
                </svg>
                <div className='flex w-full justify-between'>
                  <div className='h-2.5 w-20 rounded-full bg-gray-200 dark:bg-gray-700'></div>
                  <div className='h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700'></div>
                </div>
              </div>
            </div>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      ))}
    </div>
  )
}
