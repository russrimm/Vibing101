import { useEffect, useMemo, useRef, useState } from 'react'
import { ExternalLink, Search, X } from 'lucide-react'
import glossaryData from '../data/glossary.json'

interface GlossaryEntry {
  term: string
  emoji: string
  definition: string
  example?: string
  learnMore?: string
}

interface GlossaryModalProps {
  isOpen: boolean
  onClose: () => void
}

type GlossaryRecord = Record<string, GlossaryEntry>

export default function GlossaryModal({ isOpen, onClose }: GlossaryModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const searchInputRef = useRef<HTMLInputElement | null>(null)
  const [query, setQuery] = useState('')

  const entries = useMemo(() => {
    const record = glossaryData as GlossaryRecord
    return Object.entries(record)
      .map(([key, value]) => ({ key, ...value }))
      .sort((a, b) => a.term.localeCompare(b.term))
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return entries

    return entries.filter((entry) => {
      const haystack = `${entry.term} ${entry.definition} ${entry.example ?? ''}`
      return haystack.toLowerCase().includes(q)
    })
  }, [entries, query])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        searchInputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) return
    setQuery('')
    window.setTimeout(() => searchInputRef.current?.focus(), 0)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onMouseDown={onClose} />

      <div className="absolute inset-0 overflow-y-auto">
        <div className="min-h-full flex items-center justify-center p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="glossary-title"
            className="w-full max-w-4xl rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-white/10"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-5 border-b border-slate-200 dark:border-white/10">
              <div className="min-w-0">
                <h2
                  id="glossary-title"
                  className="text-xl font-bold text-slate-900 dark:text-white"
                >
                  Glossary
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                  Common vibe coding terms, tools, libraries, and platforms used
                  throughout this site.
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

            <div className="p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                <div className="relative flex-1">
                  <Search
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    ref={searchInputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search terms (Ctrl+K)"
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  Showing{' '}
                  <span className="font-semibold">{filtered.length}</span> of{' '}
                  <span className="font-semibold">{entries.length}</span>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {filtered.map((entry) => (
                  <div
                    key={entry.key}
                    className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xl" aria-hidden="true">
                            {entry.emoji}
                          </span>
                          <h3 className="font-bold text-slate-900 dark:text-white">
                            {entry.term}
                          </h3>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">
                          {entry.definition}
                        </p>

                        {entry.example && (
                          <div className="mt-3 rounded-lg border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-950/30 p-3">
                            <p className="text-xs text-cyan-700 dark:text-cyan-300 font-semibold mb-1">
                              Example
                            </p>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                              {entry.example}
                            </p>
                          </div>
                        )}
                      </div>

                      {entry.learnMore && (
                        <a
                          href={entry.learnMore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 inline-flex items-center gap-1 text-xs text-cyan-700 hover:text-cyan-600 dark:text-cyan-300 dark:hover:text-cyan-200 font-semibold"
                        >
                          Learn more
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    No matches. Try searching for Vite, Node.js, Tailwind, or{' '}
                    CSP.
                  </p>
                </div>
              )}

              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <p className="text-sm text-emerald-800 dark:text-emerald-200">
                  Tip: If you see a dotted underline in the walkthrough, hover
                  (or tap on mobile) to see a quick definition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
