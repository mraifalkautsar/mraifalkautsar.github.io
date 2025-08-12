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
    <section id="projects" className="py-12 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">A showcase of my works and contributions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => onProjectSelect(project)}
                className="cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg dark:hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className="relative mb-3">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={180}
                    className="w-full h-24 object-cover rounded-md border border-gray-100 dark:border-gray-700"
                  />
                </div>

                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 flex items-center">
                  <FolderOpen className="h-3 w-3 mr-1 text-gray-500 dark:text-gray-400" />
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 leading-relaxed line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, index) => {
                    const IconComponent = getSkillIcon(tech)
                    const category = getSkillCategory(tech)
                    return (
                      <div
                        key={index}
                        className={`flex items-center space-x-1 px-1.5 py-0.5 rounded border text-xs ${getSkillColors(category)}`}
                      >
                        <IconComponent className="h-2.5 w-2.5" />
                        <span className="text-xs truncate">{tech}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}