import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onMouseDown={onClose} />

      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-title"
            className="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-white/10"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-5 border-b border-slate-200 dark:border-white/10">
              <div className="min-w-0">
                <h2
                  id="about-title"
                  className="text-xl font-bold text-slate-900 dark:text-white"
                >
                  About
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Why this lab exists and who made it.
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="shrink-0 inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white border border-slate-200 dark:border-white/10"
              >
                <X size={16} />
                Close
              </button>
            </div>

            <div className="p-5 space-y-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Hi — I’m <span className="font-semibold">Russ Rimmerman</span>.
                I created this experience using code because I want to help more
                people realize the potential of this new technological
                breakthrough.
              </p>

              <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  If you use this and something clicks for you, that’s the win.
                  Share it with a teammate, and keep experimenting.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href="mailto:russrimm@gmail.com"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-cyan-800 hover:bg-cyan-700 text-white text-sm font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  Email Russ
                </a>
                <a
                  href="https://www.linkedin.com/in/russrimm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-sm dark:bg-slate-700 dark:hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
