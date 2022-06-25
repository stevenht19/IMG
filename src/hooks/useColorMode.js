import { useState } from 'react'
import { localStorage } from '@/utils/localStorage'

export const useColorMode = () => {
  const [theme, setTheme] = useState(window.localStorage.getItem('theme') || 'dark')

  const setThemeMode = (mode) => {
    localStorage('set', 'theme', mode)
    setTheme(mode)
  }

  const onToggle = () => {
    setThemeMode(theme === 'dark' ? 'light' : 'dark')
  }

  return {
    theme,
    onToggle
  }
}
