import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function initialTheme(): Theme {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') return saved
  } catch (error) {
    console.warn('Theme preference could not be read:', error)
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const [warning, setWarning] = useState('')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
      setWarning('')
    } catch (error) {
      console.warn('Theme preference could not be saved:', error)
      setWarning(
        'Browser storage is unavailable. Theme and lab progress may not survive a refresh.'
      )
    }
  }, [theme])

  return {
    theme,
    warning,
    toggleTheme: () =>
      setTheme((previous) => (previous === 'dark' ? 'light' : 'dark')),
  }
}
