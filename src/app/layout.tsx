import "./globals.css";
import type { Metadata } from "next";
import { fontMont, sanSwah, inter, roboto } from "./fonts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./globals.css";
export const metadata: Metadata = {
  title: "Habibullah Khan - portfolio",
  viewport: { width: "device-width", initialScale: 1 },
  icons: "",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontMont.variable} ${roboto.variable} ${sanSwah.variable} ${inter.variable}`}
    >
      <body className="select-none flex items-center text-dark w-full min-h-[98vh]  flex-col box-border">
        <NavBar className="grow-0"></NavBar>
        <main className={`bg-light w-full grow border-box `}>{children}</main>
        <Footer className="grow-0"></Footer>
      </body>
    
    </html>
  );
}
