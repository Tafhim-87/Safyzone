import Direction from "@/assets/images/Direction";
import React from "react";

const ChooseUs = () => {
  const card = [
    {
      id: 1,
      title: "Tailored Solutions",
      description:
        "We understand that no two businesses are the same, which is why we take the time to deeply understand your unique goals, brand identity, and target audience. Our approach is to design and develop solutions that reflect your vision while addressing your specific challenges. Whether it's creating a user-friendly interface or developing a fully customized website, we ensure that every detail aligns with your business objectives, helping you stand out in a competitive market and drive long-term success.",
      bg: "#E32851",
    },
    {
      id: 2,
      title: "Expert Team",
      description:
        "Our team consists of highly skilled professionals with extensive experience in UI/UX design, development, and digital strategy. We stay ahead of industry trends and continuously update our skills to provide you with the most innovative and effective solutions. With a deep understanding of design principles, user behavior, and cutting-edge technologies, we not only bring creativity to the table but also deliver functional, scalable, and visually stunning designs that elevate your business to the next level.",
      bg: "#5271FF",
    },
    {
      id: 3,
      title: "User-Centric Approach",
      description:
        "Your users are at the heart of everything we do. We prioritize creating seamless, intuitive, and engaging experiences that address their needs, solve their problems, and exceed their expectations. By conducting in-depth research and usability testing, we ensure that every design choice contributes to an effortless and enjoyable user journey. Our user-centric approach doesn’t just enhance satisfaction — it builds trust, fosters loyalty, and drives conversions for your business.",
      bg: "#FF932C",
    },
    {
      id: 4,
      title: "End-to-End Support",
      description:
        "We don’t just deliver a product — we guide you through every stage of the project, from the initial brainstorming session to the final launch and beyond. Our collaborative approach ensures that you’re involved in every key decision, and we’re always available to provide advice, updates, and solutions whenever needed. With our end-to-end support, you can rest assured that we’ll handle all the technical complexities while you focus on growing your business.",
      bg: "#1DBF73",
    },
    {
      id: 5,
      title: "Timely Delivery",
      description:
        "We understand the importance of meeting deadlines in today’s fast-paced business environment. That’s why we’re committed to delivering high-quality results on time, every time. By implementing efficient workflows, clear communication, and proactive planning, we ensure that your project progresses smoothly without delays. Our dedication to punctuality means that your project will be ready to launch exactly when you need it, helping you stay ahead of the competition.",
      bg: "#7755FF",
    },
    {
      id: 6,
      title: "Client Satisfaction",
      description:
        "Your success is our priority. We measure our achievements by the satisfaction of our clients, which is why we go above and beyond to exceed your expectations. Our personalized approach, attention to detail, and commitment to quality have earned us a reputation for delivering exceptional results. Whether you’re a startup or an established brand, we’re here to help you achieve your goals and build a lasting partnership based on trust and success.",
      bg: "#F24E1E",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center font-figtree">
      <div className="container flex flex-col items-center justify-center gap-[60px] py-[80px]">
        <div className="headding w-[1080px] text-center">
          <h1 className="text-[40px] leading-[50px] font-Bricolage text-[#16141D] font-extrabold">
            Why choose Us
          </h1>
          <h4 className="text-[#555555] text-xl">
            At Simply Design, we are dedicated to turning your digital vision
            into reality. Let's work together to create seamless, impactful
            experiences that transform your ideas into reality, prioritizing
            your satisfaction at every stage of the process.
          </h4>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {card.map((item) => (
            <div
              key={item.id}
              className="w-[638px] h-[424px] rounded-3xl flex flex-col gap-6 p-[40px]"
              style={{ backgroundColor: item.bg }}
            >
              <h1 className="font-Bricolage flex items-center font-extrabold gap-4 text-[30px] leading-[40px] text-[#ffffff]">
                <Direction /> {item.title}
              </h1>
              <p className="text-[#ffffff] text-xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
