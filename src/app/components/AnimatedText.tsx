"use client";
import { motion } from "framer-motion";
const AnimatedText = ({ className , text }: any) => {
  const quote = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration : 0.01,
        delay:0.0001,
        staggerChildren: 0.02,
      },
    },
  };

  const singleWord = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={` w-full  text-dark font-bold capitalize 2xl:text-6xl xl:text-2xl flex items-center justify-center flex-wrap ${className} `}
      >
        {text.split(" ").map((word: any, index: any) => {
          return (
            <motion.span
              variants={singleWord}
              className={`inline-block 2xl:text-8xl xl:text-[5.4rem]  ${className} md:font-[900]`}
              key={`${word}-${index}`}
            >
              {word}&nbsp;&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
