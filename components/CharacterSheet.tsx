"use client"

import { Github, Linkedin, Mail, Download, FolderOpen, MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { skills } from "@/data/skills"

export default function CharacterSheet() {
  // Get unique categories from skills
  const categories = [...new Set(skills.map((skill) => skill.category))]

  const getSkillColors = (category: string) => {
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "languages":
        return "bg-blue-400 dark:bg-blue-500"
      case "frameworks":
        return "bg-green-400 dark:bg-green-500"
      case "databases":
        return "bg-purple-400 dark:bg-purple-500"
      case "tools":
        return "bg-orange-400 dark:bg-orange-500"
      default:
        return "bg-gray-400 dark:bg-gray-500"
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 bg-gray-100 dark:bg-gray-950">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Profile Image */}
              <div className="lg:flex-shrink-0">
                <div className="w-80 h-96 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                  <Image
                    src="/profile_picture.jpg"
                    alt="Muhammad Ra'if Alkautsar"
                    width={320}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  Muhammad Ra'if
                  Alkautsar
                </h1>

                <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
                  Software Engineer | Programmer
                </h2>

                <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
                  Informatics from Bandung Institute of Technology
                </p>

                <div className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-4xl">
                  <p>
                    3rd-year Computer Science student with passion for{" "}
                    <strong className="text-white">software engineering</strong> and{" "}
                    <strong className="text-white">game development</strong>. <br></br> 
                    Building a strong foundation through hands-on projects and continuous learning.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                  {[
                    { Icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mraifalkautsar@gmail.com", label: "Email" },
                    { Icon: Github, href: "https://github.com/mraifalkautsar", label: "GitHub" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/mraifalkautsar/", label: "LinkedIn" },
                    { Icon: Instagram, href: "https://www.instagram.com/mraifalkautsar/", label: "Instagram" },
                  ].map(({ Icon, href, label }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="p-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 rounded-lg transition-all duration-200"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </a>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-lg">
                    <Download className="h-5 w-5 mr-2" />
                    Download CV
                  </Button>
                  <Button
                    variant="outline"
                    onClick={scrollToProjects}
                    className="border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-gray-500 dark:hover:border-gray-500 px-8 py-3 text-lg font-medium rounded-lg bg-transparent"
                  >
                    <FolderOpen className="h-5 w-5 mr-2" />
                    View Projects
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>

                {/* Category Legend */}
                <div className="flex flex-wrap gap-3 text-xs">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-1.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${getCategoryColor(category)}`}></div>
                      <span className="text-gray-600 dark:text-gray-400 font-medium capitalize">{category}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <div
                      key={index}
                      className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md border ${getSkillColors(skill.category)} transition-all hover:shadow-sm`}
                    >
                      <IconComponent className="h-3.5 w-3.5 flex-shrink-0" />
                      <span className="text-xs font-medium truncate">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
