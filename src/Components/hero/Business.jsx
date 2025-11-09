import React from "react";

const Business = () => {
  const cards = [
    {
      id: 1,
      title: "UI/UX Design",
      desc: "We are skilled in UI/UX design and web development. We do everything from user research, wireframing, simple and attractive UI design to development. Using Figma and modern technology, we complete each task easily and beautifully.",
      tags: [
        "User Researching",
        "User Journey Mapping",
        "Wireframing",
        "User Interface Design",
        "Visual Design",
        "Responsive Design",
        "Prototyping",
        "Usability Testing",
      ],
    },
    {
      id: 2,
      title: "Web Design",
      desc: "Web design services create attractive and functional websites, prioritizing layout, visuals, and usability. UI/UX design combines appealing aesthetics with seamless user experiences.",
      tags: [
        "Layout Design",
        "Typography & Color Selection",
        "Responsive Design",
        "User Interface Design",
        "Image Optimization",
        "Prototyping",
        "Usability Testing",
      ],
    },
    {
      id: 3,
      title: "Web Development",
      desc: "Web development involves creating websites and web applications using coding and programming. It includes front-end development for design and back-end development for server functionality. Together, they ensure a seamless user experience.",
      tags: [
        "Front-End Development",
        "Back-End Development",
        "API Development",
        "Database Management",
        "Server Configuration",
        "Performance Optimization",
        "Testing and Debugging",
        "Version Control Systems",
      ],
    },
    {
      id: 4,
      title: "2D Animation GSAP",
      desc: "2D Animation GSAP services create smooth animations for websites and digital media. Using the GSAP framework, they enhance user experience with seamless transitions and interactive effects.",
      tags: [
        "Storyboarding",
        "Character Design",
        "Environment Design",
        "Visual Effects",
        "Animation Production",
        "Timing and Spacing",
        "Sound Design",
        "Editing and Finalizing",
        "Digital Painting",
        "Asset Management",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#FBF7FE] py-16 md:py-20 lg:py-28 font-figtree overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] leading-tight font-extrabold font-Bricolage text-[#16141D]">
            The services we provide to improve your business
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            We are skilled in UI/UX design and web development. We do everything
            from user research, wireframing, simple and attractive UI design to
            development. Using Figma and modern technology, we complete each
            task easily and beautifully.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {cards.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-transparent hover:border-[#5271FF]/20"
            >
              <div className="flex flex-col h-full">
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold font-Bricolage text-[#16141D] mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow mb-6">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-[#5271FF0F] text-[#5271FF] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 group-hover:bg-[#5271FF] group-hover:text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;