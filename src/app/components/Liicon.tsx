"use client";
import { motion, useScroll } from "framer-motion";
export default function Liicon({ refer, className }: any) {
  const { scrollYProgress } = useScroll({
    target: refer,
    offset: ["center end", "center center"],
  });

  return (
    <figure className={`absolute stroke-dark -left-[120px]  ${className}`}>
      <svg
        className="-top-8 absolute "
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          className="stroke-primary fill-none stroke-1"
          cx="75"
          cy="75"
          r="20"
        />
        <motion.circle
          className="fill-light stroke-[5px]"
          cx="75"
          cy="75"
          r="20"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          className="animate-pulse fill-primary stroke-1"
          cx="75"
          cy="75"
          r="10"
        />
      </svg>
    </figure>
  );
}