import { industries, Industry } from '../types/industry'

interface IndustrySelectorProps {
  onSelectIndustry: (industry: Industry) => void
}

export default function IndustrySelector({
  onSelectIndustry,
}: IndustrySelectorProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Vibe Coding Lab
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Build a functional web app for your industry in minutes using
            AI-powered coding. Select your industry to get started with a
            customized template.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => onSelectIndustry(industry)}
              className={`
                bg-white rounded-xl shadow-lg hover:shadow-2xl 
                transition-all duration-300 hover:-translate-y-2
                p-6 text-left border-2 border-transparent
                hover:border-${industry.primaryColor}-400
              `}
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{industry.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {industry.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">{industry.description}</p>

              {/* Sample App Info */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-1">
                  You'll build:
                </p>
                <p className="text-sm text-gray-600">
                  {industry.sampleApp.name}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-1">
                {industry.features.slice(0, 3).map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 text-center">
                <span
                  className={`
                  inline-block px-4 py-2 rounded-lg 
                  bg-${industry.primaryColor}-500 text-white
                  font-semibold text-sm
                `}
                >
                  Start Building →
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            🤖 Powered by GitHub Copilot • ⚡ Built with Vite + React +
            TypeScript + Tailwind
          </p>
        </div>
      </div>
    </div>
  )
}
