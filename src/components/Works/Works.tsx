'use client'

import ButtonAboutMe from "../ButtonAboutMe/ButtonAboutMe"
import Heading from "../Heading/Heading"
import Worksdone from "../Worksdone/Worksdone"

export default function Works() {
  return (
    <>
    <div className="flex justify-center">
         <div className="flex justify-center items-center border border-gray rounded-3xl py-3 w-56 px-2 mt-10">
          <p className=" bg-green-500 rounded-full h-3 w-3 mt-1"></p>
          <p className="text-gray ml-2 text-[13px] font-serif font-semibold">
            Available for Work
          </p>
        </div></div>
        <div className="pt-5">
          <Heading title="My Best Creations"/>
          <p className="text-gray flex justify-center items-center text-center text-xl  py-5 space-y-2">Developing Robust and Stylish Web Applications for <br /> a Decade and Counting</p>
          <ButtonAboutMe title="about me"/>
          <Worksdone/>
        </div>
    </>
    
      
    
  )
}
