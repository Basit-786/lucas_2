"use client";

import React from "react";
import { motion } from "framer-motion";
import { onceTrue, slideInFromBottom } from "../utils/motion";

const Portfolio = () => {
  const projects = [
    { image: "/project.jpg", title: "Project 1" },
    { image: "/project.jpg", title: "Project 2" },
    { image: "/project.jpg", title: "Project 3" },
    { image: "/project.jpg", title: "Project 4" },
    { image: "/project.jpg", title: "Project 5" },
    { image: "/project.jpg", title: "Project 6" },
    // Add more projects as needed
  ];

  return (
    <div id="portfolio" className="py-12 px-6 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <button className="font-semibold uppercase mx-auto mb-5 text-center px-7 py-3 bg-main rounded-md inline-block text-white">
          Portfolio
        </button>
        <h2 className="text-3xl lg:text-4xl font-[900] my-4">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              variants={slideInFromBottom(index / 5, 90)}
              initial="hidden"
              whileInView={"visible"}
              viewport={onceTrue}
              key={index}
              className={`bg-white rounded-lg group shadow-lg overflow-hidden relative ${
                index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto group-hover:opacity-75 transition duration-300 ease-in-out"
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
