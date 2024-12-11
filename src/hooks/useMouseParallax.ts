import { useSpring } from 'motion/react'
import { MouseEvent, useState } from 'react'

export const useMouseParallax = ({ movement }: { movement: number }) => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 15 }
  const mousePosition = {
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig),
  }

  const handleMouseMove = (e: MouseEvent<HTMLHeadingElement>) => {
    const { clientX, clientY } = e
    const targetElement = e.currentTarget

    const rect = targetElement?.getBoundingClientRect()

    if (rect) {
      const { width, height, top, left } = rect

      const x = ((clientX - (left + width / 2)) / width) * movement
      const y = ((clientY - (top + height / 2)) / height) * (movement / 2)

      mousePosition.x.set(x)
      mousePosition.y.set(y)
    }
  }

  const handleHoverStart = (num: number) => {
    setHoveredImage(num)
  }
  const handleHoverEnd = () => {
    setHoveredImage(null)
    mousePosition.x.set(0)
    mousePosition.y.set(0)
  }
  return {
    handleHoverStart,
    handleHoverEnd,
    handleMouseMove,
    hoveredImage,
    mousePosition,
  }
}
