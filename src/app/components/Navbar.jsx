"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
} from "../utils/motion";

const links = [
  {
    name: "Główna",
    link: "#hero",
  },
  {
    name: "O Mnie",
    link: "#about",
  },
  {
    name: "Usługi",
    link: "#skills",
  },
  {
    name: "Certyfikaty",
    link: "#portfolio",
  },
  {
    name: "Kontakt",
    link: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav id="nav" className="bg-[#ffffff99] nav-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.div
            variants={slideInFromLeft()}
            initial="hidden"
            whileInView={"visible"}
            className="flex-shrink-0 flex items-center"
          >
            <a href="#">
              <img className="h-16 w-auto" src="/logo.jpg" alt="Logo" />
            </a>
          </motion.div>
          {/* Navigation Links */}
          <motion.div
            variants={slideInFromBottom(0, 20)}
            initial="hidden"
            whileInView={"visible"}
            className="hidden sm:-my-px sm:ml-6 sm:flex gap-4 font-[900] text-sm uppercase text-main tracking-[1px] "
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="hover:bg-main hover:text-white  px-2 py-1 rounded-[4px] transition duration-150 ease-in-out"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
          {/* Call to Action Button */}
          <motion.div
            variants={slideInFromRight()}
            initial="hidden"
            whileInView={"visible"}
            className="flex items-center"
          >
            <button className="text-white btnn font-semibold py-2 px-4 shadow uppercase bg-main rounded-md">
              Hire me!
            </button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
