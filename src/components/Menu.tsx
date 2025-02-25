"use client"
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, LogOut } from "lucide-react";
import img from "@/images/userimg/Screenshot 2025-02-25 100201.png"
const userMenuItems = [
  { name: "Profile", href: "/profile" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Settings", href: "/settings" },
];

const UserMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    return (
      <div className="relative z-10" ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-4 py-2 rounded-lg transition duration-300 focus:outline-none"
        >
          <Image
            src={img.src}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="hidden md:block ml-2 font-medium text-black">mohamed</span>
          <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 text-black ${isOpen ? "rotate-180" : "rotate-0"}`} />
          
        </button>
        <div
          className={`absolute right-0 mt-2 w-56 bg-white text-black border rounded-lg shadow-lg py-2 transition-opacity duration-500 transform ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        >
          {userMenuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-3 hover:bg-gray-100 transition duration-300 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <hr className="border-gray-700" />
          <Link
            href="/user/login"
            className="flex items-center px-4 py-3 text-red-500 font-semibold hover:bg-gray-100 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            <LogOut className="mr-2 w-5 h-5" /> Logout
          </Link>
        </div>
      </div>
    );
  };

export default UserMenu;


