import { Industry } from '../../types/industry'
import CodeBlock from '../CodeBlock'

interface ComponentsStepProps {
  industry: Industry
  onNext: () => void
  onPrevious: () => void
}

const getIndustryComponents = (industry: Industry) => {
  switch (industry.id) {
    case 'oil-gas-energy':
      return {
        formComponent: 'EquipmentForm',
        listComponent: 'EquipmentList',
        detailComponent: 'EquipmentDetail',
        exampleCode: `interface Equipment {
  id: string
  name: string
  type: 'pump' | 'compressor' | 'turbine' | 'generator'
  status: 'operational' | 'maintenance' | 'offline'
  location: string
  lastInspection: Date
  nextMaintenance: Date
}`
      }
    case 'retail':
      return {
        formComponent: 'ProductForm',
        listComponent: 'ProductList',
        detailComponent: 'ProductDetail',
        exampleCode: `interface Product {
  id: string
  name: string
  sku: string
  category: string
  price: number
  stock: number
  reorderLevel: number
}`
      }
    case 'transportation':
      return {
        formComponent: 'DeliveryForm',
        listComponent: 'VehicleList',
        detailComponent: 'RouteDetail',
        exampleCode: `interface Delivery {
  id: string
  vehicleId: string
  driver: string
  route: string
  status: 'scheduled' | 'in-transit' | 'delivered' | 'delayed'
  pickupTime: Date
  deliveryTime: Date
}`
      }
    case 'manufacturing':
      return {
        formComponent: 'ProductionOrderForm',
        listComponent: 'ProductionList',
        detailComponent: 'QualityDetail',
        exampleCode: `interface ProductionOrder {
  id: string
  product: string
  quantity: number
  status: 'pending' | 'in-progress' | 'completed' | 'quality-check'
  startDate: Date
  targetDate: Date
  qualityScore?: number
}`
      }
    case 'healthcare':
      return {
        formComponent: 'AppointmentForm',
        listComponent: 'PatientList',
        detailComponent: 'AppointmentDetail',
        exampleCode: `interface Appointment {
  id: string
  patientName: string
  provider: string
  type: 'consultation' | 'follow-up' | 'procedure' | 'emergency'
  date: Date
  duration: number
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled'
}`
      }
    case 'finance':
      return {
        formComponent: 'RequestForm',
        listComponent: 'RequestList',
        detailComponent: 'ApprovalDetail',
        exampleCode: `interface FinancialRequest {
  id: string
  requestor: string
  type: 'expense' | 'purchase' | 'travel' | 'budget'
  amount: number
  description: string
  status: 'pending' | 'approved' | 'rejected' | 'needs-review'
  submittedDate: Date
}`
      }
    default:
      return {
        formComponent: 'ItemForm',
        listComponent: 'ItemList',
        detailComponent: 'ItemDetail',
        exampleCode: `interface Item {
  id: string
  name: string
  status: string
  createdDate: Date
}`
      }
  }
}

export default function ComponentsStep({
  industry,
  onNext,
  onPrevious,
}: ComponentsStepProps) {
  const components = getIndustryComponents(industry)

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Build Your Components
      </h2>
      <p className="text-gray-600 mb-8">
        Use GitHub Copilot to generate the components for your {industry.sampleApp.name}.
      </p>

      {/* TypeScript Types */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">
            1
          </span>
          Define Your Data Types
        </h3>
        <p className="text-gray-600 mb-4 ml-10">
          Create <code className="bg-gray-100 px-2 py-1 rounded">src/types/index.ts</code>:
        </p>
        <div className="ml-10">
          <CodeBlock code={components.exampleCode} language="typescript" />
        </div>
      </div>

      {/* List Component */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">
            2
          </span>
          Create List Component
        </h3>
        <div className="ml-10">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 mb-4">
            <p className="text-sm font-semibold text-purple-900 mb-2">
              🤖 Use GitHub Copilot Chat
            </p>
            <p className="text-sm text-purple-800 mb-3">
              Open Copilot Chat (Ctrl+Shift+I) and paste this prompt:
            </p>
            <CodeBlock
              code={`@workspace Create a ${components.listComponent} component that displays a table of items with sorting and filtering. Use Tailwind CSS for styling. Include:
- Responsive table design
- Search/filter functionality  
- Sort by columns
- Status badges with colors
- Action buttons (view, edit, delete)`}
              language="text"
            />
          </div>
        </div>
      </div>

      {/* Form Component */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">
            3
          </span>
          Create Form Component
        </h3>
        <div className="ml-10">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
            <p className="text-sm font-semibold text-purple-900 mb-2">
              🤖 Use GitHub Copilot Chat
            </p>
            <p className="text-sm text-purple-800 mb-3">
              Paste this prompt in Copilot Chat:
            </p>
            <CodeBlock
              code={`@workspace Create a ${components.formComponent} component with React Hook Form and Zod validation. Include:
- All fields from the type definition
- Form validation
- Error messages
- Submit and cancel buttons
- Tailwind CSS styling
- Loading states`}
              language="text"
            />
          </div>
        </div>
      </div>

      {/* Detail Component */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">
            4
          </span>
          Create Detail View
        </h3>
        <div className="ml-10">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
            <p className="text-sm font-semibold text-purple-900 mb-2">
              🤖 Use GitHub Copilot Chat
            </p>
            <p className="text-sm text-purple-800 mb-3">
              Paste this prompt in Copilot Chat:
            </p>
            <CodeBlock
              code={`@workspace Create a ${components.detailComponent} component that displays full details of a single item. Include:
- Card layout with sections
- Status indicator
- Action buttons
- Back navigation
- Responsive design
- Tailwind CSS styling`}
              language="text"
            />
          </div>
        </div>
      </div>

      {/* Install Required Packages */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-semibold text-yellow-900 mb-2">
          📦 Install Required Packages
        </h4>
        <p className="text-sm text-yellow-800 mb-3">
          Install form validation libraries:
        </p>
        <CodeBlock
          code="npm install react-hook-form zod @hookform/resolvers"
          language="bash"
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <button
          onClick={onPrevious}
          className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-semibold"
        >
          ← Back
        </button>
        <div className="text-sm text-gray-500">Step 3 of 6</div>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          Add Data Layer →
        </button>
      </div>
    </div>
  )
}
