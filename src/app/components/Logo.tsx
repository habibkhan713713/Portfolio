"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Logo() {
  const MotionLink = motion(Link);
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        draggable="false"
        href={"/"}
        className="dark:!border-light  w-16 h-16 bg-dark rounded-full text-light border-2 flex items-center justify-center text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: {
            duration: 1,
            repeat: Infinity,
          },
        }}
      >
        CB
      </MotionLink>
    </div>
  );
}
