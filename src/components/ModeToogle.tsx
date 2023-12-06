import { useEffect, useState } from 'react'
import { Switch } from './ui/switch'
import { useTheme } from './ui/theme-provider'
import { Label } from '@radix-ui/react-label'

export function ModeToogle() {
  const { setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    isDarkMode === true ? setTheme('dark') : setTheme('light')
  }, [isDarkMode, setTheme])

  return (
    <div className="absolute top-12 right-12 flex items-center gap-2 max-sm:top-14">
      <Switch
        id="theme-mode"
        onCheckedChange={() => setIsDarkMode(!isDarkMode)}
      />
      <Label htmlFor="theme-mode" className="text-base max-sm:text-xs">
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Label>
    </div>
  )
}
