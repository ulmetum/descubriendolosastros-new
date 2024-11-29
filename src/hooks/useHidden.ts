'use client'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { useRef, useState } from 'react'

export const useHidden = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false)
  const { scrollY } = useScroll()
  const lastYRef = useRef(0)

  const updateIsHidden = (state: boolean) => {
    setIsHidden(state)
  }

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0)
      lastYRef.current = y
    }
  })
  return { isHidden, updateIsHidden }
}
