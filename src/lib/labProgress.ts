import { WIZARD_CHECKLIST, type WizardStepId } from '../data/wizardChecklist'
import { industries, type IndustryType } from '../types/industry'

export const PROGRESS_KEY = 'vibe-lab-progress-v1'
export const CORE_STEPS: WizardStepId[] = ['setup', 'structure', 'testing']

export interface IndustryProgress {
  currentStep: WizardStepId
  checkedItems: string[]
  notes: string
}

export interface LabProgress {
  version: 1
  activeIndustry: IndustryType | null
  byIndustry: Partial<Record<IndustryType, IndustryProgress>>
}

export function emptyIndustryProgress(): IndustryProgress {
  return { currentStep: 'setup', checkedItems: [], notes: '' }
}

export function emptyLabProgress(): LabProgress {
  return { version: 1, activeIndustry: null, byIndustry: {} }
}

export function isIndustryId(value: unknown): value is IndustryType {
  return industries.some((industry) => industry.id === value)
}

export function isStepId(value: unknown): value is WizardStepId {
  return WIZARD_CHECKLIST.some((section) => section.stepId === value)
}

export function isStepComplete(
  stepId: WizardStepId,
  checkedItems: string[]
): boolean {
  const section = WIZARD_CHECKLIST.find((item) => item.stepId === stepId)
  return Boolean(
    section?.items.length &&
    section.items.every((item) => checkedItems.includes(item.id))
  )
}

export function isCoreComplete(checkedItems: string[]): boolean {
  return CORE_STEPS.every((step) => isStepComplete(step, checkedItems))
}

export function canViewStep(
  stepId: WizardStepId,
  checkedItems: string[]
): boolean {
  return CORE_STEPS.includes(stepId) || isCoreComplete(checkedItems)
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/** Reject incompatible saves rather than trusting browser storage as typed data. */
export function parseProgress(raw: string): LabProgress {
  const value: unknown = JSON.parse(raw)
  if (
    !isRecord(value) ||
    value.version !== 1 ||
    (value.activeIndustry !== null && !isIndustryId(value.activeIndustry)) ||
    !isRecord(value.byIndustry)
  ) {
    throw new Error('Incompatible lab progress')
  }

  const byIndustry: LabProgress['byIndustry'] = {}
  const validChecks = new Set(
    WIZARD_CHECKLIST.flatMap((section) => section.items.map((item) => item.id))
  )

  for (const [id, entry] of Object.entries(value.byIndustry)) {
    if (
      !isIndustryId(id) ||
      !isRecord(entry) ||
      !isStepId(entry.currentStep) ||
      !Array.isArray(entry.checkedItems) ||
      !entry.checkedItems.every(
        (item): item is string =>
          typeof item === 'string' && validChecks.has(item)
      ) ||
      typeof entry.notes !== 'string'
    ) {
      throw new Error('Invalid saved checkpoint')
    }
    byIndustry[id] = {
      currentStep: canViewStep(entry.currentStep, entry.checkedItems)
        ? entry.currentStep
        : 'testing',
      checkedItems: [...new Set(entry.checkedItems)],
      notes: entry.notes,
    }
  }

  return { version: 1, activeIndustry: value.activeIndustry, byIndustry }
}
