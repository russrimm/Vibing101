import { industries, type Industry, type IndustryType } from '../types/industry'
import { isCoreComplete, type IndustryProgress } from '../lib/labProgress'

interface IndustrySelectorProps {
  onSelectIndustry: (industry: Industry) => void
  savedProgress: Partial<Record<IndustryType, IndustryProgress>>
}

const suggestedOrder = [...industries].sort(
  (left, right) => Number(right.id === 'retail') - Number(left.id === 'retail')
)

export default function IndustrySelector({
  onSelectIndustry,
  savedProgress,
}: IndustrySelectorProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 max-w-3xl">
        <p className="mb-3 text-sm font-semibold text-cyan-800 dark:text-cyan-300">
          A first app with the GitHub Copilot desktop app
        </p>
        <h1 tabIndex={-1} className="mb-4 text-4xl font-bold sm:text-5xl">
          Guide the AI. Build small. Check the result.
        </h1>
        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          Vibe coding is a development approach where AI agents handle most
          coding while you guide and verify. You will plan, build, test, and
          save one small web app. No coding experience is needed.
        </p>
      </div>

      <section
        aria-labelledby="before-starting"
        className="mb-8 rounded-xl border border-slate-300 bg-white p-5 dark:border-slate-600 dark:bg-slate-800"
      >
        <h2 id="before-starting" className="text-xl font-bold">
          Before you start
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">
          Allow 60-90 minutes after setup; first-time installation may take
          longer. You need a computer, internet, Node.js 24 LTS, Git, and access
          to the GitHub Copilot desktop app with a working signed-in session.
          Confirm app availability and any Copilot usage costs with your
          facilitator before the workshop.
        </p>
        <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">
          This browser portal is your guide, not the app you will build. Keep it
          open beside Copilot and create your learner app in a separate empty
          folder. No VS Code, WSL, custom agents, MCP servers, or cloud
          deployment are required. Use fictional data only.
        </p>
        <p className="mt-3 text-sm">
          <a
            href="https://github.com/features/ai/github-app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-800 underline hover:text-cyan-950 dark:text-cyan-300 dark:hover:text-cyan-200"
          >
            Download the GitHub Copilot app
          </a>
          {' | '}
          <a
            href="https://docs.github.com/en/copilot/get-started/quickstart-copilot-app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-800 underline hover:text-cyan-950 dark:text-cyan-300 dark:hover:text-cyan-200"
          >
            Official setup and account requirements
          </a>
        </p>
      </section>

      <h2 className="mb-2 text-2xl font-bold">Choose one use case</h2>
      <p className="mb-6 text-slate-700 dark:text-slate-300">
        Each follows the same beginner workflow. Retail is a familiar starting
        point. You can switch without losing another use case&apos;s progress.
      </p>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {suggestedOrder.map((industry) => {
          const saved = savedProgress[industry.id]
          return (
            <a
              key={industry.id}
              href={`?industry=${industry.id}&step=${saved?.currentStep ?? 'setup'}`}
              onClick={(event) => {
                if (
                  event.metaKey ||
                  event.ctrlKey ||
                  event.shiftKey ||
                  event.altKey
                )
                  return
                event.preventDefault()
                onSelectIndustry(industry)
              }}
              className="flex flex-col rounded-xl border border-slate-300 bg-white p-5 text-left transition-colors hover:border-cyan-600 hover:bg-cyan-50 dark:border-slate-600 dark:bg-slate-800 dark:hover:border-cyan-400 dark:hover:bg-slate-700"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span aria-hidden="true" className="text-3xl">
                  {industry.icon}
                </span>
                {industry.id === 'retail' && (
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-900 dark:bg-cyan-900 dark:text-cyan-100">
                    Recommended first
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold">{industry.name}</h3>
              <p className="mt-2 font-semibold text-cyan-800 dark:text-cyan-300">
                {industry.sampleApp.name}
              </p>
              <p className="my-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {industry.description}
              </p>
              <ul className="mb-5 list-inside list-disc space-y-1 text-sm text-slate-700 dark:text-slate-300">
                {industry.features.slice(0, 3).map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <span className="mt-auto font-bold text-cyan-800 dark:text-cyan-300">
                {saved
                  ? isCoreComplete(saved.checkedItems)
                    ? 'Review completed lab'
                    : 'Resume this lab'
                  : 'Start this lab'}
              </span>
            </a>
          )
        })}
      </div>
      <footer className="mt-10 text-sm text-slate-600 dark:text-slate-300">
        Created by Russ Rimmerman.{' '}
        <a
          href="https://www.linkedin.com/in/russrimm"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-cyan-700 dark:hover:text-cyan-300"
        >
          About the author
        </a>
      </footer>
    </div>
  )
}
