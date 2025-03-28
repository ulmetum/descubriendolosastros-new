import Image from 'next/image'
import { Link } from 'next-view-transitions'

import { NEXT_PUBLIC_STRAPI_HOST } from '@/config'
import type { SocialWriter } from '@/interfaces/writer.interface'
import type { Social } from '@/interfaces/articles.interface'
import { cn } from '@/utils/mergeClass'

interface Props {
  socials: SocialWriter[] | Social[] | undefined
  color?: 'amber' | 'pampas' | 'zinc'
  size?: 'small' | 'medium' | 'large'
}

export const SocialIcons = ({
  size = 'small',
  socials,
  color = 'amber',
}: Props) => {
  const sizes = {
    small: 'w-6 h-6 md:w-7 md:h-7',
    medium: 'w-7 h-7 lg:w-8 lg:h-8',
    large: 'w-8 h-8',
  }

  const fill = {
    pampas: 'pampas-color',
    zinc: 'zinc-color',
    amber: 'amber-color',
  }
  return (
    <ul className='flex items-center justify-center gap-2 '>
      {socials?.map((socialIcon) => {
        const icon = socialIcon.icon.url
        const href = socialIcon.url
        const urlIcon = icon.startsWith('http')
          ? icon
          : `${NEXT_PUBLIC_STRAPI_HOST}${icon}`

        return (
          <li
            key={socialIcon.id}
            className={cn('relative', sizes[size])}
          >
            <Link
              className='relative inline-block h-full w-full'
              href={href}
              target='_blank'
              rel='noreferrer'
            >
              <Image
                fill
                sizes='100%'
                alt={`${socialIcon.url}`}
                src={urlIcon}
                className={cn(
                  'transition-transform duration-300 hover:scale-125',
                  fill[color]
                )}
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
