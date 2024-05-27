"use client";

import { Github, Home, Linkedin, Mail, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="bg-stone-950 mt-7 w-7/12 container relative mx-auto flex flex-col overflow-hidden px-4 py-5 lg:flex-row lg:items-center rounded-md">
  <Link href="/" className="flex items-center whitespace-nowrap text-2xl font-black">
    <span className="mr-12 w-8">
      <Home className="text-gray-800 hover:text-gray-300 ml-16 bg-white h-12 w-12 p-2 rounded-full"/>
    </span>
  </Link>
  <input type="checkbox" className="peer hidden" id="navbar-open" />
  <label className="absolute text-white top-5 right-5 cursor-pointer lg:hidden" htmlFor="navbar-open">
    <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </label>
  <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
    <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
      
      <li className="lg:mr-12"><Link className="rounded text-lg font-semibold text-gray-300 hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Work</Link></li>
      <li className="lg:mr-12"><Link className="rounded text-lg font-semibold text-gray-300 hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">Blogs</Link></li>
      <li className="lg:mr-12"><Link className="rounded text-lg font-semibold text-gray-300 hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#">About</Link></li>
    </ul>

  </nav>
  <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 flex-col w-full mt-9 lg:mt-0 items-center overflow-hidden transition-all  lg:max-h-full lg:flex-row">
    <ul className="flex w-full justify-center flex-row items-center  lg:flex-row lg:justify-center lg:space-y-0 ">
      <li className="lg:mr-12 mr-6"><Link className="rounded-full text-lg font-semibold text-gray-300 hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#"><Github className="bg-gray-800 rounded-full h-10 w-10 p-2"/></Link></li>
      <li className="lg:mr-12 mr-6"><Link className="rounded text-lg font-semibold text-gray-300 hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#"><Linkedin className="bg-gray-800 rounded-full h-10 w-10 p-2"/></Link></li>
      <li className="lg:mr-12"><Link className="rounded text-lg font-semibold text-gray-300 hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2" href="#"><Mail className="bg-gray-800 rounded-full h-10 w-10 p-2"/></Link></li>
    </ul>

  </nav>
</div>

  );
}