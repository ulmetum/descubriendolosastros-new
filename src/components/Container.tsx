import { cn } from '@/utils/mergeClass'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={cn('mx-auto w-[min(100%,1280px)]', className)}>
      {children}
    </div>
  )
}
