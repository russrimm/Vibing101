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
                your work. Accept all default options during installation.
              </p>
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-cyan-700 text-slate-50 font-black text-lg rounded-lg hover:bg-cyan-800 transition-colors shadow-xl shadow-cyan-500/50 border-2 border-cyan-400"
              >
                <span className="text-slate-50">Download VS Code →</span>
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
                packages. Download the Windows Installer (.msi) and accept all
                default options during installation.
              </p>
              <a
                href="https://nodejs.org/en/download/package-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-700 text-slate-50 font-black text-lg rounded-lg hover:bg-green-800 transition-colors shadow-xl shadow-green-500/50 border-2 border-green-400"
              >
                <span className="text-slate-50">Download Node.js →</span>
              </a>
              <div className="mt-4">
                <p className="text-sm text-slate-400 mb-2">
                  Verify installation:
                </p>
                <CodeBlock code="node -v" language="bash" />
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
                className="inline-block px-6 py-3 bg-orange-700 text-slate-50 font-black text-lg rounded-lg hover:bg-orange-800 transition-colors shadow-xl shadow-orange-500/50 border-2 border-orange-400"
              >
                <span className="text-slate-50">Download Git →</span>
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
                4. Setup GitHub Copilot & MCP Servers (Required)
              </h3>
              <p className="text-slate-300 mb-3">
                Install GitHub Copilot extension, configure Beast Mode custom
                agent, and enable MCP servers.
              </p>
              <div className="space-y-3">
                <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                  <ol className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        1.
                      </span>
                      <span>
                        In VS Code, click the{' '}
                        <strong className="text-white">Extensions</strong> icon
                        in the left sidebar (or press{' '}
                        <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                          Ctrl+Shift+X
                        </code>
                        )
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        2.
                      </span>
                      <span>
                        Search for{' '}
                        <strong className="text-white">"GitHub Copilot"</strong>{' '}
                        and click{' '}
                        <strong className="text-white">Install</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        3.
                      </span>
                      <span>
                        Sign in with your GitHub account when prompted
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        4.
                      </span>
                      <span>Close the walkthrough steps window</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        5.
                      </span>
                      <span>
                        Click the{' '}
                        <strong className="text-white">
                          Agent/Ask mode dropdown
                        </strong>{' '}
                        at the top of the GitHub Copilot chat
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        6.
                      </span>
                      <span>
                        Click{' '}
                        <strong className="text-white">
                          "Configure Custom Agents"
                        </strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        7.
                      </span>
                      <span>
                        Click{' '}
                        <strong className="text-white">
                          "Create new custom Agent"
                        </strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        8.
                      </span>
                      <span>
                        Click{' '}
                        <strong className="text-white">"User Data"</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        9.
                      </span>
                      <span>
                        Enter{' '}
                        <strong className="text-white">"Beast Mode"</strong> and
                        press Enter
                      </span>
                    </li>
                  </ol>
                  <a
                    href="https://gist.githubusercontent.com/burkeholland/88af0249c4b6aff3820bf37898c8bacf/raw/e1898331f1755aff3265d50e30106b8c6987c4f7/beastmode3.chatmode.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-purple-700 text-slate-50 font-black text-sm rounded-lg hover:bg-purple-800 transition-colors shadow-lg shadow-purple-500/50 border-2 border-purple-400"
                  >
                    <span className="text-slate-50">
                      Open Beast Mode Content →
                    </span>
                  </a>
                  <ol
                    className="space-y-2 text-sm text-slate-300 mt-4"
                    start={10}
                  >
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        10.
                      </span>
                      <span>
                        Copy all the content from the Beast Mode page (
                        <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                          Ctrl+A
                        </code>{' '}
                        then{' '}
                        <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                          Ctrl+C
                        </code>
                        )
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        11.
                      </span>
                      <span>
                        Paste the content into the{' '}
                        <strong className="text-white">
                          Beast Mode.agent.md
                        </strong>{' '}
                        file that opened in VS Code
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        12.
                      </span>
                      <span>
                        Save the file (
                        <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                          Ctrl+S
                        </code>
                        )
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        13.
                      </span>
                      <span>
                        Click on the{' '}
                        <strong className="text-white">sprocket ⚙️</strong> at the
                        top of the GitHub Copilot chat window
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        14.
                      </span>
                      <span>
                        Select{' '}
                        <strong className="text-white">MCP Servers</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        15.
                      </span>
                      <span>
                        Click{' '}
                        <strong className="text-white">
                          "Enable MCP Servers Marketplace"
                        </strong>{' '}
                        on the left and click{' '}
                        <strong className="text-white">"Enable"</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        16.
                      </span>
                      <span>
                        Press{' '}
                        <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                          Ctrl+Shift+P
                        </code>{' '}
                        to open the Command Palette
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        17.
                      </span>
                      <span>
                        Type{' '}
                        <strong className="text-white">
                          "Preferences: Open User Settings (JSON)"
                        </strong>{' '}
                        and select it
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        18.
                      </span>
                      <span>
                        Add{' '}
                        <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                          "chat.agent.maxRequests": 200
                        </code>{' '}
                        to the settings file and save
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 font-semibold shrink-0">
                        19.
                      </span>
                      <span>
                        Go to{' '}
                        <a
                          href="https://www.github.com/mcp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 underline"
                        >
                          github.com/mcp
                        </a>{' '}
                        and select{' '}
                        <strong className="text-white">"Install"</strong> for
                        both <strong className="text-white">Context7</strong>{' '}
                        and{' '}
                        <strong className="text-white">Microsoft Learn</strong>
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MCP Servers - Remove this section since it's now part of step 4 */}
        <div className="hidden border border-blue-500/30 bg-blue-900/20 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
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
                    href="https://vscode.dev/redirect/mcp/install?name=microsoft-learn&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Flearn.microsoft.com%2Fapi%2Fmcp%22%7D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-blue-700 text-slate-50 font-black text-lg rounded-lg hover:bg-blue-800 transition-colors shadow-xl shadow-blue-500/50 border-2 border-blue-400"
                  >
                    <span className="text-slate-50">
                      Install Microsoft Learn MCP →
                    </span>
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
                    href="https://insiders.vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%7B%22name%22%3A%22context7%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40upstash%2Fcontext7-mcp%40latest%22%5D%7D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-blue-700 text-slate-50 font-black text-lg rounded-lg hover:bg-blue-800 transition-colors shadow-xl shadow-blue-500/50 border-2 border-blue-400"
                  >
                    <span className="text-slate-50">
                      Install Context7 MCP →
                    </span>
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
          className="px-6 py-3 bg-cyan-700 text-slate-50 font-black text-lg rounded-lg hover:bg-cyan-800 transition-colors shadow-xl shadow-cyan-500/50 border-2 border-cyan-400"
        >
          <span className="text-slate-50">Continue to Project Setup →</span>
        </button>
      </div>
    </div>
  )
}
