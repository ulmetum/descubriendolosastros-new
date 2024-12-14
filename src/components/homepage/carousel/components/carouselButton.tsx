'use client'

import { motion } from 'motion/react'
import { useShallow } from 'zustand/shallow'
import { CarouselButtonProps } from '@/interfaces/carousel.interface'
import { useActiveButtonStore } from '@/stores/activeButtonStore'

export const CarouselButton = ({
  movement,
  direction,
  children,
}: CarouselButtonProps) => {
  // Tenemos que convertir la variable "direction" en número para poder usarla en la función "movement"
  const dir = +direction

  const { isActiveButton } = useActiveButtonStore(
    useShallow((state) => ({
      isActiveButton: state.isActiveButton,
    }))
  )

  return (
    <motion.button
      whileHover={{ scale: 1.3 }}
      className={`h-12 w-12 rounded-full bg-white ${
        isActiveButton
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-75'
      }`}
      disabled={!isActiveButton}
      onPointerDown={() => movement(dir)}
      transition={{ type: 'spring', bounce: 0.75, duration: 1.2 }}
    >
      {children}
    </motion.button>
  )
}
