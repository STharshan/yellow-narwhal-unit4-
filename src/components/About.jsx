// src/components/About.jsx
import React from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

export default function About() {
    return (
        <section id="about" className=" scroll-mt-20 w-full bg-white py-12 px-4 md:px-10">
            <div className="max-w-7xl mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Image */}
                <div className="w-full h-200">
                    <img
                        src="/mechanic.webp"
                        alt="Mechanic working"
                        className="w-full h-full object-cover rounded-md shadow-md"
                    />
                </div>

                {/* Right: Text */}
                <div className="text-black">
                    <div className="flex items-center gap-2 mb-2">
                        <HiOutlineBars3BottomRight className="text-blue-700 text-xl font-bold" />
                        <p className="font-semibold text-blue-700 uppercase tracking-wide">
                            More About Us
                        </p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        We are qualified & <br className="hidden md:block" />
                        of experience in this field
                    </h2>
                    <p className="mb-4 leading-relaxed">
                        At <strong>Unit Four</strong>, based in the heart of Leicester, we specialise in
                        improving your car’s performance, reliability, and overall driving experience. From
                        removing restrictions in your <strong>DPF (Diesel Particulate Filter)</strong> and{" "}
                        <strong>EGR (Exhaust Gas Recirculation)</strong> systems, to resolving{" "}
                        <strong>AdBlue</strong> faults and <strong>Stop-Start issues</strong>, we offer expert
                        solutions tailored to your vehicle.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        Whether it’s increasing horsepower through Stage 1 and Stage 2 remapping, adjusting your{" "}
                        <strong>speed limiter</strong> for a smoother drive, or carrying out{" "}
                        <strong>professional servicing and diagnostics</strong> to pinpoint and fix faults —
                        we do it all with precision and care.
                    </p>
                    <p className=" leading-relaxed">
                        We’re not just good at what we do — we’re the best. At Unit Four, we’re driven by
                        performance and powered by passion. We treat every car like it’s our own, because we
                        genuinely care about getting the best out of your vehicle.
                    </p>
                </div>
            </div>
        </section>
    );
}
