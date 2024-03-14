"use client";

import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { FaInfoCircle } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";

import { motion } from "framer-motion";
import { onceTrue, slideInFromBottom } from "../utils/motion";

const Contact = () => {
  return (
    <section id="contact" class="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl lg:text-4xl font-bold my-4 mb-12">
          Contact Us
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <motion.div
            variants={slideInFromBottom(0, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            class="bg-white h-auto rounded-[10px] text-center shadow-contact p-6 py-8 flex items-center justify-center flex-col"
          >
            <HiOutlineMail className="text-6xl text-main " />
            <h3 class="text-3xl font-semibold mt-3">Get in Touch</h3>

            <p class="text-gray-800 text-center text-lg my-3">
              Our customer support team will reply your question in 24 hours.
            </p>

            <a
              href="#"
              className="text-lg hover:text-blue-950 font-medium underline"
            >
              {" "}
              contact@example.com
            </a>
          </motion.div>
          <motion.div
            variants={slideInFromBottom(0.2, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            class="bg-white h-auto rounded-[10px] text-center shadow-contact p-6 py-8 flex items-center justify-center flex-col"
          >
            <FiPhoneCall className="text-6xl text-main " />
            <h3 class="text-3xl font-semibold mt-3">Corporate Office</h3>

            <p class="text-gray-800 text-center text-lg my-3">
              You can call to our corporate office to clear your issues.
            </p>

            <a
              href="#"
              className="text-lg hover:text-blue-950 font-medium underline"
            >
              {" "}
              92 000 99890808
            </a>
          </motion.div>
          <motion.div
            variants={slideInFromBottom(0.9, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            class="bg-white h-auto row-span-2 rounded-[10px] text-center shadow-contact p-6 py-8 flex items-center justify-center flex-col"
          >
            <IoCalendarOutline className="text-6xl text-main " />
            <h3 class="text-3xl font-semibold mt-3">
              Customer Support Service
            </h3>

            <p class="text-gray-800 text-center text-lg my-3">
              You can visit our office any time within our service timings
            </p>
            <p class="text-gray-800 text-center text-xl">Working Hours</p>
            <p class="text-gray-800 text-center text-lg my-3 font-semibold">
              Monday – Friday
              <br />
              7:00AM – 7:00PM CST
              <br />
              Saturday & Sunday
              <br />
              9:00AM – 6:00PM CST
            </p>
          </motion.div>
          <motion.div
            variants={slideInFromBottom(0.5, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            class="bg-white h-auto rounded-[10px] text-center shadow-contact p-6 py-8 flex items-center justify-center flex-col"
          >
            <MdLocationPin className="text-6xl text-main " />
            <h3 class="text-3xl font-semibold mt-3">Address</h3>

            <p class="text-gray-800 text-center text-lg my-2">
              You can visit our office anytime.
            </p>
            <p class="text-gray-800 text-center text-xl my-2">
              ul. Grel Boczna 40, 34-400
            </p>
          </motion.div>
          <motion.div
            variants={slideInFromBottom(0.7, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            class="bg-white h-auto rounded-[10px] text-center shadow-contact p-6 py-8 flex items-center justify-center flex-col"
          >
            <FaInfoCircle className="text-6xl text-main " />
            <h3 class="text-3xl font-semibold mt-3">Info</h3>
            <div className="flex flex-col items-start justify-start gap-1 my-1 text-left">
              <p class="text-gray-800 text-md text-left font-semibold">
                Number NIP
              </p>
              <p class="text-gray-800 text-md">NIP 7352546374</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-1 my-1 text-left">
              <p class="text-gray-800 text-md text-left font-semibold">
                Number Region
              </p>
              <p class="text-gray-800 text-md">REGON 369271351</p>
            </div>
          </motion.div>
        </div>{" "}
        <div class="text-center mt-8">
          <p class="text-2xl font-semibold mt-7 mb-4">Ready to get started?</p>
          <a
            href="#"
            className="font-semibold btnn uppercase mx-auto text-center px-7 py-3 transition-all duration-100 ease-linear bg-white border-main border hover:bg-main hover:text-white  rounded-md inline-block text-main"
          >
            Get Started
          </a>{" "}
        </div>
      </div>
    </section>
  );
};

export default Contact;
