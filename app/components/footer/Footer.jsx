import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-red.svg";
import Container from "../Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const linkSections = [
    {
      title: "Explore",
      links: [
        { label: "Featured Fonts", href: "#" },
        { label: "Trending", href: "#" },
        { label: "Font Pairings", href: "#" },
        { label: "Designer Spotlight", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "License Guide", href: "#" },
        { label: "Support", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Privacy", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-secondary text-white pt-20 pb-8 px-4">
      <Container>
        {/* Main Content */}
        <div className="flex flex-col justify-between gap-20 pb-16">
          {/* Brand Column */}
          <div className="sm:w-[550px] mx-auto w-full text-center">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Fonty Logo"
                width={120}
                height={20}
                className="hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>
            <p className="mt-6 text-gray-400 leading-relaxed">
              The premier marketplace for 100% commercial-use fonts. Empowering
              designers with cutting-edge typography since 2024. Discover,
              license, and create with our curated collection.
            </p>
          </div>

          {/* Links Grid */}
          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {linkSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="sm:w-[315px] w-full">
              <h3 className="text-lg font-semibold mb-4 text-primary">
                Stay Updated
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Subscribe to our newsletter for the latest updates and news.
              </p>
              <form className="flex sm:flex-row flex-col sm:gap-0 gap-2 w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white text-sm text-gray-700 outline-none focus:border-primary duration-500 p-2 sm:rounded-l-lg sm:rounded-none rounded-lg"
                  required
                />
                <button
                  type="submit"
                  className="inline-block sm:rounded-r-lg sm:rounded-none rounded-lg py-2 px-4 bg-primary hover:bg-primary/80 duration-300 text-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20" />

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <small className="text-gray-400">
            © {currentYear} Fonty. All rights reserved.
          </small>

          <div className="flex gap-4 text-xs">
            <Link
              href="/agreement"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Font Upload Agreement
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;