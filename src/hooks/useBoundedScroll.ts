'use client'
import { useEffect } from 'react'

import { useScroll, useMotionValue, useTransform } from 'motion/react'
import { wrap } from '@/utils'

export function useBoundedScroll(bound: number) {
  const { scrollY } = useScroll()
  const scrollYBounded = useMotionValue(0)
  const scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bound],
    [0, 1]
  )

  useEffect(() => {
    return scrollY.on('change', (current) => {
      const previous = scrollY.getPrevious()
      if (previous) {
        const diff = current - previous
        const newScrollYBounded = scrollYBounded.get() + diff

        scrollYBounded.set(
          wrap({ number: newScrollYBounded, min: 0, max: bound })
        )
      }
    })
  }, [scrollY, bound, scrollYBounded, scrollYBoundedProgress])

  return { scrollYBounded, scrollYBoundedProgress }
}
