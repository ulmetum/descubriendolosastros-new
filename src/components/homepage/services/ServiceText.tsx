import { DataText } from '@/components'

interface Props {
  data: DataText
}
export const ServiceText = ({ data }: Props) => {
  const { content, extra, plus } = data
  return (
    <div className='mx-auto mt-10 w-[min(100%,1024px)] space-y-6 rounded-xl xl:mt-0 xl:h-full'>
      <p className='indent-10 text-2xl leading-relaxed first-letter:text-7xl first-letter:capitalize'>
        {content}
      </p>
      <p className='indent-10 text-2xl leading-relaxed first-letter:capitalize'>
        {extra}
      </p>
      <p className='text-2xl leading-relaxed'>{plus}</p>
    </div>
  )
}
