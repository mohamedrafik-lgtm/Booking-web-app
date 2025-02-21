"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { dealsInput, sortInput } from "@/data/data";

const Filter = () => {
  const [openSections, setOpenSections] = useState({ sort: false, deals: false });

  const toggleSection = (section: 'sort' | 'deals') => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderSortInput = sortInput.map(({ id, label }) => (
    <div key={id} className="flex items-center space-x-2">
      <input type="radio" name="sort" id={id} className="peer hidden" />
      <label
        htmlFor={id}
        className="w-6 h-6 border peer-checked:border-4 border-gray-400 rounded-full flex items-center justify-center cursor-pointer peer-checked:border-black peer-checked:bg-transparent"
      ></label>
      <span className="text-lg">{label}</span>
    </div>
  ));

  const renderDealsInput = dealsInput.map(({ id, label }) => (
    <div key={id} className="flex items-center space-x-2">
      <input type="checkbox" name="deals" id={id} className="peer hidden" />
      <label
        htmlFor={id}
        className="w-6 h-6 border peer-checked:border-4 border-gray-400 rounded-md flex items-center justify-center cursor-pointer peer-checked:border-black peer-checked:bg-transparent"
      ></label>
      <span className="text-lg">{label}</span>
    </div>
  ));

  return (
    <aside className="w-56 px-3 py-5 space-y-5">
      <h3 className="text-2xl font-semibold text-orange-500">Filter</h3>
      <div className="space-y-2">
        <div>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => toggleSection("sort")}
          >
            <p className="text-lg font-semibold">Sort hotels by</p>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 mt-1 transform"
              animate={{ rotate: openSections.sort ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </motion.svg>
          </div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: openSections.sort ? 1 : 0, height: openSections.sort ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-3 space-y-1"
          >
            {renderSortInput}
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
            {renderDealsInput}
          </motion.div>
        </div>
      </div>
    </aside>
  );
};

export default Filter;