import Business from "@/Components/Business";
import ChooseUs from "@/Components/ChooseUs";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import TestimonialSwipe from "@/Components/Testimonial";
import { Tools } from "@/Components/Tools";
import WorkShowcase from "@/Components/WorkShowCase";
import React from "react";

const page = () => {
  return (
    <div className="font-figtree">
      <Navbar />
      <HeroSection />
      <WorkShowcase />
      <Business />
      <ChooseUs />
      <Tools />
      <TestimonialSwipe />
    </div>
  );
};

export default page;
