'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { useMeasure } from 'react-use'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { Link } from 'next-view-transitions'
import { CheckIcon } from '@/components/icons/Check.icon'
import { cn } from '@/utils/mergeClass'

export const NeuPricing = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>('fisico')
  const [highlighted, setHighlighted] = useState<number>(0)
  const [ref1, { height: height1 }] = useMeasure<HTMLDivElement>()
  const [ref2, { height: height2 }] = useMeasure<HTMLDivElement>()

  const handleMouseEnter = (id: number) => {
    setHighlighted(id)
  }

  return (
    <MotionConfig transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.65 }}>
      <div className='mx-auto w-[min(100%,1024px)] bg-light'>
        <section className='mx-auto max-w-7xl'>
          <Title />
          <Toggle
            selected={selected}
            setSelected={setSelected}
          />
          <div className='relative mt-6 grid grid-cols-1 gap-6 lg:mt-[6rem] lg:grid-cols-2 lg:gap-8'>
            <div
              onMouseEnter={() => handleMouseEnter(0)}
              ref={ref1}
            >
              <PriceColumn
                highlighted={highlighted}
                id={0}
                price={selected === 'fisico' ? '49' : '29'}
                selected={selected}
                title={selected === 'fisico' ? 'ENMARCADO' : 'PDF (20x30)'}
              />
            </div>
            <div
              onMouseEnter={() => handleMouseEnter(1)}
              ref={ref2}
            >
              <PriceColumn
                highlighted={highlighted}
                id={1}
                price={selected === 'fisico' ? '37' : '34'}
                selected={selected}
                title={selected === 'fisico' ? 'IMPRESO' : 'PDF (30x40)'}
              />
            </div>
            <BackgroundNeuPricing
              height1={height1}
              height2={height2}
              highlighted={highlighted}
            />
          </div>
        </section>
      </div>
    </MotionConfig>
  )
}

const BackgroundNeuPricing = ({
  highlighted,
  height1,
  height2,
}: {
  highlighted: number
  height1: number
  height2: number
}) => {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 z-20 flex h-full flex-col mix-blend-difference lg:flex-row',
        highlighted === 1 ? 'justify-end' : 'justify-start'
      )}
    >
      <motion.div
        animate={{
          height: highlighted === 0 ? height1 : height2,
        }}
        layout
        className='absolute w-full rounded-lg bg-light lg:w-[calc(50%-1rem)]'
      ></motion.div>
    </div>
  )
}
const Title = () => {
  return (
    <div className='mb-4 flex flex-col items-center justify-center gap-4'>
      <h2 className='max-w-2xl text-end font-headings text-4xl font-semibold md:text-6xl'>
        Precios
      </h2>
      <span className='inline-block text-2xl'>(Elige un formato)</span>
    </div>
  )
}

const PriceColumn = ({
  highlighted,
  id,
  title,
  price,
  selected,
}: PriceColumnProps) => {
  const statement =
    selected === 'digital'
      ? 'IVA incluido'
      : 'IVA incluido. No incluye gastos de envío'
  const itemsToShow =
    selected === 'digital'
      ? [
          { children: 'Constelaciones visibles', checked: true },
          { children: 'Estrellas visibles', checked: true },
          { children: 'Planetas visibles', checked: true },
        ]
      : [
          { children: 'Constelaciones visibles', checked: true },
          { children: 'Estrellas visibles', checked: true },
          { children: 'Planetas visibles', checked: true },
          { children: 'Papel de buena calidad', checked: true },
          { children: 'Impresión de buena calidad', checked: true },
        ]
  return (
    <div className={`relative z-10 h-full w-full rounded-lg p-6 md:p-8`}>
      <motion.div
        layout
        className={cn(
          `pointer-events-none absolute inset-0 -z-10 rounded-lg bg-white [transition:border_.35s_ease]`,
          highlighted !== id ? 'border border-text' : ''
        )}
      />
      <div className='flex flex-row-reverse items-center justify-between'>
        <AnimatePresence mode='popLayout'>
          <motion.p
            layout
            key={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='mb-6 whitespace-nowrap font-headings text-3xl font-medium'
          >
            {title}
          </motion.p>
        </AnimatePresence>
        <div className='mb-6 flex items-center gap-3'>
          <AnimatePresence mode='popLayout'>
            <motion.span
              layout
              initial={{
                y: 14,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -14,
                opacity: 0,
              }}
              key={price}
              className='block text-6xl font-bold text-dark'
            >
              <small>{price}</small>
              <small>€</small>
            </motion.span>
          </AnimatePresence>
          <Link href='/contacto'>
            <motion.p
              layout
              className='absolute bottom-4 right-4 rounded-md bg-dark px-3 py-1.5 font-headings text-2xl leading-tight text-light'
            >
              Solicitar Mapa
            </motion.p>
          </Link>
        </div>
      </div>

      <AnimatePresence mode='popLayout'>
        <motion.p
          layout
          key={statement}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='mb-8 text-lg'
        >
          {statement}
        </motion.p>
      </AnimatePresence>

      <div className='mb-8 space-y-2'>
        <AnimatePresence mode='popLayout'>
          {itemsToShow.map((i) => (
            <motion.div
              layout
              key={i.children}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CheckListItem checked={i.checked}>{i.children}</CheckListItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

const Toggle = ({
  selected,
  setSelected,
}: {
  selected: ToggleOptionsType
  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>
}) => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='relative mx-auto mt-3 flex w-fit items-center rounded-xl bg-dark'>
      <button
        className={cn(
          'relative z-10 flex items-center gap-2 px-3 py-1.5 text-sm font-medium mix-blend-difference',
          toggle ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        onClick={() => {
          setSelected('fisico')
        }}
      >
        <span className='relative z-10 text-xl text-white'>Físico</span>
      </button>
      <button
        className={cn(
          'relative z-10 flex items-center gap-2 px-3 py-1.5 text-sm font-medium mix-blend-difference',
          toggle ? 'pointer-events-none' : 'pointer-events-auto'
        )}
        onClick={() => {
          setSelected('digital')
        }}
      >
        <span className='relative z-10 text-xl text-white'>Digital</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === 'digital' ? 'justify-end' : 'justify-start'
        }`}
      >
        <motion.span
          layout
          onLayoutAnimationComplete={() => setToggle(!toggle)}
          className='relative z-20 h-full w-1/2 rounded-xl border border-text bg-light mix-blend-difference'
        />
      </div>
    </div>
  )
}

const CheckListItem = ({ children }: CheckListItemType) => {
  return (
    <div className='flex items-center gap-2 text-lg'>
      <CheckIcon classNames='text-xl text-dark' />
      {children}
    </div>
  )
}

type PriceColumnProps = {
  highlighted: number
  id: number
  title: string
  price: string
  selected: ToggleOptionsType
}

type ToggleOptionsType = 'fisico' | 'digital'

type CheckListItemType = {
  children: string
  checked: boolean
}
