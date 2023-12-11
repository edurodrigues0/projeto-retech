import { useEffect, useState } from 'react'
import { Switch } from './ui/switch'
import { useTheme } from './ui/theme-provider'
import { Label } from '@radix-ui/react-label'

export function ModeToogle() {
  const { setTheme, theme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return theme !== 'light'
  })

  useEffect(() => {
    isDarkMode === true ? setTheme('dark') : setTheme('light')
  }, [isDarkMode, setTheme])

  function changeTheme() {
    return setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="absolute top-12 right-5 flex items-center gap-2 max-sm:top-8">
      <Switch
        id="theme-mode"
        checked={isDarkMode}
        onCheckedChange={() => changeTheme()}
      />
      <Label htmlFor="theme-mode" className="text-base max-sm:text-xs">
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </Label>
    </div>
  )
}
