'use client'
import { cn } from '@/utils/mergeClass'
import { motion } from 'motion/react'
import { Link } from 'next-view-transitions'
// import Image from 'next/image'
import { Miriam } from '@/components/icons/Miriam.icon'

interface Props {
  description: string
  title: string
  type: string
  url: string
}

export const HeroTheme = ({ description, title, type, url }: Props) => {
  return (
    <div className='lg:w-2/3 px-4 pt-8 lg:flex lg:flex-col lg:justify-between lg:min-h-[50vh]'>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.83, 0, 0.17, 1] }}
        className='font-headings text-2xl text-primary '
      >
        ¿Qué trataremos en este espacio?
      </motion.p>
      <div className='lg:my-auto max-w-lg:my-10'>
        <div className='overflow-hidden leading-none mb-6'>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.25, ease: [0.83, 0, 0.17, 1] }}
            className='lg:text-6xl  text-primary'
          >
            {title}
          </motion.h1>
        </div>
        <div className='overflow-hidden'>
          <motion.p
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.83, 0, 0.17, 1],
            }}
          >
            {description}
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.83, 0, 0.17, 1] }}
        className={cn(
          'flex items-center',
          type ? 'justify-between' : 'justify-end'
        )}
      >
        {type === 'podcast' ? (
          <Link
            href={url}
            target='_blank'
            className='font-headings text-primary hover:underline'
          >
            Accede al {type}
          </Link>
        ) : (
          <Link
            href='/contacto'
            className='font-headings text-primary hover:underline'
          >
            Adquiere el {type}
          </Link>
        )}
        <div className='flex items-center justify-center  '>
          <Miriam />
        </div>
        {/* <Image
          src='/miriam-name.svg'
          alt='Míriam'
          width={150}
          height={100}
        /> */}
      </motion.div>
    </div>
  )
}
