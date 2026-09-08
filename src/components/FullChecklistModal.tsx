import { WIZARD_CHECKLIST, type WizardStepId } from '../data/wizardChecklist'
import { CORE_STEPS } from '../lib/labProgress'
import Modal from './Modal'

interface FullChecklistModalProps {
  isOpen: boolean
  onClose: () => void
  currentStepId?: WizardStepId
  checkedItems: string[]
}

export default function FullChecklistModal({
  isOpen,
  onClose,
  currentStepId,
  checkedItems,
}: FullChecklistModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} labelledBy="full-checklist-title">
      <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-5 dark:border-slate-700">
        <div>
          <h2 id="full-checklist-title" className="text-xl font-bold">
            Full checklist
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Learner-reported progress. Confirm results on each lesson page.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-slate-400 px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-700"
        >
          Close
        </button>
      </div>
      <div className="space-y-4 p-5">
        {WIZARD_CHECKLIST.map((section) => (
          <details
            key={section.stepId}
            open={section.stepId === currentStepId}
            className="rounded-lg border border-slate-300 p-3 dark:border-slate-600"
          >
            <summary className="cursor-pointer font-semibold">
              {section.title}
              {!CORE_STEPS.includes(section.stepId)
                ? ' (after the core lab)'
                : ''}
            </summary>
            <ul className="mt-3 space-y-3 text-sm">
              {section.items.map((item) => (
                <li key={item.id}>
                  <span className="font-semibold">
                    {CORE_STEPS.includes(section.stepId)
                      ? checkedItems.includes(item.id)
                        ? 'Confirmed: '
                        : 'Not yet confirmed: '
                      : 'Suggested: '}
                  </span>
                  {item.text}
                  {item.detail && (
                    <p className="mt-1 text-slate-600 dark:text-slate-300">
                      {item.detail}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </Modal>
  )
}
