'use client'

import { ReactNode } from 'react'
import Image from 'next/image'

// Images
import UniverseFour from '/public/universe-04.webp'
import ChartAstrology from '/public/chart astrology.webp'
import Zodiacs from '/public/zodiacs.webp'
import Planets from '/public/planets-interpretation.webp'
import { useShallow } from 'zustand/shallow'
import { useFeatureStore } from '@/stores/featureStore'
import { cn } from '@/utils/mergeClass'

interface Props extends CardProps {
  gradient: string
  children: ReactNode
}

interface CardProps {
  id: number
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

export const CardOne = ({ id }: CardProps) => {
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
        src={ChartAstrology}
      />
    </FeatureCard>
  )
}
export const CardTwo = ({ id }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      gradient='from-[#f6f2ef] to-[#f48989]'
    >
      <div className='relative h-full w-full'></div>
      <Image
        fill
        sizes='100%'
        className='rounded-xl object-cover'
        alt='universe'
        src={Planets}
      />
    </FeatureCard>
  )
}
export const CardThree = ({ id }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      gradient='from-[#f6f2ef] to-[#85cbf0]'
    >
      <div className='relative h-full w-full'></div>
      <Image
        fill
        sizes='100%'
        className='rounded-xl object-cover'
        alt='universe'
        src={Zodiacs}
      />
    </FeatureCard>
  )
}
export const CardFour = ({ id }: CardProps) => {
  return (
    <FeatureCard
      id={id}
      gradient='from-[#f6f2ef] to-[#839d86]'
    >
      <div className='relative h-full w-full'></div>
      <Image
        fill
        sizes='100%'
        className='rounded-xl object-cover'
        alt='universe'
        src={UniverseFour}
      />
    </FeatureCard>
  )
}
