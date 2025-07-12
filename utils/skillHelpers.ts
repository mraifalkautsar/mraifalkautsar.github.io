import { Code } from "lucide-react"
import { skills } from "@/data/skills"

export const getSkillIcon = (skillName: string) => {
  const skill = skills.find((s) => s.name === skillName)
  return skill?.icon || Code
}

export const getSkillCategory = (skillName: string) => {
  const skill = skills.find((s) => s.name === skillName)
  return skill?.category || "other"
}

export const getSkillColors = (category: string) => {
  switch (category) {
    case "languages":
      return "bg-blue-900/80 border-blue-400/70 text-blue-100 hover:bg-blue-800/90"
    case "frameworks":
      return "bg-purple-900/80 border-purple-400/70 text-purple-100 hover:bg-purple-800/90"
    case "databases":
      return "bg-indigo-900/80 border-indigo-400/70 text-indigo-100 hover:bg-indigo-800/90"
    case "tools":
      return "bg-cyan-900/80 border-cyan-400/70 text-cyan-100 hover:bg-cyan-800/90"
    default:
      return "bg-slate-700/80 border-slate-400/70 text-slate-100 hover:bg-slate-600/90"
  }
}

export const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "Assignment":
      return "text-yellow-300 border-yellow-500/80"
    case "Club/Work":
      return "text-purple-300 border-purple-500/80"
    case "Personal":
      return "text-[#77c9d4] border-[#32745c]"
    default:
      return "text-slate-300 border-slate-500/80"
  }
}
