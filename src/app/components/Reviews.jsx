"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const reviews = [
  {
    id: 1,
    author: "John Doe",
    position: "CEO, Company A",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut nisi sed ipsum dignissim congue ut vitae ipsum.",
    image: "/hero.jpg",
  },
  {
    id: 2,
    author: "Jane Smith",
    position: "CTO, Company B",
    review:
      "Nullam et luctus turpis, in dignissim justo. In et aliquet felis. Integer auctor, lacus in feugiat rutrum, elit neque accumsan odio, nec pellentesque sapien quam et lorem.",
    image: "/hero.jpg",
  },
  {
    id: 2,
    author: "Jane Smith",
    position: "CTO, Company B",
    review:
      "Nullam et luctus turpis, in dignissim justo. In et aliquet felis. Integer auctor, lacus in feugiat rutrum, elit neque accumsan odio, nec pellentesque sapien quam et lorem.",
    image: "/hero.jpg",
  },
];

const Reviews = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-screen-xl mx-auto">
        <button className="font-semibold uppercase mx-auto text-center px-7 py-3 bg-main rounded-md inline-block text-white">
          Our Services
        </button>
        <h2 className="text-3xl lg:text-4xl font-bold my-4">
          Provided Features
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            prevEl: ".custom-swiper-button-prev", 
            nextEl: ".custom-swiper-button-next",
          }}
          modules={[Navigation]}
          //   loop={true}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white rounded-lg p-8 shadow-lg m-5 relative overflow-hidden">
                <img
                  src={review.image}
                  alt={review.author}
                  className="rounded-full h-24 w-24 mx-auto mb-6"
                />
                <p className="text-lg text-gray-800 mb-4">{review.review}</p>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 via-transparent to-transparent p-4 text-white transition-all duration-300 opacity-0 hover:opacity-100">
                  <p className="text-lg font-semibold">{review.author}</p>
                  <p className="text-sm">{review.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-swiper-button-prev p-2 bg-main text-white rounded-full">
            <FaArrowLeft className="text-2xl" />
          </div>
          <div className="custom-swiper-button-next p-2 bg-main text-white rounded-full">
            <FaArrowRight className="text-2xl" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
