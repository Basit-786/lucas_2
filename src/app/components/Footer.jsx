"use client";

import React from "react";
import { AiFillInstagram } from "react-icons/ai";

import { FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  onceTrue,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";

const Footer = () => {
  return (
    <div className="py-12 px-10 lg:py-16 bg-gray-100 overflow-hidden">
      <div className="w-full max-w-screen-xl flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-between flex-wrap">
          <motion.div
            variants={slideInFromLeft(0.1)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            className="min-w-[200px] h-auto flex flex-col justify-start"
          >
            <div className="font-[900] text-2xl my-3">Quick Links</div>
            <a
              href="#about"
              className="text-lg font-medium my-1 lg:my-2 hover:text-main hover:underline"
            >
               O mnie
            </a>
            <a
              href="#services"
              className="text-lg font-medium my-1 lg:my-2 hover:text-main hover:underline"
            >
              Services
            </a>
            <a
              href="#faq"
              className="text-lg font-medium my-1 lg:my-2 hover:text-main hover:underline"
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="text-lg font-medium my-1 lg:my-2 hover:text-main hover:underline"
            >
              Kontakt
            </a>
          </motion.div>
          <motion.div
            variants={slideInFromTop(0.3)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            className="min-w-[200px] h-auto flex flex-col justify-start"
          >
            <div className="font-[900] text-2xl my-3">Social Media</div>
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-medium my-1 lg:my-2 hover:text-main hover:underline"
            >
              <FaFacebook className="text-main text-2xl " />
              Facebook
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-medium my-1 lg:my-2 hover:text-main hover:underline"
            >
              <AiFillInstagram className="text-main text-2xl " />
              Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-medium my-1 lg:my-2 hover:text-main hover:underline"
            >
              <FaTwitter className="text-main text-2xl " />
              Twitter
            </a>
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.2)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            className="min-w-[200px] h-auto flex flex-col justify-start"
          >
            <div className="font-[900] text-2xl my-3">Policies</div>
            <a
              href="#"
              className="text-lg font-medium my-1 lg:my-2 hover:text-main hover:underline"
            >
              Privacy Policies
            </a>
            <a
              href="#"
              className="text-lg font-medium my-1 lg:my-2 hover:text-main hover:underline"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-lg font-medium my-1 lg:my-2 hover:text-main hover:underline"
            >
              Disclaimer
            </a>
          </motion.div>
        </div>
        <motion.div
          variants={slideInFromBottom(0.4, 20)}
          initial="hidden"
          whileInView={"visible"}
          viewport={onceTrue}
          className="text-center text-lg font-semibold mt-5"
        >
          &copy; Company 2024 Inc. All Rights Reserved.
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
