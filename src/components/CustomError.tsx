import { cn } from '@/utils/mergeClass'

export const CustomError = ({
  error,
  classNames,
}: {
  error: string | undefined
  classNames?: string
}) => {
  return (
    <div
      className={cn(
        `relative z-[9999] min-h-[50vh] flex flex-col items-center justify-center space-y-4`,
        classNames
      )}
    >
      <h2>Algo no fue del todo bien...</h2>
      <p className='text-primary'>{error}</p>
    </div>
  )
}
