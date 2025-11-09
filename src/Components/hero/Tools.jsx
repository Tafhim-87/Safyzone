import icon1 from "@/assets/images/Tools/icon-1.png";
import icon2 from "@/assets/images/Tools/icon-2.png";
import icon3 from "@/assets/images/Tools/html-1.png";
import icon4 from "@/assets/images/Tools/css-3.png";
import icon5 from "@/assets/images/Tools/javascript-1.png";
import icon6 from "@/assets/images/Tools/icon-5.png";
import icon7 from "@/assets/images/Tools/icon-6.png";
import icon8 from "@/assets/images/Tools/icon-7.png";
import icon9 from "@/assets/images/Tools/icon-8.png";
import icon10 from "@/assets/images/Tools/icon-9.png";
import Image from "next/image";

export const Tools = () => {
  const toolsList = [
    {
      id: 1,
      icon: icon1,
      title: "Figma",
    },
    {
      id: 2,
      icon: icon2,
      title: "Visual Studio Code",
    },
    {
      id: 3,
      icon: icon3,
      title: "HTML",
    },
    {
      id: 4,
      icon: icon4,
      title: "CSS",
    },
    {
      id: 5,
      icon: icon5,
      title: "JavaScript",
    },
    {
      id: 6,
      icon: icon6,
      title: "GitHub",
    },
    {
      id: 7,
      icon: icon7,
      title: "Next-Js",
    },
    {
      id: 8,
      icon: icon8,
      title: "Freepik",
    },
    {
      id: 9,
      icon: icon9,
      title: "ChatGPT",
    },
    {
      id: 10,
      icon: icon10,
      title: "AI Tools",
    },
  ];
  
  return (
    <section className="w-full flex items-center justify-center bg-[#FBF7FE] py-8 md:py-12 lg:py-20 relative overflow-hidden">
      {/* Shapes - Responsive */}
      <div className="absolute w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] blur-[100px] md:blur-[150px] lg:blur-[200px] right-0 top-0 rounded-full bg-[#7755FF3D]"></div>
      <div className="absolute w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem] blur-[100px] md:blur-[150px] lg:blur-[200px] left-0 top-0 rounded-full bg-[#7755FF3D]"></div>
      <div className="absolute w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[30rem] lg:h-[30rem] blur-[100px] md:blur-[150px] lg:blur-[200px] left-0 bottom-0 rounded-full bg-[#F296543D]"></div>
      <div className="absolute w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[30rem] lg:h-[30rem] blur-[100px] md:blur-[150px] lg:blur-[200px] right-0 bottom-0 rounded-full bg-[#F296543D]"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Responsive Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.2] sm:leading-[40px] md:leading-[45px] lg:leading-[50px] font-extrabold text-center font-Bricolage">
          The tools we use for work
        </h1>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap lg:grid-cols-5 xl:flex xl:flex-wrap xl:justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-8 md:mt-10">
          {toolsList.map((item) => (
            <div
              key={item.id}
              className="w-full aspect-square max-w-[180px] sm:max-w-[200px] lg:w-[240px] lg:h-[202px] bg-[#FFFFFF] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 mx-auto"
            >
              {/* Responsive Image */}
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[66px] lg:h-[66px] flex items-center justify-center">
                <Image 
                  src={item.icon} 
                  alt={item.title} 
                  width={66} 
                  height={66}
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Responsive Text */}
              <h2 className="text-sm sm:text-base md:text-lg lg:text-[20px] leading-tight sm:leading-[24px] md:leading-[26px] lg:leading-[30px] font-bold font-Bricolage text-center">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};