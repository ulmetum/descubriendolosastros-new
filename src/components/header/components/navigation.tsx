import { Menu } from '@/components/header/components/menu'
import type { MenuElement } from '@/interfaces/menu.interface'

interface Props {
  menuItems: MenuElement[]
}
export const Navigation = ({ menuItems }: Props) => {
  return (
    <nav className={`flex w-full justify-end leading-none`}>
      <Menu menuItems={menuItems} />
    </nav>
  )
}
