import { WizardStep } from './LabWizard'

interface StepProgressProps {
  steps: { id: WizardStep; title: string; description: string }[]
  currentStep: WizardStep
  completedSteps: Set<WizardStep>
  onStepClick: (stepId: WizardStep) => void
}

export default function StepProgress({
  steps,
  currentStep,
  completedSteps,
  onStepClick,
}: StepProgressProps) {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.has(step.id)
          const isCurrent = currentStep === step.id
          const isClickable =
            isCompleted ||
            isCurrent ||
            index <= steps.findIndex((s) => s.id === currentStep)

          return (
            <li key={step.id} className="flex-1 flex items-center">
              <button
                onClick={() => isClickable && onStepClick(step.id)}
                disabled={!isClickable}
                className={`
                  flex flex-col items-center w-full
                  ${isClickable ? 'cursor-pointer' : 'cursor-not-allowed'}
                `}
              >
                {/* Step Circle */}
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    border-2 transition-all duration-300 mb-2
                    ${
                      isCompleted
                        ? 'bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                        : isCurrent
                          ? 'bg-blue-500 border-blue-400 text-white shadow-lg shadow-blue-500/50'
                          : isClickable
                            ? 'bg-slate-200 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                            : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500'
                    }
                  `}
                >
                  {isCompleted ? (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </div>

                {/* Step Title */}
                <div className="text-center">
                  <div
                    className={`
                      text-xs font-medium transition-colors
                      ${
                        isCurrent
                          ? 'text-cyan-600 dark:text-cyan-400'
                          : isCompleted
                            ? 'text-cyan-500 dark:text-cyan-300'
                            : isClickable
                              ? 'text-slate-700 dark:text-slate-300'
                              : 'text-slate-400 dark:text-slate-500'
                      }
                    `}
                  >
                    {step.title}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 hidden sm:block">
                    {step.description}
                  </div>
                </div>
              </button>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`
                    flex-1 h-0.5 mx-2 transition-colors
                    ${isCompleted ? 'bg-cyan-500/50' : 'bg-slate-300 dark:bg-slate-700'}
                  `}
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
