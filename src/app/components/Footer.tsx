import Link from "next/link";
import Hireme from "./Hireme";
export default function Footer({ className }: any) {
  return (
    <footer
      className={`${className} xl:text-sm dark:text-light font-mono font-bold text-lg flex items-center xl:px-16 justify-between w-full px-32 border-t-2 border-t-dark py-1
       lg:flex-col lg:text-lg md:text-base md:flex-col md:px-4`}
    >
      <Hireme></Hireme>
      <span >{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      <div className="flex items-center  xl:text-sm md:pt-2" >
        Built with <span className="lg:text-base text-2xl dark:text-green-600 text-primary px-2">&#9825;</span> by&nbsp;<Link className="underline xl:text-sm" href="https://linkedin.com/in/MHBKhan" target="_blank">Habibullah Khan</Link>
      
      </div>
      <Link target="_blank" className="underline xl:text-sm md:pt-2" href="https://wa.link/ubkjr3">
        Say Hi
      </Link>
    </footer>
  );
}
