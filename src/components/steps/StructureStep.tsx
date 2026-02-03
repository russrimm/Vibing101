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

  const oilGasPrompt = `Objective
Build a fully functional, production-ready field asset management application, not a mock UI or partial prototype. The app must include working data models, CRUD flows, business logic, navigation, and basic persistence (mock/local or Dataverse-ready abstraction).
Visual & UX Requirements
Modern, professional orange-themed UI
Mobile-first responsive design (field workers use tablets/phones)
Accessible, clean layout with a persistent app shell (navigation, header, alerts)
Functional Scope (ALL REQUIRED)
Implement the following features completely, with working screens, forms, and logic:
Equipment/Asset Management
Create, edit, delete equipment records
Equipment ID, type, location, status tracking
Criticality levels (critical, high, medium, low)
Installation date and expected lifecycle
Maintenance Scheduling & Tracking
Schedule preventive maintenance tasks
Track maintenance history per asset
Assign work orders to technicians
Record labor hours and parts used
Overdue maintenance alerts and notifications
Safety Inspection Management
Create and complete safety inspection forms
Photo/documentation upload capability
Pass/fail/conditional status tracking
Inspector signature and timestamp
Inspection history and audit trail
Work Order Management
Create, assign, and complete work orders
Priority levels (emergency, urgent, routine)
Status tracking (open, in-progress, completed, cancelled)
Link work orders to specific assets
Equipment Monitoring & Alerts
Real-time status indicators (operational, down, maintenance)
Alert dashboard for critical equipment issues
Equipment downtime tracking
Performance metrics and utilization rates
Reporting & Analytics Dashboard
High-level KPIs (total assets, maintenance compliance, overdue tasks, equipment uptime)
Maintenance cost tracking
Safety inspection compliance rates
Asset health overview
Architecture Expectations
Clear data models for equipment, maintenance, inspections, work orders, and technicians
A thin data-access layer suitable for swapping between mock storage and Dataverse
Reusable components and modular feature folders
No single .tsx file should exceed ~300 lines
Delivery Expectations
Scaffold the full app structure first (routes, layout, navigation)
Implement features incrementally but do not skip any functional area
Ensure the app can be run, navigated, and used end-to-end
Build this as a complete field asset management application suitable for demonstrating a real Power Apps Code-First solution, not just a UI showcase.`

  const transportationPrompt = `Objective
Build a fully functional, production-ready fleet operations application, not a mock UI or partial prototype. The app must include working data models, CRUD flows, business logic, navigation, and basic persistence (mock/local or Dataverse-ready abstraction).
Visual & UX Requirements
Modern, professional green-themed UI
Mobile-first responsive design (drivers and dispatchers use mobile devices)
Accessible, clean layout with a persistent app shell (navigation, header, alerts)
Functional Scope (ALL REQUIRED)
Implement the following features completely, with working screens, forms, and logic:
Vehicle Management
Create, edit, delete vehicle records
VIN, make, model, year, license plate
Vehicle type (truck, van, car, etc.)
Status (available, in-use, maintenance, retired)
Mileage and fuel tracking
Driver Management
Create, edit, delete driver profiles
License number, expiration date, endorsements
Contact information and emergency contacts
Driver status (active, on-leave, inactive)
Performance ratings and safety records
Route Planning & Assignment
Create and manage delivery routes
Assign routes to drivers and vehicles
Route optimization suggestions
Estimated vs actual delivery times
Multi-stop route support
Delivery Management
Create, track, and complete deliveries
Customer information and delivery addresses
Package details (weight, dimensions, special handling)
Delivery status (pending, in-transit, delivered, failed)
Proof of delivery (signature, photo, timestamp)
Real-time delivery tracking
Vehicle Maintenance Tracking
Schedule preventive maintenance
Track service history per vehicle
Maintenance alerts based on mileage/date
Parts and labor cost tracking
Vehicle inspection checklists
Reporting & Analytics Dashboard
High-level KPIs (active deliveries, on-time rate, fleet utilization, maintenance costs)
Driver performance metrics
Route efficiency analysis
Vehicle health and maintenance compliance
Cost per mile/delivery analytics
Architecture Expectations
Clear data models for vehicles, drivers, routes, deliveries, and maintenance records
A thin data-access layer suitable for swapping between mock storage and Dataverse
Reusable components and modular feature folders
No single .tsx file should exceed ~300 lines
Delivery Expectations
Scaffold the full app structure first (routes, layout, navigation)
Implement features incrementally but do not skip any functional area
Ensure the app can be run, navigated, and used end-to-end
Build this as a complete fleet operations application suitable for demonstrating a real Power Apps Code-First solution, not just a UI showcase.`

  const manufacturingPrompt = `Objective
Build a fully functional, production-ready manufacturing tracker application, not a mock UI or partial prototype. The app must include working data models, CRUD flows, business logic, navigation, and basic persistence (mock/local or Dataverse-ready abstraction).
Visual & UX Requirements
Modern, professional purple-themed UI
Mobile-first responsive design (shop floor workers use tablets)
Accessible, clean layout with a persistent app shell (navigation, header, alerts)
Functional Scope (ALL REQUIRED)
Implement the following features completely, with working screens, forms, and logic:
Production Line Management
Create, edit, delete production line configurations
Line capacity and current utilization
Active/inactive status and shift schedules
Equipment and station assignments
Production line health indicators
Work Order Management
Create and manage production work orders
Priority levels (rush, standard, low-priority)
Status tracking (queued, in-progress, completed, on-hold, cancelled)
Target vs actual production quantities
Start/end timestamps and cycle time tracking
Material & Inventory Management
Track raw materials and components
Material consumption per work order
Low-stock alerts and reorder points
Material lot/batch tracking for traceability
Bill of Materials (BOM) for each product
Supplier information and lead times
Quality Control & Inspection
Create quality inspection checkpoints
Record inspection results (pass/fail/rework)
Defect tracking and categorization
Quality metrics per production line
Root cause analysis notes
Corrective action tracking
Production Scheduling
Schedule work orders on production lines
Capacity planning and resource allocation
Visual production calendar
Bottleneck identification
Schedule optimization suggestions
Real-time Production Monitoring
Live production status dashboard
Actual vs target production rates
Downtime tracking and reasons
Equipment status indicators
Shift performance metrics
Reporting & Analytics Dashboard
High-level KPIs (units produced, OEE, yield rate, defect rate, on-time completion)
Production cost analysis
Quality trends and Pareto charts
Resource utilization metrics
Inventory turnover rates
Architecture Expectations
Clear data models for production lines, work orders, materials, quality inspections, and schedules
A thin data-access layer suitable for swapping between mock storage and Dataverse
Reusable components and modular feature folders
No single .tsx file should exceed ~300 lines
Delivery Expectations
Scaffold the full app structure first (routes, layout, navigation)
Implement features incrementally but do not skip any functional area
Ensure the app can be run, navigated, and used end-to-end
Build this as a complete manufacturing tracker application suitable for demonstrating a real Power Apps Code-First solution, not just a UI showcase.`

  const healthcarePrompt = `Objective
Build a fully functional, production-ready patient appointment system, not a mock UI or partial prototype. The app must include working data models, CRUD flows, business logic, navigation, and basic persistence (mock/local or Dataverse-ready abstraction).
Visual & UX Requirements
Modern, professional red-themed UI
Mobile-first responsive design
Accessible, clean layout with a persistent app shell (navigation, header, alerts)
HIPAA-aware design (no actual PHI, but structured as if handling sensitive data)
Functional Scope (ALL REQUIRED)
Implement the following features completely, with working screens, forms, and logic:
Patient Management
Create, edit, delete patient profiles
Patient demographics (name, DOB, contact info)
Insurance information (carrier, policy number, group)
Emergency contact details
Patient status (active, inactive, deceased)
Medical history summary section
Provider Management
Create, edit, delete provider profiles
Provider specialties and credentials
Office locations and contact information
Available appointment types
Provider schedules and working hours
Appointment Scheduling
Schedule, reschedule, and cancel appointments
Available time slot search by provider/specialty
Appointment types (consultation, follow-up, procedure, etc.)
Duration and buffer time configuration
Recurring appointment support
Appointment reminders and notifications
Appointment Management
Check-in/check-out workflow
Appointment status (scheduled, checked-in, in-progress, completed, no-show, cancelled)
Waiting room queue management
Appointment history per patient
Visit notes and reason for visit
Insurance verification status
Calendar & Availability Management
Multi-provider calendar views (day/week/month)
Color-coded appointment types
Block time for breaks/lunch/meetings
Holiday and vacation scheduling
Resource conflict detection
Medical Records Management
Document upload and attachment
Visit summaries and notes
Medication lists
Allergy and condition tracking
Lab results and imaging reports
Document version history
Reporting & Analytics Dashboard
High-level KPIs (daily appointments, no-show rate, provider utilization, wait times)
Patient volume trends
Revenue cycle metrics (insurance vs self-pay)
Provider productivity
Patient satisfaction scores
Architecture Expectations
Clear data models for patients, providers, appointments, medical records, and schedules
A thin data-access layer suitable for swapping between mock storage and Dataverse
Reusable components and modular feature folders
No single .tsx file should exceed ~300 lines
Security considerations for sensitive data
Delivery Expectations
Scaffold the full app structure first (routes, layout, navigation)
Implement features incrementally but do not skip any functional area
Ensure the app can be run, navigated, and used end-to-end
Build this as a complete patient appointment system suitable for demonstrating a real Power Apps Code-First solution, not just a UI showcase.`

  const financePrompt = `Objective
Build a fully functional, production-ready financial request portal, not a mock UI or partial prototype. The app must include working data models, CRUD flows, business logic, navigation, and basic persistence (mock/local or Dataverse-ready abstraction).
Visual & UX Requirements
Modern, professional indigo-themed UI
Mobile-first responsive design
Accessible, clean layout with a persistent app shell (navigation, header, alerts)
Functional Scope (ALL REQUIRED)
Implement the following features completely, with working screens, forms, and logic:
Request Management
Create, edit, delete financial requests
Request types (reimbursement, budget, purchase, payment authorization, etc.)
Amount and currency
Business justification and description
Urgency/priority levels
Supporting documentation attachment
Request status tracking
Approval Workflow Management
Multi-level approval routing (manager, director, finance, etc.)
Approval chain visualization
Approve, reject, or request more information
Approval comments and conditions
Delegate approval authority
Escalation rules for overdue approvals
Email notifications at each approval stage
Document Management
Upload and attach supporting documents
Document versioning and history
Document types (invoices, receipts, contracts, quotes)
Secure document storage
Document preview capability
Audit trail of document access
Budget & Cost Center Tracking
Link requests to budget categories
Cost center assignment
Budget availability check
Year-to-date spending vs budget
Budget allocation and reallocation
Historical spending analysis
Request Tracking & Status
Request status (draft, submitted, pending-approval, approved, rejected, completed, cancelled)
Status history and timeline
Estimated vs actual processing time
Request aging and SLA monitoring
Batch request processing
User & Role Management
Requester profiles
Approver roles and hierarchies
Delegation settings
Out-of-office status
Notification preferences
Reporting & Analytics Dashboard
High-level KPIs (total requests, approval rates, average processing time, pending value)
Request volume trends by type
Approval bottleneck analysis
Budget utilization metrics
Compliance and audit reports
Expense category breakdown
Audit & Compliance
Complete audit trail of all actions
Timestamp and user tracking
Before/after state for edits
Regulatory compliance fields
Fraud detection flags
SOX compliance considerations
Architecture Expectations
Clear data models for requests, approvals, documents, budgets, and users
A thin data-access layer suitable for swapping between mock storage and Dataverse
Reusable components and modular feature folders
No single .tsx file should exceed ~300 lines
Security and audit logging throughout
Delivery Expectations
Scaffold the full app structure first (routes, layout, navigation)
Implement features incrementally but do not skip any functional area
Ensure the app can be run, navigated, and used end-to-end
Build this as a complete financial request portal suitable for demonstrating a real Power Apps Code-First solution, not just a UI showcase.`

  const getPromptForIndustry = (industryId: string) => {
    switch (industryId) {
      case 'retail':
        return retailPrompt
      case 'oil-gas-energy':
        return oilGasPrompt
      case 'transportation':
        return transportationPrompt
      case 'manufacturing':
        return manufacturingPrompt
      case 'healthcare':
        return healthcarePrompt
      case 'finance':
        return financePrompt
      default:
        return `Create a ${industry.sampleApp.name} application that tracks ${industry.name.toLowerCase()} data.`
    }
  }

  const initialPrompt = getPromptForIndustry(industry.id)

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
      <h2 className="text-3xl font-bold text-white mb-4">
        Set Up Your Project Structure
      </h2>
      <p className="text-slate-300 mb-8">
        Let GitHub Copilot Agent build your entire {industry.sampleApp.name}{' '}
        project structure. You just describe what you want in plain English!
      </p>

      {/* Prerequisites Section */}
      <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-2 border-purple-500/40 rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-3xl">🚀</span>
          Prerequisites: Set Up Your Development Environment
        </h3>
        <p className="text-slate-300 mb-6">
          Before building your {industry.sampleApp.name} app, complete these
          essential setup steps:
        </p>

        {/* GitHub Copilot & MCP Servers Setup */}
        <div className="bg-slate-800/60 border border-purple-500/30 rounded-lg p-5 mb-5">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span className="text-xl">🤖</span>
            1. Set Up Beast Mode (Custom Chat Mode) and MCP Servers
          </h4>
          <p className="text-slate-300 mb-4 text-sm">
            Beast Mode is a powerful custom chat mode that provides thorough,
            production-ready code generation:
          </p>
          <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
            <ol className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  a.
                </span>
                <span>
                  In VS Code, click the{' '}
                  <strong className="text-white">Extensions</strong> icon in the
                  left sidebar (or press{' '}
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                    Ctrl+Shift+X
                  </code>
                  )
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  b.
                </span>
                <span>
                  Search for{' '}
                  <strong className="text-white">"GitHub Copilot"</strong> and
                  click <strong className="text-white">Install</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  c.
                </span>
                <span>Sign in with your GitHub account when prompted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  d.
                </span>
                <span>Close the walkthrough steps window</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  e.
                </span>
                <span>
                  Click the{' '}
                  <strong className="text-white">
                    Agent/Ask mode dropdown
                  </strong>{' '}
                  at the bottom of the GitHub Copilot chat
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  f.
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
                  g.
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
                  h.
                </span>
                <span>
                  Click <strong className="text-white">"User Data"</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  i.
                </span>
                <span>
                  Enter <strong className="text-white">"Beast Mode"</strong> and
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
              <span className="text-slate-50">Open Beast Mode Content →</span>
            </a>
            <ol className="space-y-2 text-sm text-slate-300 mt-4">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  j.
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
                  k.
                </span>
                <span>
                  Paste the content into the{' '}
                  <strong className="text-white">Beast Mode.agent.md</strong>{' '}
                  file that opened in VS Code
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  l.
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
                  m.
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
                  n.
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
                  o.
                </span>
                <span>
                  Add{' '}
                  <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-400">
                    "chat.agent.maxRequests": 200
                  </code>{' '}
                  to the settings file, and add a comma to end of the line
                  before it so it's properly formatted json
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-semibold shrink-0">
                  p.
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
                  and select <strong className="text-white">"Install"</strong>{' '}
                  for <strong className="text-white">Context7</strong>,{' '}
                  <strong className="text-white">Github</strong>,{' '}
                  <strong className="text-white">Microsoft Learn</strong>, and{' '}
                  <strong className="text-white">Playwright</strong>
                </span>
              </li>
            </ol>
          </div>
        </div>

        {/* Fork Vibing101 Repository */}
        <div className="bg-slate-800/60 border border-cyan-500/30 rounded-lg p-5 mb-5">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span className="text-xl">🍴</span>
            2. Fork the Vibing101 Repository
          </h4>
          <p className="text-slate-300 mb-3 text-sm">
            Get your own copy of this learning platform to use as a reference:
          </p>
          <ol className="space-y-2 text-slate-300 text-sm ml-4">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">a.</span>
              <span>
                Create a folder for all your future coding projects (e.g.,{' '}
                <code className="bg-slate-900 px-1.5 py-0.5 rounded text-cyan-400">
                  C:\repos
                </code>
                ):
                <pre className="bg-slate-900 px-3 py-2 rounded text-cyan-400 mt-2 overflow-x-auto">
                  mkdir C:\repos
                </pre>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">b.</span>
              <span>
                Navigate to{' '}
                <a
                  href="https://github.com/russrimm/Vibing101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline"
                >
                  github.com/russrimm/Vibing101
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">c.</span>
              <span>
                Click the <strong className="text-white">Fork</strong> button
                (top-right corner)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">d.</span>
              <span>GitHub will create a copy in your account</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">e.</span>
              <span>
                Clone your fork to your local machine:
                <pre className="bg-slate-900 px-3 py-2 rounded text-cyan-400 mt-2 overflow-x-auto">
                  cd c:\repos{'\n'}
                  git clone https://github.com/YOUR-USERNAME/Vibing101.git{'\n'}
                  cd Vibing101{'\n'}
                  code .
                </pre>
                <span className="text-xs text-slate-400 mt-1 block">
                  Replace YOUR-USERNAME with your GitHub username
                </span>
              </span>
            </li>
          </ol>
        </div>

        {/* Enable Instruction Files */}
        <div className="bg-slate-800/60 border border-green-500/30 rounded-lg p-5 mb-5">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <span className="text-xl">⚙️</span>
            2. Enable Instruction Files in VS Code
          </h4>
          <p className="text-slate-300 mb-3 text-sm">
            Instruction files guide GitHub Copilot with project-specific rules
            and best practices:
          </p>
          <ol className="space-y-2 text-slate-300 text-sm ml-4">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">a.</span>
              <span>
                Open VS Code Settings:
                <ul className="ml-4 mt-1 space-y-1 text-xs">
                  <li>
                    • Windows/Linux:{' '}
                    <kbd className="bg-slate-900 px-1.5 py-0.5 rounded">
                      Ctrl+,
                    </kbd>
                  </li>
                  <li>
                    • Mac:{' '}
                    <kbd className="bg-slate-900 px-1.5 py-0.5 rounded">
                      Cmd+,
                    </kbd>
                  </li>
                </ul>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">b.</span>
              <span>
                Search for:{' '}
                <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                  copilot.chat.custom.instructionFiles.enabled
                </code>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono">c.</span>
              <span>
                Check the box to <strong className="text-white">enable</strong>{' '}
                instruction files
              </span>
            </li>
          </ol>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mt-3">
            <p className="text-xs text-blue-300 flex items-start gap-2">
              <span className="text-base mt-0.5">💡</span>
              <span>
                <strong>What are instruction files?</strong> These are special
                markdown files (like{' '}
                <code className="bg-slate-900 px-1.5 py-0.5 rounded text-cyan-400">
                  .github/copilot-instructions.md
                </code>
                ) that tell GitHub Copilot about your project's coding
                standards, architecture patterns, and design system.
              </span>
            </p>
          </div>
        </div>

        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mt-5">
          <p className="text-sm text-green-300 flex items-start gap-2">
            <span className="text-lg mt-0.5">✅</span>
            <span>
              <strong>You're ready!</strong> Once you've completed these
              prerequisites, you can proceed with building your{' '}
              {industry.sampleApp.name} application below.
            </span>
          </p>
        </div>
      </div>

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
              create a new subfolder in the folder you created previously (ex:{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                C:\Repos
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
              , click the <strong className="text-white">"Download"</strong>{' '}
              button (top right), then move the file into the{' '}
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
              , click the <strong className="text-white">"Download"</strong>{' '}
              button, then move the file into the{' '}
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
              , click the <strong className="text-white">"Download"</strong>{' '}
              button, rename it to{' '}
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

      {/* Step 1: Enter the Prompt */}
      <div className="bg-linear-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">💬</span>
          Step 1: Enter the Build Prompt in Beast Mode
        </h3>
        <p className="text-slate-300 mb-4">
          Open GitHub Copilot Chat (Ctrl+Shift+I), make sure you're in{' '}
          <strong className="text-white">Beast Mode</strong>, and enter this
          prompt:
        </p>
        <CodeBlock code={initialPrompt} language="text" />
      </div>

      {/* Step 2: Agent Builds */}
      <div className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">✨</span>
          Step 2: Agent Builds Your Application
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
              <strong>After the build completes:</strong> If you see a message
              like{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-yellow-400">
                "9 vulnerabilities (1 low, 4 moderate, 3 high, 1 critical)"
              </code>
              , run{' '}
              <code className="bg-slate-900 px-2 py-0.5 rounded text-cyan-400">
                npm audit fix --force
              </code>{' '}
              in the terminal. This command automatically updates packages to
              secure versions and applies breaking changes if needed to fix
              security issues.
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
