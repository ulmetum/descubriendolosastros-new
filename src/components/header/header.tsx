// import { Navbar } from "@/components"
// import { ErrorMenu } from "@/errors"
// import { getDataMenu } from "@/services"
import { Navbar } from '@/components/header'

import { getDataMenuAction } from '@/actions'
import { ErrorMenu } from '@/errors'

export async function Header() {
  const res = await getDataMenuAction({ name: 'principal' })
  if (res?.serverError) throw new ErrorMenu(res?.serverError)
  const menu = res?.data?.menu.data[0]
  const menuItems = menu?.menuElements

  return (
    <header className='main-header'>
      {menuItems && <Navbar menuItems={menuItems} />}
    </header>
  )
}
