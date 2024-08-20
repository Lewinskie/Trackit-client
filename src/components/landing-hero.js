import React from "react";

const LandingHero = () => {
  return (
    <section
      className="flex items-center justify-center bg-gray-800"
      style={{ height: "500px" }}
    >
      <div className="text-center">
        <p className="text-xl font-medium tracking-wider text-gray-300">
        Effortlessly Manage Your IT Assets
        </p>
        <h3 className="mt-6 text-3xl font-bold text-white md:text-4xl">
        Track, organize, and maintain your IT assets in one streamlined platform.
        </h3>

        <div className="flex justify-center mt-8">
          <a
            className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-indigo-600 rounded hover:bg-indigo-500"
            href="#"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
