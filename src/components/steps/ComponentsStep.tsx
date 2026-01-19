import { Industry } from '../../types/industry'
import CodeBlock from '../CodeBlock'

interface ComponentsStepProps {
  industry: Industry
  onNext: () => void
  onPrevious: () => void
}

export default function ComponentsStep({
  industry,
  onNext,
  onPrevious,
}: ComponentsStepProps) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
      <h2 className="text-3xl font-bold text-white mb-4">
        Build Your Components
      </h2>
      <p className="text-slate-300 mb-8">
        Let AI generate all the components for your {industry.sampleApp.name} in
        one step.
      </p>

      {/* What You'll Get */}
      <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          What You'll Build
        </h3>
        <ul className="space-y-2 text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">▸</span>
            <span>A list/table view with search, filtering, and sorting</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">▸</span>
            <span>A form for adding and editing items with validation</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">▸</span>
            <span>A detail view showing complete item information</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500 mt-1">▸</span>
            <span>
              All necessary code, types, and styling automatically generated
            </span>
          </li>
        </ul>
      </div>

      {/* Step 0: Verify MCP Servers */}
      <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🔧</span>
          Step 0: Verify MCP Servers Are Running
        </h3>
        <p className="text-slate-300 mb-4">
          Before building, make sure the required MCP servers are installed and
          running:
        </p>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-orange-400 mb-2">
              Check installed MCP servers:
            </p>
            <ol className="space-y-2 text-slate-300 text-sm ml-4">
              <li className="flex items-start gap-2">
                <span className="text-orange-500">1.</span>
                <span>Open VS Code Command Palette (Ctrl+Shift+P or F1)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">2.</span>
                <span>
                  Type and select:{' '}
                  <code className="text-cyan-400 bg-slate-900 px-2 py-0.5 rounded">
                    MCP: List Servers
                  </code>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500">3.</span>
                <span>Verify these servers are listed and running:</span>
              </li>
            </ol>
          </div>

          <div className="bg-slate-900/50 border border-orange-500/20 rounded-lg p-4">
            <p className="text-sm font-semibold text-orange-400 mb-2">
              Required MCP Servers:
            </p>
            <ul className="space-y-1.5 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <code className="text-cyan-400">microsoft-learn</code> - Access
                to Microsoft documentation and code samples
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                <code className="text-cyan-400">context7</code> - Library
                documentation and examples
              </li>
            </ul>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <p className="text-sm text-yellow-300 flex items-start gap-2">
              <span className="text-lg mt-0.5">⚠️</span>
              <div>
                <strong className="block mb-1">If servers are missing:</strong>
                <span>
                  Install them using the VS Code Command Palette:{' '}
                  <code className="text-cyan-400 bg-slate-900 px-2 py-0.5 rounded">
                    MCP: Install Server
                  </code>{' '}
                  and search for "microsoft-learn" and "context7"
                </span>
              </div>
            </p>
          </div>
        </div>
      </div>

      {/* Step 1: Start with Simple Request */}
      <div className="bg-linear-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">💬</span>
          Step 1: Start with a Simple Request (Ask Mode)
        </h3>
        <p className="text-slate-300 mb-4">
          Open GitHub Copilot Chat (Ctrl+Shift+I) and describe what you want in
          plain English. No technical knowledge needed:
        </p>
        <CodeBlock
          code={`Create a ${industry.sampleApp.name.toLowerCase()} that displays and tracks ${industry.name.toLowerCase()} data. Users should be able to view items in a list, add new items, edit existing items, and see details for each item.

Please ask me questions about what I need, then create a prompt for Agent Mode.`}
          language="text"
        />
        <div className="mt-4 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
          <p className="text-sm text-purple-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">💡</span>
            <span>
              Notice: You don't mention React, Tailwind, TypeScript, or any
              libraries. The agent will read{' '}
              <code className="text-cyan-400 bg-slate-900 px-2 py-0.5 rounded">
                copilot-instructions.md
              </code>{' '}
              and apply those automatically!
            </span>
          </p>
        </div>
      </div>

      {/* The Conversation */}
      <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🗨️</span>
          The Agent Will Ask Questions
        </h3>
        <p className="text-slate-300 mb-4">
          The AI will have a conversation with you. Here's an example:
        </p>

        <div className="space-y-4">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-400 mb-2">
              🤖 Agent asks:
            </p>
            <p className="text-slate-300 text-sm">
              "What information do you need to track for each item?"
            </p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 ml-4">
            <p className="text-sm font-semibold text-green-400 mb-2">
              👤 You answer:
            </p>
            <p className="text-slate-300 text-sm">
              "Each item needs a name, category, status, created date, and
              location."
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-400 mb-2">
              🤖 Agent asks:
            </p>
            <p className="text-slate-300 text-sm">
              "What actions should users be able to perform?"
            </p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 ml-4">
            <p className="text-sm font-semibold text-green-400 mb-2">
              👤 You answer:
            </p>
            <p className="text-slate-300 text-sm">
              "Add new items, edit existing ones, delete items, search and
              filter the list."
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-400 mb-2">
              🤖 Agent asks:
            </p>
            <p className="text-slate-300 text-sm">
              "Any required fields or validation rules?"
            </p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 ml-4">
            <p className="text-sm font-semibold text-green-400 mb-2">
              👤 You answer:
            </p>
            <p className="text-slate-300 text-sm">
              "Name and category are required. Dates should be valid dates."
            </p>
          </div>
        </div>

        <div className="mt-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
          <p className="text-sm text-cyan-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">💡</span>
            <span>
              <strong>Behind the scenes:</strong> The agent reads{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                copilot-instructions.md
              </code>{' '}
              which tells it to use React, TypeScript, Tailwind CSS, proper
              validation libraries, and accessibility standards. You just
              describe your business needs!
            </span>
          </p>
        </div>
      </div>

      {/* Step 2: Generated Prompt */}
      <div className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          Step 2: Agent Generates Simple Prompt
        </h3>
        <p className="text-slate-300 mb-4">
          After the conversation, the agent creates a clean, simple prompt
          focused on your business needs:
        </p>
        <CodeBlock
          code={`@workspace Build a ${industry.sampleApp.name.toLowerCase()} that tracks ${industry.name.toLowerCase()} data.

Features:
- List view with search, filter, and sort
- Add/edit form with validation
- Detail view for each item

Data fields:
- Name (required)
- Category (required)
- Status
- Created date
- Location

Follow the project's technical standards in copilot-instructions.md.`}
          language="text"
        />
        <div className="mt-4 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
          <p className="text-sm text-purple-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">🎯</span>
            <span>
              <strong>Key insight:</strong> The prompt mentions{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                copilot-instructions.md
              </code>{' '}
              at the end. When Agent Mode sees{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                @workspace
              </code>
              , it automatically reads that file and applies React, TypeScript,
              Tailwind CSS, validation rules, and accessibility standards!
            </span>
          </p>
        </div>
      </div>

      {/* Step 3: Agent Mode */}
      <div className="bg-linear-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🤖</span>
          Step 3: Copy to Agent Mode and Build
        </h3>
        <p className="text-slate-300 mb-4">
          Copy the generated prompt and paste it into Agent Mode:
        </p>
        <ol className="space-y-2 text-slate-300 text-sm ml-4 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-cyan-500">1.</span>
            <span>Copy the entire prompt the agent generated</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500">2.</span>
            <span>
              Make sure{' '}
              <code className="text-cyan-400 bg-slate-900 px-2 py-0.5 rounded">
                @workspace
              </code>{' '}
              is in the chat
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500">3.</span>
            <span>Paste and send</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-500">4.</span>
            <span>Watch Agent Mode build your entire app!</span>
          </li>
        </ol>
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <p className="text-sm text-green-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">🎉</span>
            <span>
              <strong>Agent Mode</strong> creates files, installs dependencies,
              builds components, and verifies everything works!
            </span>
          </p>
        </div>
      </div>

      {/* Why This Works */}
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
          <span className="text-xl">🎯</span>
          Why This Conversation Approach Works
        </h4>
        <ul className="space-y-3 text-slate-300 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">
                No technical knowledge needed:
              </strong>{' '}
              You only describe business requirements (data fields, user
              actions, validation rules) - no React, TypeScript, or Tailwind
              knowledge required
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">
                copilot-instructions.md does the heavy lifting:
              </strong>{' '}
              This file contains all technical standards - React patterns,
              TypeScript config, Tailwind design system, accessibility rules,
              validation libraries
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">
                Agent asks business questions:
              </strong>{' '}
              "What data do you track?" "What actions can users perform?" - not
              "What form library?" or "What CSS framework?"
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">@workspace is the magic:</strong>{' '}
              When you use{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                @workspace
              </code>{' '}
              in Agent Mode, it reads copilot-instructions.md and automatically
              applies all technical decisions
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">
                Simple prompt, professional results:
              </strong>{' '}
              Your prompt stays simple (business focused), but Agent Mode builds
              production-quality code with proper types, validation, styling,
              and accessibility
            </div>
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-white/10">
        <button
          onClick={onPrevious}
          className="px-6 py-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-lg transition-colors font-semibold border border-white/10 hover:border-cyan-500/50"
        >
          ← Back
        </button>
        <div className="text-sm text-slate-400">Step 3 of 6</div>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold shadow-lg shadow-cyan-500/30"
        >
          Add Data Layer →
        </button>
      </div>
    </div>
  )
}
