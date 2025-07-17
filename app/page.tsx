"use client"

import { useState } from "react"
import ThemeProvider from "@/components/ThemeProvider"
import Navigation from "@/components/Navigation"
import CharacterSheet from "@/components/CharacterSheet"
import QuestLog from "@/components/QuestLog"
import ProjectInventory from "@/components/Projects"
import ContactPanel from "@/components/ContactPanel"
import ProjectModal from "@/components/ProjectModal"
import type { Project } from "@/types"

function PortfolioContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project)
  }

  const handleModalClose = () => {
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <Navigation onNavigate={scrollToSection} />

      <CharacterSheet />

      <QuestLog />

      <ProjectInventory onProjectSelect={handleProjectSelect} />

      <ContactPanel />

      <ProjectModal project={selectedProject} onClose={handleModalClose} />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Muhammad Ra'if Alkautsar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default function Portfolio() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  )
}
