import React from "react";
import Image from "next/image";
import teamImage from "@/assets/images/img1.png";

const AboutUs = () => {
  const teamStats = [
    { number: "50+", label: "Projects Completed" },
    { number: "24+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Team Members" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of trends and leverage cutting-edge technologies to deliver forward-thinking solutions."
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients, ensuring transparency and partnership throughout every project."
    },
    {
      title: "Excellence",
      description: "We're committed to delivering exceptional quality in every detail, from design to development."
    },
    {
      title: "User-Centric",
      description: "Everything we create is designed with the end-user in mind, ensuring intuitive and engaging experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FBF7FE] font-figtree">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-[#7755FF] to-[#1DBF73] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-Bricolage mb-6">
              About Our Studio
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              We are a passionate team of designers and developers dedicated to 
              creating digital experiences that make a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-Bricolage mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to bridge the gap between design and technology, 
                our studio has been transforming ideas into exceptional digital 
                experiences since day one.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that great design is not just about aesthetics—it&apos;s about 
                solving problems, creating meaningful connections, and driving results 
                for your business.
              </p>
              <p className="text-lg text-gray-600">
                Our team brings together diverse expertise in UI/UX design, web 
                development, and digital strategy to deliver comprehensive solutions 
                that exceed expectations.
              </p>
            </div>
            <div className="relative">
              <Image
                src={teamImage}
                alt="Our Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-[#FBF7FE]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1DBF73] font-Bricolage mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-Bricolage text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-[#FBF7FE] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold font-Bricolage mb-4 text-[#7755FF]">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;