import type { WizardStepId } from '../data/wizardChecklist'
import type { IndustryType } from '../types/industry'
import { CORE_STEPS } from '../lib/labProgress'

interface StepProgressProps {
  steps: { id: WizardStepId; title: string }[]
  industryId: IndustryType
  currentStep: WizardStepId
  completedSteps: Set<WizardStepId>
  coreComplete: boolean
  onStepClick: (stepId: WizardStepId) => void
}

export default function StepProgress({
  steps,
  industryId,
  currentStep,
  completedSteps,
  coreComplete,
  onStepClick,
}: StepProgressProps) {
  return (
    <nav aria-label="Lab steps">
      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {steps.map((step, index) => {
          const available = CORE_STEPS.includes(step.id) || coreComplete
          const current = currentStep === step.id
          const label = `${index + 1}. ${step.title}`
          const style = `block h-full rounded-lg border p-3 text-sm ${
            current
              ? 'border-cyan-700 bg-cyan-800 text-white'
              : 'border-slate-300 bg-white text-slate-800 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200'
          }`
          return (
            <li key={step.id}>
              {available ? (
                <a
                  href={`?industry=${industryId}&step=${step.id}`}
                  aria-current={current ? 'step' : undefined}
                  onClick={(event) => {
                    if (
                      event.metaKey ||
                      event.ctrlKey ||
                      event.shiftKey ||
                      event.altKey
                    )
                      return
                    event.preventDefault()
                    onStepClick(step.id)
                  }}
                  className={`${style} hover:border-cyan-500`}
                >
                  {label}
                  {completedSteps.has(step.id) && (
                    <span className="mt-1 block text-xs">
                      Checkpoints confirmed
                    </span>
                  )}
                </a>
              ) : (
                <span aria-disabled="true" className={style}>
                  {label}
                  <span className="mt-1 block text-xs">
                    Confirm core checkpoints first
                  </span>
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
