import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./components/AnimatedText";
import Hireme from "./components/Hireme";
import Profile from "../../public/images/profiles/profilepic1.png";

export default function page({ className }: any) {
  return (
    <>
      <div
        className={`${className} px-32 xl:px-16 pt-5 dark:bg-dark lg:flex-col  flex items-center justify-between w-full md:px-4`}
      >
        
        <Image
          draggable="false"
          alt="profile image"
          className="w-[80%] lg:hidden h-auto md:w-[100%] md:inline-block border md:border-1 2xl:border-0 border-light rounded-lg"
          src={Profile}
          priority
          sizes="
          (max-width:768px) 100vw,
          (max-width:1200px) 50vw,
          50vw


          "
        ></Image>
        <div className="draggable='false' w-[50%] md:w-[100%] lg:w-[100%] lg:mt-10 flex flex-col item-center self-center ">
          <AnimatedText
            className="!text-left dark:text-light  2xl:text-[3rem] xl:!text-[3rem] lg:text-8xl md:!text-2xl font-mono md:font-[900] "
            text="Turning Vision Into Reality With Code And Design."
          ></AnimatedText>


          <p className="my-4 lg:text-center lg:mt-6 lg:text-xl font-medium  dark:text-light xl:font-normal 2xl:pl-4 md:text-lg md:my-2 " >
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <div className="flex items-center lg:w-[100%] lg:mt-10 lg:justify-around 2xl:pl-4 md:mt-4">
            <Link
              draggable="false"
              target="_blank"
              className="hover:text-dark xl:w-36 xl:h-10 hover:bg-light hover:border-2 hover:border-dark flex items-center justify-center text-xl h-12 w-44 bg-black text-white rounded-md
              
                dark:text-dark  dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:w-32 md:h-8 md:text-base"
              href="https://linkedin.com/in/MHBKhan"
            >
              <span>Resume 🔗</span>
            </Link>
            <Link
              draggable="false"
              target="_blank"
              className="pt-3 pl-20 dark:text-light underline xl:text-lg text-xl"
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
