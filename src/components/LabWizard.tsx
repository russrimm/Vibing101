import { useState } from 'react'
import type { Industry } from '../types/industry'
import { WIZARD_CHECKLIST, type WizardStepId } from '../data/wizardChecklist'
import {
  CORE_STEPS,
  canViewStep,
  isCoreComplete,
  isStepComplete,
  labHref,
  type IndustryProgress,
} from '../lib/labProgress'
import StepProgress from './StepProgress'
import SetupStep from './steps/SetupStep'
import StructureStep from './steps/StructureStep'
import TestingStep from './steps/TestingStep'
import CompletionStep from './steps/CompletionStep'
import WhatsNextStep from './steps/WhatsNextStep'
import FullChecklistModal from './FullChecklistModal'
import CheckpointPanel from './CheckpointPanel'
import Modal from './Modal'
import { ReadingPositionContext } from '../hooks/useReadingPosition'
import { auxiliaryReaderHref, followLessonLink } from '../lib/readerNavigation'

interface LabWizardProps {
  industry: Industry
  progress: IndustryProgress
  onReset: () => void
  onNavigate: (step: WizardStepId) => void
  onUpdate: (update: Partial<IndustryProgress>) => void
  onClearProgress: () => void
}

export type WizardStep = WizardStepId

const steps = WIZARD_CHECKLIST.map((section) => ({
  id: section.stepId,
  title: section.title,
}))

export default function LabWizard({
  industry,
  progress,
  onReset,
  onNavigate,
  onUpdate,
  onClearProgress,
}: LabWizardProps) {
  const [isChecklistOpen, setIsChecklistOpen] = useState(false)
  const [isResetOpen, setIsResetOpen] = useState(false)
  const { currentStep, checkedItems, notes } = progress
  const currentIndex = steps.findIndex((step) => step.id === currentStep)
  const currentSection = WIZARD_CHECKLIST.find(
    (section) => section.stepId === currentStep
  )
  const completedSteps = new Set(
    CORE_STEPS.filter((step) => isStepComplete(step, checkedItems))
  )
  const coreComplete = isCoreComplete(checkedItems)
  const canContinue = CORE_STEPS.slice(
    0,
    CORE_STEPS.indexOf(currentStep) + 1
  ).every((step) => completedSteps.has(step))

  const handleNext = () => {
    const next = steps[currentIndex + 1]
    if (next && canContinue && canViewStep(next.id, checkedItems)) {
      onNavigate(next.id)
    }
  }

  const handlePrevious = () => {
    const previous = steps[currentIndex - 1]
    if (previous) onNavigate(previous.id)
  }

  const downloadEvidence = () => {
    const content = [
      `Vibe Coding Lab: ${industry.sampleApp.name}`,
      `Exported: ${new Date().toISOString()}`,
      'Learner-reported results, not independently verified by the portal.',
      `Reading position: ${new URL(labHref(industry.id, currentStep, progress.reading?.[currentStep]), window.location.href).href}`,
      'This link opens the lesson only. It does not include notes or checkpoint results.',
      '',
      ...WIZARD_CHECKLIST.filter(
        (section) => section.stepId !== 'completion'
      ).flatMap((section) => [
        section.title,
        ...section.items.map(
          (item) =>
            `[${checkedItems.includes(item.id) ? 'x' : ' '}] ${item.text}`
        ),
        '',
      ]),
      'My evidence and notes (use demo data only):',
      notes,
    ].join('\n')
    const url = URL.createObjectURL(new Blob([content], { type: 'text/plain' }))
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `${industry.id}-lab-evidence.txt`
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
    window.setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  const stageProps = {
    industry,
    onNext: handleNext,
    onPrevious: handlePrevious,
    stepNumber: currentIndex + 1,
    totalSteps: steps.length,
    canContinue,
    checkpoints:
      currentSection && currentStep !== 'completion' ? (
        <CheckpointPanel
          section={currentSection}
          optional={currentStep === 'whatsnext'}
          checkedItems={checkedItems}
          onToggle={(id, checked) =>
            onUpdate({
              checkedItems: checked
                ? [...new Set([...checkedItems, id])]
                : checkedItems.filter((item) => item !== id),
            })
          }
        />
      ) : undefined,
  }

  return (
    <ReadingPositionContext.Provider value={progress.reading?.[currentStep]}>
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold text-cyan-800 dark:text-cyan-300">
              GitHub Copilot desktop app / {industry.name}
            </p>
            <h1 tabIndex={-1} className="text-2xl font-bold sm:text-3xl">
              <span aria-hidden="true">{industry.icon} </span>
              {industry.sampleApp.name}
            </h1>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Local demo, not a production system. Progress stays in this
              browser.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setIsChecklistOpen(true)}
              className="rounded-lg border border-slate-400 px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              Full checklist
            </button>
            <button
              type="button"
              onClick={onReset}
              className="rounded-lg border border-slate-400 px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              Change use case
            </button>
          </div>
        </div>

        <StepProgress
          steps={steps}
          industryId={industry.id}
          currentStep={currentStep}
          completedSteps={completedSteps}
          coreComplete={coreComplete}
          onStepClick={onNavigate}
          reading={progress.reading}
        />

        <div className="mx-auto mt-6 max-w-4xl">
          {!canContinue && CORE_STEPS.includes(currentStep) && (
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
              You may read ahead using the step links. To continue or finish,
              confirm the checkpoints for this step and the earlier steps.
            </p>
          )}
          {currentStep !== 'completion' && (
            <a
              href={auxiliaryReaderHref(
                'checkpoint-title',
                progress.reading?.[currentStep]
              )}
              onClick={followLessonLink}
              className="mb-4 inline-block text-sm font-semibold text-cyan-800 underline dark:text-cyan-300"
            >
              Jump to this lesson&apos;s checkpoints
            </a>
          )}

          {currentStep === 'setup' && <SetupStep {...stageProps} />}
          {currentStep === 'structure' && <StructureStep {...stageProps} />}
          {currentStep === 'testing' && <TestingStep {...stageProps} />}
          {currentStep === 'completion' && coreComplete && (
            <CompletionStep
              {...stageProps}
              onReset={onReset}
              onWhatsNext={() => onNavigate('whatsnext')}
            />
          )}
          {currentStep === 'whatsnext' && (
            <WhatsNextStep
              {...stageProps}
              coreComplete={coreComplete}
              onPrevious={
                coreComplete ? handlePrevious : () => onNavigate('testing')
              }
              onReset={onReset}
            />
          )}

          <section className="mt-6 rounded-xl border border-slate-300 bg-white p-5 dark:border-slate-600 dark:bg-slate-800">
            <h2 className="text-xl font-bold">Evidence and recovery</h2>
            <label
              htmlFor="lab-notes"
              className="mt-3 block text-sm font-semibold"
            >
              Your test results, preview address, and next step
            </label>
            <p
              id="notes-help"
              className="my-2 text-sm text-slate-600 dark:text-slate-300"
            >
              Optional: record expected vs. actual results and build output.
              Never paste secrets or personal data. Clearing browser data
              removes these notes; use Download evidence to keep a copy.
            </p>
            <textarea
              id="lab-notes"
              name="lab-notes"
              aria-describedby="notes-help"
              autoComplete="off"
              rows={4}
              value={notes}
              onChange={(event) => onUpdate({ notes: event.target.value })}
              className="w-full rounded-lg border border-slate-400 bg-white p-3 dark:bg-slate-900"
            />
            <div className="mt-3 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={downloadEvidence}
                className="rounded-lg bg-cyan-800 px-4 py-3 font-semibold text-white hover:bg-cyan-900"
              >
                Download evidence
              </button>
              <button
                type="button"
                onClick={() => setIsResetOpen(true)}
                className="rounded-lg border border-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                Reset this use case
              </button>
            </div>
          </section>
        </div>

        <FullChecklistModal
          isOpen={isChecklistOpen}
          onClose={() => setIsChecklistOpen(false)}
          currentStepId={currentStep}
          checkedItems={checkedItems}
        />
        <Modal
          isOpen={isResetOpen}
          onClose={() => setIsResetOpen(false)}
          labelledBy="reset-title"
        >
          <div className="p-6">
            <h2 id="reset-title" className="text-xl font-bold">
              Reset this use case?
            </h2>
            <p className="my-4">
              This clears the {industry.name} checkpoints and notes in this
              browser. It does not delete your app or other use cases. Download
              your evidence first if you want to keep it.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                data-autofocus
                onClick={() => setIsResetOpen(false)}
                className="rounded-lg border border-slate-400 px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                Keep my progress
              </button>
              <button
                type="button"
                onClick={() => {
                  onClearProgress()
                  setIsResetOpen(false)
                }}
                className="rounded-lg bg-red-800 px-4 py-3 text-white hover:bg-red-900"
              >
                Clear checkpoints and notes
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </ReadingPositionContext.Provider>
  )
}
