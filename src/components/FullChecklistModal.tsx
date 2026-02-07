import { useEffect, useMemo, useRef, useState } from 'react'
import { type WizardStepId, WIZARD_CHECKLIST } from '../data/wizardChecklist'

interface FullChecklistModalProps {
  isOpen: boolean
  onClose: () => void
  currentStepId?: WizardStepId
}

export default function FullChecklistModal({
  isOpen,
  onClose,
  currentStepId,
}: FullChecklistModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  const [expanded, setExpanded] = useState<Set<WizardStepId>>(
    () => new Set<WizardStepId>(['setup'])
  )

  const sections = useMemo(() => WIZARD_CHECKLIST, [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)

    if (currentStepId) {
      setExpanded((prev) => new Set<WizardStepId>([...prev, currentStepId]))
    }

    closeButtonRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [currentStepId, isOpen, onClose])

  if (!isOpen) return null

  const toggleExpanded = (stepId: WizardStepId) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(stepId)) next.delete(stepId)
      else next.add(stepId)
      return next
    })
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onMouseDown={onClose} />

      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="full-checklist-title"
            className="w-full max-w-3xl rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-white/10"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-5 border-b border-slate-200 dark:border-white/10">
              <div>
                <h2
                  id="full-checklist-title"
                  className="text-xl font-bold text-slate-900 dark:text-white"
                >
                  Full checklist
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  One place to verify everything across steps.
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="shrink-0 px-3 py-2 text-sm font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white border border-slate-200 dark:border-white/10"
              >
                Close
              </button>
            </div>

            <div className="p-5">
              <div className="space-y-3">
                {sections.map((section) => {
                  const isExpanded = expanded.has(section.stepId)
                  const isCurrent = currentStepId === section.stepId

                  return (
                    <div
                      key={section.stepId}
                      className="rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggleExpanded(section.stepId)}
                        className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-slate-50 hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 text-left"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-semibold text-slate-900 dark:text-white">
                              {section.title}
                            </span>
                            {isCurrent && (
                              <span className="text-xs font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-full">
                                current
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                            {section.items.length} item
                            {section.items.length === 1 ? '' : 's'}
                          </p>
                        </div>

                        <span className="text-slate-600 dark:text-slate-300 font-semibold">
                          {isExpanded ? 'Hide' : 'Show'}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="px-4 py-3 bg-white dark:bg-slate-900">
                          <ul className="space-y-2">
                            {section.items.map((item) => (
                              <li key={item.id} className="text-sm">
                                <div className="text-slate-800 dark:text-slate-200">
                                  • {item.text}
                                </div>
                                {item.detail && (
                                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                                    {item.detail}
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="mt-5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-sm text-emerald-800 dark:text-emerald-200">
                  If something looks duplicated between steps, use this list as
                  the source of truth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
