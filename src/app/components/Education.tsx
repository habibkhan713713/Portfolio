"use client"
import Liicon from "./Liicon";
import {motion,useScroll} from "framer-motion"
import { useRef } from "react";
function Details({ position, company, comapnyLink, time, address, work }: any) {
     const ref = useRef(null)
    return (
    <li ref = {ref} className="font-mono text-lg my-8 first:mt-0 last:mb-0 w-[100%] mx-auto flex  flex-col items-start justify-between">
     <Liicon className="" refer={ref}></Liicon>
      <motion.div
      initial= {{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5,type:"spring"}}
      >
        <h3 className="w-full inline-block capitalize font-bold text-2xl">
          {position} &nbsp;
          <a
            target="_blank"
            className="text-primary capitalize"
            href={comapnyLink}
          >
            @ &nbsp;{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        
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
    <div className="mt-40">
      <h1 className="font-bold text-8xl mb-32 w-full text-center">
        {" "}
        Education{" "}
      </h1>
      <div className="w-[75%]  mx-auto relative">
    <motion.div
    style={{scaleY:scrollYProgress}}
    ref={ref} className="absolute top-4 -left-16 w-[4px] h-full bg-dark origin-top"/>



        <ul className="flex w-full flex-col items-start justify-between ml-20 mb-32">
          <Details
            position="MATRIC "
            company="FBISE"
            time="2016-2018"
            address="IMCB , F-7/3 , Islamabad "
            
          ></Details>

          <Details
            position="FSC"
            company="FBISE"
            time="2018-2020"
            address="IMCB , F-8/4 , Islamabad "
           
          ></Details>

          <Details
            position="BS Science Student"
            company="NUST"
            time="2021-2025"
            address="NUST , H-12 , Islamabad "
            
          ></Details>

         
        </ul>
      </div>
    </div>
  );
}
