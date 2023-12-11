import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './index.css'
import { ThemeProvider } from './components/ui/theme-provider'
import { ModeToogle } from './components/ModeToogle'

export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
        <ModeToogle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
