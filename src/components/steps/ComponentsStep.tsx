import type { Industry } from '../../types/industry'
import CurriculumStage, { stageButtonClass } from './CurriculumStage'

interface ComponentsStepProps {
  industry: Industry
  onNext: () => void
  onPrevious: () => void
}

export default function ComponentsStep({
  industry,
  onNext,
  onPrevious,
}: ComponentsStepProps) {
  return (
    <CurriculumStage
      industry={industry}
      content={`# Component practice: moved into the core lab

This older standalone stage is not part of the current beginner route.
Follow [Lab 02: Build one feature at a time](lab-02-build.md) in your
GitHub Copilot desktop app session. It introduces a list, a labeled form,
and status/search controls in small, verified increments.

Do not ask Copilot to generate an entire component library at once.
Keep one record type, synthetic data, and the existing working behavior.
After each change, preview it, try a valid and invalid input, and review the diff.`}
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
