import { useId, useState, type ReactNode } from 'react'
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  FloatingPortal,
  offset,
  safePolygon,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import { glossary } from '../lib/glossary'

interface GlossaryTooltipProps {
  term: string
  children: ReactNode
}

export default function GlossaryTooltip({
  term,
  children,
}: GlossaryTooltipProps) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const entry = glossary[term]
  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'bottom-start',
    middleware: [offset(8), flip(), shift({ padding: 12 })],
    whileElementsMounted: autoUpdate,
  })
  const hover = useHover(context, {
    mouseOnly: true,
    delay: { open: 250 },
    handleClose: safePolygon(),
  })
  const focus = useFocus(context)
  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'dialog' })
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    click,
    dismiss,
    role,
  ])

  if (!entry) return <>{children}</>

  return (
    <>
      <button
        ref={refs.setReference}
        type="button"
        className="inline cursor-help rounded-sm border-b border-dotted border-cyan-700 text-left font-inherit text-cyan-900 hover:bg-cyan-100 dark:border-cyan-300 dark:text-cyan-200 dark:hover:bg-slate-600"
        {...getReferenceProps({ 'aria-label': `Explain ${entry.term}` })}
      >
        {children}
      </button>
      {open && (
        <FloatingPortal>
          <FloatingFocusManager
            context={context}
            modal={false}
            initialFocus={-1}
            returnFocus
          >
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              className="z-50 w-80 max-w-[calc(100vw-1.5rem)] rounded-xl border border-slate-400 bg-white p-4 text-sm text-slate-900 shadow-xl dark:border-slate-500 dark:bg-slate-800 dark:text-slate-100"
              {...getFloatingProps({
                'aria-labelledby': `${id}-title`,
                'aria-describedby': `${id}-definition`,
              })}
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <p id={`${id}-title`} className="font-bold">
                  {entry.term}
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded px-2 py-1 hover:bg-slate-200 dark:hover:bg-slate-600"
                  aria-label={`Close definition of ${entry.term}`}
                >
                  Close
                </button>
              </div>
              <p id={`${id}-definition`} className="leading-relaxed">
                {entry.definition}
              </p>
              {entry.example && (
                <p className="mt-3 rounded bg-slate-100 p-3 leading-relaxed dark:bg-slate-900">
                  <strong>In this lab: </strong>
                  {entry.example}
                </p>
              )}
              {entry.learnMore && (
                <a
                  href={entry.learnMore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-cyan-800 underline hover:text-cyan-950 dark:text-cyan-300 dark:hover:text-cyan-200"
                >
                  Read more about {entry.term} (opens a new tab)
                </a>
              )}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  )
}
