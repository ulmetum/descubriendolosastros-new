import { cn } from '@/utils/mergeClass'

export const NameProfile = ({
  name,
  color,
}: {
  name: string
  color: 'primary' | 'light' | 'dark'
}) => {
  return (
    <div className='nickname grid w-full grid-cols-[auto_auto_1fr] font-thin'>
      <small
        className={cn('xl:text-sm font-headings', {
          'text-primary': color === 'primary',
          'text-light': color === 'light',
          'text-dark': color === 'dark',
        })}
      >
        Por @
      </small>
      <small
        className={cn('xl:text-sm font-headings', {
          'text-primary': color === 'primary',
          'text-light': color === 'light',
        })}
      >
        {name}
      </small>
    </div>
  )
}
