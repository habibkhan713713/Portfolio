"use client";
import Image from "next/image";
import Link from "next/link";
import article2 from "../../../public/images/Articles/article2.webp";
import article1 from "../../../public/images/Articles/article1.webp";
import AnimatedText from "../components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
function Page() {
  const FeaturedArticle = ({ para, title, image, link, readtime }: any) => {
    return (
      <>
        <article className="p-12 col-span-6 flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-solid dark:bg-dark dark:shadow-solid-light dark:border-light">
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
              <h3 className="capitalize my-2 w-full text-left text-3xl font-bold dark:text-light">
                {title}
              </h3>{" "}
            </Link>
            <p className="text-dark/80 text-base dark:text-slate-400">{para}</p>
            <span className="text-primary font-medium pt-4 text-lg dark:text-primaryDark">
              {readtime}&nbsp;min read
            </span>
          </div>
        </article>
      </>
    );
  };

  const FramerImage = motion(Image);
  const MovingImg = ({ title, img, link, date }: any) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef: any = useRef(null);

    function handleMouse(event: any) {
      imgRef.current.style.display = "inline-block";
      x.set(event.pageX - 100);
      y.set(-10);
    }
    function handleMouseLeave(event: any) {
      imgRef.current.style.display = "none";
      x.set(0);
      y.set(0);
    }
    return (
      <>
        <motion.article
          initial={{ y: 200 }}
          whileInView={{
            y: 0,
            transition: { duration: 0.2, ease: "easeInOut" },
          }}
          viewport={{ once: true }}
          className="group border shadow-medium border-dark rounded-xl  w-full flex flex-row items-center justify-between h-auto py-6 px-4 dark:border-light dark:shadow-medium-light"
        >
          <Link
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            href={link}
            className="relative  w-[80%] hover:underline  capitalize text-xl font-bold dark:text-light"
          >
            {title}
            <FramerImage
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
              style={{ x: x, y: y }}
              className="rounded-xl border border-black absolute hidden z-10 "
              ref={imgRef}
              alt={title}
              src={img}
              height={400}
              width={400}
              laz
              
            ></FramerImage>
          </Link>
          <span className="text-primary text-lg font-medium dark:text-primaryDark">
            {date}
          </span>
        </motion.article>
      </>
    );
  };

  return (
    <main className="mb-24 flex mx-32 flex-col items-center justify-between">
      <AnimatedText
        className="text-8xl pt-16 pb-16 dark:text-light"
        text="Words Can Change the World!"
      ></AnimatedText>
      <div className="grid gap-12 grid-flow-row grid-cols-12 items-center justify-between">
        <FeaturedArticle
          readtime="9"
          image={article1}
          para="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
          link=""
          title="Build a custom pagination component in reactjs from scratch"
        ></FeaturedArticle>

        <FeaturedArticle
          readtime="12"
          image={article2}
          para="Learn how to create stunning loading screens in React with 3 different methods. Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the user experience."
          link=""
          title="creating stunning loading screens in react: Build 3 types of loading screens"
        ></FeaturedArticle>
      </div>
      <div className="w-full flex flex-col pb-32 justify-center items-center pt-32 ">
        <h1 className="text-4xl font-bold text-dark pb-16 dark:text-light">
          All Articles
        </h1>

        <div className="flex flex-col items-center justify-center pt-8">
          <MovingImg
            title="form validation in reactjs: build a reusable custom hook for inputs and error handling"
            img={article1}
            link=""
            date="January 30, 2023"
          ></MovingImg>
        </div>
      </div>
    </main>
  );
}

export default Page;
