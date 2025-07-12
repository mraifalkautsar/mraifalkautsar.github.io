import { MapPin, Calendar, Sword, Star } from "lucide-react"
import { experiences } from "@/data/experiences"
import { getSkillIcon, getSkillCategory, getSkillColors } from "@/utils/skillHelpers"

export default function QuestLog() {
  return (
    <section id="experience" className="py-8 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-slate-800/90 border-4 border-blue-500/60 rounded-lg p-6 mb-4"
            style={{
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.6)",
            }}
          >
            <h2 className="text-2xl font-bold text-blue-300 text-center mb-6 flex items-center justify-center">
              <Sword className="h-6 w-6 mr-2" />
              EXPERIENCES
            </h2>

            <div className="space-y-3">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-slate-700/70 border-2 border-blue-500/50 rounded p-3 hover:border-blue-400/70 transition-all"
                  style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)" }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <Sword className="h-4 w-4 text-purple-300 mr-2" />
                        <h3 className="text-base font-bold text-purple-300">{exp.title}</h3>
                      </div>
                      <p className="text-blue-200 font-medium text-sm mb-1">{exp.company}</p>
                      <p className="text-slate-200 text-sm mb-2 leading-relaxed line-clamp-2">{exp.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.slice(0, 4).map((tech, index) => {
                          const IconComponent = getSkillIcon(tech)
                          const category = getSkillCategory(tech)
                          return (
                            <div
                              key={index}
                              className={`flex items-center space-x-1 px-2 py-0.5 rounded text-xs ${getSkillColors(category)}`}
                            >
                              <IconComponent className="h-3 w-3" />
                              <span>{tech}</span>
                            </div>
                          )
                        })}
                        {exp.technologies.length > 4 && (
                          <span className="px-1 py-0.5 text-xs text-blue-200">+{exp.technologies.length - 4}</span>
                        )}
                      </div>
                    </div>
                    <div className="text-right text-xs text-blue-200 space-y-0.5 md:min-w-[120px]">
                      <div className="flex items-center md:justify-end">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span className="truncate">{exp.location}</span>
                      </div>
                      <div className="flex items-center md:justify-end">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="truncate">{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
