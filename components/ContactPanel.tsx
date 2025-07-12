import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"

export default function ContactPanel() {
  return (
    <section id="contact" className="py-12 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-slate-800/90 border-4 border-blue-500/60 rounded-lg p-8 text-center"
            style={{
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.6)",
            }}
          >
            <h2 className="text-2xl font-bold text-blue-300 mb-4">CONTACT ME!</h2>
            <p className="text-slate-200 mb-6 leading-relaxed">
              I'm always interested in projects and new quests. Feel free to send a message!
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 border-2 border-blue-500 rounded"
                style={{ boxShadow: "inset 0 1px 2px rgba(255,255,255,0.1), 0 2px 8px rgba(0,0,0,0.4)" }}
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-400/60 text-blue-200 hover:bg-blue-900/40 hover:border-blue-300 bg-transparent px-6 py-3 rounded"
                style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.4)" }}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
