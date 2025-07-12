"use client"

import { Shield } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"
import type { Project } from "@/types"
import { getSkillIcon, getSkillCategory, getSkillColors, getRarityColor } from "@/utils/skillHelpers"

interface ProjectInventoryProps {
  onProjectSelect: (project: Project) => void
}

export default function ProjectInventory({ onProjectSelect }: ProjectInventoryProps) {
  return (
    <section id="projects" className="py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div
            className="bg-slate-800/90 border-4 border-blue-500/60 rounded-lg p-6"
            style={{
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.6)",
            }}
          >
            <h2 className="text-2xl font-bold text-blue-300 text-center mb-6 flex items-center justify-center">
              <Shield className="h-6 w-6 mr-2" />
              PROJECTS
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => onProjectSelect(project)}
                  className={`cursor-pointer bg-slate-700/70 border-2 ${getRarityColor(project.rarity)} rounded-lg p-4 hover:bg-slate-600/80 transition-all duration-200 hover:scale-105`}
                  style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4), 0 2px 12px rgba(0,0,0,0.3)" }}
                >
                  <div className="relative mb-3">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={200}
                      height={120}
                      className="w-full h-24 object-cover rounded border border-blue-400/40"
                    />
                    <div
                      className={`absolute top-1 right-1 px-2 py-1 rounded text-xs font-bold ${getRarityColor(project.rarity)} bg-slate-900/90`}
                    >
                      {project.rarity}
                    </div>
                  </div>

                  <h3 className="text-purple-300 font-bold text-sm mb-2 flex items-center">
                    <Shield className="h-3 w-3 mr-1" />
                    {project.title}
                  </h3>
                  <p className="text-slate-200 text-xs mb-3 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => {
                      const IconComponent = getSkillIcon(tech)
                      const category = getSkillCategory(tech)
                      return (
                        <div
                          key={index}
                          className={`flex items-center space-x-1 px-2 py-1 rounded text-xs ${getSkillColors(category)}`}
                        >
                          <IconComponent className="h-3 w-3" />
                          <span>{tech}</span>
                        </div>
                      )
                    })}
                    {project.technologies.length > 3 && (
                      <span className="px-1 py-0.5 text-xs text-blue-200">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
