import { easeIn, motion } from "framer-motion";
import Heading from "../Heading/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Faques() {
  return (
    <div className="mx-auto max-w-sm md:max-w-4xl pb-12">
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
        className="pt-7 pb-14"
      >
        <Heading title="FAQs" />
      </motion.div>
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
          duration:0.5,
          damping:200,
          ease:easeIn
        }}
      >
        <Accordion
          type="single"
          collapsible
          className="text-white grid gap-9 grid-cols-2"
        >
          <AccordionItem
            value="item-1"
            className="border-none rounded-2xl 
        bg-darkgray p-3"
          >
            <AccordionTrigger className="font-serif text-xl pb-5">
              What technologies are you proficient in ?
            </AccordionTrigger>
            <AccordionContent className="text-gray text-[16px] font-sans">
              I'm proficient in a wide range of technologies including HTML,CSS,
              Typescript, Javascript, React, Node.js, Tailwind CSS and Next.js .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border-none rounded-2xl  bg-darkgray p-3"
          >
            <AccordionTrigger className="font-serif text-xl pb-5">
              Are you available for freelance work ?
            </AccordionTrigger>
            <AccordionContent className="text-gray text-[16px] font-sans">
              No, currently I don't do any freelance work.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border-none rounded-2xl   bg-darkgray p-3"
          >
            <AccordionTrigger className="font-serif text-xl pb-5">
              Can you customize existing websites ?
            </AccordionTrigger>
            <AccordionContent className="text-gray text-[16px] font-sans">
              Absolutely , I can modify and enhance existing websites to meet
              your requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border-none rounded-2xl  bg-darkgray p-3"
          >
            <AccordionTrigger className="font-serif text-xl pb-5">
              What's your approach to project development ?
            </AccordionTrigger>
            <AccordionContent className="text-gray text-[16px] font-sans">
              I follow an agile development approach, ensuring transparency and
              adaptability throughout the project.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border-none rounded-2xl   bg-darkgray p-3"
          >
            <AccordionTrigger className="font-serif text-xl pb-5">
              Can you handle both small and large-scale projects ?
            </AccordionTrigger>
            <AccordionContent className="text-gray text-[16px] font-sans">
              Yes, I'm equipped to handle projects of all sizes, from small
              businesses to large enterprises.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border-none rounded-2xl  bg-darkgray p-3"
          >
            <AccordionTrigger className="font-serif text-xl pb-5">
              What's your preferred stack for front-end development ?
            </AccordionTrigger>
            <AccordionContent className="text-gray text-[16px] font-sans">
              I prefer using modern front-end technologies like React and
              Next.js for building dynamic user interfaces.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
}
