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
        duartion: 0.2,
      },
    },
  };

  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center">
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`${className} w-full inline-block text-dark font-bold capitalize text-6xl`}
      >
        {text.split(" ").map((word: any, index: any) => {
          return (
            <motion.span
              variants={singleWord}
              className="inline-block "
              key={`${word}-${index}`}
            >
              {word}&nbsp;
            </motion.span>
          );
        })}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
