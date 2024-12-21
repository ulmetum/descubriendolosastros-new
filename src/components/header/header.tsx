import { ErrorMenu } from '@/errors'

import { Navbar } from '@/components/header/components/navbar'
import { getDataMenuAction } from '@/actions/get-data-menu.action'

export async function Header() {
  const res = await getDataMenuAction({ name: 'principal' })
  if (res?.serverError || res?.data?.menu.data.length === 0)
    throw new ErrorMenu(
      res?.serverError ?? 'No se han podido obtener los datos del Menú'
    )
  const menu = res?.data?.menu.data[0]
  const menuItems = menu?.menuElements

  return (
    <header className='main-header'>
      {menuItems && <Navbar menuItems={menuItems} />}
    </header>
  )
}
