import { Button } from "@/components/ui/button"
import { Mail, Linkedin } from "lucide-react"

export default function ContactPanel() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to
              collaborate or just have a chat!
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-lg shadow-sm">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg bg-transparent"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
