

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../../../components/ui/button"

const testimonials = [
  {
    quote:
      "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real dolor ipsum masterpiece.",
    author: "Ina Ziyad",
    title: "Senior Manager",
    avatar: "/Adobe Express - file.png",
  },
  {
    quote:
      "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real dolor ipsum masterpiece.",
    author: "Ina Ziyad",
    title: "Senior Manager",
    avatar: "/Adobe Express - file.png",
  },
  {
    quote:
      "It was great working with you! I loved starting new projects and seeing how a simple idea can be explored and turned into a real dolor ipsum masterpiece.",
    author: "Ina Ziyad",
    title: "Senior Manager",
    avatar: "/Adobe Express - file.png",
  },
  // Add more testimonials here
]

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-gray-200 py-16 w-full ">
      <div className="container mx-auto px-4 max-w-3xl w-[90%]">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12"
            onClick={prev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="text-center space-y-6">
            <div className="relative w-16 h-16 mx-auto">
              <img
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].author}
                className="rounded-full object-cover"
              />
            </div>
            <blockquote className="text-lg text-gray-700">"{testimonials[currentIndex].quote}"</blockquote>
            <div className="space-y-1">
              <div className="font-medium">{testimonials[currentIndex].author}</div>
              <div className="text-blue-500 text-sm">{testimonials[currentIndex].title}</div>
            </div>
            <div className="flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12"
            onClick={next}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

