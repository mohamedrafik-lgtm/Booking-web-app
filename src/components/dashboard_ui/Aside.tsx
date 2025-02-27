"use client"
import Link from "next/link";
import { Home, Settings, LogOut ,Menu ,Hotel,Plus,MessageCircle,} from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: <Home className="w-5 h-5" /> },
  { name: "Add Hotel", href: "#", icon: <Plus className="w-6 h-6" /> },
  { name: "Hotels", href: "#", icon: <Hotel className="w-6 h-6" /> },
  { name: "Bookings", href: "#", icon: 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
   },
   { name: "Messages", href: "/dashboard/Massages", icon: <MessageCircle className="w-6 h-6" /> },
  { name: "Settings", href: "#", icon: <Settings className="w-5 h-5" /> },
];
const Aside = () =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <aside className={`p-5 flex flex-col bg-white border-r  border-t transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-20"}`}>
        <button
          className="mb-5 p-2 w-fit border border-black rounded-lg hover:bg-black hover:text-white transition duration-300"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="w-6 h-6 " />
        </button>
        <nav className="flex-1">
          {sidebarItems.map((item) => (
            <Link key={item.name} href={item.href} className={`flex ${isSidebarOpen ? "": "justify-center"} items-center px-4 py-3 hover:bg-black hover:text-white rounded-lg transition duration-150`}>
              <span className="w-8 h-8 flex items-center justify-center">{item.icon}</span>
              <span className={`ml-3 transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 hidden"}`}>{item.name}</span>
            </Link>
          ))}
        </nav>
        <Link href="/" className="flex items-center px-4 py-3 text-red-500 hover:bg-gray-800 rounded-lg transition">
          <span className="w-8 h-8 flex items-center justify-center"><LogOut className="w-6 h-6" /></span>
          <span className={`transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 hidden"}`}>Logout</span>
        </Link>
      </aside>
    )
}
export default Aside;