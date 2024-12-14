'use client'

import { JSX, useState } from 'react'

import { SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// Components
import { PersonalInfoContact } from '@/components/icons/PersonalInfoContact.icon'
import { StelarMapContact } from '@/components/icons/StelarMapContact.icon'
import { CheckContact } from '@/components/icons/CheckContact.icon'
import { FormSteps } from '@/components/contactpage/FormSteps'
import { FormNavigation } from '@/components/contactpage/FormNavigation'
import { FormUser } from '@/components/contactpage/FormUser'
import { FormMap } from '@/components/contactpage/FormMap'
import { FormComplete } from '@/components/contactpage/FormComplete'
import { sendFormSafe } from '@/actions/send-form.action'
import {
  FormContact,
  formContactSchema,
} from '@/validations/form-contact.schema'

export interface Step {
  id: number
  name: string
  description: string
  icon: () => JSX.Element
  fields?: string[]
}

export const steps: Step[] = [
  {
    id: 1,
    name: 'Información del Usuario',
    description: 'Información del usuario',
    icon: () => <PersonalInfoContact />,
    fields: ['name', 'email', 'address', 'city', 'postalCode', 'formatMap'],
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
    name: 'Completado',
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

  // Observar el campo "format" para mostrar de forma condicional los campos del formulario FormUser
  const format = useWatch({
    control,
    name: 'formatMap',
  })

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
    const valid = await trigger(fields as FieldName[], { shouldFocus: true })

    if (!valid) return

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

  const processForm: SubmitHandler<FormContact> = async (data) => {
    await sendFormSafe(data)

    reset()
  }

  return (
    <div className='w-full px-2'>
      <FormSteps
        currentStep={currentStep}
        steps={steps}
      />
      <div className='relative flex flex-col max-w-3xl mx-auto overflow-hidden '>
        <FormNavigation
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
          initialStep={initialStep}
          steps={steps}
        />
        <form
          className=' '
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
        <FormNavigation
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
          initialStep={initialStep}
          steps={steps}
        />
      </div>
    </div>
  )
}
