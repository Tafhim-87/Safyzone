"use client"; // Ensure this is at the top for Next.js (App Router)

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Business from "@/Components/Business";
import ChooseUs from "@/Components/ChooseUs";
import HeroSection from "@/Components/HeroSection";
import TestimonialSwipe from "@/Components/Testimonial";
import { Tools } from "@/Components/Tools";
import WorkShowcase from "@/Components/WorkShowCase";

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Smoothness duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div className="font-figtree">
      <HeroSection />
      <WorkShowcase />
      <Business />
      <ChooseUs />
      <Tools />
      <TestimonialSwipe />
    </div>
  );
};

export default Page;
