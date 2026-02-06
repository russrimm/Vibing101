import { Industry } from '../../types/industry'
import CodeBlock from '../CodeBlock'
import { GlossaryTooltip } from '../GlossaryTooltip'

interface TestingStepProps {
  industry: Industry
  onNext: () => void
  onPrevious: () => void
  stepNumber: number
  totalSteps: number
}

export default function TestingStep({
  industry,
  onNext,
  onPrevious,
  stepNumber,
  totalSteps,
}: TestingStepProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
      <h2 className="text-3xl font-bold text-white mb-4">Test & Deploy</h2>
      <p className="text-slate-300 mb-8">
        Test your {industry.sampleApp.name} and get it ready for users.
      </p>

      {/* Install Dependencies */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm shadow-lg shadow-cyan-500/30">
            1
          </span>
          Install Dependencies
        </h3>
        <div className="ml-10">
          <p className="text-slate-300 mb-4">
            Before you run the app, install the packages it needs:
          </p>
          <CodeBlock code="npm install" language="bash" />
          <p className="text-sm text-slate-400 mt-2">
            You usually run this once when you first{' '}
            <GlossaryTooltip term="clone">clone</GlossaryTooltip> the{' '}
            <GlossaryTooltip term="repo">repo</GlossaryTooltip> (and again
            anytime dependencies change).
          </p>
        </div>
      </div>

      {/* Run Locally */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm shadow-lg shadow-cyan-500/30">
            2
          </span>
          Run Locally (Dev Server)
        </h3>
        <div className="ml-10">
          <p className="text-slate-300 mb-4">
            Start the app locally and click around to make sure it works:
          </p>
          <CodeBlock code="npm run dev" language="bash" />
          <p className="text-sm text-slate-400 mt-2">
            Then open{' '}
            <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">
              http://localhost:5173
            </code>{' '}
            in your browser.
          </p>
          <div className="mt-4 p-4 bg-slate-900/30 rounded-lg border border-white/10">
            <p className="text-sm text-slate-300">
              If you see errors in the terminal or browser console, copy/paste
              them into <strong className="text-white">Beast Mode</strong> and
              ask it to fix the issues, then run{' '}
              <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">
                npm run dev
              </code>{' '}
              again.
            </p>
            <p className="text-sm text-slate-400 mt-2">
              It’s normal to hit a handful of errors while iterating — Beast
              Mode will keep resolving them until the app runs cleanly.
            </p>
          </div>
        </div>
      </div>

      {/* Build for Production */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm shadow-lg shadow-cyan-500/30">
            3
          </span>
          Build for Production
        </h3>
        <div className="ml-10">
          <p className="text-slate-300 mb-4">
            Create an optimized production build:
          </p>
          <CodeBlock code="npm run build" language="bash" />
          <p className="text-sm text-slate-400 mt-2">
            This creates a{' '}
            <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">
              dist/
            </code>{' '}
            folder with optimized files ready to deploy.
          </p>
        </div>
      </div>

      {/* Deploy Options */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm shadow-lg shadow-cyan-500/30">
            4
          </span>
          Deploy Your App
        </h3>
        <div className="ml-10 grid gap-4 md:grid-cols-2">
          {/* Azure Static Web Apps */}
          <div className="border border-white/10 bg-slate-900/30 rounded-lg p-4 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-colors">
            <h4 className="font-semibold text-white mb-2">
              Azure Static Web Apps (Recommended)
            </h4>
            <p className="text-sm text-slate-300 mb-3">
              Enterprise hosting with Azure integration
            </p>
            <ol className="text-sm text-slate-400 space-y-1 list-decimal list-inside">
              <li>Create resource</li>
              <li>Connect GitHub</li>
              <li>Configure build</li>
            </ol>
            <a
              href="https://azure.microsoft.com/services/app-service/static/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-cyan-400 hover:text-cyan-300 font-medium"
            >
              Deploy to Azure →
            </a>
          </div>

          {/* GitHub Pages */}
          <div className="border border-white/10 bg-slate-900/30 rounded-lg p-4 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-colors">
            <h4 className="font-semibold text-white mb-2">GitHub Pages</h4>
            <p className="text-sm text-slate-300 mb-3">
              Free hosting directly from your GitHub repository
            </p>
            <ol className="text-sm text-slate-400 space-y-1 list-decimal list-inside">
              <li>Enable GitHub Pages</li>
              <li>Configure branch</li>
              <li>Publish</li>
            </ol>
            <a
              href="https://pages.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-cyan-400 hover:text-cyan-300 font-medium"
            >
              Deploy to GitHub Pages →
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-white/10">
        <button
          onClick={onPrevious}
          className="px-6 py-3 text-slate-300 hover:bg-slate-700/50 rounded-lg transition-colors font-semibold"
        >
          ← Back
        </button>
        <div className="text-sm text-slate-400">
          Step {stepNumber} of {totalSteps}
        </div>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-lg shadow-green-500/30"
        >
          Complete! →
        </button>
      </div>
    </div>
  )
}
