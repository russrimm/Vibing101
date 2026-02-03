import { useState } from 'react'
import { Industry } from '../types/industry'
import StepProgress from './StepProgress'
import SetupStep from './steps/SetupStep'
import StructureStep from './steps/StructureStep'
import TestingStep from './steps/TestingStep'
import CompletionStep from './steps/CompletionStep'
import ThemeToggle from './ThemeToggle'

interface LabWizardProps {
  industry: Industry
  onReset: () => void
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export type WizardStep = 'setup' | 'structure' | 'testing' | 'completion'

const steps: { id: WizardStep; title: string; description: string }[] = [
  {
    id: 'setup',
    title: 'Environment Setup',
    description: 'Install required tools',
  },
  {
    id: 'structure',
    title: 'Project Structure',
    description: 'Create complete app',
  },
  { id: 'testing', title: 'Test & Deploy', description: 'Verify and deploy' },
  { id: 'completion', title: 'Complete!', description: 'Your app is ready' },
]

export default function LabWizard({
  industry,
  onReset,
  theme,
  onToggleTheme,
}: LabWizardProps) {
  const [currentStep, setCurrentStep] = useState<WizardStep>('setup')
  const [completedSteps, setCompletedSteps] = useState<Set<WizardStep>>(
    new Set()
  )

  const handleNext = () => {
    const currentIndex = steps.findIndex((s) => s.id === currentStep)
    if (currentIndex < steps.length - 1) {
      setCompletedSteps((prev) => new Set(prev).add(currentStep))
      setCurrentStep(steps[currentIndex + 1].id)
    }
  }

  const handlePrevious = () => {
    const currentIndex = steps.findIndex((s) => s.id === currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id)
    }
  }

  const handleStepClick = (stepId: WizardStep) => {
    const stepIndex = steps.findIndex((s) => s.id === stepId)
    const currentIndex = steps.findIndex((s) => s.id === currentStep)

    if (stepIndex <= currentIndex || completedSteps.has(stepId)) {
      setCurrentStep(stepId)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{industry.icon}</span>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {industry.sampleApp.name}
                </h1>
                <p className="text-sm text-cyan-600 dark:text-cyan-400">
                  {industry.name}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle theme={theme} onToggle={onToggleTheme} />
              <button
                onClick={onReset}
                className="px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors border border-slate-200 dark:border-white/10 hover:border-cyan-500/50"
              >
                ← Change Industry
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-slate-100/50 dark:bg-slate-800/30 backdrop-blur-sm border-b border-slate-200 dark:border-white/5 py-6">
        <div className="container mx-auto px-4">
          <StepProgress
            steps={steps}
            currentStep={currentStep}
            completedSteps={completedSteps}
            onStepClick={handleStepClick}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {currentStep === 'setup' && (
            <SetupStep industry={industry} onNext={handleNext} />
          )}
          {currentStep === 'structure' && (
            <StructureStep
              industry={industry}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
          {currentStep === 'testing' && (
            <TestingStep
              industry={industry}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
          {currentStep === 'completion' && (
            <CompletionStep
              industry={industry}
              onReset={onReset}
              onPrevious={handlePrevious}
            />
          )}
        </div>
      </main>
    </div>
  )
}
