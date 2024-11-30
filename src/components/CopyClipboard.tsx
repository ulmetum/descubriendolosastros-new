'use client'

import { cn } from '@/utils'
import { useRef, useState } from 'react'

interface Props {
  color?: 'light' | 'dark' | 'amber'
}

const textColor = {
  light: 'text-light',
  dark: 'text-zinc-900',
  amber: 'text-amber-700',
}

export const CopyClipboard = ({ color = 'light' }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsvisible] = useState<'default' | 'enter' | 'done'>(
    'default'
  )

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const handleMouseClick = () => {
    setIsvisible('done')
    const text = ref.current?.innerText
    if (text) {
      copyText(text)
      setIsvisible('done')
    }
  }

  const handleMouseEnter = () => {
    setIsvisible('enter')
  }
  const handleMouseLeave = () => {
    setIsvisible('default')
  }

  return (
    <div
      className='group relative h-8 overflow-hidden sm:h-12'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseClick}
    >
      <p
        ref={ref}
        className={cn(
          `sm:leading-12 h-8 cursor-pointer text-center font-headings text-xl leading-8 transition-all ease-[cubic-bezier(.642,0,.328,1)] sm:h-12 sm:text-4xl`,
          textColor[color],
          isVisible === 'default' && 'duration-[.35s] translate-y-0',
          isVisible === 'enter' && 'duration-500 -translate-y-[100%]',
          isVisible === 'done' && 'duration-[.35s] -translate-y-[200%]'
        )}
      >
        descubriendolosastros@gmail.com
      </p>

      <p
        className={cn(
          `sm:leading-12 h-8 cursor-pointer text-center font-headings text-xl leading-8 transition-all ease-[cubic-bezier(.642,0,.328,1)] sm:h-12 sm:text-4xl`,
          textColor[color],
          isVisible === 'default' && 'duration-[.35s] translate-y-0',
          isVisible === 'enter' && 'duration-500 -translate-y-[100%]',
          isVisible === 'done' && 'duration-[.35s] -translate-y-[200%]'
        )}
      >
        Clic para copiar
      </p>
      <p
        className={cn(
          `sm:leading-12 h-8 cursor-pointer text-center font-headings text-xl leading-8 transition-all ease-[cubic-bezier(.642,0,.328,1)] sm:h-12 sm:text-4xl`,
          textColor[color],
          isVisible === 'default' && 'duration-[.35s] translate-y-0',
          isVisible === 'enter' && 'duration-500 -translate-y-[100%]',
          isVisible === 'done' && 'duration-[.35s] -translate-y-[200%]'
        )}
      >
        Email copiado!
      </p>
    </div>
  )
}
