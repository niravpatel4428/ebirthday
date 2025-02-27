"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import at from "../../../public/img/at.svg";
import lock from "../../../public/img/lock.svg";
import google from "../../../public/img/google.svg";
import loginlslide1 from "../../../public/img/loginlslide1.jpg";
import loginlslide2 from "../../../public/img/loginlslide2.jpg";
import yellow from "../../../public/img/login-yellow.svg";
import orange from "../../../public/img/login-orange.svg";

const slidesData = [
  {
    image1: loginlslide1,
    image2: loginlslide2,
    title: "Celebrate Beautiful Moments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis morbi pulvinar venenatis non.",
  },
  {
    image1: loginlslide2,
    image2: loginlslide1,
    title: "Celebrate Beautiful Moments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis morbi pulvinar venenatis non.",
  },
];

const SignInPage = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    dots: true,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    speed: 800,
  };
  return (
    <div className="bg-[#FAFAFB] w-full h-screen overflow-y-auto overflow-hidden flex">
      <div className="container h-[100%]">
        <div className="grid lg:grid-cols-2 h-[100%] gap-10 py-5">
          <div className="w-full lg:max-w-[370px] h-full flex flex-col justify-center pb-5">
            <div className="mb-6 md:mb-12 lg:mb-16 xl:mb-[76px]">
              <h1 className="font-fredoka text-blue text-[32px] font-semibold mb-[9px]">
                Welcome Back 👋
              </h1>
              <p className="text-[#52525B] text-xs font-onest font-normal leading-[165%] w-full max-w-[321px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                morbi pulvinar venenatis non.
              </p>
            </div>
            <form className="flex flex-col gap-[19px] mb-6 md:mb-12 lg:mb-16 xl:mb-[99px]">
              {/* inputs */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="text-black font-onest text-xs font-bold block mb-2"
                >
                  Email
                </label>
                <div className="relative ">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="text-blue text-base font-onest font-medium bg-white p-[15px_18px_15px_40px] w-full rounded-xl border border-[#D4D4D8] outline-none"
                  />
                  <Image
                    src={at}
                    alt="at"
                    className="object-contain size-4 absolute top-1/2 -translate-y-1/2 left-[18px]"
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="text-black font-onest text-xs font-bold block mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Password (min. 8 character)"
                    minLength={8}
                    className="text-blue text-base font-onest font-medium bg-white p-[15px_18px_15px_40px] w-full rounded-xl border border-[#D4D4D8] outline-none"
                  />
                  <Image
                    src={lock}
                    alt="lock"
                    className="object-contain size-4 absolute top-1/2 -translate-y-1/2 left-[18px]"
                  />
                </div>
              </div>
              {/* Remember Me */}
              {/* <div className="flex flex-row items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="size-[15px] accent-orange outline-[#D4D4D8] border-[#D4D4D8]"
                />
                <label
                  htmlFor="remember"
                  className="text-xs font-onest font-medium text-[#18181B]"
                >
                  Remember Me
                </label>
              </div> */}
                <Link href="/signup" className="rounded-xl text-center text-white font-onest text-sm !leading-normal font-bold bg-orange hover:bg-orange/80 transition-all p-[15px] w-full">
                  Sign in
                </Link>
              <div className="relative">
                <p className="relative flex justify-center items-center after:absolute after:content-[''] after:left-0 after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-full after:h-px after:bg-[#E4E4E7]">
                  <span className="text-[#A1A1AA] font-onest text-base font-normal relative z-[2] px-3 bg-[#FAFAFB]">
                    or
                  </span>
                </p>
              </div>
              <div className="w-full">
                <button className="rounded-xl text-[#18181B] font-onest text-sm !leading-none font-bold border border-[#E4E4E7] bg-[#F4F4F5] hover:bg-[#E4E4E708] transition-all p-[15px] w-full flex gap-2 items-center justify-center">
                  <Image src={google} alt="google" />
                  <span>Sign in with Google</span>
                </button>
              </div>
            </form>
            <div className="text-[#18181B] text-xs font-onest font-normal">
              Don&apos;t have any?{" "}
              <Link href="/signup" className="text-orange font-bold hover:underline">
                Create a free account
              </Link>{" "}
            </div>
          </div>
          <div className="hidden lg:flex w-full items-center xl:pl-7">
            <div className="bg-[#F4F4F5] w-full relative h-fit rounded-xl py-20 lg:px-10 xl:p-20 overflow-hidden login-slider">
              <Slider {...settings}>
                {slidesData.map((slide, index) => (
                  <div key={index} className="relative z-20">
                    <div className="relative w-[400px] h-[330px] mx-auto">
                      <Image
                        src={slide.image1}
                        alt={`slide-image-${index}-1`}
                        className="w-[290px] h-[200px] absolute top-0 left-0"
                      />
                      <Image
                        src={slide.image2}
                        alt={`slide-image-${index}-2`}
                        className="w-[290px] h-[200px] absolute bottom-0 right-0"
                      />
                    </div>
                    <div className="mt-12 pb-5 relative z-20">
                      <div className="w-full max-w-[330px] mx-auto text-center">
                        <h2 className="text-blue font-fredoka text-xl font-semibold !leading-none mb-5">
                          {slide.title}
                        </h2>
                        <p>{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <Image
                src={yellow}
                alt="icon"
                className="size-20 xl:size-[114px] absolute top-[7%] right-[9%] animate-float z-[1]"
              />
              <Image
                src={orange}
                alt="icon"
                className="size-20 xl:size-[140px] absolute left-[5%] bottom-[35%] animate-rotate z-[1]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
