"use client";

import { easeIn, motion } from "framer-motion";
import ButtonAboutMe from "../ButtonAboutMe/ButtonAboutMe";
import Heading from "../Heading/Heading";
import Worksdone from "../Worksdone/Worksdone";
import { useInView } from "react-intersection-observer";
import { Download } from "lucide-react";


export default function Works() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handlePdfDownload = ()=>{
   const link = document.createElement('a')
   link.href = '/cv.pdf';
   link.download = 'cv.pdf';
   document.body.appendChild(link);
   link.click()
   document.body.removeChild(link)

  }

  return (
    <>
      <motion.div
        ref={headingRef}
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: headingInView ? 0 : 100,
          opacity: headingInView ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          damping: 200,
          ease: easeIn,
        }}
        className="flex justify-center"
      >
        <div className="flex justify-center items-center border border-gray rounded-3xl py-3 w-56 px-2 mt-10">
          <p className=" bg-green-500 rounded-full h-3 w-3 mt-1"></p>
          <p className="text-gray ml-2 text-[13px] font-serif font-semibold">
            Available for Work
          </p>
        </div>
      </motion.div>
      <motion.div
        ref={headingRef}
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: headingInView ? 0 : 100,
          opacity: headingInView ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          damping: 200,
          ease: easeIn,
        }}
        className="pt-5 "
      >
        <Heading title="My Best Creations" />
        <p className="text-gray flex justify-center items-center text-center text-xl  py-5 space-y-2">
          Developing Robust and Stylish Web Applications for <br /> a Decade and
          Counting
        </p>
        <div className="flex mx-auto justify-center gap-2">
          <ButtonAboutMe title="about me" />
          <div className="flex justify-center text-center ">
            <button
              onClick={handlePdfDownload}
              className="text-white hover:bg-darkgray border flex border-gray rounded-3xl py-3 px-5"
            >
              <Download className="mr-3" />
              pdf
            </button>
          </div>
        </div>

        <Worksdone />
      </motion.div>
    </>
  );
}
