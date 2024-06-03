import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { works } from "../Data/Data"; // Import works data
import { MoveUpRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { easeIn, motion } from "framer-motion";

interface ProjectCardProps {
  img: StaticImageData ;
  github: string;
  tools: string;
  title: string;
  description: string;
}

interface WorkdoneProps {
  limit?: number;
}

export default function Worksdone({limit}: WorkdoneProps) {
  const displayWorks = limit ? works.slice(0,limit) : works
  
  return (
    <div className="flex justify-center">
      <div className="mt-7 flex md:flex-row flex-col flex-wrap max-auto 
      max-w-sm md:max-w-4xl">
        {displayWorks.map((work, index) => (
          <ProjectCard
            key={index}
            img={work.img}
            github={work.github}
            tools={work.tools}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  img,
  github,
  tools,
  title,
  description,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
 
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  return (
    <motion.div 
    ref={headingRef}
    initial={{
      y: 100,
      opacity:0,
    }}
    animate=
    {{
      y: headingInView ? 0 : 100,
      opacity: headingInView ? 1 : 0,
    }}
    transition={{
      duration:0.3,
      damping: 200,
      ease: easeIn
    }}
      className="relative rounded-3xl hover:shadow-lg hover:shadow-yellow m-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="absolute top-6 left-3 text-white bg-darkgray px-3 py-1 rounded-3xl">
        {tools}
      </p>

      <Image
        src={img}
        alt="project"
        className={`h-80 w-[405px] rounded-3xl border-4 border-yellow ${
          isHovered ? "filter brightness-75" : ""
        }`}
      />

      {isHovered && (
        <Link
          href={github}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className=" bg-darkgray rounded-full p-6">
            <MoveUpRight className="text-yellow font-bold text-2xl"/>
          </div>
        </Link>
      )}

      <div className="absolute bottom-10 left-3">
        <h1 className="font-serif text-lightyellow text-xl font-bold">{title}</h1>
        <p className="font-sans text-lightyellow text-lg">{description}</p>
      </div>
    </motion.div>
  );
}
