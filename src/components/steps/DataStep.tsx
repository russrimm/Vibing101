import { Industry } from '../../types/industry'
import CodeBlock from '../CodeBlock'

interface DataStepProps {
  industry: Industry
  onNext: () => void
  onPrevious: () => void
}

export default function DataStep({ industry, onNext, onPrevious }: DataStepProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Add Data Layer</h2>
      <p className="text-gray-600 mb-8">
        Connect your components to data using mock data for prototyping or real APIs for production.
      </p>

      {/* Option 1: Mock Data */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
            1
          </span>
          Create Mock Data (Recommended for Prototyping)
        </h3>
        <div className="ml-10">
          <p className="text-gray-600 mb-4">
            Create <code className="bg-gray-100 px-2 py-1 rounded">src/services/mockData.ts</code>:
          </p>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 mb-4">
            <p className="text-sm font-semibold text-green-900 mb-2">
              🤖 Use GitHub Copilot Chat
            </p>
            <CodeBlock
              code={`@workspace Create mock data for ${industry.sampleApp.entities.join(', ')}. Generate realistic sample data with at least 10 items for each entity. Export functions to get, create, update, and delete items. Use localStorage to persist changes during the prototype session.`}
              language="text"
            />
          </div>
        </div>
      </div>

      {/* Option 2: Custom Hooks */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
            2
          </span>
          Create Custom React Hooks
        </h3>
        <div className="ml-10">
          <p className="text-gray-600 mb-4">
            Create data hooks for easy component integration:
          </p>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
            <p className="text-sm font-semibold text-green-900 mb-2">
              🤖 Use GitHub Copilot Chat
            </p>
            <CodeBlock
              code={`@workspace Create custom hooks for data management:
- useItems() - fetch and list items
- useItem(id) - get single item
- useCreateItem() - create new item
- useUpdateItem() - update existing item
- useDeleteItem() - delete item

Include loading states, error handling, and optimistic updates. Use React Query or SWR for caching (optional).`}
              language="text"
            />
          </div>
        </div>
      </div>

      {/* Connect Components */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">
            3
          </span>
          Connect Components to Data
        </h3>
        <div className="ml-10">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
            <p className="text-sm font-semibold text-green-900 mb-2">
              🤖 Use GitHub Copilot Chat
            </p>
            <CodeBlock
              code={`@workspace Update all components to use the data hooks. Ensure:
- List component shows real data
- Form component saves data
- Detail component loads and displays data
- Delete actions work
- Loading and error states are handled`}
              language="text"
            />
          </div>
        </div>
      </div>

      {/* Optional: Real API */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h4 className="text-lg font-semibold text-blue-900 mb-2">
          🌐 Optional: Connect to Real API
        </h4>
        <p className="text-sm text-blue-800 mb-3">
          For production, you can connect to:
        </p>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>Power Platform Dataverse</li>
          <li>Azure SQL Database</li>
          <li>REST API backend</li>
          <li>Firebase/Supabase</li>
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
        <button
          onClick={onPrevious}
          className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-semibold"
        >
          ← Back
        </button>
        <div className="text-sm text-gray-500">Step 4 of 6</div>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
        >
          Test & Deploy →
        </button>
      </div>
    </div>
  )
}
