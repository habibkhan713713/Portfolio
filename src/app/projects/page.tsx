import Link from "next/link";
import Image from "next/image";
import AnimatedText from "../components/AnimatedText";
import { GithubIcon } from "../components/Icons";
import Project1 from "../../../public/images/Projects/Project1.webp"
import Project2 from "../../../public/images/Projects/Project2.webp"
import Project3 from "../../../public/images/Projects/Project3.webp"
function Page(){
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
        <article className="p-12 w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-solid">
          <Link className="w-1/2 cursor-pointer rounded-lg overflow-hidden" target="_blank" href={link}>
            <Image className="hover:scale-105 transition-all ease-linear duration-100 w-full h-auto" alt={title} src={img}></Image>
          </Link>

          <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
            <span className="text-primary font-medium text-xl">{type}</span>
            <Link className=" hover:underline underline-offset-2" target="_blank" href={link}>
              <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>{" "}
            </Link>
            <p className="my-2 !font-medium text-dark/80">{summary}</p>
            <div className="flex flex-row items-start">
              <Link className="w-10 h-auto" target="_blank" href={github}>
                {" "}
                <GithubIcon className={""} />{" "}
              </Link>
              <Link className="rounded-lg ml-5 flex items-center justify-center w-40 h-10 bg-dark text-light " target="_blank" href={link}>
                Visit Project
              </Link>
            </div>
          </div>
        </article>
      </>
    );
  };

const Project = ({
  type,
  title,
  img,
  link,
  github
}: any) => {
  return (
    <>
      <article className="p-12 w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-solid">
        <Link className="w-full cursor-pointer rounded-lg overflow-hidden" target="_blank" href={link}>
          <Image className="w-full h-auto hover:scale-105 transition-all ease-linear duration-100" alt={title} src={img}></Image>
        </Link>

        <div className="w-full  flex flex-col items-start justify-between ">
          <span className="text-primary font-medium pt-2 text-lg">{type}</span>
          <Link className=" hover:underline underline-offset-2" target="_blank" href={link}>
            <h3 className="my-2 w-full text-left text-3xl font-bold">{title}</h3>{" "}
          </Link>
        
          <div className="flex flex-row items-center justify-between w-full">
            <Link className="text-dark font-bold underline-offset-2 underline" target="_blank" href={link}>
              Visit Project
            </Link>
            <Link className="w-8 h-auto" target="_blank" href={github}>
              {" "}
              <GithubIcon className={""} />{" "}
            </Link>
          </div>
        </div>
      </article>
    </>
  );}

  return (
    <main className="px-32 pb-16">
      <AnimatedText
        text="Imagination Trumps Knowledge!"
        className="text-8xl  "
      ></AnimatedText>
      <div className="mt-16 grid grid-cols-12 gap-24">
        <div className="col-span-12">
        <FeaturedProject 
         title = "Portfolio Site"
         link={""}
         summary="Simple Portfolio site built with Next Js , React Tailwind CSS and TypeScript."
         type="Featured Project"
         img={Project1}
         github=""
         

        
        ></FeaturedProject>

        </div>
        <div className="col-span-6"><Project
        img={Project2}
        link=""
        title="E-commere Website"
        type="E-comeerce"
        github = "/"

        
        ></Project></div>
       
       
        

       <div className="col-span-6"><Project
        img={Project3}
        link=""
        title="WhatsaApp Clone"
        type="Social Media"
        github = "/"

        
        ></Project></div>
       
       </div>

    </main>
  );
};

export default Page;

export const metadata = {
  title: "Habibullah Khan || Projects",
};
