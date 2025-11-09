"use client";

import React from "react";
import Image from "next/image";
import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img2.png";
import img3 from "@/assets/images/img3.png";
import img4 from "@/assets/images/img4.png";
import img5 from "@/assets/images/img5.png";
import ArrowIcn from "@/assets/svgs/ArrowIcn";

const contentData = [
  {
    id: 1,
    title: "Transforming Ideas into Stunning Interfaces.",
    description:
      "Crafting user-centric designs that not only captivate and inspire but also deliver seamless, intuitive experiences tailored to meet your unique goals and elevate your brand to the next level.",
    image: img1,
  },
  {
    id: 2,
    title: "Creative Web Design Solutions.",
    description:
      "Creative web design solutions crafted with precision for your unique brand.",
    image: img2,
  },
  {
    id: 3,
    title: "Bringing Ideas to Life.",
    description:
      "Transforming online experiences into engaging designs that captivate users.",
    image: img3,
  },
  {
    id: 4,
    title: "Securing Futures with Innovation.",
    description:
      "Innovative and intuitive solutions that ensure a seamless user experience.",
    image: img4,
  },
  {
    id: 5,
    title: "Securing Futures with Innovation.",
    description:
      "Innovative and intuitive solutions that ensure a seamless user experience.",
    image: img5,
  },
];

const WorkShowcase = () => {
  return (
    <div className="w-full flex flex-col bg-[#ffffff] items-center justify-center py-10 sm:py-14 md:py-16 lg:py-20 font-figtree">
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 container px-4 sm:px-6 lg:px-8">
        {contentData.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-[80px] ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 z-10">
              <Image
                src={item.image}
                alt={`Image ${item.id}`}
                width={668}
                height={400}
                className="w-full h-auto rounded-xl shadow-sm"
              />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-[582px] relative flex flex-col gap-6 sm:gap-8">
              {/* Blur Background - Responsive */}
              <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:w-[581px] lg:h-[300px] bg-[#FF8A00] mt-8 sm:mt-12 md:mt-16 lg:mt-[100px] blur-[150px] sm:blur-[200px] lg:blur-[300px] absolute opacity-60"></div>
              
              <div className="flex w-full flex-col gap-6 sm:gap-8 z-10">
                {/* Project Services Badge */}
                <div className="max-w-[266px] text-center bg-[#1DBF7314] px-3 py-3 sm:py-4 md:py-5 rounded-lg mx-auto lg:mx-0">
                  <li className="text-sm sm:text-base md:text-[18px] font-Bricolage leading-[1.4] sm:leading-[26px] text-[#1DBF73] font-bold list-none">
                    Project Services
                  </li>
                </div>

                {/* Title and Description */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-Bricolage font-extrabold leading-tight sm:leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-[#555555] text-base sm:text-lg md:text-[18px] leading-relaxed sm:leading-loose max-w-2xl">
                    {item.description}
                  </p>
                </div>

                {/* Button */}
                <button
                  type="button"
                  className="group active:scale-105 max-w-[225px] flex items-center gap-3 sm:gap-4 text-[#1DBF73] text-base sm:text-lg md:text-[18px] font-Bricolage font-bold duration-200 hover:text-[#16141D] mx-auto lg:mx-0"
                >
                  <span className="duration-200">Explore our Work</span>
                  <ArrowIcn color="#1DBF73" hoverColor="#16141D" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkShowcase;