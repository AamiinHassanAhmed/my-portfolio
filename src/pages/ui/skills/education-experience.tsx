import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"


export const EducationExperience = () => {
  return (
    <section className="container mx-auto px-4 py-16 space-y-20">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education Column */}
        <div className="space-y-8">
          <div>
            <span className="text-blue-500 font-medium">QUALIFICATION</span>
            <h2 className="text-2xl font-bold mt-2">My Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((item, index) => (
              <div key={index} className="relative pl-6 border-l border-gray-200">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2" />
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg">{item.institution}</h3>
                    <span className="text-sm text-gray-500">({item.period})</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-500 hover:bg-blue-100">
                    {item.degree}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className="space-y-8">
          <div>
            <span className="text-blue-500 font-medium">WORK EXPERIENCE</span>
            <h2 className="text-2xl font-bold mt-2">My Awesome Experience</h2>
          </div>

          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={index} className="relative pl-6 border-l border-gray-200">
                <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2" />
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg">{item.company}</h3>
                    <span className="text-sm text-gray-500">({item.period})</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-500 hover:bg-blue-100">
                    {item.role}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/90" />
        <div
          className="relative z-10 px-8 py-12 md:py-20 text-center text-white space-y-6"
          style={{
            backgroundImage: 'url("/graphic1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="text-sm font-medium">HAVE ANY PROJECT IN MIND?</span>
          <h2 className="text-3xl md:text-4xl font-bold">Don't Be Hesitate To Contact With Me</h2>
          <Button className="bg-blue-500 hover:bg-blue-600">Get A Quote →</Button>
        </div>
      </div>
    </section>
  )
}

const education = [
  {
    institution: "Rajshahi Polytechnic Institute",
    period: "2011-2012",
    description: "Lorem ipsum dolor sit amese adipiscing elit. Donec feugiated a fringilla sed bibendum.",
    degree: "Diploma In Computer Eng.",
  },
  {
    institution: "Varendra University",
    period: "2013-2017",
    description: "Lorem ipsum dolor sit amese adipiscing elit. Donec feugiated a fringilla sed bibendum.",
    degree: "BSC in CSE",
  },
  {
    institution: "Rajshahi University",
    period: "2017-2021",
    description: "Lorem ipsum dolor sit amese adipiscing elit. Donec feugiated a fringilla sed bibendum.",
    degree: "Programming",
  },
]

const experience = [
  {
    company: "Code Astrology",
    period: "2011-2012",
    description: "Lorem ipsum dolor sit amese adipiscing elit. Donec feugiated a fringilla sed bibendum.",
    role: "Internship",
  },
  {
    company: "Zakir Soft",
    period: "2011-2012",
    description: "Lorem ipsum dolor sit amese adipiscing elit. Donec feugiated a fringilla sed bibendum.",
    role: "UI/UX Designer",
  },
  {
    company: "DevignEdge",
    period: "2011-2012",
    description: "Lorem ipsum dolor sit amese adipiscing elit. Donec feugiated a fringilla sed bibendum.",
    role: "Product Designer",
  },
]

