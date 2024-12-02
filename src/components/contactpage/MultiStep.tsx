'use client'

import { useState } from 'react'

import { FormUser, FormComplete, FormMap } from '@/components'

import { AnimatePresence, useMotionValue } from 'motion/react'
import {
  CheckContact,
  PersonalInfoContact,
  StelarMapContact,
} from '@/components/icons'
import { cn } from '@/utils'

const steps = [
  {
    id: 1,
    name: 'Información del Usuario',
    description: 'Información del usuario',
    icon: <PersonalInfoContact />,
    fields: ['firstName', 'lastName', 'email'],
  },
  {
    id: 2,
    name: 'Mapa Estelar',
    description: 'Datos del mapa estelar',
    icon: <StelarMapContact />,
    fields: ['country', 'state', 'city', 'street', 'zip'],
  },
  {
    id: 3,
    name: 'Complete',
    icon: <CheckContact />,
    description: 'Formulario completado',
  },
]
// Usage
export const MultiStep = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [previousStep, setPreviousStep] = useState(1)
  const opacity = useMotionValue(1)

  const direction = currentStep > previousStep ? 'forward' : 'backward'

  const nextStep = () => {
    if (currentStep <= steps.length - 1) {
      setPreviousStep(currentStep)
      setCurrentStep((step) => step + 1)
    }

    if (currentStep === steps.length) {
      opacity.set(0)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep((step) => step - 1)
    }
  }

  console.log({ currentStep })

  const variants = {
    enter: (direction: string) => ({
      x: direction === 'forward' ? -25 : 25,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: string) => ({
      x: direction === 'forward' ? 25 : -25,
      opacity: 0,
    }),
  }

  return (
    <div className='w-full'>
      <ol className='overflow-hidden lg:space-y-0 lg:gap-4 space-y-8 flex flex-col items-center lg:flex-row justify-center max-w-6xl mx-auto'>
        {steps.map((step) => (
          <li
            key={step.id}
            className={cn(
              "w-[min(100%,480px)] after:-translate-x-1/2 relative flex-1 after:content-['']  after:w-0.5 after:h-full after:inline-block after:absolute after:-bottom-11  lg:after:h-[2px] lg:after:w-4 after:left-1/2  lg:after:left-auto lg:after:-right-6 lg:after:top-1/2",
              currentStep === step.id ? 'after:bg-[var(--primary)]' : ''
            )}
          >
            <div className='flex items-center justify-center gap-8 w-full '>
              <div
                className={cn(
                  'flex items-center gap-3.5 bg-white p-3.5 rounded-xl relative z-10 border  w-full',
                  currentStep === step.id ? 'border-[var(--primary)]' : ''
                )}
              >
                <div
                  className={cn(
                    'rounded-lg  flex items-center justify-center',
                    currentStep === step.id
                      ? 'bg-[var(--primary)]'
                      : 'bg-gray-300'
                  )}
                >
                  <span
                    className={cn(
                      ' p-3',
                      currentStep === step.id ? 'text-white' : 'text-gray-600'
                    )}
                  >
                    <PersonalInfoContact />
                  </span>
                </div>
                <div className=' flex items-start rounded-md justify-center flex-col '>
                  <h6 className='text-base font-semibold text-dark mb-0.5'>
                    {step.name}
                  </h6>
                  <p className='text-xs font-normal text-gray-500'>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* Dynamic content based on `step` */}
      <div className='relative min-h-[15vh]  mt-12'>
        <AnimatePresence
          initial={false}
          custom={direction}
          mode='wait'
        >
          {currentStep === 1 && (
            <FormUser
              key={`form-user-${currentStep}`}
              direction={direction}
              variants={variants}
            />
          )}
          {currentStep === 2 && (
            <FormMap
              key={`form-map-${currentStep}`}
              direction={direction}
              variants={variants}
            />
          )}
          {currentStep === 3 && (
            <FormComplete
              key={`form-complete-${currentStep}`}
              direction={direction}
              variants={variants}
            />
          )}
        </AnimatePresence>

        {/* <AnimatePresence
          initial={false}
          custom={direction}
          mode='sync'
        >
          {currentStep === 1 && (
            <motion.div
              key={currentStep}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              custom={direction}
              className='space-y-2 px-8 absolute inset-0'
            >
              <h3>Paso 1</h3>
              <div className='h-4 w-5/6 rounded bg-neutral-500' />
              <div className='h-4 rounded bg-neutral-500' />
              <div className='h-4 w-4/6 rounded bg-neutral-500' />
            </motion.div>
          )}
          {currentStep === 2 && (
            <motion.div
              key={currentStep}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              custom={direction}
              className='space-y-2 px-8 absolute inset-0'
            >
              <h3>Paso 2</h3>
              <div className='h-4 w-5/6 rounded bg-neutral-500' />
              <div className='h-4 rounded bg-neutral-500' />
              <div className='h-4 w-4/6 rounded bg-neutral-500' />
            </motion.div>
          )}
          {currentStep === 3 && (
            <motion.div
              key={currentStep}
              style={{ opacity }}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              custom={direction}
              className='space-y-2 px-8 absolute inset-0'
            >
              <h3>Paso 3</h3>
              <div className='h-4 w-5/6 rounded bg-neutral-500' />
              <div className='h-4 rounded bg-neutral-500' />
              <div className='h-4 w-4/6 rounded bg-neutral-500' />
            </motion.div>
          )} */}
        {/* </AnimatePresence> */}
      </div>

      <div className='px-8 pb-8'>
        <div className='mt-10 flex justify-between'>
          <button
            onClick={prevStep}
            className={`${
              currentStep === 1 ? 'pointer-events-none opacity-50' : ''
            } duration-350 rounded px-2 py-1 text-neutral-400 transition hover:text-neutral-700`}
          >
            Back
          </button>
          <button
            onClick={nextStep}
            className={`${
              currentStep > steps.length - 1
                ? 'pointer-events-none opacity-50'
                : ''
            } bg duration-350 flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-blue-600 active:bg-blue-700`}
          >
            {currentStep === steps.length ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  )
}
