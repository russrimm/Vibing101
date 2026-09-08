import { expect, test, type Page } from '@playwright/test'
import axe from 'axe-core'
import { industries } from '../src/types/industry'
import { WIZARD_CHECKLIST } from '../src/data/wizardChecklist'
import {
  CORE_STEPS,
  PROGRESS_KEY,
  emptyLabProgress,
  isCoreComplete,
  parseProgress,
} from '../src/lib/labProgress'

declare global {
  interface Window {
    axe: typeof axe
  }
}

const nextLabels = [
  'Continue to build',
  'Continue to test',
  'Finish core lab',
] as const

async function confirmCurrentStep(page: Page) {
  const panel = page.getByRole('region', { name: 'Your checkpoints' })
  for (const checkbox of await panel.getByRole('checkbox').all()) {
    await checkbox.check()
  }
}

test('saved data rejects corruption and cannot assert completion without checks', () => {
  expect(() => parseProgress('not-json')).toThrow()
  expect(() => parseProgress('{"version":900}')).toThrow()
  expect(parseProgress(JSON.stringify(emptyLabProgress()))).toEqual(
    emptyLabProgress()
  )
  const save = {
    version: 1,
    activeIndustry: 'retail',
    byIndustry: {
      retail: { currentStep: 'completion', checkedItems: [], notes: 'demo' },
    },
  }
  expect(
    parseProgress(JSON.stringify(save)).byIndustry.retail?.currentStep
  ).toBe('testing')
  expect(isCoreComplete([])).toBe(false)
  const ids = WIZARD_CHECKLIST.flatMap((section) =>
    section.items.map((item) => item.id)
  )
  expect(new Set(ids).size).toBe(ids.length)
  for (const step of CORE_STEPS) {
    expect(
      WIZARD_CHECKLIST.find((section) => section.stepId === step)?.items.length
    ).toBeGreaterThan(0)
  }
  expect(() =>
    parseProgress(
      JSON.stringify({
        ...save,
        byIndustry: {
          retail: {
            currentStep: 'setup',
            checkedItems: ['invented-check'],
            notes: '',
          },
        },
      })
    )
  ).toThrow()
})

test('all use cases have one bounded entity and distinct identities', () => {
  expect(industries).toHaveLength(6)
  expect(new Set(industries.map((industry) => industry.id)).size).toBe(6)
  for (const industry of industries) {
    expect(industry.sampleApp.entities).toHaveLength(1)
    expect(industry.features.length).toBeGreaterThanOrEqual(3)
  }
})

for (const industry of industries) {
  test(`${industry.id}: full learner journey, gating, notes, resume and read-ahead`, async ({
    page,
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.goto('/')
    await page
      .getByRole('link')
      .filter({
        has: page.getByRole('heading', { name: industry.name, exact: true }),
      })
      .click()
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      industry.sampleApp.name
    )
    await expect(
      page.getByRole('button', { name: nextLabels[0], exact: true })
    ).toBeDisabled()
    await page
      .getByLabel('Your test results, preview address, and next step')
      .fill('Demo only. Build exited 0; blank name rejected.')
    await page.reload()
    await expect(
      page.getByLabel('Your test results, preview address, and next step')
    ).toHaveValue('Demo only. Build exited 0; blank name rejected.')

    // Reading ahead must not create a completed checkpoint.
    await page
      .locator('nav[aria-label="Lab steps"] a[href$="step=testing"]')
      .click()
    await expect(
      page.getByRole('button', { name: nextLabels[2], exact: true })
    ).toBeDisabled()
    await page
      .locator('nav[aria-label="Lab steps"] a[href$="step=setup"]')
      .click()
    for (const label of nextLabels) {
      if (label === 'Continue to test') {
        for (const expected of [
          ...industry.sampleNames,
          industry.newRecordName,
          `vibe-practice-${industry.id}-v1`,
        ]) {
          await expect(page.getByRole('main')).toContainText(expected)
        }
        if (industry.id !== 'retail') {
          await expect(page.getByRole('main')).not.toContainText(
            'Blue notebook'
          )
          await expect(page.getByRole('main')).not.toContainText(
            'Notebook pack'
          )
        }
      }
      await confirmCurrentStep(page)
      const next = page.getByRole('button', { name: label, exact: true })
      await expect(next).toBeEnabled()
      await next.click()
    }
    await expect(page).toHaveURL(/step=completion/)
    await expect(
      page.getByRole('region', { name: 'Your checkpoints' })
    ).toHaveCount(0)
    await expect(page.getByRole('main')).toContainText(/local/i)
    await page.reload()
    await expect(page).toHaveURL(/step=completion/)
    await page
      .getByRole('button', { name: 'Change use case', exact: true })
      .click()
    const card = page.getByRole('link').filter({
      has: page.getByRole('heading', { name: industry.name, exact: true }),
    })
    await expect(card).toContainText('Review completed lab')
    await card.click()
    await expect(page).toHaveURL(/step=completion/)
    await expect(
      page.locator('nav[aria-label="Lab steps"] a[href$="step=whatsnext"]')
    ).toBeVisible()
    await page
      .locator('nav[aria-label="Lab steps"] a[href$="step=whatsnext"]')
      .click()
    await expect(page.getByRole('main')).toContainText(/optional/i)
    expect(errors).toEqual([])
  })
}

test('unchecking evidence revokes completion and progress is isolated per use case', async ({
  page,
}) => {
  await page.goto('/?industry=retail&step=setup')
  for (const label of nextLabels) {
    await confirmCurrentStep(page)
    await page.getByRole('button', { name: label, exact: true }).click()
  }
  await page
    .locator('nav[aria-label="Lab steps"] a[href$="step=setup"]')
    .click()
  await page.getByRole('checkbox').first().uncheck()
  await expect(
    page.locator('nav[aria-label="Lab steps"] a[href$="step=completion"]')
  ).toHaveCount(0)
  await page
    .getByRole('button', { name: 'Change use case', exact: true })
    .click()
  await page
    .getByRole('link')
    .filter({
      has: page.getByRole('heading', { name: 'Healthcare', exact: true }),
    })
    .click()
  expect(
    await page
      .getByRole('checkbox')
      .evaluateAll((inputs) =>
        inputs.every(
          (input) => input instanceof HTMLInputElement && !input.checked
        )
      )
  ).toBe(true)
  await page.goto('/?industry=retail&step=completion')
  await expect(
    page.locator('nav[aria-label="Lab steps"] [aria-current="step"]')
  ).toContainText('1.')
  await expect(
    page.getByRole('button', { name: nextLabels[0], exact: true })
  ).toBeDisabled()
})

test('reset requires confirmation, preserves other use cases, and browser back works', async ({
  page,
}) => {
  await page.goto('/?industry=retail&step=setup')
  await page.getByRole('checkbox').first().check()
  await page
    .getByLabel('Your test results, preview address, and next step')
    .fill('Keep these notes.')
  await page
    .getByRole('button', { name: 'Change use case', exact: true })
    .click()
  await page
    .getByRole('link')
    .filter({
      has: page.getByRole('heading', { name: 'Healthcare', exact: true }),
    })
    .click()
  await page.getByRole('checkbox').first().check()
  await page.goBack()
  await expect(
    page.getByRole('heading', { name: 'Choose one use case' })
  ).toBeVisible()
  await page.goBack()
  await expect(page.getByRole('checkbox').first()).toBeChecked()
  await page
    .getByRole('button', { name: 'Reset this use case', exact: true })
    .click()
  await page
    .getByRole('button', { name: 'Keep my progress', exact: true })
    .click()
  await expect(page.getByRole('checkbox').first()).toBeChecked()
  await page
    .getByRole('button', { name: 'Reset this use case', exact: true })
    .click()
  await page
    .getByRole('button', { name: 'Clear checkpoints and notes', exact: true })
    .click()
  await expect(page.getByRole('checkbox').first()).not.toBeChecked()
  await expect(
    page.getByLabel('Your test results, preview address, and next step')
  ).toHaveValue('')
  await page.goto('/?industry=healthcare&step=setup')
  await expect(page.getByRole('checkbox').first()).toBeChecked()
})

test('two portal tabs share evidence without changing their current lessons', async ({
  page,
  context,
}) => {
  await page.goto('/?industry=retail&step=setup')
  await expect(
    page.getByRole('region', { name: 'Your checkpoints' })
  ).toBeVisible()
  const second = await context.newPage()
  await second.goto('/?industry=retail&step=structure')
  await second
    .getByLabel('Your test results, preview address, and next step')
    .fill('Shared demo result')
  await expect(
    page.getByLabel('Your test results, preview address, and next step')
  ).toHaveValue('Shared demo result')
  await expect(page).toHaveURL(/step=setup$/)
  await page.getByRole('checkbox').first().check()
  await expect(second.getByRole('alert')).toContainText('another tab')
  await expect(second).toHaveURL(/step=structure$/)
  await page.reload()
  await expect(page.getByRole('checkbox').first()).toBeChecked()
  await expect(
    page.getByLabel('Your test results, preview address, and next step')
  ).toHaveValue('Shared demo result')
})

test('checklist and glossary dialogs trap focus, support Escape, and restore focus', async ({
  page,
}) => {
  await page.goto('/?industry=retail&step=setup')
  await page.getByRole('checkbox').first().check()
  const checklist = page.getByRole('button', {
    name: 'Full checklist',
    exact: true,
  })
  await checklist.click()
  let dialog = page.getByRole('dialog')
  await expect(dialog).toContainText('Confirmed:')
  await page.keyboard.press('Shift+Tab')
  expect(
    await dialog.evaluate((element) => element.contains(document.activeElement))
  ).toBe(true)
  await page.keyboard.press('Escape')
  await expect(dialog).toHaveCount(0)
  await expect(checklist).toBeFocused()

  const glossary = page.getByRole('button', { name: 'Glossary', exact: true })
  await glossary.click()
  dialog = page.getByRole('dialog')
  await dialog
    .getByRole('searchbox', { name: 'Search glossary terms' })
    .fill('no-such-term-xyz')
  await expect(dialog).toContainText('No matches')
  await dialog
    .getByRole('searchbox', { name: 'Search glossary terms' })
    .fill('Copilot')
  await expect(dialog.getByRole('status')).not.toContainText('Showing 0')
  await page.keyboard.press('Escape')
  await expect(glossary).toBeFocused()
})

test('corrupted and blocked storage surface actionable warnings instead of a blank page', async ({
  page,
  context,
}) => {
  await page.addInitScript(
    (key) => localStorage.setItem(key, '{broken'),
    PROGRESS_KEY
  )
  await page.goto('/')
  await expect(page.getByRole('alert')).toContainText(
    'Saved progress could not be read'
  )
  await expect(
    page.getByRole('heading', { name: 'Choose one use case' })
  ).toBeVisible()
  const blockedPage = await context.newPage()
  await blockedPage.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new DOMException('blocked', 'SecurityError')
    }
    Storage.prototype.setItem = () => {
      throw new DOMException('blocked', 'SecurityError')
    }
  })
  await blockedPage.goto('/?industry=retail&step=setup')
  await expect(blockedPage.getByRole('alert')).toBeVisible()
  await blockedPage.getByRole('checkbox').first().check()
  await expect(blockedPage.getByRole('alert')).toContainText(
    'only kept in this tab'
  )
  await expect(blockedPage.getByRole('checkbox').first()).toBeChecked()
})

test('evidence download reports actual checked state and learner notes', async ({
  page,
}) => {
  await page.goto('/?industry=retail&step=setup')
  await page.getByRole('checkbox').first().check()
  await page
    .getByLabel('Your test results, preview address, and next step')
    .fill('Test note: blank name rejected.')
  const downloadPromise = page.waitForEvent('download')
  await page
    .getByRole('button', { name: 'Download evidence', exact: true })
    .click()
  const download = await downloadPromise
  expect(download.suggestedFilename()).toBe('retail-lab-evidence.txt')
  const stream = await download.createReadStream()
  const chunks: Buffer[] = []
  for await (const chunk of stream) chunks.push(Buffer.from(chunk))
  const text = Buffer.concat(chunks).toString('utf8')
  expect(text).toContain('Learner-reported results')
  expect(text).toContain('[x]')
  expect(text).toContain('[ ]')
  expect(text).toContain('Test note: blank name rejected.')
})

test('lesson links stay in the portal and navigate to the requested module', async ({
  page,
}) => {
  await page.goto('/?industry=retail&step=setup')
  await page.locator('a[href$="step=structure#lab-01"]').first().click()
  await expect(page).toHaveURL(/step=structure#lab-01$/)
  await expect(page.locator('#lab-01')).toBeVisible()
  await page.locator('a[href$="step=structure#lab-02"]').first().click()
  await expect(page).toHaveURL(/#lab-02$/)
  expect(
    await page.locator('#lab-02').evaluate((heading) => {
      const top = heading.getBoundingClientRect().top
      return top >= 0 && top < window.innerHeight
    })
  ).toBe(true)
})

test('prompts copy exact text and show manual recovery if clipboard access is denied', async ({
  page,
  context,
}) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/?industry=retail&step=structure')
  const block = page
    .locator('div')
    .filter({
      has: page.locator(':scope > pre[aria-label]'),
    })
    .first()
  const code = await block.locator('pre code').innerText()
  await block.getByRole('button', { name: 'Copy', exact: true }).click()
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(code)
  await page.evaluate(() => {
    navigator.clipboard.writeText = async () => {
      throw new DOMException('blocked', 'NotAllowedError')
    }
  })
  await block.getByRole('button').click()
  await expect(block.getByRole('alert')).toContainText('copy it manually')
})

for (const theme of ['light', 'dark'] as const) {
  test(`${theme}: responsive core pages and automated accessibility`, async ({
    page,
  }) => {
    await page.addInitScript(
      (value) => localStorage.setItem('theme', value),
      theme
    )
    const violations: string[] = []
    for (const step of [null, ...CORE_STEPS]) {
      await page.setViewportSize({ width: 1280, height: 900 })
      await page.goto(step ? `/?industry=retail&step=${step}` : '/')
      await page.addScriptTag({ content: axe.source })
      const results = await page.evaluate(async () =>
        window.axe.run(document, {
          runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] },
        })
      )
      violations.push(
        ...results.violations.map(
          (item) =>
            `${step ?? 'home'}: ${item.id} ${item.nodes.map((node) => node.target.join(' ')).join(', ')}`
        )
      )
      for (const width of [320, 375, 768]) {
        await page.setViewportSize({ width, height: 812 })
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth
          )
        ).toBe(true)
      }
    }
    expect(violations).toEqual([])
  })
}
