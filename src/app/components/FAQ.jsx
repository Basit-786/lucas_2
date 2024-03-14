"use client";
import React from "react";
import Accordion from "./Accordian";

import { motion } from "framer-motion";
import { onceTrue, slideInFromBottom } from "../utils/motion";

const faqs = [
  {
    title: "Do you prefer Android or iOS",
    answer: "I like to use iOS products",
  },
  {
    title: "Do you prefer writing CSS or Tailwind?",
    answer: "I like to use Tailwind",
  },
  {
    title: "Firebase or Supabase?",
    answer: "Supabase",
  },
];

const FAQ = () => {
  return (
    <div id="faq" className="py-12 px-4 sm:px-6 lg:px-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <button className="font-semibold uppercase mx-auto mb-5 text-center px-7 py-3 bg-main rounded-md inline-block text-white">
          FAQs
        </button>
        <h2 className="text-3xl lg:text-4xl font-bold my-4">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <motion.div
            variants={slideInFromBottom(index / 3, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            className="w-full flex items-center justify-center"
            key={index}
          >
            <Accordion title={faq.title} answer={faq.answer} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
