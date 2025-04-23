import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-red.svg";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className='bg-secondary text-white pt-20 pb-8 px-4'>
      <Container>
        {/* Main Content */}
        <div className='flex flex-col lg:flex-row justify-between gap-12 pb-16'>
          {/* Brand Column */}
          <div className='max-w-md'>
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt='Fonty Logo'
                width={120}
                height={20}
                className='hover:scale-105 transition-transform duration-300'
                priority
              />
            </Link>
            <p className='mt-6 text-gray-400 leading-relaxed'>
              The premier marketplace for 100% commercial-use fonts. 
              Empowering designers with cutting-edge typography since 2024. 
              Discover, license, and create with our curated collection.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Github
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">
                Facebook
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-20'>
            {/* Explore */}
            <div>
              <h3 className='text-lg font-semibold mb-4 text-primary'>Explore</h3>
              <ul className='space-y-3 text-sm'>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Featured Fonts</Link></li>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Trending</Link></li>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Font Pairings</Link></li>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Designer Spotlight</Link></li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className='text-lg font-semibold mb-4 text-primary'>Explore</h3>
              <ul className='space-y-3 text-sm'>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Featured Fonts</Link></li>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Trending</Link></li>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Font Pairings</Link></li>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Designer Spotlight</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className='text-lg font-semibold mb-4 text-primary'>Resources</h3>
              <ul className='space-y-3 text-sm'>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Blog</Link></li>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Tutorials</Link></li>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>License Guide</Link></li>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Support</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className='text-lg font-semibold mb-4 text-primary'>Company</h3>
              <ul className='space-y-3 text-sm'>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>About Us</Link></li>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Careers</Link></li>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Terms</Link></li>
                <li><Link href="#" className='text-gray-400 hover:text-white transition-colors duration-300'>Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-700/50'></div>

        {/* Bottom Bar */}
        <div className='pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <small className='text-gray-400'>
            © {new Date().getFullYear()} Fonty. All rights reserved.
          </small>
          
          <div className="flex gap-4 text-xs">
            <Link href="#" className='text-gray-400 hover:text-primary transition-colors duration-300'>
              Font Upload Agreement
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className='text-gray-400 hover:text-primary transition-colors duration-300'>
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;