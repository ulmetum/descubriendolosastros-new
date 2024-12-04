import { cn } from '@/utils'

export const Calendar = ({ classNames }: { classNames?: string }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn(
        'icon icon-tabler icons-tabler-outline icon-tabler-calendar-week',
        classNames
      )}
    >
      <path
        stroke='none'
        d='M0 0h24v24H0z'
        fill='none'
      />
      <path d='M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z' />
      <path d='M16 3v4' />
      <path d='M8 3v4' />
      <path d='M4 11h16' />
      <path d='M8 14v4' />
      <path d='M12 14v4' />
      <path d='M16 14v4' />
    </svg>
  )
}
