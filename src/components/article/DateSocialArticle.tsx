'use client'
import { MotionValue, motion, useTransform } from 'motion/react'

// Componentes
// import { SocialIcons } from '@/components'
// import { PostDate } from '@/components/blog'

// Types
import { Social } from '@/interfaces'
import { PostDate, SocialIcons } from '@/components/article'

interface Props {
  scrollY: MotionValue<number>
  createdAt: Date
  socials: Social[] | undefined
}

export function DateSocialArticle({ scrollY, createdAt, socials }: Props) {
  return (
    <motion.div
      style={{
        opacity: useTransform(scrollY, [0, 1], [0, 1]),
        transitionDelay: useTransform(scrollY, [0, 1], ['0ms', `1000ms`]),
      }}
      className='date absolute bottom-0 left-1/2 z-20 flex w-[min(100%,480px)] items-center justify-between px-4 opacity-0 transition-all duration-500 -translate-x-1/2'
    >
      <PostDate
        color='amber'
        createdAt={createdAt}
      />
      <SocialIcons socials={socials} />
    </motion.div>
  )
}
