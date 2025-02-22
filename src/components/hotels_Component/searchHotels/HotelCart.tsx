"use client";
import { imgList } from "@/data/data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const HotelCart = () => {
    const [hover, setHover] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? imgList.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === imgList.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-fit space-y-3 overflow-hidden">
            
            <div className="relative w-80 h-60 cursor-pointer" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => console.log("clicked")}>
                <AnimatePresence>
                    <motion.div
                        key={currentIndex}
                        className="absolute w-full h-full"
                        initial={{ x: direction * 100 + "%", opacity: 0.5 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: -direction * 100 + "%", opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image 
                            src={imgList[currentIndex]} 
                            alt="hotels" 
                            width={1000} 
                            height={1000} 
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
                
                {hover && (
                    <div className="absolute inset-0 flex justify-between items-center px-4">
                        <motion.button 
                            onClick={prevSlide} 
                            className="bg-white rounded-full p-1 shadow-md" 
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </motion.button>
                        
                        <motion.button 
                            onClick={nextSlide} 
                            className="bg-white rounded-full p-1 shadow-md" 
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </motion.button>
                    </div>
                )}

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                    {imgList.map((_, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke={index === currentIndex ? "white" : "gray"} className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">Radisson Blu Plaza Delhi Ai...</h3>
                    <p className="px-1 font-semibold text-green-500 bg-green-100 rounded-md">4.5</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p className="text-sm opacity-65">5-star Hotel · Mahipalpur</p>
                    <span className="text-sm opacity-65">1k+ ratings</span>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                    <p className="text-lg font-semibold">$1500</p><span className="opacity-65 text-sm">/ night</span>
                </div>
                <div className="flex items-center space-x-2">
                    <p className="text-sm opacity-65 line-through">$3000</p><span className="text-sm text-green-500">50% off</span>
                </div>
            </div>
        </div>
    );
}

export default HotelCart;
