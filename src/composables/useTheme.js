import { ref, onMounted } from 'vue'

const STORAGE_KEY = 'portfolio-theme'

const theme = ref('dark')

function applyTheme(value) {
  document.documentElement.setAttribute('data-theme', value)
  theme.value = value
  localStorage.setItem(STORAGE_KEY, value)
}

function toggleTheme() {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved)
    return
  }
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
  applyTheme(prefersLight ? 'light' : 'dark')
}

export function useTheme() {
  onMounted(initTheme)

  return {
    theme,
    isDark: () => theme.value === 'dark',
    toggleTheme,
  }
}

// Singleton for shared state across components
let initialized = false

export function useThemeState() {
  if (!initialized) {
    initialized = true
    if (typeof document !== 'undefined') {
      initTheme()
    }
  }

  return { theme, toggleTheme }
}
