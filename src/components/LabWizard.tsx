import { useState } from 'react'
import { Industry } from '../types/industry'
import StepProgress from './StepProgress'
import SetupStep from './steps/SetupStep'
import StructureStep from './steps/StructureStep'
import ComponentsStep from './steps/ComponentsStep'
import DataStep from './steps/DataStep'
import TestingStep from './steps/TestingStep'
import CompletionStep from './steps/CompletionStep'

interface LabWizardProps {
  industry: Industry
  onReset: () => void
}

export type WizardStep = 
  | 'setup'
  | 'structure'
  | 'components'
  | 'data'
  | 'testing'
  | 'completion'

const steps: { id: WizardStep; title: string; description: string }[] = [
  { id: 'setup', title: 'Environment Setup', description: 'Install required tools' },
  { id: 'structure', title: 'Project Structure', description: 'Create app foundation' },
  { id: 'components', title: 'Build Components', description: 'Create UI components' },
  { id: 'data', title: 'Add Data Layer', description: 'Connect to data' },
  { id: 'testing', title: 'Test & Deploy', description: 'Verify and deploy' },
  { id: 'completion', title: 'Complete!', description: 'Your app is ready' },
]

export default function LabWizard({ industry, onReset }: LabWizardProps) {
  const [currentStep, setCurrentStep] = useState<WizardStep>('setup')
  const [completedSteps, setCompletedSteps] = useState<Set<WizardStep>>(new Set())

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-4xl">{industry.icon}</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {industry.sampleApp.name}
                </h1>
                <p className="text-sm text-gray-600">{industry.name}</p>
              </div>
            </div>
            <button
              onClick={onReset}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              ← Change Industry
            </button>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200 py-6">
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
          {currentStep === 'components' && (
            <ComponentsStep
              industry={industry}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
          {currentStep === 'data' && (
            <DataStep
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
