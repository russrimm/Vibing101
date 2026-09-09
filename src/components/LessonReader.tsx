import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react'
import MarkdownRenderer from './MarkdownRenderer'
import { lessonOutline, lessonSections } from '../lib/lessonOutline'
import {
  followLessonLink,
  navigateReader,
  readerHref,
  readerLocation,
  readingAnchor,
  readingMode,
  subscribeToReaderLocation,
} from '../lib/readerNavigation'
import { useReadingPosition } from '../hooks/useReadingPosition'

interface LessonReaderProps {
  content: string
}

const readerLinkClass =
  'inline-block rounded-lg border border-slate-400 px-4 py-3 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-700'

export default function LessonReader({ content }: LessonReaderProps) {
  const [explainTerms, setExplainTerms] = useState(true)
  const location = useSyncExternalStore(
    subscribeToReaderLocation,
    readerLocation
  )
  const previousLocation = useRef(location)
  const root = useRef<HTMLDivElement>(null)
  const savedPosition = useReadingPosition()
  const url = new URL(location)
  const mode = readingMode(url.search)
  const anchor = url.hash.slice(1)
  const outline = useMemo(() => lessonOutline(content), [content])
  const sections = useMemo(() => lessonSections(content), [content])
  const requestedIndex = sections.findIndex((section) =>
    section.headings.some((heading) => heading.id === anchor)
  )
  const retainedAnchor = readingAnchor(url, savedPosition?.anchor)
  const retainedIndex = sections.findIndex((item) =>
    item.headings.some((heading) => heading.id === retainedAnchor)
  )
  const index = Math.max(
    0,
    requestedIndex >= 0 ? requestedIndex : retainedIndex
  )
  const section = sections[index]
  const previous = sections[index - 1]
  const next = sections[index + 1]
  const guided = mode === 'guided' && Boolean(section)
  const invalidAnchor = anchor.startsWith('lab-') && requestedIndex === -1
  const map = outline.filter(
    (heading) => heading.level === 1 || /^Step \d+:/.test(heading.title)
  )

  useEffect(() => {
    if (previousLocation.current === location) return
    previousLocation.current = location
    const target = document.getElementById(anchor)
    if (target) {
      target.focus()
      target.scrollIntoView({ block: 'start' })
    } else if (guided) {
      root.current?.querySelector<HTMLElement>('h2')?.focus()
    }
  }, [location, anchor, guided])

  return (
    <div ref={root}>
      <div className="mb-6 rounded-xl border border-cyan-700 bg-cyan-50 p-4 dark:bg-slate-900">
        <p className="font-semibold">Small steps. No memorizing required.</p>
        <p className="mt-2 text-sm leading-relaxed">
          Follow one numbered step, try its check, then move on.
          Dotted-underlined words explain themselves: hover, focus with Tab, or
          tap. Press Escape to close a definition. The Glossary is always
          available above.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <a
            href={readerHref(
              guided ? 'full' : 'guided',
              requestedIndex >= 0 ? anchor : (section?.id ?? '')
            )}
            onClick={followLessonLink}
            className={readerLinkClass}
          >
            {guided ? 'Show full lesson' : 'Read one step at a time'}
          </a>
          <button
            type="button"
            aria-pressed={explainTerms}
            onClick={() => setExplainTerms((value) => !value)}
            className={readerLinkClass}
          >
            {explainTerms ? 'Hide word explanations' : 'Show word explanations'}
          </button>
        </div>
        {guided && section ? (
          <div className="mt-4 border-t border-slate-400 pt-3">
            <label
              htmlFor="reader-section"
              className="mb-2 block text-sm font-semibold"
            >
              Choose a section
            </label>
            <select
              id="reader-section"
              name="reader-section"
              value={section.id}
              onChange={(event) =>
                navigateReader(readerHref('guided', event.target.value))
              }
              className="w-full min-w-0 rounded-lg border border-slate-400 bg-white p-3 text-sm text-slate-900 dark:bg-slate-800 dark:text-slate-100"
            >
              {sections.map((item, itemIndex) => (
                <option key={item.id} value={item.id}>
                  {itemIndex + 1}.{' '}
                  {item.moduleId.toUpperCase().replace('-', ' ')} / {item.title}
                </option>
              ))}
            </select>
            <p role="status" className="mt-3 text-sm">
              Reading section {index + 1} of {sections.length}. Reading is not
              verification; only your evidence checkpoints count toward
              completion.
            </p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Your section link can be bookmarked. Resume this lab returns to
              your saved place when browser storage is available. Show full
              lesson includes all steps and troubleshooting; it does not reset
              your work.
            </p>
          </div>
        ) : (
          <nav
            aria-label="Lesson map"
            className="mt-4 border-t border-slate-400 pt-3"
          >
            <p className="mb-2 text-sm font-semibold">
              Find your next small step
            </p>
            <ul className="grid gap-2 text-sm sm:grid-cols-2">
              {map.map((heading) => (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    className="inline-block py-1 text-cyan-900 underline hover:text-cyan-700 dark:text-cyan-200 dark:hover:text-white"
                  >
                    {heading.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      {invalidAnchor && (
        <p
          role="alert"
          className="mb-4 rounded-lg bg-amber-50 p-4 text-amber-950 dark:bg-amber-950 dark:text-amber-100"
        >
          This section link is no longer in the current lesson. Start with the
          overview below or choose another section. Your evidence is unchanged.
        </p>
      )}
      {guided && section ? (
        <>
          {section.id !== section.moduleId && (
            <h2 className="mb-4 text-xl font-bold">{section.moduleTitle}</h2>
          )}
          <MarkdownRenderer
            key={section.id}
            content={section.content}
            headings={section.headings}
            explainTerms={explainTerms}
          />
          <nav
            aria-label="Reading sections"
            className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-300 pt-4 dark:border-slate-600"
          >
            {previous ? (
              <a
                href={readerHref('guided', previous.id)}
                onClick={followLessonLink}
                className={readerLinkClass}
              >
                Previous section
              </a>
            ) : (
              <span className="text-sm text-slate-600 dark:text-slate-300">
                Start of this lesson
              </span>
            )}
            {next ? (
              <a
                href={readerHref('guided', next.id)}
                onClick={followLessonLink}
                className={readerLinkClass}
              >
                Next section: {next.title}
              </a>
            ) : (
              <p className="text-sm font-semibold">
                End of the reading. Review your evidence below.
              </p>
            )}
          </nav>
        </>
      ) : (
        <MarkdownRenderer
          content={content}
          headings={outline}
          explainTerms={explainTerms}
        />
      )}
    </div>
  )
}
