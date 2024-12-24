'use client'

import { useFeatureStore } from '@/stores/featureStore'
import { cn } from '@/utils/mergeClass'
import { useInView } from 'motion/react'
import { Link } from 'next-view-transitions'
import { ReactNode, useEffect, useRef } from 'react'
import { useShallow } from 'zustand/shallow'

interface Props {
  children: ReactNode
  classNames?: string
  id: number
  subtitle?: string
  slug: string
}

export const FeatureTitle = ({
  children,
  classNames,
  id,
  subtitle,
  slug,
}: Props) => {
  console.log({ subtitle })
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { margin: '-50% 0% -50% 0%' })

  const { inViewFeature, setInViewFeature } = useFeatureStore(
    useShallow((state) => ({
      setInViewFeature: state.setInViewFeature,
      inViewFeature: state.inViewFeature,
    }))
  )

  useEffect(() => {
    if (isInView) {
      setInViewFeature(id)
    }

    if (!isInView && inViewFeature === id) {
      setInViewFeature(null)
    }
  }, [isInView, id, inViewFeature, setInViewFeature])

  return (
    <Link
      href={`/features/${slug}`}
      className={cn(
        '',
        isInView ? 'pointer-events-auto' : 'pointer-events-none'
      )}
    >
      <p
        ref={ref}
        className={cn(
          'py-32 font-headings text-5xl font-semibold text-zinc-300 transition-colors duration-300 xl:text-6xl',
          classNames,
          isInView ? 'text-dark ' : 'text-zinc-300 '
        )}
      >
        {children}
        {subtitle && (
          <span className='block mt-2 font-headings'>{subtitle}</span>
        )}
      </p>
    </Link>
  )
}
