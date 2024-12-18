import { Item } from '@/interfaces/articles.interface'
import { AccordeonItemArticle } from '@/components/article/AccordionItemArticle'

interface Props {
  classNames?: string
  items?: Item[]
}

export const AccordionArticle = ({ classNames, items }: Props) => {
  // console.log({ items })
  return (
    <div className='px-4 py-12'>
      <div className='mx-auto max-w-3xl'>
        <h3 className='mb-4 text-center font-semibold text-primary'>
          Frequently asked questions
        </h3>
        {items?.map((item, index) => (
          <AccordeonItemArticle
            key={index}
            title={item.titleAccordion ?? ''}
            defaultOpen={index === 0}
          >
            <p>{item.contentAccordion}</p>
          </AccordeonItemArticle>
        ))}
      </div>
    </div>
  )
}
