import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Stats() {
  useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration
      once: false,    // keep animating on scroll up and down
    });
  }, []);

  const stats = [
    {
      icon: {
        default: "/counter-1.svg",
        hover: "/counter.png",
      },
      value: "500+",
      label: "Cars Repaired",
    },
    {
      icon: {
        default: "/service-1.svg",
        hover: "/service.png",
      },
      value: "10+",
      label: "Years in Business",
    },
    {
      icon: {
        default: "/car-1.svg",
        hover: "/car.png",
      },
      value: "24+",
      label: "Hour Turnaround",
    },
    {
      icon: {
        default: "/save-1.svg",
        hover: "/save.png",
      },
      value: "4.9+",
      label: "Customer Rating",
    },
  ];

  return (
    <div className="bg-[#0F1116] mt-120 md:mt-0 py-14 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Horizontal Scroll Container with responsive classes */}
        <div className="flex items-center space-x-4 sm:flex-nowrap animate-scroll-x sm:overflow-x-hidden">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 px-6 py-6 w-full md:w-auto justify-center text-center border-r-2 border-gray-700 last:border-r-0"
              data-aos="fade-up"
              data-aos-delay={index * 150} // stagger effect
            >
              {/* Image Container */}
              <div className="relative w-18 h-18 shrink-0 bg-[#1F2127] rounded-full flex items-center justify-center overflow-hidden mb-4 md:mb-0">
                <img
                  src={item.icon.default}
                  alt="stat-icon"
                  className="absolute w-10 h-10 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={item.icon.hover}
                  alt="stat-icon-hover"
                  className="absolute w-10 h-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              </div>

              {/* Text */}
              <div className="text-left md:text-center">
                <h3 className="text-white text-4xl font-bold">{item.value}</h3>
                <p className="text-lg font-semibold text-gray-300">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
