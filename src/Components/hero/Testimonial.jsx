"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Harrison Mathovu",
    title: "Founder (Yofarm Hub B2B)",
    image: "https://via.placeholder.com/50",
    feedback:
      "I had the pleasure of working with Siam on the UI/UX design for Yofarm Hub B2B, and I'm thrilled with the outcome. Siam truly understood the vision and worked closely with us to create an interface that is not only beautiful but incredibly user-friendly. He paid great attention to every detail, ensuring that even users with minimal tech experience could easily navigate the platform. Siam's ability to blend functionality with simplicity really made a difference in how the app feels. Throughout the project, Siam was always open to feedback and consistently offered thoughtful, creative solutions. I highly recommend Siam – His talent, professionalism, and dedication are truly exceptional.",
    farm: "ALI MATOVU founder yofarm hub b2b.",
  },
  {
    name: "John Doe",
    title: "CEO (Tech Innovations)",
    image: "https://via.placeholder.com/50",
    feedback:
      "I had the pleasure of working with Siam on the UI/UX design for Yofarm Hub B2B, and I'm thrilled with the outcome. Siam truly understood the vision and worked closely with us to create an interface that is not only beautiful but incredibly user-friendly. He paid great attention to every detail, ensuring that even users with minimal tech experience could easily navigate the platform. Siam's ability to blend functionality with simplicity really made a difference in how the app feels. Throughout the project, Siam was always open to feedback and consistently offered thoughtful, creative solutions. I highly recommend Siam – His talent, professionalism, and dedication are truly exceptional.",
    farm: "ALI MATOVU founder yofarm hub b2b.",
  },
  {
    name: "Jane Smith",
    title: "Product Manager (Startup X)",
    image: "https://via.placeholder.com/50",
    feedback:
      "I had the pleasure of working with Siam on the UI/UX design for Yofarm Hub B2B, and I'm thrilled with the outcome. Siam truly understood the vision and worked closely with us to create an interface that is not only beautiful but incredibly user-friendly. He paid great attention to every detail, ensuring that even users with minimal tech experience could easily navigate the platform. Siam's ability to blend functionality with simplicity really made a difference in how the app feels. Throughout the project, Siam was always open to feedback and consistently offered thoughtful, creative solutions. I highly recommend Siam – His talent, professionalism, and dedication are truly exceptional.",
    farm: "ALI MATOVU founder yofarm hub b2b.",
  },
];

const TestimonialSwipe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#FBF7FE] flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-[60px]">
        {/* Responsive Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.2] sm:leading-[40px] md:leading-[45px] lg:leading-[50px] font-extrabold text-center mb-2 sm:mb-3 md:mb-4">
          What our satisfied clients say about our services
        </h2>
        
        {/* Swiper Container */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full flex flex-col items-center justify-center"
          breakpoints={{
            // When window width is >= 640px
            640: {
              spaceBetween: 30,
            },
            // When window width is >= 768px
            768: {
              spaceBetween: 40,
            },
            // When window width is >= 1024px
            1024: {
              spaceBetween: 50,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide 
              key={index} 
              className="bg-[#ffffff] p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
                {/* Feedback Text */}
                <p className="text-[#555555] text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
                  {testimonial.feedback}
                </p>
                
                {/* Farm Text */}
                <p className="text-[#555555] text-base sm:text-lg md:text-xl font-medium italic">
                  {testimonial.farm}
                </p>
              </div>
              
              {/* Client Info */}
              <div className="flex items-center mt-4 sm:mt-5 md:mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                />
                <div>
                  <p className="font-Bricolage text-lg sm:text-xl md:text-2xl font-extrabold">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Pagination - Responsive */}
        <div className="custom-pagination flex items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-4">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? "w-4 h-4 sm:w-5 sm:h-5 bg-[#7755FF] scale-110 font-bold"
                  : "w-3 h-3 sm:w-4 sm:h-4 bg-[#7755FF66]"
              }`}
              onClick={() =>
                document.querySelector(".swiper")?.swiper.slideTo(index)
              }
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSwipe;