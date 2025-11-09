import React from "react";
import Direction from "@/assets/images/Direction"; // assuming it's an SVG component

const ChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: "Tailored Solutions",
      description:
        "We understand that no two businesses are the same, which is why we take the time to deeply understand your unique goals, brand identity, and target audience. Our approach is to design and develop solutions that reflect your vision while addressing your specific challenges.",
      bg: "#E32851",
    },
    {
      id: 2,
      title: "Expert Team",
      description:
        "Our team consists of highly skilled professionals with extensive experience in UI/UX design, development, and digital strategy. We stay ahead of industry trends and continuously update our skills to provide you with the most innovative and effective solutions.",
      bg: "#5271FF",
    },
    {
      id: 3,
      title: "User-Centric Approach",
      description:
        "Your users are at the heart of everything we do. We prioritize creating seamless, intuitive, and engaging experiences that address their needs, solve their problems, and exceed their expectations through in-depth research and testing.",
      bg: "#FF932C",
    },
    {
      id: 4,
      title: "End-to-End Support",
      description:
        "We don’t just deliver a product — we guide you through every stage of the project, from the initial brainstorming session to the final launch and beyond. You’re involved in every key decision.",
      bg: "#1DBF73",
    },
    {
      id: 5,
      title: "Timely Delivery",
      description:
        "We understand the importance of meeting deadlines in today’s fast-paced business environment. That’s why we’re committed to delivering high-quality results on time, every time — no excuses.",
      bg: "#7755FF",
    },
    {
      id: 6,
      title: "Client Satisfaction",
      description:
        "Your success is our priority. We measure our achievements by the satisfaction of our clients, which is why we go above and beyond to exceed your expectations and build lasting partnerships.",
      bg: "#F24E1E",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#FBF7FE] py-16 md:py-20 lg:py-28 font-figtree overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] leading-tight font-extrabold font-Bricolage text-[#16141D]">
            Why Choose Us
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#555555] leading-relaxed">
            At Simply Design, we are dedicated to turning your digital vision
            into reality. Let&apos;s work together to create seamless, impactful
            experiences that transform your ideas into reality, prioritizing
            your satisfaction at every stage of the process.
          </p>
        </div>

        {/* Cards Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {reasons.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl p-8 lg:p-10 text-white overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              style={{ backgroundColor: item.bg }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Title with Icon */}
                <h3 className="flex items-center gap-4 text-2xl sm:text-3xl font-extrabold font-Bricolage mb-4">
                  <Direction className="w-8 h-8 sm:w-10 sm:h-10" />
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Optional: Add a small arrow or indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                    Learn More
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;