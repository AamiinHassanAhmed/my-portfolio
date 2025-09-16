"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "../../../components/ui/button"

const cn = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.category === activeFilter
  );

  return (
    <section id="PORTFOLIO"  className="container mx-auto px-4 py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-blue-500 font-medium">PORTFOLIO</span>
        <h2 className="text-3xl md:text-4xl font-bold">Some Of My Recent Works</h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4">
        {filters.map((filter) => (
          <Button
            key={filter.value}
            variant="ghost"
            className={cn(
              "text-gray-600 hover:text-blue-500",
              activeFilter === filter.value && "text-blue-500 bg-blue-50"
            )}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg bg-gray-100">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="text-blue-400 text-sm">{project.category}</span>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <Button size="icon" variant="ghost" className="text-white hover:text-blue-400">
                    <Plus className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const filters = [
    { label: "All", value: "all" },
    { label: "Graphic Design", value: "Graphic Design" },
    { label: "Photography", value: "Photography" },
    { label: "Branding", value: "Branding" },
  ];
  
  const projects = [
    {
      title: "Creative Logo Design",
      category: "Graphic Design",
      image: "/graphic1.jpg", // Ensure the image exists
    },
    {
        title: "Creative Logo Design",
        category: "Graphic Design",
        image: "/graphic1.jpg", // Ensure the image exists
      },
      {
        title: "Creative Logo Design",
        category: "Graphic Design",
        image: "/graphic1.jpg", // Ensure the image exists
      },
    {
      title: "Portrait Photography",
      category: "Photography",
      image: "/5.jpg",
    },
    {
      title: "Social Media Branding",
      category: "Branding",
      image: "/4.jpg",
    },
    {
      title: "Nature Photography",
      category: "Photography",
      image: "/graphic2.jpg",
    },
    {
        title: "Nature Photography",
        category: "Photography",
        image: "/graphic3.jpg",
      },
  ];
  