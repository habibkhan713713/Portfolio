"use client";
import { motion, useScroll } from "framer-motion";
export default function Liicon({ ref, className }: any) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });

  return (
    <figure className={`absolute stroke-dark dark:stroke-light -left-[120px]  ${className}`}>
      <svg
        className="-top-8 absolute "
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          className="stroke-primary dark:stroke-primaryDark  fill-none dark:fill-light stroke-1"
          cx="75"
          cy="75"
          r="20"
        />
        <motion.circle
          className="fill-light dark:fill-dark stroke-[5px]"
          cx="75"
          cy="75"
          r="20"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          className="animate-pulse fill-primary dark:fill-primaryDark stroke-1"
          cx="75"
          cy="75"
          r="10"
        />
      </svg>
    </figure>
  );
}
