"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import fonty from "@/public/logo-red.svg";
import fonty_small from "@/public/logo_red_small.svg";
import Button_secondary from "../../Buttons/Button_secondary";
import Container from "../../Container";
import { Search, Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [logo, setLogo] = useState(fonty);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 926) {
        setLogo(fonty_small);
      } else {
        setLogo(fonty);
      }
    };

    // Initial check
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className='flex justify-between items-center px-4 backdrop-blur-lg bg-white bg-opacity-90 z-50'>
      <Container>
        <div className='flex justify-between items-center w-full'>
          <div className='md:w-fit w-full md:justify-start justify-between items-center flex gap-4 py-4 z-20'>
            <Link href={"/"}>
              <Image
                src={logo}
                alt='Logo'
                height={45} // Adjust the height as needed
                priority={true} // Optional: Load the logo image with priority
              />
            </Link>
            <div className='flex items-center gap-3'>
              <form
                action=''
                className='relative lg:max-w-[315px] max-w-[250px] w-full flex items-center'
              >
                <input
                  type='search'
                  name=''
                  id=''
                  placeholder='Search...'
                  className='w-full h-10 outline-none pl-4 pr-10 bg-gray-100 border text-gray-700 text-sm font-light rounded-full'
                />
                <button className='absolute right-3 text-gray-500 duration-300 hover:text-primary'>
                  <Search strokeWidth={1.5} size={20} />
                </button>
              </form>
              <div
                id='toggleMenu'
                className='md:hidden block text-gray-500 text-lg cursor-pointer'
              >
                <Menu strokeWidth={1.5} />
              </div>
            </div>
          </div>
          <div className='hidden md:flex items-center'>
            <ul className='w-fit md:flex text-gray-500 text-base py-[28px]'>
              <li>
                <a
                  href='/'
                  className='py-[26px] border-b-4 border-primary lg:px-6 px-3 bg-primary/5 text-primary'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/fonts'
                  className='py-[25px] lg:px-6 px-3 hover:text-primary'
                >
                  Browser Fonts
                </a>
              </li>
              <li>
                <a
                  href='/fonts/themes'
                  className='py-[25px] lg:px-6 px-3 hover:text-primary'
                >
                  Themes
                </a>
              </li>
              <li>
                <a
                  href='/authors'
                  className='py-[25px] lg:px-6 px-3 hover:text-primary'
                >
                  For Designers
                </a>
              </li>
            </ul>
            <Link href={'/sign-up'}>
            <Button_secondary>Sign Up</Button_secondary>
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
