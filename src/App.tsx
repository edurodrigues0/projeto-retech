import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './index.css'
import { ThemeProvider } from './components/ui/theme-provider'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}
