// src/components/Services.jsx

import { LuAlignLeft, LuAlignRight } from "react-icons/lu";

export default function Services() {
  const cards = [
    {
      title: "DPF Solutions",
      image: "/engine.webp",
      description:
        "We clean, remove restrictions, or reprogram your Diesel Particulate Filter (DPF) system to restore engine efficiency and performance.",
    },
    {
      title: "EGR Solutions",
      image: "/workman.webp",
      description:
        "Our EGR (Exhaust Gas Recirculation) solutions help reduce engine issues and improve fuel economy by eliminating blockages and faults.",
    },
    {
      title: "AdBlue Solutions",
      image: "/tools.webp",
      description:
        "We diagnose and fix AdBlue system faults to keep your emissions system running smoothly and prevent costly breakdowns.",
    },
    {
      title: "Stop-Start System Repairs",
      image: "/engine.webp",
      description:
        "We repair and recalibrate stop-start systems to ensure smooth engine shutdowns and restarts, enhancing fuel savings and drivability.",
    },
    {
      title: "Servicing",
      image: "/man.webp",
      description:
        "Our full vehicle servicing keeps your car in peak condition, covering everything from oil changes to full system checks.",
    },
    {
      title: "Speed Limiter Adjustments",
      image: "/meter.webp",
      description:
        "We adjust or remove speed limiters to give you the freedom and control to drive your car without unnecessary restrictions.",
    },
    {
      title: "Fault Code Diagnostics",
      image: "/check.webp",
      description:
        "Using advanced tools, we scan and diagnose your car's error codes to accurately pinpoint and fix underlying issues.",
    },
    {
      title: "General Diagnostics",
      image: "/ac.webp",
      description:
        "We perform thorough diagnostic tests on your entire vehicle to identify and resolve performance or electrical problems.",
    },
    {
      title: "Speed Limit Removal",
      image: "/road.webp",
      description:
        "We safely remove factory-imposed speed restrictions for a more responsive and unrestricted driving experience.",
    },
    {
      title: "Stage 1 and Stage 2 Power Increases",
      image: "/inside.webp",
      description:
        "Through expert remapping, we boost your engine’s power and torque with Stage 1 or Stage 2 tuning — for faster, more exciting performance.",
    },
    {
      title: "Timing chains and Wet belts",
      image: "/inside.webp",
      description:
        "We specialise in diagnosing and replacing timing chains and wet belts to keep your engine running smoothly and reliably.",
    },
  ];

  return (
    <section id="services" className="scroll-mt-20 bg-[#0F1116] text-white py-16 px-4 md:px-10">
      <div className="text-center mb-12 ">
        <div className="flex justify-center items-center gap-2 mb-2">
          <LuAlignRight className="text-blue-700" />
          <p className="uppercase font-semibold tracking-wider text-center">
            Services We Provide
          </p>
          <LuAlignLeft className="text-blue-700" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 leading-snug max-w-7xl mx-auto">
          Precision Tuning. Expert Repairs. Maximum Performance. Everything Your Car Needs, All in One Place
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg overflow-hidden shadow-md group"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full cursor-pointer h-[220px] object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-6 h-60">
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="leading-relaxed mt-5 text-lg">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
