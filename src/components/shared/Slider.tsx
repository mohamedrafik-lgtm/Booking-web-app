"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface IOffers {
  title: string;
  description: string;
  offerCode: string;
  url: string;
}

type ContentType = string | IOffers;

interface IProp {
  content: ContentType[];
  type: "image" | "offer";
}

const Slider = ({ content, type }: IProp) => {



  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? content.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === content.length - 1 ? 0 : prev + 1));
  };


  const renderItem = (item: ContentType) => {
    if (type === "image" && typeof item === "string") {
      return (
        <Image
          src={item}
          alt="slider-image"
          width={800}
          height={500}
          className="w-full h-auto object-cover cursor-pointer"
        />
      );
    }

    if (type === "offer" && typeof item === "object") {
      return (
        <div className="p-4 pb-32 bg-orange-500 shadow-lg space-y-3 rounded-lg text-center w-full cursor-pointer">
          <h2 className="text-xl font-bold mt-2 text-white">{item.title}</h2>
          <p className="text-white">{item.description}</p>
          <span className="text-white font-semibold">{item.offerCode}</span>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="slider relative overflow-hidden w-full">
      <div
        className="flex w-full transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {content.map((item, index) => (
          <motion.div
            key={index}
            className="min-w-full flex justify-center items-center"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: index === currentIndex ? 1 : 0.5 }}
            transition={{ duration: 0.5 }}
          >
            {renderItem(item)}
          </motion.div>
        ))}
      </div>

      
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-opacity-50 p-2 rounded-lg">
        <button className="text-white mx-2" onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="flex mx-2">
          {content.map((_, index) => (
            <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke={index === currentIndex ? "white" : "gray"} className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          ))}
        </div>
        <button className="text-white mx-2" onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
