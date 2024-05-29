import { easeIn, motion } from "framer-motion";
import Heading from "../Heading/Heading";
import MyDescription from "../MyDescription/MyDescription";
import MyDetails from "../MyDetails/MyDetails";
import MyExperience from "../MyExperience/MyExperience";
import MyStack from "../MyStack/MyStack";
import Footer from "../Footer/Footer";

export default function AboutMe() {
  return (
    <div className="pt-16">
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
        className="text-[30px]"
      >
        <Heading title={"About Me"} />
      </motion.div>

      <div className="mx-auto max-w-sm md:max-w-4xl mt-9 flex flex-col md:flex-row justify-center  ">
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
            duration: 0.4,
          }}
          className=""
        >
          <MyDetails />
        </motion.div>
        <div className="mt-2">
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
              duration: 0.5,
              damping: 200,
              ease: easeIn,
            }}
            className=""
          >
            <MyDescription />
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
              duration: 0.6,
              damping: 200,
              ease: easeIn,
            }}
            className=""
          >
            <MyExperience />
          </motion.div>
        </div>
      </div>
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
      >
        <MyStack/>
      </motion.div>
      <div>
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
      >
        <Footer/>
      </motion.div>
      </div>
    </div>
  );
}
