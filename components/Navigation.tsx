"use client"
import { Crown, Scroll, Sword, Shield, Mail } from "lucide-react"
import type { NavigationItem } from "@/types"

interface NavigationProps {
  onNavigate: (sectionId: string) => void
}

const navigationItems: NavigationItem[] = [
  { id: "about", label: "About", icon: Scroll },
  { id: "experience", label: "Experience", icon: Sword },
  { id: "projects", label: "Projects", icon: Shield },
  { id: "contact", label: "Contact", icon: Mail },
]

export default function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav
      className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b-4 border-blue-500/60 z-50"
      style={{
        boxShadow: "inset 0 -2px 4px rgba(0,0,0,0.6), 0 2px 12px rgba(0,0,0,0.5)",
      }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-300 tracking-wide">RAIF's PORTOFOLIO</h1>
          <div className="hidden md:flex space-x-2">
            {navigationItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className="flex items-center space-x-2 px-4 py-2 bg-slate-800/70 hover:bg-slate-700/90 border-2 border-blue-500/40 hover:border-blue-400/60 rounded transition-all duration-200 text-slate-200 hover:text-white"
                style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)" }}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium tracking-wide">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
