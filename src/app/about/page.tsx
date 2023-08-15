
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import profile from "../../../public/images/profiles/profilepic2.png";
import AnimatedNumbers from "../components/AnimatedNumbers";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";

function Page() {
  return (
    <main className="flex w-full px-32 flex-col mb-32 items-center justify-center">
      <AnimatedText
        text="Passion Fuels Purpose!"
        className="pt-20 !text-8xl mb-16 dark:text-light"
      ></AnimatedText>
      <div className="w-full grid grid-cols-8 gap-16">
        <div className="col-span-5 flex flex-col items-start justify-start">
          <h2 className="mb-4 text-lg font-bold uppercase opacity-75 text-dark dark:text-slate-400">
            Biography
          </h2>
          <p className="font-medium font-mono dark:text-light">
            Hi, I&apos;m <span className="font-bold">Habibullah Khan</span>, web
            developer a passion for creating beautiful, functional, and
            user-centered digital experiences. With 0.4 years of experience in
            the field. I am always looking for new and innovative ways to bring
            my clients&apos; visions to life.
          </p>
          <p className="font-medium my-4 font-mono dark:text-light">
            I believe that design is about more than just making things look
            pretty – it&apos;s about solving problems and creating intuitive,
            enjoyable experiences for users.
          </p>
          <p className="font-medium font-mono dark:text-light">
            Whether I&apos;m working on a website, mobile app, or other digital
            product, I bring my commitment to design excellence and
            user-centered thinking to every project I work on. I look forward to
            the opportunity to bring my skills and passion to your next project.
          </p>
        </div>
        <div
          className="shadow-solid col-span-3 relative h-max border-2 border-solid rounded-2xl border-black 
    bg-light p-8 dark:bg-dark dark:border-light dark:shadow-solid-light"
        >
          <Image
            draggable="false"
            className="bg-dark dark:bg-black rounded-2xl"
            alt="Habibullah Khan"
            src={profile}
          ></Image>
        </div>

        <div className="col-span-8 flex items-center flex-row justify-between dark:text-light">
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-7xl inline-block">
              <AnimatedNumbers value={1}></AnimatedNumbers>+
            </span>
            <h2 className="capitalize  text-xl font-medium text-dark/75 dark:text-slate-400">
              Satisfied Clients
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-7xl inline-block">
              <AnimatedNumbers value={4}></AnimatedNumbers>+
            </span>
            <h2 className="capitalize  text-xl font-medium text-dark/75 dark:text-slate-400">
              projects completed
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold text-7xl inline-block">
              <AnimatedNumbers value={1}></AnimatedNumbers>+
            </span>
            <h2 className="capitalize  text-xl font-medium text-dark/75 dark:text-slate-400">
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
