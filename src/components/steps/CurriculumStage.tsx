import type { ReactNode } from 'react'
import type { Industry } from '../../types/industry'
import { personalizeCurriculum } from '../../data/curriculum'
import MarkdownRenderer from '../MarkdownRenderer'

interface CurriculumStageProps {
  industry: Industry
  content: string
  stepNumber?: number
  totalSteps?: number
  checkpoints?: ReactNode
  children?: ReactNode
}

export const stageButtonClass =
  'rounded-lg bg-cyan-800 px-5 py-3 font-semibold text-white hover:bg-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-cyan-700 dark:hover:bg-cyan-800'

export default function CurriculumStage({
  industry,
  content,
  stepNumber,
  totalSteps,
  checkpoints,
  children,
}: CurriculumStageProps) {
  return (
    <section className="min-w-0 rounded-2xl border border-slate-300 bg-white p-4 shadow-lg sm:p-8 dark:border-slate-600 dark:bg-slate-800">
      {stepNumber !== undefined && totalSteps !== undefined && (
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
          Stage {stepNumber} of {totalSteps} · {industry.sampleApp.name}
        </p>
      )}
      <MarkdownRenderer content={personalizeCurriculum(content, industry)} />
      {checkpoints && <div className="mt-8">{checkpoints}</div>}
      {children && (
        <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>
      )}
    </section>
  )
}
