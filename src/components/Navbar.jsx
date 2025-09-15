import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { LuMessagesSquare } from "react-icons/lu";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Top bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 border-b border-gray-800 text-sm">
        {/* Left section (hidden on mobile) */}
        <div className="hidden md:flex flex-row items-center gap-10">
          <div className="flex items-center gap-1">
            <MdEmail className="text-lg" />
            <a href="mailto:needhelprepair@gmail.com" className="hover:text-blue-400 transition">
              needhelprepair@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            <BiTime className="text-lg" />
            <span>Mon - Fri 09: AM - 05: PM</span>
          </div>
        </div>

        {/* Right section (social icons always visible) */}
        <div className="flex items-center gap-4 mt-2 md:mt-0 text-2xl">
          <a
            href="https://www.facebook.com/@unitthreemots?_rdr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/YourHandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/unit_three_mots?igsh=ZWFlZThjNTRrYWE%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>

      </div>

      {/* Main navbar */}
      <div className="flex justify-between items-center px-4 py-3 lg:px-8">
        {/* Logo and nav links (on large screens only) */}
        <div className="hidden lg:flex justify-between items-center w-full">
          {/* Left: Logo + Nav links */}
          <div className="flex items-center gap-10">
            <img
              src="/logo.webp"
              alt="Unit 4 Logo"
              className="h-16 object-contain"
            />
            <ul className="flex gap-6 font-semibold text-white text-lg">
              <li>
                <a href="#about" className="hover:text-gray-300 cursor-pointer">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 cursor-pointer">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300 cursor-pointer">Contact Us</a>
              </li>
            </ul>

          </div>

          {/* Right: Contact info */}
          <div className="flex items-center gap-2 text-right">
            <LuMessagesSquare className="text-6xl text-blue-500" />
            <div className="text-sm leading-tight">
              <span className="text-gray-400">Call Us:</span>
              <div>

                <a
                  href="https://wa.me/447526227041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white text-sm hover:text-green-400 transition"
                >
                  +44 7526 227041
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view: logo left, hamburger right */}
        <div className="flex justify-between items-center w-full lg:hidden">
          {/* Logo */}
          <img
            src="/logo.webp"
            alt="Unit 4 Logo"
            className="h-14 object-contain"
          />

          {/* Hamburger menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 bg-blue-600 rounded-md"
          >
            <HiMenuAlt3 className="text-3xl" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-4">
          <ul className="flex flex-col gap-3 font-semibold text-white text-base">
            <li><a href="#about" className="hover:text-gray-300 cursor-pointer">About Us</a></li>
            <li><a href="#services" className="hover:text-gray-300 cursor-pointer">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-300 cursor-pointer">Contact Us</a></li>
          </ul>
          <div className="flex items-center gap-2">
            <LuMessagesSquare className="text-3xl text-blue-500" />
            <div className="text-sm leading-tight">
              <span className="text-gray-400">Call Us:</span>
              <div>
                <a
                  href="https://wa.me/447526227041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white text-sm hover:text-green-400 transition"
                >
                  +44 7526 227041
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
