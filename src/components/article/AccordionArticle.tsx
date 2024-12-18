import { Item } from '@/interfaces/articles.interface'
import { AccordeonItemArticle } from '@/components/article/AccordionItemArticle'

interface Props {
  items?: Item[]
  headingAccordion?: string
}

export const AccordionArticle = ({ items, headingAccordion }: Props) => {
  return (
    <section className='section-article mx-auto max-w-3xl'>
      <h3 className='mb-4 text-center font-semibold text-primary'>
        {headingAccordion}
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
    </section>
  )
}
