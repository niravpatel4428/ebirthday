"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import headerLogo from "../../public/img/headerLogo.png";
// import footervector from "@/public/img/footervector.svg";
import { usePathname } from "next/navigation";

const navLinksMobile = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Privacy-Policy", href: "/privacy" },
  { name: "Contact Us", href: "/contact" },
  // { name: "FAQs", href: "#faqs", },
];

const Header = () => {
  const [navLinks, setNavLinks] = useState([
    { name: "Home", href: "/", active: true },
    { name: "Pricing", href: "/", active: false },
    { name: "Privacy-Policy", href: "/privacy", active: false },
    { name: "Contact Us", href: "/contact", active: false },
    // { name: "FAQs", href: "#faqs", active: false },
  ]);
  const router = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (isCollapsed) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isCollapsed]);

  const handleClick = (index) => {
    setNavLinks((prevLinks) =>
      prevLinks.map((link, i) => ({
        ...link,
        active: i === index, // Set only the clicked link as active
      }))
    );
  };
  return (
    <header
      className={`border-b border-[#05123c1a] sticky top-0 z-50 bg-white ${
        isSticky ? "!sticky top-0 shadow-md" : ""
      } transition-all duration-500`}
    >
      <div className="container">
        <div className="flex justify-between items-center w-full h-[60px] md:h-20">
          {/* logo */}
          <div className="w-[65px] h-[58px] md:w-[90px] md:h-20  z-[99] absolute top-0 left-1/2 -translate-x-1/2">
            <Link href="/" target="_blank">
              <Image
                src={headerLogo}
                alt="logo"
                className="object-cover"
                loading="eager"
                priority
              />
            </Link>
          </div>

          {/* big screen links */}
          <div className={`hidden lg:block`}>
            <ul className="flex flex-row items-center gap-2 xl:gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={() => handleClick(index)}
                    className={`transition-all duration-500 p-[12px_14px] xl:p-[12px_20px] text-black text-base font-normal font-outfit capitalize hover:bg-[#0996ba1a] rounded-[12px] 
                      ${link.active ? "!bg-[#0996ba1a]" : ""}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* btn-group */}
          <div className="hidden lg:flex gap-4">
            <Link
              href="/"
              className="text-black text-base font-normal font-outfit p-[10px_30px] xl:p-[11px_30px] rounded-xl border border-[#1e1e1e80] bg-transparent hover:bg-[#1e1e1e] hover:text-white transition-all duration-500"
            >
              Sign up
            </Link>
            <Link
              href="/"
              className="text-white text-base font-normal font-outfit p-[10px_34px] xl:p-[11px_34px] rounded-xl border border-transparent bg-orange hover:bg-transparent hover:border-orange hover:text-orange transition-all duration-500"
            >
              Sign in
            </Link>
          </div>
          {/* log in btn */}
          {/* toggle button */}
          <button
            className="size-[36px] hover:opacity-75 relative z-[99] lg:hidden flex justify-center items-center ml-auto border-2 border-orange rounded-full"
            id="navbar-toggle"
            onClick={toggleCollapse}
          >
            <div className="w-fit">
              <span
                className={`${
                  isCollapsed
                    ? "rotate-45 top-[0.10rem] duration-500"
                    : "duration-500"
                } relative w-[14px] h-[2px] rounded-md bg-orange block max-[390px]:mb-[0.20rem] mb-1`}
              ></span>
              <span
                className={`${
                  isCollapsed ? "hidden" : "duration-500"
                } relative w-[7px] h-[2px] rounded-md bg-orange block mb-1`}
              ></span>
              <span
                className={`${
                  isCollapsed
                    ? "-rotate-45 -top-[0.25rem] duration-500"
                    : "duration-500"
                } relative w-[14px] h-[2px] rounded-md bg-orange block`}
              ></span>
            </div>
          </button>
        </div>
        {/* small screen menubar */}
        <div className={`${isCollapsed ? "block" : "lg:hidden"}`}>
          <div
            className={`${
              isCollapsed
                ? "top-0 right-0 h-full transition-all duration-500"
                : "top-0 right-[-100%] transition-all duration-500"
            } fixed top-0 overflow-auto bg-white backdrop-blur-[50px] h-full w-full z-50 lg:hidden`}
          >
            <div className="h-full w-full flex justify-center">
              <ul className="flex flex-col items-center justify-center gap-5 overflow-y-auto pt-32">
                {navLinksMobile.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="transition-all duration-500 p-[12px_14px] xl:p-[12px_20px] text-black text-base font-normal font-outfit capitalize hover:bg-[#0996ba1a] rounded-[12px]"
                      href={link.href}
                      onClick={() => {
                        setIsCollapsed(!isCollapsed);
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

                <li className="mt-3 mb-3">
                  <Link
                    href="/"
                    className="text-black text-base font-normal font-outfit p-[10px_30px] xl:p-[14px_30px] rounded-xl border border-[#1e1e1e80] bg-transparent hover:bg-[#1e1e1e] hover:text-white transition-all duration-500"
                  >
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-white text-base font-normal font-outfit p-[10px_34px] xl:p-[14px_34px] rounded-xl border border-transparent bg-orange hover:bg-transparent hover:border-orange hover:text-orange transition-all duration-500"
                  >
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
