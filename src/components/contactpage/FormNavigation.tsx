import { motion } from 'motion/react'
import { Step } from '@/components/contactpage/MultiStep'

interface Props {
  currentStep: number
  nextStep: () => void
  prevStep: () => void
  initialStep: () => void
  steps: Step[]
}

export const FormNavigation = ({
  currentStep,
  nextStep,
  prevStep,
  initialStep,
  steps,
}: Props) => {
  return (
    <div className='my-14 px-2 flex justify-around '>
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{
          duration: 1.2,
          type: 'spring',
          stiffness: 300,
          damping: 10,
        }}
        onClick={currentStep === steps.length - 1 ? initialStep : prevStep}
        className={`${
          currentStep === 0 ? 'pointer-events-none opacity-50' : ''
        } border border-dark/40  rounded-full font-headings py-1.5 px-3.5 text-dark  text-lg`}
      >
        {currentStep === steps.length - 1 ? 'Inicio' : 'Atrás'}
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        layout
        onClick={nextStep}
        className={`${
          currentStep + 1 > steps.length ? 'pointer-events-none opacity-50' : ''
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
          {/* {currentStep + 1 === steps.length - 1
            ? 'Completar'
            : currentStep + 1 === steps.length
            ? 'Completado'
            : 'Siguiente'} */}
          {currentStep + 1 === steps.length ? 'Completar' : 'Siguiente'}
        </motion.span>
      </motion.button>
    </div>
  )
}
