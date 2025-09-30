

// src/components/ImageCarousel.jsx
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  {
    image: "/tools.webp",
    title: "Better Power, Better Efficiency",
    description:
      "More performance doesn’t have to mean more fuel. Our tuning help your engine run smarter — improving both power and economy.",
  },
  {
    image: "/img1.webp",
    title: "Unlock Your Car’s True Potential",
    description:
      "Our Stage 1 and stage 2 remaps deliver noticeable gains in horsepower and torque — more speed, more pull, more fun.",
  },
  {
    image: "/img2.webp",
    title: "Smoother, More Responsive Driving",
    description:
      "Say goodbye to lag. We optimise your engine’s response so acceleration feels sharp, smooth, and effortless.",
  },
  {
    image: "/tools.webp",
    title: "Better Power, Better Efficiency",
    description:
      "More performance doesn’t have to mean more fuel. Our tuning help your engine run smarter — improving both power and economy.",
  },
  {
    image: "/img1.webp",
    title: "Unlock Your Car’s True Potential",
    description:
      "Our Stage 1 and stage 2 remaps deliver noticeable gains in horsepower and torque — more speed, more pull, more fun.",
  },
  {
    image: "/img2.webp",
    title: "Smoother, More Responsive Driving",
    description:
      "Say goodbye to lag. We optimise your engine’s response so acceleration feels sharp, smooth, and effortless.",
  },
];

export default function ImageCarousel() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animate on scroll up & down
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="w-full px-4 md:px-10 py-10 bg-white mb-20"
      data-aos="fade-up"
    >
      <div className="relative" data-aos="zoom-in">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* Animate the card container, not the image */}
              <div
                className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Animate overlay text */}
                <div className="absolute inset-0 flex items-end bg-black/40">
                  <div
                    className="transform translate-y-full group-hover:-translate-y-10 opacity-0 group-hover:opacity-100 transition-all duration-500 w-full px-4 pb-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 200 + 200}
                  >
                    <p className="bg-blue-700 text-white text-sm font-semibold px-4 py-2 inline-block">
                      {slide.title}
                    </p>
                    <div className="bg-white px-4 py-3">
                      <p className="text-black font-medium hover:text-blue-700">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom pagination bullets */}
      <style jsx global>{`
        .swiper-pagination {
          position: absolute !important;
          bottom: 1rem !important;
          transform: translateX(0%);
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }

        .swiper-pagination-bullet {
          background-color: #6b7280; /* gray-500 */
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background-color: #1d4ed8; /* blue-700 */
          position: relative;
        }

        .swiper-pagination-bullet-active::before {
          content: "";
          position: absolute;
          top: -6px;
          left: -6px;
          width: 22px;
          height: 22px;
          border: 2px solid #1d4ed8;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
}



