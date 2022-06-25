import { HashRouter } from 'react-router-dom'
import { ThemeProvider, GlobalStyle } from '@/theme'
import { ImagesProvider, ThemeContextProvider } from '@/context'
import Router from '@/routes/Router'
import '@/theme/fonts.css'

const App = () => {
  return (
    <HashRouter>
      <ImagesProvider>
        <ThemeContextProvider>
          <ThemeProvider>
            <GlobalStyle />
            <Router />
          </ThemeProvider>
        </ThemeContextProvider>
      </ImagesProvider>
    </HashRouter>
  )
}

export default App