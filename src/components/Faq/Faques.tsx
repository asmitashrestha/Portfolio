import { easeIn, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Heading from "../Heading/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { accordionData } from "../Constant/Constant";

export default function Faques() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1, 
  });

  return (
    <div className="mx-auto max-w-sm md:max-w-4xl pb-12">
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
        className="pt-7 pb-14"
      >
        <Heading title="FAQs" />
      </motion.div>
      <motion.div
        ref={contentRef}
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: contentInView ? 0 : 100,
          opacity: contentInView ? 1 : 0,
        }}
        transition={{
          duration: 0.5,
          damping: 200,
          ease: easeIn,
        }}
      >
        <Accordion
          type="single"
          collapsible
          className="text-white grid gap-9 grid-cols-2"
        >
          {accordionData.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-none rounded-2xl bg-darkgray p-3"
            >
              <AccordionTrigger className="font-serif text-xl pb-5">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-gray text-[16px] font-sans">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}

