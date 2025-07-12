"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import CharacterSheet from "@/components/CharacterSheet"
import QuestLog from "@/components/QuestLog"
import ProjectInventory from "@/components/Projects"
import ContactPanel from "@/components/ContactPanel"
import ProjectModal from "@/components/ProjectModal"
import type { Project } from "@/types"

export default function Portfolio() {
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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation onNavigate={scrollToSection} />

      <CharacterSheet />

      <QuestLog />

      <ProjectInventory onProjectSelect={handleProjectSelect} />

      <ContactPanel />

      <ProjectModal project={selectedProject} onClose={handleModalClose} />

      {/* Footer */}
      <footer className="py-6 px-4 border-t-4 border-blue-500/60 bg-slate-900/80">
        <div className="container mx-auto text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Muhammad Ra'if Alkautsar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
