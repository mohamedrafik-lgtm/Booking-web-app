"use client"; 

import Link from "next/link";
import UserMenu from "./Menu";

const Navbar = () => {
   
    const isLogged = true;

  return (
    <header className="bg-white shadow-sm">
      <nav className="flex justify-between items-center py-4 px-8 max-w-7xl mx-auto">
       
        <Link href={'/'}>
          <div className="text-left flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4"
              stroke="currentColor"
              className="w-8 h-8 text-orange-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <h1 className="text-orange-500 text-2xl font-semibold ml-2">Cleartrip</h1>
          </div>
        </Link>
        {!isLogged ?  <div className="px-5 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 cursor-pointer transition duration-300">
          <Link href={"/user/login"}>Login</Link> / <Link href={"/user/register"}>Register</Link>
        </div> : <UserMenu/>}
       
      </nav>
    </header>
  );
};

export default Navbar;
