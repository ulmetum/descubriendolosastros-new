import { cn } from '@/utils/mergeClass'

interface Props {
  textColumnLeft?: string
  textColumnRight?: string
  classNames?: string
}

export const DoubleColumnsArticle = ({
  textColumnLeft,
  textColumnRight,
  classNames,
}: Props) => {
  return (
    <section
      className={cn(
        'section-article lg:grid-article gap-8 w-screen relative left-1/2 -translate-x-1/2',
        classNames
      )}
    >
      <p className='[grid-area:left]  lg:pl-12'>{textColumnLeft}</p>
      <div className='hidden lg:block [grid-area:line] h-full w-[1px] bg-primary/50' />
      <p className='[grid-area:right]  lg:pr-12'>{textColumnRight}</p>
    </section>
  )
}
