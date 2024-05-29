"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { easeIn, motion } from "framer-motion";

export default function SocialMedia() {
  return (
    <div>
      <nav
        aria-label="Header Navigation"
        className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 flex-col  mt-9 lg:mt-0 items-center overflow-hidden transition-all  lg:max-h-full lg:flex-row bg-slate-700 opacity-75 rounded-[30px] py-1 w-full ml-7"
      >
        <ul className="flex w-full justify-center flex-row items-center  lg:flex-row lg:justify-center lg:space-y-0 ">
          <li className="lg:mr-2 mr-6">
            <Link
              className="rounded-full text-lg font-semibold text-gray hover:text-white hover:bg-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="https://github.com/asmitashrestha"
            >
              <motion.div
               initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                damping: 200,
                ease: easeIn,
              }} 
              ><Github className="bg-slate-900 rounded-full h-10 w-10 p-2" /></motion.div>
              
            </Link>
          </li>
          <li className="lg:mr-2 mr-6">
            <Link
              className="rounded text-lg font-semibold text-gray hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:bg-gray-700"
              href="https://www.linkedin.com/in/asmita-shrestha-399027217/"
            >
             <motion.div 
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                damping: 200,
                ease: easeIn,
              }}><Linkedin className="bg-slate-900 rounded-full h-10 w-10 p-2" /></motion.div>

              
            </Link>
          </li>
          <li className="lg:mr-2">
            <Link
              className="rounded text-lg font-semibold text-gray hover:bg-slate-700 hover:text-white transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2"
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl"
            >
              <motion.div 
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                damping: 200,
                ease: easeIn,
              }}
              ><Mail className="bg-slate-900 rounded-full h-10 w-10 p-2" /></motion.div>
              
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
