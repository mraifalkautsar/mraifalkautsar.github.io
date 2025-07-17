import { MapPin, Calendar, Briefcase } from "lucide-react"
import { experiences } from "@/data/experiences"
import { getSkillIcon, getSkillCategory, getSkillColors } from "@/utils/skillHelpers"

export default function QuestLog() {

  return (
    <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <p className="text-gray-600 dark:text-gray-400">My professional and academic journey</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 4).map((tech, index) => {
                        const IconComponent = getSkillIcon(tech)
                        const category = getSkillCategory(tech)
                        return (
                          <div
                            key={index}
                            className={`flex items-center space-x-1 px-3 py-1 rounded-lg border text-sm ${getSkillColors(category)}`}
                          >
                            <IconComponent className="h-3 w-3" />
                            <span>{tech}</span>
                          </div>
                        )
                      })}
                      {exp.technologies.length > 4 && (
                        <span className="px-2 py-1 text-sm text-gray-500 dark:text-gray-400">
                          +{exp.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400 space-y-1 md:min-w-[140px]">
                    <div className="flex items-center md:justify-end">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center md:justify-end">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
