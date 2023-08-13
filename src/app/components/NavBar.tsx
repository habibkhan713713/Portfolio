"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  FacebookIcon,
  DribbbleIcon,
  WhatsappIcon,
} from "./Icons";
import { usePathname } from "next/navigation";
export default function NavBar({className}:any) {
  const CustomLink = ({ href, title, className = "" }: any) => {
    const path = usePathname();

    return (
      <>
        <Link  draggable='false' className={`${className} relative group/link`} href={`${href}`}>
          {title}

          <span 
            className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 
          group-hover/link:w-full ease transition-[width] duration-300
          ${path === href ? "w-full" : "w-0"}
          `}
          >
            &nbsp;
          </span>
        </Link>
      </>
    );
  };



  return (
    <header className={`${className} w-full px-32 py-8 font-medium flex items-center justify-between`}>
      <nav>
        <CustomLink className="mr-4" href="/" title="Home"></CustomLink>
        <CustomLink className="mx-4" href="/about" title="About"></CustomLink>
        <CustomLink
          className="mx-4"
          href="/projects"
          title="Projects"
        ></CustomLink>
        <CustomLink
          className="ml-4"
          href="/articles"
          title="Articles"
        ></CustomLink>
      </nav>

      <nav  draggable='false' className="flex items-center flex-wrap justify-between">
        < motion.a  draggable='false'
          whileHover={{ y: -2 }}
          whileTap={{scale:0.9}}
          target="_blank"
          href="https://twitter.com/"
          className="w-6 mr-3"
        >
          <TwitterIcon className={``}></TwitterIcon>
        </motion.a>
        <motion.a className="w-6 mx-3"   draggable='false'
          whileHover={{ y: -2 }}
          whileTap={{scale:0.9}}
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100012141940720"
        >
          <FacebookIcon className={` `}></FacebookIcon>
        </motion.a>
        <motion.a className="w-6 mx-3"  draggable='false'
          whileHover={{ y: -2 }}
          whileTap={{scale:0.9}}
          target="_blank"
          href="https://github.com/habibkhan713713"
        >
          <GithubIcon className={` `}></GithubIcon>
        </motion.a>
        <motion.a className="w-6 mx-3"  draggable='false'
          whileHover={{ y: -2 }}
          whileTap={{scale:0.9}}
          target="_blank"
          href="https://linkedin.com/in/MHBKhan"
        >
          <LinkedInIcon className={` `}></LinkedInIcon>
        </motion.a>
        <motion.a className="w-6 ml-3"  draggable='false'
          whileHover={{ y: -2 }}
          whileTap={{scale:0.9}}
          target="_blank"
          href="https://wa.link/ubkjr3"
        >
          <WhatsappIcon className={` `}></WhatsappIcon>
        </motion.a>
      </nav>
      <div className="absolute top-2 left-[50%] translate-x-[-50%]">
        <Logo></Logo>
      </div>
    </header>
  );
}
