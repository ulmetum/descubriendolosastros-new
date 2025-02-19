'use client'

import type { MenuElement } from '@/interfaces/menu.interface'
import { FooterMenuItem } from '@/components/footer/components/footer-menu-item'

interface Props {
  menuItems: MenuElement[] | undefined
}

export const FooterMenu = ({ menuItems }: Props) => {
  return (
    <ul className='flex flex-col gap-2 md:gap-4'>
      {menuItems?.map((item) => (
        <FooterMenuItem
          key={item.id}
          item={item}
        />
        // <Link
        //   href={item.url}
        //   key={item.id}
        // >
        //   <motion.li
        //     className='inline-block capitalize'
        //     initial='rest'
        //     whileHover='hover'
        //     animate='rest'
        //   >
        //     {item.label.split('').map((char, i) => (
        //       <motion.span
        //         className='font-headings text-3xl font-light text-light md:text-4xl'
        //         key={i}
        //         variants={{
        //           rest: {
        //             textShadow: '0px 0px 0px rgba(217, 119, 6, 0)',
        //             color: 'var(--light)',
        //             opacity: 0.85,
        //             transition: { delay: i * 0.05, duration: 0.15 },
        //           },
        //           hover: {
        //             opacity: 1,
        //             color: 'var(--primary)',
        //             textShadow: '1px 0px 1px rgba(217, 119, 6, 0.75)',
        //             transition: { delay: i * 0.05, duration: 0.15 },
        //           },
        //         }}
        //       >
        //         {char}
        //       </motion.span>
        //     ))}
        //   </motion.li>
        // </Link>
      ))}
    </ul>
  )
}
