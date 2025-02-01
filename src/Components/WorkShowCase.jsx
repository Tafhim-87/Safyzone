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
    image: img1, // Replace with your image path
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
    <div className="full flex flex-col  bg-[#ffffff] items-center justify-center py-20 font-figtree">
      <div className="flex flex-col gap-20 container">
        {contentData.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col gap-[80px] md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 z-10">
              <Image
                src={item.image}
                alt={`Image ${item.id}`}
                width={668}
                height={400}
              />
            </div>

            {/* Text */}
            <div className="w-[582px] relative flex flex-col gap-[24px]">
              <div className="w-[581px] h-[300px] bg-[#FF8A00] mt-[100px] blur-[300px] absolute"></div>
              <div className=" flex w-[582px] flex-col gap-[24px] z-10">
                <div className="max-w-[266px] text-center bg-[#1DBF7314] px-3 py-5 container rounded-lg ">
                  <li className="text-[18px] font-Bricolage leading-[26px] text-[#1DBF73] font-bold">
                    Project Services
                  </li>
                </div>
                <div className="flex flex-col items-start">
                  <h2 className="text-[30px] font-Bricolage font-extrabold mb-4">
                    {item.title}
                  </h2>
                  <p className="text-[#555555] text-[18px] leading-[26px]">
                    {item.description}
                  </p>
                </div>
                <button
                  type="button"
                  className="group active:scale-105 max-w-[225px] flex items-center gap-4 text-[#1DBF73] text-[18px] font-Bricolage font-bold duration-200 hover:text-[#16141D]"
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
