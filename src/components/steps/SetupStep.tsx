import type { ReactNode } from 'react'
import type { Industry } from '../../types/industry'
import { curriculumModules } from '../../data/curriculum'
import CurriculumStage, { stageButtonClass } from './CurriculumStage'

interface SetupStepProps {
  industry: Industry
  onNext: () => void
  canContinue: boolean
  checkpoints?: ReactNode
  stepNumber: number
  totalSteps: number
}

export default function SetupStep({
  industry,
  onNext,
  canContinue,
  checkpoints,
  stepNumber,
  totalSteps,
}: SetupStepProps) {
  return (
    <CurriculumStage
      industry={industry}
      content={curriculumModules.setup}
      stepNumber={stepNumber}
      totalSteps={totalSteps}
      checkpoints={checkpoints}
    >
      <p
        id="setup-continue-help"
        className="w-full text-slate-700 dark:text-slate-300"
      >
        Complete the evidence checklist above before continuing.
      </p>
      <button
        type="button"
        onClick={onNext}
        disabled={!canContinue}
        aria-describedby="setup-continue-help"
        className={stageButtonClass}
      >
        Continue to build
      </button>
    </CurriculumStage>
  )
}
