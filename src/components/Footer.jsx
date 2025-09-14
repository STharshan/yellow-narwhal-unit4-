// src/components/Footer.jsx
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Use FaAngleRight here
import { FaAnglesRight } from "react-icons/fa6";

export default function Footer() {
  // Function to handle quicklink click and scroll to section
  const handleQuickLinkClick = (link) => {
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0F1116] text-white pt-16 pb-6 px-4 md:px-10">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Company */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-3xl font-semibold mb-2">About Company</h3>
          <div className="w-8 h-0.5 bg-blue-700 mb-4"></div>
          <p className="text-lg text-gray-400 mb-4 leading-relaxed">
            Based in the heart of Leicester, Unit Four specialises in enhancing vehicle performance, 
            reliability, and efficiency. From remapping and diagnostics to resolving DPF, EGR, AdBlue, 
            and Stop-Start issues, we deliver expert solutions with precision and care. Driven by 
            performance and powered by passion, we treat every car like our own
          </p>
          <p className="font-semibold text-gray-300 uppercase">We Are Available</p>
          <p className="text-gray-300 mb-4">Mon-Sat: 09.00 am to 6.30 pm</p>
          <button
            onClick={() => handleQuickLinkClick("contact")} // Scroll to contact section
            className="bg-blue-800 text-lg hover:bg-white hover:text-black cursor-pointer text-white font-bold py-3 px-12 rounded"
          >
            Contact Us
          </button>
        </div>

        {/* Quick Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-3xl font-semibold mb-2">Quick link</h3>
          <div className="w-6 h-0.5 bg-blue-700 mb-4"></div>
          <ul className="space-y-3 text-lg text-gray-400">
            <li
              className="hover:text-blue-600 transition duration-300 cursor-pointer "
              onClick={() => handleQuickLinkClick("about")} // Scroll to About section
            >
              <FaAnglesRight className="inline-block mr-2" />
              About Us
            </li>
            <li
              className="hover:text-blue-600 transition duration-300 cursor-pointer"
              onClick={() => handleQuickLinkClick("services")} // Scroll to Services section
            >
              <FaAnglesRight className="inline-block mr-2" />
              Services
            </li>
            <li
              className="hover:text-blue-600 transition duration-300 cursor-pointer"
              onClick={() => handleQuickLinkClick("contact")} // Scroll to Contact section
            >
              <FaAnglesRight className="inline-block mr-2" />
              Contact Us
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-3xl font-semibold mb-2">Contact Details</h3>
          <div className="w-8 h-0.5 bg-blue-700 mb-4"></div>
          <p className="text-sm font-semibold mb-3 uppercase">Phone Number</p>
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-blue-600 text-white p-2 rounded">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="mt-0.5">
                <a
                  href="tel:0116 2669749"
                  className="text-white hover:text-green-400 transition"
                >
                  0116 2669749
                </a>
              </p>
            </div>
          </div>
          <p className="text-sm font-semibold mb-2 uppercase">Email Address</p>
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-blue-600 text-white p-2 rounded">
              <FaEnvelope />
            </div>
            <div>
              <p className="mt-0.5">
                <a
                  href="mailto:malen@email.com"
                  className="text-white hover:text-blue-400 transition"
                >
                  malen@email.com
                </a>
              </p>
            </div>
          </div>
          <p className="font-semibold mb-2 uppercase">Office Location</p>
          <div className="flex items-start gap-3">
            <div className="bg-blue-600 text-white p-2 rounded">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="mt-0.5">
                <a
                  href="https://www.google.com/maps?q=Unit+3+Wesley+St,+Leicester+LE4+5QG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition"
                >
                  Unit 3 Wesley St, Leicester LE4 5QG
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright with clickable "Ansely" */}
      <div className="border-t font-semibold border-gray-800 mt-20 pt-6 text-center text-lg text-gray-400">
        Copyright © 2025{" "}
        <a
          href="https://www.ansely.co.uk/" // Replace with your desired link
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white hover:text-blue-700 transition hover:underline"
        >
          Ansely
        </a>
        . All Rights Reserved.
      </div>
    </footer>
  );
}
