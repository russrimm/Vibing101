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
        Let AI generate all the components for your {industry.sampleApp.name} in one step.
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
            <span>All necessary code, types, and styling automatically generated</span>
          </li>
        </ul>
      </div>

      {/* Step 1: Ask Mode */}
      <div className="bg-linear-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">💬</span>
          Step 1: Use GitHub Copilot Ask Mode
        </h3>
        <p className="text-slate-300 mb-4">
          Open GitHub Copilot Chat (Ctrl+Shift+I) and describe what you want in simple terms:
        </p>
        <CodeBlock
          code={`I want to build a ${industry.sampleApp.name.toLowerCase()} with:

- A table showing all items with search and sorting
- A form to add and edit items with validation  
- A detail page for each item
- Dark theme with good colors
- Mobile friendly

Can you create a comprehensive prompt for Agent Mode that will build all of this?`}
          language="text"
        />
        <div className="mt-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
          <p className="text-sm text-cyan-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">💡</span>
            <span><strong>Ask Mode</strong> will analyze your request and generate a detailed technical prompt that covers all requirements, dependencies, and best practices.</span>
          </p>
        </div>
      </div>

      {/* Step 2: Agent Mode */}
      <div className="bg-slate-900/50 border border-white/10 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🤖</span>
          Step 2: Copy the Generated Prompt to Agent Mode
        </h3>
        <p className="text-slate-300 mb-4">
          Copilot Ask Mode will give you a comprehensive prompt. Here's an example of what it generates:
        </p>
        <CodeBlock
          code={`@workspace Build a complete ${industry.sampleApp.name.toLowerCase()} for me.

I need a full-featured application for managing ${industry.name.toLowerCase()} data with:

Components needed:
- List/table component with search, filtering, and column sorting
- Form component with validation for creating and editing items
- Detail component for viewing full item information

Technical requirements:
- TypeScript with proper type definitions
- React Hook Form and Zod for form validation
- Tailwind CSS with dark theme (slate backgrounds, cyan accents)
- Responsive design that works on mobile
- Accessibility standards (WCAG AA compliance)
- Proper error handling and loading states

Install any required packages and update App.tsx to display the components.

After building, verify everything with lint and build checks.`}
          language="text"
        />
        <div className="mt-4 bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
          <p className="text-sm text-purple-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">⚡</span>
            <span><strong>Agent Mode</strong> (using @workspace) will now build everything automatically - creating files, installing packages, and setting up your entire application.</span>
          </p>
        </div>
      </div>

      {/* Why This Works */}
      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
          <span className="text-xl">🎯</span>
          Why This Two-Step Approach Works
        </h4>
        <ul className="space-y-3 text-slate-300 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">Ask Mode = Planning:</strong> Understands your needs and creates a complete technical specification
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">Agent Mode = Building:</strong> Executes the plan by creating files, installing packages, and writing code
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">No technical knowledge needed:</strong> Just describe your vision in plain English
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <div>
              <strong className="text-white">Everything handled automatically:</strong> Dependencies, types, styling, validation, accessibility - all included
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
