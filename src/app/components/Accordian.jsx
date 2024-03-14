"use client"
import React, { useState } from "react";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 max-w-[700px] w-full">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify-between items-center transition-all duration-200 ease-in-out w-full text-xl font-semibold px-6 py-4 rounded-[5px] ${
          accordionOpen
            ? "bg-gray-200"
            : "bg-gray-100"
        }`}

      >
        <span>{title}</span>
        <svg
          className="fill-main shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-600 leading-[30px] text-[20px] ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;