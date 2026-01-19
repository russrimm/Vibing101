import { Industry } from '../../types/industry'
import CodeBlock from '../CodeBlock'

interface TestingStepProps {
  industry: Industry
  onNext: () => void
  onPrevious: () => void
}

export default function TestingStep({
  industry,
  onNext,
  onPrevious,
}: TestingStepProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Test & Deploy</h2>
      <p className="text-gray-600 mb-8">
        Test your {industry.sampleApp.name} and get it ready for users.
      </p>

      {/* Manual Testing */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
            1
          </span>
          Manual Testing Checklist
        </h3>
        <div className="ml-10 space-y-3">
          <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <div>
              <p className="font-medium text-gray-900">Create new items</p>
              <p className="text-sm text-gray-600">
                Test the form submission and validation
              </p>
            </div>
          </label>
          <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <div>
              <p className="font-medium text-gray-900">View and search items</p>
              <p className="text-sm text-gray-600">
                Test the list view, filtering, and sorting
              </p>
            </div>
          </label>
          <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <div>
              <p className="font-medium text-gray-900">Edit existing items</p>
              <p className="text-sm text-gray-600">Test update functionality</p>
            </div>
          </label>
          <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <div>
              <p className="font-medium text-gray-900">Delete items</p>
              <p className="text-sm text-gray-600">
                Test delete with confirmation
              </p>
            </div>
          </label>
          <label className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <div>
              <p className="font-medium text-gray-900">Mobile responsiveness</p>
              <p className="text-sm text-gray-600">
                Test on different screen sizes
              </p>
            </div>
          </label>
        </div>
      </div>

      {/* Build for Production */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
            2
          </span>
          Build for Production
        </h3>
        <div className="ml-10">
          <p className="text-gray-600 mb-4">
            Create an optimized production build:
          </p>
          <CodeBlock code="npm run build" language="bash" />
          <p className="text-sm text-gray-600 mt-2">
            This creates a{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">dist/</code> folder
            with optimized files ready to deploy.
          </p>
        </div>
      </div>

      {/* Deploy Options */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
            3
          </span>
          Deploy Your App
        </h3>
        <div className="ml-10 grid gap-4 md:grid-cols-2">
          {/* Vercel */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              Vercel (Recommended)
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Free hosting with automatic deployments from GitHub
            </p>
            <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
              <li>Push code to GitHub</li>
              <li>Connect to Vercel</li>
              <li>Auto-deploy on push</li>
            </ol>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-700"
            >
              Deploy to Vercel →
            </a>
          </div>

          {/* Netlify */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Netlify</h4>
            <p className="text-sm text-gray-600 mb-3">
              Free hosting with drag-and-drop or Git integration
            </p>
            <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
              <li>Drag dist folder</li>
              <li>Or connect GitHub</li>
              <li>Instant deploy</li>
            </ol>
            <a
              href="https://netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-700"
            >
              Deploy to Netlify →
            </a>
          </div>

          {/* Azure Static Web Apps */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">
              Azure Static Web Apps
            </h4>
            <p className="text-sm text-gray-600 mb-3">
              Enterprise hosting with Azure integration
            </p>
            <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
              <li>Create resource</li>
              <li>Connect GitHub</li>
              <li>Configure build</li>
            </ol>
            <a
              href="https://azure.microsoft.com/services/app-service/static/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-700"
            >
              Deploy to Azure →
            </a>
          </div>

          {/* GitHub Pages */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">GitHub Pages</h4>
            <p className="text-sm text-gray-600 mb-3">
              Free hosting directly from your GitHub repository
            </p>
            <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
              <li>Enable GitHub Pages</li>
              <li>Configure branch</li>
              <li>Publish</li>
            </ol>
            <a
              href="https://pages.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-blue-600 hover:text-blue-700"
            >
              Deploy to GitHub Pages →
            </a>
          </div>
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
        <div className="text-sm text-gray-500">Step 5 of 6</div>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
        >
          Complete! →
        </button>
      </div>
    </div>
  )
}
