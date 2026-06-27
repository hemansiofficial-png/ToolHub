import create from 'zustand'

type UiState = {
  theme: 'light' | 'dark'
  setTheme: (t: 'light' | 'dark') => void
}

export const useUiStore = create<UiState>((set) => ({
  theme: 'light',
  setTheme: (t) => {
    set({ theme: t })
    try {
      localStorage.setItem('theme', t)
      if (t === 'dark') document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
    } catch (e) {
      // ignore
    }
  },
}))
