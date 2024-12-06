'use client'

import { useState } from 'react'

import { FormUser, FormMap, FormComplete } from '@/components'

import {
  CheckContact,
  PersonalInfoContact,
  StelarMapContact,
} from '@/components/icons'

import { cn } from '@/utils'
import { motion } from 'motion/react'
import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { FormContact, formContactSchema } from '@/validations'
import { zodResolver } from '@hookform/resolvers/zod'

const steps = [
  {
    id: 1,
    name: 'Información del Usuario',
    description: 'Información del usuario',
    icon: () => <PersonalInfoContact />,
    fields: ['name', 'email', 'address', 'city', 'postalCode', 'format'],
  },
  {
    id: 2,
    name: 'Mapa Estelar',
    description: 'Datos del mapa estelar',
    icon: () => <StelarMapContact />,
    fields: ['event', 'cityEvent', 'dateEvent', 'comments', 'terms'],
  },
  {
    id: 3,
    name: 'Complete',
    icon: () => <CheckContact />,
    description: 'Formulario completado',
  },
]

type FieldName = keyof FormContact
export type Format = 'fisico' | 'digital'

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

  // observar el campo "format" para mostrar de forma condicional los campos del formulario FormUser
  const format = useWatch({
    control,
    name: 'format',
  })

  console.log({ format })

  // useEffect(() => {
  //   if (format === 'digital') {
  //     reset({
  //       city: undefined,
  //       postalCode: undefined,
  //       address: undefined,
  //       format: format,
  //     })
  //   }
  // }, [format, reset])

  const [currentStep, setCurrentStep] = useState(0)

  const initialStep = () => {
    setCurrentStep(0)
  }

  const nextStep = async () => {
    let fields: string[] = []
    if (format === 'digital' && currentStep === 0) {
      fields = ['name', 'email', 'format']
    } else {
      fields = steps[currentStep]?.fields ?? []
    }
    const output = await trigger(fields as FieldName[], { shouldFocus: true })

    // console.log({ output, errors, fields })

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
    reset()
  }

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

      <div className='relative flex flex-col max-w-3xl mx-auto overflow-hidden '>
        {/* {currentStep === steps.length - 1 && (
          <div onClick={initialStep}>Nuevo mensaje</div>
        )} */}
        {/* {currentStep !== steps.length - 1 && ( */}
        <div className='my-14 px-2 flex justify-around '>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{
              duration: 1.2,
              type: 'spring',
              stiffness: 300,
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
              {currentStep + 1 === steps.length - 1
                ? 'Completar'
                : currentStep + 1 === steps.length
                ? 'Completado'
                : 'Siguiente'}
              {/* {currentStep + 1 === steps.length ? 'Completado' : 'Siguiente'} */}
            </motion.span>
          </motion.button>
        </div>
        {/* )} */}
        <form
          className=' '
          onSubmit={handleSubmit(processForm)}
        >
          {/* <div className='flex flex-col gap-4 items-center my-12'>
            <h3 className='text-center'>
              Elige el formato que desees recibir:
            </h3>
            <div className='flex gap-4'>
              <div className='inline-flex items-center'>
                <label
                  className='relative flex items-center cursor-pointer'
                  htmlFor='fisico'
                >
                  <input
                    {...register('format')}
                    type='radio'
                    value='fisico'
                    className='peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all'
                    id='fisico'
                  />
                  <span className='absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></span>
                </label>
                <label
                  className='ml-2 text-slate-600 cursor-pointer text-lg'
                  htmlFor='fisico'
                >
                  Físico
                </label>
              </div>

              <div className='inline-flex items-center'>
                <label
                  className='relative flex items-center cursor-pointer'
                  htmlFor='digital'
                >
                  <input
                    {...register('format')}
                    type='radio'
                    value='digital'
                    className='peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all'
                    id='digital'
                  />
                  <span className='absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></span>
                </label>
                <label
                  className='ml-2 text-slate-600 cursor-pointer text-lg'
                  htmlFor='digital'
                >
                  Digital
                </label>
              </div>
            </div>
            {errors.format?.message && (
              <p className='my-4  text-base text-light bg-primary px-3 rounded-lg'>
                {errors.format?.message}
              </p>
            )}
          </div> */}
          <div
            className='flex transition-all duration-1000 ease-[var(--ease)]'
            style={{ translate: `-${currentStep * 100}%` }}
          >
            {steps.map((step) => (
              <div
                key={step.id}
                className='w-full flex-shrink-0 '
              >
                {step.id === 1 && (
                  <FormUser
                    reset={reset}
                    format={format}
                    register={register}
                    errors={errors}
                    currentStep={currentStep}
                  />
                )}
                {step.id === 2 && (
                  <FormMap
                    register={register}
                    errors={errors}
                    currentStep={currentStep}
                    control={control}
                  />
                )}
                {step.id === 3 && <FormComplete />}
              </div>
            ))}
          </div>
        </form>

        {currentStep === steps.length - 1 && (
          <div onClick={initialStep}>Envia Otro mensaje</div>
        )}
        {currentStep !== steps.length - 1 && (
          <div className='mt-14 px-2 flex justify-around '>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{
                duration: 1.2,
                type: 'spring',
                stiffness: 300,
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
        )}
      </div>
    </div>
  )
}
