import { easeIn, motion } from "framer-motion";
import Heading from "../Heading/Heading";
import MyDescription from "../MyDescription/MyDescription";
import MyDetails from "../MyDetails/MyDetails";
import MyExperience from "../MyExperience/MyExperience";
import MyStack from "../MyStack/MyStack";
import { useInView } from "react-intersection-observer";

export default function AboutMe() {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className="pt-16">
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
        className="text-[30px]"
      >
        <Heading title={"About Me"} />
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
          duration: 0.3,
        }}
        className="mx-auto max-w-sm md:max-w-4xl mt-9 flex flex-col md:flex-row justify-center  "
      >
        <MyDetails />

        <div className="mt-2">
          <MyDescription />
          <MyExperience />
        </div>
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
          duration: 0.4,
        }}
      >
        <MyStack />
      </motion.div>
    </div>
  );
}
