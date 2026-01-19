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
  const projectName = industry.sampleApp.name.toLowerCase().replace(/\s+/g, '-')

  const copilotPrompt = `Create a new Vite + React + TypeScript project for a ${industry.sampleApp.name} application with the following requirements:

1. Project Setup:
   - Create a new Vite project named "${projectName}" using the react-ts template
   - Install all dependencies

2. Install and Configure Tailwind CSS:
   - Install tailwindcss, postcss, and autoprefixer
   - Configure tailwind.config.js with proper content paths for all tsx/jsx files
   - Configure postcss.config.cjs
   - Update src/index.css with Tailwind directives

3. Create Project Structure:
   - src/components/ for reusable UI components
   - src/types/ for TypeScript type definitions
   - src/hooks/ for custom React hooks
   - src/services/ for API and data services

4. Industry-Specific Setup for ${industry.name}:
   - Create types for: ${industry.sampleApp.entities.join(', ')}
   - Set up initial component structure for the ${industry.sampleApp.name}

5. Test the Setup:
   - Run npm run dev to verify everything works
   - Confirm the dev server starts at http://localhost:5173

Please create all necessary files, install all dependencies, and verify the setup is working correctly.`

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
      <h2 className="text-3xl font-bold text-white mb-4">
        Let GitHub Copilot Build Your Project
      </h2>
      <p className="text-slate-300 mb-8">
        Instead of manually typing commands, let GitHub Copilot agent do all the
        work! It will create your {industry.sampleApp.name}, install
        dependencies, configure everything, and verify it's working.
      </p>

      {/* What Copilot Will Do */}
      <div className="mb-8 bg-slate-900/50 rounded-xl p-6 border border-cyan-500/20">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🤖</span>
          What GitHub Copilot Will Do For You
        </h3>
        <ul className="space-y-3 text-slate-300 ml-6">
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-1">✓</span>
            <span>
              Create a new Vite + React + TypeScript project named{' '}
              <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">
                {projectName}
              </code>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-1">✓</span>
            <span>Install and configure Tailwind CSS with proper settings</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-1">✓</span>
            <span>
              Create organized folder structure (components, types, hooks,
              services)
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-1">✓</span>
            <span>
              Set up TypeScript types for{' '}
              {industry.sampleApp.entities.slice(0, 2).join(' and ')}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 mt-1">✓</span>
            <span>Test that everything works by running the dev server</span>
          </li>
        </ul>
      </div>

      {/* How to Use Copilot */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm shadow-lg shadow-cyan-500/30">
            1
          </span>
          Open GitHub Copilot Chat
        </h3>
        <p className="text-slate-300 mb-4 ml-10">
          Press{' '}
          <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">
            Ctrl+Shift+I
          </code>{' '}
          (Windows/Linux) or{' '}
          <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">
            Cmd+Shift+I
          </code>{' '}
          (Mac) to open Copilot Chat in VS Code.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm shadow-lg shadow-cyan-500/30">
            2
          </span>
          Copy & Paste This Prompt
        </h3>
        <p className="text-slate-300 mb-4 ml-10">
          Copy the prompt below and paste it into GitHub Copilot Chat. Copilot
          will read the Beast Mode instructions from{' '}
          <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">
            .github/copilot-instructions.md
          </code>{' '}
          and autonomously complete all the steps.
        </p>
        <div className="ml-10">
          <CodeBlock code={copilotPrompt} language="markdown" />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm shadow-lg shadow-cyan-500/30">
            3
          </span>
          Watch Copilot Work
        </h3>
        <p className="text-slate-300 mb-4 ml-10">GitHub Copilot will:</p>
        <ul className="ml-10 space-y-2 text-slate-300">
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">→</span>
            <span>Run all necessary terminal commands</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">→</span>
            <span>Create and edit all configuration files</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">→</span>
            <span>Set up the folder structure</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">→</span>
            <span>Verify everything is working</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400">→</span>
            <span>Tell you when it's done!</span>
          </li>
        </ul>
      </div>

      {/* Beast Mode Info */}
      <div className="mb-8 bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-purple-300 mb-3 flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          Beast Mode Enabled
        </h4>
        <p className="text-purple-200 text-sm mb-3">
          This project includes Beast Mode instructions in{' '}
          <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">
            .github/copilot-instructions.md
          </code>
          . This tells GitHub Copilot to work autonomously, handle errors,
          research best practices, and keep working until the task is complete.
        </p>
        <div className="bg-slate-800/50 rounded-lg p-4">
          <p className="text-slate-300 text-sm">
            <strong className="text-cyan-400">What this means:</strong> You
            don't need to micromanage or provide step-by-step instructions.
            Copilot will figure out what needs to be done, handle any errors it
            encounters, and work through the entire setup process on its own.
          </p>
        </div>
      </div>

      {/* Industry-Specific Tip */}
      <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6 mb-8">
        <h4 className="text-lg font-semibold text-cyan-300 mb-2">
          {industry.icon} {industry.name} Pro Tip
        </h4>
        <p className="text-cyan-200 text-sm">
          After Copilot finishes the setup, you'll have a complete project
          structure ready for building your {industry.sampleApp.name}. The next
          step will be creating the actual components for{' '}
          {industry.sampleApp.entities.slice(0, 2).join(', ')}, and more.
          Copilot will handle all of that too!
        </p>
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
