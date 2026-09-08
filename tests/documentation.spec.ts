import { test, expect } from '@playwright/test'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

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
