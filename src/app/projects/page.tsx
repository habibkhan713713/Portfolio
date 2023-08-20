import Link from "next/link";
import Image from "next/image";
import AnimatedText from "../components/AnimatedText";
import { GithubIcon } from "../components/Icons";
import Project1 from "../../../public/images/Projects/Project1.webp";
import Project2 from "../../../public/images/Projects/Project2.webp";
import Project3 from "../../../public/images/Projects/Project3.webp";

function Page() {
  const FeaturedProject = ({
    type,
    title,
    summary,
    img,
    link,
    github,
  }: any) => {
    return (
      <>
        <article className=" dark:bg-dark dark:text-light p-12 xl:px-6 md:w-[93%] md:px-auto md:px-0 box-border md:py-[0.5rem] w-full flex items-center justify-between rounded-3xl md:flex-col md:flex-start border border-solid border-dark bg-light dark:border-light shadow-solid-light">
          <Link
            className=" cursor-pointer rounded-lg overflow-hidden "
            target="_blank"
            href={link}
          >
            <Image
              className="hover:scale-105 transition-all ease-linear duration-100  w-[98%] mx-auto h-auto"
              alt={title}
              src={img}
              priority
              sizes="
          (max-width:768px) 100vw,
          (max-width:1200px) 50vw,
          50vw


          "
            ></Image>
          </Link>

          <div className="w-full xl:w-[60%] lg:w-[100%] md:pl-16 flex flex-col items-start justify-between pl-6 ">
            <span className="text-primary dark:text-primaryDark font-medium text-xl xl:text-lg lg:text-base">
              {type}
            </span>
            <Link
              className=" hover:underline underline-offset-2"
              target="_blank"
              href={link}
            >
              <h2 className="my-2 xl:my-1 w-full text-left text-4xl font-bold xl:text-2xl lg:text-base">
                {title}
              </h2>{" "}
            </Link>
            <p className="my-2 xl:mt-1 xl:mb-1 dark:text-slate-400 !font-medium xl:text-sm text-dark/80 lg:text-sm">
              {summary}
            </p>
            <div className="flex flex-row items-end xl:mt-2 justify-between ">
              <Link className="w-10 h-auto lg:w-8" target="_blank" href={github}>
                {" "}
                <GithubIcon className={""} />{" "}
              </Link>
              <Link
                className="dark:bg-light dark:text-dark rounded-lg ml-5 flex items-center justify-center w-40 h-10 bg-dark text-light xl:ml-12 lg:w-28 lg:h-8 lg:text-sm"
                target="_blank"
                href={link}
              >
                Visit Project
              </Link>
            </div>
          </div>
        </article>
      </>
    );
  };

  const Project = ({ type, title, img, link, github }: any) => {
    return (
      <>
        <article className="p-12 w-full flex flex-col items-center md:w-[91%] justify-between rounded-3xl  border border-solid border-dark bg-light dark:bg-dark shadow-solid dark:shadow-solid-light dark:border-light
        xl:p-6 xl:py-8 
        ">
          <Link
            className="w-full cursor-pointer rounded-lg overflow-hidden"
            target="_blank"
            href={link}
          >
            <Image
              className="w-full h-auto hover:scale-105 transition-all ease-linear duration-100"
              alt={title}
              src={img}
              sizes="(max-width:768px) 100vw,
              (max-width:1200px) 50vw,
              50vw"
            ></Image>
          </Link>

          <div className="w-full  flex flex-col items-start justify-between ">
            <span className="text-primary dark:text-primaryDark font-medium pt-2 text-lg xl:text-medium lg:text-base">
              {type}
            </span>
            <Link
              className=" hover:underline underline-offset-2 "
              target="_blank"
              href={link}
            >
              <h3 className="my-2 w-full text-left text-3xl dark:text-light font-bold xl:text-2xl lg:text-base">
                {title}
              </h3>{" "}
            </Link>

            <div className="flex flex-row items-center justify-between w-full">
              <Link
                className="text-dark font-bold underline-offset-2 underline dark:text-light lg:text-sm"
                target="_blank"
                href={link}
              >
                Visit Project
              </Link>
              <Link className="w-8 h-auto" target="_blank" href={github}>
                {" "}
                <GithubIcon className={"dark:bg-light dark:rounded-2xl"} />{" "}
              </Link>
            </div>
          </div>
        </article>
      </>
    );
  };

  return (
    <main className="px-32 pb-16 xl:px-16 md:px-2">
   
      <AnimatedText
        text="Imagination Trumps Knowledge!"
        className="text-8xl 2xl:text-4xl dark:text-light xl:px-0 xl:text-[4rem] lg:text-6xl lg:mt-4 xs:text-4xl"
      ></AnimatedText>
      <div className="mt-16 md:mt-6 grid grid-cols-12 gap-24 xl:gap-12 box-border md:w-[100vw] md:block">
        <div className="xl:col-span-12 3xl:col-span-12 2xl:col-span-12 lg:col-span-12  md:mt-4">
          <FeaturedProject
            title="Portfolio Site"
            link={""}
            summary="Simple Portfolio site built with Next Js , React Tailwind CSS and TypeScript."
            type="Featured Project"
            img={Project1}
            github=""
          ></FeaturedProject>
        </div>
        <div className="3xl:col-span-6 2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:w-[100vw] md:mt-8">
          <Project
            img={Project2}
            link=""
            title="E-commere Website"
            type="E-comeerce"
            github="/"
          ></Project>
        </div>

        <div className="3xl:col-span-6 2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:w-[100vw] md:mt-8">
          <Project
            img={Project3}
            link=""
            title="WhatsaApp Clone"
            type="Social Media"
            github="/"
          ></Project>
        </div>
      </div>
    </main>
  );
}


export default Page;
export const metadata = {
  title: "Habibullah Khan || Projects",
  generator: 'Next.js',
  applicationName: 'Habibullah Khan Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React',"Portfolio","Next","Habibullah Khan", 'JavaScript',"Web DEveloper","Web"],
  authors: [{ name: 'Habibullah Khan' }],
  creator: 'Habibullah Khan',
  publisher: 'Habibullah Khan',
}