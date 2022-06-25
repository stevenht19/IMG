import { useColorMode } from '@/hooks/useColorMode'
import { createContext } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
  const { theme, onToggle } = useColorMode()

  return (
    <ThemeContext.Provider value={{
      theme,
      onToggle
    }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeContextProvider