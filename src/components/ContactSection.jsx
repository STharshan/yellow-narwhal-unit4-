// src/components/ContactSection.jsx
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaLinkedinIn,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { LuAlignRight, LuPhoneCall } from "react-icons/lu";
import { PiMapPinLineDuotone } from "react-icons/pi";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 w-full py-16 px-4 md:px-10 bg-white text-black"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-2 text-blue-700 font-semibold uppercase tracking-wider mb-2">
            <LuAlignRight className="text-blue-700 text-lg" />
            Contact Us
          </div>

          <h2 className="text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-8">
            is a phrase used to encourage communication, often between
            individuals or businesses, to connect or resolve issues.
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-pink-100 p-5 rounded-full text-blue-500">
                <LuPhoneCall className="text-3xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Call</p>
                <a
                  href="https://wa.me/123907555101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black hover:text-green-600 transition"
                >
                  +123 (907) 555-101
                </a>
              </div>
            </div>

            {/* Email */}
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-pink-100 p-4 rounded-full text-blue-500">
                <FaEnvelopeOpenText className="text-3xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Us</p>
                <a
                  href="mailto:needhelprepair@gmail.com"
                  className="font-semibold text-black hover:text-blue-600 transition"
                >
                  needhelprepair@gmail.com
                </a>
              </div>
            </div>


            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-pink-100 p-4 rounded-full text-blue-500">
                <PiMapPinLineDuotone className="text-3xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <a
                  href="https://www.google.com/maps/place/Inglewood,+Maine+98380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-black hover:text-red-600 transition"
                >
                  Inglewood, Maine 98380
                </a>
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-200 my-8"></div>

          {/* Social Media */}
          <p className="font-semibold mb-3 text-lg">Follow Us</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/YourPage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="https://twitter.com/YourHandle"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="https://pinterest.com/YourPage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
            >
              <FaPinterest className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/YourProfile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-700 hover:text-white transition"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right Side (Contact Form) */}
        <div className="bg-gray-100 p-6 md:p-10 rounded-md">
          <h3 className="text-xl font-bold mb-6">Send A Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name*"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your email*"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Subject*"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              rows="4"
              placeholder="Your message (optional)"
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 font-semibold rounded hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
