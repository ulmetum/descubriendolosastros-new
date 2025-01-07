import { cn } from '@/utils/mergeClass'

interface Props {
  classNames?: string
  size?: 'sm' | 'md' | 'lg'
}

export const SuccessIcon = ({ classNames, size = 'sm' }: Props) => {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14',
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn(
        `icon icon-tabler icons-tabler-outline icon-tabler-circle-check`,
        classNames,
        sizes[size]
      )}
    >
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' />
      <path d='M9 12l2 2l4 -4' />
    </svg>
  )
}
