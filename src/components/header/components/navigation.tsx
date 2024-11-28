import { Menu } from './menu'
import { MenuElement } from '@/interfaces'

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
