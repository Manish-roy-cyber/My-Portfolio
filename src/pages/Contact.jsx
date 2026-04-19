import React from "react";
import bgImage from "../assets/bg.png";

const Contact = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-between text-white relative px-9"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl gap-8">
        
        {/* LEFT - INFO */}
        <div className="flex-1 bg-black/20 backdrop-blur-md p-9 rounded-2xl shadow-xl border border-white/20 mt-20">
          <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">
            Get In Touch
          </h2>

          <ul className="space-y-4 text-gray-200">
            <li>👤 <strong>Name:</strong> Manish Kumar Ray</li>
            <li>📧 <strong>Email:</strong> maniosh111don@gmail.com</li>
            <li>📱 <strong>Mobile:</strong> +977-9812103000</li>
            <li>📍 <strong>Address:</strong> Nepal</li>
          </ul>
        </div>

        {/* RIGHT - FORM */}
        <div className="flex-1 bg-black/10 backdrop-blur-md p-9 rounded-2xl shadow-xl border border-white/20 mt-20">
          <h2 className="text-3xl font-bold text-green-400 text-center mb-8">
            Send Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black/50 text-white border border-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black/50 text-white border border-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition"
            />

            <input
              type="tel"
              placeholder="Your Mobile Number"
              className="w-full p-3 rounded-lg bg-black/50 text-white border border-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-black/50 text-white border border-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-lg font-semibold tracking-wide transition duration-300 shadow-lg hover:shadow-green-500/50"
            >
              🚀 Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;