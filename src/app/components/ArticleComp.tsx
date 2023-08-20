"use client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import { usePathname } from "next/navigation";

export const FeaturedArticle = ({
  para,
  title,
  image,
  link,
  readtime,
}: any) => {


  return (
    <>
      <article
        className="p-12 xl:p-6 xl:py-8 col-span-6 md:mt-6 flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-solid dark:bg-dark dark:shadow-solid-light dark:border-light
        xl:h-[30rem]  lg:h-auto
        "
      >
        <Link
          className="w-full cursor-pointer rounded-lg overflow-hidden"
          target="_blank"
          href={link}
        >
          <Image
            className="w-full h-auto hover:scale-105 transition-all ease-linear duration-100"
            alt={title}
            src={image}
            sizes="(max-width:768px) 100vw,
              (max-width:1200px) 50vw,
              50vw"
          ></Image>
        </Link>

        <div className="w-full  flex flex-col items-start justify-between ">
          <Link
            className=" hover:underline underline-offset-2"
            target="_blank"
            href={link}
          >
            <h3 className="capitalize my-2 w-full text-left text-3xl font-bold dark:text-light xl:text-xl lg:text-base lg:my-1">
              {title}
            </h3>{" "}
          </Link>
          <p className="text-dark/80 text-base dark:text-slate-400 xl:text-sm lg:text-xs">
            {para}
          </p>
          <span className="text-primary font-medium pt-4 text-lg dark:text-primaryDark xl:text-base lg:text-sm">
            {readtime}&nbsp;min read
          </span>
        </div>
      </article>
    </>
  );
};

const FramerImage = motion(Image);
export const MovingImg = ({ title, img, link, date }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef: any = useRef(null);

  function handleMouse(event: any) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX - 350);
    y.set(-10);
  }
  function handleMouseLeave(event: any) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  const path = usePathname()


  return (
   
    <>
      <motion.article
        initial={{ y: 200 }}
        whileInView={{
          y: 0,
          transition: { duration: 0.2, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="group border shadow-medium border-dark rounded-xl lg:flex-col w-full flex flex-row items-center justify-between h-auto py-6 px-4 dark:border-light dark:shadow-medium-light lg:py-4"
      >
        <Link
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
          href={`${path}/${link}`}
          className="relative  w-[80%] hover:underline  h-auto capitalize text-xl font-bold dark:text-light xl:text-base text-clip lg:text-sm"
        >
          {title}
          <FramerImage
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
            style={{ x: x, y: y }}
            className="rounded-xl border border-black absolute hidden z-10 lg:!hidden"
            ref={imgRef}
            alt={title}
            src={img}
            height={300}
            width={300}
            loading="lazy"
          ></FramerImage>
        </Link>
        <span className="text-primary text-lg font-medium dark:text-primaryDark xl:text-base lg:text-sm lg:pt-4">
          {date}
        </span>
      </motion.article>
    </>
  );
};
