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

// return (
//   <div className='flex min-h-full flex-1 flex-col items-center justify-center bg-gray-900/90 p-4 backdrop-blur-xl sm:aspect-[4/3] md:aspect-[2/1]'>
//     <div className='mx-auto w-full max-w-md rounded-lg bg-white shadow-xl'>
//       <div className='flex justify-between rounded p-8'>
//         {steps.map((step) => (
//           <Step
//             key={step.id}
//             step={step.id}
//             currentStep={currentStep}
//           />
//         ))}
//       </div>

//       {/* Dynamic content based on `step` */}
//       {currentStep === 1 && (
//         <motion.div
//           initial={{ x: direction === 'forward' ? -40 : 40, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
//           className='space-y-2 px-8'
//         >
//           <h3>Paso 1</h3>
//           <div className='h-4 w-5/6 rounded bg-neutral-100' />
//           <div className='h-4 rounded bg-neutral-100' />
//           <div className='h-4 w-4/6 rounded bg-neutral-100' />
//         </motion.div>
//       )}

//       {currentStep === 2 && (
//         <motion.div
//           initial={{ x: direction === 'forward' ? -40 : 40, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
//           className='space-y-2 px-8'
//         >
//           <h3>Paso 2</h3>
//           <div className='h-4 w-5/6 rounded bg-neutral-100' />
//           <div className='h-4 rounded bg-neutral-100' />
//           <div className='h-4 w-4/6 rounded bg-neutral-100' />
//         </motion.div>
//       )}
//       {currentStep === 3 && (
//         <motion.div
//           style={{ opacity }}
//           initial={{ x: direction === 'forward' ? -40 : 40, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
//           className='space-y-2 px-8'
//         >
//           <h3>Paso 3</h3>
//           <div className='h-4 w-5/6 rounded bg-neutral-100' />
//           <div className='h-4 rounded bg-neutral-100' />
//           <div className='h-4 w-4/6 rounded bg-neutral-100' />
//         </motion.div>
//       )}

//       <div className='px-8 pb-8'>
//         <div className='mt-10 flex justify-between'>
//           <button
//             onClick={prevStep}
//             className={`${
//               currentStep === 1 ? 'pointer-events-none opacity-50' : ''
//             } duration-350 rounded px-2 py-1 text-neutral-400 transition hover:text-neutral-700`}
//           >
//             Back
//           </button>
//           <button
//             onClick={nextStep}
//             className={`${
//               currentStep > steps.length
//                 ? 'pointer-events-none opacity-50'
//                 : ''
//             } bg duration-350 flex items-center justify-center rounded-full bg-blue-500 py-1.5 px-3.5 font-medium tracking-tight text-white transition hover:bg-blue-600 active:bg-blue-700`}
//           >
//             {currentStep === steps.length ? 'Finish' : 'Next'}
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// )
