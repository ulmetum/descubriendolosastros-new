import { TextArticle } from '@/components/article/TextArticle'
import { PhotoArticle } from '@/components/article/PhotoArticle'
import { VideoUrlArticle } from '@/components/article/VideoUrlArticle'

import { Element } from '@/interfaces'

interface Props {
  elements: Element[]
}

const componentMap = {
  'elements.content-text': TextArticle,
  'elements.photo': PhotoArticle,
  'elements.video-url': VideoUrlArticle,
}

export const ElementsManager = ({ elements }: Props) => {
  return (
    <article>
      {elements.map((element: Element) => {
        const Component =
          componentMap[element.__component as keyof typeof componentMap]

        return Component ? (
          <Component
            key={element.id}
            {...element}
          />
        ) : null
      })}
    </article>
  )
}
