import { useEffect, useRef, useState } from 'react'

interface CodeBlockProps {
  code: string
  language: string
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>(
    'idle'
  )
  const resetTimerRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== undefined) {
        window.clearTimeout(resetTimerRef.current)
      }
    }
  }, [])

  const setTemporaryCopyState = (state: 'copied' | 'error'): void => {
    setCopyState(state)
    if (resetTimerRef.current !== undefined) {
      window.clearTimeout(resetTimerRef.current)
    }
    resetTimerRef.current = window.setTimeout(() => {
      setCopyState('idle')
    }, 1500)
  }

  const copyWithFallback = async (text: string): Promise<void> => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return
    }

    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.top = '0'
    textarea.style.left = '0'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()

    const success = document.execCommand('copy')
    document.body.removeChild(textarea)
    if (!success) {
      throw new Error('execCommand copy failed')
    }
  }

  const handleCopy = async (): Promise<void> => {
    try {
      await copyWithFallback(code)
      setTemporaryCopyState('copied')
    } catch {
      setTemporaryCopyState('error')
    }
  }

  return (
    <div className="relative">
      <div className="absolute top-2 right-2">
        <button
          onClick={handleCopy}
          disabled={copyState !== 'idle'}
          className="px-4 py-2 text-sm bg-cyan-700! hover:bg-cyan-800! disabled:bg-emerald-700! disabled:cursor-default text-white! font-black rounded-lg transition-colors shadow-xl shadow-cyan-500/50 border-2 border-cyan-400! disabled:border-emerald-400!"
          title={
            copyState === 'copied'
              ? 'Copied to clipboard'
              : copyState === 'error'
                ? 'Copy failed'
                : 'Copy to clipboard'
          }
        >
          <span className="text-white!">
            {copyState === 'copied'
              ? 'Copied!'
              : copyState === 'error'
                ? 'Copy failed'
                : 'Copy'}
          </span>
        </button>
      </div>
      <pre className="bg-slate-900! text-slate-300! p-4 rounded-lg overflow-x-auto border border-white/10">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}
