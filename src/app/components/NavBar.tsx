"use client";
import Script from "next/script";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  FacebookIcon,
  DribbbleIcon,
  WhatsappIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
export default function NavBar({ className }: any) {
  const CustomLink = ({ href, title, className = "" }: any) => {
    const path = usePathname();

    return (
      <>
        <Link
          draggable="false"
          className={`${className} relative group`}
          href={`${href}`}
          onClick={handleOpen}
        >
          {title}

          <span
            className={`h-[1px] inline-block  absolute left-0 -bottom-0.5 
          group-hover:w-full ease transition-[width] duration-300   
          ${path === href ? "w-full" : "w-0"}  ${
              mode === "" ? "bg-dark" : mode === "dark" ? "bg-light" : "bg-dark"
            } 
          `}
          >
            &nbsp;
          </span>
        </Link>
      </>
    );
  };

  const [mode, setMode] = useThemeSwitcher();
  const[isOpen,setIsOpen] = useState(false);
  const handleOpen = ()=>{
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    if (window.localStorage.getItem("theme") === "dark") {
      setMode("dark");
    }
  }, []);
  return (
    <header
      className={`${className} w-full px-32 py-8 font-medium flex items-center justify-between xl:px-16 relative`}
    >
      <button className="3xl:hidden 2xl:hidden lg:flex flex-col justify-center items-center" onClick={handleOpen}>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? "rotate-45 translate-y-2 ":"" } ease-in-out duration-300 transition-all`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"} ease-in-out duration-500 transition-all`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? "-rotate-45 -translate-y-1":""} ease-in-out duration-300 `}></span>
      </button>
     <div className={`xl:hidden 2xl:hidden 3xl:hidden lg:block  absolute  z-50 top-[100%] md:left-[2vw]  ${isOpen?"lg:block":"lg:hidden"}
     
     `}>
     <div className={`z-30 flex flex-col items-center justify-around bg-dark/40 transition-all duration-1000 ease-in-out w-[75vw] h-0   mx-[5vw] 
     backdrop-blur-lg rounded-lg 
     border border-spacing-1 border-red-400 ${isOpen ? "h-[70vh] ":"" } md:!mx-[0vw] md:w-[96vw] md:!ml-0`}

   
     
     >

     <nav  className="flex flex-col h-[40%] items-center justify-between">
        <CustomLink   className="mr-4 lg:mr-0 active:text-red-500"  href="/" title="Home"></CustomLink>
        <CustomLink className="mx-4 lg:mx-0 active:text-red-500" href="/about" title="About"></CustomLink>
        <CustomLink
          className="mx-4 active:text-red-500 lg:mx-0"
          href="/projects"
          title="Projects"
        ></CustomLink>
        <CustomLink
          className="ml-4 active:text-red-500 lg:ml-0"
          href="/articles"
          title="Articles"
        ></CustomLink>
      </nav>

      <nav
        draggable="false"
        className="flex items-center flex-wrap justify-between "
      >
        <motion.a
          draggable="false"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://twitter.com/"
          className="w-6 mr-3"
        >
          <TwitterIcon className={``}></TwitterIcon>
        </motion.a>
        <motion.a
          className="w-6 mx-3"
          draggable="false"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100012141940720"
        >
          <FacebookIcon className={` `}></FacebookIcon>
        </motion.a>
        <motion.a
          className="w-6 mx-3"
          draggable="false"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://github.com/habibkhan713713"
        >
          <GithubIcon className={` `}></GithubIcon>
        </motion.a>
        <motion.a
          className="w-6 mx-3"
          draggable="false"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://linkedin.com/in/MHBKhan"
        >
          <LinkedInIcon className={` `}></LinkedInIcon>
        </motion.a>
        <motion.a
          className="w-6 ml-3"
          draggable="false"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://wa.link/ubkjr3"
        >
          <WhatsappIcon
            className={` `}
            bg={mode === "dark" ? "dark" : "white"}
          ></WhatsappIcon>
        </motion.a>

        <button
          className={`ml-5 flex items-center justify-center p-1 rounded-full ${
            mode === "dark" ? "bg-dark" : "bg-light"
          }`}
          onClick={() => {
            setMode(mode === "dark" ? "light" : "dark");
          }}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark "} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
     </div>

     </div>
       



      <nav className="lg:hidden">
        <CustomLink className="mr-4 active:text-red-500" href="/" title="Home"></CustomLink>
        <CustomLink className="mx-4 active:text-red-500" href="/about" title="About"></CustomLink>
        <CustomLink
          className="mx-4 active:text-red-500"
          href="/projects"
          title="Projects"
        ></CustomLink>
        <CustomLink
          className="ml-4 active:text-red-500"
          href="/articles"
          title="Articles"
        ></CustomLink>
      </nav>

      <nav
        draggable="false"
        className="flex items-center flex-wrap justify-between lg:hidden"
      >
        <motion.a
          draggable="false"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://twitter.com/"
          className="w-6 mr-3"
        >
          <TwitterIcon className={``}></TwitterIcon>
        </motion.a>
        <motion.a
          className="w-6 mx-3"
          draggable="false"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100012141940720"
        >
          <FacebookIcon className={` `}></FacebookIcon>
        </motion.a>
        <motion.a
          className="w-6 mx-3"
          draggable="false"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://github.com/habibkhan713713"
        >
          <GithubIcon className={` `}></GithubIcon>
        </motion.a>
        <motion.a
          className="w-6 mx-3"
          draggable="false"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://linkedin.com/in/MHBKhan"
        >
          <LinkedInIcon className={` `}></LinkedInIcon>
        </motion.a>
        <motion.a
          className="w-6 ml-3"
          draggable="false"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://wa.link/ubkjr3"
        >
          <WhatsappIcon
            className={` `}
            bg={mode === "dark" ? "dark" : "white"}
          ></WhatsappIcon>
        </motion.a>

        <button
          className={`ml-3 flex items-center justify-center p-1 rounded-full ${
            mode === "dark" ? "bg-dark" : "bg-light"
          }`}
          onClick={() => {
            setMode(mode === "dark" ? "light" : "dark");
          }}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark "} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className="absolute top-2 left-[50%] translate-x-[-50%]">
        <Logo></Logo>
      </div>
    </header>
  );
}
