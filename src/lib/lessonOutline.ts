export interface LessonHeading {
  line: number
  level: number
  title: string
  id: string
}

export interface LessonSection {
  id: string
  title: string
  moduleId: string
  moduleTitle: string
  content: string
  headings: LessonHeading[]
}

export function headingSlug(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
}

/** The same IDs drive the lesson map, rendered headings, and document links. */
export function lessonOutline(content: string): LessonHeading[] {
  const headings: LessonHeading[] = []
  const counts = new Map<string, number>()
  let module = 'lesson'
  let fence: string | undefined
  content.split(/\r?\n/).forEach((line, index) => {
    const marker = /^\s*(`{3,}|~{3,})/.exec(line)?.[1]
    if (marker) {
      if (!fence) fence = marker
      else if (marker[0] === fence[0] && marker.length >= fence.length)
        fence = undefined
      return
    }
    if (fence) return
    const match = /^(#{1,3})\s+(.+)$/.exec(line)
    if (!match?.[1] || !match[2]) return
    const level = match[1].length
    const title = match[2].replace(/[*`]/g, '')
    const number = level === 1 ? /Lab (\d{2})/.exec(title)?.[1] : undefined
    if (number) module = `lab-${number}`
    const base = number ? module : `${module}-${headingSlug(title)}`
    const count = counts.get(base) ?? 0
    counts.set(base, count + 1)
    headings.push({
      line: index + 1,
      level,
      title,
      id: count ? `${base}-${count}` : base,
    })
  })
  return headings
}

/** Partition only at lesson boundaries, never inside a command or file example. */
export function lessonSections(content: string): LessonSection[] {
  const headings = lessonOutline(content)
  const lines = content.split(/\r?\n/)
  const boundaries: { heading: LessonHeading; module: LessonHeading }[] = []
  let module: LessonHeading | undefined
  let inSteps = false
  for (const heading of headings) {
    if (heading.level === 1) {
      module = heading
      inSteps = false
      boundaries.push({ heading, module })
    } else if (module && heading.level === 2) {
      const numbered = /^Step \d+:/.test(heading.title)
      if (numbered || inSteps) boundaries.push({ heading, module })
      inSteps = numbered
    }
  }

  return boundaries.map(({ heading, module }, index) => {
    const start = index === 0 ? 0 : heading.line - 1
    const end = (boundaries[index + 1]?.heading.line ?? lines.length + 1) - 1
    return {
      id: heading.id,
      title: heading.title,
      moduleId: module.id,
      moduleTitle: module.title,
      content: lines.slice(start, end).join('\n'),
      headings: headings
        .filter((item) => item.line > start && item.line <= end)
        .map((item) => ({ ...item, line: item.line - start })),
    }
  })
}
