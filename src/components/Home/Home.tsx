"use client";

import Image from "next/image";
import Link from "next/link";
import me from "../../../public/asmita.jpg";
import SocialMedia from "../SocialMedia/SocialMedia";
import { easeIn, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Homes() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className="flex justify-between mt-24 md:mx-auto max-w-sm 
       md:max-w-4xl lg:flex-row ml-7 
     "
    >
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
        className="max-w-[800px] "
      >
        <div className="flex border border-gray-600 rounded-3xl py-3 w-56 px-2">
          <p className=" bg-green-500 rounded-full h-3 w-3 mt-1"></p>
          <p className="text-gray ml-2 text-[13px] font-serif font-semibold">
            Available for Work
          </p>
        </div>

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
            duration: 0.5,
            damping: 200,
            ease: easeIn,
          }}
          className="mt-3 mb-7"
        >
          <div className="flex">
            <h1 className="font-serif font-bold text-[40px] text-white">
              I'm Asmita Shrestha<span className=" text-yellow rounded-full text-6xl mt-8 ml-2 ">.</span>
            </h1>
            
          </div>

          <h1 className="font-serif font-bold text-[40px] text-white">
            I Code <span className="text-yellow font-bold text-[50px]"> *</span>{" "}
            Create
          </h1>
          <div className="flex">
            <h1 className="font-serif font-bold text-[40px] text-white">
              <span className="text-yellow font-bold text-[50px] mr-2"> *</span>
              Innovate{" "}
            </h1>
            <p className=" bg-yellow rounded-full h-3 w-3 mt-11 ml-2 "></p>
          </div>
          <div className="font-sans text-xl text-gray mt-3 ">
            <p>Empowering Ideas Through End-to-End</p>
            <p>Development Expertise and Seamless User</p>
            <p>Interfaces</p>
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
            duration: 0.7,
            damping: 200,
            ease: easeIn,
          }}
          className="flex text-gray-300 justify-start  space-x-2"
        >
          <div className="">
            <Link
              href={"/about"}
              className="bg-yellow text-stone-800 px-4 py-[12px] rounded-[6px]"
            >
              Let's Talk
            </Link>
          </div>
          <div className="">
            <Link
              href={"/"}
              className="border-gray-50 border px-[24px] py-[12px] rounded-[6px] text-gray"
            >
              Browse Works
            </Link>
          </div>
        </motion.div>
      </motion.div>
      <div className="max-w-72 relative hidden md:block">
        <div className="flex justify-center text-center">
          <Image
            src={me}
            alt="My Profile"
            className="w-56 h-56 rounded-full  border-yellow border-[18px]"
          />
        </div>
        <div className="absolute top-[205px]">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}
