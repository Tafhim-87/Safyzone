import React from "react";
import Image from "next/image";
import { Calendar, Users, Target, TrendingUp } from "lucide-react";

const TeamCaseStudy = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      client: "Fashion Retail Brand",
      duration: "3 months",
      teamSize: "5 members",
      challenge: "Low conversion rates and poor mobile experience",
      solution: "Complete redesign focusing on mobile-first approach and improved user journey",
      results: [
        { metric: "45%", description: "Increase in mobile conversions" },
        { metric: "60%", description: "Faster page load times" },
        { metric: "30%", description: "Higher user engagement" }
      ],
      image: "/case-studies/ecommerce.jpg",
      category: "UI/UX Design"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      client: "Medical Institution",
      duration: "6 months",
      teamSize: "8 members",
      challenge: "Inefficient patient management and outdated interface",
      solution: "Custom healthcare management platform with intuitive dashboard",
      results: [
        { metric: "50%", description: "Reduction in administrative tasks" },
        { metric: "40%", description: "Faster patient registration" },
        { metric: "95%", description: "User satisfaction rate" }
      ],
      image: "/case-studies/healthcare.jpg",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Interactive Educational Platform",
      client: "Online Learning Startup",
      duration: "4 months",
      teamSize: "6 members",
      challenge: "Low student engagement and high drop-off rates",
      solution: "Gamified learning experience with interactive animations",
      results: [
        { metric: "70%", description: "Increase in course completion" },
        { metric: "55%", description: "Higher student retention" },
        { metric: "80%", description: "More daily active users" }
      ],
      image: "/case-studies/education.jpg",
      category: "Animation"
    }
  ];

  const processSteps = [
    {
      icon: <Users size={24} />,
      title: "Team Formation",
      description: "Assembling the right mix of designers, developers, and specialists"
    },
    {
      icon: <Target size={24} />,
      title: "Goal Setting",
      description: "Defining clear objectives and success metrics"
    },
    {
      icon: <Calendar size={24} />,
      title: "Planning & Strategy",
      description: "Creating detailed project roadmap and timelines"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Execution & Delivery",
      description: "Collaborative development with regular client updates"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF7FE] font-figtree">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-[#7755FF] to-[#1DBF73] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-Bricolage mb-6">
              Team Case Studies
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Discover how our collaborative approach and diverse expertise 
              deliver exceptional results for our clients.
            </p>
          </div>
        </div>
      </div>

      {/* Team Process */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-Bricolage text-center mb-4">
            Our Collaborative Process
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            How our cross-functional teams work together to deliver outstanding results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#7755FF] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
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

      {/* Case Studies */}
      <div className="py-20 bg-[#FBF7FE]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-Bricolage text-center mb-12">
            Featured Case Studies
          </h2>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex-row`}
              >
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#5271FF0F] text-[#5271FF] px-3 py-1 rounded-full text-sm font-semibold">
                      {study.category}
                    </span>
                    <span className="text-sm text-gray-500">{study.client}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold font-Bricolage mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={16} />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">The Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">Our Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-[#1DBF73] mb-1">
                          {result.metric}
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2 bg-gradient-to-br from-[#7755FF] to-[#1DBF73] flex items-center justify-center min-h-[400px]">
                  <div className="text-white text-center p-8">
                    <div className="text-6xl mb-4">🎯</div>
                    <h4 className="text-2xl font-bold mb-4">Project Success</h4>
                    <p className="opacity-90">
                      This case study demonstrates our team&apos;s ability to 
                      collaborate effectively and deliver measurable results.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Collaboration CTA */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-Bricolage mb-6">
            Ready to Work With Our Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our collaborative team bring your vision to life with our 
            comprehensive design and development expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#7755FF] text-white rounded-full font-semibold hover:bg-[#1DBF73] transition-colors">
              Start a Project
            </button>
            <button className="px-8 py-4 border-2 border-[#7755FF] text-[#7755FF] rounded-full font-semibold hover:bg-[#7755FF] hover:text-white transition-colors">
              Meet Our Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCaseStudy;