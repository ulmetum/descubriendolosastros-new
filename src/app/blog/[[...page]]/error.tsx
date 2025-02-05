'use client' // Error boundaries must be Client Components

// import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // useEffect(() => {
  //   // Log the error to an error reporting service
  //   console.error(error)
  // }, [error])

  return (
    <div className='min-h-screen flex flex-col items-center justify-center space-y-4'>
      <h1>Algo no fue del todo bien...</h1>
      <button
        className='rounded-lg block bg-primary py-2 px-3.5 font-headings mx-auto  text-light'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Inténtalo otra vez
      </button>
      <p className='text-primary'>{error.message}</p>
    </div>
  )
}
