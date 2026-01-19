'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, SplitText)

export const IntroContent = () => {
  const containerIntroText = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerIntroText.current) return

      gsap.set('.intro-text', {
        opacity: 1,
      })

      const split = new SplitText('.intro-text', {
        type: 'lines',
        linesClass: 'line-child',
      })

      // Envolver cada línea en un contenedor con overflow hidden
      split.lines.forEach((line) => {
        const wrapper = document.createElement('div')
        wrapper.className = 'line-wrapper'
        wrapper.style.overflow = 'hidden'
        line.parentNode?.insertBefore(wrapper, line)
        wrapper.appendChild(line)
      })

      // Animar solo el movimiento vertical
      gsap.from('.line-child', {
        y: '100%',
        duration: 1,
        stagger: 0.1,
        delay: 1.75,
        ease: 'power2.out',
      })
    },
    {
      scope: containerIntroText,
    },
  )

  return (
    <div
      ref={containerIntroText}
      className='container-intro-text'
    >
      <p className='intro-text mx-auto opacity-0 w-[min(100%,1024px)] text-2xl font-light leading-snug text-white mix-blend-difference sm:text-4xl sm:leading-tight landscape-sm:text-base landscape-xl:mb-4 landscape-xl:w-full'>
        La contemplación de los astros representados en el firmamento es un
        regalo para los sentidos. Su vastedad y profundidad hacen que el cosmos
        sea un lugar de encanto e inspiración para el ser humano. Acompáñame en
        este hermoso viaje a través de las estrellas; a través de tu vida
        reflejada en ellas...
      </p>
    </div>
  )
}
