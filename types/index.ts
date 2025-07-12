export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  fullDescription: string
  features: string[]
  rarity: "Assignment" | "Club/Work" | "Personal"
}

export interface Experience {
  id: number
  title: string
  company: string
  location: string
  duration: string
  description: string
  technologies: string[]
  level: number
}

export interface Skill {
  name: string
  icon: any
  category: "languages" | "frameworks" | "databases" | "tools"
}

export interface NavigationItem {
  id: string
  label: string
  icon: any
}
