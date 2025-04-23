import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Inter, Epilogue } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const epilogueSans = Epilogue({
  variable: "--font-epilogue-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fonty – Discover and Download Free Fonts for Designers & Creators",
  description: "Free Commercial Use",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${interSans.variable} ${epilogueSans.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
