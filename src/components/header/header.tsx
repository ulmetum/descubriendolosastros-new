// import { Navbar } from "@/components"
// import { ErrorMenu } from "@/errors"
// import { getDataMenu } from "@/services"
import { Navbar } from '@/components/header'

import { getMenuAction } from '@/actions'
import { ErrorMenu } from '@/errors'

export async function Header() {
  const res = await getMenuAction({ name: 'principal' })
  // console.log({ res })
  if (res?.serverError) throw new ErrorMenu(res?.serverError)
  const menu = res?.data?.menu.data[0]
  const menuItems = menu?.menuElements

  // console.log({ menuItems })

  // const menuItems = success?.data[0].attributes.menuItems

  return (
    <header className='main-header'>
      {menuItems && <Navbar menuItems={menuItems} />}
    </header>
  )
}
