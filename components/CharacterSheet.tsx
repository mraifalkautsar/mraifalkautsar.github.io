import { Github, Linkedin, Mail, Star, Scroll, Zap } from "lucide-react"
import Image from "next/image"
import { skills } from "@/data/skills"
import { getSkillColors } from "@/utils/skillHelpers"

export default function CharacterSheet() {
  // Get unique categories from skills
  const categories = [...new Set(skills.map(skill => skill.category))]

  return (
    <section id="about" className="pt-20 pb-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Character Portrait Panel */}
            <div className="lg:col-span-1">
              <div
                className="bg-slate-800/90 border-4 border-blue-500/60 rounded-lg p-6"
                style={{
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.6)",
                }}
              >
                <div className="text-center">
                  <div className="relative mb-4">
                    <div
                      className="w-40 h-60 mx-auto border-4 border-blue-400/60 rounded-lg overflow-hidden bg-slate-700"
                      style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.6)" }}
                    >
                      <Image
                        src="/profile_picture.jpg"
                        alt="Character Portrait"
                        width={160}
                        height={240}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                <h2 className="text-base font-bold text-blue-300 mb-2 flex items-center justify-center">
                  MUHAMMAD RA'IF ALKAUTSAR
                </h2>
                  <p className="text-purple-300 mb-1 text-sm"><i>also known as:</i> lieutenanthydra, lotsadelight</p>
                  <div className="flex justify-center items-center space-x-1 mb-4">
                    <span className="text-sm text-blue-200">3rd-year College Student</span>
                  </div>

                  {/* Character Stats */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Major:</span>
                      <span className="text-purple-300">Informatics</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">School:</span>
                      <span className="text-purple-300">Institut Teknologi Bandung (ITB)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Interest:</span>
                      <span className="text-purple-300">SoftEng/CybSec/GameDev</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-2 mt-6">
                  {[Github, Linkedin, Mail].map((Icon, index) => (
                    <button
                      key={index}
                      className="p-2 bg-slate-700/70 hover:bg-slate-600/90 border-2 border-blue-500/40 hover:border-blue-400/60 rounded transition-all"
                      style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)" }}
                    >
                      <Icon className="h-4 w-4 text-blue-200" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Character Description & Skills Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Chronicle Panel */}
              <div
                className="bg-slate-800/90 border-4 border-blue-500/60 rounded-lg p-6"
                style={{
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.6)",
                }}
              >
                <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                  <Scroll className="h-5 w-5 mr-2" />
                  ABOUT ME
                </h2>
                { /* <h2 className="text-xl font-bold text-blue-300 mb-4 flex items-center justify-center">
                  MUHAMMAD RA'IF ALKAUTSAR
                </h2> */ }
                <div className="space-y-3 text-slate-200 text-sm leading-relaxed text-justify">
                  <p>
                    This website is made in the style of retro CRPG games, while still maintaining <b>professionality</b>. Accordingly, I have quite an interest in <b>game development</b> as a <i>side-quest</i> in my journey.  <b>Cybersecurity</b> is also a great interest to me.
                    I love solving problems and learning new things. I am currently a <b>3rd year informatics/computer science student</b> in <b>Institut Teknologi Bandung</b>. I am quite active in my clubs: GIM ITB and Genshiken ITB,
                    and constantly strives to be better academically, taking on assignments as stepping stones to make me better at programming. I do <b>capture-the-flag competitions</b>, seeing them as interesting puzzles to solve.
                    These interests of mine help me build a strong foundation as a <b>software engineer</b>.
                  </p>
                </div>
              </div>

              {/* Skills Panel */}
              <div
                className="bg-slate-800/90 border-4 border-blue-500/60 rounded-lg p-6"
                style={{
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.6)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
                  <h2 className="text-lg font-bold text-blue-300 flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    TECH STACKS
                  </h2>
                  
                  {/* Color Legend */}
                  <div className="flex flex-wrap gap-3 text-xs">
                    {categories.map((category) => {
                      const colors = getSkillColors(category)
                      const borderColor = colors.includes('blue-400') ? 'bg-blue-400' :
                                         colors.includes('purple-400') ? 'bg-purple-400' :
                                         colors.includes('indigo-400') ? 'bg-indigo-400' :
                                         colors.includes('cyan-400') ? 'bg-cyan-400' : 'bg-slate-400'
                      
                      return (
                        <div
                          key={category}
                          className="flex items-center space-x-1.5"
                        >
                          <div className={`w-2.5 h-2.5 rounded-full ${borderColor}`}></div>
                          <span className="text-slate-300 font-medium capitalize">{category}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon
                    return (
                      <div
                        key={index}
                        className={`flex items-center space-x-1 px-2 py-1 rounded border ${getSkillColors(skill.category)} transition-all hover:scale-105`}
                        style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.3)" }}
                      >
                        <IconComponent className="h-3 w-3 flex-shrink-0" />
                        <span className="text-xs font-medium truncate">{skill.name}</span>
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
