import type { ReactNode } from 'react'
import type { Industry } from '../../types/industry'
import { curriculumModules } from '../../data/curriculum'
import CurriculumStage, { stageButtonClass } from './CurriculumStage'

interface WhatsNextStepProps {
  industry: Industry
  onReset: () => void
  onPrevious: () => void
  stepNumber: number
  totalSteps: number
  coreComplete: boolean
  checkpoints?: ReactNode
}

export default function WhatsNextStep({
  industry,
  onReset,
  onPrevious,
  stepNumber,
  totalSteps,
  coreComplete,
  checkpoints,
}: WhatsNextStepProps) {
  return (
    <CurriculumStage
      industry={industry}
      content={curriculumModules.whatsnext}
      stepNumber={stepNumber}
      totalSteps={totalSteps}
      checkpoints={checkpoints}
    >
      <button type="button" onClick={onPrevious} className={stageButtonClass}>
        {coreComplete ? 'Back to completion' : 'Back to test and save'}
      </button>
      <button type="button" onClick={onReset} className={stageButtonClass}>
        Choose another use case
      </button>
    </CurriculumStage>
  )
}
