import type { ReactNode } from 'react'
import type { Industry } from '../../types/industry'
import { curriculumModules } from '../../data/curriculum'
import CurriculumStage, { stageButtonClass } from './CurriculumStage'

interface StructureStepProps {
  industry: Industry
  onNext: () => void
  onPrevious: () => void
  canContinue: boolean
  checkpoints?: ReactNode
  stepNumber: number
  totalSteps: number
}

export default function StructureStep({
  industry,
  onNext,
  onPrevious,
  canContinue,
  checkpoints,
  stepNumber,
  totalSteps,
}: StructureStepProps) {
  return (
    <CurriculumStage
      industry={industry}
      content={curriculumModules.structure}
      stepNumber={stepNumber}
      totalSteps={totalSteps}
      checkpoints={checkpoints}
    >
      <p
        id="structure-continue-help"
        className="w-full text-slate-700 dark:text-slate-300"
      >
        Check the results in your browser, then complete the evidence checklist
        above.
      </p>
      <button type="button" onClick={onPrevious} className={stageButtonClass}>
        Back: Setup
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canContinue}
        aria-describedby="structure-continue-help"
        className={stageButtonClass}
      >
        Continue to test
      </button>
    </CurriculumStage>
  )
}
