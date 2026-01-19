import { Industry } from '../../types/industry'
import CodeBlock from '../CodeBlock'

interface SetupStepProps {
  industry: Industry
  onNext: () => void
}

export default function SetupStep({ industry, onNext }: SetupStepProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Environment Setup
      </h2>
      <p className="text-gray-600 mb-8">
        Let's install the tools you need to build your {industry.sampleApp.name}
        . Follow each step and verify the installation before moving forward.
      </p>

      {/* Tools List */}
      <div className="space-y-6 mb-8">
        {/* VS Code */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
              💻
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Install Visual Studio Code
              </h3>
              <p className="text-gray-600 mb-3">
                Download and install VS Code, the editor where you'll do all
                your work.
              </p>
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Download VS Code →
              </a>
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">
                  Verify installation:
                </p>
                <CodeBlock code="code --version" language="bash" />
              </div>
            </div>
          </div>
        </div>

        {/* Node.js */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-2xl">
              📦
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Install Node.js (v24+)
              </h3>
              <p className="text-gray-600 mb-3">
                Node.js lets you run JavaScript locally and use npm to install
                packages.
              </p>
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Download Node.js →
              </a>
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">
                  Verify installation:
                </p>
                <CodeBlock code="node -v\nnpm -v" language="bash" />
              </div>
            </div>
          </div>
        </div>

        {/* Git */}
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
              🔄
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Install Git
              </h3>
              <p className="text-gray-600 mb-3">
                Git tracks your code changes and lets you save your work.
              </p>
              <a
                href="https://git-scm.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Download Git →
              </a>
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">
                  Verify installation:
                </p>
                <CodeBlock code="git --version" language="bash" />
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Copilot */}
        <div className="border border-gray-200 rounded-lg p-6 bg-purple-50">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-2xl">
              🤖
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4. Install GitHub Copilot (Required)
              </h3>
              <p className="text-gray-600 mb-3">
                GitHub Copilot is the AI that will write most of your code. This
                lab won't work without it!
              </p>
              <div className="space-y-2 mb-3">
                <a
                  href="https://github.com/features/copilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors mr-2"
                >
                  Get GitHub Copilot →
                </a>
                <p className="text-sm text-purple-700 mt-2">
                  ⭐ Free trial available for new users
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-gray-700">In VS Code:</p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                  <li>Open Extensions (Ctrl+Shift+X)</li>
                  <li>Search for "GitHub Copilot"</li>
                  <li>
                    Install both "GitHub Copilot" and "GitHub Copilot Chat"
                  </li>
                  <li>Sign in when prompted</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <div className="text-sm text-gray-500">Step 1 of 6</div>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          Continue to Project Setup →
        </button>
      </div>
    </div>
  )
}
