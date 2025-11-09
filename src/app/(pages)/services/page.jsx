import React from "react";
import { ArrowRight } from "lucide-react";

const OurServices = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Complete user experience design from research to prototyping",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design System",
        "Interactive Prototypes",
        "Usability Testing"
      ],
      icon: "🎨",
      color: "#7755FF"
    },
    {
      title: "Web Development",
      description: "Full-stack development with modern technologies",
      features: [
        "Frontend Development",
        "Backend Development",
        "Database Design",
        "API Integration",
        "Performance Optimization"
      ],
      icon: "💻",
      color: "#1DBF73"
    },
    {
      title: "2D Animation",
      description: "Engaging animations using GSAP and modern tools",
      features: [
        "Interactive Animations",
        "Micro-interactions",
        "Scroll-triggered Effects",
        "Loading Animations",
        "Motion Graphics"
      ],
      icon: "✨",
      color: "#FF8A00"
    },
    {
      title: "Web Design",
      description: "Beautiful, responsive website designs",
      features: [
        "Responsive Design",
        "Typography & Color Systems",
        "Component Libraries",
        "Design Systems",
        "Brand Integration"
      ],
      icon: "🖌️",
      color: "#5271FF"
    },
    {
      title: "Consultation",
      description: "Strategic guidance for your digital projects",
      features: [
        "Technical Consultation",
        "Project Planning",
        "Technology Stack Advice",
        "Design System Setup",
        "Team Training"
      ],
      icon: "💡",
      color: "#39C683"
    },
    {
      title: "Maintenance",
      description: "Ongoing support and updates for your projects",
      features: [
        "Regular Updates",
        "Bug Fixes",
        "Performance Monitoring",
        "Security Updates",
        "Content Updates"
      ],
      icon: "🔧",
      color: "#F29654"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We learn about your business, goals, and users"
    },
    {
      step: "02",
      title: "Strategy",
      description: "We plan the approach and create a roadmap"
    },
    {
      step: "03",
      title: "Design",
      description: "We create wireframes, prototypes, and visual designs"
    },
    {
      step: "04",
      title: "Development",
      description: "We build your solution with clean, efficient code"
    },
    {
      step: "05",
      title: "Testing",
      description: "We ensure everything works perfectly across devices"
    },
    {
      step: "06",
      title: "Launch",
      description: "We deploy and provide ongoing support"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF7FE] font-figtree">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-[#7755FF] to-[#1DBF73] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-Bricolage mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Comprehensive digital solutions to bring your ideas to life and 
              drive your business forward.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-Bricolage text-center mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From initial concept to final implementation, we provide end-to-end 
            services tailored to your needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#FBF7FE] p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#7755FF]"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold font-Bricolage mb-3" style={{ color: service.color }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight size={16} className="mr-2" style={{ color: service.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 bg-[#16141D] text-white rounded-full font-semibold hover:bg-[#7755FF] transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-[#FBF7FE]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-Bricolage text-center mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A structured approach that ensures quality, efficiency, and 
            outstanding results every time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center">
                <div className="w-16 h-16 bg-[#7755FF] text-white rounded-full flex items-center justify-center text-2xl font-bold font-Bricolage mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold font-Bricolage mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;