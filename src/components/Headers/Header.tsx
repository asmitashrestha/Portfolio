"use client";

import { Home, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex justify-between mx-16 mt-7 bg-gray-900 py-3 px-3
    rounded-md">
      <div className="">
        <Link href="/">
          <Home className="bg-white h-11 w-11 rounded-full" />
        </Link>
      </div>
      <div className="">
        <button onClick={toggleMenu}>
          <Menu className="bg-white" />
        </button>
        {menuOpen && (
          <div className="text-white">
            <Link href={"/about"}>About Me</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/works"}>works</Link>
          </div>
        )}
      </div>
    </div>
  );
}
