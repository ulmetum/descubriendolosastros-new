'use client'

import { Link } from 'next-view-transitions'
import { usePathname } from 'next/navigation'

import { motion } from 'motion/react'
import { MenuElement } from '@/interfaces/menu.interface'
import { cn } from '@/utils/mergeClass'

interface Props {
  menuItems: MenuElement[]
}

export function Menu({ menuItems }: Props) {
  const pathname = usePathname()

  const menuPaths = menuItems.map((item) => item.url)
  const isPageArticle =
    !menuPaths.includes(pathname) &&
    !pathname.includes('/tema') &&
    !pathname.includes('/completado')

  return (
    <ul className='flex justify-end'>
      {menuItems.map((item, i) => {
        const isActive = pathname === item.url
        const isArticlePage = isPageArticle && item.url === '/blog'

        return (
          <motion.div
            initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            transition={{
              delay: i * 0.25,
              duration: 2,
              ease: [0.83, 0, 0.17, 1],
            }}
            key={item.id}
          >
            <motion.li
              initial='initial'
              whileHover='hovered'
              className={cn(
                'xs:px-2 relative mx-1.5 overflow-hidden leading-tight sm:mx-3',
                isActive || isArticlePage
                  ? 'pointer-events-none text-primary'
                  : 'pointer-events-auto text-dark'
              )}
            >
              <motion.div
                className={`font-headings uppercase sm:text-xl`}
                variants={{
                  initial: { y: 0 },
                  hovered: { y: '-110%' },
                }}
                transition={{ duration: 0.75, type: 'spring', bounce: 0.5 }}
              >
                <Link href={item.url}>{item.label}</Link>
              </motion.div>
              <motion.div
                className={`absolute inset-0 font-headings uppercase text-primary sm:text-xl`}
                variants={{
                  initial: { y: '110%' },
                  hovered: { y: 0 },
                }}
                transition={{ duration: 0.75, type: 'spring', bounce: 0.5 }}
              >
                <Link
                  id={item.label}
                  href={item.url}
                >
                  {item.label}
                </Link>
              </motion.div>
            </motion.li>
          </motion.div>
        )
      })}
    </ul>
  )
}
