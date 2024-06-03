"use client";

import { Github, Home, Linkedin, Mail, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="bg-stone-950 mt-7 mx-auto max-w-sm md:max-w-4xl container relative  flex flex-col overflow-hidden px-[16px] pt-3  justify-center items-center rounded-md">
      <Link
        href="/"
        className="flex pt-9 items-center whitespace-nowrap text-2xl 
  font-black "
      >
        <span className="mx-auto ">
          <Home
            className="text-stone-800 hover:text-slate-700
       bg-white h-12 w-12 p-2 rounded-full"
          />
        </span>
      </Link>

      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full mx-auto items-center overflow-hidden transition-all  lg:max-h-full flex-row py-9"
      >
        <ul
          className="flex w-full  items-center space-y-2 flex-row
    pt-7 justify-center lg:space-y-0"
        >
          <li className="px-12">
            <Link
              className="rounded text-lg font-semibold text-gray hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="/work"
            >
              Work
            </Link>
          </li>
          <li className="px-12">
            <Link
              className="rounded text-lg font-semibold text-gray hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="/blog"
            >
              Blogs
            </Link>
          </li>
          <li className="px-12">
            <Link
              className="rounded text-lg font-semibold text-gray hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 mx-auto peer-checked:max-h-60 flex pb-20 w-full mt-9  items-center overflow-hidden transition-all  max-h-full flex-row"
      >
        <ul className="flex w-full  items-center flex-row justify-center space-y-0 ">
          <li className="lg:mr-9 mr-6">
            <Link
              className="rounded-full text-lg font-semibold text-gray hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="https://github.com/asmitashrestha"
            >
              <Github className="bg-stone-900 rounded-full h-12 w-12 p-2" />
            </Link>
          </li>
          <li className="lg:mr-9 mr-6">
            <Link
              className="rounded text-lg font-semibold text-gray hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="https://www.linkedin.com/in/asmita-shrestha-399027217/"
            >
              <Linkedin className="bg-stone-900 rounded-full h-12 w-12 p-2" />
            </Link>
          </li>
          <li className="">
            <Link
              className="rounded text-lg font-semibold text-gray hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl"
            >
              <Mail className="bg-stone-900 rounded-full h-12 w-12 p-2" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
