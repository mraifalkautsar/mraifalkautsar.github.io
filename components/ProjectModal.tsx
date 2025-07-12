import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, ExternalLink, Shield } from "lucide-react"
import Image from "next/image"
import type { Project } from "@/types"
import { getSkillIcon, getSkillCategory, getSkillColors, getRarityColor } from "@/utils/skillHelpers"

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent
        className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-800 border-4 border-blue-500/60"
        style={{
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.7)",
        }}
      >
        <DialogHeader className="border-b-2 border-blue-500/50 pb-4">
          <DialogTitle className={`text-2xl font-bold flex items-center ${getRarityColor(project.rarity)}`}>
            <Shield className="h-6 w-6 mr-2" />
            {project.title}
            <span className="ml-2 text-sm">({project.rarity})</span>
          </DialogTitle>
          <DialogDescription className="text-slate-200">{project.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <div className="relative">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover rounded border-2 border-blue-400/50"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-700/70 p-4 rounded border-2 border-blue-500/50">
              <h3 className="text-purple-300 font-bold mb-2">DESCRIPTION</h3>
              <p className="text-slate-200 text-sm leading-relaxed">{project.fullDescription}</p>
            </div>

            <div className="bg-slate-700/70 p-4 rounded border-2 border-blue-500/50">
              <h3 className="text-purple-300 font-bold mb-2">FEATURES</h3>
              <ul className="text-slate-200 text-sm space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-300 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-slate-700/70 p-4 rounded border-2 border-blue-500/50">
            <h3 className="text-purple-300 font-bold mb-2">TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => {
                const IconComponent = getSkillIcon(tech)
                const category = getSkillCategory(tech)
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-1 px-2 py-1 rounded border ${getSkillColors(category)}`}
                  >
                    <IconComponent className="h-3 w-3" />
                    <span className="text-xs">{tech}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex space-x-4 pt-4 border-t-2 border-blue-500/50">
            {project.githubUrl && (
              <Button
                variant="outline"
                asChild
                className="border-2 border-blue-400/60 text-blue-200 hover:bg-blue-900/40 bg-transparent"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Repository
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white font-bold">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
