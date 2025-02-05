import { ErrorMenu, ErrorWriter } from '@/errors'
import { FooterInner } from '@/components/footer/components/footer-inner'
import { getDataWriterAction } from '@/actions/get-data-writer.action'
import { getDataMenuAction } from '@/actions/get-data-menu.action'
import { CustomError } from '@/components/CustomError'

export const Footer = async () => {
  const currentYear = new Date().getFullYear()
  const resWriter = await getDataWriterAction({ name: 'miriam' })
  const resMenu = await getDataMenuAction({ name: 'principal' })

  if (resMenu?.serverError || resMenu?.data?.menu.data.length === 0)
    return <CustomError error={resMenu.serverError} />
  // throw new ErrorMenu(
  //   resMenu?.serverError || 'No se han podido obtener los datos del Menú'
  // )
  if (resWriter?.serverError)
    throw new ErrorWriter(
      resWriter?.serverError ||
        'No se han podido obtener los datos del Escritor'
    )

  const menuItems = resMenu?.data?.menu.data[0].menuElements ?? []

  const socials = resWriter?.data?.writer.data[0].social ?? []

  return (
    <footer
      className='relative h-[600px] bg-dark text-light'
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      <FooterInner
        socials={socials}
        currentYear={currentYear}
        menuItems={menuItems}
      />
    </footer>
  )
}
