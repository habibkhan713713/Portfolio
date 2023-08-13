import Link from "next/link";
import Hireme from "./Hireme";
export default function Footer({ className }: any) {
  return (
    <footer
      className={`${className} font-mono font-bold text-lg flex items-center justify-between w-full px-32 border-t-2 border-t-dark py-1
    `}
    >
      <Hireme></Hireme>
      <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
      <div className="flex items-center" >
        Built with <span className=" text-2xl text-primary px-2">&#9825;</span> by&nbsp;<Link className="underline" href="https://linkedin.com/in/MHBKhan" target="_blank">Habibullah Khan</Link>
      
      </div>
      <Link target="_blank" className="underline" href="https://wa.link/ubkjr3">
        Say Hi
      </Link>
    </footer>
  );
}
