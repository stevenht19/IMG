import { useThemeContext } from '@/hooks/useThemeContext'
import { ThemeProvider } from 'styled-components'

const darkMode = {
  bodyColor: '#101010',
  title: '#fff',
  blueGradient: 'rgb(138, 180, 248)',
  magentaGradient: 'rgb(193, 168, 226)',
  input: '#fff',
  buttonText: '#101010',
  iconButton: '#fff',
  placeholder: '#A0AEC0',
  textColor: '#fff',
  boxColor: 'RGBA(255, 255, 255, 0.06)',
  footerColor: 'rgba(0, 0, 0, 0.24)'
}
const lightMode = {
  bodyColor: '#F7FAFC',
  title: 'rgb(151, 108, 210)',
  blueGradient: 'rgb(47, 112, 193)',
  magentaGradient: 'rgb(116, 97, 195)',
  input: '#EDF2F7',
  buttonText: '#fff',
  iconButton: 'rgb(49, 49, 49)',
  placeholder: '#A0AEC0',
  textColor: 'rgb(49, 49, 49)',
  boxColor: '#fff',
  footerColor: '#EDF2F7'
}

const Theme = ({ children }) => {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider 
      theme={theme === 'dark' ? darkMode : lightMode}
    >
      {children}
    </ThemeProvider>
  )
}
export default Theme