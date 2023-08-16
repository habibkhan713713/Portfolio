"use client"
import Liicon from "./Liicon";
import {motion,useScroll} from "framer-motion"
import { useRef } from "react";
function Details({ position, company, comapnyLink, time, address, work }: any) {
     const ref = useRef(null)
    return (
    <li ref = {ref} className="font-mono text-lg my-8 first:mt-0 last:mb-0 w-[100%] mx-auto flex  flex-col items-center justify-between">
     <Liicon className="" ref={ref}></Liicon>
      <motion.div
      initial= {{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5,type:"spring"}}
      >
        <h3 className="capitalize font-bold md:text-lg md:!font-extrabold">
          {position} &nbsp;
          <a
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark md:font-light md:text-base"
            href={comapnyLink}
          >
            @ &nbsp;{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-slate-400 md:text-base">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
}

export default function Experience() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {target : ref
        ,offset : ["start end","center start"]
        }
    )
  return (
    <div className="mt-40 xl:mt-20 md:mt-0">
      <h1 className="font-bold text-8xl mb-32 xl:mb-16 w-full text-center dark:text-light xl:text-6xl md:text-4xl md:mb-8">
        {" "}
        Experience{" "}
      </h1>
      <div className="w-[75%]  mx-auto relative ">
    <motion.div
    style={{scaleY:scrollYProgress}}
    ref={ref} className="absolute top-4 -left-16 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top md:-left-1"/>



        <ul className="flex w-full flex-col items-start justify-between ml-20 mb-32 xl:mb-8 dark:text-light md:mb-10 md:ml-6">
          <Details
            position="Computer Science Student"
            company="NUST"
            time="2021-present"
            address="NUST , H-12 , Islamabad "
            work="Full Time Computer Science student with interest in Metaverse and Web 3."
          ></Details>

          <Details
            position="Computer Science Student"
            company="NUST"
            time="2021-present"
            address="NUST , H-12 , Islamabad "
            work="Full Time Computer Science student with interest in Metaverse and Web 3."
          ></Details>

          <Details
            position="Computer Science Student"
            company="NUST"
            time="2021-present"
            address="NUST , H-12 , Islamabad "
            work="Full Time Computer Science student with interest in Metaverse and Web 3."
          ></Details>

          <Details
            position="Computer Science Student"
            company="NUST"
            time="2021-present"
            address="NUST , H-12 , Islamabad "
            work="Full Time Computer Science student with interest in Metaverse and Web 3."
          ></Details>

          <Details
            position="Computer Science Student"
            company="NUST"
            time="2021-present"
            address="NUST , H-12 , Islamabad "
            work="Full Time Computer Science student with interest in Metaverse and Web 3."
          ></Details>
        </ul>
      </div>
    </div>
  );
}
