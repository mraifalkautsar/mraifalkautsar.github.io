"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, ExternalLink, X } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/types"
import { getSkillIcon, getSkillCategory, getSkillColors } from "@/utils/skillHelpers"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl">
        <DialogHeader className="border-b border-gray-100 dark:border-gray-800 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</DialogTitle>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          <DialogDescription className="text-gray-600 dark:text-gray-400">{project.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          <div className="relative">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg border border-gray-100 dark:border-gray-700"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Description</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.fullDescription}</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Key Features</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 dark:text-gray-500 mr-2 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => {
                const IconComponent = getSkillIcon(tech)
                const category = getSkillCategory(tech)
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg border ${getSkillColors(category)}`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex space-x-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            {project.githubUrl && (
              <Button
                variant="outline"
                asChild
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Repository
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button
                asChild
                className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900"
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Project
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
