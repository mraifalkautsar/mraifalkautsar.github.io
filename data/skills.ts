import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Terminal, 
  Cloud, 
  GitBranch, 
  Container, 
  Cpu,
  Gamepad2,
  Image,
  Video,
  Palette,
  FileCode
} from "lucide-react"
import type { Skill } from "@/types"

export const skills: Skill[] = [
  // Languages
  { name: "Python", icon: Cpu, category: "languages" },
  { name: "C", icon: Terminal, category: "languages" },
  { name: "C++", icon: Terminal, category: "languages" },
  { name: "C#", icon: Code, category: "languages" },
  { name: "Java", icon: Code, category: "languages" },
  { name: "Haskell", icon: Terminal, category: "languages" },
  { name: "JavaScript", icon: Code, category: "languages" },
  { name: "HTML", icon: FileCode, category: "languages" },
  { name: "CSS", icon: Palette, category: "languages" },
  
  // Frameworks
  { name: ".NET", icon: Server, category: "frameworks" },
  { name: "Unity", icon: Gamepad2, category: "frameworks" },
  { name: "Godot", icon: Gamepad2, category: "frameworks" },
  
  // Database
  { name: "SQL", icon: Database, category: "databases" },
  
  // Design Tools
  { name: "Git", icon: GitBranch, category: "tools" },
  { name: "Figma", icon: Palette, category: "tools" },
  { name: "Photoshop", icon: Image, category: "tools" },
]