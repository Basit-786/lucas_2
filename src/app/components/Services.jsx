"use client";

import React from "react";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { motion } from "framer-motion";
import { onceTrue, slideInFromBottom } from "../utils/motion";

const Services = () => {
  const services = [
    {
      icon: "icon-1.svg",
      title: "Service 1",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolorum laborum similique incidunt ratione placeat voluptas tempore vitae voluptatibus optio harum, rem ipsum blanditiis reprehenderit laboriosam delectus accusantium error illo.",
    },
    {
      icon: "icon-2.svg",
      title: "Service 2",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolorum laborum similique incidunt ratione placeat voluptas tempore vitae voluptatibus optio harum, rem ipsum blanditiis reprehenderit laboriosam delectus accusantium error illo.",
    },
    {
      icon: "icon-3.svg",
      title: "Service 3",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, dolorum laborum similique incidunt ratione placeat voluptas tempore vitae voluptatibus optio harum, rem ipsum blanditiis reprehenderit laboriosam delectus accusantium error illo.",
    },
    // Add more services as needed
  ];

  return (
    <div id="services" className="py-12 px-4 sm:px-6 lg:px-8 lg:py-26">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <motion.button
          variants={slideInFromBottom(0, 40)}
          initial="hidden"
          whileInView={"visible"}
          viewport={onceTrue}
          className="font-semibold uppercase mx-auto text-center px-7 py-3 bg-main rounded-md inline-block text-white"
        >
          Our Services
        </motion.button>
        <motion.h2
          variants={slideInFromBottom(0.3, 60)}
          initial="hidden"
          whileInView={"visible"}
          viewport={onceTrue}
          className="text-3xl lg:text-4xl font-bold my-4"
        >
          Provided Features
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-6  relative">
          {services.map((service, index) => (
            <motion.div
              variants={slideInFromBottom(index / 3, 60)}
              initial="hidden"
              whileInView={"visible"}
              viewport={onceTrue}
              key={index}
              className="bg-white flex flex-col gap-5 cursor-pointer group rounded-lg p-8 py-10 shadow-lg hover:bg-main transition duration-300 ease-in-out"
            >
              {/* <img src={`/agreement.png`} alt={service.title} className="h-20 w-20 mx-auto mb-4 filter group-hover:imgWhite" /> */}
              <MdOutlineRealEstateAgent className="text-main group-hover:text-white w-20 h-20 mx-auto" />

              <h3 className="text-2xl text-main group-hover:text-white font-bold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-100">
                {service.description}
              </p>
            </motion.div>
          ))}

          <img
            src="/about-bg.png"
            alt=""
            className="w-[130px] h-[130px] object-cover absolute top-[-50px] right-[-50px] z-[-1]"
          />
          <img
            src="/about-bg.png"
            alt=""
            className="w-[130px] h-[130px] object-cover absolute bottom-[-50px] left-[-50px] z-[-1]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
