
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import profile from "../../../public/images/profiles/profilepic2.png";
import AnimatedNumbers from "../components/AnimatedNumbers";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";

function Page() {
  return (
    <main className="flex w-full px-32 xl:px-16 flex-col mb-32 items-center justify-center md:px-4">
    
      <AnimatedText
        text="Passion Fuels Purpose!"
        className="pt-20  !text-8xl mb-16 dark:text-light 2xl:mb-8 2xl:pt-6 xl:pt-4 xl:mb-4 xl:text-6xl lg:!text-6xl lg:mx-8 md:mx-2 md:!text-4xl md:pt-1"
      ></AnimatedText>
      <div className="w-full grid grid-cols-8 gap-8 ">
        <div className="col-span-8 flex flex-col items-start xl:justify-between md:order-2 3xl:col-span-4 2xl:col-span-4 xl:col-span lg:col-span-4 md:col-span-8">
          <h2 className="mb-4 text-lg font-bold uppercase opacity-75 text-dark dark:text-slate-400 xl:text-base md:text-center w-[100%]">
            Biography
          </h2>
          <p className="font-medium font-mono dark:text-light xl:text-sm md:font-bold">
            Hi, I&apos;m <span className="font-bold xl:text-sm">Habibullah Khan</span>, web
            developer a passion for creating beautiful, functional, and
            user-centered digital experiences. With 0.4 years of experience in
            the field. I am always looking for new and innovative ways to bring
            my clients&apos; visions to life.
          </p>
          <p className="font-medium my-4 font-mono dark:text-light xl:text-sm md:font-bold">
            I believe that design is about more than just making things look
            pretty – it&apos;s about solving problems and creating intuitive,
            enjoyable experiences for users.
          </p>
          <p className="font-medium font-mono dark:text-light xl:text-sm lg:hidden  md:inline-block md:font-bold">
            Whether I&apos;m working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>

        </div>
        
        <div
          className="shadow-solid col-span-3 relative h-max border-2 border-solid rounded-2xl border-black 
    bg-light p-8 dark:bg-dark dark:border-light dark:shadow-solid-light xl:p-6 md:col-span-8 box-border 3xl:col-span-4 2xl:col-span-4 xl:col-span lg:col-span-4"
        >
          <Image
            draggable="false"
            className="bg-dark dark:bg-black rounded-2xl md:order-1 xl:order-10"
            alt="Habibullah Khan"
            src={profile}
            priority
          sizes="
          (max-width:768px) 100vw,
          (max-width:1200px) 50vw,
          33vw


          "
          ></Image>
        </div>

        <p className="font-medium font-mono dark:text-light xl:text-sm hidden md:hidden  lg:block col-span-8">
            Whether I&apos;m working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>

        <div className="col-span-8 flex items-center flex-row justify-between dark:text-light md:order-4">
          <div className="flex flex-col items-center justify-center md:!text-base">
            <span className="font-bold text-7xl inline-block xl:text-6xl md:!text-2xl">
              <AnimatedNumbers value={1}></AnimatedNumbers>+
            </span>
            <h2 className="capitalize  text-xl font-medium text-dark/75 dark:text-slate-400 xl:text-xl md:!text-base">
              Satisfied Clients
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-7xl inline-block xl:text-6xl md:!text-2xl">
              <AnimatedNumbers value={4}></AnimatedNumbers>+
            </span>
            <h2 className="capitalize  text-xl font-medium text-dark/75 dark:text-slate-400 xl:text-xl md:!text-base">
              projects completed
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-7xl inline-block xl:text-6xl md:!text-2xl">
              <AnimatedNumbers value={1}></AnimatedNumbers>+
            </span>
            <h2 className="capitalize  text-xl font-medium text-dark/75 dark:text-slate-400 xl:text-xl md:!text-base">
              Years of experience
            </h2>
          </div>
        </div>
      </div>

      <Skills></Skills>
      <Experience></Experience>
      <Education></Education>
    </main>
  );
}

export default Page;

export const metadata = {
  title: "Habibullah Khan || About Page",
};
