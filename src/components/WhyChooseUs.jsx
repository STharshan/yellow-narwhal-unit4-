// src/components/WhyChooseUs.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LuAlignRight } from "react-icons/lu";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: false,   // whether animation should happen only once or every time you scroll
    });
  }, []);

  const reasons = [
    {
      number: "01",
      title: "PERFORMANCE–DRIVEN EXPERTISE",
      description:
        "From Stage 1 and 2 remaps to DPF, EGR, and AdBlue solutions, we specialise in fine-tuning your car for maximum power, efficiency, and responsiveness.",
    },
    {
      number: "02",
      title: "FULL–SERVICE SOLUTIONS",
      description:
        "Whether it’s fault code diagnostics, stop-start system repairs, or routine servicing — we handle it all under one roof, saving you time and hassle.",
    },
    {
      number: "03",
      title: "PRECISION. PASSION. CARE.",
      description:
        "We treat every car like our own. With top-tier tools and genuine passion for performance, you can count on results that feel as good as they drive.",
    },
    {
      number: "04",
      title: "LOCAL, TRUSTED, PROVEN",
      description:
        "Based in the heart of Leicester, we’ve built our name on quality, honesty, and customer satisfaction. When you come to Unit Four, you come to the best.",
    },
  ];

  return (
    <div className="bg-white text-center py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <p
        className="flex items-center justify-center gap-2 text-blue-700 font-semibold uppercase tracking-wider mb-2"
        data-aos="fade-down"
      >
        <LuAlignRight className="text-blue-700 text-lg" />
        Built for Results
      </p>

      <h2 className="text-3xl md:text-5xl font-bold mb-4" data-aos="fade-up">
        Why Choose Us?
      </h2>

      <p
        className="text-lg text-gray-600 mb-12 max-w-6xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        At <span className="font-bold">Unit Four</span>, we do more than just
        fix cars — we unlock their full potential. Here’s why drivers across
        Leicester trust us with their vehicles:
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto h-180">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-100 shadow-sm rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-delay={index * 150} // stagger effect
          >
            {/* Number circle */}
            <div className="flex justify-center mb-4">
              <div className="bg-pink-100 rounded-full w-20 h-20 flex items-center justify-center">
                <div className="bg-blue-700 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center text-lg shadow-md">
                  {item.number}
                </div>
              </div>
            </div>

            {/* Title */}
            <h4 className="text-lg font-bold uppercase mb-2 tracking-wide text-gray-800 group-hover:text-white">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-gray-700 group-hover:text-white font-semibold leading-relaxed max-w-80 mx-auto">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
