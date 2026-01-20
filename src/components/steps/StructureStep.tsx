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
  // Special prompt for retail industry
  const retailPrompt = `Objective
Build a fully functional, production-ready retail management application, not a mock UI or partial prototype. The app must include working data models, CRUD flows, business logic, navigation, and basic persistence (mock/local or Dataverse-ready abstraction).
Visual & UX Requirements
Modern, professional blue-themed UI
Mobile-first responsive design
Accessible, clean layout with a persistent app shell (navigation, header, alerts)
Functional Scope (ALL REQUIRED)
Implement the following features completely, with working screens, forms, and logic:
Product Management
Create, edit, delete products
SKU and optional barcode support
Pricing, reorder point, active/inactive status
Inventory & Stock Tracking
Track on-hand stock per product
Automatically calculate available stock
Low-stock alerts when inventory falls at or below reorder point
Prominent alert indicators in the UI
Supplier Management
Add, edit, delete suppliers
Associate products with suppliers
View supplier-related purchase orders
Purchase Order Management
Create and manage purchase orders
Track status (draft, submitted, received, cancelled)
Receive orders and automatically update inventory levels
Sales Tracking
Record sales transactions
Support multiple line items per sale
Automatically decrement inventory on sale completion
Barcode / SKU Scanning
Enable barcode or SKU-based product lookup
Use browser-native APIs when available
Provide manual input fallback
Reporting & Analytics Dashboard
High-level KPIs (total products, low-stock items, sales totals, open POs)
Sales history and trends
Inventory health overview
Architecture Expectations
Clear data models for products, inventory, suppliers, purchase orders, and sales
A thin data-access layer suitable for swapping between mock storage and Dataverse
Reusable components and modular feature folders
No single .tsx file should exceed ~300 lines
Delivery Expectations
Scaffold the full app structure first (routes, layout, navigation)
Implement features incrementally but do not skip any functional area
Ensure the app can be run, navigated, and used end-to-end
Build this as a complete retail application suitable for demonstrating a real Power Apps Code-First solution, not just a UI showcase.`

  const initialPrompt =
    industry.id === 'retail'
      ? retailPrompt
      : `Create a ${industry.sampleApp.name} application that tracks ${industry.name.toLowerCase()} data.`

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
      <h2 className="text-3xl font-bold text-white mb-4">
        Set Up Your Project Structure
      </h2>
      <p className="text-slate-300 mb-8">
        Let GitHub Copilot Agent build your entire {industry.sampleApp.name}{' '}
        project structure. You just describe what you want in plain English!
      </p>

      {/* Step 0: Set up project infrastructure */}
      <div className="bg-linear-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">📋</span>
          Step 0: Set Up Your Project Infrastructure (First!)
        </h3>
        <p className="text-slate-300 mb-4">
          Before building your app, set up your project folder and instruction
          files:
        </p>
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">📚</span>
            <span>
              <strong>For more details:</strong> See{' '}
              <a
                href="https://code.visualstudio.com/docs/copilot/customization/custom-instructions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                VS Code's Custom Instructions documentation
              </a>{' '}
              for the complete guide on this process.
            </span>
          </p>
        </div>
        <ol className="space-y-3 text-slate-300 text-sm ml-4 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono font-semibold">1.</span>
            <span>
              In VS Code, click the{' '}
              <strong className="text-white">Explorer</strong> button at the top
              of the left toolbar
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono font-semibold">2.</span>
            <span>
              Select <strong className="text-white">"Open Folder"</strong> and
              create a new folder (e.g.,{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                my-{industry.name.toLowerCase()}-app
              </code>
              )
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono font-semibold">3.</span>
            <span>
              Click the{' '}
              <strong className="text-white">"Yes I trust the authors"</strong>{' '}
              button and optionally check{' '}
              <strong className="text-white">"Trust all authors"</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono font-semibold">4.</span>
            <span>
              Make sure the agent mode is set to{' '}
              <strong className="text-white">"Beast Mode"</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono font-semibold">5.</span>
            <span>
              Right-click in the Explorer pane and click{' '}
              <strong className="text-white">"New Folder"</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono font-semibold">6.</span>
            <span>
              Name the folder{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                .github
              </code>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono font-semibold">7.</span>
            <span>
              Right-click on the <strong className="text-white">.github</strong>{' '}
              folder and select{' '}
              <strong className="text-white">"New File"</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono font-semibold">8.</span>
            <span>
              Name the file{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                copilot-instructions.md
              </code>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono font-semibold">9.</span>
            <span>
              Right-click on the <strong className="text-white">.github</strong>{' '}
              folder and select{' '}
              <strong className="text-white">"New Folder"</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono font-semibold">10.</span>
            <span>
              Name the folder{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                instructions
              </code>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono font-semibold">11.</span>
            <span>
              Go to{' '}
              <a
                href="https://github.com/github/awesome-copilot/blob/main/instructions/power-apps-code-apps.instructions.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                power-apps-code-apps.instructions.md
              </a>
              , click the{' '}
              <strong className="text-white">"Download"</strong> button (top right),
              then move the file into the{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                .github\instructions
              </code>{' '}
              folder
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono font-semibold">12.</span>
            <span>
              Go to{' '}
              <a
                href="https://github.com/github/awesome-copilot/blob/main/instructions/typescript-5-es2022.instructions.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                typescript-5-es2022.instructions.md
              </a>
              , click the{' '}
              <strong className="text-white">"Download"</strong> button,
              then move the file into the{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                .github\instructions
              </code>{' '}
              folder
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-cyan-400 font-mono font-semibold">13.</span>
            <span>
              Go to{' '}
              <a
                href="https://github.com/github/awesome-copilot/blob/main/agents/4.1-Beast.agent.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                4.1-Beast.agent.md
              </a>
              , click the{' '}
              <strong className="text-white">"Download"</strong> button,
              rename it to{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                copilot-instructions.md
              </code>
              , then move it into the{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                .github
              </code>{' '}
              folder
            </span>
          </li>
        </ol>
        <div className="space-y-3">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
            <p className="text-sm text-amber-300 flex items-start gap-2">
              <span className="text-lg mt-0.5">⚠️</span>
              <span>
                <strong>Why do this first?</strong> This file teaches Copilot
                your project's standards (TypeScript-only, Vite, React,
                Tailwind, etc.) so it builds everything correctly from the
                start!
              </span>
            </p>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-blue-300 flex items-start gap-2">
              <span className="text-lg mt-0.5">📚</span>
              <span>
                <strong>Want more examples?</strong> Check out{' '}
                <a
                  href="https://github.com/github/awesome-copilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  GitHub's Awesome Copilot repository
                </a>{' '}
                for many starter instruction files for different languages and
                frameworks!
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Step 1: Check Latest Versions */}
      <div className="bg-linear-to-br from-green-900/30 to-teal-900/30 border border-green-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">🔍</span>
          Step 1: Identify Latest Technology Versions
        </h3>
        <p className="text-slate-300 mb-4">
          Before building, check the latest major versions of key technologies:
        </p>
        <ol className="space-y-3 text-slate-300 text-sm ml-4 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-mono font-semibold">1.</span>
            <span>
              Visit{' '}
              <a
                href="https://nodejs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                nodejs.org
              </a>{' '}
              to check the latest <strong className="text-white">Node.js</strong> LTS version
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-mono font-semibold">2.</span>
            <span>
              Visit{' '}
              <a
                href="https://vitejs.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                vitejs.dev
              </a>{' '}
              to check the latest <strong className="text-white">Vite</strong> version
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-mono font-semibold">3.</span>
            <span>
              Visit{' '}
              <a
                href="https://react.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                react.dev
              </a>{' '}
              to check the latest <strong className="text-white">React</strong> version
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400 font-mono font-semibold">4.</span>
            <span>
              Visit{' '}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                tailwindcss.com
              </a>{' '}
              to check the latest <strong className="text-white">Tailwind CSS</strong> version
            </span>
          </li>
        </ol>
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
          <p className="text-sm text-green-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">💡</span>
            <span>
              <strong>Why check versions?</strong> Specifying the latest versions in your prompt ensures Copilot uses the most current APIs, features, and best practices when building your application.
            </span>
          </p>
        </div>
      </div>

      {/* Step 2: Enter the Prompt */}
      <div className="bg-linear-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">💬</span>
          Step 2: Enter the Build Prompt in Beast Mode
        </h3>
        <p className="text-slate-300 mb-4">
          Open GitHub Copilot Chat (Ctrl+Shift+I), make sure you're in{' '}
          <strong className="text-white">Beast Mode</strong>, and enter this
          prompt with the versions you found:
        </p>
        <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4 mb-4">
          <p className="text-sm text-indigo-300">
            <strong className="text-white">Add this to the beginning of your prompt:</strong>
            <br />
            <code className="text-cyan-400 text-xs">
              Use Node.js [version], Vite [version], React [version], and Tailwind CSS [version].
            </code>
          </p>
        </div>
        <CodeBlock code={initialPrompt} language="text" />
      </div>

      {/* Step 3: Agent Builds */}
      <div className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          Step 3: Agent Builds Your Application
        </h3>
        <p className="text-slate-300 mb-4">
          Beast Mode will build your ENTIRE application based on the prompt:
        </p>

        <div className="space-y-3 mb-4">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
            <p className="text-sm text-amber-300 flex items-start gap-2">
              <span className="text-lg mt-0.5">⚠️</span>
              <span>
                <strong>
                  During the build, you'll need to approve actions:
                </strong>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>
                    • Select{' '}
                    <strong className="text-white">"Allow and Review"</strong>{' '}
                    or <strong className="text-white">"Allow and Skip"</strong>
                  </li>
                  <li>
                    • <em>Optional:</em> Customize VS Code to auto-approve by
                    going to{' '}
                    <strong className="text-white">
                      File → Preferences → Settings → Features → Chat
                    </strong>
                    , configuring{' '}
                    <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                      chat.tools.autoApprove
                    </code>{' '}
                    and{' '}
                    <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                      chat.tools.terminal.autoApprove
                    </code>
                    , and selecting{' '}
                    <strong className="text-white">
                      "Enable Auto-Approve"
                    </strong>{' '}
                    if desired
                  </li>
                </ul>
              </span>
            </p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <p className="text-sm text-blue-300 flex items-start gap-2">
              <span className="text-lg mt-0.5">📦</span>
              <span>
                <strong>When prompted to install Vite:</strong> Type{' '}
                <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                  y
                </code>{' '}
                and press Enter
              </span>
            </p>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <p className="text-sm text-green-300 flex items-start gap-2">
              <span className="text-lg mt-0.5">📁</span>
              <span>
                <strong>When it says "current directory is not empty":</strong>{' '}
                Choose{' '}
                <strong className="text-white">
                  "Ignore files and continue"
                </strong>{' '}
                and accept the defaults on remaining questions
              </span>
            </p>
          </div>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
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
        <div className="mt-4 bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
          <p className="text-sm text-orange-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">🔒</span>
            <span>
              <strong>After the build completes:</strong> If you see a message like{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-yellow-400">
                "9 vulnerabilities (1 low, 4 moderate, 3 high, 1 critical)"
              </code>
              , run{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                npm audit fix --force
              </code>{' '}
              in the terminal. This command automatically updates packages to secure versions 
              and applies breaking changes if needed to fix security issues.
            </span>
          </p>
        </div>
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
          className="px-6 py-3 bg-cyan-700 text-slate-50 font-black text-lg rounded-lg hover:bg-cyan-800 transition-colors shadow-xl shadow-cyan-500/50 border-2 border-cyan-400"
        >
          <span className="text-slate-50">Test & Deploy →</span>
        </button>
      </div>
    </div>
  )
}
