import type { ReactNode } from 'react'
import type { Industry } from '../../types/industry'
import { curriculumModules } from '../../data/curriculum'
import CurriculumStage, { stageButtonClass } from './CurriculumStage'

interface TestingStepProps {
  industry: Industry
  onNext: () => void
  onPrevious: () => void
  canContinue: boolean
  checkpoints?: ReactNode
  stepNumber: number
  totalSteps: number
}

export default function TestingStep({
  industry,
  onNext,
  onPrevious,
  canContinue,
  checkpoints,
  stepNumber,
  totalSteps,
}: TestingStepProps) {
  return (
    <CurriculumStage
      industry={industry}
      content={curriculumModules.testing}
      stepNumber={stepNumber}
      totalSteps={totalSteps}
      checkpoints={checkpoints}
    >
      <p
        id="testing-continue-help"
        className="w-full text-slate-700 dark:text-slate-300"
      >
        Record only checks you performed. Complete the evidence checklist above
        to continue.
      </p>
      <button type="button" onClick={onPrevious} className={stageButtonClass}>
        Back: Plan and build
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canContinue}
        aria-describedby="testing-continue-help"
        className={stageButtonClass}
      >
        Finish core lab
      </button>
    </CurriculumStage>
  )
}
