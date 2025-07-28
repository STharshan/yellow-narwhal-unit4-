// src/components/Hero.jsx
import React from "react";

export default function Hero() {
    return (
        <div className="relative w-full h-130 overflow-hidden text-white mt-32">
            {/* Background video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="/back.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 z-10"></div>

            {/* Navbar */}
            <nav className="relative top-12 left-11 w-full flex justify-between items-center px-6 py-4">
                <div className="hidden md:flex gap-6 text-lg font-semibold tracking-wide uppercase">
                    <span className="hover:text-blue-400 cursor-pointer">Power</span>
                    <span>|</span>
                    <span className="hover:text-blue-400 cursor-pointer">Precision</span>
                    <span>|</span>
                    <span className="hover:text-blue-400 cursor-pointer">Efficiency</span>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="relative z-20 flex flex-col justify-center items-start h-full md:-mt-18 px-6 md:px-16 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Unleashing Your Engine’s Full Potential
                </h1>
                <button className="mt-6 bg-blue-700 hover:bg-blue-600 cursor-pointer text-white px-8 py-4 rounded-md font-semibold shadow-lg">
                    GET MORE INFO
                </button>
            </div>
        </div>
    );
}
