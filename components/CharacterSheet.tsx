import { Github, Linkedin, Mail, GraduationCap } from "lucide-react"
import Image from "next/image"
import { skills } from "@/data/skills"
import { getSkillColors } from "@/utils/skillHelpers"

export default function CharacterSheet() {
  // Get unique categories from skills
  const categories = [...new Set(skills.map((skill) => skill.category))]

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

  return (
    <section id="about" className="pt-24 pb-16 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Profile Panel */}
            <div className="lg:flex-shrink-0 lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-48 h-64 mx-auto border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-700">
                      <Image
                        src="/profile_picture.jpg"
                        alt="Profile Picture"
                        width={192}
                        height={256}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Muhammad Ra'if Alkautsar</h1>

                  <p className="text-gray-600 dark:text-gray-400 mb-1 text-sm italic">
                    also known as: lieutenanthydra, lotsadelight
                  </p>

                  <div className="flex justify-center items-center space-x-1 mb-6">
                    <span className="text-sm text-gray-600 dark:text-gray-400">3rd-year Computer Science Student</span>
                  </div>

                  {/* Profile Stats */}
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 dark:text-gray-400">Major:</span>
                      <span className="text-gray-900 dark:text-white font-medium">Informatics</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 dark:text-gray-400">School:</span>
                      <span className="text-gray-900 dark:text-white font-medium">ITB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 dark:text-gray-400">Interests:</span>
                      <span className="text-gray-900 dark:text-white font-medium">SoftEng/CybSec/GameDev</span>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3">
                    {[
                      { Icon: Github, href: "#" },
                      { Icon: Linkedin, href: "#" },
                      { Icon: Mail, href: "#" },
                    ].map(({ Icon, href }, index) => (
                      <a
                        key={index}
                        href={href}
                        className="p-3 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 rounded-lg transition-all duration-200 hover:shadow-sm"
                      >
                        <Icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Panel */}
            <div className="flex-1 space-y-8">
              {/* About Panel */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    I am a passionate <strong>3rd-year Computer Science student</strong> at{" "}
                    <strong>Institut Teknologi Bandung (ITB)</strong> with diverse interests spanning{" "}
                    <strong>software engineering</strong>, <strong>cybersecurity</strong>, and{" "}
                    <strong>game development</strong>.
                  </p>
                  <p>
                    I actively participate in <strong>capture-the-flag competitions</strong>, viewing them as engaging
                    puzzles that sharpen my problem-solving skills. Through my involvement in clubs like GIM ITB and
                    Genshiken ITB, I continuously strive for academic excellence while building practical programming
                    experience.
                  </p>
                  <p>
                    My goal is to leverage these diverse interests and experiences to build a strong foundation as a{" "}
                    <strong>software engineer</strong>, always eager to learn new technologies and tackle challenging
                    problems.
                  </p>
                </div>
              </div>

              {/* Skills Panel */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>

                  {/* Category Legend */}
                  <div className="flex flex-wrap gap-4 text-xs">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${getCategoryColor(category)}`}></div>
                        <span className="text-gray-600 dark:text-gray-400 font-medium capitalize">{category}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon
                    return (
                      <div
                        key={index}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg border ${getSkillColors(skill.category)} transition-all hover:shadow-sm`}
                      >
                        <IconComponent className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm font-medium truncate">{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
