import parse from 'html-react-parser'

interface Props {
  richText?: string
}

export const TextArticle = ({ richText }: Props) => {
  return (
    <div className='content-text-article'>{richText && parse(richText)}</div>
  )
}
