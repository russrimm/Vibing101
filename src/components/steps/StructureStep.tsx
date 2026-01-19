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

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
      <h2 className="text-3xl font-bold text-white mb-4">
        Create Your Project
      </h2>
      <p className="text-slate-300 mb-8">
        Let's create your {industry.sampleApp.name} using Vite, React, and
        TypeScript.
      </p>

      {/* Step 1: Create Project */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm shadow-lg shadow-cyan-500/30">
            1
          </span>
          Create the Project
        </h3>
        <p className="text-slate-300 mb-4 ml-10">
          Open your terminal and run this command to create a new Vite project
          with React and TypeScript:
        </p>
        <div className="ml-10">
          <CodeBlock
            code={`npm create vite@latest ${projectName} -- --template react-ts\ncd ${projectName}\nnpm install`}
            language="bash"
          />
        </div>
      </div>

      {/* Step 2: Install Tailwind */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center text-sm shadow-lg shadow-cyan-500/30">
            2
          </span>
          Install Tailwind CSS
        </h3>
        <p className="text-slate-300 mb-4 ml-10">
          Install and configure Tailwind CSS for styling:
        </p>
        <div className="ml-10 space-y-4">
          <CodeBlock
            code="npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p"
            language="bash"
          />
          <p className="text-sm text-slate-400">
            Update{' '}
            <code className="bg-slate-700 px-2 py-1 rounded text-cyan-400">
              tailwind.config.js
            </code>
            :
          </p>
          <CodeBlock
            code={`export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
            language="javascript"
          />
          <p className="text-sm text-gray-600">
            Update{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">src/index.css</code>
            :
          </p>
          <CodeBlock
            code={`@tailwind base;\n@tailwind components;\n@tailwind utilities;`}
            language="css"
          />
        </div>
      </div>

      {/* Step 3: Create Folder Structure */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
            3
          </span>
          Create Folder Structure
        </h3>
        <p className="text-gray-600 mb-4 ml-10">
          Organize your project with a clean folder structure:
        </p>
        <div className="ml-10">
          <CodeBlock
            code={`mkdir -p src/components src/types src/hooks src/services`}
            language="bash"
          />
          <div className="mt-4 bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Your structure:
            </p>
            <pre className="text-sm text-gray-600">
              {`src/
  ├── components/     # Reusable UI components
  ├── types/          # TypeScript types
  ├── hooks/          # Custom React hooks
  ├── services/       # API and data services
  └── App.tsx         # Main app component`}
            </pre>
          </div>
        </div>
      </div>

      {/* Step 4: Test It */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
            ✓
          </span>
          Test Your Setup
        </h3>
        <p className="text-gray-600 mb-4 ml-10">
          Start the development server:
        </p>
        <div className="ml-10">
          <CodeBlock code="npm run dev" language="bash" />
          <p className="text-sm text-gray-600 mt-2">
            Open{' '}
            <code className="bg-gray-100 px-2 py-1 rounded">
              http://localhost:5173
            </code>{' '}
            in your browser. You should see the Vite + React welcome screen.
          </p>
        </div>
      </div>

      {/* Industry-Specific Tip */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-semibold text-blue-900 mb-2">
          {industry.icon} {industry.name} Tip
        </h4>
        <p className="text-blue-800 text-sm">
          For your {industry.sampleApp.name}, we'll create components for:{' '}
          {industry.sampleApp.entities.slice(0, 2).join(', ')}, and more. Get
          ready to build something awesome!
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <button
          onClick={onPrevious}
          className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-semibold"
        >
          ← Back
        </button>
        <div className="text-sm text-gray-500">Step 2 of 6</div>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          Build Components →
        </button>
      </div>
    </div>
  )
}
