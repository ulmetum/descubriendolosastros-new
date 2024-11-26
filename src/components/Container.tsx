import { cn } from '@/utils'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return <div className={cn('mx-auto max-w-7xl', className)}>{children}</div>
}
