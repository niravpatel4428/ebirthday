"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import btext from "../../../public/img/banner-text.png";
import banner1 from "../../../public/img/banner1.jpg";
import banner2 from "../../../public/img/banner2.jpg";
import banner3 from "../../../public/img/banner3.jpg";
import banner4 from "../../../public/img/banner4.jpg";
import banner5 from "../../../public/img/banner5.jpg";
import bBlue from "../../../public/img/banner-start-blue.svg";
import bOrange from "../../../public/img/banner-start-orange.svg";
import bPink from "../../../public/img/banner-start-pink.svg";
import bLoop from "../../../public/img/banner-loop.svg";
import bg from "../../../public/img/banner-bg.svg";
import bgm from "../../../public/img/banner-bg-mobile.svg";

import Link from "next/link";
const Banner = () => {
  return (
    <div id="home" className="relative text-center pt-20 pb-[46px] md:pb-[110px]">
      <div className="absolute left-0 right-0 bottom-0 w-full h-fit">
        <Image src={bg} alt="image" className="w-full h-[184px] md:h-fit md:min-h-52 object-cover hidden md:block" />
        <Image src={bgm} alt="image" className="w-full h-[184px] md:h-fit md:min-h-52 object-cover block md:hidden" />
      </div>
      <div className="relative z-10">
        {/* Title */}
        <div className="w-full flex justify-center">
          <h1 className="font-fredoka font-semibold text-[32px] md:text-[40px] lg:text-[44px] xl:text-[55px] text-blue text-center w-full max-w-[397px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[999px]">
            Celebrate{" "}
            <Image
              src={btext}
              alt="icon"
              className="object-contain w-[115px] inline-block -mt-[75px]"
            />{" "}
            Special Moments with Personalized{" "}
            <span className="text-sky">Birthday</span> Pages
          </h1>
        </div>
        {/* Button */}
        <div className="mt-10 lg:mt-7 mb-10 lg:mb-[60px] flex justify-center">
          <Link
            href="/"
            className="p-[14px_20px] lg:p-[16px_21px] font-outfit text-white text-base font-semibold bg-orange border border-transparent rounded-2xl hover:bg-transparent hover:border-orange hover:text-orange transition-all duration-500"
          >
            Create Your Page Now
          </Link>
        </div>
        {/* Slider */}
        <div className="slider-banner overflow-hidden">
          <Marquee pauseOnHover={false} direction="left">
            {banners.map((banner, index) => (
              <div
                key={index}
                className="rounded-[9px] md:rounded-2xl xl:rounded-[20px] w-[164px] md:w-[200px] xl:w-[239px] banner-slide-inner border-none outline-none mr-3 md:mr-4 xl:mr-6 "
              >
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  className="object-contain rounded-[20px]"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* images */}
      <Image
        src={bBlue}
        alt="icon"
        className="object-contain w-[40px] absolute top-[76px] left-[7.5%] animate-float hidden md:block"
      />
      <Image
        src={bOrange}
        alt="icon"
        className="object-contain w-[14px] absolute top-[82px] right-[11.5%] animate-twinkle hidden md:block"
      />
      <Image
        src={bPink}
        alt="icon"
        className="object-contain w-[66px] absolute top-[304px] right-[8%] md:right-[24.5%] animate-pulse-custom "
      />
      <Image
        src={bLoop}
        alt="icon"
        className="object-contain w-[102px] absolute top-[223px] left-[4%] md:left-[12%] animate-rotate"
      />
    </div>
  );
};

const banners = [
  { src: banner1, alt: "Banner 1" },
  { src: banner2, alt: "Banner 2" },
  { src: banner3, alt: "Banner 3" },
  { src: banner4, alt: "Banner 4" },
  { src: banner5, alt: "Banner 5" },
  { src: banner1, alt: "Banner 1" },
  { src: banner2, alt: "Banner 2" },
  { src: banner3, alt: "Banner 3" },
  { src: banner4, alt: "Banner 4" },
  { src: banner5, alt: "Banner 5" },
  { src: banner1, alt: "Banner 1" },
  { src: banner2, alt: "Banner 2" },
  { src: banner3, alt: "Banner 3" },
  { src: banner4, alt: "Banner 4" },
  { src: banner5, alt: "Banner 5" },
  { src: banner1, alt: "Banner 1" },
  { src: banner2, alt: "Banner 2" },
  { src: banner3, alt: "Banner 3" },
  { src: banner4, alt: "Banner 4" },
  { src: banner5, alt: "Banner 5" },
];

export default Banner;
