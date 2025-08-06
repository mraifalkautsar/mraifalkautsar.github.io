import { MapPin, Calendar, Briefcase, Star } from "lucide-react"
import { experiences } from "@/data/experiences"
import { getSkillIcon, getSkillCategory, getSkillColors } from "@/utils/skillHelpers"

export default function QuestLog() {

  return (
    <section id="experience" className="py-12 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Experience</h2>
            <p className="text-gray-600 dark:text-gray-400">My professional and academic journey</p>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative bg-white dark:bg-gray-900 border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 ${
                  index === 0 
                    ? "border-blue-300 dark:border-blue-600 ring-2 ring-blue-100 dark:ring-blue-900/30" 
                    : "border-gray-200 dark:border-gray-700"
                }`}
              >
                {/* Featured badge for top experience */}
                {index === 0 && (
                  <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <Star className="h-3 w-3" />
                  </div>
                )}
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <Briefcase className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
                      <h3 className={`text-lg font-bold ${
                        index === 0 
                          ? "text-blue-700 dark:text-blue-300" 
                          : "text-gray-900 dark:text-white"
                      }`}>
                        {exp.title}
                      </h3>
                    </div>
                    <p className={`font-medium mb-1 text-sm ${
                      index === 0 
                        ? "text-blue-600 dark:text-blue-400" 
                        : "text-gray-700 dark:text-gray-300"
                    }`}>
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mb-3 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.map((tech, techIndex) => {
                        const IconComponent = getSkillIcon(tech)
                        const category = getSkillCategory(tech)
                        return (
                          <div
                            key={techIndex}
                            className={`flex items-center space-x-1 px-1.5 py-0.5 rounded border text-xs ${getSkillColors(category)}`}
                          >
                            <IconComponent className="h-2.5 w-2.5" />
                            <span>{tech}</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className="text-right text-xs text-gray-500 dark:text-gray-400 space-y-1 md:min-w-[120px]">
                    {exp.location && (
                      <div className="flex items-center md:justify-end">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                    <div className="flex items-center md:justify-end">
                      <Calendar className="h-3 w-3 mr-1" />
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