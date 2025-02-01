import React from "react";

const Business = () => {
  const card = [
    {
      id: 1,
      title: "UI/UX Design",
      desc: "We are skilled in UI/UX design and web development. We do everything from user research, wireframing, simple and attractive UI design to development. Using Figma and modern technology, we complete each task easily and beautifully.",
      tags: [
        "User Researching ",
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
      title: "2D Animation Gsap",
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
    <section className="bg-[#FBF7FE] w-full flex justify-center items-center font-figtree py-10">
      <div className="container flex flex-col gap-[60px] items-center">
        <div className="w-[1080px] text-center flex flex-col gap-[16px]">
          <h1 className="text-[40px] leading-[50px] font-extrabold font-Bricolage">
            The services we provide to improve your business
          </h1>
          <p className="text-[20px] leading-[30px]">
            We are skilled in UI/UX design and web development. We do everything
            from user research, wireframing, simple and attractive UI design to
            development. Using Figma and modern technology, we complete each
            task easily and beautifully.
          </p>
        </div>
        <div className="container flex flex-wrap items-center justify-center gap-[24px]">
          {/* card */}
          {card.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] w-[638px] h-[452px] rounded-3xl p-6 flex flex-col gap-[24px]"
            >
              <h1 className="font-Bricolage text-[30px] leading-[40px] font-extrabold">
                {item.title}
              </h1>
              <p className="text-[16px] leading-[26px]">{item.desc}</p>
              <div className="flex gap-3 flex-wrap">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#5271FF0F] py-2 px-3 rounded-md text-[16px] leading-[26px] text-[#5271FF] font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Business;
