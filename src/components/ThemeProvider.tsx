'use client'

import { ReactNode, useEffect, useState } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

/**
 * ThemeProvider - Handles dark/light mode toggle
 * Manages localStorage persistence and HTML class updates
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if user has theme preference
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      // Default to dark mode
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <>{children}</>
}
