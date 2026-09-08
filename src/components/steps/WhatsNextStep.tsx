import type { Industry } from '../../types/industry'
import { curriculumModules } from '../../data/curriculum'
import CurriculumStage, { stageButtonClass } from './CurriculumStage'

interface WhatsNextStepProps {
  industry: Industry
  onReset: () => void
  onPrevious: () => void
  stepNumber: number
  totalSteps: number
}

export default function WhatsNextStep({
  industry,
  onReset,
  onPrevious,
  stepNumber,
  totalSteps,
}: WhatsNextStepProps) {
  return (
    <CurriculumStage
      industry={industry}
      content={curriculumModules.whatsnext}
      stepNumber={stepNumber}
      totalSteps={totalSteps}
    >
      <button type="button" onClick={onPrevious} className={stageButtonClass}>
        Back to completion
      </button>
      <button type="button" onClick={onReset} className={stageButtonClass}>
        Choose another use case
      </button>
    </CurriculumStage>
  )
}
