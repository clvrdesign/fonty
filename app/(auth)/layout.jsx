import { Inter, Sora } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import logo from "@/public/logo-white.svg";
import Link from "next/link";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const soraSans = Sora({
  variable: "--font-sora-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fonty – Discover and Download Free Fonts for Designers & Creators",
  description: "Free Commercial Use",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${interSans.variable} ${soraSans.variable}`}>
        <div className="flex">
          <div className="w-2/6">
          {children}
          </div>
          <div className='relative w-4/6 h-screen bg-primary'>
            <Link href={'/'} className="absolute top-10 left-10">
              <Image
                height={50}
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
