import Image from "next/image";
import Shape1 from "@/assets/svgs/Shape1";
import Shape2 from "@/assets/svgs/Shape2";
import StarRating from "@/assets/svgs/StarRating";
import img from "@/assets/images/Hello.png";

const HeroSection = () => {
  return (
    <div className="relative font-figtree w-full flex justify-center items-center bg-[#FBF7FE] overflow-hidden">
      {/* Shapes - Responsive */}
      <div className="absolute w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] lg:w-[20rem] lg:h-[20rem] blur-[100px] sm:blur-[150px] lg:blur-[200px] right-0 top-0 rounded-full bg-[#7755FF3D]"></div>
      <div className="absolute w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] lg:w-[20rem] lg:h-[20rem] blur-[100px] sm:blur-[150px] lg:blur-[200px] left-0 top-0 rounded-full bg-[#7755FF3D]"></div>
      <div className="absolute w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] lg:w-[30rem] lg:h-[30rem] blur-[100px] sm:blur-[150px] lg:blur-[200px] left-0 bottom-0 rounded-full bg-[#F296543D]"></div>
      <div className="absolute w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] lg:w-[30rem] lg:h-[30rem] blur-[100px] sm:blur-[150px] lg:blur-[200px] right-0 bottom-0 rounded-full bg-[#F296543D]"></div>
      
      {/* SVG Shapes - Responsive */}
      <div className="absolute left-[-20%] sm:left-[-5%] md:left-[-6%] lg:left-0 mt-[20%] sm:mt-[35%] lg:mt-[20%] inset-0 scale-75 sm:scale-90 lg:scale-100">
        <Shape1 />
      </div>
      <div className="absolute right-[-10%] lg:right-0 mt-[-20%] sm:mt-[-25%] lg:mt-[-30%] scale-75 sm:scale-90 lg:scale-100">
        <Shape2 />
      </div>
      
      {/* Main Content */}
      <div className="container flex flex-col justify-center items-center z-20 gap-8 sm:gap-12 md:gap-16 lg:gap-[60px] py-10 sm:py-14 md:py-16 lg:py-[80px] px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[40px] w-full">
          {/* Hello Image - Responsive */}
          <Image
            src={img}
            alt="hello"
            className="absolute right-2 sm:right-4 md:right-6 lg:right-10 top-0 w-16 h-12 sm:w-20 sm:h-16 md:w-24 md:h-20 lg:w-[132px] lg:h-[100px]"
          />
          
          {/* Main Heading - Responsive */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[62px] leading-[1.2] sm:leading-[1.3] md:leading-[1.4] lg:leading-[72px] mt-8 sm:mt-10 md:mt-12 lg:mt-[50px] font-extrabold text-center font-Bricolage">
            Need UI/UX or web design & development? <br />
            <span className="text-[#39C683] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[62px]">
              Contact us now to create something amazing!
            </span>
          </h1>
          
          {/* Subheading - Responsive */}
          <h4 className="text-base sm:text-lg md:text-xl lg:text-[24px] font-medium leading-relaxed sm:leading-loose lg:leading-10 text-center max-w-4xl mx-auto">
            Expert in UI/UX design and web development, We create stunning
            websites, landing pages, and responsive designs with a mastery of
            Figma—tailored to elevate your business to the next level. Let&apos;s
            build something extraordinary together!
          </h4>
        </div>
        
        {/* Happy Clients Section - Responsive */}
        <div className="h-auto sm:h-[58px] flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <h4 className="text-base sm:text-lg lg:text-[20px] font-Bricolage leading-relaxed sm:leading-[26px] text-[#1DBF73] font-bold text-center sm:text-left">
            Happy Clients 24+
          </h4>
          <div className="scale-75 sm:scale-90 lg:scale-100">
            <StarRating />
          </div>
        </div>
        
        {/* Buttons - Responsive */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-[14px] w-full sm:w-auto">
          <button
            type="button"
            className="py-3 px-6 sm:py-4 sm:px-8 lg:px-[34px] bg-[#16141D] rounded-full text-[#FFFFFF] text-center active:scale-105 text-sm sm:text-base lg:text-[18px] leading-tight sm:leading-[24px] font-bold w-full sm:w-auto"
          >
            Schedule a Meeting
          </button>
          <button
            type="button"
            className="py-3 px-6 sm:py-4 sm:px-8 lg:px-[34px] bg-[#1DBF73] rounded-full text-[#FFFFFF] text-center active:scale-105 text-sm sm:text-base lg:text-[18px] leading-tight sm:leading-[24px] font-bold w-full sm:w-auto"
          >
            Hire Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;