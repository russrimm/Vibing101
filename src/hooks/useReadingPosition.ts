import { createContext, useContext } from 'react'
import type { ReadingPosition } from '../lib/readerNavigation'

export const ReadingPositionContext = createContext<
  ReadingPosition | undefined
>(undefined)

export function useReadingPosition() {
  return useContext(ReadingPositionContext)
}
