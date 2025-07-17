"use client"

import { FolderOpen } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"
import type { Project } from "@/types"
import { getSkillIcon, getSkillCategory, getSkillColors } from "@/utils/skillHelpers"

interface ProjectInventoryProps {
  onProjectSelect: (project: Project) => void
}

export default function ProjectInventory({ onProjectSelect }: ProjectInventoryProps) {
  return (
    <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">A showcase of my recent work and contributions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => onProjectSelect(project)}
                className="cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className="relative mb-4">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={180}
                    className="w-full h-32 object-cover rounded-lg border border-gray-100 dark:border-gray-700"
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                  <FolderOpen className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => {
                    const IconComponent = getSkillIcon(tech)
                    const category = getSkillCategory(tech)
                    return (
                      <div
                        key={index}
                        className={`flex items-center space-x-1 px-2 py-1 rounded-lg border text-xs ${getSkillColors(category)}`}
                      >
                        <IconComponent className="h-3 w-3" />
                        <span>{tech}</span>
                      </div>
                    )
                  })}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
