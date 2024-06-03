import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import reactLogo from "../../../public/react.png";
import nodeLogo from "../../../public/node.jpg";
import nextLogo from "../../../public/next.jpg";
import mongoLogo from "../../../public/mongo.png";
import postgresLogo from "../../../public/postgres.png";
import gitLogo from "../../../public/git.png";
import tailwindLogo from "../../../public/tailwind.png";
import htmlLogo from "../../../public/html.png";
import cssLogo from "../../../public/css.png";
import jsLogo from "../../../public/js.png";
import tsLogo from "../../../public/ts.png";
import Heading from "../Heading/Heading";
import Link from "next/link";

export default function MyStack() {
  const tools2 = [
    {
      logo: htmlLogo,
      title: "HTML",
      description: "Structuring Language",
    },
    {
      logo: cssLogo,
      title: "CSS",
      description: "Styling Language",
    },
    {
      logo: jsLogo,
      title: "JS",
      description: "JavaScript",
    },
    {
      logo: tsLogo,
      title: "TS",
      description: "TypeScript",
    },
    {
      logo: tailwindLogo,
      title: "Tailwind",
      description: "Styling Language",
    },
    {
      logo: reactLogo,
      title: "React.js",
      description: "JavaScript Library",
    },
    {
      logo: nodeLogo,
      title: "Node.js",
      description: "JavaScript Runtime",
    },
    {
      logo: nextLogo,
      title: "Next.js",
      description: "JavaScript Framework",
    },
    {
      logo: mongoLogo,
      title: "MongoDB",
      description: "NoSQL Database",
    },
    {
      logo: postgresLogo,
      title: "PostgresSQL",
      description: "SQL Database",
    },
    {
      logo: gitLogo,
      title: "Git",
      description: "Version Control",
    },
  ];

  return (
    <div className="pb-5">
       <div className="mx-auto max-w-sm md:max-w-4xl   bg-stone-950 rounded-3xl  justify-center text-center items-center mb-7">
      <div className="pt-4">
        <Heading title="My Stack" />
      </div>
        <div className="p-5 ">
          <Marquee velocity={0.03} pauseOnClick={true}>
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
          <Marquee velocity={0.03} direction="right" pauseOnClick={true}>
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
      {/* <div className="flex justify-center">
        <Link href={'/about'} className="border border-gray 
        py-3 px-5 rounded-3xl text-gray">Know More About Me</Link>
      </div> */}
    </div>
   
    
  );
}
