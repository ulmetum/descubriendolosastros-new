import parse from 'html-react-parser'

interface Props {
  richText?: string
}

export const TextArticle = ({ richText }: Props) => {
  return <section className='py-12 '>{richText && parse(richText)}</section>
}
