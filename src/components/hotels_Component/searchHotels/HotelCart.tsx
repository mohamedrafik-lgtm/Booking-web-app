"use client";
import img from "@/images/hotels slider img/df42e4b4_z.webp";
import Image from "next/image";
import { useState } from "react";
// import { motion } from "framer-motion";
const HotelCart = () => {
    const [hover,setHover] = useState(false);
    console.log(hover)
    return (
        <div className="w-fit space-y-3">
          <div className="relative" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <Image src={img.src} alt={"hotels"} width={1000} height={1000} className="w-80 h-60 rounded-lg object-cover relative"/>
             {hover ?
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-between w-full px-4 transition-all duration-300">
             <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 bg-white rounded-full p-1 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
             </button>
             
             <button>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 bg-white rounded-full p-1 cursor-pointer">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                 </svg>
             </button>
         </div>
            : null}
            
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
    )
}

export default HotelCart;