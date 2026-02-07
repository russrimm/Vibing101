import { Industry } from '../../types/industry'

interface WhatsNextStepProps {
  industry: Industry
  onReset: () => void
  onPrevious: () => void
  stepNumber: number
  totalSteps: number
}

export default function WhatsNextStep({
  industry,
  onReset,
  onPrevious,
  stepNumber,
  totalSteps,
}: WhatsNextStepProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🧭</div>
        <h2 className="text-4xl font-bold text-white mb-4">What’s Next</h2>
        <p className="text-slate-300">
          Ideas and packages you can use to level up your{' '}
          <span className="text-white font-semibold">
            {industry.sampleApp.name}
          </span>
          .
        </p>
      </div>

      <div className="mb-8 p-4 rounded-xl bg-slate-900/30 border border-white/10">
        <p className="text-sm text-slate-300">
          These are optional add-ons. Pick one small upgrade, implement it, then
          validate with{' '}
          <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">
            npm run build
          </code>{' '}
          and{' '}
          <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">
            npm run dev
          </code>
          .
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <section className="border border-white/10 bg-slate-900/30 rounded-xl p-5 hover:border-cyan-500/40 transition-colors">
          <h3 className="text-lg font-semibold text-white mb-2">📄 PDFs</h3>
          <p className="text-sm text-slate-400 mb-3">
            Generate reports, invoices, checklists, or export screens.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.npmjs.com/package/pdf-lib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                pdf-lib
              </a>
              <span className="text-slate-400"> — create/edit PDFs in JS</span>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/jspdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                jspdf
              </a>
              <span className="text-slate-400"> — PDF generation in browser</span>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@react-pdf/renderer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                @react-pdf/renderer
              </a>
              <span className="text-slate-400"> — React-style PDF rendering</span>
            </li>
          </ul>
        </section>

        <section className="border border-white/10 bg-slate-900/30 rounded-xl p-5 hover:border-cyan-500/40 transition-colors">
          <h3 className="text-lg font-semibold text-white mb-2">📝 DOCX</h3>
          <p className="text-sm text-slate-400 mb-3">
            Generate Word documents (letters, summaries, compliance forms).
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.npmjs.com/package/docx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                docx
              </a>
              <span className="text-slate-400"> — create .docx files in TS/JS</span>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/docxtemplater"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                docxtemplater
              </a>
              <span className="text-slate-400"> — fill templates with data</span>
            </li>
          </ul>
        </section>

        <section className="border border-white/10 bg-slate-900/30 rounded-xl p-5 hover:border-cyan-500/40 transition-colors">
          <h3 className="text-lg font-semibold text-white mb-2">🧊 3D & Visuals</h3>
          <p className="text-sm text-slate-400 mb-3">
            Add 3D models, interactive scenes, or “wow” visuals.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.npmjs.com/package/three"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                three
              </a>
              <span className="text-slate-400"> — core 3D engine</span>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@react-three/fiber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                @react-three/fiber
              </a>
              <span className="text-slate-400"> — React renderer for Three.js</span>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@react-three/drei"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                @react-three/drei
              </a>
              <span className="text-slate-400"> — useful helpers/components</span>
            </li>
          </ul>
        </section>

        <section className="border border-white/10 bg-slate-900/30 rounded-xl p-5 hover:border-cyan-500/40 transition-colors">
          <h3 className="text-lg font-semibold text-white mb-2">📊 Charts & Dashboards</h3>
          <p className="text-sm text-slate-400 mb-3">
            Add analytics charts, trends, KPIs, and drill-down views.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.npmjs.com/package/recharts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                recharts
              </a>
              <span className="text-slate-400"> — React charting components</span>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/chart.js"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                chart.js
              </a>
              <span className="text-slate-400"> — popular charting library</span>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/@tanstack/react-table"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                @tanstack/react-table
              </a>
              <span className="text-slate-400"> — powerful data tables</span>
            </li>
          </ul>
        </section>

        <section className="border border-white/10 bg-slate-900/30 rounded-xl p-5 hover:border-cyan-500/40 transition-colors">
          <h3 className="text-lg font-semibold text-white mb-2">🧾 Forms & Validation</h3>
          <p className="text-sm text-slate-400 mb-3">
            Improve input UX, validation, and error messages.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.npmjs.com/package/react-hook-form"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                react-hook-form
              </a>
              <span className="text-slate-400"> — ergonomic form state</span>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/zod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                zod
              </a>
              <span className="text-slate-400"> — schema validation (great with TS)</span>
            </li>
          </ul>
        </section>

        <section className="border border-white/10 bg-slate-900/30 rounded-xl p-5 hover:border-cyan-500/40 transition-colors">
          <h3 className="text-lg font-semibold text-white mb-2">⚡ Data Fetching & Caching</h3>
          <p className="text-sm text-slate-400 mb-3">
            Cleaner API calls, retries, caching, loading states.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.npmjs.com/package/@tanstack/react-query"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                @tanstack/react-query
              </a>
              <span className="text-slate-400"> — server-state management</span>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/zustand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                zustand
              </a>
              <span className="text-slate-400"> — lightweight client state</span>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-8 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
        <p className="text-sm text-emerald-200">
          Pro tip: have Beast Mode implement one upgrade at a time. Smaller
          changes are easier to debug and easier to learn from.
        </p>
      </div>

      <div className="flex justify-between items-center pt-6 mt-8 border-t border-white/10">
        <button
          onClick={onPrevious}
          className="px-6 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors font-semibold border border-white/10 hover:border-cyan-500/50"
        >
          ← Back
        </button>
        <div className="text-sm text-slate-400">
          Step {stepNumber} of {totalSteps}
        </div>
        <button
          onClick={onReset}
          className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold shadow-lg shadow-emerald-500/30"
        >
          Build Another App →
        </button>
      </div>
    </div>
  )
}
