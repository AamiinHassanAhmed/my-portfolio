// import { Download, Facebook, Twitter, Github, Dribbble } from "lucide-react"
// import { Button } from "../../../components/ui/button"

// export const About = () => {
//   return (
//     <section id="About" className="container mx-auto px-4 py-16 space-y-20  w-[90%]">
//       {/* Partners Section */}
//       <div className="text-center space-y-10">
//         <h3 className="text-lg font-medium">
//           PROUD MARKETING <span className="text-blue-500">PARTNERS</span> WITH
//         </h3>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
//           {partners.map((partner, index) => (
//             <img key={index}
//               src={`/placeholder.svg?height=40&width=120`}
//               alt={partner}
//               width={120}
//               height={40}
//               className="opacity-50 hover:opacity-75 transition-opacity"/>
           
//           ))}
//         </div>
//       </div>

//       {/* About Me Section */}
//       <div className="grid md:grid-cols-2 gap-12 items-center">
//         <div className="relative">
//           <div className="bg-blue-50 rounded-full w-[700px] h-[700px] absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 mr-" />
//           <img
//             src="/Adobe Express - file.png "
//             alt="Profile"
//             width={500}
//             height={600}
//             className="relative top-1/2  "
//           />
//         </div>

//         <div className="space-y-6">
//           <span className="text-blue-500 font-medium">ABOUT ME</span>

//           <h2 className="text-3xl md:text-4xl font-bold leading-tight">More Than 5+ Years Programming Experienced</h2>

//           <p className="text-gray-600">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
//             industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
//             scrambled it to make a type specimen book. It has survived not only five centuries.
//           </p>

//           <div className="grid sm:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <div className="flex gap-2">
//                 <span className="text-gray-600">Name:</span>
//                 <span className="font-medium">Michle Jhon Doe</span>
//               </div>
//               <div className="flex gap-2">
//                 <span className="text-gray-600">Email:</span>
//                 <span className="font-medium">example@gmail.com</span>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <div className="flex gap-2">
//                 <span className="text-gray-600">Location:</span>
//                 <span className="font-medium">Dhaka, Bangladesh</span>
//               </div>
//               <div className="flex gap-2">
//                 <span className="text-gray-600">Office:</span>
//                 <span className="font-medium">Kollanpur, Shamoli, Dhaka</span>
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center gap-8">
//             <Button className="bg-blue-500 hover:bg-blue-600">
//               Download CV <Download className="ml-2 h-4 w-4" />
//             </Button>
//             <span className="text-gray-400">Follow me</span>
//             <div className="flex gap-4">
//               <a href="#" className="text-gray-400 hover:text-gray-600">
//                 <Facebook className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-gray-600">
//                 <Dribbble className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-gray-600">
//                 <Github className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-gray-600">
//                 <Twitter className="h-5 w-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// const partners = ["Google", "Amazon", "Airbnb", "Spotify", "InTrax", "Noxis"]

"use client"

import { Download, Facebook, Twitter, Github, Dribbble } from "lucide-react"
import { Button } from "../../../components/ui/button"

export const About = () => {
  return (
    <section id="About" className="container mx-auto px-4 py-16 space-y-20 w-[90%]">
      {/* Partners Section */}
      <div className="text-center space-y-10 relative">
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        <h3 className="text-lg font-medium relative inline-block">
          PROUD MARKETING <span className="text-blue-500">PARTNERS</span> WITH
          <div className="absolute -z-10 bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 p-4"
            >
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img
                src={`/placeholder.svg?height=40&width=120`}
                alt={partner}
                width={120}
                height={40}
                className="opacity-50 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
              />
              
            </div>
          ))}
        </div>
      </div>

      {/* About Me Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-full w-[700px] h-[700px] absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow" />
          <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-yellow-100 rounded-full opacity-70 animate-float-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-70 animate-float-slow-reverse"></div>
          <img
            src="/11.png"
            alt="Profile"
            width={500}
            height={600}
            className="relative top-1/2 drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        <div className="space-y-6 relative">
          <div className="absolute -z-10 top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-30 blur-3xl"></div>

          <span className="text-blue-500 font-medium relative inline-block">
            ABOUT ME
            <div className="absolute -z-10 bottom-0 left-0 w-full h-1 bg-blue-100"></div>
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            More Than{" "}
            <span className="relative inline-block text-blue-600">
              5+ Years
              <svg
                className="absolute -z-10 bottom-1 left-0 w-full"
                height="6"
                viewBox="0 0 200 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3C50 0.5 150 0.5 200 3" stroke="#93C5FD" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Programming Experienced
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-sm">
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">Michle Jhon Doe</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">example@gmail.com</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium">Dhaka, Bangladesh</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600">Office:</span>
                <span className="font-medium">Kollanpur, Shamoli, Dhaka</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <Button className="bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-200 rounded-xl px-6 py-5 h-auto transition-all hover:translate-y-[-2px]">
              Download CV <Download className="ml-2 h-4 w-4" />
            </Button>
            <span className="text-gray-400 font-medium">Follow me</span>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all transform hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all transform hover:scale-110"
              >
                <Dribbble className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-800 bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all transform hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const partners = ["Damal", "Quble", "Airbnb", "Spotify", "InTrax", "Noxis"]

