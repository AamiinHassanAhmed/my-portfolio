

// import { Download } from "lucide-react"
// import { Button } from "../../../components/ui/button"

// export const Home = () => {
//   return (
//     <section className="container mx-auto px-4 py-16 md:py-24  w-[100%] ">
//       <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mx-auto ml-24 ">
//         <div className="w-full md:w-1/2 space-y-6">
//           <h2 className="text-2xl font-medium">
//             Hello Mate <span className="inline-block animate-wave">👋</span>
//           </h2>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
//             I'm Mohamed Ziyad
//             <p>
//   <br />A <span className="text-blue-500">Graphic Designer</span> makes beautiful designs.
// </p>

//           </h1>
//           <p className="text-gray-600 text-lg max-w-lg">
//             Hi, I'm Michle a freelance Graphic designer from San-Francisco. I help brands turn their ideas into high quality
//             products.
//           </p>
//           <div className="flex flex-wrap gap-4 pt-4">
//             <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 h-auto">
//               Book a Call <span className="ml-1">→</span>
//             </Button>
//             <Button variant="outline" className="border-gray-300 px-8 py-6 h-auto">
//               Download CV <Download className="ml-2 h-4 w-4" />
//             </Button>
//           </div>
//         </div>


// {/* ssssss */}


//         <div className="w-full md:w-1/2 relative ">
//           <div className="relative z-10 ">

//             <img  src="/Adobe Express - file.png  "    alt="Michle Smith"
//               width={500}
//               height={600}
//               className=" " />
           
//           </div>

//           {/* Floating tech icons */}
//           <div className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-md">
//             <div className="w-8 h-8 bg-red-50 flex items-center justify-center rounded-md">
//               <span className="text-red-500 text-xl">A</span>
//             </div>
//           </div>

//           <div className="absolute top-1/4 left-0 bg-white p-3 rounded-lg shadow-md">
//             <div className="w-8 h-8 bg-orange-50 flex items-center justify-center rounded-md">
//               <span className="text-orange-500">🔥</span>
//             </div>
//           </div>

//           <div className="absolute bottom-1/4 right-0 bg-white p-3 rounded-lg shadow-md">
//             <div className="w-8 h-8 bg-blue-50 flex items-center justify-center rounded-md">
//               <span className="text-blue-500">⚛️</span>
//             </div>
//           </div>

//           <div className="absolute bottom-10 left-10 bg-white p-3 rounded-lg shadow-md">
//             <div className="w-8 h-8 bg-blue-50 flex items-center justify-center rounded-md">
//               <span className="text-blue-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
//                   <path d="M2 20h20" />
//                   <path d="M14 12v.01" />
//                 </svg>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { Download } from "lucide-react"
import { Button } from "../../../components/ui/button"

export const Home = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 w-[100%] bg-gradient-to-br from-white to-blue-50">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mx-auto ml-24">
      <div className="w-full md:w-1/2 space-y-6">
  <h2 className="text-2xl font-medium relative">
    Hey there, friend <span className="inline-block animate-wave">👋</span>
    <span className="absolute -z-10 bottom-0 left-0 w-24 h-3 bg-blue-200 opacity-50 rounded-full"></span>
  </h2>
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
    I'm Amiin Hassan
    <p>
      <br />A passionate{" "}
      <span className="text-blue-500 relative inline-block">
        Web Designer
        <svg
          className="absolute -z-10 bottom-2 left-0 w-full"
          height="6"
          viewBox="0 0 200 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3C50 0.5 150 0.5 200 3" stroke="#93C5FD" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </span>{" "}
      crafting digital experiences that speak louder than words.
    </p>
  </h1>
  <p className="text-gray-600 text-lg max-w-lg">
    I breathe life into pixels and turn visions into vibrant, functional designs.
    From wireframes to wonder — let's build something unforgettable together.
  </p>
  <div className="flex flex-wrap gap-4 pt-4">
    <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 h-auto rounded-xl shadow-lg shadow-blue-200 transition-all hover:translate-y-[-2px]">
      Book a Call <span className="ml-1">→</span>
    </Button>
    <Button
      variant="outline"
      className="border-gray-300 px-8 py-6 h-auto rounded-xl hover:bg-gray-50 transition-all hover:translate-y-[-2px]"
    >
      Download CV <Download className="ml-2 h-4 w-4" />
    </Button>
  </div>
</div>


{/* sdfghjkl; */}
        <div className="w-full md:w-1/2 relative bg-blue-100 rounded-3xl overflow-hidden shadow-xl space-y-6">
          <div className="relative z-10">
            <img src="/11.png" alt="Michle Smith" width={500} height={600} className="object-cover" />

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 right-0 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Floating tech icons with improved styling */}
          <div className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-md backdrop-blur-sm bg-opacity-90 border border-blue-100 transform hover:scale-105 transition-transform">
            <div className="w-8 h-8 bg-red-50 flex items-center justify-center rounded-md">
              <span className="text-red-500 text-xl">A</span>
            </div>
          </div>

          <div className="absolute top-1/4 left-0 bg-white p-3 rounded-lg shadow-md backdrop-blur-sm bg-opacity-90 border border-orange-100 transform hover:scale-105 transition-transform">
            <div className="w-8 h-8 bg-orange-50 flex items-center justify-center rounded-md">
              <span className="text-orange-500">🔥</span>
            </div>
          </div>

          <div className="absolute bottom-1/4 right-0 bg-white p-3 rounded-lg shadow-md backdrop-blur-sm bg-opacity-90 border border-blue-100 transform hover:scale-105 transition-transform">
            <div className="w-8 h-8 bg-blue-50 flex items-center justify-center rounded-md">
              <span className="text-blue-500">⚛️</span>
            </div>
          </div>

          <div className="absolute bottom-10 left-10 bg-white p-3 rounded-lg shadow-md backdrop-blur-sm bg-opacity-90 border border-blue-100 transform hover:scale-105 transition-transform">
            <div className="w-8 h-8 bg-blue-50 flex items-center justify-center rounded-md">
              <span className="text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
                  <path d="M2 20h20" />
                  <path d="M14 12v.01" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}









