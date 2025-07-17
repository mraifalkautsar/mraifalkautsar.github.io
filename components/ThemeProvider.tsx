"use client"

import type React from "react"

import { ThemeContext, useThemeState } from "@/hooks/useTheme"

interface ThemeProviderProps {
  children: React.ReactNode
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const themeState = useThemeState()

  return <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
}
