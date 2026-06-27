"use client"
import { useEffect } from 'react'
import { useUiStore } from '../store/useUiStore'

export default function ThemeToggle() {
  const theme = useUiStore((s) => s.theme)
  const setTheme = useUiStore((s) => s.setTheme)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored === 'dark') {
        document.documentElement.classList.add('dark')
        setTheme('dark')
      } else {
        document.documentElement.classList.remove('dark')
        setTheme('light')
      }
    } catch (e) {
      // ignore
    }
  }, [setTheme])

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="px-2 py-1 border rounded"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}
