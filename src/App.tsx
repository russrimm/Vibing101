import { useState } from 'react'
import IndustrySelector from './components/IndustrySelector'
import LabWizard from './components/LabWizard'
import { Industry } from './types/industry'

function App() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null)
  const [wizardStarted, setWizardStarted] = useState(false)

  const handleIndustrySelect = (industry: Industry) => {
    setSelectedIndustry(industry)
    setWizardStarted(true)
  }

  const handleReset = () => {
    setSelectedIndustry(null)
    setWizardStarted(false)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50">
      {!wizardStarted ? (
        <IndustrySelector onSelectIndustry={handleIndustrySelect} />
      ) : selectedIndustry ? (
        <LabWizard industry={selectedIndustry} onReset={handleReset} />
      ) : null}
    </div>
  )
}

export default App
