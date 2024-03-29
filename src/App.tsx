import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './index.css'
import { ThemeProvider } from './components/ui/theme-provider'
import { ModeToogle } from './components/ModeToogle'

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Router />
        <ModeToogle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
