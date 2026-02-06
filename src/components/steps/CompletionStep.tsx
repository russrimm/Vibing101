import { Industry } from '../../types/industry'
import { GlossaryTooltip } from '../GlossaryTooltip'

interface CompletionStepProps {
  industry: Industry
  onReset: () => void
  onPrevious: () => void
  stepNumber: number
  totalSteps: number
}

export default function CompletionStep({
  industry,
  onReset,
  onPrevious,
  stepNumber,
  totalSteps,
}: CompletionStepProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-4xl font-bold text-white mb-4">Congratulations!</h2>
        <p className="text-xl text-slate-300">
          You've built your {industry.sampleApp.name}
        </p>
      </div>

      {/* What You Built */}
      <div className="mb-8 bg-linear-to-r from-cyan-900/30 to-emerald-900/30 border border-cyan-500/20 rounded-xl p-6">
        <h3 className="text-2xl font-semibold text-white mb-4">
          What You Built
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
              ✓
            </div>
            <div>
              <p className="font-medium text-white">Modern Tech Stack</p>
              <p className="text-sm text-slate-300">
                Vite + React + TypeScript +{' '}
                <GlossaryTooltip term="tailwind">Tailwind</GlossaryTooltip>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
              ✓
            </div>
            <div>
              <p className="font-medium text-white">Industry-Specific App</p>
              <p className="text-sm text-slate-300">{industry.name} solution</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
              ✓
            </div>
            <div>
              <p className="font-medium text-white">Full CRUD Operations</p>
              <p className="text-sm text-slate-300">
                Create, Read, Update, Delete
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
              ✓
            </div>
            <div>
              <p className="font-medium text-white">AI-Powered Development</p>
              <p className="text-sm text-slate-300">
                Built with GitHub Copilot
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-white mb-4">
          Key Features Implemented
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {industry.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-slate-300">
              <svg
                className="w-5 h-5 text-cyan-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="mb-8 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-amber-300 mb-4">
          🚀 Next Steps to Enhance Your App
        </h3>
        <ul className="space-y-2 text-sm text-slate-300 mb-4">
          <li className="flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>Add user authentication and authorization</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>Connect to a real database (Dataverse, SQL, Firebase)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>Implement role-based access control</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>Add reporting and analytics dashboards</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>Integrate with third-party APIs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>Add automated testing (unit, integration, e2e)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>Implement offline support with PWA</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="shrink-0">•</span>
            <span>Set up CI/CD pipeline for automated deployments</span>
          </li>
        </ul>

        {/* Power Apps Code First Button */}
        <div className="mt-6 pt-6 border-t border-amber-500/30">
          <div className="bg-emerald-900/15 border border-emerald-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="font-semibold text-emerald-200 mb-1">
                  Deploy as Power Apps Code-First App
                </h4>
                <p className="text-sm text-slate-300 mb-3">
                  Transform your React app into a Power Apps custom page with
                  Dataverse integration. Run on localhost, no PAC CLI required.
                </p>
              </div>
            </div>
            <a
              href="https://github.com/github/awesome-copilot/blob/main/instructions/power-apps-code-apps.instructions.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-slate-50 rounded-lg hover:bg-emerald-700 transition-colors font-semibold shadow-lg shadow-emerald-500/30 text-sm"
            >
              <span>📱</span>
              <span>Deploy with Power Apps →</span>
            </a>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4">
          📚 Continue Learning
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://github.com/features/copilot"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 bg-slate-900/30 rounded-xl p-4 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-colors"
          >
            <p className="font-semibold text-white">GitHub Copilot</p>
            <p className="text-sm text-slate-400">AI-powered coding tips</p>
          </a>
          <a
            href="https://github.blog/changelog/2026-01-21-github-copilot-cli-plan-before-you-build-steer-as-you-go/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 bg-slate-900/30 rounded-xl p-4 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-colors"
          >
            <p className="font-semibold text-white">GitHub Copilot CLI</p>
            <p className="text-sm text-slate-400">
              Plan before you build, steer as you go
            </p>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-white/10">
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
