import { Industry } from '../../types/industry'
import CodeBlock from '../CodeBlock'

interface StructureStepProps {
  industry: Industry
  onNext: () => void
  onPrevious: () => void
}

export default function StructureStep({
  industry,
  onNext,
  onPrevious,
}: StructureStepProps) {
  const initialPrompt = `Create a ${industry.sampleApp.name} application that tracks ${industry.name.toLowerCase()} data.

Please ask me questions about what I need (features, data, colors/theme/style, etc), then create a complete prompt for Agent Mode.`

  const finalPrompt = `@workspace Build a complete ${industry.sampleApp.name} application.

What I need:
- Track and manage: ${industry.sampleApp.entities.join(', ')}
- List/table views with search and filtering
- Forms to add and edit items
- Detail pages for each item
- Data management with mock data (localStorage)
- Dark theme with blue/cyan accents, modern professional style

Build the complete application including:
- Project structure and configuration
- All components (list, form, detail views)
- TypeScript types for all data
- Mock data service with CRUD operations
- React hooks for data management
- Connected and working UI

Follow all technical standards in copilot-instructions.md.`

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
      <h2 className="text-3xl font-bold text-white mb-4">
        Set Up Your Project Structure
      </h2>
      <p className="text-slate-300 mb-8">
        Let GitHub Copilot Agent build your entire {industry.sampleApp.name}{' '}
        project structure. You just describe what you want in plain English!
      </p>

      {/* Step 0: Create copilot-instructions.md */}
      <div className="bg-linear-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">📋</span>
          Step 0: Create copilot-instructions.md (First!)
        </h3>
        <p className="text-slate-300 mb-4">
          Before building your app, create a file that tells Copilot how to code for this project:
        </p>
        <ol className="space-y-2 text-slate-300 text-sm ml-4 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono">1.</span>
            <span>Create a new folder for your project (e.g., <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">my-{industry.name.toLowerCase()}-app</code>)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono">2.</span>
            <span>Open that folder in VS Code</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono">3.</span>
            <span>Create a file named <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">copilot-instructions.md</code> in the root</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono">4.</span>
            <span>Copy the content from: <a href="https://raw.githubusercontent.com/russrimm/Vibing101/main/copilot-instructions-template.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">copilot-instructions template</a></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono">5.</span>
            <span>Save the file</span>
          </li>
        </ol>
        <div className="space-y-3">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
            <p className="text-sm text-amber-300 flex items-start gap-2">
              <span className="text-lg mt-0.5">⚠️</span>
              <span>
                <strong>Why do this first?</strong> This file teaches Copilot your project's standards (TypeScript-only, Vite, React, Tailwind, etc.) so it builds everything correctly from the start!
              </span>
            </p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-blue-300 flex items-start gap-2">
              <span className="text-lg mt-0.5">📚</span>
              <span>
                <strong>Want more examples?</strong> Check out <a href="https://github.com/github/awesome-copilot" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">GitHub's Awesome Copilot repository</a> for many starter instruction files for different languages and frameworks!
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Step 1: Simple Request */}
      <div className="bg-linear-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">💬</span>
          Step 1: Start with a Simple Request (Ask Mode)
        </h3>
        <p className="text-slate-300 mb-4">
          Open GitHub Copilot Chat (Ctrl+Shift+I) and describe what you want:
        </p>
        <CodeBlock code={initialPrompt} language="text" />
        <div className="mt-4 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
          <p className="text-sm text-purple-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">💡</span>
            <span>
              Notice: No mention of Vite, React, TypeScript, Tailwind, or folder
              structure. The agent figures all that out!
            </span>
          </p>
        </div>
      </div>

      {/* Conversation */}
      <div className="bg-slate-900/50 border border-cyan-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🗨️</span>
          The Agent Asks Questions
        </h3>
        <p className="text-slate-300 mb-4">
          The agent will have a conversation with you:
        </p>

        <div className="space-y-4">
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-400 mb-2">
              🤖 Agent asks:
            </p>
            <p className="text-slate-300 text-sm">
              "What type of data will you be managing?"
            </p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 ml-4">
            <p className="text-sm font-semibold text-green-400 mb-2">
              👤 You answer:
            </p>
            <p className="text-slate-300 text-sm">
              "{industry.sampleApp.entities.join(', ')}"
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-400 mb-2">
              🤖 Agent asks:
            </p>
            <p className="text-slate-300 text-sm">
              "What features do you need?"
            </p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 ml-4">
            <p className="text-sm font-semibold text-green-400 mb-2">
              👤 You answer:
            </p>
            <p className="text-slate-300 text-sm">
              "View lists, add/edit forms, detail pages, search and filter."
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-400 mb-2">
              🤖 Agent asks:
            </p>
            <p className="text-slate-300 text-sm">
              "Do you need real data storage or just prototype with mock data?"
            </p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 ml-4">
            <p className="text-sm font-semibold text-green-400 mb-2">
              👤 You answer:
            </p>
            <p className="text-slate-300 text-sm">
              "Start with mock data, save to browser localStorage."
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-400 mb-2">
              🤖 Agent asks:
            </p>
            <p className="text-slate-300 text-sm">
              "What colors or style do you prefer? (e.g., dark theme, blue
              accents, modern/professional)"
            </p>
          </div>
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 ml-4">
            <p className="text-sm font-semibold text-green-400 mb-2">
              👤 You answer:
            </p>
            <p className="text-slate-300 text-sm">
              "Dark theme with blue/cyan accents, modern and professional."
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
              to know it should use Vite, React, TypeScript, Tailwind CSS,
              proper folder structure, data management patterns, and React hooks
              - all configured automatically!
            </span>
          </p>
        </div>
      </div>

      {/* Step 2: Generated Prompt */}
      <div className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          Step 2: Agent Generates ONE Complete Prompt
        </h3>
        <p className="text-slate-300 mb-4">
          After learning your needs, the agent creates ONE comprehensive prompt
          that builds your ENTIRE application:
        </p>
        <CodeBlock code={finalPrompt} language="text" />
        <div className="mt-4 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
          <p className="text-sm text-purple-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">🎯</span>
            <span>
              <strong>This ONE prompt builds everything:</strong> Project setup,
              folder structure, all components (list, forms, details),
              TypeScript types, mock data service, React hooks for data
              management, AND connects it all together into a working app!
            </span>
          </p>
        </div>
      </div>

      {/* Step 3: Agent Mode */}
      <div className="bg-linear-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🤖</span>
          Step 3: Paste in Agent Mode - Watch It Build Everything
        </h3>
        <p className="text-slate-300 mb-4">
          Copy the prompt and paste into Agent Mode:
        </p>
        <ol className="space-y-2 text-slate-300 text-sm ml-4 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-cyan-500">1.</span>
            <span>Copy the generated prompt</span>
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
            <span>
              Agent builds your ENTIRE application - structure, components,
              data, everything!
            </span>
          </li>
        </ol>
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <p className="text-sm text-green-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">🎉</span>
            <span>
              <strong>One prompt. Complete app.</strong> Agent Mode creates
              project files, installs packages, builds all components, sets up
              data management, connects everything, and verifies it works. You
              get a fully functional application!
            </span>
          </p>
        </div>
      </div>

      {/* Why This Works */}
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
          <span className="text-xl">🎯</span>
          Why One Prompt Builds Everything
        </h4>
        <ul className="space-y-3 text-slate-300 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">Complete in one shot:</strong>{' '}
              Instead of multiple steps (setup, then components, then data), ONE
              prompt builds your entire working application
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">
                copilot-instructions.md is your expert:
              </strong>{' '}
              Contains ALL technical knowledge - React patterns, TypeScript
              setup, Tailwind design, data management, hooks, validation,
              accessibility
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">
                You focus on business needs:
              </strong>{' '}
              "I need to track Products and Orders" - not "I need useState and
              useEffect hooks with localStorage"
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">
                Agent Mode is comprehensive:
              </strong>{' '}
              Reads copilot-instructions.md and builds project structure +
              components + data layer + everything connected and working
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">From zero to working app:</strong>{' '}
              Start with empty folder, one conversation, one prompt, and get a
              complete, functional, production-ready application
            </div>
          </li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-white/10">
        <button
          onClick={onPrevious}
          className="px-6 py-3 text-slate-300 hover:bg-slate-700/50 rounded-lg transition-colors font-semibold"
        >
          ← Back
        </button>
        <div className="text-sm text-slate-400">Step 2 of 6</div>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold shadow-lg shadow-cyan-500/30"
        >
          Build Components →
        </button>
      </div>
    </div>
  )
}
