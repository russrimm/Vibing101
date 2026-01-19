import { Industry } from '../../types/industry'

interface CompletionStepProps {
  industry: Industry
  onReset: () => void
  onPrevious: () => void
}

export default function CompletionStep({
  industry,
  onReset,
  onPrevious,
}: CompletionStepProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Congratulations!
        </h2>
        <p className="text-xl text-gray-600">
          You've built your {industry.sampleApp.name}
        </p>
      </div>

      {/* What You Built */}
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          What You Built
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <div>
              <p className="font-medium text-gray-900">Modern Tech Stack</p>
              <p className="text-sm text-gray-600">Vite + React + TypeScript + Tailwind</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <div>
              <p className="font-medium text-gray-900">Industry-Specific App</p>
              <p className="text-sm text-gray-600">{industry.name} solution</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <div>
              <p className="font-medium text-gray-900">Full CRUD Operations</p>
              <p className="text-sm text-gray-600">Create, Read, Update, Delete</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <div>
              <p className="font-medium text-gray-900">AI-Powered Development</p>
              <p className="text-sm text-gray-600">Built with GitHub Copilot</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Key Features Implemented
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {industry.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700">
              <svg
                className="w-5 h-5 text-green-500"
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
      <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-yellow-900 mb-4">
          🚀 Next Steps to Enhance Your App
        </h3>
        <ul className="space-y-2 text-sm text-yellow-800">
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0">•</span>
            <span>Add user authentication and authorization</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0">•</span>
            <span>Connect to a real database (Dataverse, SQL, Firebase)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0">•</span>
            <span>Implement role-based access control</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0">•</span>
            <span>Add reporting and analytics dashboards</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0">•</span>
            <span>Integrate with third-party APIs</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0">•</span>
            <span>Add automated testing (unit, integration, e2e)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0">•</span>
            <span>Implement offline support with PWA</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="flex-shrink-0">•</span>
            <span>Set up CI/CD pipeline for automated deployments</span>
          </li>
        </ul>
      </div>

      {/* Resources */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          📚 Continue Learning
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:bg-blue-50 transition-colors"
          >
            <p className="font-semibold text-gray-900">React Documentation</p>
            <p className="text-sm text-gray-600">Learn more about React</p>
          </a>
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:bg-blue-50 transition-colors"
          >
            <p className="font-semibold text-gray-900">Tailwind CSS</p>
            <p className="text-sm text-gray-600">Master utility-first CSS</p>
          </a>
          <a
            href="https://www.typescriptlang.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:bg-blue-50 transition-colors"
          >
            <p className="font-semibold text-gray-900">TypeScript</p>
            <p className="text-sm text-gray-600">Deep dive into types</p>
          </a>
          <a
            href="https://github.com/features/copilot"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:bg-blue-50 transition-colors"
          >
            <p className="font-semibold text-gray-900">GitHub Copilot</p>
            <p className="text-sm text-gray-600">AI-powered coding tips</p>
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <button
          onClick={onPrevious}
          className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-semibold"
        >
          ← Back
        </button>
        <div className="text-sm text-gray-500">Step 6 of 6</div>
        <button
          onClick={onReset}
          className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-semibold"
        >
          Build Another App →
        </button>
      </div>
    </div>
  )
}
