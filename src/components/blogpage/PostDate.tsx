import { cn } from '@/utils'

// Librería para fechas y horas
import dayjs from 'dayjs'
import 'dayjs/locale/es'

const textColorVariant = {
  white: 'text-pampas-50',
  amber: 'text-amber-800',
}

const borderColorLineVariant = {
  white: 'border-pampas-50',
  amber: 'border-amber-900',
}

interface Props {
  createdAt: Date
  color: keyof typeof textColorVariant
}

export function PostDate({ createdAt, color }: Props) {
  const date = {
    day: dayjs(createdAt).format('DD'),
    month: dayjs(createdAt).format('MMM'),
    year: dayjs(createdAt).year(),
  }

  const { day, month, year } = date

  return (
    <div
      className={`relative z-20 flex pl-2 pt-1 font-headings uppercase mix-blend-lighten`}
    >
      <div className='flex items-center'>
        <span
          className={cn(
            `month leading mr-[.625rem] font-headings text-2xl`,
            textColorVariant[color]
          )}
        >
          {month}{' '}
        </span>
        <span
          className={cn(`year font-headings text-2xl`, textColorVariant[color])}
        >
          {year}{' '}
        </span>
      </div>
      <div className='flex items-center'>
        <span
          className={`mx-2 h-full w-[4.5px] border font-headings ${borderColorLineVariant[color]} `}
        ></span>
        <span
          className={cn(`day font-headings text-2xl`, textColorVariant[color])}
        >
          {day}
        </span>
      </div>
    </div>
  )
}
