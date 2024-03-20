"use client";

import React from "react";
import { motion } from "framer-motion";
import { onceTrue, slideInFromBottom } from "../utils/motion";

const Portfolio = () => {
  const projects = [
    { image: "/certificate44.png", title: "Certyfikat 1" },
    { image: "/certificate.jpg", title: "Certyfikat 2" },
    { image: "/certificate2.jpg", title: "Certyfikat 3" },
    { image: "/certificate3.jpg", title: "Certyfikat 4" },
  ];

  return (
    <div id="portfolio" className="py-12 px-6 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <button className="font-semibold uppercase mx-auto mb-5 text-center px-7 py-3 bg-main rounded-md inline-block text-white">
        Certyfikaty
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              variants={slideInFromBottom(index / 5, 90)}
              initial="hidden"
              whileInView={"visible"}
              viewport={onceTrue}
              key={index}
              className={`bg-white rounded-lg group h-full shadow-lg overflow-hidden relative ${
                index === 0 ? "lg:col-span-2 lg:row-span-2 max-h-[1200px]" : "max-h-[600px]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center group-hover:opacity-75 transition duration-300 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 py-4 px-6 text-black z-[10] transform translate-y-full  group-hover:translate-y-0 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
