import type { MouseEvent } from 'react'

export type ReadingMode = 'full' | 'guided'

export interface ReadingPosition {
  mode: ReadingMode
  anchor: string
}

export function readingMode(search: string): ReadingMode {
  return new URLSearchParams(search).get('reader') === 'guided'
    ? 'guided'
    : 'full'
}

export function isReadingAnchor(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    /^(?:lab-\d{2}(?:-[a-z0-9-]+)?)?$/.test(value) &&
    value.length <= 200
  )
}

export function readerHref(mode: ReadingMode, anchor: string): string {
  const url = new URL(window.location.href)
  url.searchParams.delete('section')
  if (mode === 'guided') url.searchParams.set('reader', mode)
  else url.searchParams.delete('reader')
  url.hash = anchor
  return `${url.search}${url.hash}`
}

export function readingAnchor(url: URL, fallback = ''): string {
  const anchor = url.hash.slice(1)
  if (isReadingAnchor(anchor)) return anchor
  const section = url.searchParams.get('section')
  return isReadingAnchor(section) ? section : fallback
}

/** Auxiliary destinations retain a shareable section without storing evidence in the URL. */
export function auxiliaryReaderHref(
  anchor: string,
  position?: ReadingPosition
): string {
  const url = new URL(window.location.href)
  const section = position?.anchor ?? readingAnchor(url)
  if (section) url.searchParams.set('section', section)
  else url.searchParams.delete('section')
  url.hash = anchor
  return `${url.search}${url.hash}`
}

export function navigateReader(href: string): void {
  const url = new URL(href, window.location.href)
  if (url.href === window.location.href) return
  window.history.pushState(null, '', url)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

/** Keep normal link behavior for new tabs; ordinary clicks retain unsaved in-tab notes. */
export function followLessonLink(event: MouseEvent<HTMLAnchorElement>): void {
  if (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  )
    return
  event.preventDefault()
  navigateReader(event.currentTarget.href)
}

export function subscribeToReaderLocation(onChange: () => void) {
  window.addEventListener('popstate', onChange)
  window.addEventListener('hashchange', onChange)
  return () => {
    window.removeEventListener('popstate', onChange)
    window.removeEventListener('hashchange', onChange)
  }
}

export function readerLocation() {
  return window.location.href
}
