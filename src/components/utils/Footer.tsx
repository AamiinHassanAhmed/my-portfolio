import { Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "../ui/button"

export const ContactSection = () => {
    return (
      <section className="relative">
        {/* Slanted background */}
        <div
          className="absolute inset-0 bg-[#1e2832]"
          style={{
            clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
          }}
        />
  
        {/* Content */}
        <div className="relative container mx-auto px-4 pt-32 pb-16">
          <div className="max-w-xl mx-auto text-center space-y-8">
            {/* Contact heading */}
            <div className="space-y-4">
              <span className="text-gray-400 text-sm tracking-wider">CONTACT ME</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Got a Project? Lets Talk!</h2>
              <div className="pt-4">
                <Button  className="bg-blue-500 hover:bg-blue-600 text-white px-8">Get a Quote →</Button>
              </div>
            </div>
  
            {/* Social links and copyright */}
            <div className="pt-16 space-y-6">
              <div className="flex justify-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
              <div className="text-gray-400 text-sm">© 2023 Zakuwork. Powered by Bestkit</div>
            </div>
          </div>
        </div>
      </section>
    )
  }

