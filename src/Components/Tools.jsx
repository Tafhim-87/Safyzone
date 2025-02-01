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
    <section className="w-full flex items-center justify-center bg-[#FBF7FE] py-20 relative">
      {/* Shapes */}
      <div className="absolute w-[20rem] h-[20rem] blur-[200px] right-0 top-0 rounded-full bg-[#7755FF3D]"></div>
      <div className="absolute w-[20rem] h-[20rem] blur-[200px] left-0 top-0 rounded-full bg-[#7755FF3D]"></div>
      <div className="absolute w-[30rem] h-[30rem] blur-[200px] left-0 bottom-0 rounded-full bg-[#F296543D]"></div>
      <div className="absolute w-[30rem] h-[30rem] blur-[200px] right-0 bottom-0 rounded-full bg-[#F296543D]"></div>
      <div className="container">
        <h1 className="text-[40px] leading-[50px] font-extrabold text-center font-Bricolage">
          The tools we use for work
        </h1>
        <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
          {toolsList.map((item) => (
            <div
              key={item.id}
              className="w-[240px] h-[202px] bg-[#FFFFFF] rounded-2xl p-6 flex flex-col gap-6 items-center justify-center"
            >
              <Image src={item.icon} alt="icon1" width={66} height={100} />
              <h2 className="text-[20px] leading-[30px] font-bold font-Bricolage">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
