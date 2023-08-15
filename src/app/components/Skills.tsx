"use client";
import { motion } from "framer-motion";
export default function Skills() {
   function Skill({name, x, y,className}:any) {
    return (
      <>
        <motion.div
          className={`absolute cursor-pointer text-center flex h-16 w-16 items-center justify-center rounded-full font-medium bg-yellow-500 text-light  shadow-dark ${className}`}
          whileHover={{ scale: 1.05 }}
          initial={{x:0,y:0}}
          whileInView={{x:x,y:y}}
          transition={{duration:1.5,scale:{duration: 0.05 ,}}}
          viewport={{once:true}}
        >
          {name}
        </motion.div>
      </>
    );
  };
  return (
    <>
      <h2 className="select-none font-bold text-8xl mt-16 w-full text-center dark:text-light">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      ">
       <Skill name="Web" x={0} y={0} className="!shadow-xl !shadow-yellow-600"></Skill>
      <Skill name="HTML" x={"-5vw"} y={"-4vw"} className="!bg-red-500 !shadow-xl !shadow-red-600"></Skill>
      <Skill name="CSS" x={"-5vw"} y={"8vw"} className=" !bg-slate-500 !shadow-xl !shadow-slate-600"></Skill>
      <Skill name="JavaScript" x={"6vw"} y={"-8vw"} className="h-24 w-24 !bg-rose-500 !shadow-xl !shadow-rose-600"></Skill>
      <Skill name="TypeScript" x={"-22vw"} y={"-4vw"} className="h-24 w-24 !bg-zinc-500 !shadow-xl !shadow-zinc-600"></Skill>
      <Skill name="Tailwind" x={"14vw"} y={"12vw"} className=" !bg-green-500 !shadow-xl !shadow-green-600"></Skill>
      <Skill name="Mongo DB" x={"22vw"} y={"4vw"} className=" !bg-emerald-500 !shadow-xl !shadow-emerald-600"></Skill>
      <Skill name="Next JS" x={"20vw"} y={"-15vw"} className=" !bg-amber-500 !shadow-xl !shadow-amber-600"></Skill>
      <Skill name="React" x={"-24vw"} y={"12vw"} className=" !bg-blue-500 !shadow-xl !shadow-blue-600"></Skill>

      </div>
    </>
  );
}
