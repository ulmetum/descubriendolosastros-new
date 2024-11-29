'use client'

import { useState } from 'react'

// Components
import UniverseOne from '/public/universe-01.webp'
import UniverseTwo from '/public/universe-02.webp'
import UniverseThree from '/public/universe-03.webp'

import {
  CarouselButton,
  CarouselContent,
  CarouselImage,
  CarouselLeftIcon,
  CarouselRightIcon,
} from '@/components'

// Various
import { wrap } from 'motion/react'
import { Content, Image } from '@/interfaces'
import { useActiveButtonStore } from '@/stores'
import { useShallow } from 'zustand/shallow'

export const content: Content[] = [
  {
    id: 1,
    type: 'content',
    title: 'Elementum',
    subtitle: 'Proin',
    paragraph: 'In posuere pulvinar ligula',
  },
  {
    id: 2,
    type: 'content',
    title: 'Malesuada',
    subtitle: 'eros',
    paragraph: 'Aliquam tincidunt sollicitudin',
  },
  {
    id: 3,
    type: 'content',
    title: 'Suspendisse',
    subtitle: 'risus',
    paragraph: 'Quisque faucibus elementum',
  },
]

export const images: Image[] = [
  {
    id: 1,
    type: 'image',
    url: UniverseOne,
  },
  {
    id: 2,
    type: 'image',
    url: UniverseTwo,
  },
  {
    id: 3,
    type: 'image',
    url: UniverseThree,
  },
]

export const Carousel = () => {
  const [[counter, direction], setCounter] = useState([0, 0])

  const { setIsActiveButton } = useActiveButtonStore(
    useShallow((state) => ({
      setIsActiveButton: state.setIsActiveButton,
    }))
  )

  const movement = (newDirection: number) => {
    setCounter([counter + newDirection, newDirection])
    setIsActiveButton(false)
  }

  const slideIndex = wrap(0, content.length, counter)
  // h-[--carousel-height]
  return (
    <div className='relative mx-auto my-20 flex h-[50vh] w-[min(100%,1024px)] items-center justify-center overflow-hidden'>
      <div className='flex h-full w-full items-center justify-center rounded-xl [perspective:1000px]'>
        {images.map((image, index) => (
          <CarouselImage
            index={index}
            key={image.id}
            direction={direction}
            slideIndex={slideIndex}
            image={image}
          />
        ))}
        <div className='absolute z-20 flex w-[min(100%,768px)] justify-between'>
          <CarouselButton
            direction='-1'
            movement={movement}
          >
            <CarouselLeftIcon />
          </CarouselButton>
          <CarouselButton
            direction='1'
            movement={movement}
          >
            <CarouselRightIcon />
          </CarouselButton>
        </div>
        <CarouselContent
          counter={counter}
          slideIndex={slideIndex}
        />
      </div>
    </div>
  )
}
