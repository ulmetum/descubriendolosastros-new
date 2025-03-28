'use client'

import { JSX, useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// Components
import { PersonalInfoContact } from '@/components/icons/PersonalInfoContact.icon'
import { StelarMapContact } from '@/components/icons/StelarMapContact.icon'
import { FormSteps } from '@/components/contactpage/FormSteps'
import { FormNavigation } from '@/components/contactpage/FormNavigation'
import { FormUser } from '@/components/contactpage/FormUser'
import { FormMap } from '@/components/contactpage/FormMap'
import { FormProductComplete } from '@/components/contactpage/FormProductComplete'
import { CheckContact } from '@/components/icons/CheckContact.icon'

import {
  formProducts,
  formProductsSchema,
} from '@/validations/form-products.schema'
import { redirect } from 'next/navigation'
import { products } from '@/app/productos/data'
import { sendEmailProductsAction } from '@/actions/brevo/send-email-products.action'
import { sendEmailResponseProductsAction } from '@/actions/brevo/send-email-response-products.action'

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
    name: 'Usuario',
    description: 'Información del usuario',
    icon: () => <PersonalInfoContact />,
    fields: ['name', 'email', 'city', 'postalCode'],
  },
  {
    id: 2,
    name: 'Pedido',
    description: 'Información del pedido',
    icon: () => <StelarMapContact />,
    fields: [
      'product',
      'event',
      'countryEvent',
      'cityEvent',
      'dateEvent',
      'timeEvent',
      'terms',
    ],
  },
  {
    id: 3,
    name: 'Completado',
    description: 'Formulario completado',
    icon: () => <CheckContact />,
  },
]

type FieldName = keyof formProducts

export const MultiStepProducts = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    trigger,
    watch,
    formState: { errors },
  } = useForm<formProducts>({
    // Esto permite que solo se validen los campos visibles en el DOM
    shouldUnregister: true,
    resolver: zodResolver(formProductsSchema),
  })
  const selectedProduct = watch('product')

  const [currentStep, setCurrentStep] = useState(0)

  const initialStep = () => {
    setCurrentStep(0)
  }

  const nextStep = async () => {
    const fields = steps[currentStep]?.fields ?? []

    const valid = await trigger(fields as FieldName[], { shouldFocus: true })

    if (!valid) return

    if (currentStep <= steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)()
        return
      }
      setCurrentStep((step) => step + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1)
    }
  }

  const handlePay = async (productId: string) => {
    const product = products.find((product) => product.id === productId)

    if (!product) {
      throw new Error('Producto no encontrado') // Esto está bien
    }

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify(product),
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error || 'Error desconocido en el pago')
      }

      return { url: data.session.url as string }
    } catch (error) {
      return {
        error,
      }
    }
  }

  const processForm: SubmitHandler<formProducts> = async (data) => {
    await sendEmailProductsAction(data)

    setCurrentStep((step) => step + 1)

    const { url, error } = await handlePay(data.product)
    if (error || !url) {
      console.log({ error })
      return
    }

    await sendEmailResponseProductsAction(data)

    reset()
    redirect(url)
  }

  return (
    <div className='w-full px-2'>
      <FormSteps
        currentStep={currentStep}
        steps={steps}
      />
      <div className='relative flex flex-col max-w-3xl mx-auto overflow-hidden '>
        {/* {!hasErrorSend && ( */}
        <FormNavigation
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
          initialStep={initialStep}
          steps={steps}
          classNames='mt-14'
        />
        {/* )} */}

        <form
          className='my-14'
          onSubmit={handleSubmit(processForm)}
        >
          <div
            className='flex transition-all duration-1000 ease-[var(--ease)]'
            style={{ transform: `translateX(-${currentStep * 100}%)` }}
          >
            {steps.map((step) => (
              <div
                key={step.id}
                className='w-full flex-shrink-0 '
              >
                {step.id === 1 && (
                  <FormUser
                    reset={reset}
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
                    selectedProduct={selectedProduct}
                  />
                )}
                {step.id === 3 && <FormProductComplete />}
              </div>
            ))}
          </div>
        </form>
        {/* {!hasErrorSend && ( */}
        <FormNavigation
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
          initialStep={initialStep}
          steps={steps}
          classNames='mb-14'
        />
        {/* )} */}
      </div>
    </div>
  )
}
