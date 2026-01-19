import { industries, Industry } from '../types/industry'

interface IndustrySelectorProps {
  onSelectIndustry: (industry: Industry) => void
}

export default function IndustrySelector({
  onSelectIndustry,
}: IndustrySelectorProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <span className="text-cyan-400 text-sm font-semibold tracking-wide">
                AI-POWERED DEVELOPMENT
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Vibe Coding Lab
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
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
                className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-cyan-500/50 
                         transition-all duration-500 hover:scale-105 hover:bg-white/10
                         p-6 text-left shadow-xl hover:shadow-cyan-500/20 hover:shadow-2xl"
              >
                {/* Icon with Glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-6xl relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {industry.description}
                </p>

                {/* Sample App Info */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 mb-4 backdrop-blur-sm">
                  <p className="text-xs font-semibold text-cyan-400 mb-1 uppercase tracking-wide">
                    You'll build:
                  </p>
                  <p className="text-sm text-slate-200 font-medium">
                    {industry.sampleApp.name}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {industry.features.slice(0, 3).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-slate-300"
                    >
                      <div className="w-5 h-5 mr-2 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-3 h-3 text-cyan-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="relative overflow-hidden rounded-lg bg-linear-to-r from-cyan-600 to-blue-600 p-[1px] group-hover:from-cyan-500 group-hover:to-purple-600 transition-all duration-300">
                  <div className="bg-slate-900 rounded-lg px-4 py-2.5 text-center group-hover:bg-transparent transition-all duration-300">
                    <span className="text-white font-semibold text-sm tracking-wide">
                      Start Building →
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="mt-16 text-center space-y-4">
            <div className="flex items-center justify-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <span>GitHub Copilot</span>
              </div>
              <div className="w-px h-4 bg-slate-600"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span>Vite + React</span>
              </div>
              <div className="w-px h-4 bg-slate-600"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
