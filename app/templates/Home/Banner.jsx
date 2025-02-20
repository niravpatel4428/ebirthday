"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import btext from "@/public/img/banner-text.png";
import banner1 from "@/public/img/banner1.jpg";
import banner2 from "@/public/img/banner2.jpg";
import banner3 from "@/public/img/banner3.jpg";
import banner4 from "@/public/img/banner4.jpg";
import banner5 from "@/public/img/banner5.jpg";
import Link from "next/link";
const Banner = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    arrows: true,
    centerPadding: "210px",
    slidesToShow: 3,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 2000,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1999,
        settings: {
          slidesToShow: 5,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 3,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 3,
          centerPadding: "140px",
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
          centerMode: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2.5,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 429,
        settings: {
          slidesToShow: 2.5,
          centerPadding: "40px",
        },
      },
    ],
  };
  return (
    <div className="relative text-center pt-20">
      <div className="w-full flex justify-center">
        <h1 className="font-fredoka font-semibold text-[32px] md:text-[40px] lg:text-[44px] xl:text-[55px] text-blue text-center w-full max-w-[999px]">
          Celebrate{" "}
          <Image
            src={btext}
            alt="icon"
            className="object-contain w-[115px] inline-block -mt-[75px]"
          />{" "}
          Special Moments with Personalized <span>Birthday</span> Pages
        </h1>
      </div>

      <div className="mt-7 mb-[60px] flex justify-center">
        <Link
          href="/"
          className="p-[16px_21px] font-outfit text-white text-base font-semibold bg-orange border border-transparent rounded-2xl hover:bg-transparent hover:border-orange hover:text-orange transition-all duration-500"
        >
          Create Your Page Now
        </Link>
      </div>

      <div className="slider-banner overflow-hidden">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div
              key={index}
              className="rounded-[9px] md:rounded-2xl xl:rounded-[20px] banner-slide-inner border-none outline-none" 
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                className="object-contain rounded-[20px]"
              />
            </div>
          ))}
        </Slider>
      </div>
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
