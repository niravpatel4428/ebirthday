"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LandingLayout from "../../Layouts/LandingLayout ";
import privacy from "../../../public/img/privacy.svg";
import map from "../../../public/img/map.jpg";
import bannerLeft from "../../../public/img/banner-start-blue.svg";
import bannerLoop from "../../../public/img/banner-loop.svg";
import bannerPink from "../../../public/img/banner-start-pink.svg";
import bannerOrange from "../../../public/img/banner-start-orange.svg";
import works from "../../../public/img/works-top.svg";
import mail from "../../../public/img/mail-orange.svg";
import phone from "../../../public/img/phone-orange.svg";
import address from "../../../public/img/address-orange.svg";
import mailsmall from "../../../public/img/mail-small.svg";
import facebooksmall from "../../../public/img/facebook-small.svg";
import instagram from "../../../public/img/instagram.svg";
import tictok from "../../../public/img/tictok.svg";
import youtube from "../../../public/img/youtube.svg";
import vpn from "../../../public/img/vpn.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  return (
    <LandingLayout>
      <div className="relative bg-[#F4F4F5] pt-16 md:pt-20 pb-10 md:pb-24">
        <div className="relative z-10">
          <div className="container text-center">
            <p className="relative mx-auto w-fit font-onest uppercase text-orange text-xs md:text-sm leading-[178.571%] font-semibold pt-4 px-[25px]">
              HOW CAN WE HELP
              <Image
                src={works}
                alt="img"
                className="w-[24px] absolute top-0 right-0"
              />
            </p>
            <h1 className="font-fredoka font-semibold text-[32px] md:text-[40px] lg:text-[44px] xl:text-[55px] text-blue">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="absolute -bottom-5 md:-bottom-9 left-0 right-0">
          <Image src={privacy} alt="img" className="w-full" />
        </div>
        <Image
          src={bannerLeft}
          alt="bannerLeft"
          className="object-contain w-[40px] absolute top-4 left-[7.5%] animate-float"
        />
        <Image
          src={bannerLoop}
          alt="bannerLeft"
          className="object-contain w-[102px] absolute top-12 left-[3%] animate-float max-md:hidden"
        />
        <Image
          src={bannerOrange}
          alt="bannerLoop"
          className="object-contain w-6 absolute top-5 md:top-8 right-[5%] md:right-[11.5%] animate-rotate"
        />
        <Image
          src={bannerPink}
          alt="bannerPink"
          className="object-contain w-[66px] absolute top-[60px] right-[4%] animate-pulse-custom max-md:hidden"
        />
      </div>
      <div className="relative mt-16 lg:mt-24 md:pt-20 sm:pb-36">
        <div className="container">
          <div className="block mb-11">
            <p className="relative font-onest uppercase text-orange text-xs md:text-sm leading-[178.571%] font-semibold mb-[6px]">
              HOW CAN WE HELP
            </p>
            <h4 className="text-blue text-[32px] md:text-4xl lg:text-[42px] xl:text-[45px] !leading-tight font-fredoka font-semibold">
              Reach Out To Us For <br /> Any Query
            </h4>
          </div>
          <div className="flex max-lg:flex-col-reverse justify-between gap-8">
            <div className="w-full lg:max-w-[564px]">
              <div className="flex flex-col gap-[18px]">
                <div className="rounded-[14px] bg-[#F7F7F9] p-4 lg:p-[19px_21px]">
                  <div className="flex flex-row gap-3">
                    <div className="bg-white rounded-full flex justify-center items-center size-[51px]">
                      <Image src={mail} alt="icon" className="w-[22px]" />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <span className="text-[#0E2222] font-onest text-base md:text-lg/none font-bold">
                        Email Address
                      </span>
                      <Link
                        href="mailto:am.domain@gmail.com"
                        className="inline-block text-[#05123CCC] text-sm md:text-base font-onest font-normal leading-[141%] hover:underline"
                      >
                        am.domain@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="rounded-[14px] bg-[#F7F7F9] p-4 lg:p-[19px_21px]">
                  <div className="flex flex-row gap-3">
                    <div className="bg-white rounded-full flex justify-center items-center size-[51px]">
                      <Image src={phone} alt="icon" className="w-[22px]" />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <span className="text-[#0E2222] font-onest text-base md:text-lg/none font-bold">
                        Contact Number
                      </span>
                      <Link
                        href="tel:+01 (234) 567 890"
                        className="inline-block text-[#05123CCC] text-sm md:text-base font-onest font-normal leading-[141%] hover:underline"
                      >
                        +01 (234) 567 890
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="rounded-[14px] bg-[#F7F7F9] p-4 lg:p-[19px_21px]">
                  <div className="flex flex-row gap-3">
                    <div className="bg-white rounded-full flex justify-center items-center size-[51px]">
                      <Image src={address} alt="icon" className="w-[22px]" />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                      <span className="text-[#0E2222] font-onest text-base md:text-lg/none font-bold">
                        Contact Number
                      </span>
                      <p className="inline-block text-[#05123CCC] text-sm md:text-base font-onest font-normal leading-[141%]">
                        Grönkulla 1, 598 73 Some Place
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="bg-[#F7F7F9] max-[429px]:rounded-[20px] rounded-[40px] md:rounded-[20px] max-lg:rounded-[10px] xl:rounded-[74px] flex flex-wrap flex-row gap-3 p-[15px] w-fit">
                  {socialMediaLinks.map((social, index) => (
                    <li
                      key={index}
                      className="bg-white hover:bg-[#F6F6F9] border border-transparent hover:border-[#FFF] rounded-[50px] size-[50px] flex justify-center items-center"
                    >
                      <Link href={social.href} className="inline-block">
                        <Image
                          src={social.src}
                          alt="icon"
                          className="size-[22px]"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full lg:max-w-[676px]">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-[25px] py-4 lg:py-[21px] border border-black/20 rounded-[20px] max-lg:rounded-[10px] focus:outline-none !text-blue/80 placeholder:text-blue/80 text-base lg:text-xl font-onest font-normal"
                />

                <PhoneInput
                  country={"se"}
                  containerClass="relative !rounded-[20px] max-lg:rounded-[10px] !h-auto"
                  inputClass="!w-full !pl-14 !px-[25px] !h-auto py-4 lg:!py-[21px] !border !border-gray-300 !rounded-[20px] max-lg:rounded-[10px] !focus:outline-none !text-blue/80 placeholder:text-blue/80 text-base lg:!text-xl !font-onest !font-normal"
                  enableSearch={true}
                  buttonClass="!rounded-[20px_0px_0_20px]"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-[25px] py-[21px] border border-black/20 rounded-[20px] max-lg:rounded-[10px] focus:outline-none !text-blue/80 placeholder:text-blue/80 text-base lg:text-xl font-onest font-normal"
                />
                <textarea
                  placeholder="Enter your message here..."
                  className="w-full px-[25px] py-[21px] border border-black/20 rounded-[20px] max-lg:rounded-[10px] focus:outline-none !text-blue/80 placeholder:text-blue/80 text-base lg:text-xl font-onest font-normal"
                  rows="6"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-orange text-white text-base md:text-lg lg:text-xl xl:text-[22px] py-[15px] lg:py-[19px] px-8 rounded-[50px] font-onest font-bold hover:bg-orange/70 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-[71px] max-sm:-mx-4">
            <div className="h-[345px] md:h-[390px] lg:h-[430px] xl:h-[497px] w-full">
                <Image src={map} alt="map" className="object-cover w-full h-full rounded-[30px] max-sm:rounded-none" />
            </div>
          </div>
        </div>
      </div>

    </LandingLayout>
  );
};

export default ContactUs;

const socialMediaLinks = [
  { src: mailsmall, alt: "Mail", href: "/" },
  { src: facebooksmall, alt: "Facebook", href: "/" },
  { src: instagram, alt: "Instagram", href: "/" },
  { src: tictok, alt: "TikTok", href: "/" },
  { src: youtube, alt: "YouTube", href: "/" },
  { src: vpn, alt: "VPN", href: "/" },
];
