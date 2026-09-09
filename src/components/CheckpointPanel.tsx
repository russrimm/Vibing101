import type { ChecklistSection } from '../data/wizardChecklist'

interface CheckpointPanelProps {
  section: ChecklistSection
  checkedItems: string[]
  onToggle: (id: string, checked: boolean) => void
  optional?: boolean
}

export default function CheckpointPanel({
  section,
  checkedItems,
  onToggle,
  optional = false,
}: CheckpointPanelProps) {
  const count = section.items.filter((item) =>
    checkedItems.includes(item.id)
  ).length

  return (
    <section
      aria-labelledby="checkpoint-title"
      className="mb-6 rounded-xl border border-cyan-700/40 bg-white p-5 dark:bg-slate-800"
    >
      <h2 id="checkpoint-title" tabIndex={-1} className="text-xl font-bold">
        {optional ? 'Optional checkpoints' : 'Your checkpoints'}
      </h2>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
        Use the lesson above. Check each box only after you see the expected
        result in your own project. These are your confirmations, not automated
        checks by this portal.
        {optional && ' These optional checks do not affect core completion.'}
      </p>
      <p role="status" className="my-3 text-sm font-semibold">
        {count} of {section.items.length} confirmed
      </p>
      <div className="space-y-2">
        {section.items.map((item) => (
          <label
            key={item.id}
            className="flex cursor-pointer items-start gap-3 rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            <input
              type="checkbox"
              name={item.id}
              checked={checkedItems.includes(item.id)}
              onChange={(event) => onToggle(item.id, event.target.checked)}
              className="mt-1 h-5 w-5 shrink-0 accent-cyan-700"
            />
            <span>
              <span className="text-sm font-medium">{item.text}</span>
              {item.detail && (
                <span className="mt-1 block text-sm text-slate-600 dark:text-slate-300">
                  {item.detail}
                </span>
              )}
            </span>
          </label>
        ))}
      </div>
    </section>
  )
}
