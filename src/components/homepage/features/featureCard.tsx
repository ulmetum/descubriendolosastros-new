'use client'

import { ReactNode } from 'react'
import Image from 'next/image'

import { useShallow } from 'zustand/shallow'
import { useFeatureStore } from '@/stores/featureStore'
import { cn } from '@/utils/mergeClass'

interface CardProps {
  id: number
  featuredImage: string
  slug: string
}

interface Props {
  id: number
  gradient: string
  children: ReactNode
}

const FeatureCard = ({ gradient, children, id }: Props) => {
  const { inViewFeature } = useFeatureStore(
    useShallow((state) => ({
      inViewFeature: state.inViewFeature,
    }))
  )

  return (
    <div
      className={cn(
        'absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br transition-opacity duration-1000',
        gradient,
        id === inViewFeature ? 'opacity-100' : 'opacity-0'
      )}
    >
      {children}
    </div>
  )
}

export const LandingPageCard = ({ id, featuredImage }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      gradient='from-[#f6f2ef] to-[#fbcf9b]'
    >
      <div className='relative h-full w-full'></div>
      <Image
        fill
        sizes='100%'
        className='rounded-xl object-cover'
        alt='universe'
        src={featuredImage}
      />
    </FeatureCard>
  )
}
