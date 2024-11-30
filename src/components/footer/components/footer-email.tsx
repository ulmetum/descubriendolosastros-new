import { CopyClipboard } from '@/components'

export const FooterEmail = () => {
  return (
    <div>
      <h3 className='mb-2 text-center text-light'>Envíame un mensaje</h3>
      <CopyClipboard color='amber' />
    </div>
  )
}
