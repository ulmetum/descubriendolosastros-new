import { cn } from '@/utils/mergeClass'
import { Step } from '@/components/productspage/MultiStepProducts'

interface Props {
  currentStep: number
  steps: Step[]
}

export const FormSteps = ({ currentStep, steps }: Props) => {
  return (
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
                currentStep + 1 === step.id ? 'border-[var(--primary)] ' : ''
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
  )
}
