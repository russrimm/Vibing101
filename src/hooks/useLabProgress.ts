import { useEffect, useRef, useState } from 'react'
import {
  PROGRESS_KEY,
  canViewStep,
  emptyIndustryProgress,
  emptyLabProgress,
  isIndustryId,
  isStepId,
  parseProgress,
  type IndustryProgress,
  type LabProgress,
} from '../lib/labProgress'
import type { WizardStepId } from '../data/wizardChecklist'
import type { IndustryType } from '../types/industry'

function readInitialProgress(): { data: LabProgress; warning: string } {
  let data = emptyLabProgress()
  let warning = ''
  try {
    const saved = localStorage.getItem(PROGRESS_KEY)
    if (saved) data = parseProgress(saved)
  } catch (error) {
    console.warn('Lab progress could not be restored:', error)
    warning =
      'Saved progress could not be read. You can continue, but your next change will start a new save. Download your notes before closing this page.'
  }
  return { data: applyLocation(data), warning }
}

function applyLocation(data: LabProgress): LabProgress {
  const params = new URLSearchParams(window.location.search)
  const id = params.get('industry')
  if (!isIndustryId(id)) return { ...data, activeIndustry: null }
  const progress = data.byIndustry[id] ?? emptyIndustryProgress()
  const step = params.get('step')
  return {
    ...data,
    activeIndustry: id,
    byIndustry: {
      ...data.byIndustry,
      [id]: {
        ...progress,
        currentStep:
          isStepId(step) && canViewStep(step, progress.checkedItems)
            ? step
            : progress.currentStep,
      },
    },
  }
}

export function useLabProgress() {
  const [initial] = useState(readInitialProgress)
  const [data, setData] = useState(initial.data)
  const [warning, setWarning] = useState(initial.warning)
  const lastSavedData = useRef(initial.data)

  useEffect(() => {
    if (lastSavedData.current === data) return
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(data))
      lastSavedData.current = data
      setWarning('')
    } catch (error) {
      console.warn('Lab progress could not be saved:', error)
      setWarning(
        'Progress is only kept in this tab because browser storage is unavailable. Download your notes before refreshing or closing it.'
      )
    }
  }, [data])

  useEffect(() => {
    const onPopState = () => setData((previous) => applyLocation(previous))
    const onStorage = (event: StorageEvent) => {
      if (event.key !== PROGRESS_KEY && event.key !== null) return
      try {
        const next = applyLocation(
          event.newValue ? parseProgress(event.newValue) : emptyLabProgress()
        )
        lastSavedData.current = next
        setData(next)
        setWarning(
          'Progress changed in another tab. Review the current checkpoints and notes before continuing.'
        )
      } catch (error) {
        console.warn('Progress from another tab could not be read:', error)
        setWarning(
          'Another tab saved unreadable progress. Your current notes are still here; download them before closing this tab.'
        )
      }
    }
    window.addEventListener('popstate', onPopState)
    window.addEventListener('storage', onStorage)
    return () => {
      window.removeEventListener('popstate', onPopState)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  useEffect(() => {
    const url = new URL(window.location.href)
    const progress = data.activeIndustry
      ? data.byIndustry[data.activeIndustry]
      : undefined
    if (data.activeIndustry && progress) {
      url.searchParams.set('industry', data.activeIndustry)
      url.searchParams.set('step', progress.currentStep)
    } else {
      url.searchParams.delete('industry')
      url.searchParams.delete('step')
    }
    if (url.href !== window.location.href) {
      window.history.replaceState(null, '', url)
    }
  }, [data.activeIndustry, data.byIndustry])

  const navigate = (id: IndustryType | null, step?: WizardStepId) => {
    const next = id
      ? { ...(data.byIndustry[id] ?? emptyIndustryProgress()) }
      : undefined
    if (next && step && canViewStep(step, next.checkedItems)) {
      next.currentStep = step
    }
    const url = new URL(window.location.href)
    url.hash = ''
    url.searchParams.delete('industry')
    url.searchParams.delete('step')
    if (id && next) {
      url.searchParams.set('industry', id)
      url.searchParams.set('step', next.currentStep)
    }
    window.history.pushState(null, '', url)
    setData((previous) => ({
      ...previous,
      activeIndustry: id,
      byIndustry:
        id && next
          ? { ...previous.byIndustry, [id]: next }
          : previous.byIndustry,
    }))
  }

  const updateIndustry = (
    id: IndustryType,
    update: Partial<IndustryProgress>
  ) => {
    setData((previous) => ({
      ...previous,
      byIndustry: {
        ...previous.byIndustry,
        [id]: {
          ...(previous.byIndustry[id] ?? emptyIndustryProgress()),
          ...update,
        },
      },
    }))
  }

  const resetIndustry = (id: IndustryType) => {
    const url = new URL(window.location.href)
    url.hash = ''
    url.searchParams.set('industry', id)
    url.searchParams.set('step', 'setup')
    window.history.replaceState(null, '', url)
    updateIndustry(id, emptyIndustryProgress())
  }

  return { data, warning, navigate, updateIndustry, resetIndustry }
}
