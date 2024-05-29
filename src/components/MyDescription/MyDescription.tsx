'use client'
import Image from "next/image";
import me from "@assets/asmita.jpg";

function MyDescription() {
  return (
    <div className="flex space-x-7 mb-2  bg-yellow w-[400px] md:w-[460px] rounded-2xl p-5 m-2">
      <div className="">
        <Image
          src={me}
          alt="my profile"
          className="h-20 w-20 rounded-full bg-darkgray"
        />
      </div>
      <div className="">
        <h1 className="font-serif text-2xl font-semibold text-darkgray mb-4">
          Asmita Shrestha
        </h1>
        <p className="font-sans text-darkgray">
          Experienced full stack developer skilled in <br />
          crafting web applications that combine <br />
          sleek front-end design with robust <br />
          backend functionality using Node.js <br /> and React.js/Next.js
        </p>
      </div>
    </div>
  );
}

export default MyDescription;
