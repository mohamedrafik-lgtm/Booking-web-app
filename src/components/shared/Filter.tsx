"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { dealsInput, sortInput, starCategory,guestRatings, propertyType } from "@/data/data";
import RenderInput from "../RenderInput";

const Filter = () => {
  const [openSections, setOpenSections] = useState({ PopularFilters: false, deals: false , StarCategory: false , GuestRatings: false ,PropertyType:false});

  const toggleSection = (section: 'PopularFilters' | 'deals' | 'StarCategory'| 'GuestRatings' | 'PropertyType') => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  return (
    <aside className="w-56 px-3 py-5 space-y-5">
      <h3 className="text-2xl font-semibold text-orange-500">Filter</h3>
      <div className="space-y-2">
        <div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => toggleSection("PopularFilters")}
          >
            <p className="text-lg font-semibold">Popular filters</p>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 mt-1 transform"
              animate={{ rotate: openSections.PopularFilters ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </motion.svg>
          </div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: openSections.PopularFilters ? 1 : 0, height: openSections.PopularFilters ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-3 space-y-1"
          >
            {/* {renderSortInput} */}
            <RenderInput data={sortInput} />
          </motion.div>
        </div>

        <div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => toggleSection("deals")}
          >
            <p className="text-lg font-semibold">Deals</p>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 mt-1 transform"
              animate={{ rotate: openSections.deals ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </motion.svg>
          </div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: openSections.deals ? 1 : 0, height: openSections.deals ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-3 space-y-1"
          >
            {/* {renderDealsInput} */}
            <RenderInput data={dealsInput} />
          </motion.div>
        </div>

        <div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => toggleSection("StarCategory")}
          >
            <p className="text-lg font-semibold">StarCategory</p>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 mt-1 transform"
              animate={{ rotate: openSections.StarCategory ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </motion.svg>
          </div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: openSections.StarCategory ? 1 : 0, height: openSections.StarCategory ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-3 space-y-1"
          >
            {/* {StarCategory} */}
            <RenderInput data={starCategory} />
          </motion.div>
        </div>

        <div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => toggleSection("GuestRatings")}
          >
            <p className="text-lg font-semibold">Guest Ratings</p>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 mt-1 transform"
              animate={{ rotate: openSections.GuestRatings ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </motion.svg>
          </div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: openSections.GuestRatings ? 1 : 0, height: openSections.GuestRatings ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-3 space-y-1"
          >
            {/* {GuestRatings} */}
            <RenderInput data={guestRatings} />
          </motion.div>
        </div>


        <div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => toggleSection("PropertyType")}
          >
            <p className="text-lg font-semibold">Property Type</p>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 mt-1 transform"
              animate={{ rotate: openSections.PropertyType ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </motion.svg>
          </div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: openSections.PropertyType ? 1 : 0, height: openSections.PropertyType ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-3 space-y-1"
          >
            {/* {PropertyType} */}
            <RenderInput data={propertyType} />
          </motion.div>
        </div>
      </div>
    </aside>
  );
};

export default Filter;