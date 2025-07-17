import { Code } from "lucide-react"
import { skills } from "@/data/skills"

export const getSkillIcon = (skillName: string) => {
  const skill = skills.find((s) => s.name === skillName)
  return skill?.icon || Code
}

export const getSkillCategory = (skillName: string) => {
  const skill = skills.find((s) => s.name === skillName)
  return skill?.category || "tools"
}

export const getSkillColors = (category: string) => {
  switch (category) {
    case "languages":
      return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200"
    case "frameworks":
      return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
    case "databases":
      return "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-200"
    case "tools":
      return "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-200"
    default:
      return "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200"
  }
}

export const getRarityColor = (rarity: string) => {
  // Simplified for professional look - all projects get same styling
  return "text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700"
}
