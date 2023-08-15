import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./components/AnimatedText";
import Hireme from "./components/Hireme";
import Profile from "../../public/images/profiles/profilepic1.png";
export default function page({ className }: any) {
  return (
    <>
      <div
        className={`${className} px-32 pt-5 dark:bg-dark  flex items-center justify-between w-full`}
      >
        <Image
          draggable="false"
          alt="profile image"
          className="w-[40%] h-auto"
          src={Profile}
          priority
          sizes="
          (max-width:768px) 100vw,
          (max-width:1200px) 40vw,
          40vw


          "
        ></Image>
        <div className="draggable='false' w-[50%] flex flex-col item-center self-center">
          <AnimatedText
            className="!text-left dark:text-light "
            text="Turning Vision Into Reality With Code And Design."
          ></AnimatedText>
          <p className="my-4 font-medium  dark:text-light">
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex items-start ">
            <Link
              draggable="false"
              target="_blank"
              className="hover:text-dark hover:bg-light hover:border-2 hover:border-dark flex items-center justify-center text-xl h-12 w-44 bg-black text-white rounded-md
              
                dark:text-dark  dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light"
              href="https://linkedin.com/in/MHBKhan"
            >
              <span>Resume 🔗</span>
            </Link>
            <Link
              draggable="false"
              target="_blank"
              className="pt-3 pl-20 dark:text-light underline  text-xl"
              href="https://wa.link/ubkjr3"
            >
              <span className="">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
