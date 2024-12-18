import { TextArticle } from '@/components/article/TextArticle'
import { PhotoArticle } from '@/components/article/PhotoArticle'
import { VideoUrlArticle } from '@/components/article/VideoUrlArticle'
import { QuoteArticle } from '@/components/article/QuoteArticle'
import { DoubleColumnsArticle } from '@/components/article/DoubleColumnsArticle'
import { AccordionArticle } from '@/components/article/AccordionArticle'

import { Element } from '@/interfaces/articles.interface'

interface Props {
  elements: Element[]
}

const componentMap = {
  'elements.content-text': TextArticle,
  'elements.photo': PhotoArticle,
  'elements.video-url': VideoUrlArticle,
  'elements.double-columns': DoubleColumnsArticle,
  'elements.quote': QuoteArticle,
  'elements.accordion': AccordionArticle,
}

export const ElementsManager = ({ elements }: Props) => {
  return (
    <article>
      {elements.map((element: Element) => {
        const Component =
          componentMap[element.__component as keyof typeof componentMap]

        return Component ? (
          <Component
            classNames='my-24'
            key={element.id}
            {...element}
          />
        ) : null
      })}
    </article>
  )
}
