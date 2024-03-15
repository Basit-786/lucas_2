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
    <section id="contact" class="py-12 px-6 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl lg:text-4xl font-[900] my-4 mb-12">Kontakt</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <motion.div
            variants={slideInFromBottom(0, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            class="bg-white h-auto rounded-[10px] text-center shadow-contact p-6 px-10 cursor-pointer py-8 flex items-center justify-center flex-col"
          >
            <HiOutlineMail className="text-6xl text-main " />
            <h3 class="text-3xl font-semibold mt-3">Email</h3>

            <p class="text-gray-800 text-center text-lg my-3">
              Zapytania oraz dokumentację proszę wysyłać na
            </p>

            <a
              href="#"
              className="text-lg hover:text-blue-950 font-medium underline"
            >
              {" "}
              BIURO@BELTOWKSA.PL{" "}
            </a>
          </motion.div>
          <motion.div
            variants={slideInFromBottom(0.2, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            class="bg-white h-auto rounded-[10px] text-center shadow-contact p-6 px-10 cursor-pointer py-8 flex items-center justify-center flex-col"
          >
            <FiPhoneCall className="text-6xl text-main " />
            <h3 class="text-3xl font-semibold mt-3">Telefon</h3>

            <p class="text-gray-800 text-center text-lg my-3">
              Zapraszam do kontaktu telefonicznego
            </p>

            <a
              href="#"
              className="text-lg hover:text-blue-950 font-medium underline"
            >
              {" "}
              508 570 286
            </a>
          </motion.div>
          <motion.div
            variants={slideInFromBottom(0.9, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            class="bg-white h-auto row-span-2 rounded-[10px] text-center shadow-contact p-6 px-10 cursor-pointer py-8 flex items-center justify-center flex-col"
          >
            <IoCalendarOutline className="text-6xl text-main " />
            <h3 class="text-3xl font-semibold mt-3">Godziny Otwarcia</h3>

            <p class="text-gray-800 text-center text-lg my-3">
              Staram się być dla was dostępna cały rok
            </p>
            <p class="text-gray-800 text-center text-xl">Godziny pracy</p>
            <p class="text-gray-800 text-center text-lg my-3 font-semibold">
              Poniedziałek-Piątek
              <br />
              9:00 - 17:00
              <br />
              Sobota i Niedziela
              <br />
              Nieczynne
            </p>
          </motion.div>
          <motion.div
            variants={slideInFromBottom(0.5, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            class="bg-white h-auto rounded-[10px] text-center shadow-contact p-6 px-10 cursor-pointer py-8 flex items-center justify-center flex-col"
          >
            <MdLocationPin className="text-6xl text-main " />
            <h3 class="text-3xl font-semibold mt-3">Adres</h3>

            <p class="text-gray-800 text-center text-lg my-2">
              Biuro znajduje się
            </p>
            <p class="text-gray-800 text-center text-xl my-2">
              ul. Grel Boczna <br />
              34-400 Nowy Targ{" "}
            </p>
          </motion.div>
          <motion.div
            variants={slideInFromBottom(0.7, 60)}
            initial="hidden"
            whileInView={"visible"}
            viewport={onceTrue}
            class="bg-white h-auto rounded-[10px] text-center shadow-contact p-6 px-10 cursor-pointer py-8 flex items-center justify-center flex-col"
          >
            <FaInfoCircle className="text-6xl text-main " />
            <h3 class="text-3xl font-semibold mt-3">Dane </h3>
            <div className="flex flex-col items-start justify-start gap-1 my-1 text-left">
              <p class="text-gray-800 text-md text-left font-semibold">
                Numer NIP
              </p>
              <p class="text-gray-800 text-md">7352546374</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-1 my-1 text-left">
              <p class="text-gray-800 text-md text-left font-semibold">
                Numer REGON
              </p>
              <p class="text-gray-800 text-md">369271351</p>
            </div>
          </motion.div>
        </div>{" "}
        <motion.div 
        
        variants={slideInFromBottom(0.8, 70)}
        initial="hidden"
        whileInView={"visible"}
        viewport={onceTrue}
        class="text-center mt-8">
          <p class="text-2xl font-semibold mt-7 mb-4">Gotowy do kontaktu?</p>
          <a
            href="#nav"
            className="font-semibold btnn uppercase mx-auto text-center px-7 py-3 transition-all duration-100 ease-linear bg-white border-main border hover:bg-main hover:text-white  rounded-md inline-block text-main"
          >
           Zadzwoń 
          </a>{" "}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
