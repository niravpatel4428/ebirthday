import React from "react";
import Link from "next/link";
import Image from "next/image";
import footervector from "@/public/img/footervector.svg";
import footervectormobile from "@/public/img/footervectormobile.svg";
const Footer = () => {
  return (
    <footer className="relative bg-blue pt-10 pb-10 xl:pb-[24px] ">
      <div className="absolute -top-10 md:-top-20 left-0 right-0 w-full">
        <Image
          src={footervector}
          alt="vectoe"
          className="w-full hidden md:block"
        />
        <Image
          src={footervectormobile}
          alt="vectoe"
          className="w-full block md:hidden"
        />
      </div>
      <div className="container">
        <div className="relative z-10">
          <div className="grid grid-cols-12 pb-10 border-b border-white/10">
            <div className="col-span-full lg:col-span-4 xl:col-span-4">
              <div className="max-lg:mb-10">
                <Link href="/" className="w-[108px] h-[74px] inline-block mb-4">
                  <Image
                    src="/img/fl.png"
                    alt="logo"
                    width="108"
                    height="74"
                    className="object-conatin h-full w-full"
                  />
                </Link>
                <p className="text-white/80 text-base font-onest font-normal tracking-[-0.16px] leading-[141%] w-full max-w-[306px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore{" "}
                </p>
                <div className="flex flx-row gap-4 mt-6">
                  <Link
                    href="/"
                    target="/"
                    className="size-[45px] flex justify-center items-center rounded-full bg-[#19254c] group"
                  >
                    <Image
                      src="/img/x.svg"
                      alt="x"
                      width={21}
                      height={21}
                      className="object-contain size-[21px] group-hover:brightness-50 transition-all duration-500"
                    />
                  </Link>
                  <Link
                    href="/"
                    target="/"
                    className="size-[45px] flex justify-center items-center rounded-full bg-[#19254c] group"
                  >
                    <Image
                      src="/img/facebook.svg"
                      alt="facebook"
                      width={21}
                      height={21}
                      className="object-contain size-[21px] group-hover:brightness-50 transition-all duration-500"
                    />
                  </Link>
                  <Link
                    href="/"
                    target="/"
                    className="size-[45px] flex justify-center items-center rounded-full bg-[#19254c] group"
                  >
                    <Image
                      src="/img/pintres.svg"
                      alt="pintres"
                      width={21}
                      height={21}
                      className="object-contain size-[21px] group-hover:brightness-50 transition-all duration-500"
                    />
                  </Link>
                  <Link
                    href="/"
                    target="/"
                    className="size-[45px] flex justify-center items-center rounded-full bg-[#19254c] group"
                  >
                    <Image
                      src="/img/insta.svg"
                      alt="insta"
                      width={21}
                      height={21}
                      className="object-contain size-[21px] group-hover:brightness-50 transition-all duration-500"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-full md:col-span-5 lg:col-span-4 lg:text-center">
              <div className="flex justify-between">
                <div className="w-fit lg:mx-auto lg:hidden">
                  <h6 className="text-white text-base md:text-lg xl:text-xl font-bold font-onest ">
                    Useful links
                  </h6>
                  <ul className="space-y-[10px] md:space-y-5 mt-3 md:mt-6 w-fit">
                    <li>
                      <Link
                        href="/"
                        className="text-white hover:text-orange hover:underline transition-all duration-500   text-sm md:text-base font-onest font-normal tracking-[-0.16px] leading-[141%] flex flex-row gap-3 items-center"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white hover:text-orange hover:underline transition-all duration-500   text-sm md:text-base font-onest font-normal tracking-[-0.16px] leading-[141%] flex flex-row gap-3 items-center"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white hover:text-orange hover:underline transition-all duration-500   text-sm md:text-base font-onest font-normal tracking-[-0.16px] leading-[141%] flex flex-row gap-3 items-center"
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-white hover:text-orange hover:underline transition-all duration-500   text-sm md:text-base font-onest font-normal tracking-[-0.16px] leading-[141%] flex flex-row gap-3 items-center"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-fit lg:mx-auto">
                  <h6 className="text-white text-base md:text-lg xl:text-xl font-bold font-onest ">
                    Contact
                  </h6>
                  <ul className="space-y-[10px] md:space-y-5 mt-3 md:mt-6 w-fit">
                    <li>
                      <Link
                        href="mailto:Example@gmail.com"
                        className="text-white hover:text-orange hover:underline transition-all duration-500 text-sm md:text-base font-onest font-normal tracking-[-0.16px] leading-[141%] flex flex-row gap-3 items-center"
                      >
                        <Image
                          src="/img/mail.svg"
                          alt="logo"
                          width="20"
                          height="20"
                          className="object-conatin size-5 "
                        />
                        Example@gmail.com
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="tel:1-849-757-1391"
                        className="text-white hover:text-orange hover:underline transition-all duration-500 text-sm md:text-base font-onest font-normal tracking-[-0.16px] leading-[141%] flex flex-row gap-3 items-center"
                      >
                        <Image
                          src="/img/tel.svg"
                          alt="logo"
                          width="20"
                          height="20"
                          className="object-conatin size-5 "
                        />
                        1-849-757-1391
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-full md:col-span-7 lg:col-span-4">
              <div className="w-full sm:max-w-[346px] max-md:mt-10 md:ml-auto">
                <h6 className="text-white text-xl font-bold font-onest mb-5">
                  Newsletter
                </h6>
                <form>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full text-white text-sm md:text-base font-onest font-normal p-[17px_24px] bg-[#F8FAFC]/10 rounded-xl outline-none placeholder:text-white/80"
                  />
                </form>
                <p className="font-onest font-normal text-white/80 text-sm mb-6 mt-3">
                  Be The First One To Get Latest Updates{" "}
                  <br className="max-md:hidden block" /> And Stay Connected
                </p>
                <button className="w-full capitalize text-white text-base font-onest font-semibold text-center rounded-[80px] bg-orange hover:bg-orange/70 transition-all duration-500 p-[14px_25px]">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col gap-3 justify-between items-center max-md:text-center pt-6">
            <p className="text-white text-base font-onest font-normal tracking-[-0.16px] leading-[141%]">
              @ 2024. All rights reserved.
            </p>
            <ul className="flex flex-row gap-6 last:after:hidden">
              <li className="relative block after:absolute after:content-['] after:bg-white/80 after:w-1 after:h-1 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:-right-[13px] last:after:hidden">
                <Link
                  href="/"
                  className="inline-block capitalize relative text-white/80 hover:text-orange text-base font-onest font-normal tracking-[-0.16px] leading-[141%] transition-all duration-500"
                >
                  Terms of Use
                </Link>
              </li>
              <li className="relative block after:absolute after:content-['] after:bg-white/80 after:w-1 after:h-1 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:-right-[13px] last:after:hidden">
                <Link
                  href="/"
                  className="inline-block capitalize relative text-white/80 hover:text-orange text-base font-onest font-normal tracking-[-0.16px] leading-[141%] transition-all duration-500"
                >
                  Refund Policy
                </Link>
              </li>
              <li className="relative block after:absolute after:content-['] after:bg-white/80 after:w-1 after:h-1 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:-right-[13px] last:after:hidden">
                <Link
                  href="/"
                  className="inline-block capitalize relative text-white/80 hover:text-orange text-base font-onest font-normal tracking-[-0.16px] leading-[141%] transition-all duration-500"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
