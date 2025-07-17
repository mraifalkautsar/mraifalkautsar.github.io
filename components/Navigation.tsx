"use client"
import { User, Briefcase, FolderOpen, Mail } from "lucide-react"
import type { NavigationItem } from "@/types"
import ThemeToggle from "./ThemeToggle"

interface NavigationProps {
  onNavigate: (sectionId: string) => void
}

const navigationItems: NavigationItem[] = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
]

export default function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">Muhammad Ra'if Alkautsar</h1>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-1">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => onNavigate(id)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
