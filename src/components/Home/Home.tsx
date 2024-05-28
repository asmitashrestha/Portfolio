"use client";

import Image from "next/image";
import Link from "next/link";
import me from '../../../public/asmita.jpg'
import SocialMedia from "../SocialMedia/SocialMedia";
export default function Homes() {
  return (
    <div
      className="flex justify-between mt-24 lg:ml-[18rem] ml-[2rem] lg:flex-row 
     "
    >
      <div className="max-w-[800px] ">
        <div className="flex border border-gray-600 rounded-3xl py-3 w-56 px-2">
          <p className=" bg-green-500 rounded-full h-3 w-3 mt-1"></p>
          <p className="text-gray-300 ml-2 text-[13px] font-serif font-semibold">
            Available for Work
          </p>
        </div>
        <div className="mt-9">
          <h1 className="font-serif font-bold text-[40px] text-white">
            I'm Asmita Shrestha.
          </h1>
          <h1 className="font-serif font-bold text-[40px] text-white">
            I Code , Create
          </h1>
          <div className="flex">
            <h1 className="font-serif font-bold text-[40px] text-white">
              Innovate{" "}
            </h1>
            <p className=" bg-yellow-700 rounded-full h-3 w-3 mt-8 ml-2"></p>
          </div>
          <div className="font-sans text-xl text-gray-400 ">
            <p>Empowering Ideas Through End-to-End</p>
            <p>Development Expertise and Seamless User</p>
            <p>Interfaces</p>
          </div>
        </div>
        <div className="flex text-gray-300 justify-start mt-9 space-x-2">
          <div className="">
            <Link
              href={"/"}
              className="bg-yellow text-gray-900 px-4 py-[12px] rounded-[6px]"
            >
              Let's Talk
            </Link>
          </div>
          <div className="">
            <Link href={"/"} className="border-gray-50 border px-[24px] py-[12px] rounded-[6px]">Browse Works</Link>
          </div>
        </div>
      </div>
      <div className="max-w-72 relative md:right-72 lg:right-56 hidden md:block">
        <div className="flex justify-center text-center">
          <Image src={me} alt="My Profile" className="w-56 h-56 rounded-full  border-yellow border-[18px]"/>
        </div>
        <div className="absolute top-[205px]">
          <SocialMedia/>
        </div>
      </div>
    </div>
  );
}
