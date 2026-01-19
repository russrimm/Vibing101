import { Industry } from '../../types/industry'
import CodeBlock from '../CodeBlock'

interface SetupStepProps {
  industry: Industry
  onNext: () => void
}

export default function SetupStep({ industry, onNext }: SetupStepProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
      <h2 className="text-3xl font-bold text-white mb-4">Environment Setup</h2>
      <p className="text-slate-300 mb-8">
        Let's install the tools you need to build your {industry.sampleApp.name}
        . Follow each step and verify the installation before moving forward.
      </p>

      {/* Tools List */}
      <div className="space-y-6 mb-8">
        {/* VS Code */}
        <div className="border border-white/10 bg-slate-900/30 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-2xl">
              💻
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                1. Install Visual Studio Code
              </h3>
              <p className="text-slate-300 mb-3">
                Download and install VS Code, the editor where you'll do all
                your work.
              </p>
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/30"
              >
                Download VS Code →
              </a>
              <div className="mt-4">
                <p className="text-sm text-slate-400 mb-2">
                  Verify installation:
                </p>
                <CodeBlock code="code --version" language="bash" />
              </div>
            </div>
          </div>
        </div>

        {/* Node.js */}
        <div className="border border-white/10 bg-slate-900/30 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-2xl">
              📦
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                2. Install Node.js (v24+)
              </h3>
              <p className="text-slate-300 mb-3">
                Node.js lets you run JavaScript locally and use npm to install
                packages.
              </p>
              <a
                href="https://nodejs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30"
              >
                Download Node.js →
              </a>
              <div className="mt-4">
                <p className="text-sm text-slate-400 mb-2">
                  Verify installation:
                </p>
                <CodeBlock code="node -v\nnpm -v" language="bash" />
              </div>
            </div>
          </div>
        </div>

        {/* Git */}
        <div className="border border-white/10 bg-slate-900/30 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-2xl">
              🔄
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                3. Install Git
              </h3>
              <p className="text-slate-300 mb-3">
                Git tracks your code changes and lets you save your work.
              </p>
              <a
                href="https://git-scm.com/downloads"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
              >
                Download Git →
              </a>
              <div className="mt-4">
                <p className="text-sm text-slate-400 mb-2">
                  Verify installation:
                </p>
                <CodeBlock code="git --version" language="bash" />
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Copilot */}
        <div className="border border-purple-500/30 bg-purple-900/20 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-2xl">
              🤖
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                4. Install GitHub Copilot (Required)
              </h3>
              <p className="text-slate-300 mb-3">
                GitHub Copilot is the AI that will write most of your code. This
                lab won't work without it!
              </p>
              <div className="space-y-2 mb-3">
                <a
                  href="https://github.com/features/copilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors mr-2 shadow-lg shadow-purple-500/30"
                >
                  Get GitHub Copilot →
                </a>
                <p className="text-sm text-purple-300 mt-2">
                  ⭐ Free trial available for new users
                </p>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-slate-200">
                  In VS Code:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm text-slate-300">
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
      <div className="flex justify-between items-center pt-6 border-t border-white/10">
        <div className="text-sm text-slate-400">Step 1 of 6</div>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold shadow-lg shadow-cyan-500/30"
        >
          Continue to Project Setup →
        </button>
      </div>
    </div>
  )
}
