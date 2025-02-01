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
      "I had the pleasure of working with Siam on the UI/UX design for Yofarm Hub B2B, and I’m thrilled with the outcome. Siam truly understood the vision and worked closely with us to create an interface that is not only beautiful but incredibly user-friendly. He paid great attention to every detail, ensuring that even users with minimal tech experience could easily navigate the platform. Siam’s ability to blend functionality with simplicity really made a difference in how the app feels. Throughout the project, Siam was always open to feedback and consistently offered thoughtful, creative solutions. I highly recommend Siam – His talent, professionalism, and dedication are truly exceptional.",
    farm: "ALI MATOVU founder yofarm hub b2b.",
  },
  {
    name: "John Doe",
    title: "CEO (Tech Innovations)",
    image: "https://via.placeholder.com/50",
    feedback:
      "I had the pleasure of working with Siam on the UI/UX design for Yofarm Hub B2B, and I’m thrilled with the outcome. Siam truly understood the vision and worked closely with us to create an interface that is not only beautiful but incredibly user-friendly. He paid great attention to every detail, ensuring that even users with minimal tech experience could easily navigate the platform. Siam’s ability to blend functionality with simplicity really made a difference in how the app feels. Throughout the project, Siam was always open to feedback and consistently offered thoughtful, creative solutions. I highly recommend Siam – His talent, professionalism, and dedication are truly exceptional.",
    farm: "ALI MATOVU founder yofarm hub b2b.",
  },
  {
    name: "Jane Smith",
    title: "Product Manager (Startup X)",
    image: "https://via.placeholder.com/50",
    feedback:
      "I had the pleasure of working with Siam on the UI/UX design for Yofarm Hub B2B, and I’m thrilled with the outcome. Siam truly understood the vision and worked closely with us to create an interface that is not only beautiful but incredibly user-friendly. He paid great attention to every detail, ensuring that even users with minimal tech experience could easily navigate the platform. Siam’s ability to blend functionality with simplicity really made a difference in how the app feels. Throughout the project, Siam was always open to feedback and consistently offered thoughtful, creative solutions. I highly recommend Siam – His talent, professionalism, and dedication are truly exceptional.",
    farm: "ALI MATOVU founder yofarm hub b2b.",
  },
];
const TestimonialSwipe = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#FBF7FE] flex flex-col items-center justify-center py-20">
      <div className="container p-6 flex flex-col gap-[60px]">
        <h2 className="text-[40px] leading-[50px] font-extrabold text-center mb-4">
          What our satisfied clients say about our services
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full flex flex-col items-center justify-center"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="bg-[#ffffff] p-10 rounded-3xl">
              <div className="flex flex-col gap-6">
                <p className="text-[#555555] text-xl">{testimonial.feedback}</p>
                <p className="text-[#555555] text-xl">{testimonial.farm}</p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-Bricolage text-2xl font-extrabold">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Pagination with Bold & Increased Size for Active */}
        <div className="custom-pagination flex items-center justify-center gap-3 mt-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`cursor-pointer transition-all duration-300 rounded-full ${
                activeIndex === index
                  ? "w-5 h-5 bg-[#7755FF] scale-110 font-bold"
                  : "w-4 h-4 bg-[#7755FF66]"
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
