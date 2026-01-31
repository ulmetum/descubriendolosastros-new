'use client'
import { MotionValue, motion, useTransform } from 'motion/react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, SplitText)

interface Props {
  subtitle: string
}

export function SubtitleArticle({ subtitle }: Props) {
  const containerSubtitleRef = useRef<HTMLDivElement>(null)
  useGSAP(
    () => {
      if (!containerSubtitleRef.current) return

      gsap.set('.container-subtitle', { opacity: 1 })

      // 1️⃣ Crear las líneas reales
      const splitWrappers = new SplitText('.subtitle', {
        type: 'lines',
        linesClass: ' line-wrapper overflow-hidden',
      })

      // 2️⃣ Envolver cada línea en un wrapper con overflow hidden
      const splitLines = new SplitText(splitWrappers.lines, {
        type: 'lines',
        linesClass: 'line text-2xl',
      })

      // 3️⃣ Animar SOLO las líneas internas
      gsap.from(splitLines.lines, {
        yPercent: 100,
        duration: 1,
        stagger: 0.1,
        delay: 2.5,
        ease: 'power4.out',
      })
    },
    { scope: containerSubtitleRef },
  )

  return (
    <h3 className={`!my-8 relative z-20 mx-auto text-md w-[min(100%,1000px)]`}>
      <div
        ref={containerSubtitleRef}
        className='block font-headings  '
      >
        <div className='container-subtitle opacity-0'>
          <div className='subtitle text-white text-center w-full '>
            {subtitle}
          </div>
        </div>
      </div>
    </h3>
  )
}
