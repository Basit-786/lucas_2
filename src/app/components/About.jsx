"use client";
import React from "react";
import { motion } from "framer-motion";
import { onceTrue, slideInFromLeft, slideInFromRight } from "../utils/motion";

const About = () => {
  return (
    <div id="about" className="py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto lg:flex lg:items-center">
        {/* Text Section */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          whileInView={"visible"}
          viewport={onceTrue}
          className="lg:w-1/2"
        >
          <button className="font-semibold uppercase px-7 py-3 bg-main rounded-md inline-block text-white">
            About Us
          </button>
          <h2 className="text-3xl lg:text-4xl font-bold my-4">
            Why you should hire me?
          </h2>
          <p className="mt-3 text-lg leading-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            scelerisque vehicula mauris, sit amet venenatis tortor vestibulum
            id. Nulla facilisi. Sed eget maximus nunc, id ultricies neque. In
            hac habitasse platea dictumst. Proin interdum lectus vitae libero
            bibendum eleifend.
          </p>
          <div className="mt-6">
            <button className="bg-main btnn text-white font-semibold py-2 px-6 rounded-lg">
              Read More
            </button>
          </div>
        </motion.div>
        {/* Image Section */}
        <motion.div
          variants={slideInFromRight()}
          initial="hidden"
          whileInView={"visible"}
          viewport={onceTrue}
          className="lg:w-1/2 lg:mr-12 mb-8 lg:mb-0 relative flex items-center justify-center"
        >
          <div className="w-[390px] h-[450px]">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="/hero.jpg"
              alt="About Image"
            />
          </div>
          <img
            src="/about-bg.png"
            alt=""
            className="w-[130px] h-[130px] object-cover absolute top-[-30px] right-[30px] z-[-1]"
          />
          <img
            src="/about-bg.png"
            alt=""
            className="w-[130px] h-[130px] object-cover absolute bottom-[-30px] left-[30px] z-[-1]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
