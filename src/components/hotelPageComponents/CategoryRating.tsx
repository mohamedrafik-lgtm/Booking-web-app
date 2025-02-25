import React from "react";
import { FaHeart, FaUsers, FaUser, FaHome, FaBriefcase } from "react-icons/fa";

const CategoryRatings = () => {
  const categories = [
    { name: "COUPLES", rating: 4.8, color: "bg-[#FFF1ED]", icon: <FaHeart className="text-red-500" /> },
    { name: "FRIENDS", rating: 5.0, color: "bg-[#ECF9FB]", icon: <FaUsers className="text-[#0FBACB]" /> },
    { name: "SOLO", rating: 4.6, color: "bg-[#F2FAF0]", icon: <FaUser className="text-[#61C149]" /> },
    { name: "FAMILY", rating: 4.8, color: "bg-[#FFF9EC]", icon: <FaHome className="text-[#FDBA12]"/> },
    { name: "BUSINESS", rating: 4.5, color: "bg-purple-100", icon: <FaBriefcase className="text-purple-500" /> },
  ];

  return (
    <div>
      <div className="flex justify-between p-4">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center">
            <div className={`p-3 rounded-full ${category.color} text-`}>{category.icon}</div>
            <span className="mt-2 text-sm font-medium text-gray-700">{category.name}</span>
            <span className="text-lg font-bold">{category.rating}</span>
          </div>
        ))}
      </div>
      <div className="p-2 border-t border-dashed border-gray-200">
        <p className="opacity-75">AI generated summary from recent guest reviews</p>
      </div>
    </div>
  );
};

export default CategoryRatings;
