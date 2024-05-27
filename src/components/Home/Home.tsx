"use client";

import Image from "next/image";
import Link from "next/link";

export default function Homes() {
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex border border-gray-600 rounded-3xl p-3">
          <p className=" bg-green-500 rounded-full h-3 w-3 mt-1"></p>
          <p className="text-gray-300 ml-2 text-[13px] font-serif font-semibold">
            Available for Work
          </p>
        </div>
        <div className="mt-9">
          <p className="font-serif font-bold text-[40px] text-white">I'm Asmita Shrestha.</p>
          <p className="font-serif font-bold text-[40px] text-white">I Code , Create</p>
          <div className="flex">
            <p className="font-serif font-bold text-[40px] text-white">Innovate </p>
            <p className=" bg-yellow-700 rounded-full h-3 w-3 mt-8 ml-2"></p>
          </div>
          <div className="font-sans text-xl text-gray-400 ">
            <p>Empowering Ideas Through End-to-End</p>
            <p>Development Expertise and Seamless User</p>
            <p>Interfaces</p>
          </div>
        </div>
        <div className="flex">
          <Link href={'/'}>Let's Talk</Link>
          <Link href={'/'}>Browse Works</Link>
        </div>
      </div>
      <div>
        <div>
          {/* <Image src={me}/> */}
        </div>
      </div>
    </div>
  );
}
