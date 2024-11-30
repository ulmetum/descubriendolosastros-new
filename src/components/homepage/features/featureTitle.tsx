'use client'

import { useFeatureStore } from '@/stores'
import { cn } from '@/utils'
import { useInView } from 'motion/react'
import { ReactNode, useEffect, useRef } from 'react'
import { useShallow } from 'zustand/shallow'

interface Props {
  children: ReactNode
  classNames?: string
  id: number
}

export const FeatureTitle = ({ children, classNames, id }: Props) => {
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
    <p
      ref={ref}
      className={cn(
        'py-32 font-headings text-5xl font-semibold text-zinc-300 transition-colors duration-1000 xl:text-6xl',
        classNames,
        isInView ? 'text-dark' : 'text-zinc-300'
      )}
    >
      {children}
    </p>
  )
}
