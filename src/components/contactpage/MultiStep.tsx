'use client'

import { useState } from 'react'

import { FormUser, FormComplete, FormMap } from '@/components'

import {
  CheckContact,
  PersonalInfoContact,
  StelarMapContact,
} from '@/components/icons'

import { cn } from '@/utils'
import { motion } from 'motion/react'
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormRegister,
} from 'react-hook-form'
import { FormContact, formContactSchema } from '@/validations'
import { zodResolver } from '@hookform/resolvers/zod'

const steps = [
  {
    id: 1,
    name: 'Información del Usuario',
    description: 'Información del usuario',
    icon: () => <PersonalInfoContact />,
    fields: ['name', 'email', 'address', 'city', 'postalCode'],
    form: ({
      register,
      errors,
      currentStep,
    }: {
      register: UseFormRegister<FormContact>
      errors: FieldErrors<FormContact>
      currentStep: number
    }) => (
      <FormUser
        register={register}
        errors={errors}
        currentStep={currentStep}
      />
    ),
  },
  {
    id: 2,
    name: 'Mapa Estelar',
    description: 'Datos del mapa estelar',
    icon: () => <StelarMapContact />,
    fields: ['event', 'city-event'],
    form: ({
      register,
      errors,
      currentStep,
    }: {
      register: UseFormRegister<FormContact>
      errors: FieldErrors<FormContact>
      currentStep: number
    }) => (
      <FormMap
        register={register}
        errors={errors}
        currentStep={currentStep}
      />
    ),
  },
  {
    id: 3,
    name: 'Complete',
    icon: () => <CheckContact />,
    description: 'Formulario completado',
    form: () => <FormComplete />,
  },
]

type FieldName = keyof FormContact

export const MultiStep = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<FormContact>({
    resolver: zodResolver(formContactSchema),
  })

  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = async () => {
    const fields = steps[currentStep].fields
    const output = await trigger(fields as FieldName[], { shouldFocus: true })

    console.log({ output })

    if (!output) return

    if (currentStep <= steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)()
      }
      setCurrentStep((step) => step + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1)
    }
  }

  const processForm: SubmitHandler<FormContact> = (data) => {
    console.log({ data })
  }

  console.log({ errors })

  return (
    <div className='w-full px-2'>
      <ol className='overflow-hidden lg:space-y-0 lg:gap-4 space-y-8 flex flex-col items-center lg:flex-row justify-center max-w-6xl mx-auto'>
        {steps.map((step) => (
          <li
            key={step.id}
            className={cn(
              "w-[min(100%,480px)] after:-translate-x-1/2 relative flex-1 after:content-['']  after:w-0.5 after:h-full after:inline-block after:absolute after:-bottom-11  lg:after:h-[2px] lg:after:w-4 after:left-1/2  lg:after:left-auto lg:after:-right-6 lg:after:top-1/2 after:transition-all after:duration-700",
              currentStep + 1 === step.id ? 'after:bg-[var(--primary)] ' : ''
            )}
          >
            <div className='flex items-center justify-center gap-8 w-full '>
              <div
                className={cn(
                  'transition-all border border-gray-300 duration-700 flex items-center gap-3.5 bg-white p-3.5 rounded-xl relative z-10  w-full',
                  currentStep + 1 === step.id ? 'border-[var(--primary)]' : ''
                )}
              >
                <div
                  className={cn(
                    'rounded-lg transition-all duration-700 flex items-center justify-center',
                    currentStep + 1 === step.id || currentStep + 1 > step.id
                      ? 'bg-[var(--primary)]'
                      : 'bg-gray-300'
                  )}
                >
                  <span
                    className={cn(
                      'transition-all duration-700 p-3',
                      currentStep + 1 === step.id || currentStep + 1 > step.id
                        ? 'text-white'
                        : 'text-gray-600'
                    )}
                  >
                    {step.icon()}
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

      <div className='relative flex flex-col max-w-3xl mx-auto overflow-hidden lg:mt-16'>
        <form
          className='order-1 lg:order-none '
          onSubmit={handleSubmit(processForm)}
        >
          <div
            className='flex transition-all duration-1000 ease-[var(--ease)]'
            style={{ translate: `-${currentStep * 100}%` }}
          >
            {steps.map((step) => (
              <div
                key={step.id}
                className='w-full flex-shrink-0 '
              >
                {step.form({ register, errors, currentStep })}
              </div>
            ))}
          </div>
        </form>

        <div className='mt-12 px-2 flex justify-between pb-10  lg:justify-start lg:gap-6'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 1.2,
              type: 'spring', // Usa un efecto de resorte para el rebote
              stiffness: 300, // Controla la rigidez del resorte
              damping: 10,
            }}
            onClick={prevStep}
            className={`${
              currentStep === 0 ? 'pointer-events-none opacity-50' : ''
            } border border-dark/40  rounded-full font-headings py-1.5 px-3.5 text-dark  text-lg`}
          >
            Atrás
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            layout
            onClick={nextStep}
            className={`${
              currentStep + 1 > steps.length - 1
                ? 'pointer-events-none opacity-50'
                : ''
            } rounded-full bg-primary py-1.5 px-3.5 font-medium  flex items-center justify-center`}
            transition={{
              duration: 1.2,
              type: 'spring', // Usa un efecto de resorte para el rebote
              stiffness: 300, // Controla la rigidez del resorte
              damping: 10,
            }}
          >
            <motion.span
              layout
              transition={{ duration: 0.2 }}
              className='font-headings text-lg text-white'
            >
              {currentStep + 1 === steps.length ? 'Completado' : 'Siguiente'}
            </motion.span>
          </motion.button>
        </div>
      </div>
    </div>
  )
}
