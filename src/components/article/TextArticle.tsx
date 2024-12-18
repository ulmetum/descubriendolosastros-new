import parse from 'html-react-parser'

interface Props {
  richText?: string
}

export const TextArticle = ({ richText }: Props) => {
  return (
    <section className='section-article'>{richText && parse(richText)}</section>
  )
}
