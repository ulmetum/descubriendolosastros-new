'use client'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

export const VanishText = () => {
  return (
    <div className='text-center'>
      <h3 className='text-3xl sm:text-4xl md:text-5xl'>
        <AnimatedText
          phrases={[
            'EXPLORA TU VÍNCULO CÓSMICO',
            'DESCUBRE TU PROPÓSITO ASTRAL',
          ]}
        />
      </h3>
    </div>
  )
}

const ONE_SECOND = 1000
const WAIT_TIME = ONE_SECOND * 3

const AnimatedText = ({ phrases }: { phrases: string[] }) => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length)
    }, WAIT_TIME)

    return () => clearInterval(intervalRef)
  }, [phrases])

  return (
    <div className='relative mb-8 mt-2 w-full'>
      {phrases.map((phrase) => {
        const isActive = phrases[active] === phrase
        return (
          <motion.div
            key={phrase}
            initial={false}
            animate={isActive ? 'active' : 'inactive'}
            style={{
              x: '-50%',
            }}
            variants={{
              active: {
                opacity: 1,
                scale: 1,
              },
              inactive: {
                opacity: 0,
                scale: 0,
              },
            }}
            className='absolute left-1/2 top-0 w-full text-zinc-900'
          >
            {phrase}
          </motion.div>
        )
      })}
    </div>
  )
}
