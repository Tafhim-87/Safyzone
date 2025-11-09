"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const OurProject = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with seamless user experience and intuitive design.",
      category: "web-development",
      image: "/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Health & Fitness App",
      description: "Mobile-first fitness application with workout tracking and nutrition planning.",
      category: "ui-ux",
      image: "/projects/fitness.jpg",
      technologies: ["Figma", "React Native", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Creative portfolio for a digital agency with stunning animations.",
      category: "web-design",
      image: "/projects/portfolio.jpg",
      technologies: ["Next.js", "GSAP", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Banking Dashboard",
      description: "Financial dashboard with data visualization and analytics.",
      category: "ui-ux",
      image: "/projects/dashboard.jpg",
      technologies: ["Figma", "React", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Travel Booking Platform",
      description: "Complete travel booking system with hotel and flight integrations.",
      category: "web-development",
      image: "/projects/travel.jpg",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Animation Showcase",
      description: "Interactive website showcasing GSAP animations and micro-interactions.",
      category: "animation",
      image: "/projects/animation.jpg",
      technologies: ["GSAP", "JavaScript", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "ui-ux", label: "UI/UX Design" },
    { key: "web-design", label: "Web Design" },
    { key: "web-development", label: "Web Development" },
    { key: "animation", label: "Animation" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#FBF7FE] font-figtree">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-[#7755FF] to-[#1DBF73] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-Bricolage mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Explore our portfolio of successful projects that showcase our 
              expertise in design and development.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="py-12 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeFilter === filter.key
                    ? "bg-[#7755FF] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20 bg-[#FBF7FE]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-[#7755FF] to-[#1DBF73] flex items-center justify-center text-white text-4xl">
                    🎯
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-[#FF8A00] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-4">
                      <button className="bg-white text-gray-800 p-3 rounded-full hover:bg-[#7755FF] hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </button>
                      <button className="bg-white text-gray-800 p-3 rounded-full hover:bg-[#7755FF] hover:text-white transition-colors">
                        <Github size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold font-Bricolage mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-[#5271FF0F] text-[#5271FF] px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 capitalize">
                      {project.category.replace('-', ' ')}
                    </span>
                    <button className="text-[#7755FF] hover:text-[#1DBF73] font-semibold transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-[#7755FF] to-[#1DBF73] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-Bricolage mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to create something amazing that drives 
            results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-[#7755FF] rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Meeting
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#7755FF] transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;