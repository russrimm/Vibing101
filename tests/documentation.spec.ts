import { test, expect } from '@playwright/test'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { lessonOutline } from '../src/lib/lessonOutline'

test('learner documentation has no broken local Markdown links', () => {
  const root = process.cwd()
  const files = [
    resolve(root, 'README.md'),
    resolve(root, 'GLOSSARY.md'),
    ...readdirSync(resolve(root, 'docs'))
      .filter((file) => file.endsWith('.md'))
      .map((file) => resolve(root, 'docs', file)),
  ]
  const broken: string[] = []
  for (const file of files) {
    const content = readFileSync(file, 'utf8')
    for (const match of content.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
      const href = match[1]
      if (!href || /^(?:[a-z]+:|#|\/)/i.test(href)) continue
      const path = href.split('#')[0]?.split('?')[0]
      if (
        path?.endsWith('.md') &&
        !existsSync(resolve(dirname(file), decodeURIComponent(path)))
      ) {
        broken.push(`${file}: ${href}`)
      }
    }
  }
  expect(broken).toEqual([])
})

test('every beginner module has learning goals, observable checks, recovery and a next step', () => {
  const directory = resolve(process.cwd(), 'docs')
  const modules = readdirSync(directory).filter((file) =>
    /^lab-\d{2}-/.test(file)
  )
  expect(modules.length).toBeGreaterThanOrEqual(8)
  for (const file of modules) {
    const content = readFileSync(resolve(directory, file), 'utf8')
    const outline = lessonOutline(content)
    expect(content, file).toMatch(/\*\*Time:/)
    expect(content, file).toMatch(/## What you will learn/)
    expect(content, file).toMatch(/prerequisite|before you start/i)
    expect(content, file).toMatch(/verif|expected/i)
    expect(content, file).toMatch(/common issues|troubleshooting/i)
    expect(content, file).toMatch(/\*\*Next[:,]/)
    expect(new Set(outline.map((heading) => heading.id)).size, file).toBe(
      outline.length
    )
    let fence: string | undefined
    for (const line of content.split(/\r?\n/)) {
      const match = /^\s*(`{3,}|~{3,})(.*)$/.exec(line)
      if (!match?.[1]) continue
      if (!fence) {
        fence = match[1]
        expect(
          match[2]?.trim(),
          `${file}: every copyable block needs a destination label`
        ).toMatch(
          /^(prompt|terminal|powershell|bash|markdown|json|output|text)$/
        )
      } else if (match[1][0] === fence[0] && match[1].length >= fence.length) {
        fence = undefined
      }
    }
    expect(fence, `${file}: unclosed code fence`).toBeUndefined()
  }
})
