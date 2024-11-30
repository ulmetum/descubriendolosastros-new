// import { ErrorMenu, ErrorWriter } from '@/errors'
// import { getDataMenuAction, getWriter } from '@/actions'
// import { FooterInner } from '@/components'
// import { footer } from 'motion/react-client'

import { getDataMenuAction, getDataWriterAction } from '@/actions'
import { ErrorMenu, ErrorWriter } from '@/errors'
import { FooterInner } from '@/components'

export const Footer = async () => {
  const currentYear = new Date().getFullYear()
  const resWriter = await getDataWriterAction({ name: 'mirova' })
  const resMenu = await getDataMenuAction({ name: 'principal' })
  // const { error, success } = await getDataMenu({ name: 'principal' })
  // const { error: errorWriter, success: writer } = await getWriter()

  if (resMenu?.serverError)
    throw new ErrorMenu(
      resMenu?.serverError ?? 'No se han podido obtener los datos del Menú'
    )
  if (resWriter?.serverError)
    throw new ErrorWriter(
      resWriter?.serverError ??
        'No se han podido obtener los datos del Escritor'
    )

  const menuItems = resMenu?.data?.menu.data[0].menuElements

  const socials = resWriter?.data?.writer.data[0].social
  // const socials = writer?.data[0].attributes.social

  // console.log({ menuItems, socials })

  return (
    <footer
      className='relative h-[500px] bg-zinc-900 text-light'
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      {socials && (
        <FooterInner
          socials={socials}
          currentYear={currentYear}
          menuItems={menuItems}
        />
      )}
    </footer>
  )
}
