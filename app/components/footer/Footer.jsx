import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-red.svg";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className='bg-secondary text-white pt-10 mt-10'>
      <Container>
        <div className='flex flex-col justify-center items-center py-20'>
          <div className='flex flex-col items-center justify-center'>
            <Link href={"/"}>
              <Image
                src={logo}
                alt='Logo'
                width={150} // Adjust the width as needed
                height={50} // Adjust the height as needed
                className='' // Optional: Add margin to the right of the logo
                priority={true} // Optional: Load the logo image with priority
              />
            </Link>
            <p className='mt-10 max-w-[750px] m-auto text-center text-gray-400'>
              The marketplace for 100% commercial-use fonts. Empowering
              designers since 2024. Fonty offers a clean, user-friendly
              interface, advanced search filters, and font previews to help
              designers find the perfect typeface.
            </p>
          </div>

          <ul className='flex flex-wrap justify-center gap-6 mt-10'>
            <li>
              <a
                href='#home'
                className='text-sm text-gray-400 hover:text-primary duration-300'
              >
                Featured fonts
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='text-sm text-gray-400 hover:text-primary duration-300'
              >
                Designer hub
              </a>
            </li>
            <li>
              <a
                href='#products'
                className='text-sm text-gray-400 hover:text-primary duration-300'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#projects'
                className='text-sm text-gray-400 hover:text-primary duration-300'
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='text-sm text-gray-400 hover:text-primary duration-300'
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <div className='text-center mt-8 text-gray-400 border-t border-primary/20 py-6'>
          <small className='text-gray-400'>
            &copy; {new Date().getFullYear()} Fonty. All rights reserved.{" "}
          </small>
          |
          <small className='text-gray-400'>
            {" "}
            Font Upload{" "}
            <Link className='text-primary' href={"/"}>
              {" "}
              Agreement
            </Link>
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
