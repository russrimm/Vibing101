import { useEffect, useRef, useState } from 'react'
import IndustrySelector from './components/IndustrySelector'
import LabWizard from './components/LabWizard'
import ThemeToggle from './components/ThemeToggle'
import GlossaryModal from './components/GlossaryModal'
import AboutModal from './components/AboutModal'
import { industries } from './types/industry'
import { useTheme } from './hooks/useTheme'
import { useLabProgress } from './hooks/useLabProgress'
import { emptyIndustryProgress } from './lib/labProgress'
import { auxiliaryReaderHref, followLessonLink } from './lib/readerNavigation'

function App() {
  const { theme, toggleTheme, warning: themeWarning } = useTheme()
  const { data, warning, navigate, updateIndustry, resetIndustry } =
    useLabProgress()
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const mainRef = useRef<HTMLElement>(null)
  const industry = industries.find((item) => item.id === data.activeIndustry)
  const progress = industry
    ? (data.byIndustry[industry.id] ?? emptyIndustryProgress())
    : null
  const routeKey = `${industry?.id ?? ''}:${progress?.currentStep ?? ''}`
  const previousRoute = useRef(window.location.hash ? '' : routeKey)

  useEffect(() => {
    if (previousRoute.current === routeKey) return
    previousRoute.current = routeKey
    const lesson = document.getElementById(window.location.hash.slice(1))
    if (lesson && mainRef.current?.contains(lesson)) {
      lesson.focus()
      lesson.scrollIntoView()
    } else {
      mainRef.current?.querySelector('h1')?.focus()
      window.scrollTo({ top: 0 })
    }
  }, [routeKey])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-white">
      <a
        href={auxiliaryReaderHref(
          'main-content',
          progress?.reading?.[progress.currentStep]
        )}
        onClick={(event) => {
          followLessonLink(event)
          if (event.defaultPrevented) {
            mainRef.current?.focus()
            mainRef.current?.scrollIntoView()
          }
        }}
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4 focus:text-slate-900"
      >
        Skip to lab content
      </a>
      <header className="border-b border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <a
            href="?"
            onClick={(event) => {
              if (
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              )
                return
              event.preventDefault()
              navigate(null)
            }}
            className="font-bold hover:text-cyan-700 dark:hover:text-cyan-300"
          >
            Vibe Coding Lab
          </a>
          <nav aria-label="Lab help" className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsAboutOpen(true)}
              className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => setIsGlossaryOpen(true)}
              className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              Glossary
            </button>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </nav>
        </div>
      </header>

      {(warning || themeWarning) && (
        <div
          role="alert"
          className="mx-auto max-w-7xl p-4 text-amber-900 dark:text-amber-200"
        >
          {warning || themeWarning}
        </div>
      )}

      <main id="main-content" ref={mainRef} tabIndex={-1}>
        {industry && progress ? (
          <LabWizard
            industry={industry}
            progress={progress}
            onReset={() => navigate(null)}
            onNavigate={(step) => navigate(industry.id, step)}
            onUpdate={(update) => updateIndustry(industry.id, update)}
            onClearProgress={() => resetIndustry(industry.id)}
          />
        ) : (
          <IndustrySelector
            onSelectIndustry={(selected) => navigate(selected.id)}
            savedProgress={data.byIndustry}
          />
        )}
      </main>

      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    </div>
  )
}

export default App
