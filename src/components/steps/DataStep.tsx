import type { Industry } from '../../types/industry'
import CurriculumStage, { stageButtonClass } from './CurriculumStage'

interface DataStepProps {
  industry: Industry
  onNext: () => void
  onPrevious: () => void
}

export default function DataStep({
  industry,
  onNext,
  onPrevious,
}: DataStepProps) {
  return (
    <CurriculumStage
      industry={industry}
      content={`# Browser storage: moved into the core lab

This older standalone stage is not part of the current beginner route.
Follow the localStorage increment in [Lab 02](lab-02-build.md), then the
refresh test in [Lab 03](lab-03-test-and-save.md).

Use only fictional records. Validate stored data before using it, and show
a warning when reading or writing fails. Browser storage belongs to one
profile and origin; it can be cleared and is not a secure database or backup.
No API, account, or cloud database is needed to complete the beginner lab.`}
    >
      <button type="button" onClick={onPrevious} className={stageButtonClass}>
        Back
      </button>
      <button type="button" onClick={onNext} className={stageButtonClass}>
        Continue
      </button>
    </CurriculumStage>
  )
}
