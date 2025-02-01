import Image from "next/image";
import Shape1 from "@/assets/svgs/Shape1";
import Shape2 from "@/assets/svgs/Shape2";
import StarRating from "@/assets/svgs/StarRating";
import img from "@/assets/images/Hello.png";

const HeroSection = () => {
  return (
    <div className="relative font-figtree w-full flex justify-center items-center bg-[#FBF7FE] overflow-hidden">
      {/* Shapes */}
      <div className="absolute w-[20rem] h-[20rem] blur-[200px] right-0 top-0 rounded-full bg-[#7755FF3D]"></div>
      <div className="absolute w-[20rem] h-[20rem] blur-[200px] left-0 top-0 rounded-full bg-[#7755FF3D]"></div>
      <div className="absolute w-[30rem] h-[30rem] blur-[200px] left-0 bottom-0 rounded-full bg-[#F296543D]"></div>
      <div className="absolute w-[30rem] h-[30rem] blur-[200px] right-0 bottom-0 rounded-full bg-[#F296543D]"></div>
      <div className="absolute left-0 mt-[20%] inset-0">
        <Shape1 />
      </div>
      <div className="absolute right-0 mt-[-30%]">
        <Shape2 />
      </div>
      {/* Shapes */}
      <div className="container  flex flex-col justify-center items-center z-20 gap-[60px] py-[80px]">
        <div className="relative flex flex-col gap-[40px]">
          <Image
            src={img}
            width={132}
            height={100}
            alt="hello"
            className="absolute right-10 top-0"
          />
          <h1 className="text-[62px] leading-[72px] mt-[50px] font-extrabold text-center font-Bricolage">
            Need UI/UX or web design & development? <br />
            <span className="text-[#39C683]">
              Contact us now to create something amazing!
            </span>
          </h1>
          <h4 className="text-[24px] font-medium leading-10 text-center container">
            Expert in UI/UX design and web development, We create stunning
            websites, landing pages, and responsive designs with a mastery of
            Figma—tailored to elevate your business to the next level. Let’s
            build something extraordinary together!
          </h4>
        </div>
        <div className="h-[58px]">
          <h4 className="text-[20px] font-Bricolage leading-[26px] text-[#1DBF73] font-bold">
            Happy Clients 24+
          </h4>
          <StarRating />
        </div>
        <div className="flex gap-[14px] text-[18px] leading-[24px] font-bold ">
          <button
            type="button"
            className="py-4 px-[34px] bg-[#16141D] rounded-full text-[#FFFFFF] text-center active:scale-105"
          >
            {" "}
            Schedule a Meeting
          </button>
          <button
            type="button"
            className="py-4 px-[34px] bg-[#1DBF73] rounded-full text-[#FFFFFF] text-center active:scale-105"
          >
            {" "}
            Hire Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
