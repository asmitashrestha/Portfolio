import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import Heading from "../Heading/Heading";
import Link from "next/link";
import { tools2 } from "../Data/Data";

export default function MyStack() {
  return (
    <div className="pb-5">
      <div className="mx-auto max-w-sm md:max-w-4xl   bg-stone-950 rounded-3xl  justify-center text-center items-center mb-7">
        <div className="pt-4">
          <Heading title="My Stack" />
        </div>
        <div className="p-5 ">
          <Marquee pauseOnClick={true}>
            {tools2?.map(({ logo, title, description }, index) => (
              <div
                key={index}
                className="flex bg-darkgray rounded-2xl px-4 py-2 flex-col md:flex-row items-center m-2 space-x-2"
              >
                <div>
                  <Image
                    src={logo}
                    alt={title}
                    className="w-18 h-18 rounded-full"
                    width="50"
                    height="50"
                  />
                </div>
                <div>
                  <p className="text-white font-serif text-xl">{title}</p>
                  <p className="text-gray ">{description}</p>
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee direction="right" pauseOnClick={true}>
            {tools2.map((tool, index) => (
              <div
                key={index}
                className="flex bg-darkgray rounded-2xl px-4 py-2 flex-col md:flex-row items-center m-2 space-x-2"
              >
                <div>
                  <Image
                    src={tool.logo}
                    alt={tool.title}
                    className="w-18 h-18 rounded-full"
                    width="50"
                    height="50"
                  />
                </div>
                <div>
                  <p className="text-white font-serif text-xl">{tool.title}</p>
                  <p className="text-gray ">{tool.description}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
