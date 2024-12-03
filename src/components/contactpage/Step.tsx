'use client'

import { motion } from 'motion/react'

export const Step = ({
  step,
  currentStep,
}: {
  step: number
  currentStep: number
}) => {
  const status = currentStep === step ? 'active' : 'inactive'

  return (
    <motion.div
      animate={status}
      className='relative'
    >
      <h2>{step}</h2>
      <div className=''></div>
    </motion.div>
  )
}
