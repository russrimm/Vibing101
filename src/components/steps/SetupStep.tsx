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
                className="inline-block px-6 py-3 bg-cyan-600 text-white font-black text-base rounded-lg hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-500/50"
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
                className="inline-block px-6 py-3 bg-green-600 text-white font-black text-base rounded-lg hover:bg-green-700 transition-colors shadow-lg shadow-green-500/50"
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
                className="inline-block px-6 py-3 bg-orange-600 text-white font-black text-base rounded-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-500/50"
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
                4. Enable GitHub Copilot (Required)
              </h3>
              <p className="text-slate-300 mb-3">
                GitHub Copilot is pre-installed in VS Code. Click below to
                launch Copilot Chat and sign in if needed.
              </p>
              <div className="space-y-3">
                <a
                  href="vscode://github.copilot-chat"
                  className="inline-block px-6 py-3 bg-purple-700 text-slate-50 font-black text-lg rounded-lg hover:bg-purple-800 transition-colors shadow-xl shadow-purple-500/50 border-2 border-purple-400"
                >
                  <span className="text-slate-50">Launch GitHub Copilot Chat →</span>
                </a>
                <div className="flex items-start gap-2 text-sm text-purple-300 bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                  <span className="text-lg">ℹ️</span>
                  <div>
                    <p className="font-medium mb-1">
                      First time using Copilot?
                    </p>
                    <p className="text-slate-400">
                      You'll be prompted to sign in with your GitHub account. A
                      free trial is available for new users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MCP Servers */}
        <div className="border border-blue-500/30 bg-blue-900/20 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-2xl">
              🔌
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                5. Install MCP Servers (Required)
              </h3>
              <p className="text-slate-300 mb-3">
                MCP servers give Copilot access to up-to-date documentation and
                code examples.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-white mb-2">
                    Microsoft Learn MCP Server
                  </p>
                  <p className="text-sm text-slate-400 mb-2">
                    Access official Microsoft and Azure documentation
                  </p>
                  <a
                    href="vscode://ms-azure-tools.microsoft-learn-mcp"
                    className="inline-block px-6 py-3 bg-blue-700 text-slate-50 font-black text-lg rounded-lg hover:bg-blue-800 transition-colors shadow-xl shadow-blue-500/50 border-2 border-blue-400"
                  >
                    <span className="text-slate-50">Install Microsoft Learn MCP →</span>
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-2">
                    Context7 MCP Server
                  </p>
                  <p className="text-sm text-slate-400 mb-2">
                    Access documentation for any programming library or
                    framework
                  </p>
                  <a
                    href="vscode://upstash.context7-mcp"
                    className="inline-block px-6 py-3 bg-blue-700 text-slate-50 font-black text-lg rounded-lg hover:bg-blue-800 transition-colors shadow-xl shadow-blue-500/50 border-2 border-blue-400"
                  >
                    <span className="text-slate-50">Install Context7 MCP →</span>
                  </a>
                </div>
                <div className="flex items-start gap-2 text-sm text-blue-300 bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
                  <span className="text-lg">ℹ️</span>
                  <div>
                    <p className="font-medium mb-1">Why MCP Servers?</p>
                    <p className="text-slate-400">
                      MCP (Model Context Protocol) servers extend Copilot's
                      knowledge with real-time access to documentation, ensuring
                      code suggestions use the latest APIs and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-white/10">
        <div className="text-sm text-slate-400">Step 1 of 5</div>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-cyan-600 text-white font-black text-base rounded-lg hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-500/50"
        >
          Continue to Project Setup →
        </button>
      </div>
    </div>
  )
}
